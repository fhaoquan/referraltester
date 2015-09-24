function shouldDisplayBlogRoll() {

    return true && isSelfRefer() && isDesktop();
}

function makeBlogRollPrefix() {
    return '<section><h1>Blogrolls</h1>';
}

function makeBlogRollSuffix() {
    return '</section>';
}

function isBlogRollInDebug() {
    return false;
}

function appendHongxin(data) {
    if (isDesktop()) {
        if (isChrome()){
            data['红杏，为程序员专门打造的上网加速利器，你懂得！'] = 'http://honx.in/_VaJXxWf4PSiXm2ck';
        }
    }
	return data;
}


function makeBlogRollDataSource() {
    var data = {};
    data['友情链接'] = 'http://droidyue.com/links/';
    
    data['极客开源T恤'] = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DVl2ocTpH0WwcQipKwQzePOeEDrYVVa64Qih%2F7PxfOKS5VBFTL4hn2dQBlzdZ0rk2P5bxJy%2F%2Fu7jM3gYQjCL89qULerPwKfMIwRKDNIG1Ob78gzOkuNPsG%2B%2BfxGyA7kO2HcXyKGoE7hfBA6L871fwHMYl7w3%2FA2kb';

    
    data['服务器只买阿里云'] = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DJrOGJDWvpnUcQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAqVpA4B8Y%2Bzn%2FuaHtoit7JG3V2HVNDCdH26MJPhEQyRFQ05uJXRCiiJptN6IU7yanudn1BbglxZYxUhy8exlzcq9AmARIwX9K%2BnbtOD3UdznPV1H2z0iQv9NkKVMHClW0QbMqOpFMIvnvjQXzzpXdTHGJe8N%2FwNpGw%3D%3D';
    
    data['说走就走的Airbnb旅行基金'] = 'http://zh.airbnb.com/c/awallace36?s=8';
   
    data['XBrowser-极简快速的浏览器'] = 'http://xbrowser.me/?utm_source=droidyue_com&utm_medium=blogroll_link&utm_campaign=friend_campaign';

    
    data['近乎免费的静态云存储，七牛'] = 'http://droidredirect.sinaapp.com/qiniu_redirect.php';

	
    data['零散时间写个应用，够付房租了'] = 'https://www.youmi.net/account/register?r=OTU2Ng==';
    
    data['Jawbone UP2 智能手环更潮，更科技'] = 'http://s.click.taobao.com/t?e=m%3D2%26s%3D3%2F0ncwEAYfIcQipKwQzePOeEDrYVVa64pRe%2F8jaAHci5VBFTL4hn2bLrHRQc8z5toAgJVlbS%2FO%2FM3gYQjCL89qULerPwKfMIwRKDNIG1Ob6y2Vs1pknHGcBk7iRDybkB03J3WYIPR1Xxeiy387U8hCGFCzYOOqAQ';
    
    data['我的第一本计算机启蒙书籍：《疯狂的程序员》'] = 'http://www.amazon.cn/gp/product/B008QM2476/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008QM2476&linkCode=as2&tag=droidyue-23';

    //data = appendHongxin(data);
    
    return data;

}


