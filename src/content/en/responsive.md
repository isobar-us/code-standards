## Responsive Web Design

Responsive Web Design (RWD) is the term used for the practice of creating page layouts and experiences that work on a variety of devices and screen sizes.

With the ever expanding mobile landscape and the evolution of the Internet of Things (IoT), the idea of a "standard" screen size has fallen by the wayside in favor of the rise of a device-agnostic approach.

To this end a series of techniques have been put together for pages to adjust based off browsers' current specs (e.g. width, height, pixel density, orientation, etc).

The techniques are referred to as Responsive Web Design (RWD) and is another technique in the toolbox of *progressive enhancement* and *adaptive web design*.

### Goals of Responsive Web Design

The stated goals of RWD are to:

 - Offer an optimized user experience (UX)
 - regardless of the user's screen size or device supported features.
 
This is true whether it is a stadium jumbotron or the screen of a watch — and of course everything between.

Despite this lofty ideal, on Web projects the term "responsive web design" has more generally been used in reference to an optimized experience for a set of target devices, usually:

 - A particular set of cell (smart) phones,
 - various tablets,
 - or desktop computer monitors (depending upon the target audience).

Reasonable effort is applied to accommodate the ideal UX for devices with screen sizes that fall outside of and in between.

Overall, critical content and features on a site should be:

 - Adjustable to different types of user interaction (e.g. click, swipe, pinch)
 - Realistically accessible based on the capabilities of different devices.

If meeting desktop browsers' feature sets and dealing with different platforms was difficult before, RWD introduces an almost infite ecosystem of hardware and software that Web pages need to work on.

### Getting Started

As the name of RWD implies, it all starts with a flexible design that considers components with mutable characteristics based on the available screen canvas. Careful consideration needs to be taken when innovating to derive a design that can respond to various screens.

For a given project, always consider:

 - The breadth of the use cases for each feature on the site.
 - If all target devices will support all the technologies required.
 - That the UX will **not** be 100% the same across all devices, browsers and screens — nor should it be!
 - What happens to the design when the screen gets smaller and larger than the static canvas size it is being designed on.
 - For placement of content and decorative elements, are there patterns or rules that can describe where it falls and adjust with screen sizes?
 - Will some components be better suited as vector graphics (svg or fonts) instead of raster files to allow for distortion free scaling?
 - Will assets need to be produced in different formats for different devices (e.g. Flash video vs. HTML5 video, lower resolution artwork vs. high resolution artwork, smaller file sizes vs. larger sizes)
 - If the device offers a superior UX for some types of interaction (e.g.  native date-pickers vs. traditional browser controls, or swiping instead of clicking on dots).

#### Progressive Enhancement

Progressive enhancement is the practice of ... 

### Standards For Developing a Responsive Website
RWD is achieved through the use of percentage based grids, flexible images and CSS media queries. Like all programming and creative processes there is flexibility in how you go about achieving these  so long as there is consistency within your team. Despite this flexibility there are some core guidelines:
 - Always design and develop mobile first (thus use `min-width`, **not** `max-width` breakpoint definitions, more to follow)
 - Take advantage of CSS breakpoints, but don't go breakpoint crazy, set the base breakpoints as a team and try to stick to them as much as possible (there will of course be exceptions). 
 - Build for speed and the minimum viable product
 - Be careful of images, just because you are rendering a 5GB image at 100px by 100px does not change the bandwidth needed to download the file! Similarly if you are hiding an image with `display:none`, `visiblity:hidden` or similar, the image is likely still being downloaded. 

#### Mobile First
Speaks to a mentality of considering the lowest common denominator first, which is likely to be your mobile devices due to bandwidth limitations and loading times (not just screen size!). 
 - Start with global styles that apply across all breakpoints
 - Next add the styles that are seen below the smallest break point -- remember that using the `min-width` approach means that the "first breakpoint" will not be for small screens (like mobile size screens) but rather for lager ones (like mobile landscape or fablet size screens).
 - From here add additional styles at successive breakpoints using `min-width` media queries leveraging the CSS cascade to progressively add additional styles.
  - Very generally speaking smaller screen designs are a bit less complex (fewer images, effects, etc). Thus as the screens get larger the complexity tends to increase conveniently lending to an additive approach to styling, very much in line with a mobile first pattern. 

```css
/* GENERAL STYLES */
*{...}

/* SECTION SPECIFIC STYLES - aimed at the smallest devices*/
.hero{...}

@media(min-width:600px){
  .hero{
    /* just the new stuff here, no need to be repetitive... */   
  }  
}

@media(min-width:800px){
  .hero{
    
  }  
}
```
_note: the breakpoints specified above are **not** intended to be recommended breakpoints, but rather just illustrative of this general concept.

Another way of thinking about a mobile first pattern (from a design and development standpoint) is to innovate for your smallest reasonable target device. Then start "sizing your window up" until the user experience or the design degrades, at which point you throw in a breakpoint and make some design modifications to fix the degradation. Resume sizing up your view port until you reach a similar breakdown in design and repeat this exercise. Recurse on this until you reach your largest reasonable target device - this is the mobile first pattern. 

#### Breakpoints
A CSS breakpoint refers to a specific browser or device based condition under which a set of CSS rules will take effect. 
 - Don’t specify device-specific widths (ipad portrait, ipad landscape)
  -  Popular devices will come and go and even within devices the specifications will change over time. 
  - Avoid orientation/resolution based specifications in favor of width based ones (remember you are **not** targeting devices!). 
 - Let the content and the design dictate the breakpoints.
 - If you are placing breakpoints every 50-100px you are doing something wrong. While there is not a correct number of breakpoints there must be a balance between the control of the design and a manageable code base.

#### Speed is a feature
People expect page load time to be as fast if not faster on their mobile phones in comparison to a desktop experience. 
 - Try to keep your website's foot print as small as possible (this is a general best practice).
 - Start with global styles that apply across all breakpoints
  -  Optionally in-line these vital styles for faster initial render time
 - Consider every HTTP request
  - The request itself may end up taking as much if not more time then the transfer of the data and could block downstream actions or more vital downloads.
 - Concatenate, gzip and minified your production CSS/JS where possible as this will lower page load size and time.2
 - Load the least amount of JavaScript that is needed.
  - Wherever possible include script files at the end of your HTML document just before the `</body>` tag.
 - Advanced CSS3 techniques are easy to implement, but when you start combining them, rendering and scrolling performance can be affected
 - Be careful of images! 
  - Use a responsive image pattern that starts by serving a mobile optimized image first.

#### Media Queries
Added as part of the CSS3 specification, media queries consist of a media type and at least one expression of a media feature (such as height, width and orientation) that describe the conditions under which a set of CSS rules apply. For example:

```css
@media screen (min-width: 300px) and (max-width: 800px){
  .some-selector{
    /* CSS declarations go here */
  }
}
```

In the example above the CSS rules defined between the outer curly brackets will apply for the media type of _screen_ on those browsers with window widths between the sizes of _300px_ and _800px_.

While working with media queries here are a few things to consider:
 - All modern browsers support CSS3 Media Queries (including browsers as far back as the stock Android 2.1 browser)
 - IE8 and below do not support Media Queries.
  -  Respond.js (and similar JavaScript libraries) can be used to enable support for Media Queries in these older browsers (if needed).
  - Attempting to ployfill Media Query behavior in older browsers is usually not advisable. This is because the JS needed will cause an additional performace hit to the already slow Javascript and rendering engine. Instead you are better off forcing older browsers to experience the site through a desktop experience (optionally tailored specifically for these older browsers).
    - This can be done either through feature detection (with the likes of Modernizr) or with IE conditional statements and optionally including additional CSS stylesheets.

#### Responsive Images
Currently there is no native support/specification for responsive images. There are a number of proposals which have been set forth, but none have yet been integrated as part of the living HTML5 document.
 - **Always** optimize your images using a tool such as Adobe Photoshop to assure you have the ideal image size and right amount of lossy compression. 
 - Run all images though a lossless compressor like Compressor.io (https://compressor.io/), Smush.it (https://smush.it) or ImageOptim.
 - Picturefill is a very good HTML5 polyfill designed to mimic the proposed `<picture>` element schema.
 - Follow updates on Responsive Images here: http://responsiveimages.org/


 - Consider “Compressive Images”
  -  Basically higher-resolution jpegs compressed at a higher percentage rate
  -  http://www.vanseodesign.com/web-design/compressive-image-tests/
  -  http://blog.netvlies.nl/design-interactie/retina-revolution/
  -  http://filamentgroup.com/lab/rwd_img_compression/
 - Drawbacks
  -  The browser tends to use significantly more memory when storing and resizing these higher resolution images than scaling them to fit a container
 - What’s important to realize is that this is changing faster than we can develop. What you do now will be obsolete very soon, so be sure to stay on top of current trends


#### Vector Graphics
When working with an audience on unknown screen sizes and resolutions, as is the pretense in RWD, having graphics that can scale without degrading is a very appealing prospect. There are several vector implementation options.  
 - Web fonts: Fonts are vectors. With the exposure of custom web fonts as part of the CSS level 2 specification, many developers have turned to custom font packages as a solution for icons and simple vectors.
  - Pros: this option allows for easy control of vector color, size and usage
  - Cons: all of the vectors single color and must be grouped others in one file.
 - SVG: SVG is an XML syntax for describing vector shapes. 
  - Pros: vectors can be manipulated by CSS and/or JavaScript and allows for complex filters, animations and transitions.
  - Cons: SVG is supported by IE9+
  - Grumpicon is a script that will detect SVG support and server the appropriate CSS (or needed fallback CSS code to assure compatibility (http://www.filamentgroup.com/lab/grumpicon-workflow.html).


### Next Steps &amp; Resources for Mobile
???

### Resources
 - http://zomigi.com/blog/essential-considerations-for-crafting-quality-media-queries/ Excellent article that still holds up.
 ???





