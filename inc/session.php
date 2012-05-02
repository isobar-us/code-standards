<?php
require_once('lang.class.php');	

if (isset ($_POST['pathList'])) {
	$html = '';
	
	foreach ($_POST['pathList'] as $value) {
		//print_r($value);
		readfile('../'. $value);
	}

}

// if session isn't set 
if (!isset ($_SESSION['mylang'])) {
	$_SESSION['mylang'] = 'en';
}

$mylang = new myLanguage();
$mylang->load_language($_SESSION['mylang']);

if (isset ($_GET['locale'])) {
	switch ($_GET['locale']) {
		case 'en':
			$_SESSION['mylang'] = 'en';
			break;
		case 'es':
			$_SESSION['mylang'] = 'es';
			break;
	}
	//$mylang->load_language($_SESSION['mylang']);
	$mylang->get_sections();
	var_dump($mylang->get_sections());
}
//$mylang->set_language($_SESSION['mylang']);


?>