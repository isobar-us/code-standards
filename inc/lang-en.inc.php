<?php 
// define words
define('page_lang', 'en');
define('content_path', 'sections/');

define('page_title', 'Front-end Code Standards &amp; Best Practices');
define('page_keywords', 'Isobar code standards, Roundarch Isobar code standards, coding standards, frontend development, frontend best practices, html code standards, html5 code standards, css code standards, best code practices, development, frontend development');
define('page_description', 'Roundarch Isobar\'s Coding Standards and Frontend development Best Practices');

define('navTitle', 'Table of Contents');
define('linkBack', 'Return to Isobar US');
define('noCanvas', 'Your browser cannot handle the awesomeness of this!');
define('noJavascript', 'Please enable JavaScript');

define('copyright', 'Roundarch Isobar, Inc. All rights reserved.');
define('creativeCommons', 'All content licensed under <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">Creative Commons Attribution 3.0 Unported License');

// Some basic protocol and path to page settings 
$protocol = (strstr('https', $_SERVER['SERVER_PROTOCOL']) === false) ? 'http' : 'https';
define('page_root', $protocol . '://' . $_SERVER['SERVER_NAME'] . dirname($_SERVER['REQUEST_URI']));
?>