function shouldDisplayPostBook() {
    //return true;
	return false && isSelfRefer() && isDesktop();
}

function makePostBookPrefix() {
	return '<h2>荐好就收</h1>';
}

function makePostBookSuffix() {
	return '';
}

function isPostBookInDebug() {
	return false;
}

function getLimitSize() {
	return 5;
}


function makePostBookDataSource() {
    var data = {};
    
    
    
    data['思维导图系列'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DyGQvsNMztFQjmraEDZVrLuNbqYrCXDo6pvhC2iAi0c2LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2iQz7aSVuBv11VBsMdi%252FpzQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';            
    
    data['代码整洁之道'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DLksCOAlF4%252BrghojqVNxKsUOFP3684L1wKww%252BJCCRHnuLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2KfeR8Y%252FE%252FETYzHrtSOCtbw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';         
    data['Java编程思想(第4版)'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DTWlLm5w49TfebLdhAWchHE8l7z4JzB29YS9AVrmcovTlL1tPWpvWRP7gvmtLyoa3Dlg3nJM8sR%252FgLEqzBf9Q%252FdU0r%252FsIKgcHzLc6mJZKgydy8Z2%252FWeo6%252FfbOH4f91N17sylE9YnjNaK5hZLYo3%252FLFA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['通俗易懂的算法经典'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dqmr8RX5x16fuDAZjWhpTWHR10uD8JAkhdMG69qvm7lRBWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252B%252FGNM8jOjUYKwGUhWwLa6Fw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['程序员必备：编程珠玑'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Db7Td0D3z0TG6k0Or%252B%252BH4tGzRmZt3yvKVWUgXPn%252FBwdSLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg28x%252FC9k7z8ndpxqWeyvwPWw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['疯狂的程序员(完整图文版)'] = 'http://www.amazon.cn/gp/product/B008QM2476/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008QM2476&linkCode=as2&tag=droidyue-23';
    
    data['清单革命,防范错误从改变观念开始'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D3hds9qDpGQDghojqVNxKsSVvkwpxE5c5WUgXPn%252FBwdSLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2B8UeKDGrV%252FdE8F0yiBTK5g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Java程序员修炼之道'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DStFTqDmxr1%252FghojqVNxKsW5FbSs5nDEmwjKxcthiwdCLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2OUMqE7suppWWdwoF8TjZ%252FA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['编写可读代码的艺术'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D8ryLKBXhCpjghojqVNxKsYQ54q%252B2UYZMWPt1fh5JBxyLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg24b77cCrWCkjZJOeFJKmI%252BA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['重构:改善既有代码的设计'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DXox9u50jyRPuDAZjWhpTWC%252FVKTU1G%252B%252BKVt18PTWu1bNBWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252BMNhhORfAv4YccE%252FuhXb26w%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

   	data['浪潮之巅，精彩的IT商战史'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D2%252FqBNE5xyK66k0Or%252B%252BH4tCf%252Fb5H9ooJ9LkbXnAd2OqmLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg25yN5mjAVnVzO80jPCs%252BwMg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['关爱程序猿：颈椎病康复指南'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dppta%252FhPsdbjghojqVNxKsXv%252F5BR4%252FvBdZCWWJYFETQiLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2BF00EYgDG2MD4EFay%252B594w%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['Java并发编程实战 '] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DUN3MDUD4ZQXghojqVNxKsSuEVJJNMzwERfbtQaszFx6LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2irKj%252BXAvWLVa%252BGOr7N%252FECQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Java Generics and Collections'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DVu69kmu9rTvghojqVNxKsa8kBcSv%252FjT7WAcyj9ixhNeLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2sV1ODMni0T1ra3%252B35djdnQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Java性能优化权威指南'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D4Jx%252FPP6mvTAjmraEDZVrLgR6VrfhqT%252FJoDkB4aIdoR2LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2YzT2f2xdBsgdd%252FyhjXcZCA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Java Puzzlers'] = 'http://www.amazon.cn/gp/product/032133678X/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=032133678X&linkCode=as2&tag=droidyue-23';
    
    data['代码大全，静得下心，你就赢了'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dy6aPKEVD%252Fr7ghojqVNxKsTih%252FlHXknrW%252BsMsoDJoEyOLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2jShMj1B1MXPUW9kOSEg%252Bhw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['斩获雨果奖的国内科幻小说，三体'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dx6zpV%252BeUzALuDAZjWhpTWB1cUaigPcmTQIkohNQ5%252FytBWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252Bsp27K6tMChM%252Fu7kCwlpwMA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['剑指Offer:名企面试官精讲典型编程题'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DqaUu1nw%252BI2XuDAZjWhpTWDKNZNivN7YCP%252BIvntwmqGFBWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252Bsp27K6tMChPR0xCzbRQP%252BA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['数据结构与算法分析:Java语言描述'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DYojsL4TdoLrebLdhAWchHC%252B%252F4pKmrLYNYS9AVrmcovTlL1tPWpvWRP7gvmtLyoa3Dlg3nJM8sR%252FgLEqzBf9Q%252FdU0r%252FsIKgcHzLc6mJZKgydy8Z2%252FWeo6%252FfbOH4f91N17VlqWTNntB5tCkqX98X3KCA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['从一到无穷大:科学中的事实和臆测'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dy13haRFB6HjghojqVNxKsTcrqgKm%252Fd9LURZm4csnlQCLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg22Dq7VZk2p5pK0m3td9TacA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['Bob大叔又一力作，程序员的职业素养'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D5MO4XTYnmILebLdhAWchHAjUDsb9%252F7xCWUgXPn%252FBwdSLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2HmH4KKzPPiN6yx0izpffvA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['面向对象的圣经:Head First设计模式'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DW19hCFy%252FnZXuDAZjWhpTWAGnNhVJyoHcZULKeTEAxATlL1tPWpvWRP7gvmtLyoa3Dlg3nJM8sR%252FgLEqzBf9Q%252FdU0r%252FsIKgcHzLc6mJZKgydy8Z2%252FWeo6%252FfbOH4f91N17XHH128Np36tgBm57pR24xw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['拖延心理学(豆瓣拖延小组的镇组之宝) '] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D%252B2USFppqQ6i6k0Or%252B%252BH4tJhtgr9Yz%252BDp6fcRkKKuVS6LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg226Ju2F%252BfmfWIMl4HkKjI3g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
   
    data['算法设计与分析基础，换个角度看算法'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DmOhNHGPpWoW6k0Or%252B%252BH4tINl0ktbTEUGEUtHUPud5YyLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2w%252FmvjRaujEBxpUoR2q8COw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['自控力(斯坦福大学最受欢迎的心理学课程)'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DwknVcJ0EDmbghojqVNxKsTseItC0orbyqBK6BQOuXUmLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2sU0%252BQI4UPFX921JvDirTew%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    
    data['番茄工作法图解:简单易行的时间管理方法'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DsN%252BQaL%252BnwVe6k0Or%252B%252BH4tOoTgQkIKVDb5PN2%252BMlvS%252BqLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2EXEFne50rO2TqXiulMdwsQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

	data['意志力:关于专注、自控与效率的心理学'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D3OdxrmV1Jx3ghojqVNxKscE06dZ4%252B3NyWUgXPn%252FBwdSLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2uSOp5UkPYUZpxqWeyvwPWw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['高效程序员的45个习惯:敏捷开发修炼之道'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DKClYtyZbqD%252B6k0Or%252B%252BH4tHengYZGusd9fiZgD4KXE7aLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2uSOp5UkPYUbQD4qY%252F%252BuGhQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['图灵程序设计丛书:Java性能优化权威指南'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DWk1L6ixa5DgjmraEDZVrLgR6VrfhqT%252FJoDkB4aIdoR2LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2uNIABVwgDezCyCbBzJ9szw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    

    data['深入理解Java虚拟机:JVM高级特性与最佳实践'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DZdAUzEG%252BNCnghojqVNxKsS83LumUT0uKsfSjPqrk7DyLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2uNIABVwgDeyTAu9Ox2ix7g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['For 程序猿，麦肯基疗法:7步告别颈椎腰椎烦恼'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DbTVhKJCHNWHghojqVNxKsXoNrkkHB6Id%252BNsML%252BECUcKLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2ofrIkrigdJU%252FCGUfqc5D3g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    
    data['情不自禁：知乎冯慎行自选集 (知乎「盐」系列)'] = 'http://www.amazon.cn/gp/product/B011421C04/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B011421C04&linkCode=as2&tag=droidyue-23';
    
    data['所谓经典，就是指这样的书, 乌合之众:大众心理研究'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D0%252FuX611y88O6k0Or%252B%252BH4tEh56IaYMEDz4mujNrE3oq%252BLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2igq9ZPfEn2IHcnsrjpkmwg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';                              

    data['洗脑术:怎样有逻辑地说服他人'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DIW5zEOZLIU%252FghojqVNxKsQegzqHeVQmPokW4bPA0wMWLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2m0yDIu6R4VWdDV%252FJ%252F%252Fm36w%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Sun 公司核心技术丛书:Effective Java中文版(第2版) '] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D4e0%252FBgYbswbebLdhAWchHIPQrncw5ZIo8nBOXRi6ylDlL1tPWpvWRP7gvmtLyoa3Dlg3nJM8sR%252FgLEqzBf9Q%252FdU0r%252FsIKgcHzLc6mJZKgydy8Z2%252FWeo6%252FfbOH4f91N17GJ%252BNWhHDNK1s58mg6HPwjw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    
    data['计算机科学丛书：设计模式 可复用面向对象软件的基础'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Da%252BM4CSpz80DghojqVNxKsWK%252BWoZuAC1LUSa8yPHXMLCLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2RhifGBWZyxmWdwoF8TjZ%252FA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['打造高质量Android应用:Android开发必知的50个诀窍'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DsFrxoKoHgiUjmraEDZVrLlW5XL6RI9OU2MCJOvlNXjyLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg24e7LgLkjHDrCyCbBzJ9szw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['程序员面试金典,实战解析Google，苹果，微软面试题'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DxTlqw9JJuq4jmraEDZVrLkcfmsPLsSWFTbuPAry6zvGLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg24e7LgLkjHDrBnMj5UYniOg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    data['CSDN博客专家徐宜生力作，Android群英传'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DxN8PZl%252B94cjuDAZjWhpTWEuUw5ruGXE0%252FgarWMVow11BWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252BUxioGQX3R4xru%252ByAF%252F5gNQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['CSDN大牛任玉刚最新作品：Android开发艺术探索'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DEkCjZYMV%252BjzuDAZjWhpTWK0WWAm1E2sic%252BZXN2olAPhBWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252BUxioGQX3R4y%252BOMHmE%252F%252B6Qw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data = shuffleJsonObject(data);
    
   	data = splitJSONObject(data,getLimitSize());
    
    data = sortJsonObject(data);
    return data;
}