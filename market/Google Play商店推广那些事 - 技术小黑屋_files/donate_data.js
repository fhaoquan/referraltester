function makeDonateTextData() {
	var textData = [
        '打赏支持，金额随意',
    	//'文章不错，我要打赏',
        //'Helpful ? Donate : Hehe',
        //'有帮助 ? 打赏 : 呵呵',
        //'好文章，打赏'
    ];
    return textData;
}

function getDonateButtonText() {
    var prefix = "&nbsp;&nbsp;&nbsp;";
    var suffix = "&nbsp;&nbsp;&nbsp;";
    var textData = makeDonateTextData();
    textData = shuffleArray(textData);
	var content = textData[0];
    return prefix + content + suffix; 
}

function getDonateTips() {
	return "<b>如果觉得我的文章对您有用，请随意打赏。您的支持将鼓励我继续创作！</b>";
}

function getDonateProblemText() {
    return "";
	//return '遇到困难？选择<a href="http://droidyue.com/donate/?droid_refer=other_donate">其他方式</a>打赏';
}

function shouldDisplay() {
	return isDesktop() || isIPad();
}