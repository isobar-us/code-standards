
## Responsive Web Design

### Goals

...

### Getting Started

... define device compatibility

### Standards For Mobile Development

#### Mobile First
 - Serve the least amount of js to browsers that need it
 - Start with global styles then work your way up to each additional breakpoint with min-width media queries

#### Breakpoints
 - Don’t specify device-specific widths (ipad portrait, ipad landscape)
  -  Popular devices will come and go
 - Instead, let the content then the design dictate the breakpoints.
  -  For example: MSG’s breakpoints had the iphone5 in landscape mode rendering as a tablet device. This shouldn’t be!

#### Speed is a feature
 - Serve the bare minimum to mobile devices and scale up from there
 - Consider every HTTP request
 - Advanced CSS3 techniques are easy to implement, but when you start combining them, rendering and scrolling performance is affected

#### Resources
 - http://zomigi.com/blog/essential-considerations-for-crafting-quality-media-queries/ Excellent article that still holds up.

#### Media Queries
 - Media Queries are supported by most browsers
 - IE8 and below are problematic.
  -  IE8 doesn’t support Media Queries.
  -  There are ways to get around this which involve adding conditional comments for each individual stylesheet breakpoint - I don’t like this approach. It means that all browsers will need an extra http request for each stylesheet
  -  Instead, use Respond.js to enable Media Query support
  -  Read the documentation to find known bugs and tips
 - All modern browsers support CSS3 Media Queries (even as far back as the stock Android 2.1 browser)
  -  In order to test for Media Query Support in JS, use the MatchMedia polyfill that’s found in Modernizr.
  -  Use this fork of MatchMedia() which supports IE8
 - Checking Media Query support via JS
  -  Media Queries in stylesheets are all well and good, but what if you need to test media query support in your Javascript?
  -  User Modernizr’s Modernizr.mq() function
  -  NOTE: This intentionally doesn’t work in IE8.
  -  The creators of this plugin generally advise against the use of complex polyfills to enable support in older versions of IE. THe primary reason is that it will cause yet another performance hit in an already slow Javascript and rendering engine. Instead, craft your code so that IE8 defaults to the desktop version.
  -  Modernize has Modernizr.mq(), but its support is flaky in <= IE8.

#### Responsive Images
 - Rapidly evolving solutions
 - Recommend you use Picturefill
  -  Polyfill designed to mimic the proposed <picture> element
  -  Follow updates on Responsive Images here: http://responsiveimages.org/
 - Consider “Compressive Images”
  -  Basically higher-resolution jpegs compressed at a higher percentage rate
  -  http://www.vanseodesign.com/web-design/compressive-image-tests/
  -  http://blog.netvlies.nl/design-interactie/retina-revolution/
  -  http://filamentgroup.com/lab/rwd_img_compression/
 - Drawbacks
  -  The browser tends to use significantly more memory when storing and resizing these higher resolution images than scaling them to fit a container
 - What’s important to realize is that this is changing faster than we can develop. What you do now will be obsolete very soon, so be sure to stay on top of current trends

#### Icons
 - Grunticon / Grumpicon all the way http://www.filamentgroup.com/lab/grumpicon-workflow.html

### Next Steps &amp; Resources for Mobile

... 

For current links and references, please see our Wiki on Github.



