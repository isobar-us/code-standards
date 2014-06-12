## CSS

CSS is where the visual presentation logic of a website belongs. Well-written CSS makes good use of its cascading nature - general styles are applied first, and those styles are overridden for more specific instances as necessary.

### Goals
 - General coding principles
    - Customization / Maintainabilty
    - Components / Modules / OOCSS

### Getting Started
 - Grids
 - Frameworks

### CSS Standards

#### Inclusion

Use the `<link>` tag to include all your stylesheets in the `<head>` of the document. For optimal page performance, concatenate your CSS into as few files as possible and do not use the `@import` command to include other stylesheets, as this will fire an additional HTTP request and block page rendering until its completion.

```
<link rel="stylesheet" type="text/css" href="main.css" />
```

#### Inline Styling

Do not put styling information into your HTML markup directly, either with the `style` attribute that accepts CSS or with deprecated attributes such as `align`, `border`, or `width`. These are difficult to maintain and make it harder to track down what is causing an element to appear as it does.

#### Formatting

We put each selector on its own line and each property on its own line for easy readability and so version control systems can clearly show which parts have changed. The attributes within a selector should be alphabetized for easy scanning and so that compression algorithms like gzip have a greater chance of finding repeatable patterns.

```
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

We do not indent child styles underneath their parent styles for a few reasons. When scanning through a CSS file to locate media queries, we generally look for indented styles, so indenting selectors that are not within a media query causes confusion. It also hinders maintainability. HTML and CSS structure can change frequently over the course of a project, quickly rendering obsolete the parent-child relationship the indentation used to represent. And the more levels of indentation there are, the harder it is to update.

#### Box Model

To simplify CSS authoring, we set the `box-sizing` attribute to `border-box` for all page elements. This enables us to use round numbers for width like 50% and then apply a padding or border to that same element without needing to (1) adjust the width accordingly using calc (since borders use pixels rather than percents) or (2) create an element inside it to take the padding and border. This is the only case where we use the inefficient universal selector (`*`).

```
* {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
```

#### Specificity

CSS is most efficient when its selectors are [extremely specific with limited DOM traversal involved](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS). The ID is the most specific selector, since it can only match one element, and the class is a close second. Use those whenever possible rather than HTML tag names.

The descendant selector (the space character) is the most expensive selector in CSS. The child selector (the &quot;`>`&quot; character) is also expensive, especially when the rules are tag names rather than classes or IDs. Avoid both. Try applying a class to the element you want to target instead.

```
/* BAD */
button#back-button { ... }
.popular ul li a { ... }
.popular > ul > li > a { ... }

/* GOOD */
#back-button { ... }
.popular-link { ... }
.popular-link { ... }
```

Avoid using the `!important` keyword. Treat it like the nuclear option, only to be used in the most extreme of cases. There is usually another way to achieve the same goal without causing headaches for developers in the future who are either trying to debug a styling issue or trying to use normal specificity to override a style for a particular element only to find that they can't.

### Next Steps
 - Compatibility
 - Internet Explorer Bugs
 - Use CSS3
 - Color Management

### Resources

Further reading on the wiki etc.
