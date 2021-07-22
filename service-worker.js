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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d7ef25ce3909870d8c5254d2bf3513eb"
  },
  {
    "url": "about.html",
    "revision": "49489af9013d8062e8b9f745b13aa0fd"
  },
  {
    "url": "assets/css/0.styles.ee0fad33.css",
    "revision": "4a3e0f49c3c529d9181ff40a61a02c14"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6595224.js",
    "revision": "e37dc304be7830235c451deb0a31baca"
  },
  {
    "url": "assets/js/11.377eaa22.js",
    "revision": "c9900891374867f2b960f847a9e48f72"
  },
  {
    "url": "assets/js/12.c75064f1.js",
    "revision": "ae0a4a91df6c8195b07c89e60cfbef1f"
  },
  {
    "url": "assets/js/13.49794ea7.js",
    "revision": "98dcd3aaca2f88adf87cd02593320a27"
  },
  {
    "url": "assets/js/14.3e096ec4.js",
    "revision": "b25795048897b8d77621003e28b38621"
  },
  {
    "url": "assets/js/15.ca1eee67.js",
    "revision": "c1e8b3c76e286fad38a45028c7bef4be"
  },
  {
    "url": "assets/js/16.0f78c548.js",
    "revision": "7ee04b2ec91d7bd6db29106f76b3245b"
  },
  {
    "url": "assets/js/17.7be96240.js",
    "revision": "6967175956144a2adc4c3ef64292e391"
  },
  {
    "url": "assets/js/18.09104423.js",
    "revision": "953ea0256fe2fa1374b85b99c311d036"
  },
  {
    "url": "assets/js/19.e77bb313.js",
    "revision": "d265b785319b95e561d0f09483f0cd66"
  },
  {
    "url": "assets/js/20.5479ad30.js",
    "revision": "610eede0494ff573b1cccd0a212a849d"
  },
  {
    "url": "assets/js/21.deb35b18.js",
    "revision": "29748097afd5f364d0679dd804d9776e"
  },
  {
    "url": "assets/js/22.ed46af67.js",
    "revision": "e9cb0997ae994ef3d0e018a52ded2a61"
  },
  {
    "url": "assets/js/3.2c602196.js",
    "revision": "16a1c0f647518d0fb1ec079b4f9502b5"
  },
  {
    "url": "assets/js/4.e0b30a13.js",
    "revision": "f06750a1607b8791531936a86b0a2ff9"
  },
  {
    "url": "assets/js/5.2590636f.js",
    "revision": "c3d3e20ab68b4b2299080b98c13f003e"
  },
  {
    "url": "assets/js/6.52c8b565.js",
    "revision": "f0cc344418bd1201da9b87b4845cc0df"
  },
  {
    "url": "assets/js/7.4f3910d8.js",
    "revision": "47d6998c4473a4ec8adc5b1b6b5e8e1e"
  },
  {
    "url": "assets/js/8.487ba6a4.js",
    "revision": "e5a51e1688ec8e997c32a3055576326a"
  },
  {
    "url": "assets/js/9.1c109ff1.js",
    "revision": "88da387b74b0b7e93922d8924d4bae35"
  },
  {
    "url": "assets/js/app.05748849.js",
    "revision": "371da04e4d1a0c7c54a4e91164f16148"
  },
  {
    "url": "assets/js/vendors~docsearch.cda19412.js",
    "revision": "46195b62fb196de7b91415b1a9873cf1"
  },
  {
    "url": "demo.html",
    "revision": "b69df10742d6d316f7edd17bd0c4d537"
  },
  {
    "url": "guide/about.html",
    "revision": "4515ce2ee3b486b78ae85ab0f2147781"
  },
  {
    "url": "guide/feedback.html",
    "revision": "d288ca12cc18038e53675eff8c3f80b9"
  },
  {
    "url": "guide/index.html",
    "revision": "bfc9e4dfa43fa2543830d9c702e03dff"
  },
  {
    "url": "guide/webp.html",
    "revision": "9479f1a080a547c51b96d7949815cf3f"
  },
  {
    "url": "idc.html",
    "revision": "c434484a3b868f643765d11721f7d4c2"
  },
  {
    "url": "img/index.gif",
    "revision": "e5b195f9745ee3b93ffef49002acbae6"
  },
  {
    "url": "img/logo.png",
    "revision": "eb3005fefdce0642b3a08d98aae96ce0"
  },
  {
    "url": "img/logo3.png",
    "revision": "595e2676fb8c4f844487f6ca0c4ccf18"
  },
  {
    "url": "img/novel.png",
    "revision": "e24b473891502eccbcd0e662dea9ecda"
  },
  {
    "url": "index.html",
    "revision": "e4b5e2ef5cfc1226a16acade68f999bd"
  },
  {
    "url": "releases.html",
    "revision": "c6c9a8ecdce5e253d1d74afcd5c7eaeb"
  },
  {
    "url": "sponsors.html",
    "revision": "e2f4c7ab54c0f9fdcf843d2383020e5b"
  }
].concat(self.__precacheManifest || []);
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
