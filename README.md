# Social Runners Valencia

A welcoming, bilingual running-community website for Social Runners Valencia, Spain. The site helps runners learn about the community, discover group runs, read running articles, and join upcoming events through Meetup.

* Live site: [socialrunners.es](https://socialrunners.es/)
* Meetup: [Valencia Social Runners](https://www.meetup.com/valencia-social-runners/)
* Blog: [Social Runners blog](https://socialrunners.wixsite.com/socialrunners/blog)

## Features

* Responsive single-page website built with HTML, CSS, and vanilla JavaScript
* English and Spanish language toggle with persisted language preference
* Mobile navigation with hamburger-menu behavior
* Blog carousel with button and touch-swipe navigation
* Community overview, group-run instructions, blog cards, and external calls to action
* SEO and social-sharing metadata, favicon, and custom-domain configuration
* Responsive layout for desktop, tablet, and mobile screens

## Project structure

```text
.
├── index.html          # Main page markup and external links
├── script.js           # Carousel, localization, navigation, and footer logic
├── styles.css          # Layout, colors, cards, carousel, and responsive styles
├── locales/
│   ├── en.js           # English translations
│   └── es.js           # Spanish translations
├── images/             # Site imagery and favicon assets
└── CNAME               # Custom domain configuration
```

## Getting started

The project is a static website and does not require a build step or package installation.

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/shaneM50/socialrunners.git
   cd socialrunners
   ```

2. Open `index.html` directly in a web browser.