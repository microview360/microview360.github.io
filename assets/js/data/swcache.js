const resource = [ /* --- CSS --- */ '/microview360.github.io/assets/css/style.css', /* --- PWA --- */ '/microview360.github.io/app.js', '/microview360.github.io/sw.js', /* --- HTML --- */ '/microview360.github.io/index.html', '/microview360.github.io/404.html', '/microview360.github.io/categories/', '/microview360.github.io/tags/', '/microview360.github.io/archives/', '/microview360.github.io/about/', /* --- Favicons & compressed JS --- */ '/microview360.github.io/assets/img/favicons/android-chrome-192x192.png', '/microview360.github.io/assets/img/favicons/android-chrome-512x512.png', '/microview360.github.io/assets/img/favicons/apple-touch-icon.png', '/microview360.github.io/assets/img/favicons/favicon-16x16.png', '/microview360.github.io/assets/img/favicons/favicon-32x32.png', '/microview360.github.io/assets/img/favicons/favicon.ico', '/microview360.github.io/assets/img/favicons/mstile-150x150.png', '/microview360.github.io/assets/js/dist/categories.min.js', '/microview360.github.io/assets/js/dist/commons.min.js', '/microview360.github.io/assets/js/dist/home.min.js', '/microview360.github.io/assets/js/dist/misc.min.js', '/microview360.github.io/assets/js/dist/page.min.js', '/microview360.github.io/assets/js/dist/post.min.js', '/microview360.github.io/assets/js/dist/pvreport.min.js' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'microview360.github.io', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
