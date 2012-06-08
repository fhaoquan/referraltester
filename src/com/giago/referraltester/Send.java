package com.giago.referraltester;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.os.AsyncTask;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class Send extends Activity {

	private static final String REFERRAL_URL_EXTRA = "referralUrl";
	private Button send;
	private EditText packageName;
	private EditText campaignSource;
	private EditText campaignMedium;
	private EditText campaignTerm;
	private EditText campaignContent;
	private EditText campaignName;
	private Map<String, String> properties;
	// put into logcat so we can work out where events start
	private String basemarker="!RefTestMarker!";
	private String marker="";
	private SharedPreferences mSharedPreferences;
	private LogReader mLogReader;

	public static final Intent getIntent(Context context, String  referralUrl) {
		Intent i = getIntent(context);
		i.putExtra(REFERRAL_URL_EXTRA, referralUrl);
		return i;
	}

	private static final String getReferralUrl(Intent i) {
		return i.getStringExtra(REFERRAL_URL_EXTRA);
	}

	public static final Intent getIntent(Context context) {
		return new Intent(context, Send.class);
	}

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		mSharedPreferences=PreferenceManager.getDefaultSharedPreferences(this);

		setContentView(R.layout.send_activity);

		packageName = (EditText)findViewById(R.id.package_name);
		campaignSource = (EditText)findViewById(R.id.campaign_source);
		campaignMedium = (EditText)findViewById(R.id.campaign_medium);
		campaignTerm = (EditText)findViewById(R.id.campaign_term);
		campaignContent = (EditText)findViewById(R.id.campaign_content);
		campaignName = (EditText)findViewById(R.id.campaign_name);

		String referralUrl = getReferralUrl(getIntent());
		if(!TextUtils.isEmpty(referralUrl)) {
			String referrer = getReferrer(referralUrl);
			properties = getMap(referrer);
			String id = getId(referralUrl);
			if(!TextUtils.isEmpty(id)) {
				properties.put("id", id);
			}
			setValue(packageName, "id");
			setValue(campaignSource, "utm_source");
			setValue(campaignMedium, "utm_medium");
			setValue(campaignTerm, "utm_term");
			setValue(campaignContent, "utm_content");
			setValue(campaignName, "utm_campaign");
		} else {
			packageName.setText(mSharedPreferences.getString("id", ""));
			campaignSource.setText(mSharedPreferences.getString("utm_source", ""));
			campaignMedium.setText(mSharedPreferences.getString("utm_medium", ""));
			campaignTerm.setText(mSharedPreferences.getString("utm_term", ""));
			campaignContent.setText(mSharedPreferences.getString("utm_content", ""));
			campaignName.setText(mSharedPreferences.getString("utm_campaign", ""));
		}

		send = (Button)findViewById(R.id.send);
		send.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				sendBroadcastIntent();
			}
		});

	}

	private void sendBroadcastIntent() {
		Intent i = new Intent("com.android.vending.INSTALL_REFERRER");
		String id = getId();
		if(checkId(id))
			return;

		if (mLogReader!=null) {
			mLogReader.cancel(true);
			mLogReader=null;
		}

		// save values
		mSharedPreferences.edit()
		.putString("id", packageName.getText().toString())
		.putString("utm_source", campaignSource.getText().toString())
		.putString("utm_medium", campaignMedium.getText().toString())
		.putString("utm_term", campaignTerm.getText().toString())
		.putString("utm_content", campaignContent.getText().toString())
		.putString("utm_campaign", campaignName.getText().toString())
		.commit();

		i.setPackage(id);
		String referrer = generateReferrer();
		i.putExtra("referrer", referrer);

		TextView tv=(TextView)findViewById(R.id.status_info);
		tv.setText("Referrer string is "+referrer+"\n");
		PackageManager pm=getPackageManager();
		List<ResolveInfo> receivers=pm.queryBroadcastReceivers(i, 0);
		if(receivers==null || receivers.size()==0) {
			tv.append(">>> No broadcast receivers found! Nothing is likely to happen\n");
		} else {
			tv.append(String.format("%d receivers found.", receivers.size()));
			for(ResolveInfo ri : receivers) {
				tv.append(String.format("Package: %s  Class: %s  Exported: %s  Enabled: %s\n", ri.activityInfo.packageName,
						ri.activityInfo.name, ri.activityInfo.exported, ri.activityInfo.enabled));
			}
			if(receivers.size()>1) {
				tv.append(" Only the first will be called to match Market/Store/Finsky behaviour.");
				i.setClassName(receivers.get(0).activityInfo.packageName,
						receivers.get(0).activityInfo.name);
			}
			tv.append("\n");
		}
		// yes it is a lie but any further along means race conditions
		tv.append("Broadcast sent - monitoring logcat\n\n");
		marker=basemarker+Long.toHexString((System.currentTimeMillis()/100)%999983);
		mLogReader=new LogReader(tv);
		mLogReader.execute();
		Log.d(marker, marker);
		sendBroadcast(i);
	}

	private class LogReader extends AsyncTask<Void, String, Void> {

		LogReader(TextView tv) {
			textview=tv;
		}

		TextView textview;

		// various irrelevant noise that appears in logcat
		final String[] gunk={
				"Audio", "WifiStateMachine", "HierarchicalStateMachine", "ProvisionLog",
				"InputReader", "InputDispatcher", "Keyguard", "SurfaceFlinger",
				"CLIPBOARD", "BounceScrollRunnableDefault", "alsa_", "WindowOrientationListener",
				"Power", "TabletStatus", "Wifi", "TODmobile", "DigitalClock", "BatteryService"
		};
		protected Void doInBackground(Void... params) {
			Process process;
			try {
				process = Runtime.getRuntime().exec("logcat");
			} catch (IOException e) {
				publishProgress(">>> Failed to execute logcat: "+Log.getStackTraceString(e)+"\n");
				return null;
			}
			long start=0;
			BufferedReader br = new BufferedReader(new InputStreamReader(process.getInputStream()));
			String line;
			boolean seenmarker=false;
			try {
				readline:
					while ((line = br.readLine()) != null) {
						if(isCancelled()) {
							break;
						}
						if(!seenmarker) {
							if(line.contains(marker)) {
								seenmarker=true;
								start=System.currentTimeMillis();
							}
							continue;
						}
						if(line.startsWith("D/dalvik")) {
							continue;
						}
						// filter out a whole lot of junk messages, especially ones about input being sent to
						// our text view
						for(String g: gunk) {
							if(line.substring(2).startsWith(g)) {
								continue readline;
							}
						}
						publishProgress(line+"\n");
						if(System.currentTimeMillis()-start>10000) {
							publishProgress("10 seconds have elapsed\n");
							break;
						}
					}
			} catch (IOException e) {
				if(!isCancelled()) {
					publishProgress(">>> Reading from logcat failed: "+Log.getStackTraceString(e)+"\n");
				}
			}
			process.destroy();
			if(!isCancelled()) {
				publishProgress(">>> Stopping logcat\n");
			}
			return null;
		}

		@Override
		protected void onProgressUpdate(String ...progress) {
			textview.append(progress[0]);
		}

		protected void onPostExecute(Void...voids) {
			textview.append(">>> Done\n");
		}
	}

	private boolean checkId(String id) {
		if(TextUtils.isEmpty(id)) {
			Toast.makeText(this, "The field package name is mandatory", Toast.LENGTH_LONG).show();
			return true;
		}
		return false;
	}

	private String getId() {
		return packageName.getText().toString();
	}

	private String generateReferrer() {
		StringBuilder sb = new StringBuilder();

		append(sb, campaignSource, "utm_source");
		append(sb, campaignMedium, "utm_medium");
		append(sb, campaignTerm, "utm_term");
		append(sb, campaignContent, "utm_content");
		append(sb, campaignName, "utm_campaign");
		return sb.toString();
	}

	private void append(StringBuilder sb, EditText edit, String parameter) {
		String text = edit.getText().toString();
		if(text.length()>0) {
			if(sb.length()>0) {
				sb.append("&");
			}
			sb.append(parameter).append("=").append(text);
		}
	}

	private void setValue(EditText t, String key) {
		if(properties.containsKey(key)) {
			t.setText(properties.get(key));
		}
	}

	@Override
	protected void onResume() {
		super.onResume();
	}

	private Map<String, String> getMap(String paramString) {
		String[] arrayOfString1 = paramString.split("&");
		HashMap<String, String> localHashMap = new HashMap<String, String>();
		for (String pair : arrayOfString1) {
			String[] entry = pair.split("=");
			if (entry.length != 2) {
				break;
			}
			localHashMap.put(entry[0], entry[1]);
		}
		return localHashMap;
	}

	private String getReferrer(String url) {
		try {
			URI uri = new URI(url);
			String referrer = uri.getQuery().split("referrer=")[1];
			return referrer;
		} catch (URISyntaxException e) {
			return null;
		}
	}

	private String getId(String url) {
		try {
			URI uri = new URI(url);
			String query = uri.getQuery();

			String[] arrayOfString1 = query.split("&");
			String id = arrayOfString1[0].split("=")[1];

			return id;
		} catch (Exception e) {
			return null;
		}
	}

}