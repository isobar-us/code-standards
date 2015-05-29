//"use strict";
/**
 * Author: Isobar North America
 */
var ISOBAR = {
	common : {
		init: function(){
			this.toc();
			this.stuff();
		},
		// generate table of contents
		toc : function() {
			var toc = document.getElementById('toc');
			var hx = $('section h1, section h2, section h3, section h4, section h5');
			var frag = document.createDocumentFragment();
			var hx_len = hx.length;
			var toc_contents = '';
			var anchor, tag, the_text;

			for (var i = 0, j = hx_len; i < j; i++) {
				tag = hx[i].tagName.toLowerCase();

				if (tag === 'h2' || tag === 'h3') {
					the_text = $.trim( hx[i].innerHTML );
					anchor = '_' + the_text.replace(/\s+|\-/g, '_').replace(/[^A-Z0-9_]/gi, '').replace(/_+/g, '_').toLowerCase() + i;

					hx[i].id = anchor;
					hx[i].innerHTML += '<a href="#' + anchor + '" class="anchor_link" title="Permalink">◊</a>';
					toc_contents += '<li class="' + tag + '"><a href="#' + anchor + '">' + the_text + '</a></li>';
				}
				
				if (tag === 'h1') {
					//hx[i].innerHTML += '<a href="#" class="back-anchor" title="Top">Back to Top</a>';
				}
			}
			toc.innerHTML = toc_contents;
			toc.style.display = 'block';
		},
		// just hooking up back to top
		stuff : function(){
			$('a.back-anchor').on('click',function(){
				window.scrollTo(0, 0);
				return false;
			});
		}
	}
};

var UTIL = {
	fire : function(func,funcname, args){
		var namespace = ISOBAR;  // indicate your obj literal namespace here
		funcname = (funcname === undefined) ? 'init' : funcname;
		if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
			namespace[func][funcname](args);
		} 
	}, 
	loadEvents : function(){
		var bodyId = document.body.id;
		//Fire resize event and call setLayout(). Put onresize events in there.
		window.addEventListener('resize', UTIL.debounce(UTIL.setLayout, 50));
		// hit up common first.
		UTIL.fire('common');
		// do all the classes too.
		$.each(document.body.className.split(/\s+/),function(i,classnm){
			UTIL.fire(classnm);
			UTIL.fire(classnm,bodyId);
		});
		$('.menu-button').on('click',function(e){
			$('body').toggleClass('menu-open');
		});
		UTIL.setLayout();
		UTIL.fire('common','finalize');
	},
	debounce : function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	},
	setLayout : function(){
		//Set classes on the body based on screen width.
		//Display the, 'hamburger' button & menu through css based on these classes added.
		var screenWidth = window.innerWidth;
		screenWidth > 769 ? $('body').removeClass('menu-open') : UTIL.overlay();
	},
	overlay : function(){
		if($('.overlay').length == 0){
			$('body').append('<div class="overlay"></div>');
			$('.overlay').on('click',function(e){
				$('body').toggleClass('menu-open');
			});
		}
	}
}; 
// kick it all off here 
$(document).ready(UTIL.loadEvents);





