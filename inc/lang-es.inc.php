<?php 
// Define words
define('page_lang', 'es');
define('content_path', 'es/sections/');

define('page_title', 'Estándares y Prácticas Recomendadas de Desarrollo Front-end');
define('page_keywords', 'Estándares de código Isobar, estándares de código, desarrollo frontend, prácticas recomendadas de frontend, mejores prácticas de frontend, estándares de código html, estándares de código html5, estándares de código css, prácticas recomendadas de código, mejores prácticas de código, desarrollo');
define('page_description', 'Estándares de Código y Prácticas Recomendadas de Desarrollo Front-end de Roundarch Isobar');

define('navTitle', 'Tabla de Contenido');
define('linkBack', 'Regresar a Isobar US');
define('noCanvas', '¡Su navegador no puede manejar esta maravilla!');
define('noJavascript', 'Por favor, habilite JavaScript');

define('copyright', 'Roundarch Isobar. Todos los derechos reservados.');
define('creativeCommons', 'Todo el contenido esta licenciado bajo <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">Licencia de Atribución 3.0 de Creative Commons</a>');

// Some basic protocol and path to page settings 
$protocol = (strstr('https', $_SERVER['SERVER_PROTOCOL']) === false) ? 'http' : 'https'; 
define('page_root', $protocol . '://' . $_SERVER['SERVER_NAME'] . dirname($_SERVER['REQUEST_URI']));
?>