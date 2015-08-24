#  Isobar Front-end Development Standards and Guidelines

## License:

All content licensed under Creative Commons Attribution 3.0 Unported License

## Summary:

This document contains guidelines for web applications built by the Front-end development practice of Isobar. It is to be readily available to anyone who wishes to check or contribute to the iterative progress of our discipline's best practices.

This document's primary motivation is two-fold: 

 1. code consistency and 
 2. best practices. 

By maintaining consistency in coding styles and conventions, we can ease the burden of legacy code maintenance, and mitigate risk of breakage in the future. By adhering to best practices, we ensure optimized page loading, performance and maintainable code.

We hope to encourage other developers to think about how to best standardize their approaches to development, to propose their own ideas for debate and for inclusion in our version of the document, and to adapt our standards for their own unique development practices. What better way of achieving consensus on how best to develop in our discipline than through feedback from members of that discipline themselves?

## Intent for Build and Content

We hope to separate the structure of the document from the content contained in the standards themselves. Effectively, our goal is to be able to easily update the content without having to worry about the structure.

This also enables pull requests to focus on content and forks to the content to be easily re-branded.

## Viewing the Document

To view the latest, you can just clone locally:

```bash
git clone git://github.com/isobar-idev/code-standards.git
```

To make changes using the process in place, please use the build process. The next few sections describe this build process.

## Building the Document

### Requirements

The build system uses [Grunt.js](http://gruntjs.com) via [Node.js](http://nodejs.org/) and [SASS](http://sass-lang.com/) via [libsass](http://libsass.org/).

First, install [Node.js](http://nodejs.org) from their Web site.

### Build Details

We are using [Grunt](https://github.com/gruntjs/) to run the [Assemble](https://github.com/assemble/assemble/) task to parse, populate variables, and combine files for the HTML, Markdown, and [Handlebars](http://handlebarsjs.com/) templates.

> Note: [Assemble](http://assemble.io) is an exceptionally active and flexible framework for building static HTML pages. It allows the usage of Handlebars, Markdown, and HTML files so we can gradually migrate to Markdown content files over time.

> We suggest you check out [Assemble](http://assemble.io) as well.

The Gruntfile (`grunt.js`) includes the build for the multi-lingual copies of the document. There is a variable for `standards.defaultLanguage` which will determine what language the default `index.html` is rendered in.

To start with a clean slate, the Gruntfile has a `cleanup` task which will remove the previously generated `index.html` and associated language files.

There is also a `watch` task if you like to work that way.

### Execute the Build

Run `'npm install'` from the command line of the project directory to install all the node dependencies. You may need to occasionally re-run this command as new dependencies are added.

> Windows: You may need to manually run `npm install -g grunt` and `npm install -g grunt-cli` to correctly set the path variables required to run grunt from the command line.

Run `'grunt'` from the command line of the project directory to run the build process.

### Structure of Page Content

The `*.html` files in the root are generated via `grunt` and should not be edited directly. There is one file per language, by language code.

```
./en.html
./es.html
./ru.html
...
```
Finally, the `standards.defaultLanguage` setting determines which `*.html` file will be copied to the `index.html` file.

> Note: In the near future the layout and templates will be updated to include the i18l language menus. 

#### Content

The content is written in Markdown files and the build converts it to HTML. Example:

```
./src/content/[lang]/css.md
./src/content/[lang]/general.md
./src/content/[lang]/html.md
```

...and so on.

Each of the `.md` files contained within these directories is a portion of the final output file. We have separated the different sections that make up the page into individual files so that it is easier to edit.

#### Including A Content File

The content files are included as partials and the data and order is defined in the following folder and files:

```
./src/content/[lang]/build/[lang].hbs
./src/content/[lang]/build/data.json
```

The `data.json` file has special significance to Assemble, *do not rename this file*.

#### Page Layout (Presentation)

The main layout is a Handlebars file that the content is injected into and language specific attributes are updated.

The file is `./src/_layouts/main.hbs`.

### Structure of CSS

The CSS files are generated via LibSass from the SCSS files located in the SCSS folder, which is run as part of the Grunt task.


### Deploy

Because github pages only serve static content, you must push your generated files to the gh-pages branch for updates to appear online. 

