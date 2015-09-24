function shouldDisplayBlogAds() {
    
    return true && sIsSelfRefer && sIsDesktop;  
}

function makeBlogAdsPrefix() {
	return '';
}

function makeBlogAdsSuffix() {
	return '';
}

function isBlogAdsInDebug() {
	return false;
}


function makeBlogAdsDataSource() {
    var data = {};
    
    data['手头有职位？内推这几位Web和Android开发成为你的中国好同事吧！'] = 'http://zhuanlan.zhihu.com/magilu/20234035';
    
    //data = appendMacData(data);
    //data = appendTimeRelatedData(data);
    //data = appendJawboneAds(data);
    //data = addCupAds(data);
    //data = sortJsonObject(data);
    //data = appendLinuxAds(data);
    //data = appendPaiduAds(data);
    
    //data = sortJsonObject(data);
    return data;
}

function appendLinuxAds(data) {
    if (!isLinux()) {
    	return data;
    }
    data['生命不息，折腾不止，利用树莓派造无人机'] = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DDmpqqj8atJocQipKwQzePOeEDrYVVa64pRe%2F8jaAHci5VBFTL4hn2VUMaKeG0ZgHNGaA%2Fv7qa0TM3gYQjCL89qULerPwKfMIwRKDNIG1Ob4CJ2RfhpsDEnTTSGC05Du9ml8jlmaFfwLuvmCvtQXKYyGFCzYOOqAQ';
	return data;
}


function addCupAds(data) {
    var cupUrl = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Dvc3vCwJ4xPMcQipKwQzePDAVflQIoZepLKpWJ%2Bin0XJRAdhuF14FMeaCrTmWePYWMMgx22UI05ZvRUYbRlHU7OsSDvD9jGaL5ryjCDjdIrHG%2Bjvr39SJroxodiO%2Bbyu%2BIYULNg46oBA%3D';
    data['程序猿要多喝水，用什么杯子才有逼格'] = cupUrl;
	return data;
}



function shouldShowPillowAds() {
    var shouldShow = false;
	var myDate = new Date();
    var currentHour = myDate.getHours();
    var currentMinutes = myDate.getMinutes();
    if (currentHour == 12) {
    	shouldShow = (currentMinutes > 30);
    } else if (currentHour == 13) {
    	shouldShow = (currentMinutes < 15);
    }
    return shouldShow;
}


function appendJawboneAds(data) {
    var myDate = new Date();
    var currentHour = myDate.getHours();
    var preferNightHours = [23];
    var preferMorningHours = [5,6,7,8]
    var jawboneUrl = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DM6OXiRubmQ4cQipKwQzePOeEDrYVVa64pRe%2F8jaAHci5VBFTL4hn2Q21hW00rJ5NDOz%2BQ0BmwbzM3gYQjCL89qULerPwKfMIwRKDNIG1Ob5elowfopx0H8sE1ZqHgyIqj2aSe2Y4kltNCfRLCq0yEXEqY%2Bakgpmw';
    if (arrayContains(preferMorningHours, currentHour)) {
    	data['昨晚睡眠怎样？尝试用Jawbone UP3记录睡眠情况吧'] = jawboneUrl;
    } else if (arrayContains( preferNightHours, currentHour)) {
    	data['别休息太晚，试一试Jawbone UP3记录睡眠质量'] = jawboneUrl;
    }
    return data;
    
}


function appendPaiduAds(data) {
    if (checkExpired(2015, 10, 13)) {
        return data;
    }
    
    var currentHour = sDate.getHours();
    var preferedHours = [0,1,2];
    if (arrayContains(preferedHours, currentHour)) {
        var url = 'http://ai.taobao.com/album/detail.htm?preview=true&albumId=31623&pid=mm_58471937_7778121_26116191';
        data['还在熬夜呢，试一试这些排毒的食物'] = url; 
    }
	return data;
}



function appendTimeRelatedData(data) {
    if (shouldShowPillowAds()) {
        var pillowUrl = 'http://s.click.taobao.com/t?e=m%3D2%26s%3Dzjz33IRqj6ocQipKwQzePOeEDrYVVa64pRe%2F8jaAHci5VBFTL4hn2fonwfwGnQ8yD%2FHdSRms18jM3gYQjCL89qULerPwKfMIwRKDNIG1Ob6R%2Fo5w35y3Bg3qMxbPBfvlddbW5Wblq5rIDkCbk5bDScYOae24fhW0';
    	data['午休继续用手臂当枕头？太痛苦了吧'] = pillowUrl;
    }
    
    
    if (isWeekends()) {
    	var xboxUrl = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DYqRO1Rfaov0cQipKwQzePOeEDrYVVa64Qih%2F7PxfOKS5VBFTL4hn2X7BOnX0umzUYFMBzHxYoCPM3gYQjCL89qULerPwKfMIwRKDNIG1Ob7cAkcj9pZG3swMHV%2FCenxVQc4fM4SkruX%2BecaeU0a94sYOae24fhW0';
    	data['周末不出去？那就试一试Xbox体感游戏健身吧'] = xboxUrl;
    }
    
	return data;
}


function appendMacData(data) {
    if (!sIsMac) {
    	return data;
    }
    
    var url = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D84Ix5h76wB%252B6k0Or%252B%252BH4tP4J1srd9yfeZCWWJYFETQiLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2fmvgKdG5sSNVx%252B%252FAzxIkXw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
	data['原来这才是正确使用MacBook的姿势，符合人体工学原理'] = url;
    
    if (sIsMacRetina) {
    	var monitorUrl = "http://s.click.taobao.com/t?e=m%3D2%26s%3Dy2ONFnnYl8QcQipKwQzePOeEDrYVVa64pRe%2F8jaAHci5VBFTL4hn2ReTrFDzoxUfWiFs%2FjHb%2BcjM3gYQjCL89qULerPwKfMIwRKDNIG1Ob5Hbunv6xALaWvfkVsSpcCcEOE5%2BTiiP1GVxy5J0%2FOZ7SGFCzYOOqAQ";
        //data['Retina屏太小了，改用大显示器撸代码'] = monitorUrl;
    }
    return data;
}