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
			this.toc();
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
					//$('#toc').html(isobar.common.toc());
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
				frag = document.createDocumentFragment(),
				hx_len = hx.length,
				anchor, tag, the_text;
				
			for (var i = 0, j = hx_len; i < j; i++) {
				tag = hx[i].tagName.toLowerCase();

				if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'h4' || tag === 'h5') {
					the_text = $.trim( hx[i].innerHTML );
					anchor = '_' + the_text.replace(/\s+|\-/g, '_').replace(/[^A-Z0-9_]/gi, '').replace(/_+/g, '_').toLowerCase();

					hx[i].id = anchor;
					$(hx[i]).before('<a href="#'+ anchor +'" class="anchor_link" title="Permalink">◊</a>');
					toc.innerHTML += '<li class="'+ tag +'"><a href="#'+ anchor +'">'+ the_text +'</a></li>';
				}
				
				if (tag === 'h1') {
					$(hx[i]).prev('.anchor_link').before('<a href="#" class="backAnchor" title="Top">Back to Top</a>');
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



/**
 * Isobar Canvas Logo Animation
 * Created by Jared Williams @jaredwilli 
 */
 
(function($) {
	if (Modernizr.canvas) {	  
		var canvas = document.getElementById('canvas-logo'),
			con = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height,
			play = false,
			dots = [],
			numDots = 1,
			time = 0,
			body = document.body,
			img = new Image();
			
		// Constructor that defines new Dots
		var Dot = function(x, y, radius, mass, vX, vY, aX, aY, rgb) {
			// position, size, mass
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.mass = mass;
			// velocity
			this.vX = vX;
			this.vY = vY;
			// accelleration
			this.aX = aX;
			this.aY = aY;
			// color
			this.rgb = rgb;
		};
	 
		function makeDots() {
			for( var i = 0; i < numDots; i++ ) {
			
				var x = (Math.random()*(w - 40)),
					y = 140 ,//+ (Math.random()*(h - 40)),
					radius = 4 + Math.random() * 11,
					mass = radius /4;
					vX = Math.random() * 4 - 2,
					vY = Math.random() * 4, // random number between -2 and 2
					aX = Math.random() * 0.2 - 0.1,
					aY = Math.random() * 0.2 - 0.15;
					
					rgb = 'rgba(0, 100, 200, .6)';
			
				dots.push(new Dot( x, y, radius, mass, vX, vY, aX, aY, rgb ));
			}
		}
		
		function timer() {
			if( dots.length > 8 ) {
				dots.shift();
			} else {
				time = setInterval( function() {
					makeDots();
					timer();
				}, 100);
			}
		}	
	
		/* Animate it */
		function animate() {
			con.clearRect(0, 0, w, h);
	 
			for( var i = 0; i < dots.length; i++ ) {
				var a = dots[i];
	 
				/**
				 * Pythagoras' Theorm
				 * hyp = sqrt(x^2+y^2)
				 */
				for( var j = i + 1; j < dots.length; j++ ) {
					var b = dots[j];
					
					// Collision detection
					var	dX = b.x - a.x,
						dY = b.y - a.y,
						dist = Math.sqrt((dX*dX) + (dY*dY));
						
					if( dist < a.radius + b.radius ) {
						var angle = Math.atan2(dY, dX),
							sine = Math.sin(angle),
							cosine = Math.cos(angle);
						// rotating the circle angles to calcuate the direction to bounce
						var x = 0,
							y = 0;
	 
						var xB = dX * cosine + dY * sine,
							yB = dY * cosine - dX * sine;
	 
						var vXb = b.vX * cosine + b.vY * sine,
							vYb = b.vY * cosine - b.vX * sine;
						
						// conservation of motion using mass and velocity
						var vTotal = vX - vXb;
						vX = ((a.mass - b.mass) * vX + 2 * b.mass * vXb) / (a.mass + b.mass);
						vXb = vTotal + vX;
						
						// move them apart so they dont stick together
						xB = x + (a.radius + b.radius);
						
						// rotate circles back to original positions
						a.x = a.x + (x * cosine - y * sine);
						a.y = a.y + (y * cosine + x * sine);
	 
						b.x = a.x + (xB * cosine - yB * sine);
						b.y = a.y + (yB * cosine + xB * sine);
						
						a.vX = vX * cosine - vY * sine;
						a.vY = vY * cosine + vX * sine;
						
						b.vX = vXb * cosine - vYb * sine;
						b.vY = vYb * cosine - vXb * sine;
					}
						
				}
				
				// update the x and y axis with the velocity of each asteroid
				a.x += a.vX || a.radius;
				a.y -= a.vY || a.radius;
	 
				// add the acceleration
				a.aX = 0
				a.aY = 0;			
				/* if( Math.abs(a.vX) < 10 ) { a.vX += a.aX; }
				if( Math.abs(a.vY) < 10 ) { a.vY += a.aY; }	*/
				
							
				// adding a boundry
				if( a.x - a.radius < 0 ) { 
					a.x = a.radius; 
					a.vX *= -1; 
					a.aX *= -1; 
				} else if( a.x + a.radius > w ) {
					a.x = w - a.radius;
					a.vX *= -1;
					a.aX *= -1;
				}
				if( a.y - a.radius < 0 ) {
					a.y = a.radius;
					a.vY *= -1;
					a.aY *= -1;
				} else if( a.y + a.radius > h ) {
					a.y = h - a.radius;
					a.vY *= -1;
					a.aY *= -1;
				}
				
				// draw the balls
				clearInterval(time);
	
				con.save();			
				con.shadowBlur = 5;
				con.shadowOffsetX = 0;
				con.shadowOffsetY = 3;
				con.shadowColor = 'hsla(40, 50%, 0%, .4)';
				//con.fillStyle = 'hsla(205, 90%, 50%, .9)';
				
				con.fillStyle = a.rgb;
				con.beginPath();
				con.arc(a.x, a.y, a.radius, 0, Math.PI*2, false);
				
				con.closePath();
				con.fill();
				con.restore();
	
				/* Draw the Logo */
				con.fillStyle = 'hsla(12, 100%, 50%, .5)'; //Isobar Orange
	
				con.save();
				con.shadowBlur = 3;
				con.shadowOffsetX = 0;
				con.shadowOffsetY = 1;
				con.shadowColor = 'hsla(40, 50%, 0%, .2)';
	//			con.scale(.5, .5);
	//			con.translate(-25, -75);
				draw();
				con.restore();
			}
			
			if( play ) {
				requestAnimationFrame(animate);
			}
		}
	
		function init() {
			
			var kkeys = [],
				cornify = '67,79,82,78,73,70,89',
				plaid = '80,76,65,73,68',
				konami = '38,38,40,40,37,39,37,39,66,65',
				imanok = '37,38,39';			
			
			$(document).keydown(function(e) {
				kkeys.push( e.keyCode );
			
				if( kkeys.toString().indexOf( imanok ) >= 0 || kkeys.toString().indexOf( konami ) >= 0 ) {
					jQuery(document).unbind('keydown', arguments.callee);
					
					jQuery('canvas').click('click', function() {
						play = false;
					});
						
					var main = document.getElementById('main'), 
						logo = document.getElementById('logo')
					logo.style.visibility = 'hidden';
					canvas.style.visibility = 'visible';
					main.firstElementChild.style.visibility = 'hidden';
					main.firstElementChild.nextElementSibling.style.visibility = 'hidden';
					
					play = true;
					animate();	
					timer();
				}
				else if( kkeys.toString().indexOf( cornify ) >= 0 ) {
					jQuery(document).unbind('keydown', arguments.callee);
					jQuery.getScript('http://www.cornify.com/js/cornify.js',function(){
						cornify_add();
						jQuery(document).keydown(cornify_add);
					});
				} else if ( kkeys.toString().indexOf( plaid ) >= 0 ) {
					$(document).unbind('keydown', arguments.callee);
					$.getScript('http://anti-code.com/plaidirish/paulify.js', function(){
						paulify_add();
						$(document).keydown(paulify_add);
					});          
				}
			});
		}
		init();
	
		function draw() {
			
			var iso = [
				/* I */
				con.beginPath(),
				new Move(39, 163),
				new Line(39, 248),
				new Line(60, 248),
				new Line(60, 163),		
				con.closePath(),
				new Arc(50, 142, 11),
				con.closePath(),
				con.fill(),
				
				/* S */
				con.beginPath(),
				new Move(139, 168),
				new Bezier(70, 140, 32, 210, 110, 213),
				new Line(110, 196),
				new Bezier(81, 192, 84, 172, 126, 182),
				new Line(139, 168),
				con.save(),
				con.translate(215, 409),
				con.rotate(Math.PI),
				new Move(148, 168),
				new Bezier(65, 135, 42, 211, 110, 213),
				new Line(110, 196),
				new Bezier(81, 192, 90, 168, 134, 180),
				new Line(148, 168),
				con.closePath(),
				con.fill(),
				con.restore(),
				
				/* O */
				con.save(),
				con.beginPath(),
				con.translate(-6, 0),
				con.scale(1.04, 1),
				new Arc(193, 205, 44),
				con.closePath(),
				con.restore(),
				con.fill(),
				con.save(),
				con.beginPath(),
				con.fillStyle = 'white',
				new Arc(195, 205, 26),
				con.closePath(),
				con.fill(),
				con.restore(),
				
				/* B */
				con.beginPath(),
				new Move(269, 244),
				new Line(269, 248),
				new Line(247, 248),
				new Line(247, 148),
				new Line(269, 126),
				new Line(269, 149),
				new Line(269, 165),
				new Quad(310, 155, 330, 185),
				new Quad(345, 220, 314, 242),
				new Quad(294, 255, 269, 245),
				new Move(269, 226),
				new Bezier(300, 242, 327, 215, 310, 190),
				new Quad(290, 173, 269, 187),
				con.closePath(),
				con.fill(),
				
				/* A */
				con.beginPath(),
				new Move(398, 196),
				new Line(398, 248),
				new Line(419, 248),
				new Line(419, 196),
				new Bezier(420, 145, 350, 160, 349, 173),
				new Line(359, 183),
				new Bezier(384, 170, 399, 183, 397, 195),
				new Bezier(405, 194, 340, 174, 339, 222),
				new Bezier(345, 260, 396, 257, 415, 224),
				new Move(398, 220),
				new Line(398, 226),
				new Bezier(380, 242, 342, 224, 365, 208),
				new Quad(379, 200, 398, 210),
				con.closePath(),
				con.fill(),
				
				/* R */
				con.beginPath(),
				new Move(427, 163),
				new Line(427, 248),
				new Line(449, 248),
				new Line(449, 163),
				new Move(449, 174),
				new Quad(452, 165, 473, 163),
				new Line(473, 180),
				new Quad(456, 176, 449, 190),
				con.closePath(),
				con.fill(),
			];
			
			var isoLength = iso.length;
			for( var i = 0; i < isoLength; i++ ) {
				iso[i];
			}
		}
	
	
		/**
		 * Move to Coordinate Point x, y
		 *
		 * @ctx.moveTo()
		 * x, y - move context to this point
		 */
		function Move(x, y) {
			return con.moveTo(x, y);
		}
	
		/**
		 * Line Maker
		 * 
		 * @ctx.lineTo()
		 * x, y - draw line to this point
		 */
		function Line(x, y) {
			return con.lineTo(x, y);
		}
		
		/**
		 * Arc/Circle Maker
		 * 
		 * @ctx.arc()
		 * x, y - center point of circle
		 * r - circle radius
		 * a1, a2 - start angle, end angle
		 * aW - anti-clockwise
		 */
		function Arc(x, y, r) {
			return con.arc(x, y, r, 0, Math.PI * 2, false);
		}
		
		/**
		 * Quadratic Curve Maker
		 *
		 * @ctx.quadraticCurveTo(controlX, controlY, endX, endY);
		 * x, y - x and y coordinates for control point
		 * eX, eY - end point
		 */
		function Quad(x, y, eX, eY) {
			return con.quadraticCurveTo(x, y, eX, eY);
		}
		
		/**
		 * Bezier Curve Maker
		 *
		 * @ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
		 * x1, y1 - x and y coordinates for first control point
		 * x1, y1 - x and y coords for second control point
		 * eX, eY 	- end point
		 */
		function Bezier(x1, y1, x2, y2, eX, eY) {		
			return con.bezierCurveTo(x1, y1, x2, y2, eX, eY);
		}
		
		/**
		 * Grid Lines
		 */
		function grid() {
			for( var x = 0.5; x < 500; x += 20 ) {
				Move( x, 0 );
				Line( x, 400 );
			}
			for( var y = 0.5; y < 400; y += 20 ) {
				Move( 0, y );
				Line( 500, y );
			}
			con.strokeStyle = '#ccc';
			con.stroke();
		}	
		
		/**
		 * Convert degrees to radians
		 */
		function degRad(deg) {
			this.deg = deg || 1;
			return this.deg * (Math.PI / 180); // 0.0175 radians
		}
	}		
})(jQuery);