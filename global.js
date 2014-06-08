/* =============================================================

    Smooth Scroll 2.3
    Animate scrolling to anchor links, by Chris Ferdinandi.
    http://gomakethings.com

    Free to use under the MIT License.
    http://gomakethings.com/mit/

 * ============================================================= */
(function(){if("querySelector" in document&&"addEventListener" in window&&Array.prototype.forEach){var a=function(i,g){var m=16;var l=window.pageYOffset;var k=i.offsetTop;var e=k-l;var j=e/(g/m);var d;var h=function(){window.scrollBy(0,j);d()};var f=function(){clearInterval(c);setTimeout(function(){window.scrollTo(0,k)},m)};if(j>=0){d=function(){var n=window.pageYOffset;if((n>=(k-j))||((window.innerHeight+n)>=document.body.offsetHeight)){f()}}}else{d=function(){var n=window.pageYOffset;if(n<=(k||0)){f()}}}var c=setInterval(h,m)};var b=document.querySelectorAll(".js-scroll");[].forEach.call(b,function(c){c.addEventListener("click",function(g){g.preventDefault();var d=c.getAttribute("href");var h=document.querySelector(d);var f=c.getAttribute("data-speed");if(h){a(h,f||200)}},false)})}})();

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1856861-4']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
