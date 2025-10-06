'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3bfd8ebc8729ca98555eead5b1b8224a",
".git/config": "2ffaf1d54026ec7c9ba5d3039c8954e0",
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
".git/index": "e458ec542a9b14ca3e853667d9b39255",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7bd39eb6bab0a0ae57ea194395309534",
".git/logs/refs/heads/gh-pages": "f5038fa52813a40423013f49990686a9",
".git/logs/refs/remotes/origin/gh-pages": "c6f3ab4685d26e4fb18a0a70bd487dc6",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/16/dc3924e646c3af21017e071cd70aec161d10bb": "4af62ed74c36ff00795c872cbcae7c2d",
".git/objects/1d/b8a616d0963711177c80d7973d5efead953ee2": "25fbbc3bf507795e839417e8bc378eaf",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/24/984fdcc4d9ba88962cef43fde4c010b4cc2be2": "074192d11c6c337bdb75d4ad78e02512",
".git/objects/27/1862a381822c4c625ffbd74178cdea4d935eec": "9f66d4db0cf754a038a754d25a1620fb",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/00db631f3d3e29d09608fe6bdafda86d0c5f90": "8a5bb182883ef75928981eb3c3c4027d",
".git/objects/30/77f07fd44ee78af4acb3ba02c77774fdaf3c50": "c37d915705bb1c247252d6ebca622fc1",
".git/objects/3b/a71eab61c26cb35b4d06a1f9bb4926c3d23794": "2bb0bc412a5b05d922c1de5cc8bdb20d",
".git/objects/3b/f424454a052398c70a4641f83ee44a55f86b1b": "b536fdf34e65d9a6409f88ffd9b311cf",
".git/objects/46/7232af23d02d673cad14b766b8a3799a9c2b7d": "f94419feb450c414cf1b79b5585e23b8",
".git/objects/48/a550d047d77513ada6f18452da00f3278ab76b": "746dcd5042772498b3002f1191cfffba",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/c89371bae271a18f9cbb00c983ebd9f7f748e3": "1691ee970e5efe7409ed2552a8ce956c",
".git/objects/68/1a3388f5f5676867d79a1c29f1fd80d6d63277": "59b8a127f0488e2cc32c56bab3662679",
".git/objects/68/5bb609d5555dd4167528ac63676797ed7e4596": "45f2d29765ee5d1fb8da7c698d51662c",
".git/objects/6a/bfa3c25ebdfc09b644c7121509ac0a33dd5185": "1dba64dca89cf739c34eecccad164fd1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/6cc6c42017c2594c0461f086379cc55430c83a": "5ddc8239d8c576afbeeb2512ed84157c",
".git/objects/6d/f084d9e5ad4085288fe0aa129ce8083670e7cb": "78e92ef9351c9519b378f526add7ce75",
".git/objects/6e/93dd3ae4fc1de5b2862dfc4b3e0592677210ae": "fbcde65577a231c651b6d5c3748229cc",
".git/objects/71/b49b1fddbcd237b88e3d327e3954008c67f54c": "20ebc9eb14ead5a405540b3924a7042b",
".git/objects/74/4ad995acb16e300cc97b5eadce6789ba8c63be": "782be872097a4b47b6d3b624ca0cd980",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/8d/d2f8dbb6e58cab4246b52972d1209000e0d243": "c3d670ab4f792fab632962dc517923b0",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/f30d1b413a2f9d2ebdba8419d3a23f840df0af": "3946810d70134a2673303b524d1f281b",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/4aa821b16b43625ee8ceb6c482cb66641307a2": "81b6eac7fd56620eb5f158e219600b3c",
".git/objects/9c/c1396b8b074485bf6dc169fd55074788beb177": "55f968aae6175649fffc2e1ed2ee7076",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/66757b045ae122471f4eb791230d3d5e3fa612": "f3430aa56e30f31c55ed786b08d9248b",
".git/objects/a0/ae2dee9c439ca2f7b254700819bff1b689bc1f": "c518a2425b0e4582bb523b07373cb3d0",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/c1/f2d1471342cbf1eb5a8bb0ed59920fad8baefd": "727b8616843fd1659ff7df872fdc9d3d",
".git/objects/c3/1ca2c3e8148ae0ac8b58ff4d775d63ea0c5ddb": "28aa44627449001022668575fed4cd5f",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/be6b338cc44ea20438971a35437fa57d0040f9": "940df15560a57bfa6978a5bbc8f11b08",
".git/objects/c8/383e5847082b5d663bdebb6e78715e11f5b6a1": "dad9075b5adcbe4a49ff4c199485f389",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/6518b76c8bc944d11ea7a3e212c8871aad6604": "3fda02d27821178738d708e3c55a5435",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/ec253c727d64fed5a9d6f11659d3a020fca731": "0a9c041bf54667e38292abf3b1399b8c",
".git/objects/e8/f0f2dcdbfacfa040d1e57ec7623a0034720a48": "73adbf3838f9c3192d150c3f9b6bf602",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d0c6309819b284ce60822517717d6c16d8b67c": "54a16869f4c5020858ad44be48e1c71e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/1dcc6819895a93fe1d3f33684cb8dea432e7fb": "0adb7adff8ecd765d32b142d538396c4",
".git/objects/fd/06c1ef5c2e3753b9b3ede688d421627a862f56": "696c3b340e711b265985784c524cda8e",
".git/objects/fd/6614bd82de99914bb1772bfd136b037441c321": "e2d414ec9c67273b35078c8e7d35304b",
".git/objects/fd/c1adb6a9f71ab87169803aacdd3e9be4c430b1": "5b9254a22f61561cd71752968251dc12",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/e58fc3489cdb2958be55c5ba4d1fa704c31a90": "3a1334d9e18bdd08102fc86b12ef446c",
".git/refs/heads/gh-pages": "ddc79ca930fd9bcd08ca6e9b363f0c48",
".git/refs/remotes/origin/gh-pages": "ddc79ca930fd9bcd08ca6e9b363f0c48",
"assets/AssetManifest.bin": "731d15e20fc129ba304329af70bc929c",
"assets/AssetManifest.bin.json": "f372301ed628dbd8d10f953a6c8b62a0",
"assets/AssetManifest.json": "5fc6c393629acda722f2936df938e731",
"assets/assets/fonts/bold.ttf": "aa15d097ea1d5e6578559d95e3a27d1a",
"assets/assets/fonts/medium.ttf": "032a139606c692f06ef451e3e26d8eef",
"assets/assets/fonts/semi_bold.ttf": "1b51537a2adeef5998e18353784793f8",
"assets/assets/images/diazenLogo.webp": "52afa0227b8d514222eb22d283104452",
"assets/assets/images/diazen_favicon.webp": "3c4e991f205b47ce1d5f6b892ac34258",
"assets/assets/images/easy.webp": "45a5d69d66aedc8cdc575af6ea43cb74",
"assets/assets/images/fast.webp": "a2e222d14894400fe4d644d2efbbc2c2",
"assets/assets/images/free.webp": "d8197e10be67bfcfe7778a282111524b",
"assets/FontManifest.json": "f1f4f41babaed52776fdc1cc0b4105c9",
"assets/fonts/MaterialIcons-Regular.otf": "39d0ade3852dd409419ac44d08dc494b",
"assets/NOTICES": "55ba19ea5fb3e4f045fc78d9061c5831",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"courses/courses.json": "6e13a4f3ab1dc8e3023eb6c913bbf199",
"favicon.png": "97a72f0f159bb750d2f800b9c81dff2d",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "e9acd5e3a50482ee51a8710e06ffdb7c",
"icons/Icon-192.png": "bb6e5d66a05296d2433e4187e266819e",
"icons/Icon-512.png": "caaabb0df62b02ab12a93234389cd4db",
"icons/Icon-maskable-192.png": "bb6e5d66a05296d2433e4187e266819e",
"icons/Icon-maskable-512.png": "caaabb0df62b02ab12a93234389cd4db",
"index.html": "7cf4967cd63c0c077d01744b41878354",
"/": "7cf4967cd63c0c077d01744b41878354",
"main.dart.js": "b08f0804b51ea4cfea191ac0b72e9889",
"manifest.json": "9a790fd8666b664599ea288b51daf393",
"sets/sets.json": "08b53711ece754e6821269b043a8bca6",
"version.json": "d7408a2d5f6d26cd8a7ed579278af448",
"versions/currentVersion.json": "18ab49d430a3a74444593270bebd5656"};
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
