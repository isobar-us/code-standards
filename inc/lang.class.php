<?php
/**
 * Class for changing the language and loading the locale specific file necessary for the index page to render correctly
 */
 
class myLanguage {
	public $sections = array(
		'general.html', 'markup.html', 'css.html', 'javascript.html',
		'accessibility.html', 'performance.html', 'browsers.html', 'seo.html', 
		'codeReviews.html', 'appendices.html', 'revisionHistory.html'
	);

	public $sections_path = array();
	public $language = 'en';
	
	function get_language() {
		return $this->language;
	}
	function get_sections() {
		foreach ($this->sections as $value) {
			array_push($this->sections_path, 'sections/' . $this->get_language() .'/'. $value);
		}
		//var_dump($this->sections_path);
	}
	function include_sections() {
		$this->get_sections();
		foreach ($this->sections_path as $section) {
			include_once($section);
		}
	}
	
	// load language setting 
	function load_language($lang) {
		$this->language = $lang;
		
		switch ($this->get_language()) {
			case 'en':
				require_once 'lang-' . $this->get_language() . '.inc.php';
				break;
			case 'es':
				require_once 'lang-' . $this->get_language() . '.inc.php';
				break;
			default: // default language is 
				require_once 'lang-' . $this->language . '.inc.php';
				break;
		}
		//var_dump($this->get_language());
		$this->get_sections();
	}
}
?>