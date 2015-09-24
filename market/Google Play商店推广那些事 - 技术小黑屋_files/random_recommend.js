function makeRandomRecommendPrefix() {
	return '<h2>干货推荐：</h2>';
}

function makeRandomRecommendSuffix() {
	return '';
}


function showDisplayRandomRecommend() {
    var shouldDisplay = true;
    /*if (isSelfRefer() ) {
        shouldDisplay = isMobile();
    }*/
	return shouldDisplay;
}

function isRandomRecommendInDebug() {
	return false;
}

function makeRecommendPost(bestPosts) {
    if (!showDisplayRandomRecommend()) {
    	return;
    }
	var randomTitles = [];
    for (var post in bestPosts) {
   		randomTitles.push(post);
    }
    
    var recommendPosts = {};
    var recommendLimitSize = 7;
    var currentUrl = window.location.href;
    var count = 0;
    while(count < recommendLimitSize) {
    	var randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];
        randomTitles.pop(randomTitle);
        randomUrl = bestPosts[randomTitle];
        if (currentUrl != randomUrl && !recommendPosts.hasOwnProperty(randomTitle)) {
        	recommendPosts[randomTitle] = appendRandomRecommendMark(randomUrl);
            count++;
        }
    }
    recommendPosts = addSpecialRecommendPosts(recommendPosts); 
    return sortRecommendPosts(recommendPosts);
}

function addSpecialRecommendPosts(recommendPosts) {
    if (!(+new Date()%2)) {
		recommendPosts['程序员必读的六本书'] = 'http://droidyue.com/blog/2015/07/04/six-books-every-programer-must-read/';
    } else {
    	recommendPosts['Java程序员必读的9本书'] = 'http://droidyue.com/blog/2014/11/30/java-programmer-must-read-these-9-books/';
    }
    return recommendPosts;
}


function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function appendRandomRecommendMark(url) {
    if (!endsWith(url, '/')) {
        url = url + '/'
    }
    url = url + "?droid_refer=random_recommend"
    return url;
}

function sortRecommendPosts(recommendPosts) {
    var sortedPosts = {};
    var keys = Object.keys(recommendPosts);
    var sortedKeys = keys.sort(function(a, b){
  		return  getUTF8ByteLength(a) - getUTF8ByteLength(b); // ASC -> a - b; DESC -> b - a
	});
    for (var index in sortedKeys) {
        var key = sortedKeys[index];
        sortedPosts[key] = recommendPosts[key];
    }
    return sortedPosts;
}


function getUTF8ByteLength(s) {
    return unescape(encodeURIComponent(s)).length;
}







