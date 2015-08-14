## CSS

Cascading Style Sheets (CSS) is where the visual presentation and design rules for a website belong. Well-written CSS makes good use of its cascading nature - general styles are applied first, and those styles are overridden for more specific instances as necessary.

### Goals for Effective CSS

CSS is an unusual language which can easily lead to code bloat, inconsistencies in design or clashing code techniques. It is easy to end up with CSS code that is difficult to manage, or so fragile it can cause site-wide regressions with small changes.

CSS should:

 - Be easy to maintain.
 - Follow clear enough patterns to understand and be readable.
 - Offer a clear place for new styles going forwards.
 - Not be a drag on the loading performance or page rendering.
 - Address different devices, browser versions, and do as much as it can with as little code as possible.

Always consider:

 - What your core, default styles for HTML elements are going to be
 - What styles are branding, global styles, and specific one-off use-cases
 - Layout, verus content, versus style
 - Ease of maintenance and how the code will evole and grow
 - Impact of styles for a given fix versus other elements on the site
 - What type of artwork is acceptable to be CSS background images vs. inline HTML

Going into large site development with a plan for the CSS is critical.

### Getting Started with CSS

Planning for a design implementation isn't that different than any other software requirements for Web development.

You should always:

 - review the design
 - plan around technical constraints
 - identify how content will be managed
 - be certain who will be able to modify the design directly via code

Try to segment code in logical ways:

 - Separate page structure from design.
 - Separate containers and grids on a page from the content
 - Create baseline components which may be extended, but rarely modified directly

More specifically, you may have:

 - Core brand styles
 - Site-wide styles
 - Distinct sections of the site
 - Page layouts, component layouts
 - Micro-sites and landing pages
 - Components, widgets, or re-usable modules

#### Tools

Sometimes third party library are necessary or helpful — but please be certain to not include extra code for no reason. Libraries or tools should be picked based on benefit and advantages that they provide.

 - Concatentation
 - Precompilers
 - Minifiers
 - Post processors

The difficulty is that these tools can also introduce unnecessary complexity unless used wisely. Avoid needless nesting and "functional" features offered by the tools if it can be handled another way.

#### Frameworks

Pre-built UI components, CSS frameworks, and code bases can be beneficial, however just like tools 

choose wisely ... 

 - UI Component Libraries (e.g. Foundation, Bootstrap)
 - Grid Systems
 - Typography adjustments

> External libraries should always be assessed for the pros/cons and potential benefits, vs. the barrier to entry and level of effort involved in their usage. 

For instance, a grid system may not match the grids in the design, and it may not be adjustable enough for a given design.

#### Establishing Conventions

Like other aspects of the code on a site, consistency is key.

 - Code patterns
 - Naming conventions

 - Grid Systems or frameworks — if you use a grid-system or framework, avoid modifying the original source and please simply extend it
 - On a large site never develop using a single CSS style sheet, though a single file delivered via concatenation is best, to this end we recommend the use of CSS preprocessors to break stylesheets into smaller, better organized files


One technique to consider is taht maintaining reference style implementations well into integration with server-side / back-end systems helps reduce regressions that can happen across the board as the code for the site evolves. Continue to test these reference implementations as they will be the "source of record" for the styles created on the site.

These refernece implementations can serve as a living style guide and broken components easily spotted over time.

### General CSS Standards



### Inclusion

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

Do not indent child styles underneath their parent styles for a few reasons. When scanning through a CSS file to locate media queries, we generally look for indented styles, so indenting selectors that are not within a media query causes confusion. It also hinders maintainability. HTML and CSS structure can change frequently over the course of a project, quickly rendering obsolete the parent-child relationship the indentation used to represent. And the more levels of indentation there are, the harder it is to update.

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

##### Caveat

For performance reasons in some cases, it is good practice to inline critical styles in a `style` block in the document's `head`. In this case critical inline styles are identified either manually or through the use of a tool. Non critical styles can then be asynchronously loaded, increasing the perceived page load speed. 

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

Avoid using the `!important` keyword. Treat it like the nuclear option, only to be used in the most extreme of cases. There is usually another way to achieve the same goal without causing headaches for developers in the future who are either trying to debug a styling issue or trying to use normal specificity to override a style for a particular element only to find that they can't.

Use the lowest level of specificity necessary to get the desired results. This means the use of the ID selector should be minimized. Often creating a new class is preferable to using inheritance or additional specificity to target an element or elements. 

The one caveat here is base styles. Defining a solid styleguide to be applied to tag names can significantly reduce the size of the CSS if that styleguide is adhered to by both the design and development teams. It is recommended that a styleguide is agreed upon at the beginning of a project, defined in HTML and then iterated on by both the design and development teams.

### CSS Deliverables

Please be aware of potential conflicts between the original development environment for CSS and an ultimate deployment to production systems, if continuous integration will allow the continued use of CSS preprocessors, or if there should a cross-platform development strategy.

### Next Steps &amp; CSS Resources

 - Compatibility
 - CSS pre-processors
 - Internet Explorer Bugs
 - Usage of CSS3
 - Vendor prefixes
 - Color Management
 - CSS Performance Analysis

For current links and references, please see our Wiki on Github.
