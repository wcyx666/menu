$(function(){

    var JSon = {"list":[{"buttonIdValue":"","createTime":null,"createUid":0,"id":0,"menuCss":"","menuIcon":"icon-settings","menuLevel":1,"menuName":"一级菜单1","menuType":1,"menuUrl":"javascript:void(0)","orders":1,"pid":0,"sonMenu":[{"buttonIdValue":"","createTime":null,"createUid":0,"id":0,"menuCss":"","menuIcon":"icon-settings","menuLevel":2,"menuName":"城市代码","menuType":1,"menuUrl":"CityArea.html","orders":2,"pid":0,"sonMenu":[{"buttonIdValue":"edit","createTime":null,"createUid":0,"id":0,"menuCss":"","menuIcon":"icon-settings","menuLevel":0,"menuName":"编辑","menuType":2,"menuUrl":"","orders":1,"pid":0,"sonMenu":[],"sysFlag":"YUNYING"}],"sysFlag":"YUNYING"},{"buttonIdValue":"","createTime":null,"createUid":0,"id":0,"menuCss":"","menuIcon":"icon-settings","menuLevel":2,"menuName":"业务字典","menuType":1,"menuUrl":"Dictionary.html","orders":1,"pid":0,"sonMenu":[],"sysFlag":"YUNYING"}],"sysFlag":"YUNYING"},{"buttonIdValue":"","createTime":null,"createUid":0,"id":0,"menuCss":"","menuIcon":"icon-settings","menuLevel":1,"menuName":"一级菜单2","menuType":1,"menuUrl":"javascript:void(0)","orders":2,"pid":0,"sonMenu":[{"buttonIdValue":"","createTime":null,"createUid":0,"id":0,"menuCss":"","menuIcon":"icon-settings","menuLevel":2,"menuName":"二级菜单1","menuType":1,"menuUrl":"javascript:void(0)","orders":1,"pid":0,"sonMenu":[{"buttonIdValue":"","createTime":null,"createUid":0,"id":0,"menuCss":"","menuIcon":"icon-settings","menuLevel":3,"menuName":"三级菜单1","menuType":1,"menuUrl":"javascript:void(0)","orders":1,"pid":0,"sonMenu":[],"sysFlag":"YUNYING"}],"sysFlag":"YUNYING"}],"sysFlag":"YUNYING"}]}
    console.log(JSon.list)
    for (var i = 0; i < JSon.list.length; i++) {
        $('.oul').append('<li class="nav-item"><a href="javascript:;"><i class="my-icon nav-icon icon_1"></i><span>'+JSon.list[i].menuName+'</span><i class="my-icon nav-more"></i></a><ul></ul></li>')
        for (var j = 0; j < JSon.list[i].sonMenu.length; j++) {
            $('.nav-item ul').eq(i).append('<li><a href="javascript:;"><span>'+JSon.list[i].sonMenu[j].menuName+'</span></a></li>');
            for (var k = 0; k < JSon.list[i].sonMenu[j].sonMenu.length; k++) {
                console.log(k)
                $('.nav-item ul:eq('+i+') li:eq('+k+')').append('<p><a href="javascript:;"><span class="three">'+JSon.list[i].sonMenu[j].sonMenu[k].menuName+'</span></a></p>');
                //console.log($('.nav-item ul li:eq('+j+')'))
            }
        }
    }
   

    // nav收缩展开
    $('.nav-item>a').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });
    //nav-mini切换
    $('#mini').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
        }else{
            $('.nav').removeClass('nav-mini');
        }
    });



});