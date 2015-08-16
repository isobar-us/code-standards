## CSS

Cascading Style Sheets (CSS) is where the visual presentation and design rules for a website belong. Well-written CSS makes good use of its cascading nature - general styles are applied first, and those styles are overridden for more specific instances as necessary.

### Goals for Effective CSS

CSS is an unusual language which can easily lead to code bloat, inconsistencies in design or clashing code techniques. It is easy to end up with CSS code that is difficult to manage, or so fragile it can cause site-wide regressions with small changes.

CSS should:

 - Be easy to maintain.
 - Follow clear enough patterns to read and understand.
 - Offer a clear place for new styles going forwards.
 - Not be a drag on the loading performance or page rendering.
 - Not include copious amounts of unused style rules.
 - Address different devices, browser versions, and do as much as it can with as little code as possible.

Always consider:

 - What your core, default styles for HTML elements are going to be.
 - What styles are branding, global styles, and specific one-off use-cases.
 - Layout code, verus content styles, versus unique elements.
 - Ease of maintenance and how the code will evole and grow.
 - Impact of styles for a given fix versus other elements on the site.
 - What type of artwork is acceptable to be CSS background images vs. inline HTML.

Going into large site development with a plan for the CSS is critical.

### Getting Started with CSS

Planning for a design implementation isn't that different than any other software requirements for Web development. A solid foundation starting point is critcal.

You should always:

 - Review the design.
 - Plan around technical constraints.
 - Identify how content will be managed.
 - Be certain who will be able to modify the design directly via code.

Try to segment code in logical ways:

 - Separate page grids and containers from the content.
 - Create baseline components which may be extended, but rarely modified directly.

More specifically, you may have:

 - Core brand styles.
 - Basic typography or default HTML rules.
 - Site-wide styles.
 - Distinct sections of the site.
 - Page types, layout grids, or component layouts.
 - Micro-sites and landing pages.
 - Components, widgets, or re-usable modules.

#### Tools

Sometimes a third party library helpful — but please be certain to not include extra code for no reason other than personal enjoyment. Libraries or tools should be picked based on benefit and the advantages that they provide.

Common types CSS related tool often include:

 - File concatentation
 - Precompilers
 - Minifiers
 - Post processors

The difficulty is that these tools can also introduce unnecessary complexity unless used wisely. Avoid needless nesting and "functional" features offered by the tools if it can be handled another way.

#### Frameworks

Pre-built UI components, CSS frameworks, and code bases can be beneficial, however just like any third party code please choose wisely and based on benefit of features and flexibility. locking into a library that unintentionally imposes limits is not good.

Some examples of third party frameworks might include:

 - UI component or widget libraries (e.g. Foundation, Bootstrap, jQuery UI)
 - Grid Systems
 - Typography adjustments
 - Normalizing code 

> External libraries should always be assessed for the pros/cons and potential benefits, vs. the barrier to entry and level of effort involved in their usage. 

> For instance, a grid system may not match the grids in the design, and it may not be adjustable enough for a given design.

#### Establishing Conventions and Development Strategies

Like other aspects of the code on a site, consistency is key. Areas of critical consistency might include:

 - Code patterns
 - Naming conventions
 - File and folder structure
 - Example or sample code

On a large site never develop using a single CSS style sheet, though a single file delivered via concatenation is best, to this end we often recommend the use of CSS preprocessors to break stylesheets into smaller, better organized files.

One technique to consider is maintaining static HTML style reference implementations well into integration with server-side / back-end systems. These would be a series of templates or widgets that use the live styles being built. This helps reduce regressions that can happen across the board as the code for the site evolves. Continue to test these reference implementations as they will be the "source of record" for the styles created on the site. They also allow you to more easily distinguish the front-end bugs from the bugs potentially intriduced by integration with a complex back-end.

These refernece implementations can serve as a *living style guide* and broken components are easily spotted in testing over time.


### General CSS Standards



#### Inclusion

Use the `<link>` tag to include all your stylesheets in the `<head>` of the document. For optimal page performance, concatenate your CSS into as few files as possible and do not use the `@import` command to include other stylesheets, as this will fire an additional HTTP request and block page rendering until its completion.

```markup
<link rel="stylesheet" type="text/css" href="main.css" />
```


#### Formatting

Basic rules:

 - Use a new line for every selector and every declaration.
 - Use a single blank line between rules.
 - Add a single space between the property and value, for example `prop: value;` and not `prop:value;`.
 - Hyphenate class selector names; do not use underscores or camelCase for class names
 - If and when an `ID` (i.e. #elementById) then camelCase is permitted
 - Use shorthand when appropriate, like `padding: 15px 0;` and not `padding: 15px 0px 15px 0px;`
 
Note that values of `0` do not need units.

Put each selector on its own line and each property on its own line for easy readability and so version control systems can clearly show which parts have changed. The attributes within a selector should be alphabetized for easy scanning and so that compression algorithms like gzip have a greater chance of finding repeatable patterns.

```css
#content {
    margin-left: -2%;
}

.most-popular,
.my-favorites,
.twitter-feed {
    float: left;
    padding-left: 2%;
    width: 33.3333333%;
}
```

Do not indent child styles underneath their parent styles; this is important for a few reasons. When scanning through a CSS file to locate media queries, we generally look for indented styles, so indenting selectors that are not within a media query causes confusion. It also hinders maintainability. HTML and CSS structure can change frequently over the course of a project, quickly rendering obsolete the parent-child relationship the indentation used to represent. Finally, the more levels of indentation there are, the harder it is to update.

##### Vendor Prefixes

When using vendor prefixed features, put the standardized rule at the end. 

For example: 

```css
-webkit-transition: all 100ms;
transition: all 100ms;
```

(Note: Browsers will optimize the standard declaration, but continue to keep the old one around for compatibility. Putting the standard declaration after the vendor one means it will get used and you get the most optimized version.)

#### Inline Styling

Do not put styling information into your HTML markup directly, either with the `style` attribute that accepts CSS or with deprecated attributes such as `align`, `border`, or `width`. These are difficult to maintain and make it harder to track down what is causing an element to appear as it does.

#### Performance Caveats

For performance reasons in some cases, it is good practice to inline critical styles in a `style` block in the document's `head`. In this case critical inline styles are identified either manually or through the use of a tool. Non critical styles can then be asynchronously loaded, increasing the perceived page load speed.

Fetching linked style sheets are a blocking operation on the rendering of a Web page in a browser in most cases. With the above in mind it may be desirable to include the rules required to render the top portions of a page (i.e. "Above the fold") in advance of styles loaded after the rendering begins.

#### Box Model

To simplify CSS authoring, we set the `box-sizing` attribute to `border-box` for all page elements. This enables us to use round numbers for width like 50% and then apply a padding or border to that same element without needing to (1) adjust the width accordingly using calc (since borders use pixels rather than percents) or (2) create an element inside it to take the padding and border. This is the only case where we use the inefficient universal selector (`*`).

```css
* {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
```

#### Specificity

Only use the minimum specificity required to acheive the desired style. 

CSS is most efficient when its selectors are [extremely specific with limited DOM traversal involved](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS). The ID is the most specific selector, since it can only match one element, and the class is a close second. Use those whenever possible rather than HTML tag names.

The descendant selector (the space character) is the most expensive selector in CSS. The child selector (the &quot;`>`&quot; character) is also expensive, especially when the rules are tag names rather than classes or IDs. Avoid both. Try applying a class to the element you want to target instead.

```css
/* BAD */
button#back-button { ... }
.popular ul li a { ... }
.popular > ul > li > a { ... }

/* GOOD */
.back-button { ... }
.popular-link { ... }
.popular-link { ... }
```


<aside class="box">
<p>While performance of CSS selectors has been a hotly debated topic, browsers still perform quite well on most types of selectors. That said, specificity reduced to the most simple name to get the desired results is the best idea in most cases **for readabilty** and **maintainabilty**.</p>
</aside>

Avoid using the `!important` keyword. Treat it like the nuclear option, only to be used in the most extreme of cases. There is usually another way to achieve the same goal without causing headaches for developers in the future who are either trying to debug a styling issue or trying to use normal specificity to override a style for a particular element only to find that they can't.

As noted above, use the lowest level of specificity necessary to get the desired results. This means the use of the ID selector should be minimized. Often creating a new class is preferable to using inheritance or additional specificity to target an element or elements. 

The one caveat here is base styles. Defining a solid styleguide to be applied to tag names can significantly reduce the size of the CSS if that styleguide is adhered to by both the design and development teams. It is recommended that a styleguide is agreed upon at the beginning of a project, defined in HTML and then iterated on by both the design and development teams.

#### Coding Patterns

There are a number of popular design patterns for naming conventions on selectors, groupings of or  extention on styles in CSS files. Examples include BEM, SMACSS, Object Oriented CSS, Atomic design, and others. Sometimes these are of value and may be used on projects as long as the developers are on board amd they are used consistently. 

The downsides to these techniques are that they often rely on difficult to understand, less than obvious made up rules that may be difficult to follow or that may even be objectionable to some developers. Some developers may find the syntax difficult to read. For these reasons it is often beat to go with the most simple, obvious set of conventions possible, based on obvious patterns.

> For the purposes here we will use the term "component" to refer to a unique block on a page, namespaced elements, an object, a type of widget, or other like-grouped set of content elements. These frequently may be reused or even moved around on a site.

The following sections describe one such approach, and as long as the types are defined on a project and the patterns are followed, then a clear meaning can be interpreted fairly quickly and easily reading through the CSS, HTML, and JavaScript.

Types of rules might include:

 - Page Level Rules (grids, site template types, and so on)
 - Components
 - Modifiers
 - State
 - JavaScript-only Rules
 - Utilities

##### Page Level Rules

Grids, Layouts, Page Types, 

Naming convention?


##### Components

Components are a high level concept for organizing CSS files and rules. A component simply means a grouped set of rules pertaining to an object or set of related objects on a page.

Group styles under a simple namespace using a **prefix-suffix-modifier** type pattern such as:


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

Addionally, generally components will be the only CSS class with distinct names that do not have prefixes.


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

Additionally, the modifier classes can stand on their own in the CSS and may also be altered via more complex rules:

```css
.component-header.mod-modifier-a { ... }
```

This is simplistic and easy to follow, understand, and expand upon.

##### State

A *state* for an element or component is presentation information for a given component. This may be a dynamic state set by JavaScript or a user interaction, but not always. It could also be a preset from the server or the results after a transaction. State modifiers are a great way for a distinct class to be provided to engineers unfamilar with the design to be provided hooks for various things. This is slightly different than JS specific classes, however.

State rules will use the `is-` prefix.

```css
.component-group.is-full { ... } 
.component-group.is-expired { ... }
```

Treating components' *state* as a modifier that is boolean (i.e. `true` or `false`) also:

 - Semanticallly helps provide information about the content.
 - Separates the code for state from default presentation.
 - Removes the need to update corresponding states or components if the name of either changes.

This last point is important from a maintenance perspective.

It's best to try to restrict these state indicators as being restricted to a specific component.

##### JavaScript (JS) Prefix

The usage of a `js-` prefix is present in the markup but should never really appear in the CSS file itself. If the styles are being set, then use modifiers or state type classes.

```markup
<button class="component-button js-execute">...</button>
```

The `js-changer` rule should not appear in the CSS file, but only in JS files they are tied to behavior. These are events, verbs, or action related, and are access points for JavaScript not a toggle or state changer. It's best to think of these classes as closer to and ID attribute in the html.

##### Utilities

A utility is a type of component modifier that is specifically designed to be used on more than one component type. If the utility is 

Utilities will use the prefix of `u-` and should serve only the modifier purpose intended without side effects when applied to any component, or component decendant.


#### The Mobile Web, Media Queries, Responsive Design

With the mobile Web taking off Media Queries are mandatory in CSS going forwards.

We will discuss media queries in the Mobile / Responsive section of this document.

### CSS Deliverables

Please be aware of potential conflicts between the original development environment for CSS and an ultimate deployment to production systems, if continuous integration will allow the continued use of CSS preprocessors, or if there should a cross-platform development strategy.

Delivered CSS should be concatenated, minified, tested against browser bugs (e.g. MSIE selector count bugs) and extra files should be removed.

File naming conventions should be consistent and language or use-case specific files should be clear and not be easily confused with the global style CSS.

### Next Steps &amp; CSS Resources

This is just the tip of the iceburg where CSS is concerned. 

 - Browser Compatibility
 - Media Queries
 - Accessibility and CSS
 - CSS pre-processors usage
 - Internet Explorer, or browser-specific bugs
 - Usage of CSS3 transitions, transforms, and more
 - Vendor prefixes
 - Color Management

For current links and references, please see our Wiki on Github.
