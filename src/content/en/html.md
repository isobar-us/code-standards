## HTML

HTML markup defines the content of a document and gives it a rudimentary structure such as section dividers, headers, paragraphs, lists, menus, and forms.

### Goals for Markup

Please follow conventions established for a given project so all team members can have the same expectations around document structure and markup.

Structural consistency is critical when talking about the types of pages being used on a site or in a Web app. The markup stucture provides all the necessary hooks for scripting and behavior, so it's important that the appropriate hooks are in place.

A clear, clean, and concise HTML structure is also necessary for semantics, flexibility, and a reliable deployment environment. Do **not** deviate from established templates or patterns without architect approval.

Which markup is used does matter:

 - Use the most *meaningful* yet *minimal* markup required to present the styles and interaction required
 - Application-centric deliverables often have different types of requirements; please code accordingly 
 - Maintain a clear separation of concerns, avoid inline styles and inline JavaScript whenever possible
 - Have reference implementations so that each team member knows what sorts of structures are appropriate, as well as where to add new code
 - Adhere to Web standards and avoid proprietary markup unless agreed upon
 - Build pages in such a way that blocks of code can be broken up and reused when implemented
 - Be sure front-end code is compatible with destination environments and delivery platforms

The flexible nature of HTML markup and how losely browsers interpret markup sometimes lends itself to inconsistencies not always being discovered immediately. This belies the care necessary in crafting a document's structure and in following established patterns.

### Getting Started on Markup

When crafting the HTML for a website, environment or technical constraints may impact the type of markup that can be used. Please discuss the final delivery environment in depth with technical leads and clients so that pages are not structured or styled in some way that is not effective for the project solution. 

Discuss types of:

 - Templates and types of pages
 - Which sections of pages are reused or managed by software vs. by hand
 - Frameworks, CSS grid systems (custom or otherwise)
 - Server-Side delivery platforms

*Note that it is vital to take into account how the site will ultimately be maintained and who will be doing that work.*

### HTML Markup Best Practices

As noted these guidelines are flexible for projects as long as consensus or need determines a particular path, consistency is what matters most.

Indent nested elements and tags with single indentation settings, whatever they may be, for each level in the hierarchy of the document.

```markup
<div>
    <p>Lorem ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
    <ul>
        <li>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</li>
        <li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
        <li>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</li>
        <li>proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
    </ul>
</div>
```

#### Semantic Markup

HTML provides a number of semantic constructs that allow automated tools like search engines and screen readers to make sense of the document and to understand relationships between pieces of content. Use *semantic* markup whenever possible — that is to say use elements with specific meanings for specific purposes to convey the spirit of the markup. 

A well-written HTML document will make appropriate use of these semantic elements and leave all responsibility for controlling the presentation of the document to the CSS stylesheet. 

#### Validation

Valid markup is a goal but not a mandate. Please have reasons for invalid markup if this is a concern. 
 
#### HTML Standards and Browser Support

All markup will be written using the latest HTML5 markup specifications from the W3C, as implemented by browsers and devices that meet project requirements. When creating markup be sure that the target environments support the techniques being implemented, or that there is a fall-back plan.

Please use a common HTML5 polyfill or HTML5 Shiv to enable styling and recognition of HTML5 elements in older devices' browsers.

#### Doctype

Always include a proper doctype to trigger standards mode. Omitting the doctype triggers quirks mode and should always be avoided. The HTML5 doctype is simple and easy to remember.

```markup
<!doctype html>
```

#### Character Encoding

All markup should be delivered as UTF-8, since it has the best support for internationalization. The character encoding should be designated in both the HTTP header and the head of the document via a meta tag. If the server happens to omit the HTTP header, browsers can take a guess at the character encoding and begins parsing and rendering the markup in a particular way. If there are inconsistencies, the browser will re-parse and re-render, throwing away all that work and starting over if it encounters the meta tag and its guess was incorrect. As a best practice, we always put the meta tag as early in the `<head>` tag as early as possible — however server-settings are ideal.

```markup
<meta charset="UTF-8">
```

#### Optional and Self-closing Tags

While current standards designate certain closing elements and even document level elements as optional, use all open and closing elements nested in the correct ways to ensure maximum compatibility and clarity of document structure. 

Generally speaking, self-closing XML (i.e. XHTML, XML) style tags are not necessary.

#### HTML5 Elements

To provide additional semantic value to our documents, make use of HTML5 elements such as `<header>`, `<article>`, and `<section>` where appropriate. However, in cases where the HTML needs to be as backwards-compatible as possible, do not apply IDs or classes to them, since older browsers do not understand these elements by default and will not apply styling to them.

```markup
<header>
    <div class="site-header">
        ...
    </div>
</header>
```

#### Attribute Values

Use quotes to surround all attribute values in HTML, despite quotes being optional in HTML5. This maintains consistency between attribute values that contain whitespace and those that don't.

```markup
<form class="registration module" action="/register" method="POST">
```

#### IDs vs. Classes

HTML elements can be identified by using the `id` and `class` attributes. An ID is a unique identifier for that particular element; no other element on the page should use the same ID. This uniqueness allows `<label>` elements to associate themselves with a particular input and URLs to jump to a particular scroll position on a page. Classes are not unique. The same class can be used on multiple elements within a page, and a single element can have more than one class.

```markup
<ul id="categories">
    <li class="category">Jackets</li>
    <li class="category">Accessories</li>
    <li class="category">Shoes</li>
</ul>
```

When coming up with names for an ID or class, we use semantic names like &quot;secondary-nav&quot; or &quot;primary-button&quot; that describe what the element is, rather than names like &quot;left-nav&quot; or &quot;blue-button&quot; that describe what the element looks like, which can change over time. We also use *lowercase names with hyphens* separating words as opposed to camelCase or underscores.

#### Anchors

All anchor links should point to absolute or relative URLs with user-readable content. Do not link to XML or JSON resources that are designed to be Ajaxed by JavaScript instead of navigated to directly, and do not put JavaScript in an anchor's `href` attribute like `javascript:loadPage(2);`. This allows search engines to index the content, allows the user to open the links in a new tab or window, and means the links will still work when JavaScript is broken, disabled, or not supported. This will require that the back-end be able to return a full HTML page for each important content state (e.g. sorting a table column).

#### Paragraphs

Avoid using `<br>` tags to separate paragraphs or lines of text. Use `<p>` instead with proper opening and closing elements.

#### Definition Lists

Use definition lists to display a single record of name-value pairs, like a contact card.

#### Tables

Tables should not be used for page layout; only use them when you need to display tabular data. Tables provide an important semantic association (used mostly by screen readers for the sight-impaired) between row/column headers and their data, so use `<table>` rather than other elements when displaying multiple records of data.

The `<caption>` element is the recommended way to describe a table for both sighted and sight-impaired users, though this can also be done less semantically in the normal page text around the table. Use the `<thead>` and `<tbody>` elements to denote which row contains column headers so when a user prints the website and the table runs onto another page, browsers can display the `<thead>` on each page for easier readability. Remember to use the `scope` attribute on the `<th>` element to indicate whether the header applies to the row or column.

```markup
<table>
    <caption>First two U.S. presidents</caption>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Took office</th>
            <th scope="col">Party</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>George Washington</td>
            <td>April 30, 1789</td>
            <td>n/a</td>
        </tr>
        <tr>
            <td>John Adams</td>
            <td>March 4, 1797</td>
            <td>Federalist</td>
        </tr>
    </tbody>
</table>
```

#### Forms

For both semantic and functional reasons, we make full use of the `<form>` tag for all sections requiring user input. All form `action` attributes should point to URLs with user-readable content, so they will still work if the form is submitted by the user before JavaScript has loaded on a page, or if JavaScript is broken, disabled, or not supported. This will require that the back-end be able to return a full HTML page for form submission (e.g. registering a new user, editing the quantity in a shopping cart).

Do not nest HTML form elements.

#### Input Labels

All input fields should be associated with a `<label>` element. The `for` attribute of the `<label>` element should contain the ID of the corresponding input field. This means the input field will receive focus when a user clicks the label and also enables screen readers for sight-impaired users to read out an appropriate description of the input field.

```markup
<label for="home-address">Home Address</label>
<input id="home-address" type="text">
```

### Markup Deliverables

Typically HTML deliverables are incorporated into Content Management Systems or application delivery platforms as templates. A plan for incorporation of templates that leverage patterns created during the markup creation phase should be followed and matching types of pages to templates that were created, so that an association between the source markup and the destination markup can be maintained over time.

### Next Steps &amp; HTML5 Resources

Considerations:

 1. Site maintenance procedures
 2. Browser testing strategies
 3. How new features will be added
 4. Where new features will be added
 5. What the file system looks like for static site assets
 6. If a CDN is involved
 7. Naming conventions and organization of graphics and photography assets

For current links and references, please see our Wiki on Github.
