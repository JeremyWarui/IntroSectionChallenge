# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

I was able to:

- To make sure the relevant dropdown menus on desktop and mobile are visible on the navigation links
- Show optimum layout for the content depending on the mobile and desktop size
- Apply hover states for all interactive elements on the page

### Screenshot

![screenshot](./images/screenshot.jpg)

### Links

- Solution URL: [github](https://github.com/JeremyWarui/IntroSectionChallenge)
- Live Site URL: [vercel](https://intro-section-challenge.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow

### What I learned

I learnt how to apply some of the ES6 code snippets for refactoring my code. Especially for the side navigation animation and interaction

```js
for (const sideTab of sideTabs) {
  sideTab.addEventListener("click", function () {
    //toggle the hide class to reveal the list
    this.nextElementSibling.classList.toggle("hide");
  });
}
```

## Author

- Frontend Mentor - [@JeremyWarui](https://www.frontendmentor.io/profile/jeremywarui)
