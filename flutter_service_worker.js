'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9255316e6ea0bb6b013fa6bf0914724d",
".git/config": "01cef460a1d9c6c608b0992c7db1354b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d86c440f81cf8a9e92200865979eedca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d72852f1b93b1d6c5f7afbe953aa88f",
".git/logs/refs/heads/gh-pages": "f7c7e481fc845a4dbfa465e47711ad71",
".git/logs/refs/heads/main": "6dfbf8b40e3964e19acde43687be1f6d",
".git/logs/refs/remotes/origin/gh-pages": "1a207ddd30b33b619b3a4c3e2a0c3e6a",
".git/logs/refs/remotes/origin/main": "fd24f8f93166627ebf3aa75416219ad6",
".git/logs/refs/remotes/project/gh-pages": "efa9da1eff091647c99275c64a5c5364",
".git/objects/00/ad8e523d912bd592759b7f8b65938031f8d79e": "c27e5e7d475f61cedcd428407913fdd4",
".git/objects/03/dc6e794884948a6c0a4cfb9ae20e877780d62d": "1a25e1de31f21366bb2c64add702b170",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0f/5e46734e00313baaa9bbd4d960680ffc9ebe96": "b840a28beb56f4ea1d3517f26c7580a4",
".git/objects/1f/c4105cdcf9ab54233c88dc6ae1c8dc9fac4e68": "9842d1a383b0073515f21b9555f95674",
".git/objects/2e/6e268a0c7aa8cf7032f79db991fb05bd9d3870": "2308e47b521d0355211daf0a8fee610d",
".git/objects/36/fbf46041575e32717cb2df373ccac885f6cdc8": "a0b52606abe82db4826d2e8f644c15f3",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/48/fadfffd866635431c86b47c353c09564248337": "199f9f0dd8e3ae4fc35336d859116758",
".git/objects/49/a6ba25e19250c6243ec79773775969a16a4059": "6e4e114145057913ca009bd2fdfeee81",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/57/27b2c403969658ff41dc1996dc8383155f2a79": "e26bc326def35702b4da0b561b800ae1",
".git/objects/59/7ae1b7d1efc4f65d206c37e4f49bea88fe26af": "e367ec08b8fe28887b26e20557700538",
".git/objects/5a/d807b1c4d66e81e0661e68aba6813dab4518ba": "c46286118104395a20058301ba899d1a",
".git/objects/65/09bdce24882c4c5d70e37bb8d1039198991fa4": "9c1d8ad199a8e6073103e22b0bdc11b3",
".git/objects/65/ad7567336e352676fab2e7c2274ca6e36fea2c": "d5d2b9dc25ca32bed5bb935222e195e2",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/cb2233623a5c0f8ab78eabfff8371063657b61": "7bfba6dbb50eac8b3d15c04eef23ca29",
".git/objects/6a/f0b38b8ecf255ec003102d21f26d06729627ae": "1cb297b929aa04a2c9474540d2acd7fd",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/75/8c9011690cbea76467725e05aaf253eb837425": "289c4f414b173a5c328d6417c00a5caf",
".git/objects/77/9d70a3414e890e38e90198ecfe4ca55d00d6af": "f5f1c46fb0228b6a6869a7ccaedb1cc9",
".git/objects/78/aa9dbff7d7469ab142fd1320b0ee2ecb0eeb6e": "5afd7d325b3ac1999bc9a22b7862781a",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/666558774748c8c82b210935af8d790f5a4b93": "de16b44888d23736c7309afd18b3fba6",
".git/objects/7d/9c95da2de366918d04da4b2ccc9813a364432e": "13b1e8a9fde42d423b06bcbdb682d499",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/54a7a89b2118b6e1e4b1542d8722c09cf1dc75": "408225c88cd0d8dff9495628b4f5a67d",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/9f6892a5fe0642bb11be5af42aed9b3ba539b3": "3ac3a61822c6cf0a7973c8ec455c871b",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/f9ddea198f53eafd118b3ca9008e464b3c04ec": "a78779c236d37477cd3a8561c54113cb",
".git/objects/99/f387529a18ef9b3e684562323428765042c9c8": "8d2d1d360d2a593df8c093cdfa2604e3",
".git/objects/a6/b14e3e897b22a8350652baf66466e396e07234": "b2db3f49dc5f440377c08f625db296e6",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/37ede01e26b319d04c34a193f138bfb05775c4": "43ac345a68cb349501db2c2b54fabf7d",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/4515640562f5578b8cbb1d57e5f98637806587": "5cf496503b5462a37c9f76abfa2856e4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ceabc1e552e825ddaee3f01083ac2db0537afd": "b43dba7ea1306841c87713cdb7341f0f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c3/280055fda9e2111844003d7598f897b4e414fd": "86c91c4105591f4f6448932163240f9c",
".git/objects/c3/50d945926439f982dbcb8cc99ef92dd6a9972c": "f8eddb53296704e8c9240c437ae5f00a",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/b660f016c530a22435bbedca6f718793f890b8": "ed1b8af82980692df2a9a9883fa3fc82",
".git/objects/c9/74102653908af05495b0cdf36137645860dc46": "0673d38a8d0fb0289e0b94d09e90a878",
".git/objects/c9/cce0c81c39d039ed0bc665d92580a8c5a76efb": "a2b6bbea8b0b98176718d35495fa4caf",
".git/objects/c9/f0da0ef0ad609eabec392dae6280498a79ff7d": "59c758f91be5f0dc1590c31c465b1d57",
".git/objects/ca/918537dc98ddb36698aa657159a02ccedc098f": "76d6ca3b6da3be9e37ba03c8901ccae9",
".git/objects/ce/c5d0b70ace1bd8ed6c6188ba8114c62924e40f": "c9a462e8b2a9f86ef6b62d77607df808",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/830c6ca238b5ffc83e186b699763b94d4c5e3d": "c67e774d60b1c4522ef36ca9a4d9d631",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/252e75a993500f3ee098ac38c0fdaa4c150c46": "9a78f9b14f6fa48aa3e1a48d1ace5168",
".git/objects/de/e1fb4a39b8d0fd877bf30a89b17e66d0fc55d5": "591098184b073f13e7d4152678214b8a",
".git/objects/e7/5ea3c6d3ff08e84f37c08267657b2e52bf825b": "4ad633118812aa25a8788a74675a53c6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d721364f9ddc7da0ab9afccbdd702faf2a6647": "b07f1298bb373a9a6ab56beb93d43cfe",
".git/objects/ec/b16388ada8e473c927f64a0e01d216eefef644": "e3e824eb543c4f1c7a31f3e51122bfc8",
".git/objects/f2/ab2023be9cbfccedac386e5525d84b2cf7728d": "1ecfda3abbfcff60bfb0b1b20a03412b",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/319c10da3ef86c1b8eef7ef5189a5fc7e28ce4": "9bc7a49518c8e2ca53fd4338769cc0b1",
".git/refs/heads/gh-pages": "8c8163940255dca5584c6c20775ce7db",
".git/refs/heads/main": "1425581fe80ebf067ce6347f8e31bdd3",
".git/refs/remotes/origin/gh-pages": "8c8163940255dca5584c6c20775ce7db",
".git/refs/remotes/origin/main": "1425581fe80ebf067ce6347f8e31bdd3",
".git/refs/remotes/project/gh-pages": "b1409af4be0be79307ccd292a1b7e912",
"ads.txt": "b02604a3222b89b519a60c58dda23343",
"assets/AssetManifest.bin": "17d0cc4dc10da334f9842320f8d1faa2",
"assets/AssetManifest.bin.json": "3419363cf83031b9aeec7a4e58323202",
"assets/assets/logo_q.png": "ae64d3b33c2de4f4974fada6d1ef94a9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "b5caebe1494204b204386fedcf454446",
"assets/NOTICES": "0a7a0327864140806b091eb8bc966cd7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "421b3c12e9b36ea648994310f3e506be",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0e1fa43325d0573c75e19e552ecd517c",
"/": "0e1fa43325d0573c75e19e552ecd517c",
"logo_q.png": "ae64d3b33c2de4f4974fada6d1ef94a9",
"main.dart.js": "9717758dee7d0d1258fb314fe9d1d663",
"manifest.json": "d6e5c1fa4f37b3afe6ae2e21043ccb6c",
"version.json": "fcd81acaeca619f6d038e3c2fce477bf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
