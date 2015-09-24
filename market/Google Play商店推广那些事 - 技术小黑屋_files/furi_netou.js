function isDottedIPv4(s) {
 var match = s.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
 return match != null &&
        match[1] <= 255 && match[2] <= 255 &&
        match[3] <= 255 && match[4] <= 255;
}

function shouldShowRecommend(currentReferHost) {
	var interestedRefers = [
    	'jwss.cc'
        ,'www.jwss.cc'
        ,'iglgoo.com'
        ,'sdk.tools.sinaapp.com'
        ,'g.wen.lu'
        ,'glgoo.com'
        ,'int.search.myway.com'
        ,'guge.io'
        ,'search.52393.com'
        ,'gl.randomk.org'
        ,'gotosearch.info'
        ,'nan.so'
        ,'duliziyou.com'
        ,'g4w.me'
        ,'googke.me'
        ,'search.nan.so'
        ,'xiexingwen.com'
        ,'iustudio.science'
        , '127.0.0.1:4000'
        ,'sepu.org'
        ,'g.eeload.com'
        ,'gool.wang'
        ,'s.lightss.org'
        ,'www.googto.com'
        ,'so.ittinx.com'
        ,'www.guge163.com'
        ,'www.xilesou.com'
    
    ];
    
    return (-1 != interestedRefers.indexOf(currentReferHost) || isDottedIPv4(currentReferHost))
}





function getReferrerHost() {
    var referHost;
    if (document.referrer) {
    	referHost = document.referrer.split('/')[2];	
    }
    return referHost;
}

function isNetworkAdsEnabled() {
	return false && isChrome();
}


function getNetworkAdsDisplayContent() {
	return '<br/><br/><a href="http://honx.in/_VaJXxWf4PSiXm2ck">曲径走了，红杏还能出墙，你懂得，开通后多送10天科学上网时间</a>';
}

function displayNetworkAds(){
	var referHost = getReferrerHost();
    if (isNetworkAdsEnabled() && referHost && shouldShowRecommend(referHost)) {
        document.write(getNetworkAdsDisplayContent());
    }
}

displayNetworkAds();
