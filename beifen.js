if(window.location==window.location.origin+"/?page_id=41"){
    const socket = window.io(window.location.origin+'/ws');
    console.log('demo小屏socket初始化成功');
  
    socket.on('connect', onConnect);
    function onConnect(){
      console.log('demo小屏已连接 ' + socket.id);
    };
    
    
    
    //隐藏其余无关元素，展示指定元素-----
    function step1(className){
      //获取页面全部元素
      var classElements = [],allElements = document.getElementsByTagName('*'); 
      for (var i=0; i< allElements.length; i++ ) { 
        if (allElements[i].classList.contains('xiaoping')) { 
            classElements[classElements.length] = allElements[i]; 
        } 
      }
      //隐藏无关元素
      for(var i=0;i<classElements.length;i++){
        classElements[i].style.display = "none";
      }
      //显示指定元素
      if(className!="none"){//(none则表示全部隐藏)
          var dom = document.getElementsByClassName(className)[0];
          dom.style.display = "block";
      }if(className.substring(0,1)== "z"||className.substring(0,1)== "h"||className.substring(0,1)== "y"||className.substring(0,1)== "j"||className.substring(0,1)== "g"){
          dom.contentWindow.location.reload(true);//(是echarts图必须刷新，重新加载iframe样式)
          dom.style.display = "block";
      }
      
      //宣传片自动播放与关闭 
      if(vedio.style.display=="none"){
        video.pause();
      }else if(vedio.style.display=="block"){
        video.play();       
        console.log("视频开始播放");
      }
    }
  
     //隐藏瑞鹏官方系统-------
     function step2(sum1,sum2,sum3){
        var medcial = document.getElementsByClassName("medcial")[0];
        var CS = document.getElementsByClassName("CS")[0];
        var DR = document.getElementsByClassName("DR")[0];
        medcial.style.opacity = sum1;
        CS.style.opacity = sum2;
        DR.style.opacity = sum3;
      }
    
    //简单二级下转
    function step3(name){
      var xiaopingPages = document.getElementsByClassName("xiaopingPage");
      for(var i=0;i<xiaopingPages.length;i++){
          xiaopingPages[i].style.display = "none";
      }
      var namePage = document.getElementsByClassName(name)[0];
      namePage.style.display = "block";
      var pingbao = document.getElementsByClassName('pingbao')[0];
      pingbao.style.display = "none";
    }
    
    //复杂二级下转
    function step4(name,type,value){
        var xiaopingPages = document.getElementsByClassName("xiaopingPage");
        for(var i=0;i<xiaopingPages.length;i++){
            xiaopingPages[i].style.display = "none";
        }
        console.log("xiaopingName:"+name);
        var namePage = document.getElementsByClassName(name)[0];
        namePage.style.display = "block";
        console.log("namePage:"+namePage);
        
        //获取可能存在的标题对象
        var titles = document.getElementsByClassName(name+"_t")[0];
        if(typeof(titles) != undefined && titles != "undefined" && titles != undefined){
          //获取原来的src，根据name修改成新的src
          let oldsrc = decodeURI(titles.src); 
          //移除原本src
          titles.removeAttribute("src");
          //设置新src
          let newsrc = oldsrc.replace(/"title[^,]*,/g,'"title":"'+value+'",')
    
          setTimeout(function () {
            titles.setAttribute("src",newsrc);
          }, 1);
        }
      
        //获取对象集合
        var names = document.getElementsByClassName(name+"_x");
        for(let i=0;i<names.length;i++){
          //获取原来的src，根据name修改成新的src
          let oldsrc = decodeURI(names[i].src);
          //移除原本src
          names[i].removeAttribute("src");
          //设置新src
        let newsrc = "";
        if(oldsrc.indexOf("金牌外教")>-1 && value == 1){
            let newoldsrc= oldsrc.replace(/"title[^,]*,/g,'"title":"金牌讲师",')
            newsrc =newoldsrc.replace(/{\\"where.[^}]*\}}/g,JSON.stringify({where: {[type]: value}}).replace(/\"/g,"\\\""));
        }else if(oldsrc.indexOf("金牌讲师")>-1 && value == 2)  {
            let newoldsrc= oldsrc.replace(/"title[^,]*,/g,'"title":"金牌外教",')
            newsrc =newoldsrc.replace(/{\\"where.[^}]*\}}/g,JSON.stringify({where: {[type]: value}}).replace(/\"/g,"\\\""));
        }else{
            newsrc = oldsrc.replace(/{\\"where.[^}]*\}}/g,JSON.stringify({where: {[type]: value}}).replace(/\"/g,"\\\""))
        }
          setTimeout(function () {
            names[i].setAttribute("src",newsrc);
          }, 1);
        }
        
        //品牌矩阵下砖
        let matrixTitle=document.getElementsByClassName(name+"_y")[0];
        if(typeof(matrixTitle) != undefined && matrixTitle != "undefined"){
            let oldsrc = decodeURI(matrixTitle.src); 
            //移除原本src
            matrixTitle.removeAttribute("src");
            //设置新src
            let newsrc = oldsrc.replace(/"title[^,]*,/g,'"title":"'+value+'",')
          
            setTimeout(function () {
                matrixTitle.setAttribute("src",newsrc);
            }, 1);
        }
  
        let matrixIframe=document.getElementsByClassName(name+"_num");
        for(let i=0;i<matrixIframe.length;i++){
            let oldsrc = decodeURI(matrixIframe[i].src);
            //移除原本src
            matrixIframe[i].removeAttribute("src");
            let newsrc =oldsrc.replace(/{\\"where.[^}]*\}}/g,JSON.stringify({where: {[type]: value}}).replace(/\"/g,"\\\""));
           setTimeout(function () {
            matrixIframe[i].setAttribute("src",newsrc);
           }, 1);
        }
        //品牌矩阵下砖统计图
        let totalIframe=document.getElementsByClassName(name+"_total");
        for(let i=0;i<totalIframe.length;i++){
            let oldsrc = decodeURI(totalIframe[i].src);
            //移除原本src
            totalIframe[i].removeAttribute("src");
            let newsrc =oldsrc.replace(/{\\"where.[^}]*\}}/g,JSON.stringify({where: {"name": value}}).replace(/\"/g,"\\\""));
           setTimeout(function () {
            totalIframe[i].setAttribute("src",newsrc);
           }, 1);
        }
    }
  
  
    // 修改医院iframe地址
    function  editHosIframe(name,type,value){
      var xiaopingPages = document.getElementsByClassName("xiaopingPage");
      for(var i=0;i<xiaopingPages.length;i++){
          xiaopingPages[i].style.display = "none";
      }
      console.log("xiaopingName:"+name);
      var namePage = document.getElementsByClassName(name)[0];
      namePage.style.display = "block";
      console.log("namePage:"+namePage);
  
      var names = document.getElementsByClassName(name+"_x");
    console.log('获取iframe集和',names)
      for(let i=0;i<names.length;i++){
        //获取原来的src，根据name修改成新的src
        if(names[i].src){
          let oldsrc = decodeURI(names[i].src);
        //移除原本src
        names[i].removeAttribute("src");
        //设置新src
     
       let  newsrc = oldsrc.replace(/{\\"where.[^}]*\}}/g,JSON.stringify({where: {[type]: value}}).replace(/\"/g,"\\\""))
      
        setTimeout(function () {
          names[i].setAttribute("src",newsrc);
        }, 1);
        }
        
      }
      }
    
    
    //初始化替换宣传片视频内容--------
    var vedio = document.getElementsByClassName("vedio")[0];
    var video = document.getElementsByTagName("video")[0];
    video.src = window.location.origin+"/json/%E6%96%B0%E7%91%9E%E9%B9%8F%E9%9B%86%E5%9B%A2%E5%AE%A3%E4%BC%A0%E7%89%870820-1.mp4"
    video.style.height = "1344px";
    video.style.width = "1792px";
    
    
    //--------------------------------------------socket监听事件----------------------------------------------
    socket.on('Amessages', function (data) {
      //document.getElementsByClassName("ywgl")[0].style.display = "none"
      console.log(data);
      //【小屏自带元素】
      if(data=="小屏_数据列表"){
        //step1("dataList");
        //step2(0,0,0);
      }else if(data=="小屏_医院详情"){
        //step1("dataList2");
        //step2(0,0,0);
      }else if(data=="小屏_宣传片"){
        video.play();//播放
        step1("vedio");
        step2(0,0,0);
        //隐藏侧屏页面
        var xiaopingPages = document.getElementsByClassName("xiaopingPage");
        for(var i=0;i<xiaopingPages.length;i++){
            xiaopingPages[i].style.display = "none";
        }
         document.getElementsByClassName("ywgl")[0].style.display = "none"
      }else if(data=="小屏_HIS病历系统"){
        step1("none");
        step2(1,0,0);
        //隐藏侧屏页面
        var xiaopingPages = document.getElementsByClassName("xiaopingPage");
        for(var i=0;i<xiaopingPages.length;i++){
            xiaopingPages[i].style.display = "none";
        }
        //切换视频播放状态
        if(vedio.style.display=="none"){
          video.pause();
        }else if(vedio.style.display=="block"){
          video.play();       
        }
      }else if(data=="小屏_业务概览"){
        step1("none");
        step2(0,0,0);
        //隐藏侧屏页面
        var xiaopingPages = document.getElementsByClassName("xiaopingPage");
        for(var i=0;i<xiaopingPages.length;i++){
            xiaopingPages[i].style.display = "none";
        }
          
        //切换视频播放状态
        if(vedio.style.display=="none"){
          video.pause();
        }else if(vedio.style.display=="block"){
          video.play();       
        }
        document.getElementsByClassName("ywgl")[0].style.display = "block"
  
      }else if(data=="小屏_CS"){
        step1("none");
        step2(0,1,0);
        //隐藏侧屏页面
        var xiaopingPages = document.getElementsByClassName("xiaopingPage");
        for(var i=0;i<xiaopingPages.length;i++){
            xiaopingPages[i].style.display = "none";
        }
        //切换视频播放状态
        if(vedio.style.display=="none"){
         video.pause();
        }else if(vedio.style.display=="block"){
          video.play();       
        }
      }else if(data=="小屏_DR"){
        step1("none");
        step2(0,0,1);
        //隐藏侧屏页面
        var xiaopingPages = document.getElementsByClassName("xiaopingPage");
        for(var i=0;i<xiaopingPages.length;i++){
            xiaopingPages[i].style.display = "none";
        }
         //切换视频播放状态
        if(vedio.style.display=="none"){
          video.pause();
        }else if(vedio.style.display=="block"){
          video.play();       
        }
      }
      //【主界面元素】
      else if(data=="主页_滑条柱状图_放大"){
         //step1("huatiao");
         //step2(0,0,0);
      }
      else if(data=="主页_每年销售总订单量_放大"){
        //step1("zl2p1");
         //step2(0,0);
      }else if(data=="主页_贸易公司销售额_放大"){
        //step1("zl2p2");
         //step2(0,0);
      }else if(data=="主页_师资每年增长量_放大"){
        //step1("zl2p3");
         //step2(0,0);
      }else if(data=="主页_营收新高列表_放大"){
       // step1("zl5p1");
         //step2(0,0);
      }else if(data=="主页_总营收分布_放大"){
       // step1("zl5p2");
         //step2(0,0);
      }else if(data=="主页_服务商品1_放大"){
        //step1("zl5p31");
         //step2(0,0); 
      }
      //【医疗界面元素】
      else if(data=="医疗_各地区预算_放大"){
        //step1("yl1p2");
         //step2(0,0); 
      }else if(data=="医疗_总实际收款_放大"){
       // step1("yl2p1");
         //step2(0,0); 
      }else if(data=="医疗_各地区营收_放大"){
        //step1("yl2p2");
         //step2(0,0); 
      }else if(data=="医疗_各地区病例数_放大"){
       // step1("yl2p3");
         //step2(0,0); 
      }else if(data=="医疗_各地区医院数_放大"){
     //   step1("yl4p1");
        //step2(0,0); 
      }else if(data=="医疗_客户分析_放大"){
       // step1("yl4p2");
         //step2(0,0); 
      }else if(data=="医疗_新客户来源_放大"){
        //step1("yl4p3");
         //step2(0,0); 
      }
      //【互联网界面元素】
      else if(data=="互联网_用户画像_放大"){
       // step1("hl1p2");
         //step2(0,0); 
      }else if(data=="互联网_医生数_放大"){
        //step1("hl2p1");
        // step2(0,0); 
      }else if(data=="互联网_地域分布_放大"){
       //step1("hl2p2");
        // step2(0,0); 
      }else if(data=="互联网_商城总数据_放大"){
       // step1("hl4p1");
        // step2(0,0); 
      }else if(data=="互联网_商城分类销售数据_放大"){
       // step1("hl4p2");
        // step2(0,0); 
      }else if(data=="互联网_服务商品_放大"){
       // step1("hl4p4");
        // step2(0,0); 
      }else if(data=="互联网_商品用户数_放大"){
        //step1("hl5p1");
        // step2(0,0); 
      }else if(data=="互联网_商城品牌销售数据_放大"){
       // step1("hl5p2");
        // step2(0,0); 
      }else if(data=="互联网_实体商品_放大"){
       // step1("hl5p4");
        // step2(0,0); 
      }
      
      
      //【教育界面元素】
      
      
      //【供应链界面元素】
      else if(data=="供应链_贸易公司1_放大"){
        //step1("gl2p1_1");
        // step2(0,0); 
      }else if(data=="供应链_贸易公司2_放大"){
       // step1("gl2p1_2");
        // step2(0,0); 
      }
      
      //----------------------------------------【二级下转元素】----------------------------------
      else if(data.indexOf("简单二级下转")>-1){
        var datas = data.split("|");
        var name = datas[1];
        step1("none");
        step2(0,0,0);
        document.getElementsByClassName("ywgl")[0].style.display = "none"
        step3(name);
        console.log("简单二级下转结束："+name);
      }else if(data.indexOf("医院详情")>-1){
        var datas = data.split("|");
        var name = datas[1];
        step1("none");
        step2(0,0,0);
        document.getElementsByClassName("ywgl")[0].style.display = "none"
        editHosIframe("hos","clinicName",name);
        /*var xiaopingPages = document.getElementsByClassName("xiaopingPage");
        for(var i=0;i<xiaopingPages.length;i++){
            xiaopingPages[i].style.display = "none";
        }
        var namePage = document.getElementsByClassName("hos")[0];
        namePage.style.display = "block";
        //获取对象集合
        var hos = document.getElementsByClassName("hos_x");
        for(let i=0;i<hos.length;i++){
          //获取原来的src，根据name修改成新的src
          let oldsrc = decodeURI(hos[i].src);
          //移除原本src
          hos[i].removeAttribute("src");
          //设置新src
          let newsrc = oldsrc.replace(/{\\"where.[^}]*\}}/g,JSON.stringify({where: {clinicName: name}}).replace(/\"/g,"\\\""))
          setTimeout(function () {
            hos[i].setAttribute("src",newsrc);
          }, 1);
        }*/
        console.log("医院详情："+name);
        
      //复杂二级下转判断
      }else if(data.indexOf("复杂二级下转")>-1){
        var datas = data.split("|");
        var name = datas[1];
        var type = datas[2];
        var value = datas[3];
        step1("none");
        step2(0,0,0);
        //step3(name);//点击数据有问题，暂时只展示
        step4(name,type,value)
        console.log("复杂二级下转："+name);
      }
  
    });
  }  