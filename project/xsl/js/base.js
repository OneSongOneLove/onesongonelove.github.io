function autoGo(n){clearInterval(timer),n&&(timer=setInterval(go,3e3))}function go(){index++,selectPic(index)}function selectPic(n){$ul.animate({left:-n*imgWidth},1e3,function(){index==$ul.children().length-1&&($ul.css("left","0px"),index=0)})}var imgWidth=$(".screen").width(),index=0,timer=null,flag=!0;autoGo(flag);var $ul=$(".screen > ul");$ul.find("li").eq(0).clone(!0).appendTo($ul),console.log($ul.children()),$(".top_nav_ks").on("mouseenter",function(){$(".nav_kszx").css({display:"block"})}).on("mouseleave",function(){$(".nav_kszx").css({display:"none"})}),$(".nav_kszx").on("mouseenter",function(){$(".nav_kszx").css({display:"block"})}).on("mouseleave",function(){$(".nav_kszx").css({display:"none"})}),$(".top_nav_xz").on("mouseenter",function(){$(".nav_xzzx").css({display:"block"})}).on("mouseleave",function(){$(".nav_xzzx").css({display:"none"})}),$(".nav_xzzx").on("mouseenter",function(){$(".nav_xzzx").css({display:"block"})}).on("mouseleave",function(){$(".nav_xzzx").css({display:"none"})}),$(".top_nav_fw").on("mouseenter",function(){$(".nav_cpfw").css({display:"block"})}).on("mouseleave",function(){$(".nav_cpfw").css({display:"none"})}),$(".nav_cpfw").on("mouseenter",function(){$(".nav_cpfw").css({display:"block"})}).on("mouseleave",function(){$(".nav_cpfw").css({display:"none"})}),$(".top_nav_gm").on("mouseenter",function(){$(".nav_gmcp").css({display:"block"})}).on("mouseleave",function(){$(".nav_gmcp").css({display:"none"})}),$(".nav_gmcp").on("mouseenter",function(){$(".nav_gmcp").css({display:"block"})}).on("mouseleave",function(){$(".nav_gmcp").css({display:"none"})}),$(".top_nav_gy").on("mouseenter",function(){$(".nav_gywm").css({display:"block"})}).on("mouseleave",function(){$(".nav_gywm").css({display:"none"})}),$(".nav_gywm").on("mouseenter",function(){$(".nav_gywm").css({display:"block"})}).on("mouseleave",function(){$(".nav_gywm").css({display:"none"})}),$(".show").on("mouseenter",function(){$(".hide").addClass("showewm animated bounceInLeft").removeClass("hideewm bounceOutUp")}),$(".show").on("mouseleave",function(){$(".hide").addClass("animated bounceOutUp").removeClass("showewm")});