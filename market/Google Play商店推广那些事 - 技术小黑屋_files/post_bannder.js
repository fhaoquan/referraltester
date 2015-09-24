function getBanner() {
    var bannerHtml = '<br/><br/><a href="http://droidyue.com/donate/"><img src="http://droidyueimg.qiniudn.com/support_droidyue.gif" class="no_boarder_class"></a>';
    //var bannerHtml = '<img src="http://7jpolu.com1.z0.glb.clouddn.com/didi_invite.png" class="no_boarder_class">';
    return bannerHtml;
}
        
function shouldShowBanner() {
    return false ;
}
        
function showBanner() {
    if (shouldShowBanner()) {
        console.info("should show banner");
        var bannerHtml = getBanner();
        document.write(bannerHtml);
    } else {
    	//console.info("Do not show banner");
    }
}
        
showBanner();