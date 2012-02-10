<?php
$page_title = "Estándares y Prácticas Recomendadas de Desarrollo Front-end";
$page_keywords = "Estándares de código Isobar, estándares de código, desarrollo frontend, prácticas recomendadas de frontend, mejores prácticas de frontend, estándares de código html, estándares de código html5, estándares de código css, prácticas recomendadas de código, mejores prácticas de código, desarrollo";
$page_description = "Estándares de Código y Prácticas Recomendadas de Desarrollo Front-end de Isobar North America";
$protocol = (strstr('https',$_SERVER['SERVER_PROTOCOL']) === false)?'http':'https'; 
$page_root = $protocol.'://'.$_SERVER['SERVER_NAME'].dirname($_SERVER['REQUEST_URI']);
include_once('layout/header.php');
?>

	<body>
		<a class="fork" href="https://github.com/isobar-idev/code-standards/" target="_blank"></a>
		<div id="container">
		
			<header role="banner">
				<h1><a id="logo" href="<?php echo $page_root; ?>">Isobar US</a></h1>
				
				<canvas id="canvas-logo" width="500" height="300">
					<strong>¡Su navegador no puede manejar esta maravilla!</strong>
				</canvas>

				<ul id="social">
					<li><a class="icon" href="http://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=8943b7fd64cd8b1770ff5affa9a9437b&service=5&title=Estándares%20de%20Código%20y%20Prácticas%20Recomendadas%20de%20Desarrollo%20Front-end%20de%20Isobar%20North%20America&link=http://na.isobar.com/standards/&source=Shareaholic" id="facebook"></a></li>
					<li><a class="icon" href="http://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=8943b7fd64cd8b1770ff5affa9a9437b&service=7&title=Estándares%20de%20Código%20y%20Prácticas%20Recomendadas%20de%20Desarrollo%20Front-end%20de%20Isobar%20North%20America&link=http://na.isobar.com/standards/&source=Shareaholic" id="twitter"></a></li>
					<li><a class="icon" href="http://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=8943b7fd64cd8b1770ff5affa9a9437b&service=2&title=Estándares%20de%20Código%20y%20Prácticas%20Recomendadas%20de%20Desarrollo%20Front-end%20de%20Isobar%20North%20America&link=http://na.isobar.com/standards/&source=Shareaholic" id="delicious"></a></li>
					<li><a href="http://na.isobar.com" id="linkback">Regresar a Isobar NA</a></li>
				</ul>
			</header>

			
			<div id="main" role="document">
				<h1>Estándares y Prácticas Recomendadas de Desarrollo Front-end</h1>
			
				<?php
				include_once('sections/general.html');
				include_once('sections/markup.html');
				include_once('sections/css.html');
				include_once('sections/javascript.html');
				include_once('sections/accessibility.html');
				include_once('sections/performance.html');
				include_once('sections/browsers.html');
				include_once('sections/seo.html');
				include_once('sections/codeReviews.html');
				include_once('sections/appendices.html');
				include_once('sections/revisionHistory.html');
				?>

			</div><!--! End of #main section !-->
			
			<nav id="side" class="nav-right" role="navigation">
				<h3 class="toc-title">Tabla de Contenido</h3>
				<ul id="toc" style="display:none"></ul>
				<noscript><p><a href="http://enable-javascript.com">Por favor, habilite JavaScript</a>.</p></noscript>
			</nav>
			
		</div><!--! end of #container !-->

		<footer role="contentinfo">
			<p>
				<span class="float_left"><?php print date("Y"); ?> Isobar North America, Inc. Todos los derechos reservados.</span>
				<span class="float_right">Todo el contenido esta licenciado bajo Licencia de Atribución 3.0 de Creative Commons</span>
			</p>
		</footer>
		

		<!-- JavaScript at the bottom for fast page loading -->

		<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js"></script>
		<script>
			window.jQuery || document.write("<script src='js/jquery-1.6.3.min.js'>\x3C/script>")
		</script>
		<!-- scripts concatenated and minified via ant build script-->
		<script defer src="js/plugins.js"></script>
		<script defer src="js/script.js"></script>
   
		<!-- end scripts-->

		<!--[if lt IE 7 ]>
		<script src="js/libs/dd_belatedpng.js"></script>
		<script>DD_belatedPNG.fix("img, .png_bg"); // Fix any <img> or .png_bg bg-images. Also, please read goo.gl/mZiyb </script>
		<![endif]-->

  <script>
    var _gaq=[['_setAccount','UA-1745698-2'],['_trackPageview'],['_trackPageLoadTime']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
  </script>

  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7 ]>
    <script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script defer>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
		
</body>
</html>