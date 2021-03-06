var sDate = new Date();

function replaceAll(str, find, dest) {
	var re = new RegExp(find, 'g');
	return str.replace(re, dest);
}


function arrayContains(arrayData, destData) {
	var containsData = false;
	for(var index in arrayData) {
		if (arrayData[index] === destData) {
			containsData = true;
			break;
		}
	}
	return containsData;
}

function isJsonObjectEmpty(dataSource) {
	var isEmpty = true;
    if (dataSource) {
        isEmpty = (0 == Object.keys(dataSource).length);
    }
    return isEmpty;
}


function shuffleArray(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;
  // While there remain elements to shuffle...
  	while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function shuffleJsonObject(jsonObj) {
	var jsonKeys = Object.keys(jsonObj);
    var randomJsonKeys = shuffleArray(jsonKeys);
    var randomJsonObj = {};
    var key;
    for (var index in jsonKeys) {
        key = jsonKeys[index];
        randomJsonObj[key] =  jsonObj[key];
    }
    return randomJsonObj;
}


function splitJSONObject(jsonObj, limitSize) {
	var currentSize = 0;
    var smallerJsonObj = {};
    for (var key in jsonObj) {
        if (currentSize < limitSize){
            smallerJsonObj[key] = jsonObj[key];
            currentSize ++;
        } else {
        	break;
        }
        
    }
    return smallerJsonObj;
}

function getRandomBoolean() {
	return !(+new Date()%2)
}


function mergeJsonObject(jsonObj1, jsonObj2) {
	var data = {}
	for (var key in jsonObj1) {
		data[key] = jsonObj1[key];
	}

	for (var key in jsonObj2) {
		data[key] = jsonObj2[key];
	}
	return data;
}

function sortJsonObject(data) {
    var sortedData = {};
    var keys = Object.keys(data);
    var sortedKeys = keys.sort(function(a, b){
  		return  getUTF8ByteLength(a) - getUTF8ByteLength(b); // ASC -> a - b; DESC -> b - a
	});
    for (var index in sortedKeys) {
        var key = sortedKeys[index];
        sortedData[key] = data[key];
    }
    return sortedData;
}


function getUTF8ByteLength(s) {
    return unescape(encodeURIComponent(s)).length;
}


function makeDisplayContent(dataSource, prefix, suffix) {
	var displayContent = prefix + "<ul>";
    for (var item in dataSource) {
			var linkContent = '<a href="' + dataSource[item] + '" target="_blank">' + item + '</a>';
			var listItemContent = '<li>' + linkContent + '</li>';
			displayContent = displayContent + listItemContent;
    }
    displayContent = displayContent + "</ul>" + suffix;
		//console.info(displayContent);
		return displayContent;
}

function displaySection(shouldDisplay, inDebugMode, dataSource, prefix, suffix) {
	if (shouldDisplay && inDebugMode) {
    	if (window.location.host == 'droidyue.com') {
            shouldDisplay = false;
        }
    }
    
    if (shouldDisplay) {
		if (!isJsonObjectEmpty(dataSource)) {
				var content = makeDisplayContent(dataSource, prefix, suffix);
				document.write(content);
		}
	}
}


function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

function isMobile() {
	return detectmob();
}


function onlyForDesktop() {
    return !detectmob();
}


function isIPad() {
	return navigator.userAgent.match(/iPad/i);
}

function isTablet() {
	return window.screen.width >= 960;
}


function isDesktop() {
	return !detectmob();
}

function forAllDevices() {
    return true;
}


function getHost(url) {
	var parser = document.createElement('a');
    parser.href = url;
    return parser.hostname;
}


function isSelfRefer () {
	var isSelfRefer = false;
    var refer = document.referrer;
    if (refer) {
       isSelfRefer = (getHost(refer) == window.location.hostname);
    }
    return isSelfRefer;
}



function isMac() {
	return navigator.platform.toUpperCase().indexOf('MAC') != -1;
}


function isLinux() {
	return navigator.userAgent.match(/Linux/i);
}


function isChrome() {
	var isChromium = window.chrome,
    vendorName = window.navigator.vendor,
    isOpera = window.navigator.userAgent.indexOf("OPR") > -1;
	if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false) {
		return true;
	} else { 
		return false;
	}
}


function isFirefox() {
	return navigator.userAgent.search("Firefox") > -1;
}


function isWeixinBrowser(){
  return (/MicroMessenger/i).test(window.navigator.userAgent);
}


function isRetina() {
	return window.devicePixelRatio > 1;
}

function isWeekends() {
    var currentDay = sDate.getDay();
	return currentDay == 6 || currentDay == 0 ;
}

function isWorkingDay() {
	return !isWeekends();
}

function isWorkingTime() {
	var isWorking = false;
	var myDate = new Date();
	var currentDay = myDate.getDay();
	if (isWorkingDay()) {
		var currentHour = myDate.getHours();
		if (currentHour > 9 && currentHour < 12) {
			isWorking = true;
		} else if (currentHour > 13 && currentHour < 19) {
			isWorking = true;
		}
	}
	return isWorking;
}

function checkExpired(year, month, day) {
    var myDate = new Date();
    var deadTime = myDate.setFullYear(year, month -1, day);
    return Date.now() > deadTime;
}


var sIsSelfRefer = isSelfRefer();
var sIsMac = isMac();
var sIsDesktop = isDesktop();
var sIsRetina = isRetina();
var sIsMacRetina = sIsMac && sIsRetina;
var sIsNotWorkingTime = ! isWorkingTime();
