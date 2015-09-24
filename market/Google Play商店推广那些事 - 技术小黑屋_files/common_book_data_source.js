function shouldDisplayCommonBook() {
   
	return true  && isSelfRefer() && isDesktop();
}

function makeCommonBookPrefix() {
	return '<section><h1>好书推荐</h1>';
}

function makeCommonBookSuffix() {
	return '</section>';
}

function isCommonBookInDebug() {
	return false;
}




function makeCommonBookDataSource() {
    var dataSource = {};
    dataSource['失控'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dg1yA5%252FZIL%252BjghojqVNxKsavEx6zOlszvURZm4csnlQCLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg29tTrQMwYHl9YPA6TI2QLLg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';       
     
   	dataSource['三体'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Db6jSE2qOLoPuDAZjWhpTWB1cUaigPcmTQIkohNQ5%252FytBWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252BY6eaZBmx%252BpK0W1gWwyQrnA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['忏悔录'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DmiYktSwjVsC6k0Or%252B%252BH4tKl2N6bKwepiLOEkXoxPQQaLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2y6X%252B2QayrhX2oRjCEvaD5g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['郁离子'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DdB5qGVHTXL%252B6k0Or%252B%252BH4tCd9y8b3XdIpHnLSp9l07xyLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg22OMru9eO%252F5txpUoR2q8COw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['菊与刀'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D3avG2qfdFmYjmraEDZVrLq2HvS5JoE9mZ6U672N6gVGLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg22OMru9eO%252F5vbcOkeIIswSQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['启示录'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DuOwMaBa73CTebLdhAWchHPrfG1mL9ltqokW4bPA0wMWLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2dYDcg0%252FnIqxXOYAPskEykQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['影响力'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dzq4xx8UnLBm6k0Or%252B%252BH4tEFPQTPRUrpCHF349Ju02cmLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2eog7PQinT%252BPC4lasV4OWOg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
	dataSource['乌合之众'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DsPaEP3nl0Jm6k0Or%252B%252BH4tEh56IaYMEDz4mujNrE3oq%252BLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2jt08ShBv%252ByInPYttLSt%252B6g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['长尾理论'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DmkjbaYJ2Ns%252FghojqVNxKsfQaAUwH5gztBgmpWTsP1haLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2IOIeRGrJWilYPA6TI2QLLg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['浪潮之巅'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D4LWKO4up15y6k0Or%252B%252BH4tCf%252Fb5H9ooJ9LkbXnAd2OqmLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2IOIeRGrJWikT%252FZKykqpE2g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';	
    
    dataSource['数学之美'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DCw8RKHh2cGnghojqVNxKsUeAqqbJ8frZn1Y2qSkaZVCLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2SNXq8a655ThnKKbQjb4E2g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
  
    dataSource['三言二拍'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DfWm%252FiCpglDTebLdhAWchHDUYWx5ehJ5N03AewgJJOT%252BLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2hb6oNnC782WmZSfuC5Xi0g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['贞观政要'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DswuPQpYwcm66k0Or%252B%252BH4tKUYvqvwDEaPl8AO335FWOeLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2hb6oNnC782WTqXiulMdwsQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['走向共和'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DvsBf6lGJ87bghojqVNxKsRcE5iRE%252FiPml8AO335FWOeLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2fAlXs3dJO42WdwoF8TjZ%252FA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['坂本龙马'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DtUA%252BEKxpoufghojqVNxKsdCUlYryXdMQqBK6BQOuXUmLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2vL3OnPV0b3SrQl27WtnEGw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['孟子译注'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DNxIJygzwJYZxqxxh9phdGwBefgTFvgzc3guxUqFHW3LlL1tPWpvWRP7gvmtLyoa3Dlg3nJM8sR%252FgLEqzBf9Q%252FdU0r%252FsIKgcHzLc6mJZKgydy8Z2%252FWeo6%252FfbOH4f91N17sptDodh1ru25hZLYo3%252FLFA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['那时汉朝'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DRt%252BmHYiL%252FcW6k0Or%252B%252BH4tDifW0Klmzl4baoUsqSSy3iLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2BEX8v2YkMAbohnMgvrd%252Byw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    dataSource['浮生六记'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DrarRiQ5srQXebLdhAWchHGOFQbbJeuqNEUtHUPud5YyLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2BEX8v2YkMAa%252FI40GO1HZVw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['向前一步'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DsfVg7mYamF7ghojqVNxKsSOrd0LGjCn7L1bkx3gCrU6LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2wuMGPg042F9a7UqqA75jOw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['什么是数学'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D4bkDgPrpfYfebLdhAWchHImftigmp%252FGxWIYUy9WxI16LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2wuMGPg042F8T7X6liJHKuw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['批判性思维'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DM6UcNbajH%252FS6k0Or%252B%252BH4tDAE%252BwsHBaaZ1BHSvcRrnkWLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2YYKk7jTdY4O%252BfaGTtbIyiQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    
    dataSource['血腥的盛唐'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DVCG3MiJ7Rr%252FebLdhAWchHJPwotRzrTMWfZ9qN1qD0ICLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2YYKk7jTdY4MHcnsrjpkmwg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['平凡的世界'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DXzXRYM1SdnXghojqVNxKsV6NfaliNRLy5O1HRCRsNECLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2YYKk7jTdY4NqurImiC7qcw%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['丑陋的中国人'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DCl%252BbUebVwUW6k0Or%252B%252BH4tHA2YSXKzr0L1Ickk%252BNWjqOLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2Zcbutthzlk4SgVtYR5x48w%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
   
    dataSource['疯狂的程序员'] = 'http://www.amazon.cn/gp/product/B008QM2476/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008QM2476&linkCode=as2&tag=droidyue-23';

    
    dataSource['帝王师:刘伯温'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D%252BLUlqq8KvMS6k0Or%252B%252BH4tHL3lP9tzjz5VBTWeYSeIzSLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2xp8fm5eVFIB6yx0izpffvA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['第三帝国的兴亡'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DCK073cSp9P%252FghojqVNxKsYVI2QBcAcPXqBK6BQOuXUmLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg23lOH7K%252FVKAwnPYttLSt%252B6g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
   
    dataSource['如何阅读一本书'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D9XKEFDFdNgQjmraEDZVrLrjYE0GrkyopudTIvf5t7saLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg23lOH7K%252FVKAwT%252FZKykqpE2g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['把时间当作朋友'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dh0%252BA%252BA8SKXEjmraEDZVrLvksc%252FMzpEo17AU7Qokl6rSLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2oYyBSoX9UwRf5pwvgy2BJg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    
    dataSource['乱世第一名相谢安'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DiIE5DuQ9CQ%252FghojqVNxKsRU8SD9MwJB0LkbXnAd2OqmLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2qx6cWpRROLdQdrr7YpGMZA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    dataSource['尼采:在世纪的转折点上'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DANS8qnNBm8TghojqVNxKsfF1lV87oetEl8AO335FWOeLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2JlEZ68KyCTidDV%252FJ%252F%252Fm36w%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    dataSource['程序员必读的职业规划书'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DdCmtrnB%252BpeG6k0Or%252B%252BH4tJHevOmsvL1CsMiqaJ97LhaLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2NKoZU%252B%252Fov49K0m3td9TacA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    
    dataSource['你一定爱读的极简欧洲史'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DQEw8IaU%252FExHghojqVNxKsZLzUCiraXE6oDkB4aIdoR2LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2NKoZU%252B%252Fov49Hg8HwWc0DGg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    dataSource['一生必读的26部欧美人文经典'] = 'http://www.amazon.cn/gp/product/B00WLZMUFA/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00WLZMUFA&linkCode=as2&tag=droidyue-23';

    
    dataSource['你的时间有限,不要为别人而活'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DRqXx5AZQ9ye6k0Or%252B%252BH4tHisWF0%252Fgdnj%252BNsML%252BECUcKLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2yot2%252Bwv02UiC0IkxgGR0iQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['不敢止步:一个软件工匠的12年'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DrJkLkLeMVLW6k0Or%252B%252BH4tCItb%252BNlsPcoPw%252BjlVVlaO6LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2yot2%252Bwv02Ug54u1Ntv8ZBA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['创业维艰:如何完成比难更难的事'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DgrihWE1xrzO6k0Or%252B%252BH4tBZ7IwpKuuuypvhC2iAi0c2LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2UoGn%252FXTn6tlYPA6TI2QLLg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    dataSource['人性中的善良天使:一部人类新史'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dq3rDKn7fznbuDAZjWhpTWBiXxdnq0Cz5mCPXIfFC0cdBWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252B3VOEJVTO5qNAhk54tyQq7w%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    
    dataSource['枪炮、病菌与钢铁 : 人类社会的命运'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Da%252FSoq5vpF6PuDAZjWhpTWD73qv2Z%252F0sh6myWa112G29BWJVBnwmj7tnO073KpEUuesayvrQ7hvk2JZN3G%252BC%252FevNkVu5dNPGLwnahlOoa5bN3t065dvg9p1Rmtaud%252B0v%252B3VOEJVTO5qPFBKaW%252BSn9Jg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    dataSource['拖延心理学,豆瓣拖延小组的镇组之宝'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DpZ1lEIygbf66k0Or%252B%252BH4tKTehSKMGcQo%252F9zahzjWtwuLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2u9loF4SNhqOC0IkxgGR0iQ%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    dataSource['自控力,斯坦福大学最受欢迎的心理学课程'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3D5w537U2IjwzghojqVNxKscE06dZ4%252B3NyWUgXPn%252FBwdSLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2u9loF4SNhqN8V10JQoYFyA%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['番茄工作法图解:简单易行的时间管理方法'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3Dz544HWwoagbebLdhAWchHK8IZcvdb384lWsbAjdmP56LltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2crjgARaBlcLBnMj5UYniOg%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';
    
    dataSource['光荣与梦想：1932～1972年美国叙事史'] = 'http://redirect.simba.taobao.com/rd?w=unionnojs&f=http%3A%2F%2Fai.taobao.com%2Fauction%2Fedetail.htm%3Fe%3DYwtcmj9Rei26k0Or%252B%252BH4tD9yANE3KT88ENbBVuy6U6CLltG5xFicOdXrTUTgh9sMDPIwxrc30ri8nc0fL4TGokWbbNPSehpRHMUeRChy%252FdaFJWU9wpkoTW3abJM7sDg2crjgARaBlcKTAu9Ox2ix7g%253D%253D%26ptype%3D100010%26from%3Dbasic&k=5ccfdb950740ca16&c=un&b=alimm_0&p=mm_58471937_7778121_26116191';

    
    return dataSource;
}

