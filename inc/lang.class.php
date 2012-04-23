<?php
/**
 * Class for changing the language and loading the locale specific file necessary for the index page to render correctly
 */
 
class mylanguage {
	function get_language() {
		return $this->language;
	}
	
	// load language setting 
	function load_language($lang) {
		$default_language = 'en';
		$this->language = $lang;

		switch ($this->get_language()) {
			case "en":
				require_once 'lang-' . $this->get_language() . '.inc.php';
				break;
			case "es":
				require_once 'lang-' . $this->get_language() . '.inc.php';
				break;
			default: // default language is 
				require_once 'lang-' . $default_language . '.inc.php';
				break;
		}
	}
	// end language function loading
}
?>