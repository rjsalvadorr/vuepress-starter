/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e3282ebbfe08955603ce9650bc26aff7"
  },
  {
    "url": "art/art-1/index.html",
    "revision": "1b4941bcf59f6b11ad3680788decf47f"
  },
  {
    "url": "art/art-2/index.html",
    "revision": "c4073bc1f2e538b44f3307511ed1902d"
  },
  {
    "url": "art/art-3/index.html",
    "revision": "4d736e74b25bf5d73fffb6d7e2af2d89"
  },
  {
    "url": "art/index.html",
    "revision": "7f82f9130a9d995d68790cec44ea8475"
  },
  {
    "url": "assets/css/0.styles.93a3438e.css",
    "revision": "9a17633412a12a6c7c3d2c0dc1e61982"
  },
  {
    "url": "assets/js/10.d0e835a1.js",
    "revision": "84411aac6086b4b5dc0ef8d9623739f5"
  },
  {
    "url": "assets/js/11.bc1a6722.js",
    "revision": "718a7fd5cf99a62a21c7fdfe7e45519e"
  },
  {
    "url": "assets/js/12.89176478.js",
    "revision": "a027c214a882ae2b7b8e6dcdbea3e213"
  },
  {
    "url": "assets/js/13.ef384c19.js",
    "revision": "9c100f8eb58e9b1a23cd348b0c51e408"
  },
  {
    "url": "assets/js/2.2846ef28.js",
    "revision": "8061a372cbf5091fe2b1ec7b4ef21658"
  },
  {
    "url": "assets/js/3.985ebc54.js",
    "revision": "0c2d4e4abe93f67a1b23b726d51a78bb"
  },
  {
    "url": "assets/js/4.1286f1a2.js",
    "revision": "2f60992968c73e4c7b611927fe9957da"
  },
  {
    "url": "assets/js/5.e3d87400.js",
    "revision": "1e207ffa4dc5d2f556725bbc50630883"
  },
  {
    "url": "assets/js/6.cfa039f2.js",
    "revision": "89b1c9cbebddd9548782eff702c3f1a5"
  },
  {
    "url": "assets/js/7.6ae98b55.js",
    "revision": "59f0c694d0184e9f680da2ea07754b16"
  },
  {
    "url": "assets/js/8.0e207378.js",
    "revision": "e90e5d126cdd9d90a3c99e48e1a859fc"
  },
  {
    "url": "assets/js/9.ed1fa049.js",
    "revision": "975a245e6db68b31521bbac87d1adaa7"
  },
  {
    "url": "assets/js/app.0e71d394.js",
    "revision": "dced818b2ce4418b26c28843ec8376a9"
  },
  {
    "url": "icons/icon.png",
    "revision": "0f772dcd5dcf5218ac3b95feb34e3e93"
  },
  {
    "url": "images/thumb-art-1.jpg",
    "revision": "0b4536a4dc90b49cfdf4ae51ededc8cb"
  },
  {
    "url": "images/thumb-art-2.jpg",
    "revision": "0b4536a4dc90b49cfdf4ae51ededc8cb"
  },
  {
    "url": "images/thumb-art-3.jpg",
    "revision": "0b4536a4dc90b49cfdf4ae51ededc8cb"
  },
  {
    "url": "images/thumb-work-four.jpg",
    "revision": "0b4536a4dc90b49cfdf4ae51ededc8cb"
  },
  {
    "url": "images/thumb-work-one.jpg",
    "revision": "0b4536a4dc90b49cfdf4ae51ededc8cb"
  },
  {
    "url": "images/thumb-work-three.jpg",
    "revision": "0b4536a4dc90b49cfdf4ae51ededc8cb"
  },
  {
    "url": "images/thumb-work-two.jpg",
    "revision": "0b4536a4dc90b49cfdf4ae51ededc8cb"
  },
  {
    "url": "index.html",
    "revision": "dcb9be0c431e26f56194fb81af81d758"
  },
  {
    "url": "work/index.html",
    "revision": "0fefb7092bf4ead979fe9f17bd7e958e"
  },
  {
    "url": "work/work-four/index.html",
    "revision": "a14f51c478e0233db7db23f328970fa8"
  },
  {
    "url": "work/work-one/index.html",
    "revision": "686864e647d2ccf68c38ee1b86326499"
  },
  {
    "url": "work/work-three/index.html",
    "revision": "80b745c5bccd457b614a3c0b6aeac1d8"
  },
  {
    "url": "work/work-two/index.html",
    "revision": "8f1aa57e4be783519fea4e7ea02a5979"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
