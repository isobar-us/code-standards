## JavaScript

JavaScript is where extra behaviors, features, and functionality not offered natively by Web browsers through CSS and HTML is created. 

### Goals

JavaScript should be used sparingly, and when a deliberate choice is made to not perform a task on the server or by another means. 

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

Likewise, the absense of the code should be carefully considered:

 - What happens if for some reason this code is missing or does not run? 
 - What happens if the code triggers an error?

### Getting Started

Client buy-in may be necessary for the usage of JavaScript for some features. It may be a forgone conclusion but usage of libraries or custom code should be discussed with the team and client technical leads to be certain the teams are on the same page.

A JavaScript developer should be thinking about:

 - If there is code that does this task already?
 - Code formatting rules, naming conventions, file locations, etc.
 - Testing the code on various browsers and devices.
 - If `strings` of text should be external for content management or translation.
 - If code being added might be useful outside of the current problem.

All too often a developer will solve a problem in a closed context and not consider the whole picture. It is well worth considering if parts or all of the code being added can be useful elsewhere. Centralized code is excellent because it can be updated once and re-used everywhere.

Examples of possible things to centralize:

 - UI controls (e.g. spinners, modals, tabs, etc.)
 - Date handling utilities
 - Query string parsing utilities
 - Ajax, validation, or other libraries
 - Tests for global conditions (e.g. window size, feature support, etc.)
 - Settings and configuration options (e.g. paths to services, debug flags, duration settings, minimum or maximum values, etc.)
 - Page, window, or document level events (e.g. Ajax, resize, etc.)

Bottom line, please understand what the JavaScript does and how it does it if you are including third party code.


#### JavaScript Libraries, Frameworks, and Plugins

These days it is common for complex libraries and frameworks to be used on sites, especially when the client-side is become more and more responsible for larger parts of applications and Web sites.

 - **Libraries** are code you use within your structure and organizational patterns, featuring code that is available to you and you call upon.
 - **Frameworks** are code structures that serve specific purposes and call your code for specific goals. 

The basic idea is an "inversion of control" in the code. This is debatable, but something like jQuery could be said to be a library, while Angular, React, or Backbone would be a framework.

Either way, these are *third party code* that should be carefully considered when it is determined to be included in a project or not.

##### Selection of Third Party Code

 - Technical Requirements
 - Quality and maturity of code
 - Future support
 - Staff skill sets
 - How tightly coupled to the layers of the application the code may be
 - Open source community activity
 - Be tested against various devices and platform requirements

#### Code Architecture 



### JavaScript Standards

#### Inclusion

Use the `<script>` tag to include your JavaScript files at the bottom of your HTML document just before the closing `</body>` tag. For optimal page performance, concatenate your JavaScript into as few files as possible.

```markup
<script src="main.js"></script>
```

#### Formatting

The use of whitespace should follow long-standing English writing conventions. 

Specifically:

 - Each comma and colon (and semi-colons that don't end a line) should be followed by a single space.
 - Binary and ternary operators should have a single space on each side.
 - There should be no space characters between parentheses and their contents.
 - Opening braces should appear on the same line as their preceding argument.

```javascript
for (var i = 0, len = arr.length; i < len; i++) {
    // do something
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
var width;
var height;
var newObject = {};
var newArray = [];
var $body = $('body');
var currentVal = $(this).val();
var min = parseInt($(this).attr('min'), 10);
```

This has been [debated at length](http://benalman.com/news/2012/05/multiple-var-statements-javascript/) and is controversial, however we believe this is a better practice due to serveral technical reasons:

 - Easier debugging with dubuggers
 - Easier merges with version control and diff utilities
 - Most technical issues are resolved by 'use strict'
 - 
 - ... 

#### Feature Detection

Always test for the existence of a browser API, function, or object property before you use it, and make sure the user experience is still functional (to the extent possible) if it's not found. We rely on JavaScript-based feature detection rather than server-side device detection because it's more robust, easily maintained, and future-proof.

### Deliverables

#### Understanding the Code's Place in the Project

 - Understand where your code will live vs. any code introduced in a destination environment

#### Have Control Over the Page Lifecycle

 - Single execution and entry point

#### Clean Code

 - As bug free as possible.
 - Have `console` and debugging statements be removed or a plan in place for suppression during the build or deployment.
 - Remove code that is no longer used.


### Next Steps &amp; JavaScript Resources

 - Debugging
 - Patterns for Better JavaScript
 - Unit Testing
 - Node.js

For current links and references, please see our Wiki on Github.

