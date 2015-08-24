## CSS

Cascading Style Sheets (CSS) is where the visual presentation and design rules for a website belong. Well-written CSS makes good use of its cascading nature - general styles are applied first, and those styles are overridden for more specific instances as necessary.

### Goals for Effective CSS

CSS is an unusual language which can easily lead to code bloat, inconsistencies in design or clashing code techniques. It is easy to end up with CSS code that is so fragile it can cause site-wide regressions with small changes.

CSS should:

 - Be easy to maintain.
 - Follow clear enough patterns to understand.
 - Offer a clear place for new styles going forwards.
 - Not be a drag on page loading performance.
 - Not include unused style rules.
 - Address different devices, browser versions, and do as much as it can with as little code as possible.

When setting up the CSS for a site, always consider:

 - What the default styles for HTML elements are going to be.
 - Which styles are global styles versus specific one-off use-cases.
 - Distinctions between code for layout and for content.
 - How the code will evolve and grow.
 - Potential impact of bug fixes on the overall site.
 - Use of images as CSS background images vs. in-line HTML (content).

### Getting Started with CSS

Planning for a CSS build isn't that different than any other software requirements for Web development. A solid foundation starting point is critical.

Before coding, you should always:

 - Review the design.
 - Plan around technical constraints.
 - Identify how content will be managed.
 - Be certain who will be able to modify the design directly via code.

Try to segment code in logical ways:

 - Separate page grids and containers from the content.
 - Create baseline components which may be extended by other styles.

Baseline components should rarely be modified directly.

More specifically, you may have:

 - Core brand styles.
 - Basic typography or default HTML rules.
 - Site-wide styles.
 - Distinct sections of the site.
 - Micro-sites and landing pages.
 - Components, widgets, or re-usable modules.

#### Tools

Sometimes a third party library helpful — but please be certain to not include extra code for no reason other than personal enjoyment. Libraries or tools should be picked based on the advantages they provide.

Common types CSS-related tools might include:

 - File concatenation
 - Preprocessors
 - Minifiers
 - Post processors

These should be considered in the context of the rest of the site construction, back-end, and continuous integration processes. Discuss the options with the technical lead on the project.

Be careful as these tools can also introduce unnecessary complexity unless used wisely.

#### Frameworks

Pre-built UI components or CSS frameworks can be beneficial, however just like any third party code please choose wisely and based on benefit of features and flexibility. Locking development into a library that unintentionally imposes limits is not good.

Some examples of third party frameworks might include:

 - UI component or widget libraries (e.g. Foundation, Bootstrap, jQuery UI)
 - Grid Systems
 - Typography adjustments
 - Normalizing code 

<aside class="box">
<p>**Note:**<br>External libraries should always be assessed for the pros/cons and potential benefits, vs. the barrier to entry and level of effort involved in their usage. </p>
<p>For instance, a grid system may not match the grids in the design, and it may not be adjustable enough for a given design.</p>
</aside>

#### Establishing Conventions and Development Strategies

Like other aspects of the code on a site, consistency is key. Areas of critical consistency include:

 - Code formatting
 - Naming conventions
 - File and folder structure
 - Examples or sample code
 - How page components might be broken down or re-used

On a large site never develop using a single CSS style sheet, though a single file served for a page is best. To this end we often recommend the use of CSS preprocessors to break style sheets into smaller, better organized files, or the use of a build process to combine files for serving via HTTP.

<aside class="box">
    <p>**Note:**<br>
    It is a great idea to approach front-end development like a set of [reusable components][link-patternlab] are being created. This matches how they are designed, how they must adapt to responsive layouts, and how they will be implemented inside content management or other server-side frameworks.</p>
    <p>[Bootstrap][link-bootstrap] is a commonly cited framework that uses an approach similar to this.</p>
</aside>

##### Living Style Guides and Reference Implementations

One technique to consider is maintaining static HTML style reference implementations well into integration with server-side / back-end systems. These could be a series of templates or widgets that use the live styles being built. This helps reduce regressions that can happen across the board as the code for the site evolves. Continue to test these reference implementations as they will be the "source of record" for the styles created on the site. They also allow you to more easily distinguish the front-end bugs from the bugs potentially introduced by integration with a complex back-end.

These reference implementations can serve as a *living style guide* and broken components are easily spotted in testing over time.

Defining a solid style guide to be applied to tag names can significantly reduce the size of the CSS if that style guide is adhered to by both the design and development teams. It is recommended that a style guide is agreed upon at the beginning of a project, defined in HTML and then iterated on by both the design and development teams.

### CSS Best Practices

What follows are some basic concepts for standardization of CSS code. Naturally, feel free to fork, update per project, and even issue pull requests for further discussion based upon experience.

#### Inclusion

Use the `<link>` tag to include all your style sheets in the `<head>` of the document. For optimal page performance, concatenate your CSS into as few files as possible and do not use the `@import` command to include other style sheets, as this will fire an additional HTTP request and block page rendering until its completion.

```markup
<link rel="stylesheet" type="text/css" href="main.css">
```

#### Formatting CSS

Basic rules for formatting CSS files:

 - Use a new line for every selector and every declaration.
 - Use a single space before the opening brace in a set of rules.
 - Use lowercase for elements and shorthand hex values, e.g., `#aaa`.
 - Hyphenate class selector names; avoid underscores and camelCase 
 - Quote attribute values in selectors
 - Use one level of indentation for each declaration.
 - The closing brace of declaration goes in the same column as the first character of the set of rules.
 - Use a single blank line between sets of rules.

Inside sets of rules or style declarations:

 - Add a single space between the property and value, for example:<br>
   `prop: value;` and *not* `prop:value;`.
 - Use double quotes for quoted values
 - Always include a semi-colon at the end of the last declaration.
 - Use shorthand if you can, like:<br>
    `padding: 15px 0;` and *not* `padding: 15px 0px 15px 0px;`
 - When allowed, use `0` without units.

Putting each selector on its own line and each property on its own line is great for readability and so version control systems can clearly show which parts have changed in a diff.

The attributes within a selector can be alphabetized for easy scanning and so that compression algorithms like gzip have a greater chance of finding repeatable patterns.

Some examples:

<!-- do we want more examples to cover most of the notes above? -->

```css
.content {
    margin-left: -2%;
}

.twitter-popular,
.twitter-favorites,
.twitter-feed {
    float: left;
    padding-left: 2%;
    width: 33.33%;
    padding: 15px 0;
}
```

**Do not indent child styles** underneath their parent styles; this is important for a number of reasons:

 - We usually recommend indenting media queries, so this can cause confusion.
 - Some CSS preprocessors heavily use indentation.
 - Various levels of indentation hinders maintainability. 
 - HTML and CSS structure can change frequently over the course of a project, quickly rendering obsolete the parent-child relationship the indentation used to represent.

#### Specificity

Use the minimum specificity required to achieve the desired style. It can be difficult to quickly read and locate styles or even bugs with heavily nested styles in the CSS.

The ID is the most specific selector, since it can only match one element, and the class is a close second. Use those whenever possible rather than HTML tag names. 


```css
/* BAD */
button#back-button { ... }
.popular ul li a { ... }
.popular > ul > li > a { ... }

/* GOOD */
.back-button { ... }
.popular-link { ... }
.unpopular-link { ... }
```

As a rule, CSS is most maintainable with the simplest selectors possible. Try applying a class to the element you want to target instead.

<aside class="box">
<p>**Note:**<br>
While performance of CSS selectors has been a debated topic, browsers perform quite well on most types of selectors. That said, specificity reduced to the most simple name to get the desired results is the best idea in most cases **for readability** and **maintainability**.</p>
</aside>

##### Do Not Use !important

Avoid using the `!important` keyword. Treat it like the nuclear option, only to be used in the most extreme of cases. This fundamentally destroys the specificity feature and can even break accessibility for some users.

There is usually another way to achieve the same goal without causing headaches for developers in the future who are either trying to debug a styling issue, or trying to use normal specificity to override a style for a particular element only to find that they can't.

#### ID Selectors

As noted above, use the lowest level of specificity necessary to get the desired results. This means the use of the ID selector should be minimized. Often creating a new class is preferable to using inheritance or additional specificity to target an element or elements. 

ID selectors, if used, should be used mainly as access points for JavaScript or if a very particular use case surfaces. Styles and classes can be applied via the same element with a className.

#### Vendor Prefixes

When using vendor prefixed features, put the standardized rule at the end to ensure browsers optimize and use the standard if they recognize it. 

For example: 

```css
.thing {
    -webkit-transition: all 100ms;
    transition: all 100ms;
}
```

#### Inline Styling

Do not hard code style information into your HTML markup directly, either with the `style` attribute that accepts CSS or with deprecated attributes such as `align`, `border`, or `width`. These are difficult to maintain and make it harder to track down what is causing an element to appear as it does.

##### Performance Caveats

In some cases for performance reasons it may be good practice to in-line critical styles in a `style` block in the document's `head`. This delivers these styles to the browser in the fastest method possible by preventing the need for an additional HTTP request. Fetching linked style sheets are a blocking operation on the rendering of a Web page in a browser in most cases. An enormous CSS file can mean a highly reduced time to first rendering because a browser may pause during loading of the page to download CSS which may not even be used on the first page. 

With the above in mind it may be desirable to include the rules required to render the top portions of a page (i.e. "Above the fold") in advance of styles loaded after the rendering begins. Critical styles can be identified either manually or through the use of a tool. Non critical styles can then be asynchronously loaded, increasing the perceived page load speed.

#### Box Model

To simplify CSS authoring, we set the `box-sizing` attribute to `border-box` for all page elements. This enables us to use round numbers for width like 50% and then apply a padding or border to that same element without needing to

 1. adjust the width accordingly using calc (since borders use pixels rather than percents) or
 1. create an element inside it to take the padding and border. This is the only case where we use the inefficient universal selector (`*`).

Example:

```css
* {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
```

#### Coding Patterns

There are a number of popular design patterns for naming conventions on selectors, groupings or extensions of styles in CSS files. Sometimes these are of value and may be used on projects as long as the developers are on board and they are used consistently by the team. 

<aside class="box">
<p>Examples of pattern systems include BEM, SMACSS, Object Oriented CSS, Atomic design, and others.</p>
</aside>

<!-- links? -->

The downsides to some of these systems are:

 - Often rely on less obvious rules that may be difficult to follow.
 - They may use syntax that may be objectionable to some developers.
 - Some developers may find the syntax difficult to read.
 
For these reasons it is often best to go with the most simple, basic set of conventions possible, based on obvious patterns.

#### A Simple CSS Code Pattern

<!-- Isobar Component Pattern 
    This entire section might be best left out, I don't know if it goes 
    too far for the document? From there down to "Utilities"
-->

The following sections describe one simple approach, and as long as the types are defined on a project and the patterns are followed, then a clear meaning can be interpreted fairly quickly and easily reading through the CSS, HTML, and JavaScript.

Every site will have distinct requirements but some examples of things that can be standardized on a site build include:

 - Global Defaults
 - Page Level Rules (grids, site template types, and so on)
 - Components
 - Modifiers
 - State
 - JavaScript-only Rules
 - Utilities

The following sections describe how some might work.

##### Global Defaults

For the purposes of discussion we could refer to the global defaults as the baseline HTML elements and their associated styles. Frequently you may wish to use a third party library which normalizes CSS behavior across browsers. Either way, it makes sense to keep these files in their own files.

##### Page Level Rules

<!-- need more content here -->

Any site is liable to have a standard baseline set of grids and types of pages. These grids can be collected into their own distinct set of component files — using a broad definition of a global "thing" as a component.

##### Components

Components are a high level concept for organizing CSS files and rules. A component simply means a grouped set of rules pertaining to an object or set of related objects on a page.

Additionally, encapsulating these components into distinct files is a great option. Within this file, using a naming convention is a tremendous help here for code maintainability and readability. 

Group styles under a simple name-space using a **prefix-suffix-modifier** type pattern such as:

```css
/* core component */
.component { ... }

/* component elements */
.component-header { ... }
.component-content { ... }

/* component descendant */
.component-content-group { ... }

/* component descendant element */
.component-content-group-header { ... }
.component-content-group-imgs { ... }
```

This type of pattern is easy to read, extend, and follow in the absence of something more sophisticated.

Additionally, generally components will be the only CSS class with distinct names that do not have prefixes before the core, root, or base name of the component (e.g. above we are using `component`).

Just to get developers thinking, these might be things like:

 - navbar
 - footer
 - page-info
 - article-date
 - lead
 - widgetfoo
 - byline

##### Modifiers

If you need to extend an existing component then create distinct modifier classes with the prefix `mod-` to easily indicate that it is a modifier and not a complete style. Using the `mod` name prefix prevents confusing the class with a full class.


```css
.mod-modifier-a { ... }
.mod-modifier-b { ... }
```

Then, when used in the HTML, the class stands out:

```markup
<div class="component-content mod-modifier-a">...</div>
```

This is a strong technique because the modifier classes can stand on their own in the CSS. Further, they may also be altered via more complex rules:

```css
.component-header.mod-modifier-a { ... }
```

This is simplistic and easy to follow, understand, and expand upon.

##### State

A *state* for an element or component is presentation information for a given component. This may be a dynamic state set by JavaScript or a user interaction, but not always. It could also be a preset from the server or the results after a transaction. State modifiers are a great way for a distinct class to be provided to engineers unfamiliar with the design to be provided hooks for various things. This is slightly different than JS specific classes, however.

State rules will use the `is-` prefix.

```css
.component-group.is-full { ... } 
.component-group.is-expired { ... }
```

Treating components' *state* as a modifier that is boolean (i.e. `true` or `false`) also:

 - Semantically helps provide information about the content.
 - Separates the code for state from default presentation.
 - Removes the need to update corresponding states or components if the name of either changes.

This last point is important from a maintenance perspective.

It's best to try to restrict these state indicators as being restricted to a specific component.

##### JavaScript (JS) Prefix

The usage of a `js-` prefix is present in the markup but should never really appear in the CSS file itself. If the styles are being set, then use modifiers or state type classes.

```markup
<button class="component-button js-execute">...</button>
```

The `js-execute` rule should not appear in the CSS file, but only in JS files they are tied to behavior. These are events, verbs, or action related, and are access points for JavaScript not a toggle or state changer. It's best to think of these classes as closer to and ID attribute in the HTML.

##### Utilities

A utility is a type of component modifier that is specifically designed to be used on more than one component type. If it was restricted to a single component, it would simply be a modifier.

Utilities will use the prefix of `u-` and should serve only the modifier purpose intended without side effects when applied to any component, or component descendant.

```css
.u-warning {

}
.u-scroll-infobox {
    overflow-x: scroll;
    width: auto;
}
```

#### The Mobile Web, Media Queries, Responsive Design

With the mobile Web taking off Media Queries are mandatory in CSS going forwards.

We discuss media queries in the [Mobile / Responsive](#responsive_responsive_web_design) section of this document.

### CSS Deliverables

Please be aware of potential conflicts between the original development environment for CSS and an ultimate deployment to production systems, if continuous integration will allow the continued use of CSS preprocessors, or if there should a cross-platform development strategy.

Delivered CSS should be concatenated, minified, tested against browser bugs (e.g. MSIE selector count bugs) and extra files should be removed.

File naming conventions should be consistent and language or use-case specific files should be clear and not be easily confused with the global style CSS.

### Next Steps & CSS Resources

This is just the tip of the iceberg where CSS is concerned. 

 - Browser Compatibility
 - Media Queries
 - Accessibility and CSS
 - CSS pre-processors usage
 - Internet Explorer, or browser-specific bugs
 - Usage of CSS3 transitions, transforms, and more
 - Vendor prefixes
 - Color Management

For current links and references, please see our Wiki on Github.

[link-patternlab]: http://patternlab.io/
[link-bootstrap]: http://getbootstrap.com/




