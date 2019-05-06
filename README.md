# Vuepress quick start
## Overview

Designed for getting a project off the ground quickly, this project starts with
a basic blog-style page, with content sorted in different categories.

For more info, check out the [GitHub repo](https://github.com/rjsalvadorr/vuepress-starter)

## To-Do

- easy authoring scripts

## Usage

1) Install

`npm i -g vuepress`

2) Dev

`npm start`

3) Deploy

`npm run build`

Read more about Vuepress here: https://vuepress.vuejs.org/guide/

## Front-matter data

Added on top of every markdown document in the site. Looks like this:

```
---
title: Writing words is neat
subtitle:
date: 2019-03-24 13:35:57
type: post
category: deep-thoughts
---

# Words words words

Bacon ipsum dolor amet in est pork belly ex excepteur.
Ipsum cow leberkas adipisicing, in picanha strip steak
burgdoggen commodo ullamco et sausage brisket nulla cupim.
```

This page has been configured to use these settings to build the page flow
for various categories and pages.

### title

Title of the post/category

### subtitle

Title of post. Appears in the post list of its category page.

### date

Date for post/category. Appears in the post list of its category page.
Also used for sorting.

### type

Type of the object. Expected values: `post | category | link`

### category

Category of this object. This can be customized for the categories in the page.
For example, a portfolio page could have categories like: `software | art | contact`.