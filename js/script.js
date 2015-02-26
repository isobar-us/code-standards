//"use strict";
/**
 * Author: Isobar North America
 */
var ISOBAR = {
	common : {
		init: function(){
			this.toc();
			this.syntax();
			this.stuff();
		},
		// generate table of contents
		toc : function(){
			var main = document.getElementById('main'),
				toc = document.getElementById('toc'),
				hx = $('section h1, section h2, section h3, section h4, section h5'),
				frag = document.createDocumentFragment(),
				hx_len = hx.length,
				anchor, tag, the_text;


			// this code is awful. talk about a set up for multiple dom updates...
			for (var i = 0, j = hx_len; i < j; i++) {
				tag = hx[i].tagName.toLowerCase();

				if (tag === 'h2' || tag === 'h3') {
					the_text = $.trim( hx[i].innerHTML );
					anchor = '_' + the_text.replace(/\s+|\-/g, '_').replace(/[^A-Z0-9_]/gi, '').replace(/_+/g, '_').toLowerCase() + i;

					hx[i].id = anchor;
					hx[i].innerHTML += '<a href="#' + anchor + '" class="anchor_link" title="Permalink">◊</a>';
					toc.innerHTML += '<li class="' + tag + '"><a href="#' + anchor + '">' + the_text + '</a></li>';
				}
				
				// console.log({ 'a': anchor, 'tag': tag, 'hx': hx[i] });
				
				if (tag === 'h1') {
					//hx[i].innerHTML += '<a href="#" class="back-anchor" title="Top">Back to Top</a>';
				}
			}
			toc.style.display = 'block';
		},
		// just hooking up back to top
		stuff : function(){
			$('a.back-anchor').on('click',function(){
				window.scrollTo(0, 0);
				return false;
			});
		},
		// set up syntax highlighter
		syntax : function(){
			SyntaxHighlighter.config.tagName = 'textarea';
			SyntaxHighlighter.defaults['wrap-lines'] = false;
			SyntaxHighlighter.defaults['auto-links'] = false;
			SyntaxHighlighter.defaults['toolbar'] = false;
			SyntaxHighlighter.defaults['tab-size'] = 4;
			SyntaxHighlighter.all();
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
		//Add event to window.resize. function will be used to adjust changing widths.
		window.addEventListener('resize', UTIL.debounce(UTIL.setLayout, 50));

		var bodyId = document.body.id;
		// hit up common first.
		UTIL.fire('common');
		// do all the classes too.
		$.each(document.body.className.split(/\s+/),function(i,classnm){
			UTIL.fire(classnm);
			UTIL.fire(classnm,bodyId);
		});
		$('#menu-button').on('click',function(e){
			$('body').toggleClass('menu-open');
			
		});
		$('#grey-overlay').on('click',function(e){
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
		screenWidth > 768 ? $('body').removeClass('tablet').removeClass('menu-open') : true;
		screenWidth > 420 && screenWidth < 768 ? $('body').addClass('tablet') : true;
		screenWidth < 420 ? $('body').addClass('mobile').addClass('tablet') : $('body').removeClass('mobile');

	}
}; 
// kick it all off here 
$(document).ready(UTIL.loadEvents);





