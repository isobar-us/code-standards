## HTML

HTML markup defines the content of a document and gives it a rudimentary structure such as section dividers, headers, paragraphs, lists, menus, and forms.

### Goals

Like with all code, consistency is critical. Please follow conventions established for a given project so all team members can have the same expectations around document structure and markup.

A clear, clean, and concise HTML structure is necessary for semantics, flexibility, and a reliable deployment environment. Do **not** deviate from established templates or patterns without architect approval.

Which markup is used actually does matter:

- Use the most *meaningful* yet *minimal* markup required to present the styles and interaction required
- Application-centric deliverables often have different types of requirements; please code accordingly 
- Maintain a clear separation of concerns, avoid inline styles and inline JavaScript whenever possible
- Have reference implementations so that each team member knows what sorts of structures are appropriate, as well as where to add new code
- Adhere to Web standards and avoid proprietary markup unless agreed upon
- Build pages in such a way that blocks of code can be broken up and reused when implemented
- Be sure front-end code is compatible with destination environments and delivery platforms

### Getting Started

When crafting the HTML for a website, environment or technical constraints may impact the type of markup that can be used. Please discuss the final delivery environment in depth with technical leads and clients so that pages are not structured or styled in some way that is not effective for the project solution. 

Discuss types of:

 - Templates 
 - Frameworks, CSS grid systems (custom or otherwise)
 - Server-Side delivery platforms

Finally, take into account how the site will ultimately be maintained and who will be doing that work. 

### General Standards

As noted these guidelines may be discussed on a particular project and as long as consensus or project need determines a particular path, consistency is what matters most.

#### Semantic Markup

HTML provides a number of semantic constructs that allow automated tools like search engines and screen readers to make sense of the document and to understand relationships between pieces of content. Use *semantic* markup whenever possible — that is to say use elements with specific meanings for specific purposes to convey the spirit of the markup. 

A well-written HTML document will make appropriate use of these semantic elements and leave all responsibility for controlling the presentation of the document to the CSS stylesheet. 

#### Validation
Valid markup is a goal but not a mandate. Please have reasons for invalid markup if this is a concern. 
 
#### HTML Standards
 - HTML5 
    - Doctype
    - HTML5 Tags
    - Character Encoding
    - Validation
 - General Markup
 - Tags
    - Optional
    - Self-closing
 - Attributes
    - Quoted
    - Extending HTML5
       - Data attributes, etc

#### Doctype

We always include a proper doctype to trigger standards mode. Omitting the doctype triggers quirks mode and should always be avoided. The HTML5 doctype is simple and easy to remember.

```
<!doctype html>
```

#### Character Encoding

All markup should be delivered as UTF-8, since it has the best support for internationalization. The character encoding should be designated in both the HTTP header and the head of the document via a meta tag. If the server happens to omit the HTTP header, the browser takes a guess at the character encoding and begins parsing the markup, throwing away all that work and starting over if it encounters the meta tag and its guess was incorrect. Because of this, as a best practice, we always put the meta tag as early in the `<head>` tag as possible.

```
<meta charset="UTF-8">
```

#### Tags and Elements

Generally speaking, self-closing XML (i.e. XHTML) style tags are not necessary.

While current standards designate certain closing elements and even document level elements as optional, use all open and closing elements nested in the correct ways to ensure maximum compatibility and clarity of document structure. 

#### HTML5 Elements

To provide additional semantic value to our documents, we make use of HTML5 elements such as `<header>`, `<article>`, and `<section>` where appropriate. However, in order to ensure that our HTML is as backwards-compatible as possible, we do not apply IDs or classes to them, since older browsers do not understand these elements by default and will not apply styling to them.

```
<header>
    <div class="site-header">
        ...
    </div>
</header>
```

#### Attribute Values

We use quotes to surround all attribute values in HTML, despite quotes being optional in HTML5. This maintains consistency between attribute values that contain whitespace and those that don't.

```
<form class="registration module clearfix" action="/register" method="POST">
```

#### IDs vs. Classes

HTML elements can be identified by using the `id` and `class` attributes. An ID is a unique identifier for that particular element; no other element on the page should use the same ID. This uniqueness allows `<label>` elements to associate themselves with a particular input and URLs to jump to a particular scroll position on a page. Classes are not unique. The same class can be used on multiple elements within a page, and a single element can have more than one class.

```
<ul id="categories">
    <li class="category">Jackets</li>
    <li class="category">Accessories</li>
    <li class="category">Shoes</li>
</ul>
```

When coming up with names for an ID or class, we use semantic names like &quot;secondary-nav&quot; or &quot;primary-button&quot; that describe what the element is, rather than names like &quot;left-nav&quot; or &quot;blue-button&quot; that describe what the element looks like, which can change over time. We also use lowercase names with hyphens separating words as opposed to camelCase or underscores. This matches the lowercase nature of HTML5 as well as the naming scheme for `data-xxx` attributes.

#### Anchors

All anchor links should point to absolute or relative URLs with user-readable content. Do not link to XML or JSON resources that are designed to be Ajaxed by JavaScript instead of navigated to directly, and do not put JavaScript in an anchor's `href` attribute like `javascript:loadPage(2);`. This allows search engines to index the content, allows the user to open the links in a new tab or window, and means the links will still work when JavaScript is broken, disabled, or not supported. This will require that the back-end be able to return a full HTML page for each important content state (e.g. sorting a table column).

#### Paragraphs

Avoid using `<br />` tags to separate paragraphs or lines of text. Use `<p>` instead.

#### Definition Lists

We use definition lists to display a single record of name-value pairs, like a contact card.

#### Tables

Tables should not be used for page layout; only use them when you need to display tabular data. They provide an important semantic association (used mostly by screen readers for the sight-impaired) between row/column headers and their data, so use `<table>` rather than other elements when displaying multiple records of data.

The `<caption>` element is the recommended way to describe a table for both sighted and sight-impaired users, though this can also be done less semantically in the normal page text around the table. We use the `<thead>` and `<tbody>` elements to denote which row contains column headers so when a user prints the website and the table runs onto another page, browsers can display the `<thead>` on each page for easier readability. Remember to use the `scope` attribute on the `<th>` element to indicate whether the header applies to the row or column.

```
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

#### Input Labels

All input fields should be associated with a `<label>` element. The `for` attribute of the `<label>` element should contain the ID of the corresponding input field. This means the input field will receive focus when a user clicks the label and also enables screen readers for sight-impaired users to read out an appropriate description of the input field.

```
<label for="home-address">Home Address</label>
<input id="home-address" type="text" />
```

### Deliverables

### Next Steps
 - Templates
 - Break down (CMS, templates, re-use)

### Resources
Further information on the wiki...

