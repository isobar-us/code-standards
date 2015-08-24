## Responsive Web Design

Responsive Web Design (RWD) is the term used for the practice of creating page layouts and user experiences that work on a variety of devices and screen sizes.

With the ever expanding mobile landscape and the evolution of the Internet of Things (IoT), the idea of a "standard" screen size has fallen by the wayside in favor of the rise of a device-agnostic approach. It is less and less common to launch two versions of a site, one for desktop and one for mobile.

To this end a series of techniques have been put together for pages to adjust based off browsers' current specs (e.g. width, height, pixel density, orientation, etc).

The techniques are referred to as Responsive Web Design (RWD) and it is another technique in the toolbox of *progressive enhancement* and *adaptive web design*.

### Goals of Responsive Web Design

The goals of RWD are:

 - Offer an optimized user experience (UX),
 - regardless of the user's screen size or features supported on their device.
 
This is true whether it is a stadium jumbotron or the screen of a watch — and of course everything between.

Despite this lofty ideal, on Web projects the term "responsive web design" has generally been used in reference to an optimized experience for a set of target devices, usually:

 - A particular set of cell (smart) phones,
 - various tablets,
 - or desktop computer monitors (depending upon the target audience).

Typically reasonable effort is applied to accommodate the ideal UX for devices with screen sizes that fall outside of and in between.

Overall, critical content and features on a site should be:

 - Adjustable to different types of user interaction (e.g. click, swipe, pinch)
 - Realistically accessible based on the capabilities of different devices.

If meeting desktop browsers' feature sets and dealing with different platforms was difficult before, RWD introduces an almost infinite ecosystem of hardware and software that Web pages need to work on. The level of effort does often increase on projects featuring RWD.

### Getting Started with Mobile Development

As the name of RWD implies, it all starts with a flexible design that features components having mutable characteristics based on the available screen canvas and varied types of user interactions. Careful consideration needs to be taken when innovating to derive a design that can respond to various screens.

For a given project, always consider:

 - The extent of the use cases for each feature on the site.
 - The target audience and likelihood they may be using an alternative device to conduct certain activities on the site.
 - If all target devices will support all the technologies required.
 - That the UX will **not** be 100% the same across all devices, browsers and screens — nor should it be!
 - What happens to the design when the screen gets smaller and larger than the static canvas size it is being designed on.
 - For placement of content and decorative elements, are there patterns or rules that can describe where it falls and adjust with screen sizes?
 - Will some components be better suited as vector graphics (SVG or fonts) instead of raster files to allow for distortion free scaling?
 - Will assets need to be produced in different formats for different devices (e.g. Flash video vs. HTML5 video, lower resolution artwork vs. high resolution artwork, smaller file sizes vs. larger sizes).
 - If a device offers a superior UX for some types of interaction (e.g.  native date-pickers vs. traditional browser controls, or swiping instead of clicking on dots).
 - What happens when a feature is not supported by a device, or if a feature were to fail in a given device?
 - What if a device went off-line during usage of a feature?
 - The best ways to detect support for various features (e.g. Modernizr, etc.).

<aside class="box">
  <p>Brad Frost's [Responsive Design Patterns][link-patterns] and [Responsive Design Resources][link-resources] are two great resources that continue to grow due to user contributions.</p>
</aside>

#### To Use A Pre-built Grid Or Not?

<!-- @todo: content on grid systems -->

Sometimes CSS grid frameworks are a good place to start ... but sometimes not.

They must match the design in terms of flexibility.

It's critical a developer learn the basics of how grid systems

It may be beneficial to learn the coming Flexbox techniques as well.

<aside class="box">
  <p>While using a Framework isn't always the way to go, there is much to be learned from examining [how they work and how they are put together][link-frameworks].</p>
</aside>

#### Progressive Enhancement

Since mobile phones and tablets are frequently the lower end in terms of capabilities, it is recommended to start with building the mobile experience first, and gradually add features. With this in mind, RWD could be considered a type of [Progressive Enhancement][link-progen], whereby users with basic devices can access basic content and features, however care is taken to layer on more sophisticated features for more powerful devices and desktop users.

With these techniques, users only get what their device or browser can handle, and feature detection can be used to add more features when appropriate — without breaking on less capable devices.

#### Setting Target Device Requirements

For a given project, check Web server logs, current industry statistics and trends, and consult with a client on their audience and proposed use cases when determining a baseline set of devices to build the site and test for.

What types of users are there? Is an audience:

 - Working on their commute from a bus or train?
 - Paying bills or their taxes on the go?
 - Accessioning financial information with their clients on the go, over lunch?
 - Entering sales figures remotely?
 - Enjoying witty content or editorials?
 - Comfortably browsing for fun at home?

It is near impossible to test on every version of every platform, particularly with something like Android where fragmentation of the feature set is totally unpredictable. Comparison of platforms and statistics regarding particular releases of particular versions of an operating system may need to be considered.

<!-- @todo: @link to android fragmentation presentation -->
<!-- @todo: @link to sources for mobile device use? statcounter? etc? -->

### Responsive Design Best Practices

RWD is frequently said to be achieved through the use of:

1. Percentage-based grids, 
2. flexible images that scale, 
3. and **CSS media queries**. 

These are the core ideas behind RWD, though other techniques are often employed as the term grows in popularity and the use cases evolve. 

Like all programming and creative processes there is flexibility in how you go about achieving these, so long as there is consistency within your team. 

Some core guidelines:

 - Always design and develop the **mobile UX first** (thus start with small defaults and scale upwards; please see Mobile First)
 - Set the **baseline Media Queries as a team** for various types of devices, and try to stick to them as much as possible. 
 - **Add additional Media Queries** — **as necessary** — for less than ideal experiences at the sizes in between, as appropriate for different types of content and components.
 - **Build for speed** (load time and interaction) and the minimum viable product for slower connection speeds and less able devices.
 - Be careful of **images**. Do not render a 5GB image at 100px by 100px. This does not change the bandwidth needed to download the file! Similarly if you are hiding an image with `display: none`, `visibility: hidden` or similar, the image may still be downloaded.
 - Test on **real hardware**. Actual testing on *actual devices* cannot be substituted with resizing a browser window, or even an "emulation" mode offered by a desktop browser.
 - A **mobile browser** is not a small desktop browser. Mobile versions of desktop browsers are frequently woefully different (or a totally different product) than their desktop counterparts, so do not assume that just because it works on Chrome desktop that it will work on an Android device.

Initial work, and first pass tests of media queries, may be performed in desktop browsers by resizing the screen or using a browser's developer tools that may feature an emulation mode (e.g. Chrome DevTools).

However, this is *never a substitution* for actual testing on actual devices with various Operating System versions and 

<!-- @todo: 
  @link to article about comparing different types of downloading/hiding -->

#### Media Queries and CSS Breakpoints

Added as part of the CSS3 specification, **media queries** consist of a media type and at least one expression of a media feature (such as height, width and orientation) that describe the conditions under which a set of CSS rules apply. 

For example:

```css
@media screen (min-width: 300px) and (max-width: 800px) {
  .some-selector{
    /* CSS declarations go here */
  }
}
```

These widths are referred to as _breakpoints_ as they are the point at which layout behavior breaks with the design at the prior size. This is typically screen size, and sometimes other conditions such as pixel density or even screen orientation (e.g. landscape or portrait; although this isn't that useful).

These are applied with CSS Media Queries test the device or browsers current feature set for various conditions and feature support. The most common example is screen size.

The golden rule is:

 - **Don’t specify vendor- or device-specific widths**

Let the content and the design dictate the breakpoints.

 - For instance, targeting an ipad in portrait or an ipad landscape.
 - Popular devices will come and go and even within devices the specifications will change over time. 
 - Avoid orientation/resolution based specifications in favor of width based ones (remember you are **not** targeting devices!). 

<aside class="box">
  <p>[Media Query Resources][link-mediaqueries]</p>
  <p>[A Device Agnostic Approach to Responsive Web Design][link-devices] is a great read on responsive techniques that do not favor one device over another, and are driven by content elements.</p>
</aside>

If you are placing breakpoints every 50-100px you are doing something wrong. While there is not a correct number of breakpoints there must be a balance between the control of the design and a manageable code base.

While working with media queries here are a few things to consider:

 - All modern browsers support CSS3 Media Queries (including browsers as far back as the stock Android 2.1 browser)
 - IE8 and below do not support Media Queries.
  - [Respond.js][link-respondjs] (and similar JavaScript libraries) can be used to enable support for Media Queries in these older browsers (if needed).
  - Attempting to polyfill Media Query behavior in older browsers is usually not advisable. This is because the JS needed will cause an additional performance hit to the already slow JavaScript and rendering engine. 

Instead, you are better off forcing older browsers to experience the site through a desktop experience (optionally tailored specifically for these older browsers).

 - This can be done either through feature detection (with the likes of Modernizr) or with IE conditional statements and optionally including additional CSS style sheets.


#### Mobile First

The "Mobile First" techniques consider the lowest common denominator first, which is likely to be your mobile devices due to bandwidth limitations, loading times (not just screen size!), and even CPU speed of the devices.

Key considerations and techniques include:

 - Starting small, and work upwards. Use `min-width`, **not** `max-width` breakpoint definitions). 
 - Begin with global content styles that apply across all breakpoints.
 - Next, add the styles that are seen below the smallest break point -- remember that using the `min-width` approach means that the "first breakpoint" will not be for small screens (like mobile size screens) but rather for larger ones (like mobile landscape or phablet size screens).
 - From here add additional styles at successive breakpoints using `min-width` media queries leveraging the CSS cascade to progressively add additional styles.
 - As the queries increase in minimum sizes, add the markup and styles necessary to lay components out differently on larger screens.
 - Examine site features for mobile-specific JavaScript events (e.g. touch, pointer, vs. mouse) and interactions (e.g. swipe).

Generally speaking smaller screen designs are a bit less complex (fewer images, effects, etc). Thus as the screens get larger the complexity tends to increase, conveniently lending to an additive approach to styling, very much in line with a mobile first pattern. 

An example of working upwards in a CSS file might be:

```css
/* GENERAL STYLES */
.example {...}

/* SECTION SPECIFIC STYLES - aimed at the smallest devices*/
.hero {...}

@media(min-width: 600px) {
  .hero {
    /* just the new stuff here, no need to be repetitive... */   
  }  
}

@media(min-width: 800px) {
  .hero {
    /* just the new stuff here, no need to be repetitive... */   
  }  
}

@media(min-width: 1400px) {
  .hero {
    /* might need larger font sizes at largest screen sizes */   
  }  
}

```

<aside class="box">
  <p>Note: the breakpoints specified above are **not** intended to be recommended breakpoints, but rather just illustrative of this general concept.</p>
</aside>

Another way of thinking about a mobile first pattern (from a design and development standpoint) is to:

 - Innovate for your smallest reasonable target device.
 - Then start "sizing your window up" until the user experience or the design degrades.
 - Add in a breakpoint and make some design modifications to fix the degradation.
 - Resume sizing up your view port until you reach a similar breakdown in design and repeat this exercise.

Recurse on this until you reach your largest reasonable target device - this is the mobile first pattern. 

#### Speed is a feature

People expect page load time to be as fast if not faster on their mobile phones in comparison to a desktop experience. 

 - Try to keep your Web site's foot print as small as possible (this is a general best practice).
 - Start with global styles that apply across all breakpoints
  -  Optionally in-line these vital styles for faster initial render time
 - Consider every HTTP request
  - The request itself may end up taking as much if not more time then the transfer of the data and could block downstream actions or more vital downloads.
 - Concatenate, gzip and minified your production CSS/JS where possible as this will lower page load size and time
 - Load the least amount of JavaScript that is needed.
  - Wherever possible include script files at the end of your HTML document just before the `</body>` tag.

Advanced CSS3 techniques are easy to implement, but when you start combining them, rendering and scrolling performance can be affected.

Be careful of images! 

 - Use a responsive image pattern that starts by serving a mobile optimized (and thus smaller file size) image first.

#### Responsive Images

Currently there is little to no native support for responsive images. 

The proposal with the most traction appears to be the `<picture>` element and related `srcset` and `sizes` attributes. 

<aside class="box">
  <p>You can read about this element and the evolution and standard at [ResponsiveImages.org][link-respimages]</p>
  <p>At this time the best application of the `<picture>` is with the [Picturefill polyfill][link-picturefill].</p>
</aside>

It can be cumbersome to set up, so take care and be certain the benefits are worth it on a given site.

Some basic rules to follow:

 - **Always** optimize your images using a tool such as Adobe Photoshop to assure you have the ideal image size and right amount of lossy compression. 
 - Run all images though a lossless compressor like [Compressor.io][link-compressor], [Smush.it][link-smush] or [ImageOptim][link-optim] (which has related tools also available as build-time scripts).

You can also consider “Compressive Images”, which are basically higher-resolution jpegs compressed at a higher percentage rate:

 - [Compressive Images][link-compressive]
 - [Retina Revolution][link-retinarev]
 - [Compressive Image Tests][link-imagetests]

However, there are drawbacks:

 -  The browser tends to use significantly more memory when storing and resizing these higher resolution images than scaling them to fit a container

What’s important to realize is that this is changing faster than we can develop. What you do now will be obsolete very soon, so be sure to stay on top of current trends.

#### Vector Graphics (SVG)

When working with an audience on unknown screen sizes and resolutions, as is the pretense in RWD, having graphics that can scale without degrading is a very appealing prospect. There are several vector implementation options.  

Web fonts: Fonts are vectors. With the exposure of custom web fonts as part of the CSS level 2 specification, many developers have turned to custom font packages as a solution for icons and simple vectors.

 - Pros: this option allows for easy control of vector color, size and usage
 - Cons: all of the vectors single color and must be grouped others in one file.

SVG: SVG is an XML syntax for describing vector shapes. 

 - Pros: vectors can be manipulated by CSS and/or JavaScript and allows for complex filters, animations and transitions.
 - Cons: SVG is only supported by IE9+

<aside class="box"><p>[Grumpicon][link-grump] is a script that will detect SVG support and server the appropriate CSS (or needed fall back CSS code to assure compatibility.</p></aside>

#### Other Categories

Virtually everything can change when screen sizes change:

 - Grids
 - Typography
 - Accessible forms / validation messages
 - Main site navigation
 - Header or Footer content
 - In-page navigation, such as tabbed navigation, or accordions
 - Images
 - Data tables
 - Interactions and animations
 - Advertising types
 - Performance metrics

<aside class="box">
  <p>More thoughts and ideas: [Multi-device Layout Patterns][link-multipattern]</p></aside>

##### Navigation Changes

Large horizontal navigation and mega-drop downs are not always practical on smaller screens. Frequently this means off-canvas navigation, collapsing menus into select boxes, or other approaches such as a full-screen overlay.

<!-- @todo: @link: examples? -->

<aside class="box">
  <p>[Progressive and Responsive Navigation][link-respnav] is a great example of modifying the types of menu based on screen size.</p>
  <p>[Responsive Navigation Patterns][link-nav] and [Complex Navigation Patterns][link-navcomplex]</p>
</aside>

<p>How navigation changes per screen size will depend entirely on the requirements and design for the project.</p>

##### Responsive Data Tables

Displaying data tables in a responsive way on Mobile sites is a challenge. There are only so many good ways to address this.

 - Simply make a wrapper around the table and scroll horizontally.
 - Have CSS rules which collapse the tables.
 - Sometimes JavaScript might be used to hide/show certain less critical columns, however this does add overhead.

<aside class="box">
<p>The always excellent Brad Frost has a nice collection of links regarding [responsive data tables][link-tables].</p>
</aside>

<!-- ### Responsive Web Design Deliverables ... @todo: content on responsive design deliverables -->

### Next Steps & RWD Resources

Big collections:

 - [Responsive Design Resources](https://bradfrost.github.io/this-is-responsive/resources.html)
 - (more) [Responsive Design Resources](https://www.usertesting.com/blog/2015/02/03/responsive-web-design-resources/)
 - [Responsive Design Guidelines and Tutorials](http://www.smashingmagazine.com/responsive-web-design-guidelines-tutorials/)

Articles:

 - [Responsive Web Design](http://www.alistapart.com/articles/responsive-web-design/)
 - [Responsive Design Patterns](http://blog.teamtreehouse.com/responsive-design-patterns)
 - [What We Mean When We Say Responsive](http://alistapart.com/column/what-we-mean-when-we-say-responsive)
 - [Essential Considerations for Crafting Quality Media Queries](http://zomigi.com/blog/essential-considerations-for-crafting-quality-media-queries/)

Blogs:

 - [This Is Responsive](http://responsive.rga.com/)
 - [Responsive Web Design](https://responsivedesign.is)

[link-compressive]: http://filamentgroup.com/lab/rwd_img_compression/
[link-compressor]: https://compressor.io/
[link-devices]: http://www.smashingmagazine.com/2012/03/device-agnostic-approach-to-responsive-web-design/
[link-frameworks]: https://bradfrost.github.io/this-is-responsive/resources.html#frameworks
[link-grump]: http://www.filamentgroup.com/lab/grumpicon-workflow.html
[link-imagetests]: http://www.vanseodesign.com/web-design/compressive-image-tests/
[link-mediaqueries]: https://bradfrost.github.io/this-is-responsive/resources.html#media-queries
[link-optim]: https://imageoptim.com/
[link-patterns]: https://bradfrost.github.io/this-is-responsive/patterns.html
[link-picturefill]: https://scottjehl.github.io/picturefill/
[link-progen]: https://www.filamentgroup.com/dwpe/
[link-resources]: https://bradfrost.github.io/this-is-responsive/resources.html
[link-respimages]: http://responsiveimages.org/
[link-multipattern]: http://www.lukew.com/ff/entry.asp?1514
[link-retinarev]: http://blog.netvlies.nl/design-interactie/retina-revolution/
[link-respondjs]: https://github.com/scottjehl/Respond
[link-respnav]: http://www.smashingmagazine.com/2012/02/progressive-and-responsive-navigation/
[link-smush]: https://smush.it
[link-tables]: https://bradfrost.github.io/this-is-responsive/resources.html#tables
[link-nav]: http://bradfrost.com/blog/web/responsive-nav-patterns/
[link-navcomplex]: http://bradfrost.com/blog/web/complex-navigation-patterns-for-responsive-design/


