## JavaScript

### Goals

### Getting Started
 - JavaScript Libraries

### JavaScript Standards

#### Inclusion

Use the `<script>` tag to include your JavaScript files at the bottom of your HTML document just before the closing `</body>` tag. For optimal page performance, concatenate your JavaScript into as few files as possible.

```
<script type="text/javascript" src="main.js"></script>
```

#### Formatting

The use of whitespace should follow long-standing English writing conventions. Specifically, each comma and colon (and semi-colons that don't end a line) should be followed by a single space. Binary and ternary operators should have a single space on each side. There should be no space characters between parentheses and their contents. Opening braces should appear on the same line as their preceding argument.

```
for (var i = 0, len = arr.length; i < len; i++) {
    // do something
}
```

To maximize readability without worrying about which boolean operators bind more tightly than others, each segment of a boolean expression should be enclosed in parentheses.

```
if ((allowUpdate) && ((user.isAdmin) || (user.role === item.owner))) {
    // do something
}
```

#### Variable Declaration

To avoid confusion between global and local variables, we declare each variable on its own line with the `var` keyword. We do not use a single `var` keyword and then chain several variable declarations onto it separated by a comma.

```
var currentVal = $(this).val();
var min = parseInt($(this).attr('min'), 10);
var max = parseInt($(this).attr('max'), 10);
```

#### Feature Detection

Always test for the existence of a browser API, function, or object property before you use it, and make sure the user experience is still functional (to the extent possible) if it's not found. We rely on JavaScript-based feature detection rather than server-side device detection because it's more robust, easily maintained, and future-proof.

### Next Steps
 - Debugging
 - Patterns for Better JavaScript
 - Unit Testing
 - Node.js

### Resources
 - Links to wiki, etc.

