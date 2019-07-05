---
title: Home
---

# Vuepress quick start
## Overview

Designed for getting a blog-style project off the ground quickly, this project starts with
a basic blog-style page, with content sorted in different categories.

For more info, check out the [GitHub repo](https://github.com/rjsalvadorr/vuepress-starter)

## Usage

#### 1. Install

`npm i -g vuepress`  
or  
`yarn global add vuepress`

#### 2. Dev

`npm start`  
or  
`yarn start`

#### 3. Deploy

`npm run build`  
or  
`yarn build`

Read more about Vuepress here: https://vuepress.vuejs.org/guide/

## Links

- [Page 1](page-1/)
- [Page 2](page-2/)
- [Page 2](page-3/)

## Post Thumbnails

In order to work, these have to go in `.vuepress/public/images`.There's a
naming convention in place: `thumb-<page-name>.jpg`. So a page with content
in `/category1/sample-title/README.md` would have a corresponding image in
`/.vuepress/public/images/thumb-sample-title.jpg`

## Page excerpts

See the [VuePress docs](https://vuepress.vuejs.org/guide/custom-themes.html#content-excerpt) for more info.

## Fonts

The site uses [Google Fonts](https://fonts.google.com/about) to load fonts. See the stylesheet reference in the theme config (`.vuepress/config.js`)

## Front-matter data

Added on top of every markdown document in the site. Looks like this:

```
---
title: Writing words is neat
---

# Words words words

Bacon ipsum dolor amet in est pork belly ex excepteur.
Ipsum cow leberkas adipisicing, in picanha strip steak
burgdoggen commodo ullamco et sausage brisket nulla cupim.
```

This site has been configured to use these settings to build the page flow
for various categories and pages.

#### title

Title of the post/category. Appears as tab/window title on browser.
