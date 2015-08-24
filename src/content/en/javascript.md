## JavaScript

JavaScript is where extra behaviors, features, and functionality not offered natively by Web browsers through CSS and HTML is created. 

JavaScript has gained an enormous amount of attention in recent years due to more feature rich, faster browsers and server run-times such as Node.js. For the purposes, general discussion here focuses on client-side JavaScript development, with references to where it crosses over.

It is of note that many techniques identified these days as "HTML5" are actually enabled by the related JavaScript APIs.

### Goals

Unless we are talking about a complex client-side Single Page Application (SPA), JavaScript should be used sparingly, and when a deliberate choice is made to not perform a task with other available technologies. The decision to add more scripts to a Web page should be made carefully. Even with a SPA, it is critical to make controlled choices so as to not include too much unorganized impossible to maintain code.

Any and all JavaScript code that's added to a Web page should be there *if and only if* it is needed for the page to achieve the desired ends or if there aren't any negative impacts with it there.

Included JavaScript should:

 - Be included after careful consideration.
 - Have the performance overhead and file size evaluated.
 - Have a feature set that is understood and appropriate.
 - Perform only the necessary tasks without needless overhead.
 - Have maintainability carefully assessed.

While being:

 - Fast, efficient, and perform well.
 - Re-usable if possible.
 - Not conflict with other code on a given page or sets of pages.
 - Executed only when necessary on a given page or sets of pages.

Likewise, the absence or failure of the code should be carefully considered:

 - What happens if for some reason this code is missing or does not run? 
 - What happens if the code triggers an error?

### Getting Started on JavaScript

All too often a developer will solve a problem in a closed context and not consider the whole picture. "Add another plugin" is not always a good answer. 

It is well worth considering if parts or all of the code being added can be useful elsewhere. Centralized code is excellent because it can be updated once and re-used everywhere.

For JavaScript, a Front-end developer should be thinking about:

 - If there is code that does this task already?
 - Code formatting rules, naming conventions, file locations, etc.
 - Testing the code on various browsers and devices.
 - If `strings` of text should be external for content management or translation.
 - If code being added might be useful outside of the current problem.

Examples of possible things to centralize:

 - Code that modifies the DOM
 - Ajax, validation, or other libraries
 - Query string parsing utilities, router-type code
 - Tests for global conditions (e.g. window size, feature support, etc.)
 - Page, window, or document level events (e.g. Ajax, resize, etc.)
 - UI controls (e.g. spinners, modals, tabs, etc.)
 - Date handling utilities
 - Files with strings of text in a given language
 - Finally, settings and configuration options (e.g. paths to services, debug flags, duration settings, minimum or maximum values, etc.) are common things to set in a centralized, distinct place.

Bottom line, please understand what the JavaScript does and how it does it if you are including third party code.

<aside class="box">
    <p>**Note:**<br>
    Client buy-in may be necessary for the usage of JavaScript for some features. It may be a forgone conclusion but usage of libraries or custom code should be discussed with the team and client technical leads to be certain the teams are on the same page.</p></aside>

#### JavaScript Libraries, Frameworks, and Plugins

Recent years have seen a virtual explosion in new JavaScript libraries sometimes calling themselves "frameworks".

Libraries and frameworks can be useful, especially when the client-side is become more responsible for larger parts of applications and Web sites.

 - **Libraries** are code you use within your structure, featuring code that is available for you call upon.
 - **Frameworks** are code collections that serve specific purposes in a particular way, and call your code that is included following their patterns. 

<aside class="box"><p>**Learn more:**<br>
The basic idea is an "inversion of control" in the code. This is debatable, but something like jQuery could be said to be a library, while Angular, React, or Backbone could be a framework.</p></aside>

Either way, this is typically *third party code* that should be carefully considered when it is determined to be included in a project or not.

##### Selection of Third Party Code

<!-- @todo: beef up this section about framework selection -->

Selection of a library or framework is never an easy task. Things that should be considered include:

 - Technical Requirements for the project.
 - Quality and maturity of code in question.
 - Future support for the code.
 - Staffing skill sets required to support the code.
 - How tightly coupled to the layers of the application the code may be.
 - How actively supported its open source community may be.
 - Be tested against various devices and platform requirements to verify it works for the project.

##### Usage of Third Party Code

Third party code should be included as-is and:

 - Treated as it may be updated (i.e. versions) at some point in the future.
 - Should **never be modified** unless documented thoroughly for the project.
 - As many conventions of its use followed in their recommended standard ways.
 - Un-minified code should be included.
 - Any required licenses should be included as specified by the library.
 - Commercial code must be approved if necessary.

A team may decide to write wrapper code around the third party library and provide a more simple API for the code.

#### ECMAScript 6, ES6, ECMAScript 2015

Developers are encouraged to begin learning and using the [latest version of JavaScript, ES6][link-es6book]. Please use appropriate transpilers and never release untested or unsupported code in the deliverables. Do **not** assume a feature [is supported][link-es6support] in a browser.

<!-- @todo: add links to resources and transpilers -->

### JavaScript Best Practices

#### Inclusion of Code

Use external JavaScript files. **Do NOT include JavaScript in-line in the page unless there is a good reason**.

Use the `<script>` tag to include your JavaScript files at the bottom of your HTML document just before the closing `</body>` tag. For optimal page performance, concatenate your JavaScript into as few files as possible.

```markup
<script src="bundle.js"></script>
```

 - This should link to concatenated and minified, finalized JavaScript files. 
 - Enable source maps to assist with debugging and testing. 

In development environments, this may point at a non-optimized file, however having techniques in place to toggle optimized files on and off is often beneficial.

A reference similar to this may need to include a build-specific file name based upon a hash or something along those lines for HTTP cache purposes.

<aside class="box">
    <p>**Learn more:**<br>
    For information about build tools that help with these techniques, please see the [Appendix](#appendix_appendix).</p>
</aside>

##### Loading Files On Demand

On some sites it may be appropriate to load a single JavaScript file with all dependencies bundled together, or it may be more appropriate (such as in a very large SPA) to load files *on demand*, as they are needed, asynchronously.

<!-- @todo: more information -->

#### Writing and Formatting JavaScript

The use of whitespace should follow long-standing English writing conventions, with blank lines between ideas and groups of code such as objects, functions, and new lines for new statements.

Formatting the language statements and patterns should follow these basics:

 - **Open braces** are preceded by a single space.
 - **Open braces** should appear on the same line as their preceding argument.
 - **Close braces** should appear at the same indentation as the statement preceding the opening brace
 - There should be no space characters between **parentheses** and their contents.
 - Use **semicolons** and do not rely on automatic semicolon insertion.
 - Each **comma** and **colon** (and semi-colons that don't end a line) should be followed by a single space.
 - **Binary** and **ternary operators** should have a single space on each side.
 - **Quoted values** should be in 'single quotes' so that double quotes may easily exist inside them.
 - **Comment JavaScript** code thoroughly and consider using a pattern such as those described by [JSDocs][link-jsdocs] so that documentation may be generated automatically.
 - Conditional statements go on a new line followed by the opening brace.
 - Else/else go on the same line as the brace.
 - Use type strict checks with `===` as opposed to `==` whenever possible.

```javascript
for (var i = 0, len = arr.length; i < len; i++) {
    var example = 1;
    if (example === i) {
        // we are looping
    } else {
        // this will never happen
    }
}
```

To maximize readability without worrying about which boolean operators bind more tightly than others, each segment of a boolean expression should be enclosed in parentheses.

```javascript
if ((allowUpdate) && ((user.isAdmin) || (user.role === item.owner))) {
    // do something
}
```

#### Variable Declaration

To avoid confusion between global and local variables, we declare each variable on its own line with the `var` keyword. We do not use a single `var` keyword and then chain several variable declarations onto it separated by a comma.

```javascript
var windowWidth;
var windowHeight;
var currentVal = $(this).val();
var min = parseInt($(this).attr('min'), 10);
```

This has been [debated at length](http://benalman.com/news/2012/05/multiple-var-statements-javascript/) and is controversial, however we believe this is a better practice due to several technical reasons:

 - Easier debugging with debuggers.
 - Easier merges with version control and diff utilities.
 - Most technical issues are resolved by 'use strict'.

#### Best Practices

 - Avoid user-agent sniffing and rely on [feature detection](#javascript_feature-detection) instead. Browser detection is dangerous and error-prone.
 - Avoid using `document.write`.
 - Only run scripts on a page that are needed for that page.
 - Don't repeat yourself (i.e. keep your code [DRY][link-dry])
 - Do not modify JavaScript core objects `.prototype` unless you really know what you're doing.
 - Use method names that make sense, such as `init()` or `setup()` for code that starts things off. Be consistent on your project.

##### Variable Scope

Minimize the use of `global` or `window` level variables and name-spaces. Pollution of the global name-space is error prone and a bad practice.

If referencing a `window` or `global` level variable that isn't obvious, please comment as such or explicitly state it.

```javascript
var window.thing = {};
```

##### Variable Names and Types

Always use meaningful variable names that can be read as words, not as silly abbreviations only you understand.

 - Variable names should be `camelCase`. 
 - Objects, classes, and name-spaces should be `TitleCase`. 
 - Boolean values should be prefixed with `is` if at all possible.
 - Cached jQuery objects can be prefixed with `$`.
 - Use shorthand versions of empty `Arrays` and `Objects`.

```javascript
// some examples
var exampleValue = 'my example variable value';
var numberOfTimes = 3;
// booleans
var isThisWorking = true;
var isNotWorking = 0;
// cache a selector
var $body = $('body');
// short hand objects and arrays
var newObject = {};
var newArray = [];
```

##### Settings, Constants

Put settings together in obvious places such as an Object literal space inside your module. Make settings that are possibly to be considered "constants" to be obvious -- some developers like to use `ALLCAPS`.

<aside class="box">
    <p>**Learn more:**<br>
    Did you know that [ES6 now features](https://strongloop.com/strongblog/es6-variable-declarations/) real life [constants](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)?</p>
</aside>

##### Feature Detection

Always test for the existence of a browser API, function, or object property before you use it, and make sure the user experience is still functional (to the extent possible) if it's not found. We rely on JavaScript-based feature detection rather than server-side device detection because it's more robust, easily maintained, and future-proof.

<aside class="box">
    <p>**Learn More:**<br>The goto library for feature detection is of course [Modernizr][link-modernizr].</p>
</aside>

##### Limit Events — Use Event Delegation

It is always preferable to use fewer events being bound to objects on a page as possible. Too many events bound on a page can mean memory leaks or just an accumulation of handlers bound to DOM elements which becomes less and less efficient over time. Additionally, event delegation has the added benefit of persisting events over dynamic page updates when items are added or removed from the DOM.

With jQuery this is easy, simply use the `on` method with a selector:

```javascript
$('body').on('click', 'a.scroller', function(){
   // this only runs if the a.scroller is matched
});
```

<!-- @todo: move the link to the bottom -->

<aside class="box">
    <p>**Learn more:**<br>The jQuery API site has an excellent overview of the [on](http://api.jquery.com/on/) method.</p>
</aside>

##### JavaScript Performance

One of the most costly operations a browser can perform is updating the DOM in the page via inefficient JavaScript techniques. The most important thing to know is that the more you do on a Web page with JavaScript, the more work is being done, the more memory and the bigger the footprint it can generate. Additionally, updating a complex DOM structure over and over in JavaScript can cause re-flow, repainting, and jank.

A book could be written on the subject, but here's a taste of various references:

 - [Minimizing browser re-flow](https://developers.google.com/speed/articles/reflow?hl=en)
 - [Repaints and Reflows, Manipulating the DOM Responsibly](http://blog.letitialew.com/post/30425074101/repaints-and-reflows-manipulating-the-dom)
 - [Reflows &amp; Repaints: Css Performance Making Your Javascript Slow?](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/)
 - [Rendering: repaint, reflow/relayout, restyle](http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/)
 - [Speed Up Your JavaScript (part 4)](http://www.nczonline.net/blog/2009/02/03/speed-up-your-javascript-part-4/)
 - [Memory Management and Performance](https://gist.github.com/dypsilon/4252079)
 - [Writing Fast, Memory-Efficient JavaScript](http://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/)
 - [Front-end developer essentials – 5 tips for efficient jQuery](http://www.punkchip.com/javascript-efficiency/)

#### Basic JavaScript Architecture

Today it is common for the JavaScript code on a site to be a vast collection of "Modules" brought together by build scripts, dependency tools, or even manually by the developer (not really recommended).

Smaller sites can get away with more simple structures, but for longer term, JavaScript-heavy code bases the following rule is critical:

- For a complex site, never use a single JavaScript file for development, unless it is tiny and serves a very targeted purpose.

This is so that the code is maintainable and scalable. Smaller files are easier to debug, swap in and out, and blocks of code should serve as small a purpose as possible ([single responsibility principle][link-onething]).

In most simple terms, most sites benefit from a basic structure similar to:

 - Global site-wide JavaScript
 - Specific modules for specific sections of the site
 - Specific modules used for specific purposes / features
 - Available vendor libraries

With this in mind, for strict control over the code base it's best to consider:

 - What is the **central entry point**, or the central point of execution? This is to say, what kicks off the JavaScript? This may be a simple jQuery `document.ready()` or some other mechanism to run the site's code, such as a router.

Having explicit control over the page life-cycle is preferable to having a dozen jQuery `document.ready()` statements all competing for the first chance to execute on a page.

Effectively the application core, it should kick off the rest of the code to run. Typically this has module-management baked in in some way.

<aside class="box">
    <p>**Note:**<br>One way to control which code runs on a page is through [DOM-based routing][link-domroute].</p>
</aside>

Additional considerations:

 - How are the modules going to communicate with each other?
 - How tightly coupled are the modules in the code base?
 - How much JavaScript code would need to be updated if/when the HTML / CSS changes on the project?
 - Can individual parts call as few libraries or plugins as indirectly as possible, to facilitate changes later?
 - Does the server need to provide the scripts dynamic values for JavaScript?

##### About JavaScript Modules

The term "module" in JavaScript has probably been over-used. It can refer to specific patterns used by specific tools and frameworks, or simple blocks of code following some typical [JavaScript design patterns][link-patterns].

These days options for JavaScript modules include some of the following.

**Vanilla JavaScript**:

 - [Object literal notation][link-modpat]
 - The [Revealing Module Pattern][link-modrevealpat]

Or, a **common standard**, used by many dependency tools:

 - [AMD modules][link-amd]  (most commonly used by [require.js][link-require])
 - CommonJS modules (most common used by node.js and browserify)
 - [ES6 modules][link-es6mod]

**Frameworks** will have their own unique set ups.

<aside class="box">
    <p>**Learn more:**<br>
    ES6 has just recently standardized how script loading, importing, and more about [how modules will be handled][link-es6mod] as part of the standard spec going forward.</p>
</aside>

<!-- @todo: @link: ES6 link -->

### JavaScript Deliverables

The most obvious fact is you will need to provide working files that are error-free and will work in a variety of scenarios. We can't assume that clients will always leave scripts and pages as we leave them, though we can provide direction as to how scripts should be used.

#### Understanding the Code's Place in the Project

 - Understand where your code will live vs. any code introduced in a destination environment
 - Understand if the code will need to coexist with other code.

#### Clean, Clear, Organized, Readable Code

 - As bug free as possible.
 - Always remember we write code for other developers, not for a runtime or a browser.
 - Remove code that is no longer used. Remove excess "noise" or distractions from source code such as large commented out blocks of unused code. Source control can solve problems like this.
 - Have `console` and debugging statements be removed or a plan in place for suppression during the build or deployment.

<aside class="box">
    <p>**Learn more:**<br>[The Essentials of Writing High Quality JavaScript](http://code.tutsplus.com/tutorials/the-essentials-of-writing-high-quality-javascript--net-15145) is an older article but still holds up today.</p>
</aside>

Delivery of a flat folder full of JavaScript files is not advised.

```markup
├── _assets/
│   ├── js/
│   │   ├── app.js
│   │   ├── tools.js
│   │   ├── ...
│   │   ├── vendor
│   │   │   ├── source01.js
│   │   │   ├── source02.js
│   │   │   ├── ...
│   │   ├── views
│   │   │   ├── view01.js
│   │   │   ├── view02.js
│   │   │   ├── ...
```

### Next Steps &amp; JavaScript Resources

There is an enormous volume of JavaScript reference material out in the wild today. We hope to add more at some point but here are various topics worth following up on:

<!-- @todo: clean this up, add links -->

 - Debugging JavaScript
 - [Learning more about ES6][link-learnmorees6]
 - [JavaScript Design Patterns][link-jspatterns]
 - Unit Testing JavaScript code
 - [Node.js][link-node]
 - Compare [JS Frameworks, Frameworks, and more Frameworks][link-mvc]
 - [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 - [JavaScript Style Guides and Beautifiers](http://addyosmani.com/blog/javascript-style-guides-and-beautifiers/)
 - [Douglas Crockford's JS Code Conventions](http://javascript.crockford.com/code.html)
 - [Maintainable JavaScript Book](http://shop.oreilly.com/product/0636920025245.do)
 - [Maintainable JavaScript Presentation](http://www.slideshare.net/nzakas/maintainable-javascript-2012)
 - [Large Scale JavaScript Applications](https://speakerdeck.com/addyosmani/large-scale-javascript-application-architecture)

For more current links and references, please see [our Wiki on Github](https://github.com/isobar-idev/code-standards/wiki/Useful-Links-and-Resources).

<aside class="box">
<p>**Note:**<br>We could write a book on JavaScript frameworks and what we've learned there, but this isn't the time. We may add more in the near future.</p>
</aside>

[link-mvc]: http://todomvc.com/
[link-node]: https://nodejs.org/
[link-dry]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[link-domroute]: http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
[link-jsdocs]: http://usejsdoc.org/
[link-modernizr]: http://modernizr.com/
[link-onething]: http://blog.codinghorror.com/curlys-law-do-one-thing/
[link-whymod]: http://requirejs.org/docs/why.html
[link-patterns]: http://www.slideshare.net/stoyan/javascript-patterns
[link-amd]: http://requirejs.org/docs/whyamd.html
[link-require]: http://requirejs.org/
[link-modpat]: http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
[link-modrevealpat]: http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript
[link-es6mod]: https://leanpub.com/understandinges6/read/#leanpub-auto-modules
[link-es6book]: https://leanpub.com/understandinges6/read/
[link-es6support]: https://kangax.github.io/compat-table/es6/
[link-learnmorees6]: https://github.com/addyosmani/es6-equivalents-in-es5
[link-jspatterns]: http://addyosmani.com/resources/essentialjsdesignpatterns

<!-- 

Exceptional Sources
Eloquent JavaScript
    http://eloquentjavascript.net/
http://perfectionkills.com/

JavaScript Weekly
http://javascriptweekly.com/archive/

├── _assets/
│   ├── readme.md
│   ├── css
│   │   ├── example01.css
│   │   ├── example02.css
│   │   ├── vendor
│   │   │   ├── source01.css
│   │   │   ├── source02.css
│   │   │   ├── ...
│   ├── js
│   │   ├── app.js
│   │   ├── tools.js
│   │   ├── ...
│   │   ├── vendor
│   │   │   ├── source01.js
│   │   │   ├── source02.js
│   │   │   ├── ...
│   ├── img
│   │   ├── example00.png
│   │   ├── ...
│   │   ├── icons
│   │   │   ├── example01.gif
│   │   │   ├── example02.png
│   │   │   ├── ...
 -->


