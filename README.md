#  Roundarch Isobar Front-end Development Standards and Guidelines [http://na.isobar.com/standards](http://na.isobar.com/standards)

## License:

All content licensed under Creative Commons Attribution 3.0 Unported License

## Work in Progress (Fall 2012)

We're currently working on a rather large set of changes to this document in both the build structure and content. Please keep your eyes open for some updates.

This includes proper integration of the multi-lingual translations, as we're not happy with the current implementation (and was never even pushed live). Also, naturally, some more guidelines document and a general code cleanup.

## Summary:

This document contains guidelines for web applications built by the Creative Technology (front end engineering) practice of Roundarch Isobar (previously Isobar & Molecular). It is to be readily available to anyone who wishes to check or contribute to the iterative progress of our discipline's best practices.

This document's primary motivation is two- fold: 1) code consistency and 2) best practices. By maintaining consistency in coding styles and conventions, we can ease the burden of legacy code maintenance, and mitigate risk of breakage in the future. By adhering to best practices, we ensure optimized page loading, performance and maintainable code.

Code standards are living documents, and should themselves change to reflect the latest best practices, thought leadership, and trends both in the community whose practices they seek to standardize and in the greater development community as a whole. Front-end development is one of the fastest growing disciplines in software development; to ensure that our standards are able to keep pace, we want you to fork us, discuss additions, send us pull requests, and add issues to debate emerging standards and practices.

We hope to encourage other developers to think about how to best standardize their approaches to development, to propose their own ideas for debate and for inclusion in our version of the document, and to adapt our standards for their own unique development practices. What better way of achieving consensus on how best to develop in our discipline than through feedback from members of that discipline themselves?

## Structure of Page Content

The index.php file is used to include each of the .html files contained within the /sections/[lang] directory. We have separated the different sections that make up the page into individual files so that it is easier to edit, basically making the content of the page more modular. This is also part of what we consider a best practice when dealing with large projects, as if it were an application involving lots of code, that several people work on.

Each of these files include content wrapped within sections. This should be self-explanatory I think. In each section, we make use of all h1-h6 heading tags multiple times since HTML5 lets you use as many as you like. Of course, we try to always use them and all other HTML5 tags appropriately, and making use of semantic tags where they are best suited.


