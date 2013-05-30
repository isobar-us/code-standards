# Responsive Best Practices

Responsive web development is still very much in flux. This section of the document is best suited to act as a primer for your projects. Techniques outlined here may very well have changed mere weeks after writing. Use this as a set of guidelines, not as doctrine. Still don't have any idea what we're talking about? Then read [the article](http://alistapart.com/article/responsive-web-design) that started it all.

This document assumes a general understanding of the concept of responsive design.


# General Techniques

## Mobile First

Serve assets and code to mobile devices first and then scale up from there. Serve the bare minimum needed to make the resulting content accessible. Similar to progressive enhancement, scale up from and then scale up from there as browser capabilities allow. Content should be viewable by as many devices as possible, including devices that don't support Javascript.

## CSS
Start with the most basic, global styles. As the browser or device width increases, serve more styles using min-width breakpoints. Avoid using device-specific breakpoints, popular devices will come and go. Instead, let the content and design dictate breakpoints between "mobile", "tablet", or "desktop." 

## Speed is a Feature
Developing with a mobile-first philosophy in mind will help speed up the performance of your project. But consider every HTTP request. When serving CSS, combine CSS files so that as few as possible are served. That might mean that a mobile device may download Desktop-specific CSS, but those styles will not be parsed once the browser doesn't meet a specific media query.

Also, advanced CSS3 techniques, like box-shadows, rounded corners, and gradients, are easy to implement but start affecting performance exponentially when combined. Keep this in mind when developing.

# Media Queries

**A Note about IE8 and Media Queries**
Many [great minds](https://github.com/h5bp/html5-boilerplate/issues/865#issuecomment-3025844) in this field consider that IE8 users should be delivered the desktop experience by default. This can be done, but as outlined by [this article](http://zomigi.com/blog/essential-considerations-for-crafting-quality-media-queries/) it means that modern browsers will be need extra HTTP requests for stylesheets. If you must support IE8, I recommend using pollyfills for the techniques listed below.

Media Queries are supported by all modern browsers. To enable support for media queries for browsers that don't natively support it, use [Respond.js](https://github.com/scottjehl/Respond). Be sure to read the documentation for known bugs and tips.

Use [Modernizr](http://modernizr.com/) to test for Browser capabilities. Instead of testing for *every* feature that Modernizr can test for, be sure to use a [custom build](http://modernizr.com/download) so that you only test the features you need. Copy the URL when including the JSin your project so that any additional tests in your Modernizr build can be added easily.

The Modernizr.mq() function can tell you what breakpoint the browser is in in your Javascript code. Unfortunately, this doesn't work in IE8. Use [this fork of MatchMedia()](https://github.com/benschwarz/matchMedia.js/blob/IE7-8/matchMedia.js) to media query testing in JS if IE8 support is needed. If you *do* use the fork of MatchMedia(), be sure to remove the 


# Responsive Images

### Fluid Images

If your design calls for it, consider making your images automatically resize to the width of their container. This is achieivable through a simple snippet of CSS:
```css
img{
  width:100%;
}
```

### Advanced Techniques

Techniques for developing responsive images are rapidly changing. Currently, there are no native browser implementations to handle it. We recommend using [Picturefill](https://github.com/scottjehl/picturefill) which is designed to mimic the proposed `<picture>` element. It supports specifying different images depending on resolution media query as well as pixel density. Another proposed solution is using the @srcset attribute. If you want the full backstory, be prepared for [a lot of reading](http://blog.cloudfour.com/the-real-conflict-behind-picture-and-srcset/). Drawbacks for either of these solutions is that multiple versions of every image have to be generated, which may not be practical for every project.

#### `<picture>` Example
If the `<picture>` element is not supported, the browser will use the fallback `<img src="small.jpg">`. If it does support the element, it will examine each media query and download the image that matches.
```html
<picture width="500" height="500">
  <source media="(min-width: 45em)" src="large.jpg">
  <source media="(min-width: 18em)" src="med.jpg">
  <source src="small.jpg">
  <img src="small.jpg" alt="">
  <p>Accessible text</p>
</picture>
```

#### Picturefill Example
Picturefill expands upon this syntax. If Javascript is not supported, the default small image will be displayed. This is an example from the MSG project:
```html
<div data-picture data-alt="Rangers Playoffs">
  <div data-src="rangers-small.jpg"></div>
  <div data-src="rangers-medium.jpg" data-media="(min-width:540px)"></div>
  <div data-src="rangers-large.jpg" data-media="(min-width:768px)"></div>
  <noscript>
    <img src="rangers-small.jpg" alt="Rangers Playoffs"/>
  </noscript>
</div>
```

#### @srcset Attribute Example
In this example, a banner that takes half the viewport is provided in two versions, one for wide screen and one for narrow screens.
```html
<img  alt="The Breakfast Combo"
      src="banner.jpeg"
      srcset="banner-HD.jpeg 2x, banner-phone.jpeg 100w, banner-phone-HD.jpeg 100w 2x">
```

### Compressive Images
Another technique to consider is called Compressive Image. The general idea is that you take a high-resolution JPEG and compress it at a greater percentage that you normally would. There are a [number](http://www.vanseodesign.com/web-design/compressive-image-tests/) [of](http://blog.netvlies.nl/design-interactie/retina-revolution/) [articles](http://filamentgroup.com/lab/rwd_img_compression/) that test the results of this technique. Although a major drawback is that the browser tends to use significantly more memory when storing and resizing these higher resolution images when scaling them to fit a container. But this might be a good technique to use when you lack the server-side capabilities to generate multiple images.

What's important to realize is that the state of responsive images are changing faster than we can develop. [Whatever you decide on for your project will soon be obsolete](http://blog.cloudfour.com/8-guidelines-and-1-rule-for-responsive-images/), so be sure to stay on top of current developments.

### Helpful Scripts
[ImagesLoaded](http://desandro.github.io/imagesloaded/) will tell you when your images have loaded. 

## Icons

We advise against using images for icons. We tried it for MSG, but soon found that it wasn't worth the effort when developing techniques to handle retina displays. Instead consider [rolling your own icon font](https://github.com/blog/1135-the-making-of-octicons). This does have design limitations, but they scale very well depending on screen pixel density.


# Other Notes

## Yepnope
Yepnope is a great tool to test for feature support on your user's browser. It's the default loader for Modernizr, but it does have a few bugs. Most notably, Android 2.3 support is flaky. We tested a number of versions and ended up with a custom build that enabled Android 2.3 support as well as some of the most recent features. See [this gist](https://gist.github.com/nring/5636358) for details. 

Don't realy too heavily on Yepnope as it adds an extra HTTP request for each test. If you have a way to fix this problem, great!

## Ress

[Ress = REsponsive design & Server Side Components](http://www.netmagazine.com/tutorials/getting-started-ress)


## How the hell do I stay on top of this stuff?!

* [A List Apart](alistapart.com)
* [Smashing Magazine](smashingmagazine.com)
* [Brad Frost](http://twitter.com/brad_frost)
* [Ethan Marcotte](http://twitter.com/beep)
* [Responsive Web Design](http://twitter.com/rwd)
