

/*** 
    Simple jQuery Slideshow Script
    Released by Jon Raasch (jonraasch.com) under FreeBSD license: free to use or modify, not responsible for anything, etc.  Please link out to me if you like it :)
***/

function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}



// JQUERY ANYSTRECH//

/*
 * jQuery Anystretch
 * Version 1.2 (@jbrooksuk / me.itslimetime.com)
 * https://github.com/jbrooksuk/jquery-anystretch
 * Based on Dan Millar's Port
 * https://github.com/danmillar/jquery-anystretch
 *
 * Add a dynamically-resized background image to the body
 * of a page or any other block level element within it
 *
 * Copyright (c) 2012 Dan Millar (@danmillar / decode.uk.com)
 * Dual licensed under the MIT and GPL licenses.
 *
 * This is a fork of jQuery Backstretch (v1.2)
 * Copyright (c) 2011 Scott Robbin (srobbin.com)
*/
(function(a){a.fn.anystretch=function(d,c,e){var b=this.selector.length?false:true;return this.each(function(q){var s={positionX:"center",positionY:"center",speed:0,elPosition:"relative",dataName:"stretch"},h=a(this),g=b?a(".anystretch"):h.children(".anystretch"),l=g.data("settings")||s,m=g.data("settings"),j,f,r,p,v,u;if(c&&typeof c=="object"){a.extend(l,c)}if(c&&typeof c=="function"){e=c}a(document).ready(t);return this;function t(){if(d||h.length>=1){var i;if(!b){h.css({position:l.elPosition,background:"none"})}if(g.length==0){g=a("<div />").attr("class","anystretch").css({left:0,top:0,position:(b?"fixed":"absolute"),overflow:"hidden",zIndex:(b?-999999:-999998),margin:0,padding:0,height:"100%",width:"100%"})}else{g.find("img").addClass("deleteable")}i=a("<img />").css({position:"absolute",display:"none",margin:0,padding:0,border:"none",zIndex:-999999}).bind("load",function(A){var z=a(this),y,x;z.css({width:"auto",height:"auto"});y=this.width||a(A.target).width();x=this.height||a(A.target).height();j=y/x;o(function(){z.fadeIn(l.speed,function(){g.find(".deleteable").remove();if(typeof e=="function"){e()}})})}).appendTo(g);if(h.children(".anystretch").length==0){if(b){a("body").append(g)}else{h.append(g)}}g.data("settings",l);var w="";if(d){w=d}else{if(h.data(l.dataName)){w=h.data(l.dataName)}else{return}}i.attr("src",w);a(window).resize(o)}}function o(i){try{u={left:0,top:0};r=k();p=r/j;if(p>=n()){v=(p-n())/2;if(l.positionY=="center"||l.centeredY){a.extend(u,{top:"-"+v+"px"})}else{if(l.positionY=="bottom"){a.extend(u,{top:"auto",bottom:"0px"})}}}else{p=n();r=p*j;v=(r-k())/2;if(l.positionX=="center"||l.centeredX){a.extend(u,{left:"-"+v+"px"})}else{if(l.positionX=="right"){a.extend(u,{left:"auto",right:"0px"})}}}g.children("img:not(.deleteable)").width(r).height(p).filter("img").css(u)}catch(w){}if(typeof i=="function"){i()}}function k(){return b?h.width():h.innerWidth()}function n(){return b?h.height():h.innerHeight()}})};a.anystretch=function(d,b,e){var c=("onorientationchange" in window)?a(document):a(window);c.anystretch(d,b,e)}})(jQuery);