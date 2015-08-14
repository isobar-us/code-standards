## CSS

CSS is where the visual presentation rules of a website belongs. Well-written CSS makes good use of its cascading nature - general styles are applied first, and those styles are overridden for more specific instances as necessary.

### Goals for Effective CSS

CSS is an unusual language which can easily lead to code bloat, inconsistencies in design or code technique. It is easy to end up with CSS code that is difficult to manage, or so fragile it causes site-wide regressions.

Always consider:

 - What your core, global, baseline might be, 
 - What styles are branding vs. design extension
 - Ease of maintenance
 - Impact of styles for a given fix versus other elements on the site
 - Next steps, how the styles for the site will evolve and grow
 - Content versus style
 - How global styles will be managed versus specific use-cases

Having a plan going into large site development of CSS is critical.

### Getting Started with CSS

 - Patterns
 - Division of site-wide styles, section-specific styles
 - Grid Systems or frameworks — if you use a grid-system or framework, avoid modifying the original source and please simply extend it
 - On a large site never develop using a single CSS style sheet, though a single file delivered via concatenation is best, to this end we recommend the use of CSS preprocessors to break stylesheets into smaller, better organized files

One technique to consider is taht maintaining reference style implementations well into integration with server-side / back-end systems helps reduce regressions that can happen across the board as the code for the site evolves. Continue to test these reference implementations as they will be the "source of record" for the styles created on the site.

### General CSS Standards

Try to segment code in logical ways:

 - Separate structure from design
 - Separate containers from content
 - Create baseline components which may be extended, but rarely modified directly

#### Inclusion

Use the `<link>` tag to include all your stylesheets in the `<head>` of the document. For optimal page performance, concatenate your CSS into as few files as possible and do not use the `@import` command to include other stylesheets, as this will fire an additional HTTP request and block page rendering until its completion.

```markup
<link rel="stylesheet" type="text/css" href="main.css" />
```

#### Inline Styling

Do not put styling information into your HTML markup directly, either with the `style` attribute that accepts CSS or with deprecated attributes such as `align`, `border`, or `width`. These are difficult to maintain and make it harder to track down what is causing an element to appear as it does.

##### Caveat

For performance reasons in some cases, it is good practice to inline critical styles in a `style` block in the document's `head`. In this case critical inline styles are identified either manually or through the use of a tool. Non critical styles can then be asynchronously loaded, increasing the perceived page load speed. 

#### Formatting

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
