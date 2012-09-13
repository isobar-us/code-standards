//"use strict";
/**
 * Author: Isobar North America
 */
var isobar = {
	common: {		
		locale: null,
		sections: [
			'general', 'markup', 'css', 'javascript', 
			'accessibility', 'performance', 'browsers', 'seo', 
			'codeReviews', 'appendices', 'revisionHistory'
		],
		init: function() {
			// TODO: Need to re-run these methods after the ajax request returns the language content
			// this.toc();
			this.syntax();
			this.backLink();

			if (isobar.common.locale !== null) {
				//console.log(isobar.common.locale);
				isobar.common.storeLocal();
			} else {
				isobar.common.locale = 'en';
				isobar.common.storeLocal();
			}
			
			$('#flags a').on('click', function(e) {
				var store = window.localStorage,
					locale = store.getItem('locale') || isobar.common.locale;
				
				locale = $(this).data('lang');
				store.setItem('locale', locale);
				store.getItem('locale');
				isobar.common.storeLocal();
				
				e.preventDefault();
			});
			
			window.applicationCache.addEventListener('updateready', isobar.common.onUpdateReady, false);
			if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
				isobar.common.onUpdateReady();
			}
			
			// Table of Contents navigation
			$('#toc a').on('click', function(e) {
				var a = $(this).attr('href');
				$(window).scrollTo(a);
				e.preventDefault();
			});			
		},
		storeLocal: function() {
			if ('localStorage' in window && window['localStorage'] !== null) {
				var store = window.localStorage,
					locale = store.getItem('locale') || isobar.common.locale,
					sections = isobar.common.sections,
					pathList = [],
					path = '';
				
				if (locale === null) {
					locale = 'en';
				}
				
				store.setItem('locale', locale);
				store.getItem('locale');
				
				for (var i = 0; i < sections.length; i++) {
					path = 'sections/'+ store.getItem('locale') +'/'+ sections[i] +'.html';
					store.setItem(sections[i], path);
					store.getItem(sections[i]);
					pathList.push(store.getItem(sections[i]));
				}
				console.log(pathList);
				
				$.ajax({
					data: {
						pathList: pathList
					},
					url: 'inc/session.php',
					type: 'post'
				}).done(function(response) {
					$('#main').html(response);
					$('#toc').html(isobar.common.toc());
				}).fail(function(error) {
					console.log(error);
				});
				
			}
		},
		onUpdateReady: function() {
			console.log('found new version!');
		},
		// generate table of contents
		toc: function() {
			var main = document.getElementById('main'),
				toc = document.getElementById('toc'),
				hx = $('section h1, section h2, section h3, section h4, section h5'),
				// frag = document.createDocumentFragment(),
				hx_len = hx.length,
				anchor, tag, the_text;
				
			for (var i = 0, j = hx_len; i < j; i++) {
				tag = hx[i].tagName.toLowerCase();

				if (tag === 'h1' || tag == 'h2' || tag == 'h3' || tag == 'h4' || tag == 'h5') {
					the_text = $.trim( hx[i].innerHTML );
					anchor = '_' + the_text.replace(/\s+|\-/g, '_').replace(/[^A-Z0-9_]/gi, '').replace(/_+/g, '_').toLowerCase();

					hx[i].id = anchor;
					hx[i].innerHTML += ' <a href="#' + anchor + '" class="anchor_link" title="Permalink">◊</a>';
					toc.innerHTML += '<li class="' + tag + '"><a href="#' + anchor + '">' + the_text + '</a></li>';
				}
				
				if (tag === 'h1') {
					hx[i].innerHTML += '<a href="#" class="backAnchor" title="Top">Back to Top</a>';
				}
			}
			toc.style.display = 'block';
		},
		// just hooking up back to top
		backLink: function() {
			$('a.backAnchor').on('click', function(e) {
				window.scrollTo(0, 0);
				e.preventDefault();
			});
		},
		// set up syntax highlighter
		syntax: function() {
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
		var namespace = isobar;  // indicate your obj literal namespace here
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

