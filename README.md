#  Roundarch Isobar Front-end Development Standards and Guidelines

## License:

All content licensed under Creative Commons Attribution 3.0 Unported License

## Summary:

This document contains guidelines for web applications built by the Front-end development practice of Roundarch Isobar (previously Isobar & Molecular). It is to be readily available to anyone who wishes to check or contribute to the iterative progress of our discipline's best practices.

This document's primary motivation is two- fold: 

 1. code consistency and 
 2. best practices. 

By maintaining consistency in coding styles and conventions, we can ease the burden of legacy code maintenance, and mitigate risk of breakage in the future. By adhering to best practices, we ensure optimized page loading, performance and maintainable code.

We hope to encourage other developers to think about how to best standardize their approaches to development, to propose their own ideas for debate and for inclusion in our version of the document, and to adapt our standards for their own unique development practices. What better way of achieving consensus on how best to develop in our discipline than through feedback from members of that discipline themselves?

### Work in Progress

The content and build process is a work in progress since the migration from our PHP hosted version to this Github Pages version.

## Building the Document

Prior to running these commands, make sure you have ruby 1.9.3 installed, ideally using RVM.

Run `'npm install'` from the command line of the project directory to install all the node dependencies. You may need to occasionally re-run this command as new dependencies are added.

Run `'bundle install'` from the command line of the project directory to install ruby's dependencies. This will allow you to build the jekyll site similiar to what we are hosting on github pages, and to run the server locally. If you get a `'command not found'` error, run `'gem install bundler'` then try again.

Run `'grunt'` from the command line of the project directory to run the build process.

To run the jekyll server locally run `'jekyll serve --watch'` from the command line. You can then view the site at localhost:4000. Don't forget the `'--watch'` option as this enables auto-regeneration of the code.

We currently use the default jekyll configuration, so there is no configuration file.

### Structure of Page Content

The `index.html` file is generated via grunt and should not be edited directly. Each of the `.html` files contained within the `/sections/[lang]` directory is a portion of the final file. We have separated the different sections that make up the page into individual files so that it is easier to edit, basically making the content of the page more modular. This is also part of what we consider a best practice when dealing with large projects, as if it were an application involving lots of code, that several people work on. index.html is then served via jekyll using the layout located in `_layouts/main.html`.

Each of these files include content wrapped within sections. This should be self-explanatory I think. In each section, we make use of all h1-h6 heading tags multiple times since HTML5 lets you use as many as you like. Of course, we try to always use them and all other HTML5 tags appropriately, and making use of semantic tags where they are best suited.

To edit the main layout, edit the file in `_layouts/main.html`, to edit the content edit the relevant section in the sections folder. Do not edit `index.html`.

### Structure of CSS

The CSS files are generated via compass from the scss files located in the scss folder, which is run as part of the grunt task. Because github pages only serve static content, you must push your generated files to the gh-pages branch for updates to appear. 



