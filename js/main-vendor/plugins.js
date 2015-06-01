// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
// make it safe to use console.log always
(function(b){
	function c(){}
	for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a; a = d.pop(); )
	b[a] = b[a] || c;
})(window.console = window.console || {});


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/**
 * Provides requestAnimationFrame in a cross browser way.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */
if( !window.requestAnimationFrame ) {
	window.requestAnimationFrame = ( function() {
		return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
			window.setTimeout( callback, 1000 / 60 );
		};
	})();
}

/*
 * jQuery.ScrollTo - Easy element scrolling using jQuery
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 06/05/2009
 * @author Ariel Flesler
 * @version 1.4.2
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(c){var a=c.scrollTo=function(f,e,d){c(window).scrollTo(f,e,d)};a.defaults={axis:"xy",duration:parseFloat(c.fn.jquery)>=1.3?0:1};a.window=function(d){return c(window)._scrollable()};c.fn._scrollable=function(){return this.map(function(){var e=this,d=!e.nodeName||c.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!d){return e}var f=(e.contentWindow||e).document||e.ownerDocument||e;return c.browser.safari||f.compatMode=="BackCompat"?f.body:f.documentElement})};c.fn.scrollTo=function(f,e,d){if(typeof e=="object"){d=e;e=0}if(typeof d=="function"){d={onAfter:d}}if(f=="max"){f=9000000000}d=c.extend({},a.defaults,d);e=e||d.speed||d.duration;d.queue=d.queue&&d.axis.length>1;if(d.queue){e/=2}d.offset=b(d.offset);d.over=b(d.over);return this._scrollable().each(function(){var l=this,j=c(l),k=f,i,g={},m=j.is("html,body");switch(typeof k){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(k)){k=b(k);break}k=c(k,this);case"object":if(k.is||k.style){i=(k=c(k)).offset()}}c.each(d.axis.split(""),function(q,r){var s=r=="x"?"Left":"Top",u=s.toLowerCase(),p="scroll"+s,o=l[p],n=a.max(l,r);if(i){g[p]=i[u]+(m?0:o-j.offset()[u]);if(d.margin){g[p]-=parseInt(k.css("margin"+s))||0;g[p]-=parseInt(k.css("border"+s+"Width"))||0}g[p]+=d.offset[u]||0;if(d.over[u]){g[p]+=k[r=="x"?"width":"height"]()*d.over[u]}}else{var t=k[u];g[p]=t.slice&&t.slice(-1)=="%"?parseFloat(t)/100*n:t}if(/^\d+$/.test(g[p])){g[p]=g[p]<=0?0:Math.min(g[p],n)}if(!q&&d.queue){if(o!=g[p]){h(d.onAfterFirst)}delete g[p]}});h(d.onAfter);function h(n){j.animate(g,e,d.easing,n&&function(){n.call(this,f,d)})}}).end()};a.max=function(j,i){var h=i=="x"?"Width":"Height",e="scroll"+h;if(!c(j).is("html,body")){return j[e]-c(j)[h.toLowerCase()]()}var g="client"+h,f=j.ownerDocument.documentElement,d=j.ownerDocument.body;return Math.max(f[e],d[e])-Math.min(f[g],d[g])};function b(d){return typeof d=="object"?d:{top:d,left:d}}})(jQuery);
