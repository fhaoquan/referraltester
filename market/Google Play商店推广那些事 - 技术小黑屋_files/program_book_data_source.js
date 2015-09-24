function shouldDisplayProgramBook() {
    return true && isSelfRefer() && isDesktop(); 
}

function makeProgramBookPrefix() {
	return '<section><h1>编程经典</h1>';
}

function makeProgramBookSuffix() {
    return '</section>'
}

function isPrgoramBookInDebug() {
    return false;
}




function makeProgramBookDataSource() {
    var data = {};
    data['算法'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DXjqxBuer7CvuDAZjWhpTWHR10uD8JAkhdMG69qvm7lRBWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252Betqh6pKxDlIQ0DhvN73Z7w%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';   
    
    data['代码大全'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DoMAdeKjLs%252BHghojqVNxKsTih%252FlHXknrW%252BsMsoDJoEyOLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2eLi0YzlhxAJsiZ7sxXrr%252BQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['人月神话'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DWq%252BMyx4fORS6k0Or%252B%252BH4tMz7y5rr5D4EpvhC2iAi0c2LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2cHLn8bKIgVieDNMFId0AEQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['编译原理'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dfdh9kZZM5MvebLdhAWchHAcCQZlQnAgwZULKeTEAxATlL1tPWpvWRP7gvmtLyoa3Dlg3nJM8sR%252FgLEqzBf9Q%252FdU0r%252FsIKgcHzLc6mJZKgydy8Z2%252FWeo6%252FfbOH4f91N171T91fme27OI7%252FMFZuhlfuQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['编程珠玑'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DdFjWIFCUZ466k0Or%252B%252BH4tGzRmZt3yvKVWUgXPn%252FBwdSLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg20W4CIw9eW2yeDNMFId0AEQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['编程之美'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DJ5y0oYIQtynebLdhAWchHOOLF%252BeZNSd%252BBRUm14q8OC%252FlL1tPWpvWRP7gvmtLyoa3Dlg3nJM8sR%252FgLEqzBf9Q%252FdU0r%252FsIKgcHzLc6mJZKgydy8Z2%252FWeo6%252FfbOH4f91N17GGgL6aN%252Fhqw7%252FMFZuhlfuQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['重构与模式'] = 'http://www.amazon.cn/gp/product/B00A9YD7A2/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00A9YD7A2&linkCode=as2&tag=droidyue-23';
    
    data['黑客与画家'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DtSgS7RwajCHghojqVNxKsRhUBn4N7Wzf5O1HRCRsNECLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2MioWPkjZ5pPBnMj5UYniOg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['程序员的职业素养'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dj4Gs%252FqX8xTLebLdhAWchHAjUDsb9%252F7xCWUgXPn%252FBwdSLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2sF640P1rJp8kY0F4IDCJ3A%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Java Puzzlers'] = 'http://www.amazon.cn/gp/product/032133678X/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=032133678X&linkCode=as2&tag=droidyue-23';

    
    data['代码整洁之道'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DwL19A5Z5HQbghojqVNxKsYeSE3emeVkE5PN2%252BMlvS%252BqLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2LOjrgOQoHy%252BIMl4HkKjI3g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Unix编程艺术'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D6FlyVrniuvnebLdhAWchHE8F0rr1IFoOUSa8yPHXMLCLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2LOjrgOQoHy9Quy%252B9cMElhw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Java编程思想'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DZWDRgOvseVjebLdhAWchHE8l7z4JzB29YS9AVrmcovTlL1tPWpvWRP7gvmtLyoa3Dlg3nJM8sR%252FgLEqzBf9Q%252FdU0r%252FsIKgcHzLc6mJZKgydy8Z2%252FWeo6%252FfbOH4f91N17ACp7AQbZX%252ByCG9w1qAQrfg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['程序员修炼之道'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DF%252B%252BvO%252FL0VoLpEWlLRNQ%252BeoN9Jqj6mN81BRUm14q8OC%252FlL1tPWpvWRP7gvmtLyoa3Dlg3nJM8sR%252FgLEqzBf9Q%252FdU0r%252FsIKgcHzLc6mJZKgydy8Z2%252FWeo6%252FfbOH4f91N17lSR76Buyf8FgBm57pR24xw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['修改代码的艺术'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DIAScibseLhMjmraEDZVrLlJ338kx%252Bs9lsMiqaJ97LhaLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2b9T8a%252FcWMH18V10JQoYFyA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
	data['Java虚拟机精讲'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DTq27lkNfje26k0Or%252B%252BH4tO59CT8tYLWwd0WM9ezukg2LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg24OLBL9SVCPvUvWvNN0R0Dw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Java性能优化权威指南'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D5fDI0DcQdCcjmraEDZVrLgR6VrfhqT%252FJoDkB4aIdoR2LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg29ySIKxEaQ%252Fo%252FCGUfqc5D3g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Java核心技术卷一'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DAVB7Oy4uvQYjmraEDZVrLrB5Xx%252FFpYMQWUgXPn%252FBwdSLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg29ySIKxEaQ%252Fp8V10JQoYFyA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Java核心技术卷二'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DMIZSwChUxWu6k0Or%252B%252BH4tB3b%252BjgYBQ%252BWENbBVuy6U6CLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2UsNUMlFAivVQuy%252B9cMElhw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['深入理解Java虚拟机'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DlnxTOZ1rs4%252FghojqVNxKsS83LumUT0uKsfSjPqrk7DyLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2UsNUMlFAivVqurImiC7qcw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Java程序员修炼之道'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dl90gINHGxbzghojqVNxKsW5FbSs5nDEmwjKxcthiwdCLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2jAUes%252BGUfeD8iHCBZPzMIg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['数据结构与算法分析'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DlHzneS%252Fl4zTebLdhAWchHC%252B%252F4pKmrLYNYS9AVrmcovTlL1tPWpvWRP7gvmtLyoa3Dlg3nJM8sR%252FgLEqzBf9Q%252FdU0r%252FsIKgcHzLc6mJZKgydy8Z2%252FWeo6%252FfbOH4f91N17Ry9DXf1fu4R8Fc5sqSf6zw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['编写可读代码的艺术'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dazb2X10Fk7TghojqVNxKsYQ54q%252B2UYZMWPt1fh5JBxyLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2mE6dXFzd%252FpsSgVtYR5x48w%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['计算机程序设计艺术'] = 'http://www.amazon.cn/gp/product/B00C4OM7V0/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00C4OM7V0&linkCode=as2&tag=droidyue-23';
    
    data['松本行弘的程序世界'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dnh92OKLOIczuDAZjWhpTWGPGUHUyqzYfDbkFyzYIT09BWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252By%252BlMVy%252BUQakKbmsnRSi5Dg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
   	data['高效程序员的45个习惯'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DJziX2ldwvB26k0Or%252B%252BH4tHengYZGusd9fiZgD4KXE7aLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2o9UT4Z1uJ%252BdnKKbQjb4E2g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['精益软件开发管理之道'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DYOydAJtGb7bebLdhAWchHJC1oQ08miAH%252FgRj6p39QSeLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2o9UT4Z1uJ%252BeUgxM35eg0MA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['计算机程序的构造和解释'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DJjrAltndTRDuDAZjWhpTWEpm8fYAwYK6qQmz5DvOmYpBWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252BX0WOLlGEwbEgHeB9LYAEYg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['重构：改善既有代码的设计'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DChfYvmIzGxDuDAZjWhpTWDqHZPzRhqYysCpVtU3jWYtBWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252BX0WOLlGEwbESi0ea4ThRXA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['Java虚拟机规范(Java SE 7版)'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DHzG32kgqlne6k0Or%252B%252BH4tP0aUMbZTctALkbXnAd2OqmLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2YBMbdj4NHu56yx0izpffvA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['敏捷软件开发(原则模式与实践)'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DmV%252BnTPexPzvghojqVNxKsW0mP%252BojpLsz6fcRkKKuVS6LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2YBMbdj4NHu6JjU1rGI%252FCdg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['设计模式 可复用面向对象软件的基础'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DyrndBDLZbJ7ghojqVNxKsWK%252BWoZuAC1LUSa8yPHXMLCLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2YBMbdj4NHu5XOYAPskEykQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    data['程序员的思维修炼:开发认知潜能的九堂课'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DMlD5hmLzFpvuDAZjWhpTWJ6AbBai99bf3vshPR89VH9BWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252BX0WOLlGEwbGmQ3V4aB8jSg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    return data;
}