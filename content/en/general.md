# Front-End Code Standards

## General Introduction

This document contains the guidelines and best practices for the front-end web development team at Isobar. There are many ways of leveraging browser-based technologies to create a website. Each item here represents either:

1. A decision we've made favoring one method over its alternatives,
1. A reminder to follow existing standards or industry conventions, or
1. Guidance on what constitutes professional patterns and organization

What this document is _not_ is a series of explanations as to how front-end technologies work; a basic familiarity is assumed. It also does _not_ provide evaluations of the pros and cons of various alternatives; when appropriate we pick what we consider to be the best solutions and present them. Issues that don't yet have a clear solution are considered flexible and may or may not be listed.

> It's recognized that the same conventions for all projects, clients, and teams isn't practical. For these reasons forks of this document are encouraged for various projects and teams. 
What works well can be submitted and discussed as new recommendations moving forward. 

### Goals

Our motivations in creating this document are to:

 1. Foster code consistency across our projects 
 1. Facilitate ease of maintenance
 1. Guide staff on-boarding or educate new developers
 1. Ensure we create professional, robust, performant, and accessible websites

This document is not intended to replace common sense, conventions requested by particular clients, teams, or prevent expressive or creative solutions to problems. Team or project-specific agreements or client requests will always supersede this document's content.

#### Professional Responsibility

We are experts in our field creating solutions for our clients and their target audiences, not for ourselves. Every technology and code choice needs to measured against the potential benefits to the project objectives versus maintainability as opposed to the _cool factor_ or how _trendy_ a particular solution may be. 

Our industry is wrought with the flavor of the month, so please be deliberate. 

Always remember that just because you _can_ does not mean you _should_. Some solutions are not reliable, may not perform well, or may be difficult to maintain over time or add more code to. Always remember your code may not be the last added to a project in that particular feature area.

### Getting Started with Projects

At the outset of the project it is essential to properly understand the goals of the project and identify the specific deliverables expected of the front-end team. Where your responsibilities begin and end should not be taken for granted or assumed.

It's important to understand how the development environment will work, what tools will be available, and what the differences between development, test, and production environments may ultimately be.

Finally, all project teams should get a reasonable understanding of the what client's browser and device requirements are. Make no assumptions as to the technology available either from the client or their audience.

#### Pillars of Front-end Development

Whenever possible, the front-end technology solutions produced shall adhere to an industry best practice honoring as strict a separation of concerns as possible between:

 - A semantic HyperText Markup Language (HTML) for structure
 - Cascading Style Sheets (CSS) for presentation
 - JavaScript (JS) for behavior and interaction

### General Standards

For any project:

 - Consistency and conventions between team members is paramount
 - Solutions should be as simple and clear as possible, while serving a specific purpose
 - Clever does not necessarily mean good; readability is critical

A key hallmark of professional software engineering includes a notion that while we are writing code that must reach a desired goal, we are also creating code that must be read and understood by others.

#### Code Consistency

Usage of the same patterns is critical between files, file types, and between team members so as to never deviate from expectations or cause confusion.

It's worth establishing conventions at the project start or enabling automatic settings in the build or editor environments that might enforce particular rules.

#### Indentation

Please consistently indent, nest, include braces, quotes, and new lines so that code is clear and can be read easily. New code that is added should never deviate from existing formatting conventions or change the indent levels.

For all code languages, we recommend the use soft tabs comprised of four spaces per tab. Hitting the Tab key in your text editor should generate four space characters rather than one tab character. This results in our code appearing identical across platforms.

If tab stops are favored by a team, the most important aspect is maintaining consistency for a project and it's deliverables so developers can make adjustments to their editing environments a single time.

#### Readability

We encourage liberal use of whitespace, comments, and descriptive variable names as appropriate for writing easy-to-read code. There is no need to write code in an obfuscated or compressed way for the purpose of file-size savings; we will use automated server-side or other build processes to concatenate, minify, and gzip all static client-side code (such as CSS and JavaScript).

#### Third-Party Libraries

Un-minified libraries and third-party scripts should be leveraged in local development environments for easier debugging if available, and the code should be committed to source control in an unmodified state. The final products will be compressed with the rest of the source for delivery.

Likewise, third-party code and libraries should never be modified and their original source and license must be documented and be appropriate for a project. Any changes to third party code must be agreed upon and must be for specific reasons. If changes are mandated by bug fixes then the appropriate upstream project should have the changes submitted (assuming the code is part of an open source repository).

Library code should be treated as an external dependency and should be considered something that may need to be wholesale updated or replaced at a later time.

Inclusion of any third-party code should be carefully considered and verified with the project team as the appropriate solution to a given problem. "Adding another plug-in" is not always the best solution. Finally, selection of third party libraries should be done carefully and not be out of alignment with the nature of the problem being addressed. To be blunt, _use the right tool for the right job_.

### Deliverables

Quality deliverables are essential for professionals. Sloppy or messy deliverables are unprofessional and reflect poorly on the final product and the delivery team. Please remove legacy files, be certain the work is delivered in a clean file system, and in an orderly, logical structure that serves a clear purpose.

