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
				hx = $('section h1, section h2, section h3, section h4, section h5, #revisions h1'),
				frag = document.createDocumentFragment(),
				hx_len = hx.length,
				anchor, tag, the_text;
				
			for (var i = 0, j = hx_len; i < j; i++) {
				tag = hx[i].tagName.toLowerCase();

				if (tag === 'h1' || tag == 'h2' || tag == 'h3' || tag == 'h4' || tag == 'h5') {
					the_text = $.trim( hx[i].innerHTML );
					anchor = '_' + the_text.replace(/\s+|\-/g, '_').replace(/[^A-Z0-9_]/gi, '').replace(/_+/g, '_').toLowerCase();

					hx[i].id = anchor;
					hx[i].innerHTML += '<a href="#' + anchor + '" class="anchor_link" title="Permalink">◊</a>';
					toc.innerHTML += '<li class="' + tag + '"><a href="#' + anchor + '">' + the_text + '</a></li>';
				}
				
				///*console.log({ 'a': anchor, 'tag': tag, 'hx': hx[i] })*/;
				
				if (tag === 'h1') {
					hx[i].innerHTML += '<a href="#" class="backAnchor" title="Top">Back to Top</a>';
				}
			}
			toc.style.display = 'block';
		},
		// just hooking up back to top
		stuff : function(){
			$('a.backAnchor').live('click',function(){
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
		var bodyId = document.body.id;
		// hit up common first.
		UTIL.fire('common');
		// do all the classes too.
		$.each(document.body.className.split(/\s+/),function(i,classnm){
			UTIL.fire(classnm);
			UTIL.fire(classnm,bodyId);
		});
		UTIL.fire('common','finalize');
	} 
}; 
// kick it all off here 
$(document).ready(UTIL.loadEvents);
