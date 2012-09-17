<?php
session_start();

// register session to change language
session_register('mylang');

// Some basic protocol and path to page settings 
$protocol = (strstr('https', $_SERVER['SERVER_PROTOCOL']) === false) ? 'http' : 'https'; 
$page_root = $protocol . '://' . $_SERVER['SERVER_NAME'] . dirname($_SERVER['REQUEST_URI']);

require_once('inc/session.php');
require_once('inc/header.php');
?>

<body>
	<a class="fork" href="https://github.com/isobar-idev/code-standards/" target="_blank"><span class="visuallyhidden">Fork Us</span></a>

	<div id="container">
		<header role="banner">
			<nav id="locale">
				<ul id="flags">
					<li><a data-lang="en" title="English"><img src="img/en.png" alt="English" /></a></li>
					<li><a data-lang="es" title="Spanish" ><img src="img/es.png" alt="Spanish" /></a></li>
				</ul>
			</nav>
			
			<h1><a id="logo" href="<?php echo page_root; ?>" class="visuallyhidden">Roundarch Isobar</a></h1>
			
			<canvas id="canvas-logo" width="500" height="300">
				<strong><?php echo NO_CANVAS; ?></strong>
			</canvas>

			<ul id="social">
				<li><a class="icon" href="http://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=8943b7fd64cd8b1770ff5affa9a9437b&service=5&title=Isobar%20North%20America's%20Coding%20Standards%20and%20Frontend%20development%20Best%20Practices&link=http://na.isobar.com/standards/&source=Shareaholic" id="facebook"></a></li>
				<li><a class="icon" href="http://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=8943b7fd64cd8b1770ff5affa9a9437b&service=7&title=Isobar%20North%20America's%20Coding%20Standards%20and%20Frontend%20development%20Best%20Practices&link=http://na.isobar.com/standards/&source=Shareaholic" id="twitter"></a></li>
				<li><a class="icon" href="http://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=8943b7fd64cd8b1770ff5affa9a9437b&service=2&title=Isobar%20North%20America's%20Coding%20Standards%20and%20Frontend%20development%20Best%20Practices&link=http://na.isobar.com/standards/&source=Shareaholic" id="delicious"></a></li>
				<li><a href="http://na.isobar.com" id="linkback"><?php echo LINKBACK; ?></a></li>
			</ul>
		</header>

		<div id="main" role="document">
			<!-- /////////////////////////// -->
			<!-- Load the Content files here -->
			<!-- /////////////////////////// -->
			
			<?php $mylang->include_sections(); ?>
			
		</div><!--! End of #main section !-->
		
		<nav id="side" class="nav-right" role="navigation">
			<h3 class="toc-title"><?php echo NAV_TITLE; ?></h3>
			<ul id="toc" style="display:none"></ul>
			<noscript><p><a href="http://enable-javascript.com"><?php echo NO_JAVASCRIPT; ?></a>.</p></noscript>
		</nav>
		
	</div><!--! end of #container !-->

	<footer role="contentinfo">
		<p>
			<span class="float_left"><?php echo date("Y") . ' ' . COPYRIGHT; ?></span>
			<span class="float_right"><?php echo CREATIVE_COMMONS; ?></a></span>
		</p>
	</footer>

	<!-- JavaScript at the bottom for fast page loading -->

	<!-- Grab CDN jQuery, with a protocol relative URL; fall back to local if necessary -->
	<script src="//code.jquery.com/jquery-1.7.2.min.js"></script>
	<script>window.jQuery || document.write("<script src='js/jquery-1.7.2.min.js'>\x3C/script>")</script>

	<script defer src="js/plugins.js"></script>
	<script defer src="js/script.js"></script>

	<!--[if lt IE 7 ]>
	<script src="js/dd_belatedpng.js"></script>
	<script>DD_belatedPNG.fix("img, .png_bg"); // Fix any <img> or .png_bg bg-images. Also, please read goo.gl/mZiyb</script>
	<![endif]-->

	<script>
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-1745698-2']);
	_gaq.push(['_trackPageview']);
	
	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
	</script>

	<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
    	chromium.org/developers/how-tos/chrome-frame-getting-started -->

	<!--[if lt IE 7 ]>
    	<script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
	    <script defer>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
	<![endif]-->
	
</body>
</html>