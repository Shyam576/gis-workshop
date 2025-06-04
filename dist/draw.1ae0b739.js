// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5lfr7":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7a6df0ec1ae0b739";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"hLwk3":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/SimpleGeometry
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {number} stride Stride.
 * @return {import("./Geometry.js").GeometryLayout} layout Layout.
 */ parcelHelpers.export(exports, "getLayoutForStride", ()=>getLayoutForStride);
/**
 * @param {import("./Geometry.js").GeometryLayout} layout Layout.
 * @return {number} Stride.
 */ parcelHelpers.export(exports, "getStrideForLayout", ()=>getStrideForLayout);
/**
 * @param {SimpleGeometry} simpleGeometry Simple geometry.
 * @param {import("../transform.js").Transform} transform Transform.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed flat coordinates.
 */ parcelHelpers.export(exports, "transformGeom2D", ()=>transformGeom2D);
var _geometryJs = require("./Geometry.js");
var _geometryJsDefault = parcelHelpers.interopDefault(_geometryJs);
var _utilJs = require("../util.js");
var _extentJs = require("../extent.js");
var _transformJs = require("./flat/transform.js");
/**
 * @classdesc
 * Abstract base class; only used for creating subclasses; do not instantiate
 * in apps, as cannot be rendered.
 *
 * @abstract
 * @api
 */ class SimpleGeometry extends (0, _geometryJsDefault.default) {
    constructor(){
        super();
        /**
     * @protected
     * @type {import("./Geometry.js").GeometryLayout}
     */ this.layout = 'XY';
        /**
     * @protected
     * @type {number}
     */ this.stride = 2;
        /**
     * @protected
     * @type {Array<number>}
     */ this.flatCoordinates;
    }
    /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */ computeExtent(extent) {
        return (0, _extentJs.createOrUpdateFromFlatCoordinates)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, extent);
    }
    /**
   * @abstract
   * @return {Array<*> | null} Coordinates.
   */ getCoordinates() {
        return (0, _utilJs.abstract)();
    }
    /**
   * Return the first coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} First coordinate.
   * @api
   */ getFirstCoordinate() {
        return this.flatCoordinates.slice(0, this.stride);
    }
    /**
   * @return {Array<number>} Flat coordinates.
   */ getFlatCoordinates() {
        return this.flatCoordinates;
    }
    /**
   * Return the last coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} Last point.
   * @api
   */ getLastCoordinate() {
        return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride);
    }
    /**
   * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
   * @return {import("./Geometry.js").GeometryLayout} Layout.
   * @api
   */ getLayout() {
        return this.layout;
    }
    /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   */ getSimplifiedGeometry(squaredTolerance) {
        if (this.simplifiedGeometryRevision !== this.getRevision()) {
            this.simplifiedGeometryMaxMinSquaredTolerance = 0;
            this.simplifiedGeometryRevision = this.getRevision();
        }
        // If squaredTolerance is negative or if we know that simplification will not
        // have any effect then just return this.
        if (squaredTolerance < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && squaredTolerance <= this.simplifiedGeometryMaxMinSquaredTolerance) return this;
        const simplifiedGeometry = this.getSimplifiedGeometryInternal(squaredTolerance);
        const simplifiedFlatCoordinates = simplifiedGeometry.getFlatCoordinates();
        if (simplifiedFlatCoordinates.length < this.flatCoordinates.length) return simplifiedGeometry;
        // Simplification did not actually remove any coordinates.  We now know
        // that any calls to getSimplifiedGeometry with a squaredTolerance less
        // than or equal to the current squaredTolerance will also not have any
        // effect.  This allows us to short circuit simplification (saving CPU
        // cycles) and prevents the cache of simplified geometries from filling
        // up with useless identical copies of this geometry (saving memory).
        this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
        return this;
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        return this;
    }
    /**
   * @return {number} Stride.
   */ getStride() {
        return this.stride;
    }
    /**
   * @param {import("./Geometry.js").GeometryLayout} layout Layout.
   * @param {Array<number>} flatCoordinates Flat coordinates.
   */ setFlatCoordinates(layout, flatCoordinates) {
        this.stride = getStrideForLayout(layout);
        this.layout = layout;
        this.flatCoordinates = flatCoordinates;
    }
    /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */ setCoordinates(coordinates, layout) {
        (0, _utilJs.abstract)();
    }
    /**
   * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
   * @param {Array<*>} coordinates Coordinates.
   * @param {number} nesting Nesting.
   * @protected
   */ setLayout(layout, coordinates, nesting) {
        let stride;
        if (layout) stride = getStrideForLayout(layout);
        else {
            for(let i = 0; i < nesting; ++i){
                if (coordinates.length === 0) {
                    this.layout = 'XY';
                    this.stride = 2;
                    return;
                }
                coordinates = /** @type {Array<unknown>} */ coordinates[0];
            }
            stride = coordinates.length;
            layout = getLayoutForStride(stride);
        }
        this.layout = layout;
        this.stride = stride;
    }
    /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   */ applyTransform(transformFn) {
        if (this.flatCoordinates) {
            transformFn(this.flatCoordinates, this.flatCoordinates, this.stride);
            this.changed();
        }
    }
    /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in counter-clockwise radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */ rotate(angle, anchor) {
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            const stride = this.getStride();
            (0, _transformJs.rotate)(flatCoordinates, 0, flatCoordinates.length, stride, angle, anchor, flatCoordinates);
            this.changed();
        }
    }
    /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */ scale(sx, sy, anchor) {
        if (sy === undefined) sy = sx;
        if (!anchor) anchor = (0, _extentJs.getCenter)(this.getExtent());
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            const stride = this.getStride();
            (0, _transformJs.scale)(flatCoordinates, 0, flatCoordinates.length, stride, sx, sy, anchor, flatCoordinates);
            this.changed();
        }
    }
    /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */ translate(deltaX, deltaY) {
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            const stride = this.getStride();
            (0, _transformJs.translate)(flatCoordinates, 0, flatCoordinates.length, stride, deltaX, deltaY, flatCoordinates);
            this.changed();
        }
    }
}
function getLayoutForStride(stride) {
    let layout;
    if (stride == 2) layout = 'XY';
    else if (stride == 3) layout = 'XYZ';
    else if (stride == 4) layout = 'XYZM';
    return /** @type {import("./Geometry.js").GeometryLayout} */ layout;
}
function getStrideForLayout(layout) {
    let stride;
    if (layout == 'XY') stride = 2;
    else if (layout == 'XYZ' || layout == 'XYM') stride = 3;
    else if (layout == 'XYZM') stride = 4;
    return /** @type {number} */ stride;
}
function transformGeom2D(simpleGeometry, transform, dest) {
    const flatCoordinates = simpleGeometry.getFlatCoordinates();
    if (!flatCoordinates) return null;
    const stride = simpleGeometry.getStride();
    return (0, _transformJs.transform2D)(flatCoordinates, 0, flatCoordinates.length, stride, transform, dest);
}
exports.default = SimpleGeometry;

},{"./Geometry.js":"4ya62","../util.js":"pLBjQ","../extent.js":"6YrVc","./flat/transform.js":"cDA2L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ya62":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/Geometry
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectJs = require("../Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _utilJs = require("../util.js");
var _transformJs = require("../transform.js");
var _extentJs = require("../extent.js");
var _projJs = require("../proj.js");
var _functionsJs = require("../functions.js");
var _transformJs1 = require("./flat/transform.js");
/**
 * @typedef {'XY' | 'XYZ' | 'XYM' | 'XYZM'} GeometryLayout
 * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
 * or measure ('M') coordinate is available.
 */ /**
 * @typedef {'Point' | 'LineString' | 'LinearRing' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon' | 'GeometryCollection' | 'Circle'} Type
 * The geometry type.  One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, or `'Circle'`.
 */ /**
 * @type {import("../transform.js").Transform}
 */ const tmpTransform = (0, _transformJs.create)();
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for vector geometries.
 *
 * To get notified of changes to the geometry, register a listener for the
 * generic `change` event on your geometry instance.
 *
 * @abstract
 * @api
 */ class Geometry extends (0, _objectJsDefault.default) {
    constructor(){
        super();
        /**
     * @private
     * @type {import("../extent.js").Extent}
     */ this.extent_ = (0, _extentJs.createEmpty)();
        /**
     * @private
     * @type {number}
     */ this.extentRevision_ = -1;
        /**
     * @protected
     * @type {number}
     */ this.simplifiedGeometryMaxMinSquaredTolerance = 0;
        /**
     * @protected
     * @type {number}
     */ this.simplifiedGeometryRevision = 0;
        /**
     * Get a transformed and simplified version of the geometry.
     * @abstract
     * @param {number} revision The geometry revision.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
     * @return {Geometry} Simplified geometry.
     */ this.simplifyTransformedInternal = (0, _functionsJs.memoizeOne)((revision, squaredTolerance, transform)=>{
            if (!transform) return this.getSimplifiedGeometry(squaredTolerance);
            const clone = this.clone();
            clone.applyTransform(transform);
            return clone.getSimplifiedGeometry(squaredTolerance);
        });
    }
    /**
   * Get a transformed and simplified version of the geometry.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {Geometry} Simplified geometry.
   */ simplifyTransformed(squaredTolerance, transform) {
        return this.simplifyTransformedInternal(this.getRevision(), squaredTolerance, transform);
    }
    /**
   * Make a complete copy of the geometry.
   * @abstract
   * @return {!Geometry} Clone.
   */ clone() {
        return (0, _utilJs.abstract)();
    }
    /**
   * @abstract
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        return (0, _utilJs.abstract)();
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */ containsXY(x, y) {
        const coord = this.getClosestPoint([
            x,
            y
        ]);
        return coord[0] === x && coord[1] === y;
    }
    /**
   * Return the closest point of the geometry to the passed point as
   * {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} point Point.
   * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
   * @return {import("../coordinate.js").Coordinate} Closest point.
   * @api
   */ getClosestPoint(point, closestPoint) {
        closestPoint = closestPoint ? closestPoint : [
            NaN,
            NaN
        ];
        this.closestPointXY(point[0], point[1], closestPoint, Infinity);
        return closestPoint;
    }
    /**
   * Returns true if this geometry includes the specified coordinate. If the
   * coordinate is on the boundary of the geometry, returns false.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {boolean} Contains coordinate.
   * @api
   */ intersectsCoordinate(coordinate) {
        return this.containsXY(coordinate[0], coordinate[1]);
    }
    /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */ computeExtent(extent) {
        return (0, _utilJs.abstract)();
    }
    /**
   * Get the extent of the geometry.
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} extent Extent.
   * @api
   */ getExtent(extent) {
        if (this.extentRevision_ != this.getRevision()) {
            const extent = this.computeExtent(this.extent_);
            if (isNaN(extent[0]) || isNaN(extent[1])) (0, _extentJs.createOrUpdateEmpty)(extent);
            this.extentRevision_ = this.getRevision();
        }
        return (0, _extentJs.returnOrUpdate)(this.extent_, extent);
    }
    /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */ rotate(angle, anchor) {
        (0, _utilJs.abstract)();
    }
    /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */ scale(sx, sy, anchor) {
        (0, _utilJs.abstract)();
    }
    /**
   * Create a simplified version of this geometry.  For linestrings, this uses
   * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
   * algorithm.  For polygons, a quantization-based
   * simplification is used to preserve topology.
   * @param {number} tolerance The tolerance distance for simplification.
   * @return {Geometry} A new, simplified version of the original geometry.
   * @api
   */ simplify(tolerance) {
        return this.getSimplifiedGeometry(tolerance * tolerance);
    }
    /**
   * Create a simplified version of this geometry using the Douglas Peucker
   * algorithm.
   * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Geometry} Simplified geometry.
   */ getSimplifiedGeometry(squaredTolerance) {
        return (0, _utilJs.abstract)();
    }
    /**
   * Get the type of this geometry.
   * @abstract
   * @return {Type} Geometry type.
   */ getType() {
        return (0, _utilJs.abstract)();
    }
    /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @abstract
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   */ applyTransform(transformFn) {
        (0, _utilJs.abstract)();
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */ intersectsExtent(extent) {
        return (0, _utilJs.abstract)();
    }
    /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @abstract
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */ translate(deltaX, deltaY) {
        (0, _utilJs.abstract)();
    }
    /**
   * Transform each coordinate of the geometry from one coordinate reference
   * system to another. The geometry is modified in place.
   * For example, a line will be transformed to a line and a circle to a circle.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   *
   * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @return {Geometry} This geometry.  Note that original geometry is
   *     modified in place.
   * @api
   */ transform(source, destination) {
        /** @type {import("../proj/Projection.js").default} */ const sourceProj = (0, _projJs.get)(source);
        const transformFn = sourceProj.getUnits() == 'tile-pixels' ? function(inCoordinates, outCoordinates, stride) {
            const pixelExtent = sourceProj.getExtent();
            const projectedExtent = sourceProj.getWorldExtent();
            const scale = (0, _extentJs.getHeight)(projectedExtent) / (0, _extentJs.getHeight)(pixelExtent);
            (0, _transformJs.compose)(tmpTransform, projectedExtent[0], projectedExtent[3], scale, -scale, 0, 0, 0);
            (0, _transformJs1.transform2D)(inCoordinates, 0, inCoordinates.length, stride, tmpTransform, outCoordinates);
            return (0, _projJs.getTransform)(sourceProj, destination)(inCoordinates, outCoordinates, stride);
        } : (0, _projJs.getTransform)(sourceProj, destination);
        this.applyTransform(transformFn);
        return this;
    }
}
exports.default = Geometry;

},{"../Object.js":"1zG8z","../util.js":"pLBjQ","../transform.js":"1BqUf","../extent.js":"6YrVc","../proj.js":"SznqC","../functions.js":"iqv8I","./flat/transform.js":"cDA2L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zG8z":[function(require,module,exports,__globalThis) {
/**
 * @module ol/Object
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @classdesc
 * Events emitted by {@link module:ol/Object~BaseObject} instances are instances of this type.
 */ parcelHelpers.export(exports, "ObjectEvent", ()=>ObjectEvent);
var _eventJs = require("./events/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _objectEventTypeJs = require("./ObjectEventType.js");
var _objectEventTypeJsDefault = parcelHelpers.interopDefault(_objectEventTypeJs);
var _observableJs = require("./Observable.js");
var _observableJsDefault = parcelHelpers.interopDefault(_observableJs);
var _utilJs = require("./util.js");
var _objJs = require("./obj.js");
class ObjectEvent extends (0, _eventJsDefault.default) {
    /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */ constructor(type, key, oldValue){
        super(type);
        /**
     * The name of the property whose value is changing.
     * @type {string}
     * @api
     */ this.key = key;
        /**
     * The old value. To get the new value use `e.target.get(e.key)` where
     * `e` is the event object.
     * @type {*}
     * @api
     */ this.oldValue = oldValue;
    }
}
/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *    import("./Observable").OnSignature<import("./ObjectEventType").Types, ObjectEvent, Return> &
 *    import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types, Return>} ObjectOnSignature
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link module:ol/Observable~Observable} with observable
 * properties, where each property is observable as well as the object as a
 * whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link module:ol/Map~Map} has a `target` property, accessed with
 * `getTarget()` and changed with `setTarget()`. Not all properties are however
 * settable. There are also general-purpose accessors `get()` and `set()`. For
 * example, `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link module:ol/View~View} has a
 * `center` property, so `view.on('change:center', function(evt) {...});` would
 * call the function whenever the value of the center property changes. Within
 * the function, `evt.target` would be the view, so `evt.target.getCenter()`
 * would return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link module:ol/Object~BaseObject#getProperties}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @fires ObjectEvent
 * @api
 */ class BaseObject extends (0, _observableJsDefault.default) {
    /**
   * @param {Object<string, *>} [values] An object with key-value pairs.
   */ constructor(values){
        super();
        /***
     * @type {ObjectOnSignature<import("./events").EventsKey>}
     */ this.on;
        /***
     * @type {ObjectOnSignature<import("./events").EventsKey>}
     */ this.once;
        /***
     * @type {ObjectOnSignature<void>}
     */ this.un;
        // Call {@link module:ol/util.getUid} to ensure that the order of objects' ids is
        // the same as the order in which they were created.  This also helps to
        // ensure that object properties are always added in the same order, which
        // helps many JavaScript engines generate faster code.
        (0, _utilJs.getUid)(this);
        /**
     * @private
     * @type {Object<string, *>|null}
     */ this.values_ = null;
        if (values !== undefined) this.setProperties(values);
    }
    /**
   * Gets a value.
   * @param {string} key Key name.
   * @return {*} Value.
   * @api
   */ get(key) {
        let value;
        if (this.values_ && this.values_.hasOwnProperty(key)) value = this.values_[key];
        return value;
    }
    /**
   * Get a list of object property names.
   * @return {Array<string>} List of property names.
   * @api
   */ getKeys() {
        return this.values_ && Object.keys(this.values_) || [];
    }
    /**
   * Get an object of all property names and values.
   * @return {Object<string, *>} Object.
   * @api
   */ getProperties() {
        return this.values_ && Object.assign({}, this.values_) || {};
    }
    /**
   * Get an object of all property names and values.
   * @return {Object<string, *>?} Object.
   */ getPropertiesInternal() {
        return this.values_;
    }
    /**
   * @return {boolean} The object has properties.
   */ hasProperties() {
        return !!this.values_;
    }
    /**
   * @param {string} key Key name.
   * @param {*} oldValue Old value.
   */ notify(key, oldValue) {
        let eventType;
        eventType = `change:${key}`;
        if (this.hasListener(eventType)) this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
        eventType = (0, _objectEventTypeJsDefault.default).PROPERTYCHANGE;
        if (this.hasListener(eventType)) this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
    }
    /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */ addChangeListener(key, listener) {
        this.addEventListener(`change:${key}`, listener);
    }
    /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */ removeChangeListener(key, listener) {
        this.removeEventListener(`change:${key}`, listener);
    }
    /**
   * Sets a value.
   * @param {string} key Key name.
   * @param {*} value Value.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */ set(key, value, silent) {
        const values = this.values_ || (this.values_ = {});
        if (silent) values[key] = value;
        else {
            const oldValue = values[key];
            values[key] = value;
            if (oldValue !== value) this.notify(key, oldValue);
        }
    }
    /**
   * Sets a collection of key-value pairs.  Note that this changes any existing
   * properties and adds new ones (it does not remove any existing properties).
   * @param {Object<string, *>} values Values.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */ setProperties(values, silent) {
        for(const key in values)this.set(key, values[key], silent);
    }
    /**
   * Apply any properties from another object without triggering events.
   * @param {BaseObject} source The source object.
   * @protected
   */ applyProperties(source) {
        if (!source.values_) return;
        Object.assign(this.values_ || (this.values_ = {}), source.values_);
    }
    /**
   * Unsets a property.
   * @param {string} key Key name.
   * @param {boolean} [silent] Unset without triggering an event.
   * @api
   */ unset(key, silent) {
        if (this.values_ && key in this.values_) {
            const oldValue = this.values_[key];
            delete this.values_[key];
            if ((0, _objJs.isEmpty)(this.values_)) this.values_ = null;
            if (!silent) this.notify(key, oldValue);
        }
    }
}
exports.default = BaseObject;

},{"./events/Event.js":"hwXQP","./ObjectEventType.js":"f2U6i","./Observable.js":"cQ2uI","./util.js":"pLBjQ","./obj.js":"3ssAG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwXQP":[function(require,module,exports,__globalThis) {
/**
 * @module ol/events/Event
 */ /**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * See https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface.
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link module:ol/events/Target~Target}.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Event|import("./Event.js").default} evt Event
 */ parcelHelpers.export(exports, "stopPropagation", ()=>stopPropagation);
/**
 * @param {Event|import("./Event.js").default} evt Event
 */ parcelHelpers.export(exports, "preventDefault", ()=>preventDefault);
class BaseEvent {
    /**
   * @param {string} type Type.
   */ constructor(type){
        /**
     * @type {boolean}
     */ this.propagationStopped;
        /**
     * @type {boolean}
     */ this.defaultPrevented;
        /**
     * The event type.
     * @type {string}
     * @api
     */ this.type = type;
        /**
     * The event target.
     * @type {Object}
     * @api
     */ this.target = null;
    }
    /**
   * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
   * will be fired.
   * @api
   */ preventDefault() {
        this.defaultPrevented = true;
    }
    /**
   * Stop event propagation.
   * @api
   */ stopPropagation() {
        this.propagationStopped = true;
    }
}
function stopPropagation(evt) {
    evt.stopPropagation();
}
function preventDefault(evt) {
    evt.preventDefault();
}
exports.default = BaseEvent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f2U6i":[function(require,module,exports,__globalThis) {
/**
 * @module ol/ObjectEventType
 */ /**
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */ PROPERTYCHANGE: 'propertychange'
}; /**
 * @typedef {'propertychange'} Types
 */ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQ2uI":[function(require,module,exports,__globalThis) {
/**
 * @module ol/Observable
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Removes an event listener using the key returned by `on()` or `once()`.
 * @param {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} key The key returned by `on()`
 *     or `once()` (or an array of keys).
 * @api
 */ parcelHelpers.export(exports, "unByKey", ()=>unByKey);
var _targetJs = require("./events/Target.js");
var _targetJsDefault = parcelHelpers.interopDefault(_targetJs);
var _eventTypeJs = require("./events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _eventsJs = require("./events.js");
/***
 * @template {string} Type
 * @template {Event|import("./events/Event.js").default} EventClass
 * @template Return
 * @typedef {(type: Type, listener: (event: EventClass) => ?) => Return} OnSignature
 */ /***
 * @template {string} Type
 * @template Return
 * @typedef {(type: Type[], listener: (event: Event|import("./events/Event").default) => ?) => Return extends void ? void : Return[]} CombinedOnSignature
 */ /**
 * @typedef {'change'|'error'} EventTypes
 */ /***
 * @template Return
 * @typedef {OnSignature<EventTypes, import("./events/Event.js").default, Return> & CombinedOnSignature<EventTypes, Return>} ObservableOnSignature
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link module:ol/Observable~Observable#changed}.
 *
 * @fires import("./events/Event.js").default
 * @api
 */ class Observable extends (0, _targetJsDefault.default) {
    constructor(){
        super();
        this.on = /** @type {ObservableOnSignature<import("./events").EventsKey>} */ this.onInternal;
        this.once = /** @type {ObservableOnSignature<import("./events").EventsKey>} */ this.onceInternal;
        this.un = /** @type {ObservableOnSignature<void>} */ this.unInternal;
        /**
     * @private
     * @type {number}
     */ this.revision_ = 0;
    }
    /**
   * Increases the revision counter and dispatches a 'change' event.
   * @api
   */ changed() {
        ++this.revision_;
        this.dispatchEvent((0, _eventTypeJsDefault.default).CHANGE);
    }
    /**
   * Get the version number for this object.  Each time the object is modified,
   * its version number will be incremented.
   * @return {number} Revision.
   * @api
   */ getRevision() {
        return this.revision_;
    }
    /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */ onInternal(type, listener) {
        if (Array.isArray(type)) {
            const len = type.length;
            const keys = new Array(len);
            for(let i = 0; i < len; ++i)keys[i] = (0, _eventsJs.listen)(this, type[i], listener);
            return keys;
        }
        return (0, _eventsJs.listen)(this, /** @type {string} */ type, listener);
    }
    /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */ onceInternal(type, listener) {
        let key;
        if (Array.isArray(type)) {
            const len = type.length;
            key = new Array(len);
            for(let i = 0; i < len; ++i)key[i] = (0, _eventsJs.listenOnce)(this, type[i], listener);
        } else key = (0, _eventsJs.listenOnce)(this, /** @type {string} */ type, listener);
        /** @type {Object} */ listener.ol_key = key;
        return key;
    }
    /**
   * Unlisten for a certain type of event.
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @protected
   */ unInternal(type, listener) {
        const key = /** @type {Object} */ listener.ol_key;
        if (key) unByKey(key);
        else if (Array.isArray(type)) for(let i = 0, ii = type.length; i < ii; ++i)this.removeEventListener(type[i], listener);
        else this.removeEventListener(type, listener);
    }
}
/**
 * Listen for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */ Observable.prototype.on;
/**
 * Listen once for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */ Observable.prototype.once;
/**
 * Unlisten for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @api
 */ Observable.prototype.un;
function unByKey(key) {
    if (Array.isArray(key)) for(let i = 0, ii = key.length; i < ii; ++i)(0, _eventsJs.unlistenByKey)(key[i]);
    else (0, _eventsJs.unlistenByKey)(/** @type {import("./events.js").EventsKey} */ key);
}
exports.default = Observable;

},{"./events/Target.js":"7T5Yi","./events/EventType.js":"hrQJ6","./events.js":"dcspA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7T5Yi":[function(require,module,exports,__globalThis) {
/**
 * @module ol/events/Target
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _disposableJs = require("../Disposable.js");
var _disposableJsDefault = parcelHelpers.interopDefault(_disposableJs);
var _eventJs = require("./Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _functionsJs = require("../functions.js");
var _objJs = require("../obj.js");
/**
 * @typedef {EventTarget|Target} EventTargetLike
 */ /**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * See https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget.
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 */ class Target extends (0, _disposableJsDefault.default) {
    /**
   * @param {*} [target] Default event target for dispatched events.
   */ constructor(target){
        super();
        /**
     * @private
     * @type {*}
     */ this.eventTarget_ = target;
        /**
     * @private
     * @type {Object<string, number>|null}
     */ this.pendingRemovals_ = null;
        /**
     * @private
     * @type {Object<string, number>|null}
     */ this.dispatching_ = null;
        /**
     * @private
     * @type {Object<string, Array<import("../events.js").Listener>>|null}
     */ this.listeners_ = null;
    }
    /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */ addEventListener(type, listener) {
        if (!type || !listener) return;
        const listeners = this.listeners_ || (this.listeners_ = {});
        const listenersForType = listeners[type] || (listeners[type] = []);
        if (!listenersForType.includes(listener)) listenersForType.push(listener);
    }
    /**
   * Dispatches an event and calls all listeners listening for events
   * of this type. The event parameter can either be a string or an
   * Object with a `type` property.
   *
   * @param {import("./Event.js").default|string} event Event object.
   * @return {boolean|undefined} `false` if anyone called preventDefault on the
   *     event object or if any of the listeners returned false.
   * @api
   */ dispatchEvent(event) {
        const isString = typeof event === 'string';
        const type = isString ? event : event.type;
        const listeners = this.listeners_ && this.listeners_[type];
        if (!listeners) return;
        const evt = isString ? new (0, _eventJsDefault.default)(event) : /** @type {Event} */ event;
        if (!evt.target) evt.target = this.eventTarget_ || this;
        const dispatching = this.dispatching_ || (this.dispatching_ = {});
        const pendingRemovals = this.pendingRemovals_ || (this.pendingRemovals_ = {});
        if (!(type in dispatching)) {
            dispatching[type] = 0;
            pendingRemovals[type] = 0;
        }
        ++dispatching[type];
        let propagate;
        for(let i = 0, ii = listeners.length; i < ii; ++i){
            if ('handleEvent' in listeners[i]) propagate = /** @type {import("../events.js").ListenerObject} */ listeners[i].handleEvent(evt);
            else propagate = /** @type {import("../events.js").ListenerFunction} */ listeners[i].call(this, evt);
            if (propagate === false || evt.propagationStopped) {
                propagate = false;
                break;
            }
        }
        if (--dispatching[type] === 0) {
            let pr = pendingRemovals[type];
            delete pendingRemovals[type];
            while(pr--)this.removeEventListener(type, (0, _functionsJs.VOID));
            delete dispatching[type];
        }
        return propagate;
    }
    /**
   * Clean up.
   */ disposeInternal() {
        this.listeners_ && (0, _objJs.clear)(this.listeners_);
    }
    /**
   * Get the listeners for a specified event type. Listeners are returned in the
   * order that they will be called in.
   *
   * @param {string} type Type.
   * @return {Array<import("../events.js").Listener>|undefined} Listeners.
   */ getListeners(type) {
        return this.listeners_ && this.listeners_[type] || undefined;
    }
    /**
   * @param {string} [type] Type. If not provided,
   *     `true` will be returned if this event target has any listeners.
   * @return {boolean} Has listeners.
   */ hasListener(type) {
        if (!this.listeners_) return false;
        return type ? type in this.listeners_ : Object.keys(this.listeners_).length > 0;
    }
    /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */ removeEventListener(type, listener) {
        if (!this.listeners_) return;
        const listeners = this.listeners_[type];
        if (!listeners) return;
        const index = listeners.indexOf(listener);
        if (index !== -1) {
            if (this.pendingRemovals_ && type in this.pendingRemovals_) {
                // make listener a no-op, and remove later in #dispatchEvent()
                listeners[index] = (0, _functionsJs.VOID);
                ++this.pendingRemovals_[type];
            } else {
                listeners.splice(index, 1);
                if (listeners.length === 0) delete this.listeners_[type];
            }
        }
    }
}
exports.default = Target;

},{"../Disposable.js":"c0oTM","./Event.js":"hwXQP","../functions.js":"iqv8I","../obj.js":"3ssAG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0oTM":[function(require,module,exports,__globalThis) {
/**
 * @module ol/Disposable
 */ /**
 * @classdesc
 * Objects that need to clean up after themselves.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Disposable {
    constructor(){
        /**
     * The object has already been disposed.
     * @type {boolean}
     * @protected
     */ this.disposed = false;
    }
    /**
   * Clean up.
   */ dispose() {
        if (!this.disposed) {
            this.disposed = true;
            this.disposeInternal();
        }
    }
    /**
   * Extension point for disposable objects.
   * @protected
   */ disposeInternal() {}
}
exports.default = Disposable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iqv8I":[function(require,module,exports,__globalThis) {
/**
 * @module ol/functions
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Always returns true.
 * @return {boolean} true.
 */ parcelHelpers.export(exports, "TRUE", ()=>TRUE);
/**
 * Always returns false.
 * @return {boolean} false.
 */ parcelHelpers.export(exports, "FALSE", ()=>FALSE);
/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {void} Nothing.
 */ parcelHelpers.export(exports, "VOID", ()=>VOID);
/**
 * Wrap a function in another function that remembers the last return.  If the
 * returned function is called twice in a row with the same arguments and the same
 * this object, it will return the value from the first call in the second call.
 *
 * @param {function(...any): ReturnType} fn The function to memoize.
 * @return {function(...any): ReturnType} The memoized function.
 * @template ReturnType
 */ parcelHelpers.export(exports, "memoizeOne", ()=>memoizeOne);
/**
 * @template T
 * @param {function(): (T | Promise<T>)} getter A function that returns a value or a promise for a value.
 * @return {Promise<T>} A promise for the value.
 */ parcelHelpers.export(exports, "toPromise", ()=>toPromise);
var _arrayJs = require("./array.js");
function TRUE() {
    return true;
}
function FALSE() {
    return false;
}
function VOID() {}
function memoizeOne(fn) {
    let called = false;
    /** @type {ReturnType} */ let lastResult;
    /** @type {Array<any>} */ let lastArgs;
    let lastThis;
    return function() {
        const nextArgs = Array.prototype.slice.call(arguments);
        if (!called || this !== lastThis || !(0, _arrayJs.equals)(nextArgs, lastArgs)) {
            called = true;
            lastThis = this;
            lastArgs = nextArgs;
            lastResult = fn.apply(this, arguments);
        }
        return lastResult;
    };
}
function toPromise(getter) {
    function promiseGetter() {
        let value;
        try {
            value = getter();
        } catch (err) {
            return Promise.reject(err);
        }
        if (value instanceof Promise) return value;
        return Promise.resolve(value);
    }
    return promiseGetter();
}

},{"./array.js":"1Fbic","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Fbic":[function(require,module,exports,__globalThis) {
/**
 * @module ol/array
 */ /**
 * Performs a binary search on the provided sorted list and returns the index of the item if found. If it can't be found it'll return -1.
 * https://github.com/darkskyapp/binary-search
 *
 * @param {Array<*>} haystack Items to search through.
 * @param {*} needle The item to look for.
 * @param {Function} [comparator] Comparator function.
 * @return {number} The index of the item if found, -1 if not.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "binarySearch", ()=>binarySearch);
/**
 * Compare function sorting arrays in ascending order.  Safe to use for numeric values.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 */ parcelHelpers.export(exports, "ascending", ()=>ascending);
/**
 * Compare function sorting arrays in descending order.  Safe to use for numeric values.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is greater than, equal to, or less than the second.
 */ parcelHelpers.export(exports, "descending", ()=>descending);
/**
 * {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution} can use a function
 * of this type to determine which nearest resolution to use.
 *
 * This function takes a `{number}` representing a value between two array entries,
 * a `{number}` representing the value of the nearest higher entry and
 * a `{number}` representing the value of the nearest lower entry
 * as arguments and returns a `{number}`. If a negative number or zero is returned
 * the lower value will be used, if a positive number is returned the higher value
 * will be used.
 * @typedef {function(number, number, number): number} NearestDirectionFunction
 * @api
 */ /**
 * @param {Array<number>} arr Array in descending order.
 * @param {number} target Target.
 * @param {number|NearestDirectionFunction} direction
 *    0 means return the nearest,
 *    > 0 means return the largest nearest,
 *    < 0 means return the smallest nearest.
 * @return {number} Index.
 */ parcelHelpers.export(exports, "linearFindNearest", ()=>linearFindNearest);
/**
 * @param {Array<*>} arr Array.
 * @param {number} begin Begin index.
 * @param {number} end End index.
 */ parcelHelpers.export(exports, "reverseSubArray", ()=>reverseSubArray);
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {!Array<VALUE>|VALUE} data The elements or arrays of elements to add to arr.
 * @template VALUE
 */ parcelHelpers.export(exports, "extend", ()=>extend);
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {VALUE} obj The element to remove.
 * @template VALUE
 * @return {boolean} If the element was removed.
 */ parcelHelpers.export(exports, "remove", ()=>remove);
/**
 * @param {Array<any>|Uint8ClampedArray} arr1 The first array to compare.
 * @param {Array<any>|Uint8ClampedArray} arr2 The second array to compare.
 * @return {boolean} Whether the two arrays are equal.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
/**
 * Sort the passed array such that the relative order of equal elements is preserved.
 * See https://en.wikipedia.org/wiki/Sorting_algorithm#Stability for details.
 * @param {Array<*>} arr The array to sort (modifies original).
 * @param {!function(*, *): number} compareFnc Comparison function.
 * @api
 */ parcelHelpers.export(exports, "stableSort", ()=>stableSort);
/**
 * @param {Array<*>} arr The array to test.
 * @param {Function} [func] Comparison function.
 * @param {boolean} [strict] Strictly sorted (default false).
 * @return {boolean} Return index.
 */ parcelHelpers.export(exports, "isSorted", ()=>isSorted);
function binarySearch(haystack, needle, comparator) {
    let mid, cmp;
    comparator = comparator || ascending;
    let low = 0;
    let high = haystack.length;
    let found = false;
    while(low < high){
        /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */ mid = low + (high - low >> 1);
        cmp = +comparator(haystack[mid], needle);
        if (cmp < 0.0) /* Too low. */ low = mid + 1;
        else {
            /* Key found or too high */ high = mid;
            found = !cmp;
        }
    }
    /* Key not found. */ return found ? low : ~low;
}
function ascending(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}
function descending(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
}
function linearFindNearest(arr, target, direction) {
    if (arr[0] <= target) return 0;
    const n = arr.length;
    if (target <= arr[n - 1]) return n - 1;
    if (typeof direction === 'function') {
        for(let i = 1; i < n; ++i){
            const candidate = arr[i];
            if (candidate === target) return i;
            if (candidate < target) {
                if (direction(target, arr[i - 1], candidate) > 0) return i - 1;
                return i;
            }
        }
        return n - 1;
    }
    if (direction > 0) {
        for(let i = 1; i < n; ++i){
            if (arr[i] < target) return i - 1;
        }
        return n - 1;
    }
    if (direction < 0) {
        for(let i = 1; i < n; ++i){
            if (arr[i] <= target) return i;
        }
        return n - 1;
    }
    for(let i = 1; i < n; ++i){
        if (arr[i] == target) return i;
        if (arr[i] < target) {
            if (arr[i - 1] - target < target - arr[i]) return i - 1;
            return i;
        }
    }
    return n - 1;
}
function reverseSubArray(arr, begin, end) {
    while(begin < end){
        const tmp = arr[begin];
        arr[begin] = arr[end];
        arr[end] = tmp;
        ++begin;
        --end;
    }
}
function extend(arr, data) {
    const extension = Array.isArray(data) ? data : [
        data
    ];
    const length = extension.length;
    for(let i = 0; i < length; i++)arr[arr.length] = extension[i];
}
function remove(arr, obj) {
    const i = arr.indexOf(obj);
    const found = i > -1;
    if (found) arr.splice(i, 1);
    return found;
}
function equals(arr1, arr2) {
    const len1 = arr1.length;
    if (len1 !== arr2.length) return false;
    for(let i = 0; i < len1; i++){
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
function stableSort(arr, compareFnc) {
    const length = arr.length;
    const tmp = Array(arr.length);
    let i;
    for(i = 0; i < length; i++)tmp[i] = {
        index: i,
        value: arr[i]
    };
    tmp.sort(function(a, b) {
        return compareFnc(a.value, b.value) || a.index - b.index;
    });
    for(i = 0; i < arr.length; i++)arr[i] = tmp[i].value;
}
function isSorted(arr, func, strict) {
    const compare = func || ascending;
    return arr.every(function(currentVal, index) {
        if (index === 0) return true;
        const res = compare(arr[index - 1], currentVal);
        return !(res > 0 || strict && res === 0);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ssAG":[function(require,module,exports,__globalThis) {
/**
 * @module ol/obj
 */ /**
 * Removes all properties from an object.
 * @param {Object<string, unknown>} object The object to clear.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clear", ()=>clear);
/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */ parcelHelpers.export(exports, "isEmpty", ()=>isEmpty);
function clear(object) {
    for(const property in object)delete object[property];
}
function isEmpty(object) {
    let property;
    for(property in object)return false;
    return !property;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hrQJ6":[function(require,module,exports,__globalThis) {
/**
 * @module ol/events/EventType
 */ /**
 * @enum {string}
 * @const
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event module:ol/events/Event~BaseEvent#change
   * @api
   */ CHANGE: 'change',
    /**
   * Generic error event. Triggered when an error occurs.
   * @event module:ol/events/Event~BaseEvent#error
   * @api
   */ ERROR: 'error',
    BLUR: 'blur',
    CLEAR: 'clear',
    CONTEXTMENU: 'contextmenu',
    CLICK: 'click',
    DBLCLICK: 'dblclick',
    DRAGENTER: 'dragenter',
    DRAGOVER: 'dragover',
    DROP: 'drop',
    FOCUS: 'focus',
    KEYDOWN: 'keydown',
    KEYPRESS: 'keypress',
    LOAD: 'load',
    RESIZE: 'resize',
    TOUCHMOVE: 'touchmove',
    WHEEL: 'wheel'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcspA":[function(require,module,exports,__globalThis) {
/**
 * @module ol/events
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Key to use with {@link module:ol/Observable.unByKey}.
 * @typedef {Object} EventsKey
 * @property {ListenerFunction} listener Listener.
 * @property {import("./events/Target.js").EventTargetLike} target Target.
 * @property {string} type Type.
 * @api
 */ /**
 * Listener function. This function is called with an event object as argument.
 * When the function returns `false`, event propagation will stop.
 *
 * @typedef {function((Event|import("./events/Event.js").default)): (void|boolean)} ListenerFunction
 * @api
 */ /**
 * @typedef {Object} ListenerObject
 * @property {ListenerFunction} handleEvent HandleEvent listener function.
 */ /**
 * @typedef {ListenerFunction|ListenerObject} Listener
 */ /**
 * Registers an event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link module:ol/events.unlistenByKey}.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object} [thisArg] Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean} [once] If true, add the listener as one-off listener.
 * @return {EventsKey} Unique key for the listener.
 */ parcelHelpers.export(exports, "listen", ()=>listen);
/**
 * Registers a one-off event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link module:ol/events.unlistenByKey} in case the listener needs to be
 * unregistered before it is called.
 *
 * When {@link module:ol/events.listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object} [thisArg] Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {EventsKey} Key for unlistenByKey.
 */ parcelHelpers.export(exports, "listenOnce", ()=>listenOnce);
/**
 * Unregisters event listeners on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * The argument passed to this function is the key returned from
 * {@link module:ol/events.listen} or {@link module:ol/events.listenOnce}.
 *
 * @param {EventsKey} key The key.
 */ parcelHelpers.export(exports, "unlistenByKey", ()=>unlistenByKey);
var _objJs = require("./obj.js");
function listen(target, type, listener, thisArg, once) {
    if (thisArg && thisArg !== target) listener = listener.bind(thisArg);
    if (once) {
        const originalListener = listener;
        listener = function() {
            target.removeEventListener(type, listener);
            originalListener.apply(this, arguments);
        };
    }
    const eventsKey = {
        target: target,
        type: type,
        listener: listener
    };
    target.addEventListener(type, listener);
    return eventsKey;
}
function listenOnce(target, type, listener, thisArg) {
    return listen(target, type, listener, thisArg, true);
}
function unlistenByKey(key) {
    if (key && key.target) {
        key.target.removeEventListener(key.type, key.listener);
        (0, _objJs.clear)(key);
    }
}

},{"./obj.js":"3ssAG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pLBjQ":[function(require,module,exports,__globalThis) {
/**
 * @module ol/util
 */ /**
 * @return {never} Any return.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "abstract", ()=>abstract);
/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {string} The unique ID for the object.
 * @api
 */ parcelHelpers.export(exports, "getUid", ()=>getUid);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
function abstract() {
    throw new Error('Unimplemented abstract method.');
}
/**
 * Counter for getUid.
 * @type {number}
 * @private
 */ let uidCounter_ = 0;
function getUid(obj) {
    return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
}
const VERSION = '8.2.0';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1BqUf":[function(require,module,exports,__globalThis) {
/**
 * @module ol/transform
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create an identity transform.
 * @return {!Transform} Identity transform.
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Resets the given transform to an identity transform.
 * @param {!Transform} transform Transform.
 * @return {!Transform} Transform.
 */ parcelHelpers.export(exports, "reset", ()=>reset);
/**
 * Multiply the underlying matrices of two transforms and return the result in
 * the first transform.
 * @param {!Transform} transform1 Transform parameters of matrix 1.
 * @param {!Transform} transform2 Transform parameters of matrix 2.
 * @return {!Transform} transform1 multiplied with transform2.
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Set the transform components a-f on a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} a The a component of the transform.
 * @param {number} b The b component of the transform.
 * @param {number} c The c component of the transform.
 * @param {number} d The d component of the transform.
 * @param {number} e The e component of the transform.
 * @param {number} f The f component of the transform.
 * @return {!Transform} Matrix with transform applied.
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Set transform on one matrix from another matrix.
 * @param {!Transform} transform1 Matrix to set transform to.
 * @param {!Transform} transform2 Matrix to set transform from.
 * @return {!Transform} transform1 with transform from transform2 applied.
 */ parcelHelpers.export(exports, "setFromArray", ()=>setFromArray);
/**
 * Transforms the given coordinate with the given transform returning the
 * resulting, transformed coordinate. The coordinate will be modified in-place.
 *
 * @param {Transform} transform The transformation.
 * @param {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} coordinate The coordinate to transform.
 * @return {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} return coordinate so that operations can be
 *     chained together.
 */ parcelHelpers.export(exports, "apply", ()=>apply);
/**
 * Applies rotation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} angle Angle in radians.
 * @return {!Transform} The rotated transform.
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Applies scale to a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scaled transform.
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Creates a scale transform.
 * @param {!Transform} target Transform to overwrite.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scale transform.
 */ parcelHelpers.export(exports, "makeScale", ()=>makeScale);
/**
 * Applies translation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} dx Translation x.
 * @param {number} dy Translation y.
 * @return {!Transform} The translated transform.
 */ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative).
 * @param {!Transform} transform The transform (will be modified in place).
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {!Transform} The composite transform.
 */ parcelHelpers.export(exports, "compose", ()=>compose);
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative). The resulting transform
 * string can be applied as `transform` property of an HTMLElement's style.
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {string} The composite css transform.
 * @api
 */ parcelHelpers.export(exports, "composeCssTransform", ()=>composeCssTransform);
/**
 * Invert the given transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (source) transform.
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Invert the given transform.
 * @param {!Transform} target Transform to be set as the inverse of
 *     the source transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (target) transform.
 */ parcelHelpers.export(exports, "makeInverse", ()=>makeInverse);
/**
 * Returns the determinant of the given matrix.
 * @param {!Transform} mat Matrix.
 * @return {number} Determinant.
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * A rounded string version of the transform.  This can be used
 * for CSS transforms.
 * @param {!Transform} mat Matrix.
 * @return {string} The transform as a string.
 */ parcelHelpers.export(exports, "toString", ()=>toString);
var _hasJs = require("./has.js");
var _assertsJs = require("./asserts.js");
/**
 * An array representing an affine 2d transformation for use with
 * {@link module:ol/transform} functions. The array has 6 elements.
 * @typedef {!Array<number>} Transform
 * @api
 */ /**
 * Collection of affine 2d transformation functions. The functions work on an
 * array of 6 elements. The element order is compatible with the [SVGMatrix
 * interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) and is
 * a subset (elements a to f) of a 3×3 matrix:
 * ```
 * [ a c e ]
 * [ b d f ]
 * [ 0 0 1 ]
 * ```
 */ /**
 * @private
 * @type {Transform}
 */ const tmp_ = new Array(6);
function create() {
    return [
        1,
        0,
        0,
        1,
        0,
        0
    ];
}
function reset(transform) {
    return set(transform, 1, 0, 0, 1, 0, 0);
}
function multiply(transform1, transform2) {
    const a1 = transform1[0];
    const b1 = transform1[1];
    const c1 = transform1[2];
    const d1 = transform1[3];
    const e1 = transform1[4];
    const f1 = transform1[5];
    const a2 = transform2[0];
    const b2 = transform2[1];
    const c2 = transform2[2];
    const d2 = transform2[3];
    const e2 = transform2[4];
    const f2 = transform2[5];
    transform1[0] = a1 * a2 + c1 * b2;
    transform1[1] = b1 * a2 + d1 * b2;
    transform1[2] = a1 * c2 + c1 * d2;
    transform1[3] = b1 * c2 + d1 * d2;
    transform1[4] = a1 * e2 + c1 * f2 + e1;
    transform1[5] = b1 * e2 + d1 * f2 + f1;
    return transform1;
}
function set(transform, a, b, c, d, e, f) {
    transform[0] = a;
    transform[1] = b;
    transform[2] = c;
    transform[3] = d;
    transform[4] = e;
    transform[5] = f;
    return transform;
}
function setFromArray(transform1, transform2) {
    transform1[0] = transform2[0];
    transform1[1] = transform2[1];
    transform1[2] = transform2[2];
    transform1[3] = transform2[3];
    transform1[4] = transform2[4];
    transform1[5] = transform2[5];
    return transform1;
}
function apply(transform, coordinate) {
    const x = coordinate[0];
    const y = coordinate[1];
    coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
    coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
    return coordinate;
}
function rotate(transform, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return multiply(transform, set(tmp_, cos, sin, -sin, cos, 0, 0));
}
function scale(transform, x, y) {
    return multiply(transform, set(tmp_, x, 0, 0, y, 0, 0));
}
function makeScale(target, x, y) {
    return set(target, x, 0, 0, y, 0, 0);
}
function translate(transform, dx, dy) {
    return multiply(transform, set(tmp_, 1, 0, 0, 1, dx, dy));
}
function compose(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    transform[0] = sx * cos;
    transform[1] = sy * sin;
    transform[2] = -sx * sin;
    transform[3] = sy * cos;
    transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
    transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
    return transform;
}
function composeCssTransform(dx1, dy1, sx, sy, angle, dx2, dy2) {
    return toString(compose(create(), dx1, dy1, sx, sy, angle, dx2, dy2));
}
function invert(source) {
    return makeInverse(source, source);
}
function makeInverse(target, source) {
    const det = determinant(source);
    (0, _assertsJs.assert)(det !== 0, 'Transformation matrix cannot be inverted');
    const a = source[0];
    const b = source[1];
    const c = source[2];
    const d = source[3];
    const e = source[4];
    const f = source[5];
    target[0] = d / det;
    target[1] = -b / det;
    target[2] = -c / det;
    target[3] = a / det;
    target[4] = (c * f - d * e) / det;
    target[5] = -(a * f - b * e) / det;
    return target;
}
function determinant(mat) {
    return mat[0] * mat[3] - mat[1] * mat[2];
}
/**
 * @type {HTMLElement}
 * @private
 */ let transformStringDiv;
function toString(mat) {
    const transformString = 'matrix(' + mat.join(', ') + ')';
    if (0, _hasJs.WORKER_OFFSCREEN_CANVAS) return transformString;
    const node = transformStringDiv || (transformStringDiv = document.createElement('div'));
    node.style.transform = transformString;
    return node.style.transform;
}

},{"./has.js":"6BDNi","./asserts.js":"e4TiF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6BDNi":[function(require,module,exports,__globalThis) {
/**
 * @module ol/has
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIREFOX", ()=>FIREFOX);
parcelHelpers.export(exports, "SAFARI", ()=>SAFARI);
parcelHelpers.export(exports, "SAFARI_BUG_237906", ()=>SAFARI_BUG_237906);
parcelHelpers.export(exports, "WEBKIT", ()=>WEBKIT);
parcelHelpers.export(exports, "MAC", ()=>MAC);
parcelHelpers.export(exports, "DEVICE_PIXEL_RATIO", ()=>DEVICE_PIXEL_RATIO);
parcelHelpers.export(exports, "WORKER_OFFSCREEN_CANVAS", ()=>WORKER_OFFSCREEN_CANVAS);
parcelHelpers.export(exports, "IMAGE_DECODE", ()=>IMAGE_DECODE);
parcelHelpers.export(exports, "CREATE_IMAGE_BITMAP", ()=>CREATE_IMAGE_BITMAP);
parcelHelpers.export(exports, "PASSIVE_EVENT_LISTENERS", ()=>PASSIVE_EVENT_LISTENERS);
const ua = typeof navigator !== 'undefined' && typeof navigator.userAgent !== 'undefined' ? navigator.userAgent.toLowerCase() : '';
const FIREFOX = ua.includes('firefox');
const SAFARI = ua.includes('safari') && !ua.includes('chrom');
const SAFARI_BUG_237906 = SAFARI && (ua.includes('version/15.4') || /cpu (os|iphone os) 15_4 like mac os x/.test(ua));
const WEBKIT = ua.includes('webkit') && !ua.includes('edge');
const MAC = ua.includes('macintosh');
const DEVICE_PIXEL_RATIO = typeof devicePixelRatio !== 'undefined' ? devicePixelRatio : 1;
const WORKER_OFFSCREEN_CANVAS = typeof WorkerGlobalScope !== 'undefined' && typeof OffscreenCanvas !== 'undefined' && self instanceof WorkerGlobalScope; //eslint-disable-line
const IMAGE_DECODE = typeof Image !== 'undefined' && Image.prototype.decode;
const CREATE_IMAGE_BITMAP = typeof createImageBitmap === 'function';
const PASSIVE_EVENT_LISTENERS = function() {
    let passive = false;
    try {
        const options = Object.defineProperty({}, 'passive', {
            get: function() {
                passive = true;
            }
        });
        // @ts-ignore Ignore invalid event type '_'
        window.addEventListener('_', null, options);
        // @ts-ignore Ignore invalid event type '_'
        window.removeEventListener('_', null, options);
    } catch (error) {
    // passive not supported
    }
    return passive;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4TiF":[function(require,module,exports,__globalThis) {
/**
 * @module ol/asserts
 */ /**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {string} errorMessage Error message.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assert", ()=>assert);
function assert(assertion, errorMessage) {
    if (!assertion) throw new Error(errorMessage);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YrVc":[function(require,module,exports,__globalThis) {
/**
 * @module ol/extent
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
 * @typedef {Array<number>} Extent
 * @api
 */ /**
 * Extent corner.
 * @typedef {'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'} Corner
 */ /**
 * Build an extent that includes all given coordinates.
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Bounding extent.
 * @api
 */ parcelHelpers.export(exports, "boundingExtent", ()=>boundingExtent);
/**
 * Return extent increased by the provided value.
 * @param {Extent} extent Extent.
 * @param {number} value The amount by which the extent should be buffered.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 * @api
 */ parcelHelpers.export(exports, "buffer", ()=>buffer);
/**
 * Creates a clone of an extent.
 *
 * @param {Extent} extent Extent to clone.
 * @param {Extent} [dest] Extent.
 * @return {Extent} The clone.
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {number} Closest squared distance.
 */ parcelHelpers.export(exports, "closestSquaredDistanceXY", ()=>closestSquaredDistanceXY);
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @return {boolean} The coordinate is contained in the extent.
 * @api
 */ parcelHelpers.export(exports, "containsCoordinate", ()=>containsCoordinate);
/**
 * Check if one extent contains another.
 *
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 *
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The second extent is contained by or on the edge of the
 *     first.
 * @api
 */ parcelHelpers.export(exports, "containsExtent", ()=>containsExtent);
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @return {boolean} The x, y values are contained in the extent.
 * @api
 */ parcelHelpers.export(exports, "containsXY", ()=>containsXY);
/**
 * Get the relationship between a coordinate and extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} coordinate The coordinate.
 * @return {import("./extent/Relationship.js").default} The relationship (bitwise compare with
 *     import("./extent/Relationship.js").Relationship).
 */ parcelHelpers.export(exports, "coordinateRelationship", ()=>coordinateRelationship);
/**
 * Create an empty extent.
 * @return {Extent} Empty extent.
 * @api
 */ parcelHelpers.export(exports, "createEmpty", ()=>createEmpty);
/**
 * Create a new extent or update the provided extent.
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {Extent} [dest] Destination extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdate", ()=>createOrUpdate);
/**
 * Create a new empty extent or make the provided one empty.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateEmpty", ()=>createOrUpdateEmpty);
/**
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromCoordinate", ()=>createOrUpdateFromCoordinate);
/**
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromCoordinates", ()=>createOrUpdateFromCoordinates);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromFlatCoordinates", ()=>createOrUpdateFromFlatCoordinates);
/**
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromRings", ()=>createOrUpdateFromRings);
/**
 * Determine if two extents are equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The two extents are equivalent.
 * @api
 */ parcelHelpers.export(exports, "equals", ()=>equals);
/**
 * Determine if two extents are approximately equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {number} tolerance Tolerance in extent coordinate units.
 * @return {boolean} The two extents differ by less than the tolerance.
 */ parcelHelpers.export(exports, "approximatelyEquals", ()=>approximatelyEquals);
/**
 * Modify an extent to include another extent.
 * @param {Extent} extent1 The extent to be modified.
 * @param {Extent} extent2 The extent that will be included in the first.
 * @return {Extent} A reference to the first (extended) extent.
 * @api
 */ parcelHelpers.export(exports, "extend", ()=>extend);
/**
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 */ parcelHelpers.export(exports, "extendCoordinate", ()=>extendCoordinate);
/**
 * @param {Extent} extent Extent.
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "extendCoordinates", ()=>extendCoordinates);
/**
 * @param {Extent} extent Extent.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "extendFlatCoordinates", ()=>extendFlatCoordinates);
/**
 * @param {Extent} extent Extent.
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "extendRings", ()=>extendRings);
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 */ parcelHelpers.export(exports, "extendXY", ()=>extendXY);
/**
 * This function calls `callback` for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns `false`.
 * @param {Extent} extent Extent.
 * @param {function(import("./coordinate.js").Coordinate): S} callback Callback.
 * @return {S|boolean} Value.
 * @template S
 */ parcelHelpers.export(exports, "forEachCorner", ()=>forEachCorner);
/**
 * Get the size of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Area.
 * @api
 */ parcelHelpers.export(exports, "getArea", ()=>getArea);
/**
 * Get the bottom left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom left coordinate.
 * @api
 */ parcelHelpers.export(exports, "getBottomLeft", ()=>getBottomLeft);
/**
 * Get the bottom right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom right coordinate.
 * @api
 */ parcelHelpers.export(exports, "getBottomRight", ()=>getBottomRight);
/**
 * Get the center coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Center.
 * @api
 */ parcelHelpers.export(exports, "getCenter", ()=>getCenter);
/**
 * Get a corner coordinate of an extent.
 * @param {Extent} extent Extent.
 * @param {Corner} corner Corner.
 * @return {import("./coordinate.js").Coordinate} Corner coordinate.
 */ parcelHelpers.export(exports, "getCorner", ()=>getCorner);
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Enlarged area.
 */ parcelHelpers.export(exports, "getEnlargedArea", ()=>getEnlargedArea);
/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @param {Extent} [dest] Destination extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "getForViewAndSize", ()=>getForViewAndSize);
/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @return {Array<number>} Linear ring representing the viewport.
 */ parcelHelpers.export(exports, "getRotatedViewport", ()=>getRotatedViewport);
/**
 * Get the height of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Height.
 * @api
 */ parcelHelpers.export(exports, "getHeight", ()=>getHeight);
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Intersection area.
 */ parcelHelpers.export(exports, "getIntersectionArea", ()=>getIntersectionArea);
/**
 * Get the intersection of two extents.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {Extent} [dest] Optional extent to populate with intersection.
 * @return {Extent} Intersecting extent.
 * @api
 */ parcelHelpers.export(exports, "getIntersection", ()=>getIntersection);
/**
 * @param {Extent} extent Extent.
 * @return {number} Margin.
 */ parcelHelpers.export(exports, "getMargin", ()=>getMargin);
/**
 * Get the size (width, height) of an extent.
 * @param {Extent} extent The extent.
 * @return {import("./size.js").Size} The extent size.
 * @api
 */ parcelHelpers.export(exports, "getSize", ()=>getSize);
/**
 * Get the top left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top left coordinate.
 * @api
 */ parcelHelpers.export(exports, "getTopLeft", ()=>getTopLeft);
/**
 * Get the top right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top right coordinate.
 * @api
 */ parcelHelpers.export(exports, "getTopRight", ()=>getTopRight);
/**
 * Get the width of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Width.
 * @api
 */ parcelHelpers.export(exports, "getWidth", ()=>getWidth);
/**
 * Determine if one extent intersects another.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent.
 * @return {boolean} The two extents intersect.
 * @api
 */ parcelHelpers.export(exports, "intersects", ()=>intersects);
/**
 * Determine if an extent is empty.
 * @param {Extent} extent Extent.
 * @return {boolean} Is empty.
 * @api
 */ parcelHelpers.export(exports, "isEmpty", ()=>isEmpty);
/**
 * @param {Extent} extent Extent.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "returnOrUpdate", ()=>returnOrUpdate);
/**
 * @param {Extent} extent Extent.
 * @param {number} value Value.
 */ parcelHelpers.export(exports, "scaleFromCenter", ()=>scaleFromCenter);
/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} start Segment start coordinate.
 * @param {import("./coordinate.js").Coordinate} end Segment end coordinate.
 * @return {boolean} The segment intersects the extent.
 */ parcelHelpers.export(exports, "intersectsSegment", ()=>intersectsSegment);
/**
 * Apply a transform function to the extent.
 * @param {Extent} extent Extent.
 * @param {import("./proj.js").TransformFunction} transformFn Transform function.
 * Called with `[minX, minY, maxX, maxY]` extent coordinates.
 * @param {Extent} [dest] Destination extent.
 * @param {number} [stops] Number of stops per side used for the transform.
 * By default only the corners are used.
 * @return {Extent} Extent.
 * @api
 */ parcelHelpers.export(exports, "applyTransform", ()=>applyTransform);
/**
 * Modifies the provided extent in-place to be within the real world
 * extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./proj/Projection.js").default} projection Projection
 * @return {Extent} The extent within the real world extent.
 */ parcelHelpers.export(exports, "wrapX", ()=>wrapX);
/**
 * Fits the extent to the real world
 *
 * If the extent does not cross the anti meridian, this will return the extent in an array
 * If the extent crosses the anti meridian, the extent will be sliced, so each part fits within the
 * real world
 *
 *
 * @param {Extent} extent Extent.
 * @param {import("./proj/Projection.js").default} projection Projection
 * @return {Array<Extent>} The extent within the real world extent.
 */ parcelHelpers.export(exports, "wrapAndSliceX", ()=>wrapAndSliceX);
var _relationshipJs = require("./extent/Relationship.js");
var _relationshipJsDefault = parcelHelpers.interopDefault(_relationshipJs);
function boundingExtent(coordinates) {
    const extent = createEmpty();
    for(let i = 0, ii = coordinates.length; i < ii; ++i)extendCoordinate(extent, coordinates[i]);
    return extent;
}
/**
 * @param {Array<number>} xs Xs.
 * @param {Array<number>} ys Ys.
 * @param {Extent} [dest] Destination extent.
 * @private
 * @return {Extent} Extent.
 */ function _boundingExtentXYs(xs, ys, dest) {
    const minX = Math.min.apply(null, xs);
    const minY = Math.min.apply(null, ys);
    const maxX = Math.max.apply(null, xs);
    const maxY = Math.max.apply(null, ys);
    return createOrUpdate(minX, minY, maxX, maxY, dest);
}
function buffer(extent, value, dest) {
    if (dest) {
        dest[0] = extent[0] - value;
        dest[1] = extent[1] - value;
        dest[2] = extent[2] + value;
        dest[3] = extent[3] + value;
        return dest;
    }
    return [
        extent[0] - value,
        extent[1] - value,
        extent[2] + value,
        extent[3] + value
    ];
}
function clone(extent, dest) {
    if (dest) {
        dest[0] = extent[0];
        dest[1] = extent[1];
        dest[2] = extent[2];
        dest[3] = extent[3];
        return dest;
    }
    return extent.slice();
}
function closestSquaredDistanceXY(extent, x, y) {
    let dx, dy;
    if (x < extent[0]) dx = extent[0] - x;
    else if (extent[2] < x) dx = x - extent[2];
    else dx = 0;
    if (y < extent[1]) dy = extent[1] - y;
    else if (extent[3] < y) dy = y - extent[3];
    else dy = 0;
    return dx * dx + dy * dy;
}
function containsCoordinate(extent, coordinate) {
    return containsXY(extent, coordinate[0], coordinate[1]);
}
function containsExtent(extent1, extent2) {
    return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] && extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
}
function containsXY(extent, x, y) {
    return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
}
function coordinateRelationship(extent, coordinate) {
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const x = coordinate[0];
    const y = coordinate[1];
    let relationship = (0, _relationshipJsDefault.default).UNKNOWN;
    if (x < minX) relationship = relationship | (0, _relationshipJsDefault.default).LEFT;
    else if (x > maxX) relationship = relationship | (0, _relationshipJsDefault.default).RIGHT;
    if (y < minY) relationship = relationship | (0, _relationshipJsDefault.default).BELOW;
    else if (y > maxY) relationship = relationship | (0, _relationshipJsDefault.default).ABOVE;
    if (relationship === (0, _relationshipJsDefault.default).UNKNOWN) relationship = (0, _relationshipJsDefault.default).INTERSECTING;
    return relationship;
}
function createEmpty() {
    return [
        Infinity,
        Infinity,
        -Infinity,
        -Infinity
    ];
}
function createOrUpdate(minX, minY, maxX, maxY, dest) {
    if (dest) {
        dest[0] = minX;
        dest[1] = minY;
        dest[2] = maxX;
        dest[3] = maxY;
        return dest;
    }
    return [
        minX,
        minY,
        maxX,
        maxY
    ];
}
function createOrUpdateEmpty(dest) {
    return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, dest);
}
function createOrUpdateFromCoordinate(coordinate, dest) {
    const x = coordinate[0];
    const y = coordinate[1];
    return createOrUpdate(x, y, x, y, dest);
}
function createOrUpdateFromCoordinates(coordinates, dest) {
    const extent = createOrUpdateEmpty(dest);
    return extendCoordinates(extent, coordinates);
}
function createOrUpdateFromFlatCoordinates(flatCoordinates, offset, end, stride, dest) {
    const extent = createOrUpdateEmpty(dest);
    return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
}
function createOrUpdateFromRings(rings, dest) {
    const extent = createOrUpdateEmpty(dest);
    return extendRings(extent, rings);
}
function equals(extent1, extent2) {
    return extent1[0] == extent2[0] && extent1[2] == extent2[2] && extent1[1] == extent2[1] && extent1[3] == extent2[3];
}
function approximatelyEquals(extent1, extent2, tolerance) {
    return Math.abs(extent1[0] - extent2[0]) < tolerance && Math.abs(extent1[2] - extent2[2]) < tolerance && Math.abs(extent1[1] - extent2[1]) < tolerance && Math.abs(extent1[3] - extent2[3]) < tolerance;
}
function extend(extent1, extent2) {
    if (extent2[0] < extent1[0]) extent1[0] = extent2[0];
    if (extent2[2] > extent1[2]) extent1[2] = extent2[2];
    if (extent2[1] < extent1[1]) extent1[1] = extent2[1];
    if (extent2[3] > extent1[3]) extent1[3] = extent2[3];
    return extent1;
}
function extendCoordinate(extent, coordinate) {
    if (coordinate[0] < extent[0]) extent[0] = coordinate[0];
    if (coordinate[0] > extent[2]) extent[2] = coordinate[0];
    if (coordinate[1] < extent[1]) extent[1] = coordinate[1];
    if (coordinate[1] > extent[3]) extent[3] = coordinate[1];
}
function extendCoordinates(extent, coordinates) {
    for(let i = 0, ii = coordinates.length; i < ii; ++i)extendCoordinate(extent, coordinates[i]);
    return extent;
}
function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
    for(; offset < end; offset += stride)extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
    return extent;
}
function extendRings(extent, rings) {
    for(let i = 0, ii = rings.length; i < ii; ++i)extendCoordinates(extent, rings[i]);
    return extent;
}
function extendXY(extent, x, y) {
    extent[0] = Math.min(extent[0], x);
    extent[1] = Math.min(extent[1], y);
    extent[2] = Math.max(extent[2], x);
    extent[3] = Math.max(extent[3], y);
}
function forEachCorner(extent, callback) {
    let val;
    val = callback(getBottomLeft(extent));
    if (val) return val;
    val = callback(getBottomRight(extent));
    if (val) return val;
    val = callback(getTopRight(extent));
    if (val) return val;
    val = callback(getTopLeft(extent));
    if (val) return val;
    return false;
}
function getArea(extent) {
    let area = 0;
    if (!isEmpty(extent)) area = getWidth(extent) * getHeight(extent);
    return area;
}
function getBottomLeft(extent) {
    return [
        extent[0],
        extent[1]
    ];
}
function getBottomRight(extent) {
    return [
        extent[2],
        extent[1]
    ];
}
function getCenter(extent) {
    return [
        (extent[0] + extent[2]) / 2,
        (extent[1] + extent[3]) / 2
    ];
}
function getCorner(extent, corner) {
    let coordinate;
    if (corner === 'bottom-left') coordinate = getBottomLeft(extent);
    else if (corner === 'bottom-right') coordinate = getBottomRight(extent);
    else if (corner === 'top-left') coordinate = getTopLeft(extent);
    else if (corner === 'top-right') coordinate = getTopRight(extent);
    else throw new Error('Invalid corner');
    return coordinate;
}
function getEnlargedArea(extent1, extent2) {
    const minX = Math.min(extent1[0], extent2[0]);
    const minY = Math.min(extent1[1], extent2[1]);
    const maxX = Math.max(extent1[2], extent2[2]);
    const maxY = Math.max(extent1[3], extent2[3]);
    return (maxX - minX) * (maxY - minY);
}
function getForViewAndSize(center, resolution, rotation, size, dest) {
    const [x0, y0, x1, y1, x2, y2, x3, y3] = getRotatedViewport(center, resolution, rotation, size);
    return createOrUpdate(Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3), Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3), dest);
}
function getRotatedViewport(center, resolution, rotation, size) {
    const dx = resolution * size[0] / 2;
    const dy = resolution * size[1] / 2;
    const cosRotation = Math.cos(rotation);
    const sinRotation = Math.sin(rotation);
    const xCos = dx * cosRotation;
    const xSin = dx * sinRotation;
    const yCos = dy * cosRotation;
    const ySin = dy * sinRotation;
    const x = center[0];
    const y = center[1];
    return [
        x - xCos + ySin,
        y - xSin - yCos,
        x - xCos - ySin,
        y - xSin + yCos,
        x + xCos - ySin,
        y + xSin + yCos,
        x + xCos + ySin,
        y + xSin - yCos,
        x - xCos + ySin,
        y - xSin - yCos
    ];
}
function getHeight(extent) {
    return extent[3] - extent[1];
}
function getIntersectionArea(extent1, extent2) {
    const intersection = getIntersection(extent1, extent2);
    return getArea(intersection);
}
function getIntersection(extent1, extent2, dest) {
    const intersection = dest ? dest : createEmpty();
    if (intersects(extent1, extent2)) {
        if (extent1[0] > extent2[0]) intersection[0] = extent1[0];
        else intersection[0] = extent2[0];
        if (extent1[1] > extent2[1]) intersection[1] = extent1[1];
        else intersection[1] = extent2[1];
        if (extent1[2] < extent2[2]) intersection[2] = extent1[2];
        else intersection[2] = extent2[2];
        if (extent1[3] < extent2[3]) intersection[3] = extent1[3];
        else intersection[3] = extent2[3];
    } else createOrUpdateEmpty(intersection);
    return intersection;
}
function getMargin(extent) {
    return getWidth(extent) + getHeight(extent);
}
function getSize(extent) {
    return [
        extent[2] - extent[0],
        extent[3] - extent[1]
    ];
}
function getTopLeft(extent) {
    return [
        extent[0],
        extent[3]
    ];
}
function getTopRight(extent) {
    return [
        extent[2],
        extent[3]
    ];
}
function getWidth(extent) {
    return extent[2] - extent[0];
}
function intersects(extent1, extent2) {
    return extent1[0] <= extent2[2] && extent1[2] >= extent2[0] && extent1[1] <= extent2[3] && extent1[3] >= extent2[1];
}
function isEmpty(extent) {
    return extent[2] < extent[0] || extent[3] < extent[1];
}
function returnOrUpdate(extent, dest) {
    if (dest) {
        dest[0] = extent[0];
        dest[1] = extent[1];
        dest[2] = extent[2];
        dest[3] = extent[3];
        return dest;
    }
    return extent;
}
function scaleFromCenter(extent, value) {
    const deltaX = (extent[2] - extent[0]) / 2 * (value - 1);
    const deltaY = (extent[3] - extent[1]) / 2 * (value - 1);
    extent[0] -= deltaX;
    extent[2] += deltaX;
    extent[1] -= deltaY;
    extent[3] += deltaY;
}
function intersectsSegment(extent, start, end) {
    let intersects = false;
    const startRel = coordinateRelationship(extent, start);
    const endRel = coordinateRelationship(extent, end);
    if (startRel === (0, _relationshipJsDefault.default).INTERSECTING || endRel === (0, _relationshipJsDefault.default).INTERSECTING) intersects = true;
    else {
        const minX = extent[0];
        const minY = extent[1];
        const maxX = extent[2];
        const maxY = extent[3];
        const startX = start[0];
        const startY = start[1];
        const endX = end[0];
        const endY = end[1];
        const slope = (endY - startY) / (endX - startX);
        let x, y;
        if (!!(endRel & (0, _relationshipJsDefault.default).ABOVE) && !(startRel & (0, _relationshipJsDefault.default).ABOVE)) {
            // potentially intersects top
            x = endX - (endY - maxY) / slope;
            intersects = x >= minX && x <= maxX;
        }
        if (!intersects && !!(endRel & (0, _relationshipJsDefault.default).RIGHT) && !(startRel & (0, _relationshipJsDefault.default).RIGHT)) {
            // potentially intersects right
            y = endY - (endX - maxX) * slope;
            intersects = y >= minY && y <= maxY;
        }
        if (!intersects && !!(endRel & (0, _relationshipJsDefault.default).BELOW) && !(startRel & (0, _relationshipJsDefault.default).BELOW)) {
            // potentially intersects bottom
            x = endX - (endY - minY) / slope;
            intersects = x >= minX && x <= maxX;
        }
        if (!intersects && !!(endRel & (0, _relationshipJsDefault.default).LEFT) && !(startRel & (0, _relationshipJsDefault.default).LEFT)) {
            // potentially intersects left
            y = endY - (endX - minX) * slope;
            intersects = y >= minY && y <= maxY;
        }
    }
    return intersects;
}
function applyTransform(extent, transformFn, dest, stops) {
    if (isEmpty(extent)) return createOrUpdateEmpty(dest);
    let coordinates = [];
    if (stops > 1) {
        const width = extent[2] - extent[0];
        const height = extent[3] - extent[1];
        for(let i = 0; i < stops; ++i)coordinates.push(extent[0] + width * i / stops, extent[1], extent[2], extent[1] + height * i / stops, extent[2] - width * i / stops, extent[3], extent[0], extent[3] - height * i / stops);
    } else coordinates = [
        extent[0],
        extent[1],
        extent[2],
        extent[1],
        extent[2],
        extent[3],
        extent[0],
        extent[3]
    ];
    transformFn(coordinates, coordinates, 2);
    const xs = [];
    const ys = [];
    for(let i = 0, l = coordinates.length; i < l; i += 2){
        xs.push(coordinates[i]);
        ys.push(coordinates[i + 1]);
    }
    return _boundingExtentXYs(xs, ys, dest);
}
function wrapX(extent, projection) {
    const projectionExtent = projection.getExtent();
    const center = getCenter(extent);
    if (projection.canWrapX() && (center[0] < projectionExtent[0] || center[0] >= projectionExtent[2])) {
        const worldWidth = getWidth(projectionExtent);
        const worldsAway = Math.floor((center[0] - projectionExtent[0]) / worldWidth);
        const offset = worldsAway * worldWidth;
        extent[0] -= offset;
        extent[2] -= offset;
    }
    return extent;
}
function wrapAndSliceX(extent, projection) {
    if (projection.canWrapX()) {
        const projectionExtent = projection.getExtent();
        if (!isFinite(extent[0]) || !isFinite(extent[2])) return [
            [
                projectionExtent[0],
                extent[1],
                projectionExtent[2],
                extent[3]
            ]
        ];
        wrapX(extent, projection);
        const worldWidth = getWidth(projectionExtent);
        if (getWidth(extent) > worldWidth) // the extent wraps around on itself
        return [
            [
                projectionExtent[0],
                extent[1],
                projectionExtent[2],
                extent[3]
            ]
        ];
        if (extent[0] < projectionExtent[0]) // the extent crosses the anti meridian, so it needs to be sliced
        return [
            [
                extent[0] + worldWidth,
                extent[1],
                projectionExtent[2],
                extent[3]
            ],
            [
                projectionExtent[0],
                extent[1],
                extent[2],
                extent[3]
            ]
        ];
        if (extent[2] > projectionExtent[2]) // the extent crosses the anti meridian, so it needs to be sliced
        return [
            [
                extent[0],
                extent[1],
                projectionExtent[2],
                extent[3]
            ],
            [
                projectionExtent[0],
                extent[1],
                extent[2] - worldWidth,
                extent[3]
            ]
        ];
    }
    return [
        extent
    ];
}

},{"./extent/Relationship.js":"9q0e7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9q0e7":[function(require,module,exports,__globalThis) {
/**
 * @module ol/extent/Relationship
 */ /**
 * Relationship to an extent.
 * @enum {number}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    UNKNOWN: 0,
    INTERSECTING: 1,
    ABOVE: 2,
    RIGHT: 4,
    BELOW: 8,
    LEFT: 16
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SznqC":[function(require,module,exports,__globalThis) {
/**
 * @module ol/proj
 */ /**
 * The ol/proj module stores:
 * * a list of {@link module:ol/proj/Projection~Projection}
 * objects, one for each projection supported by the application
 * * a list of transform functions needed to convert coordinates in one projection
 * into another.
 *
 * The static functions are the methods used to maintain these.
 * Each transform function can handle not only simple coordinate pairs, but also
 * large arrays of coordinates such as vector geometries.
 *
 * When loaded, the library adds projection objects for EPSG:4326 (WGS84
 * geographic coordinates) and EPSG:3857 (Web or Spherical Mercator, as used
 * for example by Bing Maps or OpenStreetMap), together with the relevant
 * transform functions.
 *
 * Additional transforms may be added by using the http://proj4js.org/
 * library (version 2.2 or later). You can use the full build supplied by
 * Proj4js, or create a custom build to support those projections you need; see
 * the Proj4js website for how to do this. You also need the Proj4js definitions
 * for the required projections. These definitions can be obtained from
 * https://epsg.io/, and are a JS function, so can be loaded in a script
 * tag (as in the examples) or pasted into your application.
 *
 * After all required projection definitions are added to proj4's registry (by
 * using `proj4.defs()`), simply call `register(proj4)` from the `ol/proj/proj4`
 * package. Existing transforms are not changed by this function. See
 * examples/wms-image-custom-proj for an example of this.
 *
 * Additional projection definitions can be registered with `proj4.defs()` any
 * time. Just make sure to call `register(proj4)` again; for example, with user-supplied data where you don't
 * know in advance what projections are needed, you can initially load minimal
 * support and then load whichever are requested.
 *
 * Note that Proj4js does not support projection extents. If you want to add
 * one for creating default tile grids, you can add it after the Projection
 * object has been created with `setExtent`, for example,
 * `get('EPSG:1234').setExtent(extent)`.
 *
 * In addition to Proj4js support, any transform functions can be added with
 * {@link module:ol/proj.addCoordinateTransforms}. To use this, you must first create
 * a {@link module:ol/proj/Projection~Projection} object for the new projection and add it with
 * {@link module:ol/proj.addProjection}. You can then add the forward and inverse
 * functions with {@link module:ol/proj.addCoordinateTransforms}. See
 * examples/wms-custom-proj for an example of this.
 *
 * Note that if no transforms are needed and you only need to define the
 * projection, just add a {@link module:ol/proj/Projection~Projection} with
 * {@link module:ol/proj.addProjection}. See examples/wms-no-proj for an example of
 * this.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A projection as {@link module:ol/proj/Projection~Projection}, SRS identifier
 * string or undefined.
 * @typedef {Projection|string|undefined} ProjectionLike
 * @api
 */ /**
 * A transform function accepts an array of input coordinate values, an optional
 * output array, and an optional dimension (default should be 2).  The function
 * transforms the input coordinate values, populates the output array, and
 * returns the output array.
 *
 * @typedef {function(Array<number>, Array<number>=, number=): Array<number>} TransformFunction
 * @api
 */ parcelHelpers.export(exports, "METERS_PER_UNIT", ()=>(0, _unitsJs.METERS_PER_UNIT));
parcelHelpers.export(exports, "Projection", ()=>(0, _projectionJsDefault.default));
/**
 * @param {boolean} [disable = true] Disable console info about `useGeographic()`
 */ parcelHelpers.export(exports, "disableCoordinateWarning", ()=>disableCoordinateWarning);
/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @return {Array<number>} Output coordinate array (new array, same coordinate
 *     values).
 */ parcelHelpers.export(exports, "cloneTransform", ()=>cloneTransform);
/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @return {Array<number>} Input coordinate array (same array as input).
 */ parcelHelpers.export(exports, "identityTransform", ()=>identityTransform);
/**
 * Add a Projection object to the list of supported projections that can be
 * looked up by their code.
 *
 * @param {Projection} projection Projection instance.
 * @api
 */ parcelHelpers.export(exports, "addProjection", ()=>addProjection);
/**
 * @param {Array<Projection>} projections Projections.
 */ parcelHelpers.export(exports, "addProjections", ()=>addProjections);
/**
 * Fetches a Projection object for the code specified.
 *
 * @param {ProjectionLike} projectionLike Either a code string which is
 *     a combination of authority and identifier such as "EPSG:4326", or an
 *     existing projection object, or undefined.
 * @return {Projection|null} Projection object, or null if not in list.
 * @api
 */ parcelHelpers.export(exports, "get", ()=>get);
/**
 * Get the resolution of the point in degrees or distance units.
 * For projections with degrees as the unit this will simply return the
 * provided resolution. For other projections the point resolution is
 * by default estimated by transforming the `point` pixel to EPSG:4326,
 * measuring its width and height on the normal sphere,
 * and taking the average of the width and height.
 * A custom function can be provided for a specific projection, either
 * by setting the `getPointResolution` option in the
 * {@link module:ol/proj/Projection~Projection} constructor or by using
 * {@link module:ol/proj/Projection~Projection#setGetPointResolution} to change an existing
 * projection object.
 * @param {ProjectionLike} projection The projection.
 * @param {number} resolution Nominal resolution in projection units.
 * @param {import("./coordinate.js").Coordinate} point Point to find adjusted resolution at.
 * @param {import("./proj/Units.js").Units} [units] Units to get the point resolution in.
 * Default is the projection's units.
 * @return {number} Point resolution.
 * @api
 */ parcelHelpers.export(exports, "getPointResolution", ()=>getPointResolution);
/**
 * Registers transformation functions that don't alter coordinates. Those allow
 * to transform between projections with equal meaning.
 *
 * @param {Array<Projection>} projections Projections.
 * @api
 */ parcelHelpers.export(exports, "addEquivalentProjections", ()=>addEquivalentProjections);
/**
 * Registers transformation functions to convert coordinates in any projection
 * in projection1 to any projection in projection2.
 *
 * @param {Array<Projection>} projections1 Projections with equal
 *     meaning.
 * @param {Array<Projection>} projections2 Projections with equal
 *     meaning.
 * @param {TransformFunction} forwardTransform Transformation from any
 *   projection in projection1 to any projection in projection2.
 * @param {TransformFunction} inverseTransform Transform from any projection
 *   in projection2 to any projection in projection1..
 */ parcelHelpers.export(exports, "addEquivalentTransforms", ()=>addEquivalentTransforms);
/**
 * Clear all cached projections and transforms.
 */ parcelHelpers.export(exports, "clearAllProjections", ()=>clearAllProjections);
/**
 * @param {Projection|string|undefined} projection Projection.
 * @param {string} defaultCode Default code.
 * @return {Projection} Projection.
 */ parcelHelpers.export(exports, "createProjection", ()=>createProjection);
/**
 * Creates a {@link module:ol/proj~TransformFunction} from a simple 2D coordinate transform
 * function.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} coordTransform Coordinate
 *     transform.
 * @return {TransformFunction} Transform function.
 */ parcelHelpers.export(exports, "createTransformFromCoordinateTransform", ()=>createTransformFromCoordinateTransform);
/**
 * Registers coordinate transform functions to convert coordinates between the
 * source projection and the destination projection.
 * The forward and inverse functions convert coordinate pairs; this function
 * converts these into the functions used internally which also handle
 * extents and coordinate arrays.
 *
 * @param {ProjectionLike} source Source projection.
 * @param {ProjectionLike} destination Destination projection.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} forward The forward transform
 *     function (that is, from the source projection to the destination
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} inverse The inverse transform
 *     function (that is, from the destination projection to the source
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}. If the transform function can only
 *     transform less dimensions than the input coordinate, it is supposeed to return a coordinate
 *     with only the length it can transform. The other dimensions will be taken unchanged from the
 *     source.
 * @api
 */ parcelHelpers.export(exports, "addCoordinateTransforms", ()=>addCoordinateTransforms);
/**
 * Transforms a coordinate from longitude/latitude to a different projection.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate as longitude and latitude, i.e.
 *     an array with longitude as 1st and latitude as 2nd element.
 * @param {ProjectionLike} [projection] Target projection. The
 *     default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate projected to the target projection.
 * @api
 */ parcelHelpers.export(exports, "fromLonLat", ()=>fromLonLat);
/**
 * Transforms a coordinate to longitude/latitude.
 * @param {import("./coordinate.js").Coordinate} coordinate Projected coordinate.
 * @param {ProjectionLike} [projection] Projection of the coordinate.
 *     The default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate as longitude and latitude, i.e. an array
 *     with longitude as 1st and latitude as 2nd element.
 * @api
 */ parcelHelpers.export(exports, "toLonLat", ()=>toLonLat);
/**
 * Checks if two projections are the same, that is every coordinate in one
 * projection does represent the same geographic point as the same coordinate in
 * the other projection.
 *
 * @param {Projection} projection1 Projection 1.
 * @param {Projection} projection2 Projection 2.
 * @return {boolean} Equivalent.
 * @api
 */ parcelHelpers.export(exports, "equivalent", ()=>equivalent);
/**
 * Searches in the list of transform functions for the function for converting
 * coordinates from the source projection to the destination projection.
 *
 * @param {Projection} sourceProjection Source Projection object.
 * @param {Projection} destinationProjection Destination Projection
 *     object.
 * @return {TransformFunction} Transform function.
 */ parcelHelpers.export(exports, "getTransformFromProjections", ()=>getTransformFromProjections);
/**
 * Given the projection-like objects, searches for a transformation
 * function to convert a coordinates array from the source projection to the
 * destination projection.
 *
 * @param {ProjectionLike} source Source.
 * @param {ProjectionLike} destination Destination.
 * @return {TransformFunction} Transform function.
 * @api
 */ parcelHelpers.export(exports, "getTransform", ()=>getTransform);
/**
 * Transforms a coordinate from source projection to destination projection.
 * This returns a new coordinate (and does not modify the original).
 *
 * See {@link module:ol/proj.transformExtent} for extent transformation.
 * See the transform method of {@link module:ol/geom/Geometry~Geometry} and its
 * subclasses for geometry transforms.
 *
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @return {import("./coordinate.js").Coordinate} Coordinate.
 * @api
 */ parcelHelpers.export(exports, "transform", ()=>transform);
/**
 * Transforms an extent from source projection to destination projection.  This
 * returns a new extent (and does not modify the original).
 *
 * @param {import("./extent.js").Extent} extent The extent to transform.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @param {number} [stops] Number of stops per side used for the transform.
 * By default only the corners are used.
 * @return {import("./extent.js").Extent} The transformed extent.
 * @api
 */ parcelHelpers.export(exports, "transformExtent", ()=>transformExtent);
/**
 * Transforms the given point to the destination projection.
 *
 * @param {import("./coordinate.js").Coordinate} point Point.
 * @param {Projection} sourceProjection Source projection.
 * @param {Projection} destinationProjection Destination projection.
 * @return {import("./coordinate.js").Coordinate} Point.
 */ parcelHelpers.export(exports, "transformWithProjections", ()=>transformWithProjections);
/**
 * Set the projection for coordinates supplied from and returned by API methods.
 * This includes all API methods except for those interacting with tile grids,
 * plus {@link import("./Map.js").FrameState} and {@link import("./View.js").State}.
 * @param {ProjectionLike} projection The user projection.
 * @api
 */ parcelHelpers.export(exports, "setUserProjection", ()=>setUserProjection);
/**
 * Clear the user projection if set.
 * @api
 */ parcelHelpers.export(exports, "clearUserProjection", ()=>clearUserProjection);
/**
 * Get the projection for coordinates supplied from and returned by API methods.
 * @return {Projection|null} The user projection (or null if not set).
 * @api
 */ parcelHelpers.export(exports, "getUserProjection", ()=>getUserProjection);
/**
 * Use geographic coordinates (WGS-84 datum) in API methods.
 * This includes all API methods except for those interacting with tile grids,
 * plus {@link import("./Map.js").FrameState} and {@link import("./View.js").State}.
 * @api
 */ parcelHelpers.export(exports, "useGeographic", ()=>useGeographic);
/**
 * Return a coordinate transformed into the user projection.  If no user projection
 * is set, the original coordinate is returned.
 * @param {Array<number>} coordinate Input coordinate.
 * @param {ProjectionLike} sourceProjection The input coordinate projection.
 * @return {Array<number>} The input coordinate in the user projection.
 */ parcelHelpers.export(exports, "toUserCoordinate", ()=>toUserCoordinate);
/**
 * Return a coordinate transformed from the user projection.  If no user projection
 * is set, the original coordinate is returned.
 * @param {Array<number>} coordinate Input coordinate.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {Array<number>} The input coordinate transformed.
 */ parcelHelpers.export(exports, "fromUserCoordinate", ()=>fromUserCoordinate);
/**
 * Return an extent transformed into the user projection.  If no user projection
 * is set, the original extent is returned.
 * @param {import("./extent.js").Extent} extent Input extent.
 * @param {ProjectionLike} sourceProjection The input extent projection.
 * @return {import("./extent.js").Extent} The input extent in the user projection.
 */ parcelHelpers.export(exports, "toUserExtent", ()=>toUserExtent);
/**
 * Return an extent transformed from the user projection.  If no user projection
 * is set, the original extent is returned.
 * @param {import("./extent.js").Extent} extent Input extent.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {import("./extent.js").Extent} The input extent transformed.
 */ parcelHelpers.export(exports, "fromUserExtent", ()=>fromUserExtent);
/**
 * Return the resolution in user projection units per pixel. If no user projection
 * is set, or source or user projection are missing units, the original resolution
 * is returned.
 * @param {number} resolution Resolution in input projection units per pixel.
 * @param {ProjectionLike} sourceProjection The input projection.
 * @return {number} Resolution in user projection units per pixel.
 */ parcelHelpers.export(exports, "toUserResolution", ()=>toUserResolution);
/**
 * Return the resolution in user projection units per pixel. If no user projection
 * is set, or source or user projection are missing units, the original resolution
 * is returned.
 * @param {number} resolution Resolution in user projection units per pixel.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {number} Resolution in destination projection units per pixel.
 */ parcelHelpers.export(exports, "fromUserResolution", ()=>fromUserResolution);
/**
 * Creates a safe coordinate transform function from a coordinate transform function.
 * "Safe" means that it can handle wrapping of x-coordinates for global projections,
 * and that coordinates exceeding the source projection validity extent's range will be
 * clamped to the validity range.
 * @param {Projection} sourceProj Source projection.
 * @param {Projection} destProj Destination projection.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} transform Transform function (source to destination).
 * @return {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} Safe transform function (source to destination).
 */ parcelHelpers.export(exports, "createSafeCoordinateTransform", ()=>createSafeCoordinateTransform);
/**
 * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
 * by when this module is executed and should only need to be called again after
 * `clearAllProjections()` is called (e.g. in tests).
 */ parcelHelpers.export(exports, "addCommon", ()=>addCommon);
var _projectionJs = require("./proj/Projection.js");
var _projectionJsDefault = parcelHelpers.interopDefault(_projectionJs);
var _epsg3857Js = require("./proj/epsg3857.js");
var _epsg4326Js = require("./proj/epsg4326.js");
var _unitsJs = require("./proj/Units.js");
var _projectionsJs = require("./proj/projections.js");
var _transformsJs = require("./proj/transforms.js");
var _extentJs = require("./extent.js");
var _mathJs = require("./math.js");
var _coordinateJs = require("./coordinate.js");
var _sphereJs = require("./sphere.js");
var _consoleJs = require("./console.js");
let showCoordinateWarning = true;
function disableCoordinateWarning(disable) {
    const hide = disable === undefined ? true : disable;
    showCoordinateWarning = !hide;
}
function cloneTransform(input, output) {
    if (output !== undefined) {
        for(let i = 0, ii = input.length; i < ii; ++i)output[i] = input[i];
        output;
    } else output = input.slice();
    return output;
}
function identityTransform(input, output) {
    if (output !== undefined && input !== output) {
        for(let i = 0, ii = input.length; i < ii; ++i)output[i] = input[i];
        input = output;
    }
    return input;
}
function addProjection(projection) {
    (0, _projectionsJs.add)(projection.getCode(), projection);
    (0, _transformsJs.add)(projection, projection, cloneTransform);
}
function addProjections(projections) {
    projections.forEach(addProjection);
}
function get(projectionLike) {
    return typeof projectionLike === 'string' ? (0, _projectionsJs.get)(/** @type {string} */ projectionLike) : /** @type {Projection} */ projectionLike || null;
}
function getPointResolution(projection, resolution, point, units) {
    projection = get(projection);
    let pointResolution;
    const getter = projection.getPointResolutionFunc();
    if (getter) {
        pointResolution = getter(resolution, point);
        if (units && units !== projection.getUnits()) {
            const metersPerUnit = projection.getMetersPerUnit();
            if (metersPerUnit) pointResolution = pointResolution * metersPerUnit / (0, _unitsJs.METERS_PER_UNIT)[units];
        }
    } else {
        const projUnits = projection.getUnits();
        if (projUnits == 'degrees' && !units || units == 'degrees') pointResolution = resolution;
        else {
            // Estimate point resolution by transforming the center pixel to EPSG:4326,
            // measuring its width and height on the normal sphere, and taking the
            // average of the width and height.
            const toEPSG4326 = getTransformFromProjections(projection, get('EPSG:4326'));
            if (toEPSG4326 === identityTransform && projUnits !== 'degrees') // no transform is available
            pointResolution = resolution * projection.getMetersPerUnit();
            else {
                let vertices = [
                    point[0] - resolution / 2,
                    point[1],
                    point[0] + resolution / 2,
                    point[1],
                    point[0],
                    point[1] - resolution / 2,
                    point[0],
                    point[1] + resolution / 2
                ];
                vertices = toEPSG4326(vertices, vertices, 2);
                const width = (0, _sphereJs.getDistance)(vertices.slice(0, 2), vertices.slice(2, 4));
                const height = (0, _sphereJs.getDistance)(vertices.slice(4, 6), vertices.slice(6, 8));
                pointResolution = (width + height) / 2;
            }
            const metersPerUnit = units ? (0, _unitsJs.METERS_PER_UNIT)[units] : projection.getMetersPerUnit();
            if (metersPerUnit !== undefined) pointResolution /= metersPerUnit;
        }
    }
    return pointResolution;
}
function addEquivalentProjections(projections) {
    addProjections(projections);
    projections.forEach(function(source) {
        projections.forEach(function(destination) {
            if (source !== destination) (0, _transformsJs.add)(source, destination, cloneTransform);
        });
    });
}
function addEquivalentTransforms(projections1, projections2, forwardTransform, inverseTransform) {
    projections1.forEach(function(projection1) {
        projections2.forEach(function(projection2) {
            (0, _transformsJs.add)(projection1, projection2, forwardTransform);
            (0, _transformsJs.add)(projection2, projection1, inverseTransform);
        });
    });
}
function clearAllProjections() {
    (0, _projectionsJs.clear)();
    (0, _transformsJs.clear)();
}
function createProjection(projection, defaultCode) {
    if (!projection) return get(defaultCode);
    if (typeof projection === 'string') return get(projection);
    return /** @type {Projection} */ projection;
}
function createTransformFromCoordinateTransform(coordTransform) {
    return(/**
     * @param {Array<number>} input Input.
     * @param {Array<number>} [output] Output.
     * @param {number} [dimension] Dimension.
     * @return {Array<number>} Output.
     */ function(input, output, dimension) {
        const length = input.length;
        dimension = dimension !== undefined ? dimension : 2;
        output = output !== undefined ? output : new Array(length);
        for(let i = 0; i < length; i += dimension){
            const point = coordTransform(input.slice(i, i + dimension));
            const pointLength = point.length;
            for(let j = 0, jj = dimension; j < jj; ++j)output[i + j] = j >= pointLength ? input[i + j] : point[j];
        }
        return output;
    });
}
function addCoordinateTransforms(source, destination, forward, inverse) {
    const sourceProj = get(source);
    const destProj = get(destination);
    (0, _transformsJs.add)(sourceProj, destProj, createTransformFromCoordinateTransform(forward));
    (0, _transformsJs.add)(destProj, sourceProj, createTransformFromCoordinateTransform(inverse));
}
function fromLonLat(coordinate, projection) {
    disableCoordinateWarning();
    return transform(coordinate, 'EPSG:4326', projection !== undefined ? projection : 'EPSG:3857');
}
function toLonLat(coordinate, projection) {
    const lonLat = transform(coordinate, projection !== undefined ? projection : 'EPSG:3857', 'EPSG:4326');
    const lon = lonLat[0];
    if (lon < -180 || lon > 180) lonLat[0] = (0, _mathJs.modulo)(lon + 180, 360) - 180;
    return lonLat;
}
function equivalent(projection1, projection2) {
    if (projection1 === projection2) return true;
    const equalUnits = projection1.getUnits() === projection2.getUnits();
    if (projection1.getCode() === projection2.getCode()) return equalUnits;
    const transformFunc = getTransformFromProjections(projection1, projection2);
    return transformFunc === cloneTransform && equalUnits;
}
function getTransformFromProjections(sourceProjection, destinationProjection) {
    const sourceCode = sourceProjection.getCode();
    const destinationCode = destinationProjection.getCode();
    let transformFunc = (0, _transformsJs.get)(sourceCode, destinationCode);
    if (!transformFunc) transformFunc = identityTransform;
    return transformFunc;
}
function getTransform(source, destination) {
    const sourceProjection = get(source);
    const destinationProjection = get(destination);
    return getTransformFromProjections(sourceProjection, destinationProjection);
}
function transform(coordinate, source, destination) {
    const transformFunc = getTransform(source, destination);
    return transformFunc(coordinate, undefined, coordinate.length);
}
function transformExtent(extent, source, destination, stops) {
    const transformFunc = getTransform(source, destination);
    return (0, _extentJs.applyTransform)(extent, transformFunc, undefined, stops);
}
function transformWithProjections(point, sourceProjection, destinationProjection) {
    const transformFunc = getTransformFromProjections(sourceProjection, destinationProjection);
    return transformFunc(point);
}
/**
 * @type {Projection|null}
 */ let userProjection = null;
function setUserProjection(projection) {
    userProjection = get(projection);
}
function clearUserProjection() {
    userProjection = null;
}
function getUserProjection() {
    return userProjection;
}
function useGeographic() {
    setUserProjection('EPSG:4326');
}
function toUserCoordinate(coordinate, sourceProjection) {
    if (!userProjection) return coordinate;
    return transform(coordinate, sourceProjection, userProjection);
}
function fromUserCoordinate(coordinate, destProjection) {
    if (!userProjection) {
        if (showCoordinateWarning && !(0, _coordinateJs.equals)(coordinate, [
            0,
            0
        ]) && coordinate[0] >= -180 && coordinate[0] <= 180 && coordinate[1] >= -90 && coordinate[1] <= 90) {
            showCoordinateWarning = false;
            (0, _consoleJs.warn)('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.');
        }
        return coordinate;
    }
    return transform(coordinate, userProjection, destProjection);
}
function toUserExtent(extent, sourceProjection) {
    if (!userProjection) return extent;
    return transformExtent(extent, sourceProjection, userProjection);
}
function fromUserExtent(extent, destProjection) {
    if (!userProjection) return extent;
    return transformExtent(extent, userProjection, destProjection);
}
function toUserResolution(resolution, sourceProjection) {
    if (!userProjection) return resolution;
    const sourceMetersPerUnit = get(sourceProjection).getMetersPerUnit();
    const userMetersPerUnit = userProjection.getMetersPerUnit();
    return sourceMetersPerUnit && userMetersPerUnit ? resolution * sourceMetersPerUnit / userMetersPerUnit : resolution;
}
function fromUserResolution(resolution, destProjection) {
    if (!userProjection) return resolution;
    const destMetersPerUnit = get(destProjection).getMetersPerUnit();
    const userMetersPerUnit = userProjection.getMetersPerUnit();
    return destMetersPerUnit && userMetersPerUnit ? resolution * userMetersPerUnit / destMetersPerUnit : resolution;
}
function createSafeCoordinateTransform(sourceProj, destProj, transform) {
    return function(coord) {
        let transformed, worldsAway;
        if (sourceProj.canWrapX()) {
            const sourceExtent = sourceProj.getExtent();
            const sourceExtentWidth = (0, _extentJs.getWidth)(sourceExtent);
            coord = coord.slice(0);
            worldsAway = (0, _coordinateJs.getWorldsAway)(coord, sourceProj, sourceExtentWidth);
            if (worldsAway) // Move x to the real world
            coord[0] = coord[0] - worldsAway * sourceExtentWidth;
            coord[0] = (0, _mathJs.clamp)(coord[0], sourceExtent[0], sourceExtent[2]);
            coord[1] = (0, _mathJs.clamp)(coord[1], sourceExtent[1], sourceExtent[3]);
            transformed = transform(coord);
        } else transformed = transform(coord);
        if (worldsAway && destProj.canWrapX()) // Move transformed coordinate back to the offset world
        transformed[0] += worldsAway * (0, _extentJs.getWidth)(destProj.getExtent());
        return transformed;
    };
}
function addCommon() {
    // Add transformations that don't alter coordinates to convert within set of
    // projections with equal meaning.
    addEquivalentProjections((0, _epsg3857Js.PROJECTIONS));
    addEquivalentProjections((0, _epsg4326Js.PROJECTIONS));
    // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
    // coordinates and back.
    addEquivalentTransforms((0, _epsg4326Js.PROJECTIONS), (0, _epsg3857Js.PROJECTIONS), (0, _epsg3857Js.fromEPSG4326), (0, _epsg3857Js.toEPSG4326));
}
addCommon();

},{"./proj/Projection.js":false,"./proj/epsg3857.js":"3MTbx","./proj/epsg4326.js":"6Thur","./proj/Units.js":"gOgy6","./proj/projections.js":"9svUu","./proj/transforms.js":"gPHoN","./extent.js":"6YrVc","./math.js":"5jEFr","./coordinate.js":"85Vu7","./sphere.js":"eJjHw","./console.js":"25bqN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7HvLt":[function(require,module,exports,__globalThis) {
/**
 * @module ol/proj/Projection
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _unitsJs = require("./Units.js");
/**
 * @typedef {Object} Options
 * @property {string} code The SRS identifier code, e.g. `EPSG:4326`.
 * @property {import("./Units.js").Units} [units] Units. Required unless a
 * proj4 projection is defined for `code`.
 * @property {import("../extent.js").Extent} [extent] The validity extent for the SRS.
 * @property {string} [axisOrientation='enu'] The axis orientation as specified in Proj4.
 * @property {boolean} [global=false] Whether the projection is valid for the whole globe.
 * @property {number} [metersPerUnit] The meters per unit for the SRS.
 * If not provided, the `units` are used to get the meters per unit from the {@link METERS_PER_UNIT}
 * lookup table.
 * @property {import("../extent.js").Extent} [worldExtent] The world extent for the SRS.
 * @property {function(number, import("../coordinate.js").Coordinate):number} [getPointResolution]
 * Function to determine resolution at a point. The function is called with a
 * `number` view resolution and a {@link module:ol/coordinate~Coordinate} as arguments, and returns
 * the `number` resolution in projection units at the passed coordinate. If this is `undefined`,
 * the default {@link module:ol/proj.getPointResolution} function will be used.
 */ /**
 * @classdesc
 * Projection definition class. One of these is created for each projection
 * supported in the application and stored in the {@link module:ol/proj} namespace.
 * You can use these in applications, but this is not required, as API params
 * and options use {@link module:ol/proj~ProjectionLike} which means the simple string
 * code will suffice.
 *
 * You can use {@link module:ol/proj.get} to retrieve the object for a particular
 * projection.
 *
 * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
 * with the following aliases:
 * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
 *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
 *     http://www.opengis.net/gml/srs/epsg.xml#4326,
 *     urn:x-ogc:def:crs:EPSG:4326
 * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
 *     urn:ogc:def:crs:EPSG:6.18:3:3857,
 *     http://www.opengis.net/gml/srs/epsg.xml#3857
 *
 * If you use [proj4js](https://github.com/proj4js/proj4js), aliases can
 * be added using `proj4.defs()`. After all required projection definitions are
 * added, call the {@link module:ol/proj/proj4.register} function.
 *
 * @api
 */ class Projection {
    /**
   * @param {Options} options Projection options.
   */ constructor(options){
        /**
     * @private
     * @type {string}
     */ this.code_ = options.code;
        /**
     * Units of projected coordinates. When set to `TILE_PIXELS`, a
     * `this.extent_` and `this.worldExtent_` must be configured properly for each
     * tile.
     * @private
     * @type {import("./Units.js").Units}
     */ this.units_ = /** @type {import("./Units.js").Units} */ options.units;
        /**
     * Validity extent of the projection in projected coordinates. For projections
     * with `TILE_PIXELS` units, this is the extent of the tile in
     * tile pixel space.
     * @private
     * @type {import("../extent.js").Extent}
     */ this.extent_ = options.extent !== undefined ? options.extent : null;
        /**
     * Extent of the world in EPSG:4326. For projections with
     * `TILE_PIXELS` units, this is the extent of the tile in
     * projected coordinate space.
     * @private
     * @type {import("../extent.js").Extent}
     */ this.worldExtent_ = options.worldExtent !== undefined ? options.worldExtent : null;
        /**
     * @private
     * @type {string}
     */ this.axisOrientation_ = options.axisOrientation !== undefined ? options.axisOrientation : 'enu';
        /**
     * @private
     * @type {boolean}
     */ this.global_ = options.global !== undefined ? options.global : false;
        /**
     * @private
     * @type {boolean}
     */ this.canWrapX_ = !!(this.global_ && this.extent_);
        /**
     * @private
     * @type {function(number, import("../coordinate.js").Coordinate):number|undefined}
     */ this.getPointResolutionFunc_ = options.getPointResolution;
        /**
     * @private
     * @type {import("../tilegrid/TileGrid.js").default}
     */ this.defaultTileGrid_ = null;
        /**
     * @private
     * @type {number|undefined}
     */ this.metersPerUnit_ = options.metersPerUnit;
    }
    /**
   * @return {boolean} The projection is suitable for wrapping the x-axis
   */ canWrapX() {
        return this.canWrapX_;
    }
    /**
   * Get the code for this projection, e.g. 'EPSG:4326'.
   * @return {string} Code.
   * @api
   */ getCode() {
        return this.code_;
    }
    /**
   * Get the validity extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */ getExtent() {
        return this.extent_;
    }
    /**
   * Get the units of this projection.
   * @return {import("./Units.js").Units} Units.
   * @api
   */ getUnits() {
        return this.units_;
    }
    /**
   * Get the amount of meters per unit of this projection.  If the projection is
   * not configured with `metersPerUnit` or a units identifier, the return is
   * `undefined`.
   * @return {number|undefined} Meters.
   * @api
   */ getMetersPerUnit() {
        return this.metersPerUnit_ || (0, _unitsJs.METERS_PER_UNIT)[this.units_];
    }
    /**
   * Get the world extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */ getWorldExtent() {
        return this.worldExtent_;
    }
    /**
   * Get the axis orientation of this projection.
   * Example values are:
   * enu - the default easting, northing, elevation.
   * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
   *     or south orientated transverse mercator.
   * wnu - westing, northing, up - some planetary coordinate systems have
   *     "west positive" coordinate systems
   * @return {string} Axis orientation.
   * @api
   */ getAxisOrientation() {
        return this.axisOrientation_;
    }
    /**
   * Is this projection a global projection which spans the whole world?
   * @return {boolean} Whether the projection is global.
   * @api
   */ isGlobal() {
        return this.global_;
    }
    /**
   * Set if the projection is a global projection which spans the whole world
   * @param {boolean} global Whether the projection is global.
   * @api
   */ setGlobal(global) {
        this.global_ = global;
        this.canWrapX_ = !!(global && this.extent_);
    }
    /**
   * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
   */ getDefaultTileGrid() {
        return this.defaultTileGrid_;
    }
    /**
   * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
   */ setDefaultTileGrid(tileGrid) {
        this.defaultTileGrid_ = tileGrid;
    }
    /**
   * Set the validity extent for this projection.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */ setExtent(extent) {
        this.extent_ = extent;
        this.canWrapX_ = !!(this.global_ && extent);
    }
    /**
   * Set the world extent for this projection.
   * @param {import("../extent.js").Extent} worldExtent World extent
   *     [minlon, minlat, maxlon, maxlat].
   * @api
   */ setWorldExtent(worldExtent) {
        this.worldExtent_ = worldExtent;
    }
    /**
   * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
   * for this projection.
   * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
   * @api
   */ setGetPointResolution(func) {
        this.getPointResolutionFunc_ = func;
    }
    /**
   * Get the custom point resolution function for this projection (if set).
   * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
   * resolution function (if set).
   */ getPointResolutionFunc() {
        return this.getPointResolutionFunc_;
    }
}
exports.default = Projection;

},{"./Units.js":"gOgy6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOgy6":[function(require,module,exports,__globalThis) {
/**
 * @module ol/proj/Units
 */ /**
 * @typedef {'radians' | 'degrees' | 'ft' | 'm' | 'pixels' | 'tile-pixels' | 'us-ft'} Units
 * Projection units.
 */ /**
 * See http://duff.ess.washington.edu/data/raster/drg/docs/geotiff.txt
 * @type {Object<number, Units>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {number} code Unit code.
 * @return {Units} Units.
 */ parcelHelpers.export(exports, "fromCode", ()=>fromCode);
parcelHelpers.export(exports, "METERS_PER_UNIT", ()=>METERS_PER_UNIT);
const unitByCode = {
    '9001': 'm',
    '9002': 'ft',
    '9003': 'us-ft',
    '9101': 'radians',
    '9102': 'degrees'
};
function fromCode(code) {
    return unitByCode[code];
}
const METERS_PER_UNIT = {
    // use the radius of the Normal sphere
    'radians': 6370997 / (2 * Math.PI),
    'degrees': 2 * Math.PI * 6370997 / 360,
    'ft': 0.3048,
    'm': 1,
    'us-ft': 1200 / 3937
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3MTbx":[function(require,module,exports,__globalThis) {
/**
 * @module ol/proj/epsg3857
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RADIUS", ()=>RADIUS);
parcelHelpers.export(exports, "HALF_SIZE", ()=>HALF_SIZE);
parcelHelpers.export(exports, "EXTENT", ()=>EXTENT);
parcelHelpers.export(exports, "WORLD_EXTENT", ()=>WORLD_EXTENT);
parcelHelpers.export(exports, "MAX_SAFE_Y", ()=>MAX_SAFE_Y);
parcelHelpers.export(exports, "PROJECTIONS", ()=>PROJECTIONS);
/**
 * Transformation from EPSG:4326 to EPSG:3857.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @param {number} [dimension] Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */ parcelHelpers.export(exports, "fromEPSG4326", ()=>fromEPSG4326);
/**
 * Transformation from EPSG:3857 to EPSG:4326.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @param {number} [dimension] Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */ parcelHelpers.export(exports, "toEPSG4326", ()=>toEPSG4326);
var _projectionJs = require("./Projection.js");
var _projectionJsDefault = parcelHelpers.interopDefault(_projectionJs);
const RADIUS = 6378137;
const HALF_SIZE = Math.PI * RADIUS;
const EXTENT = [
    -HALF_SIZE,
    -HALF_SIZE,
    HALF_SIZE,
    HALF_SIZE
];
const WORLD_EXTENT = [
    -180,
    -85,
    180,
    85
];
const MAX_SAFE_Y = RADIUS * Math.log(Math.tan(Math.PI / 2));
/**
 * @classdesc
 * Projection object for web/spherical Mercator (EPSG:3857).
 */ class EPSG3857Projection extends (0, _projectionJsDefault.default) {
    /**
   * @param {string} code Code.
   */ constructor(code){
        super({
            code: code,
            units: 'm',
            extent: EXTENT,
            global: true,
            worldExtent: WORLD_EXTENT,
            getPointResolution: function(resolution, point) {
                return resolution / Math.cosh(point[1] / RADIUS);
            }
        });
    }
}
const PROJECTIONS = [
    new EPSG3857Projection('EPSG:3857'),
    new EPSG3857Projection('EPSG:102100'),
    new EPSG3857Projection('EPSG:102113'),
    new EPSG3857Projection('EPSG:900913'),
    new EPSG3857Projection('http://www.opengis.net/def/crs/EPSG/0/3857'),
    new EPSG3857Projection('http://www.opengis.net/gml/srs/epsg.xml#3857')
];
function fromEPSG4326(input, output, dimension) {
    const length = input.length;
    dimension = dimension > 1 ? dimension : 2;
    if (output === undefined) {
        if (dimension > 2) // preserve values beyond second dimension
        output = input.slice();
        else output = new Array(length);
    }
    for(let i = 0; i < length; i += dimension){
        output[i] = HALF_SIZE * input[i] / 180;
        let y = RADIUS * Math.log(Math.tan(Math.PI * (+input[i + 1] + 90) / 360));
        if (y > MAX_SAFE_Y) y = MAX_SAFE_Y;
        else if (y < -MAX_SAFE_Y) y = -MAX_SAFE_Y;
        output[i + 1] = y;
    }
    return output;
}
function toEPSG4326(input, output, dimension) {
    const length = input.length;
    dimension = dimension > 1 ? dimension : 2;
    if (output === undefined) {
        if (dimension > 2) // preserve values beyond second dimension
        output = input.slice();
        else output = new Array(length);
    }
    for(let i = 0; i < length; i += dimension){
        output[i] = 180 * input[i] / HALF_SIZE;
        output[i + 1] = 360 * Math.atan(Math.exp(input[i + 1] / RADIUS)) / Math.PI - 90;
    }
    return output;
}

},{"./Projection.js":"7HvLt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Thur":[function(require,module,exports,__globalThis) {
/**
 * @module ol/proj/epsg4326
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RADIUS", ()=>RADIUS);
parcelHelpers.export(exports, "EXTENT", ()=>EXTENT);
parcelHelpers.export(exports, "METERS_PER_UNIT", ()=>METERS_PER_UNIT);
parcelHelpers.export(exports, "PROJECTIONS", ()=>PROJECTIONS);
var _projectionJs = require("./Projection.js");
var _projectionJsDefault = parcelHelpers.interopDefault(_projectionJs);
const RADIUS = 6378137;
const EXTENT = [
    -180,
    -90,
    180,
    90
];
const METERS_PER_UNIT = Math.PI * RADIUS / 180;
/**
 * @classdesc
 * Projection object for WGS84 geographic coordinates (EPSG:4326).
 *
 * Note that OpenLayers does not strictly comply with the EPSG definition.
 * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
 * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
 */ class EPSG4326Projection extends (0, _projectionJsDefault.default) {
    /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */ constructor(code, axisOrientation){
        super({
            code: code,
            units: 'degrees',
            extent: EXTENT,
            axisOrientation: axisOrientation,
            global: true,
            metersPerUnit: METERS_PER_UNIT,
            worldExtent: EXTENT
        });
    }
}
const PROJECTIONS = [
    new EPSG4326Projection('CRS:84'),
    new EPSG4326Projection('EPSG:4326', 'neu'),
    new EPSG4326Projection('urn:ogc:def:crs:OGC:1.3:CRS84'),
    new EPSG4326Projection('urn:ogc:def:crs:OGC:2:84'),
    new EPSG4326Projection('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
    new EPSG4326Projection('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
    new EPSG4326Projection('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu')
];

},{"./Projection.js":"7HvLt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9svUu":[function(require,module,exports,__globalThis) {
/**
 * @module ol/proj/projections
 */ /**
 * @type {Object<string, import("./Projection.js").default>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Clear the projections cache.
 */ parcelHelpers.export(exports, "clear", ()=>clear);
/**
 * Get a cached projection by code.
 * @param {string} code The code for the projection.
 * @return {import("./Projection.js").default} The projection (if cached).
 */ parcelHelpers.export(exports, "get", ()=>get);
/**
 * Add a projection to the cache.
 * @param {string} code The projection code.
 * @param {import("./Projection.js").default} projection The projection to cache.
 */ parcelHelpers.export(exports, "add", ()=>add);
let cache = {};
function clear() {
    cache = {};
}
function get(code) {
    return cache[code] || cache[code.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] || null;
}
function add(code, projection) {
    cache[code] = projection;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPHoN":[function(require,module,exports,__globalThis) {
/**
 * @module ol/proj/transforms
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Clear the transform cache.
 */ parcelHelpers.export(exports, "clear", ()=>clear);
/**
 * Registers a conversion function to convert coordinates from the source
 * projection to the destination projection.
 *
 * @param {import("./Projection.js").default} source Source.
 * @param {import("./Projection.js").default} destination Destination.
 * @param {import("../proj.js").TransformFunction} transformFn Transform.
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Unregisters the conversion function to convert coordinates from the source
 * projection to the destination projection.  This method is used to clean up
 * cached transforms during testing.
 *
 * @param {import("./Projection.js").default} source Source projection.
 * @param {import("./Projection.js").default} destination Destination projection.
 * @return {import("../proj.js").TransformFunction} transformFn The unregistered transform.
 */ parcelHelpers.export(exports, "remove", ()=>remove);
/**
 * Get a transform given a source code and a destination code.
 * @param {string} sourceCode The code for the source projection.
 * @param {string} destinationCode The code for the destination projection.
 * @return {import("../proj.js").TransformFunction|undefined} The transform function (if found).
 */ parcelHelpers.export(exports, "get", ()=>get);
var _objJs = require("../obj.js");
/**
 * @private
 * @type {!Object<string, Object<string, import("../proj.js").TransformFunction>>}
 */ let transforms = {};
function clear() {
    transforms = {};
}
function add(source, destination, transformFn) {
    const sourceCode = source.getCode();
    const destinationCode = destination.getCode();
    if (!(sourceCode in transforms)) transforms[sourceCode] = {};
    transforms[sourceCode][destinationCode] = transformFn;
}
function remove(source, destination) {
    const sourceCode = source.getCode();
    const destinationCode = destination.getCode();
    const transform = transforms[sourceCode][destinationCode];
    delete transforms[sourceCode][destinationCode];
    if ((0, _objJs.isEmpty)(transforms[sourceCode])) delete transforms[sourceCode];
    return transform;
}
function get(sourceCode, destinationCode) {
    let transform;
    if (sourceCode in transforms && destinationCode in transforms[sourceCode]) transform = transforms[sourceCode][destinationCode];
    return transform;
}

},{"../obj.js":"3ssAG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5jEFr":[function(require,module,exports,__globalThis) {
/**
 * @module ol/math
 */ /**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */ parcelHelpers.export(exports, "squaredSegmentDistance", ()=>squaredSegmentDistance);
/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array<Array<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array<number>|null} The resulting vector.
 */ parcelHelpers.export(exports, "solveLinearSystem", ()=>solveLinearSystem);
/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */ parcelHelpers.export(exports, "toDegrees", ()=>toDegrees);
/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */ parcelHelpers.export(exports, "toRadians", ()=>toRadians);
/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */ parcelHelpers.export(exports, "modulo", ()=>modulo);
/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Returns a number with a limited number of decimal digits.
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The input number with a limited number of decimal digits.
 */ parcelHelpers.export(exports, "toFixed", ()=>toFixed);
/**
 * Rounds a number to the nearest integer value considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The nearest integer.
 */ parcelHelpers.export(exports, "round", ()=>round);
/**
 * Rounds a number to the next smaller integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The next smaller integer.
 */ parcelHelpers.export(exports, "floor", ()=>floor);
/**
 * Rounds a number to the next bigger integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The next bigger integer.
 */ parcelHelpers.export(exports, "ceil", ()=>ceil);
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    if (dx !== 0 || dy !== 0) {
        const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            x1 = x2;
            y1 = y2;
        } else if (t > 0) {
            x1 += dx * t;
            y1 += dy * t;
        }
    }
    return squaredDistance(x, y, x1, y1);
}
function squaredDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return dx * dx + dy * dy;
}
function solveLinearSystem(mat) {
    const n = mat.length;
    for(let i = 0; i < n; i++){
        // Find max in the i-th column (ignoring i - 1 first rows)
        let maxRow = i;
        let maxEl = Math.abs(mat[i][i]);
        for(let r = i + 1; r < n; r++){
            const absValue = Math.abs(mat[r][i]);
            if (absValue > maxEl) {
                maxEl = absValue;
                maxRow = r;
            }
        }
        if (maxEl === 0) return null; // matrix is singular
        // Swap max row with i-th (current) row
        const tmp = mat[maxRow];
        mat[maxRow] = mat[i];
        mat[i] = tmp;
        // Subtract the i-th row to make all the remaining rows 0 in the i-th column
        for(let j = i + 1; j < n; j++){
            const coef = -mat[j][i] / mat[i][i];
            for(let k = i; k < n + 1; k++)if (i == k) mat[j][k] = 0;
            else mat[j][k] += coef * mat[i][k];
        }
    }
    // Solve Ax=b for upper triangular matrix A (mat)
    const x = new Array(n);
    for(let l = n - 1; l >= 0; l--){
        x[l] = mat[l][n] / mat[l][l];
        for(let m = l - 1; m >= 0; m--)mat[m][n] -= mat[m][l] * x[l];
    }
    return x;
}
function toDegrees(angleInRadians) {
    return angleInRadians * 180 / Math.PI;
}
function toRadians(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
}
function modulo(a, b) {
    const r = a % b;
    return r * b < 0 ? r + b : r;
}
function lerp(a, b, x) {
    return a + x * (b - a);
}
function toFixed(n, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(n * factor) / factor;
}
function round(n, decimals) {
    return Math.round(toFixed(n, decimals));
}
function floor(n, decimals) {
    return Math.floor(toFixed(n, decimals));
}
function ceil(n, decimals) {
    return Math.ceil(toFixed(n, decimals));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"85Vu7":[function(require,module,exports,__globalThis) {
/**
 * @module ol/coordinate
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * An array of numbers representing an `xy`, `xyz` or `xyzm` coordinate.
 * Example: `[16, 48]`.
 * @typedef {Array<number>} Coordinate
 * @api
 */ /**
 * A function that takes a {@link module:ol/coordinate~Coordinate} and
 * transforms it into a `{string}`.
 *
 * @typedef {function((Coordinate|undefined)): string} CoordinateFormat
 * @api
 */ /**
 * Add `delta` to `coordinate`. `coordinate` is modified in place and returned
 * by the function.
 *
 * Example:
 *
 *     import {add} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     add(coord, [-2, 4]);
 *     // coord is now [5.85, 51.983333]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {Coordinate} delta Delta.
 * @return {Coordinate} The input coordinate adjusted by
 * the given delta.
 * @api
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Calculates the point closest to the passed coordinate on the passed circle.
 *
 * @param {Coordinate} coordinate The coordinate.
 * @param {import("./geom/Circle.js").default} circle The circle.
 * @return {Coordinate} Closest point on the circumference.
 */ parcelHelpers.export(exports, "closestOnCircle", ()=>closestOnCircle);
/**
 * Calculates the point closest to the passed coordinate on the passed segment.
 * This is the foot of the perpendicular of the coordinate to the segment when
 * the foot is on the segment, or the closest segment coordinate when the foot
 * is outside the segment.
 *
 * @param {Coordinate} coordinate The coordinate.
 * @param {Array<Coordinate>} segment The two coordinates
 * of the segment.
 * @return {Coordinate} The foot of the perpendicular of
 * the coordinate to the segment.
 */ parcelHelpers.export(exports, "closestOnSegment", ()=>closestOnSegment);
/**
 * Returns a {@link module:ol/coordinate~CoordinateFormat} function that can be
 * used to format
 * a {Coordinate} to a string.
 *
 * Example without specifying the fractional digits:
 *
 *     import {createStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const stringifyFunc = createStringXY();
 *     const out = stringifyFunc(coord);
 *     // out is now '8, 48'
 *
 * Example with explicitly specifying 2 fractional digits:
 *
 *     import {createStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const stringifyFunc = createStringXY(2);
 *     const out = stringifyFunc(coord);
 *     // out is now '7.85, 47.98'
 *
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {CoordinateFormat} Coordinate format.
 * @api
 */ parcelHelpers.export(exports, "createStringXY", ()=>createStringXY);
/**
 * @param {string} hemispheres Hemispheres.
 * @param {number} degrees Degrees.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} String.
 */ parcelHelpers.export(exports, "degreesToStringHDMS", ()=>degreesToStringHDMS);
/**
 * Transforms the given {@link module:ol/coordinate~Coordinate} to a string
 * using the given string template. The strings `{x}` and `{y}` in the template
 * will be replaced with the first and second coordinate values respectively.
 *
 * Example without specifying the fractional digits:
 *
 *     import {format} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const template = 'Coordinate is ({x}|{y}).';
 *     const out = format(coord, template);
 *     // out is now 'Coordinate is (8|48).'
 *
 * Example explicitly specifying the fractional digits:
 *
 *     import {format} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const template = 'Coordinate is ({x}|{y}).';
 *     const out = format(coord, template, 2);
 *     // out is now 'Coordinate is (7.85|47.98).'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {string} template A template string with `{x}` and `{y}` placeholders
 *     that will be replaced by first and second coordinate values.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} Formatted coordinate.
 * @api
 */ parcelHelpers.export(exports, "format", ()=>format);
/**
 * @param {Coordinate} coordinate1 First coordinate.
 * @param {Coordinate} coordinate2 Second coordinate.
 * @return {boolean} The two coordinates are equal.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
/**
 * Rotate `coordinate` by `angle`. `coordinate` is modified in place and
 * returned by the function.
 *
 * Example:
 *
 *     import {rotate} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const rotateRadians = Math.PI / 2; // 90 degrees
 *     rotate(coord, rotateRadians);
 *     // coord is now [-47.983333, 7.85]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} angle Angle in radian.
 * @return {Coordinate} Coordinate.
 * @api
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Scale `coordinate` by `scale`. `coordinate` is modified in place and returned
 * by the function.
 *
 * Example:
 *
 *     import {scale as scaleCoordinate} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const scale = 1.2;
 *     scaleCoordinate(coord, scale);
 *     // coord is now [9.42, 57.5799996]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} scale Scale factor.
 * @return {Coordinate} Coordinate.
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * @param {Coordinate} coord1 First coordinate.
 * @param {Coordinate} coord2 Second coordinate.
 * @return {number} Squared distance between coord1 and coord2.
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * @param {Coordinate} coord1 First coordinate.
 * @param {Coordinate} coord2 Second coordinate.
 * @return {number} Distance between coord1 and coord2.
 */ parcelHelpers.export(exports, "distance", ()=>distance);
/**
 * Calculate the squared distance from a coordinate to a line segment.
 *
 * @param {Coordinate} coordinate Coordinate of the point.
 * @param {Array<Coordinate>} segment Line segment (2
 * coordinates).
 * @return {number} Squared distance from the point to the line segment.
 */ parcelHelpers.export(exports, "squaredDistanceToSegment", ()=>squaredDistanceToSegment);
/**
 * Format a geographic coordinate with the hemisphere, degrees, minutes, and
 * seconds.
 *
 * Example without specifying fractional digits:
 *
 *     import {toStringHDMS} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringHDMS(coord);
 *     // out is now '47° 58′ 60″ N 7° 50′ 60″ E'
 *
 * Example explicitly specifying 1 fractional digit:
 *
 *     import {toStringHDMS} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringHDMS(coord, 1);
 *     // out is now '47° 58′ 60.0″ N 7° 50′ 60.0″ E'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} Hemisphere, degrees, minutes and seconds.
 * @api
 */ parcelHelpers.export(exports, "toStringHDMS", ()=>toStringHDMS);
/**
 * Format a coordinate as a comma delimited string.
 *
 * Example without specifying fractional digits:
 *
 *     import {toStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringXY(coord);
 *     // out is now '8, 48'
 *
 * Example explicitly specifying 1 fractional digit:
 *
 *     import {toStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringXY(coord, 1);
 *     // out is now '7.8, 48.0'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} XY.
 * @api
 */ parcelHelpers.export(exports, "toStringXY", ()=>toStringXY);
/**
 * Modifies the provided coordinate in-place to be within the real world
 * extent. The lower projection extent boundary is inclusive, the upper one
 * exclusive.
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @return {Coordinate} The coordinate within the real world extent.
 */ parcelHelpers.export(exports, "wrapX", ()=>wrapX);
/**
 * @param {Coordinate} coordinate Coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @param {number} [sourceExtentWidth] Width of the source extent.
 * @return {number} Offset in world widths.
 */ parcelHelpers.export(exports, "getWorldsAway", ()=>getWorldsAway);
var _extentJs = require("./extent.js");
var _mathJs = require("./math.js");
var _stringJs = require("./string.js");
function add(coordinate, delta) {
    coordinate[0] += +delta[0];
    coordinate[1] += +delta[1];
    return coordinate;
}
function closestOnCircle(coordinate, circle) {
    const r = circle.getRadius();
    const center = circle.getCenter();
    const x0 = center[0];
    const y0 = center[1];
    const x1 = coordinate[0];
    const y1 = coordinate[1];
    let dx = x1 - x0;
    const dy = y1 - y0;
    if (dx === 0 && dy === 0) dx = 1;
    const d = Math.sqrt(dx * dx + dy * dy);
    const x = x0 + r * dx / d;
    const y = y0 + r * dy / d;
    return [
        x,
        y
    ];
}
function closestOnSegment(coordinate, segment) {
    const x0 = coordinate[0];
    const y0 = coordinate[1];
    const start = segment[0];
    const end = segment[1];
    const x1 = start[0];
    const y1 = start[1];
    const x2 = end[0];
    const y2 = end[1];
    const dx = x2 - x1;
    const dy = y2 - y1;
    const along = dx === 0 && dy === 0 ? 0 : (dx * (x0 - x1) + dy * (y0 - y1)) / (dx * dx + dy * dy || 0);
    let x, y;
    if (along <= 0) {
        x = x1;
        y = y1;
    } else if (along >= 1) {
        x = x2;
        y = y2;
    } else {
        x = x1 + along * dx;
        y = y1 + along * dy;
    }
    return [
        x,
        y
    ];
}
function createStringXY(fractionDigits) {
    return(/**
     * @param {Coordinate} coordinate Coordinate.
     * @return {string} String XY.
     */ function(coordinate) {
        return toStringXY(coordinate, fractionDigits);
    });
}
function degreesToStringHDMS(hemispheres, degrees, fractionDigits) {
    const normalizedDegrees = (0, _mathJs.modulo)(degrees + 180, 360) - 180;
    const x = Math.abs(3600 * normalizedDegrees);
    const decimals = fractionDigits || 0;
    let deg = Math.floor(x / 3600);
    let min = Math.floor((x - deg * 3600) / 60);
    let sec = (0, _mathJs.toFixed)(x - deg * 3600 - min * 60, decimals);
    if (sec >= 60) {
        sec = 0;
        min += 1;
    }
    if (min >= 60) {
        min = 0;
        deg += 1;
    }
    let hdms = deg + '\u00b0';
    if (min !== 0 || sec !== 0) hdms += ' ' + (0, _stringJs.padNumber)(min, 2) + '\u2032';
    if (sec !== 0) hdms += ' ' + (0, _stringJs.padNumber)(sec, 2, decimals) + '\u2033';
    if (normalizedDegrees !== 0) hdms += ' ' + hemispheres.charAt(normalizedDegrees < 0 ? 1 : 0);
    return hdms;
}
function format(coordinate, template, fractionDigits) {
    if (coordinate) return template.replace('{x}', coordinate[0].toFixed(fractionDigits)).replace('{y}', coordinate[1].toFixed(fractionDigits));
    return '';
}
function equals(coordinate1, coordinate2) {
    let equals = true;
    for(let i = coordinate1.length - 1; i >= 0; --i)if (coordinate1[i] != coordinate2[i]) {
        equals = false;
        break;
    }
    return equals;
}
function rotate(coordinate, angle) {
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    const x = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    const y = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    coordinate[0] = x;
    coordinate[1] = y;
    return coordinate;
}
function scale(coordinate, scale) {
    coordinate[0] *= scale;
    coordinate[1] *= scale;
    return coordinate;
}
function squaredDistance(coord1, coord2) {
    const dx = coord1[0] - coord2[0];
    const dy = coord1[1] - coord2[1];
    return dx * dx + dy * dy;
}
function distance(coord1, coord2) {
    return Math.sqrt(squaredDistance(coord1, coord2));
}
function squaredDistanceToSegment(coordinate, segment) {
    return squaredDistance(coordinate, closestOnSegment(coordinate, segment));
}
function toStringHDMS(coordinate, fractionDigits) {
    if (coordinate) return degreesToStringHDMS('NS', coordinate[1], fractionDigits) + ' ' + degreesToStringHDMS('EW', coordinate[0], fractionDigits);
    return '';
}
function toStringXY(coordinate, fractionDigits) {
    return format(coordinate, '{x}, {y}', fractionDigits);
}
function wrapX(coordinate, projection) {
    if (projection.canWrapX()) {
        const worldWidth = (0, _extentJs.getWidth)(projection.getExtent());
        const worldsAway = getWorldsAway(coordinate, projection, worldWidth);
        if (worldsAway) coordinate[0] -= worldsAway * worldWidth;
    }
    return coordinate;
}
function getWorldsAway(coordinate, projection, sourceExtentWidth) {
    const projectionExtent = projection.getExtent();
    let worldsAway = 0;
    if (projection.canWrapX() && (coordinate[0] < projectionExtent[0] || coordinate[0] > projectionExtent[2])) {
        sourceExtentWidth = sourceExtentWidth || (0, _extentJs.getWidth)(projectionExtent);
        worldsAway = Math.floor((coordinate[0] - projectionExtent[0]) / sourceExtentWidth);
    }
    return worldsAway;
}

},{"./extent.js":"6YrVc","./math.js":"5jEFr","./string.js":"fIYwS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fIYwS":[function(require,module,exports,__globalThis) {
/**
 * @module ol/string
 */ /**
 * @param {number} number Number to be formatted
 * @param {number} width The desired width
 * @param {number} [precision] Precision of the output string (i.e. number of decimal places)
 * @return {string} Formatted string
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "padNumber", ()=>padNumber);
/**
 * Adapted from https://github.com/omichelsen/compare-versions/blob/master/index.js
 * @param {string|number} v1 First version
 * @param {string|number} v2 Second version
 * @return {number} Value
 */ parcelHelpers.export(exports, "compareVersions", ()=>compareVersions);
function padNumber(number, width, precision) {
    const numberString = precision !== undefined ? number.toFixed(precision) : '' + number;
    let decimal = numberString.indexOf('.');
    decimal = decimal === -1 ? numberString.length : decimal;
    return decimal > width ? numberString : new Array(1 + width - decimal).join('0') + numberString;
}
function compareVersions(v1, v2) {
    const s1 = ('' + v1).split('.');
    const s2 = ('' + v2).split('.');
    for(let i = 0; i < Math.max(s1.length, s2.length); i++){
        const n1 = parseInt(s1[i] || '0', 10);
        const n2 = parseInt(s2[i] || '0', 10);
        if (n1 > n2) return 1;
        if (n2 > n1) return -1;
    }
    return 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJjHw":[function(require,module,exports,__globalThis) {
/**
 * @module ol/sphere
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_RADIUS", ()=>DEFAULT_RADIUS);
/**
 * Get the great circle distance (in meters) between two geographic coordinates.
 * @param {Array} c1 Starting coordinate.
 * @param {Array} c2 Ending coordinate.
 * @param {number} [radius] The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {number} The great circle distance between the points (in meters).
 * @api
 */ parcelHelpers.export(exports, "getDistance", ()=>getDistance);
/**
 * Get the spherical length of a geometry.  This length is the sum of the
 * great circle distances between coordinates.  For polygons, the length is
 * the sum of all rings.  For points, the length is zero.  For multi-part
 * geometries, the length is the sum of the length of each part.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions} [options] Options for the
 * length calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 * You can change this by providing a `projection` option.
 * @return {number} The spherical length (in meters).
 * @api
 */ parcelHelpers.export(exports, "getLength", ()=>getLength);
/**
 * Get the spherical area of a geometry.  This is the area (in meters) assuming
 * that polygon edges are segments of great circles on a sphere.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions} [options] Options for the area
 *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 *     You can change this by providing a `projection` option.
 * @return {number} The spherical area (in square meters).
 * @api
 */ parcelHelpers.export(exports, "getArea", ()=>getArea);
/**
 * Returns the coordinate at the given distance and bearing from `c1`.
 *
 * @param {import("./coordinate.js").Coordinate} c1 The origin point (`[lon, lat]` in degrees).
 * @param {number} distance The great-circle distance between the origin
 *     point and the target point.
 * @param {number} bearing The bearing (in radians).
 * @param {number} [radius] The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {import("./coordinate.js").Coordinate} The target point.
 */ parcelHelpers.export(exports, "offset", ()=>offset);
var _mathJs = require("./math.js");
const DEFAULT_RADIUS = 6371008.8;
function getDistance(c1, c2, radius) {
    radius = radius || DEFAULT_RADIUS;
    const lat1 = (0, _mathJs.toRadians)(c1[1]);
    const lat2 = (0, _mathJs.toRadians)(c2[1]);
    const deltaLatBy2 = (lat2 - lat1) / 2;
    const deltaLonBy2 = (0, _mathJs.toRadians)(c2[0] - c1[0]) / 2;
    const a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) + Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) * Math.cos(lat1) * Math.cos(lat2);
    return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
/**
 * Get the cumulative great circle length of linestring coordinates (geographic).
 * @param {Array} coordinates Linestring coordinates.
 * @param {number} radius The sphere radius to use.
 * @return {number} The length (in meters).
 */ function getLengthInternal(coordinates, radius) {
    let length = 0;
    for(let i = 0, ii = coordinates.length; i < ii - 1; ++i)length += getDistance(coordinates[i], coordinates[i + 1], radius);
    return length;
}
function getLength(geometry, options) {
    options = options || {};
    const radius = options.radius || DEFAULT_RADIUS;
    const projection = options.projection || 'EPSG:3857';
    const type = geometry.getType();
    if (type !== 'GeometryCollection') geometry = geometry.clone().transform(projection, 'EPSG:4326');
    let length = 0;
    let coordinates, coords, i, ii, j, jj;
    switch(type){
        case 'Point':
        case 'MultiPoint':
            break;
        case 'LineString':
        case 'LinearRing':
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            length = getLengthInternal(coordinates, radius);
            break;
        case 'MultiLineString':
        case 'Polygon':
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            for(i = 0, ii = coordinates.length; i < ii; ++i)length += getLengthInternal(coordinates[i], radius);
            break;
        case 'MultiPolygon':
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            for(i = 0, ii = coordinates.length; i < ii; ++i){
                coords = coordinates[i];
                for(j = 0, jj = coords.length; j < jj; ++j)length += getLengthInternal(coords[j], radius);
            }
            break;
        case 'GeometryCollection':
            {
                const geometries = /** @type {import("./geom/GeometryCollection.js").default} */ geometry.getGeometries();
                for(i = 0, ii = geometries.length; i < ii; ++i)length += getLength(geometries[i], options);
                break;
            }
        default:
            throw new Error('Unsupported geometry type: ' + type);
    }
    return length;
}
/**
 * Returns the spherical area for a list of coordinates.
 *
 * [Reference](https://trs.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @param {number} radius The sphere radius.
 * @return {number} Area (in square meters).
 */ function getAreaInternal(coordinates, radius) {
    let area = 0;
    const len = coordinates.length;
    let x1 = coordinates[len - 1][0];
    let y1 = coordinates[len - 1][1];
    for(let i = 0; i < len; i++){
        const x2 = coordinates[i][0];
        const y2 = coordinates[i][1];
        area += (0, _mathJs.toRadians)(x2 - x1) * (2 + Math.sin((0, _mathJs.toRadians)(y1)) + Math.sin((0, _mathJs.toRadians)(y2)));
        x1 = x2;
        y1 = y2;
    }
    return area * radius * radius / 2.0;
}
function getArea(geometry, options) {
    options = options || {};
    const radius = options.radius || DEFAULT_RADIUS;
    const projection = options.projection || 'EPSG:3857';
    const type = geometry.getType();
    if (type !== 'GeometryCollection') geometry = geometry.clone().transform(projection, 'EPSG:4326');
    let area = 0;
    let coordinates, coords, i, ii, j, jj;
    switch(type){
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
        case 'LinearRing':
            break;
        case 'Polygon':
            coordinates = /** @type {import("./geom/Polygon.js").default} */ geometry.getCoordinates();
            area = Math.abs(getAreaInternal(coordinates[0], radius));
            for(i = 1, ii = coordinates.length; i < ii; ++i)area -= Math.abs(getAreaInternal(coordinates[i], radius));
            break;
        case 'MultiPolygon':
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            for(i = 0, ii = coordinates.length; i < ii; ++i){
                coords = coordinates[i];
                area += Math.abs(getAreaInternal(coords[0], radius));
                for(j = 1, jj = coords.length; j < jj; ++j)area -= Math.abs(getAreaInternal(coords[j], radius));
            }
            break;
        case 'GeometryCollection':
            {
                const geometries = /** @type {import("./geom/GeometryCollection.js").default} */ geometry.getGeometries();
                for(i = 0, ii = geometries.length; i < ii; ++i)area += getArea(geometries[i], options);
                break;
            }
        default:
            throw new Error('Unsupported geometry type: ' + type);
    }
    return area;
}
function offset(c1, distance, bearing, radius) {
    radius = radius || DEFAULT_RADIUS;
    const lat1 = (0, _mathJs.toRadians)(c1[1]);
    const lon1 = (0, _mathJs.toRadians)(c1[0]);
    const dByR = distance / radius;
    const lat = Math.asin(Math.sin(lat1) * Math.cos(dByR) + Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing));
    const lon = lon1 + Math.atan2(Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1), Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat));
    return [
        (0, _mathJs.toDegrees)(lon),
        (0, _mathJs.toDegrees)(lat)
    ];
}

},{"./math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25bqN":[function(require,module,exports,__globalThis) {
/**
 * @module ol/console
 */ /**
 * @typedef {'info'|'warn'|'error'|'none'} Level
 */ /**
 * @type {Object<Level, number>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Set the logging level.  By default, the level is set to 'info' and all
 * messages will be logged.  Set to 'warn' to only display warnings and errors.
 * Set to 'error' to only display errors.  Set to 'none' to silence all messages.
 *
 * @param {Level} l The new level.
 */ parcelHelpers.export(exports, "setLevel", ()=>setLevel);
/**
 * @param  {...any} args Arguments to log
 */ parcelHelpers.export(exports, "log", ()=>log);
/**
 * @param  {...any} args Arguments to log
 */ parcelHelpers.export(exports, "warn", ()=>warn);
/**
 * @param  {...any} args Arguments to log
 */ parcelHelpers.export(exports, "error", ()=>error);
const levels = {
    info: 1,
    warn: 2,
    error: 3,
    none: 4
};
/**
 * @type {number}
 */ let level = levels.info;
function setLevel(l) {
    level = levels[l];
}
function log(...args) {
    if (level > levels.info) return;
    console.log(...args); // eslint-disable-line no-console
}
function warn(...args) {
    if (level > levels.warn) return;
    console.warn(...args); // eslint-disable-line no-console
}
function error(...args) {
    if (level > levels.error) return;
    console.error(...args); // eslint-disable-line no-console
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDA2L":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/transform
 */ /**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../transform.js").Transform} transform Transform.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transform2D", ()=>transform2D);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} angle Angle.
 * @param {Array<number>} anchor Rotation anchor point.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Scale the coordinates.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} sx Scale factor in the x-direction.
 * @param {number} sy Scale factor in the y-direction.
 * @param {Array<number>} anchor Scale anchor point.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} deltaX Delta X.
 * @param {number} deltaY Delta Y.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */ parcelHelpers.export(exports, "translate", ()=>translate);
function transform2D(flatCoordinates, offset, end, stride, transform, dest) {
    dest = dest ? dest : [];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        const x = flatCoordinates[j];
        const y = flatCoordinates[j + 1];
        dest[i++] = transform[0] * x + transform[2] * y + transform[4];
        dest[i++] = transform[1] * x + transform[3] * y + transform[5];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}
function rotate(flatCoordinates, offset, end, stride, angle, anchor, dest) {
    dest = dest ? dest : [];
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const anchorX = anchor[0];
    const anchorY = anchor[1];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        const deltaX = flatCoordinates[j] - anchorX;
        const deltaY = flatCoordinates[j + 1] - anchorY;
        dest[i++] = anchorX + deltaX * cos - deltaY * sin;
        dest[i++] = anchorY + deltaX * sin + deltaY * cos;
        for(let k = j + 2; k < j + stride; ++k)dest[i++] = flatCoordinates[k];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}
function scale(flatCoordinates, offset, end, stride, sx, sy, anchor, dest) {
    dest = dest ? dest : [];
    const anchorX = anchor[0];
    const anchorY = anchor[1];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        const deltaX = flatCoordinates[j] - anchorX;
        const deltaY = flatCoordinates[j + 1] - anchorY;
        dest[i++] = anchorX + sx * deltaX;
        dest[i++] = anchorY + sy * deltaY;
        for(let k = j + 2; k < j + stride; ++k)dest[i++] = flatCoordinates[k];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}
function translate(flatCoordinates, offset, end, stride, deltaX, deltaY, dest) {
    dest = dest ? dest : [];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        dest[i++] = flatCoordinates[j] + deltaX;
        dest[i++] = flatCoordinates[j + 1] + deltaY;
        for(let k = j + 2; k < j + stride; ++k)dest[i++] = flatCoordinates[k];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TE5l":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/deflate
 */ /**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deflateCoordinate", ()=>deflateCoordinate);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<import("../../coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */ parcelHelpers.export(exports, "deflateCoordinates", ()=>deflateCoordinates);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<import("../../coordinate.js").Coordinate>>} coordinatess Coordinatess.
 * @param {number} stride Stride.
 * @param {Array<number>} [ends] Ends.
 * @return {Array<number>} Ends.
 */ parcelHelpers.export(exports, "deflateCoordinatesArray", ()=>deflateCoordinatesArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} coordinatesss Coordinatesss.
 * @param {number} stride Stride.
 * @param {Array<Array<number>>} [endss] Endss.
 * @return {Array<Array<number>>} Endss.
 */ parcelHelpers.export(exports, "deflateMultiCoordinatesArray", ()=>deflateMultiCoordinatesArray);
function deflateCoordinate(flatCoordinates, offset, coordinate, stride) {
    for(let i = 0, ii = coordinate.length; i < ii; ++i)flatCoordinates[offset++] = coordinate[i];
    return offset;
}
function deflateCoordinates(flatCoordinates, offset, coordinates, stride) {
    for(let i = 0, ii = coordinates.length; i < ii; ++i){
        const coordinate = coordinates[i];
        for(let j = 0; j < stride; ++j)flatCoordinates[offset++] = coordinate[j];
    }
    return offset;
}
function deflateCoordinatesArray(flatCoordinates, offset, coordinatess, stride, ends) {
    ends = ends ? ends : [];
    let i = 0;
    for(let j = 0, jj = coordinatess.length; j < jj; ++j){
        const end = deflateCoordinates(flatCoordinates, offset, coordinatess[j], stride);
        ends[i++] = end;
        offset = end;
    }
    ends.length = i;
    return ends;
}
function deflateMultiCoordinatesArray(flatCoordinates, offset, coordinatesss, stride, endss) {
    endss = endss ? endss : [];
    let i = 0;
    for(let j = 0, jj = coordinatesss.length; j < jj; ++j){
        const ends = deflateCoordinatesArray(flatCoordinates, offset, coordinatesss[j], stride, endss[i]);
        if (ends.length === 0) ends[0] = offset;
        endss[i++] = ends;
        offset = ends[ends.length - 1];
    }
    endss.length = i;
    return endss;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"liabO":[function(require,module,exports,__globalThis) {
/**
 * @module ol/Feature
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Convert the provided object into a feature style function.  Functions passed
 * through unchanged.  Arrays of Style or single style objects wrapped
 * in a new feature style function.
 * @param {!import("./style/Style.js").StyleFunction|!Array<import("./style/Style.js").default>|!import("./style/Style.js").default} obj
 *     A feature style function, a single style, or an array of styles.
 * @return {import("./style/Style.js").StyleFunction} A style function.
 */ parcelHelpers.export(exports, "createStyleFunction", ()=>createStyleFunction);
var _objectJs = require("./Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _eventTypeJs = require("./events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _assertsJs = require("./asserts.js");
var _eventsJs = require("./events.js");
/**
 * @typedef {typeof Feature|typeof import("./render/Feature.js").default} FeatureClass
 */ /**
 * @typedef {Feature|import("./render/Feature.js").default} FeatureLike
 */ /***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *   import("./Observable").OnSignature<import("./ObjectEventType").Types|'change:geometry', import("./Object").ObjectEvent, Return> &
 *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types
 *     |'change:geometry', Return>} FeatureOnSignature
 */ /***
 * @template {import("./geom/Geometry.js").default} [Geometry=import("./geom/Geometry.js").default]
 * @typedef {Object<string, *> & { geometry?: Geometry }} ObjectWithGeometry
 */ /**
 * @classdesc
 * A vector object for geographic features with a geometry and other
 * attribute properties, similar to the features in vector file formats like
 * GeoJSON.
 *
 * Features can be styled individually with `setStyle`; otherwise they use the
 * style of their vector layer.
 *
 * Note that attribute properties are set as {@link module:ol/Object~BaseObject} properties on
 * the feature object, so they are observable, and have get/set accessors.
 *
 * Typically, a feature has a single geometry property. You can set the
 * geometry using the `setGeometry` method and get it with `getGeometry`.
 * It is possible to store more than one geometry on a feature using attribute
 * properties. By default, the geometry used for rendering is identified by
 * the property name `geometry`. If you want to use another geometry property
 * for rendering, use the `setGeometryName` method to change the attribute
 * property associated with the geometry for the feature.  For example:
 *
 * ```js
 *
 * import Feature from 'ol/Feature.js';
 * import Polygon from 'ol/geom/Polygon.js';
 * import Point from 'ol/geom/Point.js';
 *
 * const feature = new Feature({
 *   geometry: new Polygon(polyCoords),
 *   labelPoint: new Point(labelCoords),
 *   name: 'My Polygon',
 * });
 *
 * // get the polygon geometry
 * const poly = feature.getGeometry();
 *
 * // Render the feature as a point using the coordinates from labelPoint
 * feature.setGeometryName('labelPoint');
 *
 * // get the point geometry
 * const point = feature.getGeometry();
 * ```
 *
 * @api
 * @template {import("./geom/Geometry.js").default} [Geometry=import("./geom/Geometry.js").default]
 */ class Feature extends (0, _objectJsDefault.default) {
    /**
   * @param {Geometry|ObjectWithGeometry<Geometry>} [geometryOrProperties]
   *     You may pass a Geometry object directly, or an object literal containing
   *     properties. If you pass an object literal, you may include a Geometry
   *     associated with a `geometry` key.
   */ constructor(geometryOrProperties){
        super();
        /***
     * @type {FeatureOnSignature<import("./events").EventsKey>}
     */ this.on;
        /***
     * @type {FeatureOnSignature<import("./events").EventsKey>}
     */ this.once;
        /***
     * @type {FeatureOnSignature<void>}
     */ this.un;
        /**
     * @private
     * @type {number|string|undefined}
     */ this.id_ = undefined;
        /**
     * @type {string}
     * @private
     */ this.geometryName_ = 'geometry';
        /**
     * User provided style.
     * @private
     * @type {import("./style/Style.js").StyleLike}
     */ this.style_ = null;
        /**
     * @private
     * @type {import("./style/Style.js").StyleFunction|undefined}
     */ this.styleFunction_ = undefined;
        /**
     * @private
     * @type {?import("./events.js").EventsKey}
     */ this.geometryChangeKey_ = null;
        this.addChangeListener(this.geometryName_, this.handleGeometryChanged_);
        if (geometryOrProperties) {
            if (typeof /** @type {?} */ geometryOrProperties.getSimplifiedGeometry === 'function') {
                const geometry = /** @type {Geometry} */ geometryOrProperties;
                this.setGeometry(geometry);
            } else {
                /** @type {Object<string, *>} */ const properties = geometryOrProperties;
                this.setProperties(properties);
            }
        }
    }
    /**
   * Clone this feature. If the original feature has a geometry it
   * is also cloned. The feature id is not set in the clone.
   * @return {Feature<Geometry>} The clone.
   * @api
   */ clone() {
        const clone = /** @type {Feature<Geometry>} */ new Feature(this.hasProperties() ? this.getProperties() : null);
        clone.setGeometryName(this.getGeometryName());
        const geometry = this.getGeometry();
        if (geometry) clone.setGeometry(/** @type {Geometry} */ geometry.clone());
        const style = this.getStyle();
        if (style) clone.setStyle(style);
        return clone;
    }
    /**
   * Get the feature's default geometry.  A feature may have any number of named
   * geometries.  The "default" geometry (the one that is rendered by default) is
   * set when calling {@link module:ol/Feature~Feature#setGeometry}.
   * @return {Geometry|undefined} The default geometry for the feature.
   * @api
   * @observable
   */ getGeometry() {
        return /** @type {Geometry|undefined} */ this.get(this.geometryName_);
    }
    /**
   * Get the feature identifier.  This is a stable identifier for the feature and
   * is either set when reading data from a remote source or set explicitly by
   * calling {@link module:ol/Feature~Feature#setId}.
   * @return {number|string|undefined} Id.
   * @api
   */ getId() {
        return this.id_;
    }
    /**
   * Get the name of the feature's default geometry.  By default, the default
   * geometry is named `geometry`.
   * @return {string} Get the property name associated with the default geometry
   *     for this feature.
   * @api
   */ getGeometryName() {
        return this.geometryName_;
    }
    /**
   * Get the feature's style. Will return what was provided to the
   * {@link module:ol/Feature~Feature#setStyle} method.
   * @return {import("./style/Style.js").StyleLike|undefined} The feature style.
   * @api
   */ getStyle() {
        return this.style_;
    }
    /**
   * Get the feature's style function.
   * @return {import("./style/Style.js").StyleFunction|undefined} Return a function
   * representing the current style of this feature.
   * @api
   */ getStyleFunction() {
        return this.styleFunction_;
    }
    /**
   * @private
   */ handleGeometryChange_() {
        this.changed();
    }
    /**
   * @private
   */ handleGeometryChanged_() {
        if (this.geometryChangeKey_) {
            (0, _eventsJs.unlistenByKey)(this.geometryChangeKey_);
            this.geometryChangeKey_ = null;
        }
        const geometry = this.getGeometry();
        if (geometry) this.geometryChangeKey_ = (0, _eventsJs.listen)(geometry, (0, _eventTypeJsDefault.default).CHANGE, this.handleGeometryChange_, this);
        this.changed();
    }
    /**
   * Set the default geometry for the feature.  This will update the property
   * with the name returned by {@link module:ol/Feature~Feature#getGeometryName}.
   * @param {Geometry|undefined} geometry The new geometry.
   * @api
   * @observable
   */ setGeometry(geometry) {
        this.set(this.geometryName_, geometry);
    }
    /**
   * Set the style for the feature to override the layer style.  This can be a
   * single style object, an array of styles, or a function that takes a
   * resolution and returns an array of styles. To unset the feature style, call
   * `setStyle()` without arguments or a falsey value.
   * @param {import("./style/Style.js").StyleLike} [style] Style for this feature.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */ setStyle(style) {
        this.style_ = style;
        this.styleFunction_ = !style ? undefined : createStyleFunction(style);
        this.changed();
    }
    /**
   * Set the feature id.  The feature id is considered stable and may be used when
   * requesting features or comparing identifiers returned from a remote source.
   * The feature id can be used with the
   * {@link module:ol/source/Vector~VectorSource#getFeatureById} method.
   * @param {number|string|undefined} id The feature id.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */ setId(id) {
        this.id_ = id;
        this.changed();
    }
    /**
   * Set the property name to be used when getting the feature's default geometry.
   * When calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with
   * this name will be returned.
   * @param {string} name The property name of the default geometry.
   * @api
   */ setGeometryName(name) {
        this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_);
        this.geometryName_ = name;
        this.addChangeListener(this.geometryName_, this.handleGeometryChanged_);
        this.handleGeometryChanged_();
    }
}
function createStyleFunction(obj) {
    if (typeof obj === 'function') return obj;
    /**
   * @type {Array<import("./style/Style.js").default>}
   */ let styles;
    if (Array.isArray(obj)) styles = obj;
    else {
        (0, _assertsJs.assert)(typeof /** @type {?} */ obj.getZIndex === 'function', 'Expected an `ol/style/Style` or an array of `ol/style/Style.js`');
        const style = /** @type {import("./style/Style.js").default} */ obj;
        styles = [
            style
        ];
    }
    return function() {
        return styles;
    };
}
exports.default = Feature;

},{"./Object.js":"1zG8z","./events/EventType.js":"hrQJ6","./asserts.js":"e4TiF","./events.js":"dcspA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fDMaj":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/GeometryCollection
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _geometryJs = require("./Geometry.js");
var _geometryJsDefault = parcelHelpers.interopDefault(_geometryJs);
var _extentJs = require("../extent.js");
var _eventsJs = require("../events.js");
/**
 * @classdesc
 * An array of {@link module:ol/geom/Geometry~Geometry} objects.
 *
 * @api
 */ class GeometryCollection extends (0, _geometryJsDefault.default) {
    /**
   * @param {Array<Geometry>} [geometries] Geometries.
   */ constructor(geometries){
        super();
        /**
     * @private
     * @type {Array<Geometry>}
     */ this.geometries_ = geometries ? geometries : null;
        /**
     * @type {Array<import("../events.js").EventsKey>}
     */ this.changeEventsKeys_ = [];
        this.listenGeometriesChange_();
    }
    /**
   * @private
   */ unlistenGeometriesChange_() {
        this.changeEventsKeys_.forEach((0, _eventsJs.unlistenByKey));
        this.changeEventsKeys_.length = 0;
    }
    /**
   * @private
   */ listenGeometriesChange_() {
        if (!this.geometries_) return;
        for(let i = 0, ii = this.geometries_.length; i < ii; ++i)this.changeEventsKeys_.push((0, _eventsJs.listen)(this.geometries_[i], (0, _eventTypeJsDefault.default).CHANGE, this.changed, this));
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!GeometryCollection} Clone.
   * @api
   */ clone() {
        const geometryCollection = new GeometryCollection(null);
        geometryCollection.setGeometries(this.geometries_);
        geometryCollection.applyProperties(this);
        return geometryCollection;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0, _extentJs.closestSquaredDistanceXY)(this.getExtent(), x, y)) return minSquaredDistance;
        const geometries = this.geometries_;
        for(let i = 0, ii = geometries.length; i < ii; ++i)minSquaredDistance = geometries[i].closestPointXY(x, y, closestPoint, minSquaredDistance);
        return minSquaredDistance;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */ containsXY(x, y) {
        const geometries = this.geometries_;
        for(let i = 0, ii = geometries.length; i < ii; ++i){
            if (geometries[i].containsXY(x, y)) return true;
        }
        return false;
    }
    /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */ computeExtent(extent) {
        (0, _extentJs.createOrUpdateEmpty)(extent);
        const geometries = this.geometries_;
        for(let i = 0, ii = geometries.length; i < ii; ++i)(0, _extentJs.extend)(extent, geometries[i].getExtent());
        return extent;
    }
    /**
   * Return the geometries that make up this geometry collection.
   * @return {Array<Geometry>} Geometries.
   * @api
   */ getGeometries() {
        return cloneGeometries(this.geometries_);
    }
    /**
   * @return {Array<Geometry>} Geometries.
   */ getGeometriesArray() {
        return this.geometries_;
    }
    /**
   * @return {Array<Geometry>} Geometries.
   */ getGeometriesArrayRecursive() {
        /** @type {Array<Geometry>} */ let geometriesArray = [];
        const geometries = this.geometries_;
        for(let i = 0, ii = geometries.length; i < ii; ++i)if (geometries[i].getType() === this.getType()) geometriesArray = geometriesArray.concat(/** @type {GeometryCollection} */ geometries[i].getGeometriesArrayRecursive());
        else geometriesArray.push(geometries[i]);
        return geometriesArray;
    }
    /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {GeometryCollection} Simplified GeometryCollection.
   */ getSimplifiedGeometry(squaredTolerance) {
        if (this.simplifiedGeometryRevision !== this.getRevision()) {
            this.simplifiedGeometryMaxMinSquaredTolerance = 0;
            this.simplifiedGeometryRevision = this.getRevision();
        }
        if (squaredTolerance < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && squaredTolerance < this.simplifiedGeometryMaxMinSquaredTolerance) return this;
        const simplifiedGeometries = [];
        const geometries = this.geometries_;
        let simplified = false;
        for(let i = 0, ii = geometries.length; i < ii; ++i){
            const geometry = geometries[i];
            const simplifiedGeometry = geometry.getSimplifiedGeometry(squaredTolerance);
            simplifiedGeometries.push(simplifiedGeometry);
            if (simplifiedGeometry !== geometry) simplified = true;
        }
        if (simplified) {
            const simplifiedGeometryCollection = new GeometryCollection(null);
            simplifiedGeometryCollection.setGeometriesArray(simplifiedGeometries);
            return simplifiedGeometryCollection;
        }
        this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
        return this;
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return 'GeometryCollection';
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        const geometries = this.geometries_;
        for(let i = 0, ii = geometries.length; i < ii; ++i){
            if (geometries[i].intersectsExtent(extent)) return true;
        }
        return false;
    }
    /**
   * @return {boolean} Is empty.
   */ isEmpty() {
        return this.geometries_.length === 0;
    }
    /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */ rotate(angle, anchor) {
        const geometries = this.geometries_;
        for(let i = 0, ii = geometries.length; i < ii; ++i)geometries[i].rotate(angle, anchor);
        this.changed();
    }
    /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */ scale(sx, sy, anchor) {
        if (!anchor) anchor = (0, _extentJs.getCenter)(this.getExtent());
        const geometries = this.geometries_;
        for(let i = 0, ii = geometries.length; i < ii; ++i)geometries[i].scale(sx, sy, anchor);
        this.changed();
    }
    /**
   * Set the geometries that make up this geometry collection.
   * @param {Array<Geometry>} geometries Geometries.
   * @api
   */ setGeometries(geometries) {
        this.setGeometriesArray(cloneGeometries(geometries));
    }
    /**
   * @param {Array<Geometry>} geometries Geometries.
   */ setGeometriesArray(geometries) {
        this.unlistenGeometriesChange_();
        this.geometries_ = geometries;
        this.listenGeometriesChange_();
        this.changed();
    }
    /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   */ applyTransform(transformFn) {
        const geometries = this.geometries_;
        for(let i = 0, ii = geometries.length; i < ii; ++i)geometries[i].applyTransform(transformFn);
        this.changed();
    }
    /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */ translate(deltaX, deltaY) {
        const geometries = this.geometries_;
        for(let i = 0, ii = geometries.length; i < ii; ++i)geometries[i].translate(deltaX, deltaY);
        this.changed();
    }
    /**
   * Clean up.
   */ disposeInternal() {
        this.unlistenGeometriesChange_();
        super.disposeInternal();
    }
}
/**
 * @param {Array<Geometry>} geometries Geometries.
 * @return {Array<Geometry>} Cloned geometries.
 */ function cloneGeometries(geometries) {
    const clonedGeometries = [];
    for(let i = 0, ii = geometries.length; i < ii; ++i)clonedGeometries.push(geometries[i].clone());
    return clonedGeometries;
}
exports.default = GeometryCollection;

},{"../events/EventType.js":"hrQJ6","./Geometry.js":"4ya62","../extent.js":"6YrVc","../events.js":"dcspA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLUiq":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/LineString
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _simpleGeometryJs = require("./SimpleGeometry.js");
var _simpleGeometryJsDefault = parcelHelpers.interopDefault(_simpleGeometryJs);
var _closestJs = require("./flat/closest.js");
var _extentJs = require("../extent.js");
var _deflateJs = require("./flat/deflate.js");
var _simplifyJs = require("./flat/simplify.js");
var _arrayJs = require("../array.js");
var _segmentsJs = require("./flat/segments.js");
var _inflateJs = require("./flat/inflate.js");
var _interpolateJs = require("./flat/interpolate.js");
var _intersectsextentJs = require("./flat/intersectsextent.js");
var _lengthJs = require("./flat/length.js");
/**
 * @classdesc
 * Linestring geometry.
 *
 * @api
 */ class LineString extends (0, _simpleGeometryJsDefault.default) {
    /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */ constructor(coordinates, layout){
        super();
        /**
     * @private
     * @type {import("../coordinate.js").Coordinate|null}
     */ this.flatMidpoint_ = null;
        /**
     * @private
     * @type {number}
     */ this.flatMidpointRevision_ = -1;
        /**
     * @private
     * @type {number}
     */ this.maxDelta_ = -1;
        /**
     * @private
     * @type {number}
     */ this.maxDeltaRevision_ = -1;
        if (layout !== undefined && !Array.isArray(coordinates[0])) this.setFlatCoordinates(layout, /** @type {Array<number>} */ coordinates);
        else this.setCoordinates(/** @type {Array<import("../coordinate.js").Coordinate>} */ coordinates, layout);
    }
    /**
   * Append the passed coordinate to the coordinates of the linestring.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @api
   */ appendCoordinate(coordinate) {
        (0, _arrayJs.extend)(this.flatCoordinates, coordinate);
        this.changed();
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!LineString} Clone.
   * @api
   */ clone() {
        const lineString = new LineString(this.flatCoordinates.slice(), this.layout);
        lineString.applyProperties(this);
        return lineString;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0, _extentJs.closestSquaredDistanceXY)(this.getExtent(), x, y)) return minSquaredDistance;
        if (this.maxDeltaRevision_ != this.getRevision()) {
            this.maxDelta_ = Math.sqrt((0, _closestJs.maxSquaredDelta)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0));
            this.maxDeltaRevision_ = this.getRevision();
        }
        return (0, _closestJs.assignClosestPoint)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, false, x, y, closestPoint, minSquaredDistance);
    }
    /**
   * Iterate over each segment, calling the provided callback.
   * If the callback returns a truthy value the function returns that
   * value immediately. Otherwise the function returns `false`.
   *
   * @param {function(this: S, import("../coordinate.js").Coordinate, import("../coordinate.js").Coordinate): T} callback Function
   *     called for each segment. The function will receive two arguments, the start and end coordinates of the segment.
   * @return {T|boolean} Value.
   * @template T,S
   * @api
   */ forEachSegment(callback) {
        return (0, _segmentsJs.forEach)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, callback);
    }
    /**
   * Returns the coordinate at `m` using linear interpolation, or `null` if no
   * such coordinate exists.
   *
   * `extrapolate` controls extrapolation beyond the range of Ms in the
   * MultiLineString. If `extrapolate` is `true` then Ms less than the first
   * M will return the first coordinate and Ms greater than the last M will
   * return the last coordinate.
   *
   * @param {number} m M.
   * @param {boolean} [extrapolate] Extrapolate. Default is `false`.
   * @return {import("../coordinate.js").Coordinate|null} Coordinate.
   * @api
   */ getCoordinateAtM(m, extrapolate) {
        if (this.layout != 'XYM' && this.layout != 'XYZM') return null;
        extrapolate = extrapolate !== undefined ? extrapolate : false;
        return (0, _interpolateJs.lineStringCoordinateAtM)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, m, extrapolate);
    }
    /**
   * Return the coordinates of the linestring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */ getCoordinates() {
        return (0, _inflateJs.inflateCoordinates)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
    }
    /**
   * Return the coordinate at the provided fraction along the linestring.
   * The `fraction` is a number between 0 and 1, where 0 is the start of the
   * linestring and 1 is the end.
   * @param {number} fraction Fraction.
   * @param {import("../coordinate.js").Coordinate} [dest] Optional coordinate whose values will
   *     be modified. If not provided, a new coordinate will be returned.
   * @return {import("../coordinate.js").Coordinate} Coordinate of the interpolated point.
   * @api
   */ getCoordinateAt(fraction, dest) {
        return (0, _interpolateJs.interpolatePoint)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, fraction, dest, this.stride);
    }
    /**
   * Return the length of the linestring on projected plane.
   * @return {number} Length (on projected plane).
   * @api
   */ getLength() {
        return (0, _lengthJs.lineStringLength)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
    }
    /**
   * @return {Array<number>} Flat midpoint.
   */ getFlatMidpoint() {
        if (this.flatMidpointRevision_ != this.getRevision()) {
            this.flatMidpoint_ = this.getCoordinateAt(0.5, this.flatMidpoint_ ?? undefined);
            this.flatMidpointRevision_ = this.getRevision();
        }
        return /** @type {Array<number>} */ this.flatMidpoint_;
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LineString} Simplified LineString.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        /** @type {Array<number>} */ const simplifiedFlatCoordinates = [];
        simplifiedFlatCoordinates.length = (0, _simplifyJs.douglasPeucker)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, squaredTolerance, simplifiedFlatCoordinates, 0);
        return new LineString(simplifiedFlatCoordinates, 'XY');
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return 'LineString';
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return (0, _intersectsextentJs.intersectsLineString)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, extent);
    }
    /**
   * Set the coordinates of the linestring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 1);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        this.flatCoordinates.length = (0, _deflateJs.deflateCoordinates)(this.flatCoordinates, 0, coordinates, this.stride);
        this.changed();
    }
}
exports.default = LineString;

},{"./SimpleGeometry.js":"hLwk3","./flat/closest.js":"fi6H5","../extent.js":"6YrVc","./flat/deflate.js":"3TE5l","./flat/simplify.js":"jsqc5","../array.js":"1Fbic","./flat/segments.js":"e7gWa","./flat/inflate.js":"4Rpju","./flat/interpolate.js":"dh8ns","./flat/intersectsextent.js":"7x08H","./flat/length.js":"X5sUU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fi6H5":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/closest
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return the squared of the largest distance between any pair of consecutive
 * coordinates.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */ parcelHelpers.export(exports, "maxSquaredDelta", ()=>maxSquaredDelta);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */ parcelHelpers.export(exports, "arrayMaxSquaredDelta", ()=>arrayMaxSquaredDelta);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */ parcelHelpers.export(exports, "multiArrayMaxSquaredDelta", ()=>multiArrayMaxSquaredDelta);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */ parcelHelpers.export(exports, "assignClosestPoint", ()=>assignClosestPoint);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */ parcelHelpers.export(exports, "assignClosestArrayPoint", ()=>assignClosestArrayPoint);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */ parcelHelpers.export(exports, "assignClosestMultiArrayPoint", ()=>assignClosestMultiArrayPoint);
var _mathJs = require("../../math.js");
/**
 * Returns the point on the 2D line segment flatCoordinates[offset1] to
 * flatCoordinates[offset2] that is closest to the point (x, y).  Extra
 * dimensions are linearly interpolated.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset1 Offset 1.
 * @param {number} offset2 Offset 2.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 */ function assignClosest(flatCoordinates, offset1, offset2, stride, x, y, closestPoint) {
    const x1 = flatCoordinates[offset1];
    const y1 = flatCoordinates[offset1 + 1];
    const dx = flatCoordinates[offset2] - x1;
    const dy = flatCoordinates[offset2 + 1] - y1;
    let offset;
    if (dx === 0 && dy === 0) offset = offset1;
    else {
        const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) offset = offset2;
        else if (t > 0) {
            for(let i = 0; i < stride; ++i)closestPoint[i] = (0, _mathJs.lerp)(flatCoordinates[offset1 + i], flatCoordinates[offset2 + i], t);
            closestPoint.length = stride;
            return;
        } else offset = offset1;
    }
    for(let i = 0; i < stride; ++i)closestPoint[i] = flatCoordinates[offset + i];
    closestPoint.length = stride;
}
function maxSquaredDelta(flatCoordinates, offset, end, stride, max) {
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    for(offset += stride; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        const squaredDelta = (0, _mathJs.squaredDistance)(x1, y1, x2, y2);
        if (squaredDelta > max) max = squaredDelta;
        x1 = x2;
        y1 = y2;
    }
    return max;
}
function arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        max = maxSquaredDelta(flatCoordinates, offset, end, stride, max);
        offset = end;
    }
    return max;
}
function multiArrayMaxSquaredDelta(flatCoordinates, offset, endss, stride, max) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        max = arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max);
        offset = ends[ends.length - 1];
    }
    return max;
}
function assignClosestPoint(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint) {
    if (offset == end) return minSquaredDistance;
    let i, squaredDistance;
    if (maxDelta === 0) {
        // All points are identical, so just test the first point.
        squaredDistance = (0, _mathJs.squaredDistance)(x, y, flatCoordinates[offset], flatCoordinates[offset + 1]);
        if (squaredDistance < minSquaredDistance) {
            for(i = 0; i < stride; ++i)closestPoint[i] = flatCoordinates[offset + i];
            closestPoint.length = stride;
            return squaredDistance;
        }
        return minSquaredDistance;
    }
    tmpPoint = tmpPoint ? tmpPoint : [
        NaN,
        NaN
    ];
    let index = offset + stride;
    while(index < end){
        assignClosest(flatCoordinates, index - stride, index, stride, x, y, tmpPoint);
        squaredDistance = (0, _mathJs.squaredDistance)(x, y, tmpPoint[0], tmpPoint[1]);
        if (squaredDistance < minSquaredDistance) {
            minSquaredDistance = squaredDistance;
            for(i = 0; i < stride; ++i)closestPoint[i] = tmpPoint[i];
            closestPoint.length = stride;
            index += stride;
        } else // Skip ahead multiple points, because we know that all the skipped
        // points cannot be any closer than the closest point we have found so
        // far.  We know this because we know how close the current point is, how
        // close the closest point we have found so far is, and the maximum
        // distance between consecutive points.  For example, if we're currently
        // at distance 10, the best we've found so far is 3, and that the maximum
        // distance between consecutive points is 2, then we'll need to skip at
        // least (10 - 3) / 2 == 3 (rounded down) points to have any chance of
        // finding a closer point.  We use Math.max(..., 1) to ensure that we
        // always advance at least one point, to avoid an infinite loop.
        index += stride * Math.max((Math.sqrt(squaredDistance) - Math.sqrt(minSquaredDistance)) / maxDelta | 0, 1);
    }
    if (isRing) {
        // Check the closing segment.
        assignClosest(flatCoordinates, end - stride, offset, stride, x, y, tmpPoint);
        squaredDistance = (0, _mathJs.squaredDistance)(x, y, tmpPoint[0], tmpPoint[1]);
        if (squaredDistance < minSquaredDistance) {
            minSquaredDistance = squaredDistance;
            for(i = 0; i < stride; ++i)closestPoint[i] = tmpPoint[i];
            closestPoint.length = stride;
        }
    }
    return minSquaredDistance;
}
function assignClosestArrayPoint(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint) {
    tmpPoint = tmpPoint ? tmpPoint : [
        NaN,
        NaN
    ];
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        minSquaredDistance = assignClosestPoint(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint);
        offset = end;
    }
    return minSquaredDistance;
}
function assignClosestMultiArrayPoint(flatCoordinates, offset, endss, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint) {
    tmpPoint = tmpPoint ? tmpPoint : [
        NaN,
        NaN
    ];
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        minSquaredDistance = assignClosestArrayPoint(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint);
        offset = ends[ends.length - 1];
    }
    return minSquaredDistance;
}

},{"../../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsqc5":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/simplify
 */ // Based on simplify-js https://github.com/mourner/simplify-js
// Copyright (c) 2012, Vladimir Agafonkin
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//    1. Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//
//    2. Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {boolean} highQuality Highest quality.
 * @param {Array<number>} [simplifiedFlatCoordinates] Simplified flat
 *     coordinates.
 * @return {Array<number>} Simplified line string.
 */ parcelHelpers.export(exports, "simplifyLineString", ()=>simplifyLineString);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "douglasPeucker", ()=>douglasPeucker);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<number>} simplifiedEnds Simplified ends.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "douglasPeuckerArray", ()=>douglasPeuckerArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<Array<number>>} simplifiedEndss Simplified endss.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "douglasPeuckerMultiArray", ()=>douglasPeuckerMultiArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "radialDistance", ()=>radialDistance);
/**
 * @param {number} value Value.
 * @param {number} tolerance Tolerance.
 * @return {number} Rounded value.
 */ parcelHelpers.export(exports, "snap", ()=>snap);
/**
 * Simplifies a line string using an algorithm designed by Tim Schaub.
 * Coordinates are snapped to the nearest value in a virtual grid and
 * consecutive duplicate coordinates are discarded.  This effectively preserves
 * topology as the simplification of any subsection of a line string is
 * independent of the rest of the line string.  This means that, for examples,
 * the common edge between two polygons will be simplified to the same line
 * string independently in both polygons.  This implementation uses a single
 * pass over the coordinates and eliminates intermediate collinear points.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "quantize", ()=>quantize);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<number>} simplifiedEnds Simplified ends.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "quantizeArray", ()=>quantizeArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<Array<number>>} simplifiedEndss Simplified endss.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "quantizeMultiArray", ()=>quantizeMultiArray);
var _mathJs = require("../../math.js");
function simplifyLineString(flatCoordinates, offset, end, stride, squaredTolerance, highQuality, simplifiedFlatCoordinates) {
    simplifiedFlatCoordinates = simplifiedFlatCoordinates !== undefined ? simplifiedFlatCoordinates : [];
    if (!highQuality) {
        end = radialDistance(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, 0);
        flatCoordinates = simplifiedFlatCoordinates;
        offset = 0;
        stride = 2;
    }
    simplifiedFlatCoordinates.length = douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, 0);
    return simplifiedFlatCoordinates;
}
function douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    const n = (end - offset) / stride;
    if (n < 3) {
        for(; offset < end; offset += stride){
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + 1];
        }
        return simplifiedOffset;
    }
    /** @type {Array<number>} */ const markers = new Array(n);
    markers[0] = 1;
    markers[n - 1] = 1;
    /** @type {Array<number>} */ const stack = [
        offset,
        end - stride
    ];
    let index = 0;
    while(stack.length > 0){
        const last = stack.pop();
        const first = stack.pop();
        let maxSquaredDistance = 0;
        const x1 = flatCoordinates[first];
        const y1 = flatCoordinates[first + 1];
        const x2 = flatCoordinates[last];
        const y2 = flatCoordinates[last + 1];
        for(let i = first + stride; i < last; i += stride){
            const x = flatCoordinates[i];
            const y = flatCoordinates[i + 1];
            const squaredDistance = (0, _mathJs.squaredSegmentDistance)(x, y, x1, y1, x2, y2);
            if (squaredDistance > maxSquaredDistance) {
                index = i;
                maxSquaredDistance = squaredDistance;
            }
        }
        if (maxSquaredDistance > squaredTolerance) {
            markers[(index - offset) / stride] = 1;
            if (first + stride < index) stack.push(first, index);
            if (index + stride < last) stack.push(index, last);
        }
    }
    for(let i = 0; i < n; ++i)if (markers[i]) {
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride];
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride + 1];
    }
    return simplifiedOffset;
}
function douglasPeuckerArray(flatCoordinates, offset, ends, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        simplifiedOffset = douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset);
        simplifiedEnds.push(simplifiedOffset);
        offset = end;
    }
    return simplifiedOffset;
}
function douglasPeuckerMultiArray(flatCoordinates, offset, endss, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEndss) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        /** @type {Array<number>} */ const simplifiedEnds = [];
        simplifiedOffset = douglasPeuckerArray(flatCoordinates, offset, ends, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds);
        simplifiedEndss.push(simplifiedEnds);
        offset = ends[ends.length - 1];
    }
    return simplifiedOffset;
}
function radialDistance(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    if (end <= offset + stride) {
        // zero or one point, no simplification possible, so copy and return
        for(; offset < end; offset += stride){
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + 1];
        }
        return simplifiedOffset;
    }
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    // copy first point
    simplifiedFlatCoordinates[simplifiedOffset++] = x1;
    simplifiedFlatCoordinates[simplifiedOffset++] = y1;
    let x2 = x1;
    let y2 = y1;
    for(offset += stride; offset < end; offset += stride){
        x2 = flatCoordinates[offset];
        y2 = flatCoordinates[offset + 1];
        if ((0, _mathJs.squaredDistance)(x1, y1, x2, y2) > squaredTolerance) {
            // copy point at offset
            simplifiedFlatCoordinates[simplifiedOffset++] = x2;
            simplifiedFlatCoordinates[simplifiedOffset++] = y2;
            x1 = x2;
            y1 = y2;
        }
    }
    if (x2 != x1 || y2 != y1) {
        // copy last point
        simplifiedFlatCoordinates[simplifiedOffset++] = x2;
        simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    }
    return simplifiedOffset;
}
function snap(value, tolerance) {
    return tolerance * Math.round(value / tolerance);
}
function quantize(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    // do nothing if the line is empty
    if (offset == end) return simplifiedOffset;
    // snap the first coordinate (P1)
    let x1 = snap(flatCoordinates[offset], tolerance);
    let y1 = snap(flatCoordinates[offset + 1], tolerance);
    offset += stride;
    // add the first coordinate to the output
    simplifiedFlatCoordinates[simplifiedOffset++] = x1;
    simplifiedFlatCoordinates[simplifiedOffset++] = y1;
    // find the next coordinate that does not snap to the same value as the first
    // coordinate (P2)
    let x2, y2;
    do {
        x2 = snap(flatCoordinates[offset], tolerance);
        y2 = snap(flatCoordinates[offset + 1], tolerance);
        offset += stride;
        if (offset == end) {
            // all coordinates snap to the same value, the line collapses to a point
            // push the last snapped value anyway to ensure that the output contains
            // at least two points
            // FIXME should we really return at least two points anyway?
            simplifiedFlatCoordinates[simplifiedOffset++] = x2;
            simplifiedFlatCoordinates[simplifiedOffset++] = y2;
            return simplifiedOffset;
        }
    }while (x2 == x1 && y2 == y1);
    while(offset < end){
        // snap the next coordinate (P3)
        const x3 = snap(flatCoordinates[offset], tolerance);
        const y3 = snap(flatCoordinates[offset + 1], tolerance);
        offset += stride;
        // skip P3 if it is equal to P2
        if (x3 == x2 && y3 == y2) continue;
        // calculate the delta between P1 and P2
        const dx1 = x2 - x1;
        const dy1 = y2 - y1;
        // calculate the delta between P3 and P1
        const dx2 = x3 - x1;
        const dy2 = y3 - y1;
        // if P1, P2, and P3 are colinear and P3 is further from P1 than P2 is from
        // P1 in the same direction then P2 is on the straight line between P1 and
        // P3
        if (dx1 * dy2 == dy1 * dx2 && (dx1 < 0 && dx2 < dx1 || dx1 == dx2 || dx1 > 0 && dx2 > dx1) && (dy1 < 0 && dy2 < dy1 || dy1 == dy2 || dy1 > 0 && dy2 > dy1)) {
            // discard P2 and set P2 = P3
            x2 = x3;
            y2 = y3;
            continue;
        }
        // either P1, P2, and P3 are not colinear, or they are colinear but P3 is
        // between P3 and P1 or on the opposite half of the line to P2.  add P2,
        // and continue with P1 = P2 and P2 = P3
        simplifiedFlatCoordinates[simplifiedOffset++] = x2;
        simplifiedFlatCoordinates[simplifiedOffset++] = y2;
        x1 = x2;
        y1 = y2;
        x2 = x3;
        y2 = y3;
    }
    // add the last point (P2)
    simplifiedFlatCoordinates[simplifiedOffset++] = x2;
    simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    return simplifiedOffset;
}
function quantizeArray(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        simplifiedOffset = quantize(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset);
        simplifiedEnds.push(simplifiedOffset);
        offset = end;
    }
    return simplifiedOffset;
}
function quantizeMultiArray(flatCoordinates, offset, endss, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEndss) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        /** @type {Array<number>} */ const simplifiedEnds = [];
        simplifiedOffset = quantizeArray(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds);
        simplifiedEndss.push(simplifiedEnds);
        offset = ends[ends.length - 1];
    }
    return simplifiedOffset;
}

},{"../../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e7gWa":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/segments
 */ /**
 * This function calls `callback` for each segment of the flat coordinates
 * array. If the callback returns a truthy value the function returns that
 * value immediately. Otherwise the function returns `false`.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {function(import("../../coordinate.js").Coordinate, import("../../coordinate.js").Coordinate): T} callback Function
 *     called for each segment.
 * @return {T|boolean} Value.
 * @template T
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forEach", ()=>forEach);
function forEach(flatCoordinates, offset, end, stride, callback) {
    let ret;
    offset += stride;
    for(; offset < end; offset += stride){
        ret = callback(flatCoordinates.slice(offset - stride, offset), flatCoordinates.slice(offset, offset + stride));
        if (ret) return ret;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Rpju":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/inflate
 */ /**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Array<import("../../coordinate.js").Coordinate>} [coordinates] Coordinates.
 * @return {Array<import("../../coordinate.js").Coordinate>} Coordinates.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inflateCoordinates", ()=>inflateCoordinates);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {Array<Array<import("../../coordinate.js").Coordinate>>} [coordinatess] Coordinatess.
 * @return {Array<Array<import("../../coordinate.js").Coordinate>>} Coordinatess.
 */ parcelHelpers.export(exports, "inflateCoordinatesArray", ()=>inflateCoordinatesArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} [coordinatesss]
 *     Coordinatesss.
 * @return {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} Coordinatesss.
 */ parcelHelpers.export(exports, "inflateMultiCoordinatesArray", ()=>inflateMultiCoordinatesArray);
function inflateCoordinates(flatCoordinates, offset, end, stride, coordinates) {
    coordinates = coordinates !== undefined ? coordinates : [];
    let i = 0;
    for(let j = offset; j < end; j += stride)coordinates[i++] = flatCoordinates.slice(j, j + stride);
    coordinates.length = i;
    return coordinates;
}
function inflateCoordinatesArray(flatCoordinates, offset, ends, stride, coordinatess) {
    coordinatess = coordinatess !== undefined ? coordinatess : [];
    let i = 0;
    for(let j = 0, jj = ends.length; j < jj; ++j){
        const end = ends[j];
        coordinatess[i++] = inflateCoordinates(flatCoordinates, offset, end, stride, coordinatess[i]);
        offset = end;
    }
    coordinatess.length = i;
    return coordinatess;
}
function inflateMultiCoordinatesArray(flatCoordinates, offset, endss, stride, coordinatesss) {
    coordinatesss = coordinatesss !== undefined ? coordinatesss : [];
    let i = 0;
    for(let j = 0, jj = endss.length; j < jj; ++j){
        const ends = endss[j];
        coordinatesss[i++] = ends.length === 1 && ends[0] === offset ? [] : inflateCoordinatesArray(flatCoordinates, offset, ends, stride, coordinatesss[i]);
        offset = ends[ends.length - 1];
    }
    coordinatesss.length = i;
    return coordinatesss;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dh8ns":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/interpolate
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} fraction Fraction.
 * @param {Array<number>} [dest] Destination.
 * @param {number} [dimension] Destination dimension (default is `2`)
 * @return {Array<number>} Destination.
 */ parcelHelpers.export(exports, "interpolatePoint", ()=>interpolatePoint);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} m M.
 * @param {boolean} extrapolate Extrapolate.
 * @return {import("../../coordinate.js").Coordinate|null} Coordinate.
 */ parcelHelpers.export(exports, "lineStringCoordinateAtM", ()=>lineStringCoordinateAtM);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} m M.
 * @param {boolean} extrapolate Extrapolate.
 * @param {boolean} interpolate Interpolate.
 * @return {import("../../coordinate.js").Coordinate|null} Coordinate.
 */ parcelHelpers.export(exports, "lineStringsCoordinateAtM", ()=>lineStringsCoordinateAtM);
var _arrayJs = require("../../array.js");
var _mathJs = require("../../math.js");
function interpolatePoint(flatCoordinates, offset, end, stride, fraction, dest, dimension) {
    let o, t;
    const n = (end - offset) / stride;
    if (n === 1) o = offset;
    else if (n === 2) {
        o = offset;
        t = fraction;
    } else if (n !== 0) {
        let x1 = flatCoordinates[offset];
        let y1 = flatCoordinates[offset + 1];
        let length = 0;
        const cumulativeLengths = [
            0
        ];
        for(let i = offset + stride; i < end; i += stride){
            const x2 = flatCoordinates[i];
            const y2 = flatCoordinates[i + 1];
            length += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            cumulativeLengths.push(length);
            x1 = x2;
            y1 = y2;
        }
        const target = fraction * length;
        const index = (0, _arrayJs.binarySearch)(cumulativeLengths, target);
        if (index < 0) {
            t = (target - cumulativeLengths[-index - 2]) / (cumulativeLengths[-index - 1] - cumulativeLengths[-index - 2]);
            o = offset + (-index - 2) * stride;
        } else o = offset + index * stride;
    }
    dimension = dimension > 1 ? dimension : 2;
    dest = dest ? dest : new Array(dimension);
    for(let i = 0; i < dimension; ++i)dest[i] = o === undefined ? NaN : t === undefined ? flatCoordinates[o + i] : (0, _mathJs.lerp)(flatCoordinates[o + i], flatCoordinates[o + stride + i], t);
    return dest;
}
function lineStringCoordinateAtM(flatCoordinates, offset, end, stride, m, extrapolate) {
    if (end == offset) return null;
    let coordinate;
    if (m < flatCoordinates[offset + stride - 1]) {
        if (extrapolate) {
            coordinate = flatCoordinates.slice(offset, offset + stride);
            coordinate[stride - 1] = m;
            return coordinate;
        }
        return null;
    }
    if (flatCoordinates[end - 1] < m) {
        if (extrapolate) {
            coordinate = flatCoordinates.slice(end - stride, end);
            coordinate[stride - 1] = m;
            return coordinate;
        }
        return null;
    }
    // FIXME use O(1) search
    if (m == flatCoordinates[offset + stride - 1]) return flatCoordinates.slice(offset, offset + stride);
    let lo = offset / stride;
    let hi = end / stride;
    while(lo < hi){
        const mid = lo + hi >> 1;
        if (m < flatCoordinates[(mid + 1) * stride - 1]) hi = mid;
        else lo = mid + 1;
    }
    const m0 = flatCoordinates[lo * stride - 1];
    if (m == m0) return flatCoordinates.slice((lo - 1) * stride, (lo - 1) * stride + stride);
    const m1 = flatCoordinates[(lo + 1) * stride - 1];
    const t = (m - m0) / (m1 - m0);
    coordinate = [];
    for(let i = 0; i < stride - 1; ++i)coordinate.push((0, _mathJs.lerp)(flatCoordinates[(lo - 1) * stride + i], flatCoordinates[lo * stride + i], t));
    coordinate.push(m);
    return coordinate;
}
function lineStringsCoordinateAtM(flatCoordinates, offset, ends, stride, m, extrapolate, interpolate) {
    if (interpolate) return lineStringCoordinateAtM(flatCoordinates, offset, ends[ends.length - 1], stride, m, extrapolate);
    let coordinate;
    if (m < flatCoordinates[stride - 1]) {
        if (extrapolate) {
            coordinate = flatCoordinates.slice(0, stride);
            coordinate[stride - 1] = m;
            return coordinate;
        }
        return null;
    }
    if (flatCoordinates[flatCoordinates.length - 1] < m) {
        if (extrapolate) {
            coordinate = flatCoordinates.slice(flatCoordinates.length - stride);
            coordinate[stride - 1] = m;
            return coordinate;
        }
        return null;
    }
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        if (offset == end) continue;
        if (m < flatCoordinates[offset + stride - 1]) return null;
        if (m <= flatCoordinates[end - 1]) return lineStringCoordinateAtM(flatCoordinates, offset, end, stride, m, false);
        offset = end;
    }
    return null;
}

},{"../../array.js":"1Fbic","../../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7x08H":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/intersectsextent
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */ parcelHelpers.export(exports, "intersectsLineString", ()=>intersectsLineString);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */ parcelHelpers.export(exports, "intersectsLineStringArray", ()=>intersectsLineStringArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */ parcelHelpers.export(exports, "intersectsLinearRing", ()=>intersectsLinearRing);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */ parcelHelpers.export(exports, "intersectsLinearRingArray", ()=>intersectsLinearRingArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */ parcelHelpers.export(exports, "intersectsLinearRingMultiArray", ()=>intersectsLinearRingMultiArray);
var _extentJs = require("../../extent.js");
var _segmentsJs = require("./segments.js");
var _containsJs = require("./contains.js");
function intersectsLineString(flatCoordinates, offset, end, stride, extent) {
    const coordinatesExtent = (0, _extentJs.extendFlatCoordinates)((0, _extentJs.createEmpty)(), flatCoordinates, offset, end, stride);
    if (!(0, _extentJs.intersects)(extent, coordinatesExtent)) return false;
    if ((0, _extentJs.containsExtent)(extent, coordinatesExtent)) return true;
    if (coordinatesExtent[0] >= extent[0] && coordinatesExtent[2] <= extent[2]) return true;
    if (coordinatesExtent[1] >= extent[1] && coordinatesExtent[3] <= extent[3]) return true;
    return (0, _segmentsJs.forEach)(flatCoordinates, offset, end, stride, /**
     * @param {import("../../coordinate.js").Coordinate} point1 Start point.
     * @param {import("../../coordinate.js").Coordinate} point2 End point.
     * @return {boolean} `true` if the segment and the extent intersect,
     *     `false` otherwise.
     */ function(point1, point2) {
        return (0, _extentJs.intersectsSegment)(extent, point1, point2);
    });
}
function intersectsLineStringArray(flatCoordinates, offset, ends, stride, extent) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        if (intersectsLineString(flatCoordinates, offset, ends[i], stride, extent)) return true;
        offset = ends[i];
    }
    return false;
}
function intersectsLinearRing(flatCoordinates, offset, end, stride, extent) {
    if (intersectsLineString(flatCoordinates, offset, end, stride, extent)) return true;
    if ((0, _containsJs.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[0], extent[1])) return true;
    if ((0, _containsJs.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[0], extent[3])) return true;
    if ((0, _containsJs.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[2], extent[1])) return true;
    if ((0, _containsJs.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[2], extent[3])) return true;
    return false;
}
function intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent) {
    if (!intersectsLinearRing(flatCoordinates, offset, ends[0], stride, extent)) return false;
    if (ends.length === 1) return true;
    for(let i = 1, ii = ends.length; i < ii; ++i)if ((0, _containsJs.linearRingContainsExtent)(flatCoordinates, ends[i - 1], ends[i], stride, extent)) {
        if (!intersectsLineString(flatCoordinates, ends[i - 1], ends[i], stride, extent)) return false;
    }
    return true;
}
function intersectsLinearRingMultiArray(flatCoordinates, offset, endss, stride, extent) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        if (intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent)) return true;
        offset = ends[ends.length - 1];
    }
    return false;
}

},{"../../extent.js":"6YrVc","./segments.js":"e7gWa","./contains.js":"eArlN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eArlN":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/contains
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} Contains extent.
 */ parcelHelpers.export(exports, "linearRingContainsExtent", ()=>linearRingContainsExtent);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */ parcelHelpers.export(exports, "linearRingContainsXY", ()=>linearRingContainsXY);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */ parcelHelpers.export(exports, "linearRingsContainsXY", ()=>linearRingsContainsXY);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */ parcelHelpers.export(exports, "linearRingssContainsXY", ()=>linearRingssContainsXY);
var _extentJs = require("../../extent.js");
function linearRingContainsExtent(flatCoordinates, offset, end, stride, extent) {
    const outside = (0, _extentJs.forEachCorner)(extent, /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */ function(coordinate) {
        return !linearRingContainsXY(flatCoordinates, offset, end, stride, coordinate[0], coordinate[1]);
    });
    return !outside;
}
function linearRingContainsXY(flatCoordinates, offset, end, stride, x, y) {
    // https://geomalgorithms.com/a03-_inclusion.html
    // Copyright 2000 softSurfer, 2012 Dan Sunday
    // This code may be freely used and modified for any purpose
    // providing that this copyright notice is included with it.
    // SoftSurfer makes no warranty for this code, and cannot be held
    // liable for any real or imagined damage resulting from its use.
    // Users of this code must verify correctness for their application.
    let wn = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for(; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        if (y1 <= y) {
            if (y2 > y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) > 0) wn++;
        } else if (y2 <= y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) < 0) wn--;
        x1 = x2;
        y1 = y2;
    }
    return wn !== 0;
}
function linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y) {
    if (ends.length === 0) return false;
    if (!linearRingContainsXY(flatCoordinates, offset, ends[0], stride, x, y)) return false;
    for(let i = 1, ii = ends.length; i < ii; ++i){
        if (linearRingContainsXY(flatCoordinates, ends[i - 1], ends[i], stride, x, y)) return false;
    }
    return true;
}
function linearRingssContainsXY(flatCoordinates, offset, endss, stride, x, y) {
    if (endss.length === 0) return false;
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        if (linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y)) return true;
        offset = ends[ends.length - 1];
    }
    return false;
}

},{"../../extent.js":"6YrVc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"X5sUU":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/length
 */ /**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Length.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lineStringLength", ()=>lineStringLength);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Perimeter.
 */ parcelHelpers.export(exports, "linearRingLength", ()=>linearRingLength);
function lineStringLength(flatCoordinates, offset, end, stride) {
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    let length = 0;
    for(let i = offset + stride; i < end; i += stride){
        const x2 = flatCoordinates[i];
        const y2 = flatCoordinates[i + 1];
        length += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        x1 = x2;
        y1 = y2;
    }
    return length;
}
function linearRingLength(flatCoordinates, offset, end, stride) {
    let perimeter = lineStringLength(flatCoordinates, offset, end, stride);
    const dx = flatCoordinates[end - stride] - flatCoordinates[offset];
    const dy = flatCoordinates[end - stride + 1] - flatCoordinates[offset + 1];
    perimeter += Math.sqrt(dx * dx + dy * dy);
    return perimeter;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"030lt":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/MultiLineString
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lineStringJs = require("./LineString.js");
var _lineStringJsDefault = parcelHelpers.interopDefault(_lineStringJs);
var _simpleGeometryJs = require("./SimpleGeometry.js");
var _simpleGeometryJsDefault = parcelHelpers.interopDefault(_simpleGeometryJs);
var _closestJs = require("./flat/closest.js");
var _extentJs = require("../extent.js");
var _deflateJs = require("./flat/deflate.js");
var _simplifyJs = require("./flat/simplify.js");
var _arrayJs = require("../array.js");
var _inflateJs = require("./flat/inflate.js");
var _interpolateJs = require("./flat/interpolate.js");
var _intersectsextentJs = require("./flat/intersectsextent.js");
/**
 * @classdesc
 * Multi-linestring geometry.
 *
 * @api
 */ class MultiLineString extends (0, _simpleGeometryJsDefault.default) {
    /**
   * @param {Array<Array<import("../coordinate.js").Coordinate>|LineString>|Array<number>} coordinates
   *     Coordinates or LineString geometries. (For internal use, flat coordinates in
   *     combination with `layout` and `ends` are also accepted.)
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<number>} [ends] Flat coordinate ends for internal use.
   */ constructor(coordinates, layout, ends){
        super();
        /**
     * @type {Array<number>}
     * @private
     */ this.ends_ = [];
        /**
     * @private
     * @type {number}
     */ this.maxDelta_ = -1;
        /**
     * @private
     * @type {number}
     */ this.maxDeltaRevision_ = -1;
        if (Array.isArray(coordinates[0])) this.setCoordinates(/** @type {Array<Array<import("../coordinate.js").Coordinate>>} */ coordinates, layout);
        else if (layout !== undefined && ends) {
            this.setFlatCoordinates(layout, /** @type {Array<number>} */ coordinates);
            this.ends_ = ends;
        } else {
            const lineStrings = /** @type {Array<LineString>} */ coordinates;
            /** @type {Array<number>} */ const flatCoordinates = [];
            const ends = [];
            for(let i = 0, ii = lineStrings.length; i < ii; ++i){
                const lineString = lineStrings[i];
                (0, _arrayJs.extend)(flatCoordinates, lineString.getFlatCoordinates());
                ends.push(flatCoordinates.length);
            }
            const layout = lineStrings.length === 0 ? this.getLayout() : lineStrings[0].getLayout();
            this.setFlatCoordinates(layout, flatCoordinates);
            this.ends_ = ends;
        }
    }
    /**
   * Append the passed linestring to the multilinestring.
   * @param {LineString} lineString LineString.
   * @api
   */ appendLineString(lineString) {
        (0, _arrayJs.extend)(this.flatCoordinates, lineString.getFlatCoordinates().slice());
        this.ends_.push(this.flatCoordinates.length);
        this.changed();
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!MultiLineString} Clone.
   * @api
   */ clone() {
        const multiLineString = new MultiLineString(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
        multiLineString.applyProperties(this);
        return multiLineString;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0, _extentJs.closestSquaredDistanceXY)(this.getExtent(), x, y)) return minSquaredDistance;
        if (this.maxDeltaRevision_ != this.getRevision()) {
            this.maxDelta_ = Math.sqrt((0, _closestJs.arrayMaxSquaredDelta)(this.flatCoordinates, 0, this.ends_, this.stride, 0));
            this.maxDeltaRevision_ = this.getRevision();
        }
        return (0, _closestJs.assignClosestArrayPoint)(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, false, x, y, closestPoint, minSquaredDistance);
    }
    /**
   * Returns the coordinate at `m` using linear interpolation, or `null` if no
   * such coordinate exists.
   *
   * `extrapolate` controls extrapolation beyond the range of Ms in the
   * MultiLineString. If `extrapolate` is `true` then Ms less than the first
   * M will return the first coordinate and Ms greater than the last M will
   * return the last coordinate.
   *
   * `interpolate` controls interpolation between consecutive LineStrings
   * within the MultiLineString. If `interpolate` is `true` the coordinates
   * will be linearly interpolated between the last coordinate of one LineString
   * and the first coordinate of the next LineString.  If `interpolate` is
   * `false` then the function will return `null` for Ms falling between
   * LineStrings.
   *
   * @param {number} m M.
   * @param {boolean} [extrapolate] Extrapolate. Default is `false`.
   * @param {boolean} [interpolate] Interpolate. Default is `false`.
   * @return {import("../coordinate.js").Coordinate|null} Coordinate.
   * @api
   */ getCoordinateAtM(m, extrapolate, interpolate) {
        if (this.layout != 'XYM' && this.layout != 'XYZM' || this.flatCoordinates.length === 0) return null;
        extrapolate = extrapolate !== undefined ? extrapolate : false;
        interpolate = interpolate !== undefined ? interpolate : false;
        return (0, _interpolateJs.lineStringsCoordinateAtM)(this.flatCoordinates, 0, this.ends_, this.stride, m, extrapolate, interpolate);
    }
    /**
   * Return the coordinates of the multilinestring.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   */ getCoordinates() {
        return (0, _inflateJs.inflateCoordinatesArray)(this.flatCoordinates, 0, this.ends_, this.stride);
    }
    /**
   * @return {Array<number>} Ends.
   */ getEnds() {
        return this.ends_;
    }
    /**
   * Return the linestring at the specified index.
   * @param {number} index Index.
   * @return {LineString} LineString.
   * @api
   */ getLineString(index) {
        if (index < 0 || this.ends_.length <= index) return null;
        return new (0, _lineStringJsDefault.default)(this.flatCoordinates.slice(index === 0 ? 0 : this.ends_[index - 1], this.ends_[index]), this.layout);
    }
    /**
   * Return the linestrings of this multilinestring.
   * @return {Array<LineString>} LineStrings.
   * @api
   */ getLineStrings() {
        const flatCoordinates = this.flatCoordinates;
        const ends = this.ends_;
        const layout = this.layout;
        /** @type {Array<LineString>} */ const lineStrings = [];
        let offset = 0;
        for(let i = 0, ii = ends.length; i < ii; ++i){
            const end = ends[i];
            const lineString = new (0, _lineStringJsDefault.default)(flatCoordinates.slice(offset, end), layout);
            lineStrings.push(lineString);
            offset = end;
        }
        return lineStrings;
    }
    /**
   * @return {Array<number>} Flat midpoints.
   */ getFlatMidpoints() {
        /** @type {Array<number>} */ const midpoints = [];
        const flatCoordinates = this.flatCoordinates;
        let offset = 0;
        const ends = this.ends_;
        const stride = this.stride;
        for(let i = 0, ii = ends.length; i < ii; ++i){
            const end = ends[i];
            const midpoint = (0, _interpolateJs.interpolatePoint)(flatCoordinates, offset, end, stride, 0.5);
            (0, _arrayJs.extend)(midpoints, midpoint);
            offset = end;
        }
        return midpoints;
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {MultiLineString} Simplified MultiLineString.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        /** @type {Array<number>} */ const simplifiedFlatCoordinates = [];
        /** @type {Array<number>} */ const simplifiedEnds = [];
        simplifiedFlatCoordinates.length = (0, _simplifyJs.douglasPeuckerArray)(this.flatCoordinates, 0, this.ends_, this.stride, squaredTolerance, simplifiedFlatCoordinates, 0, simplifiedEnds);
        return new MultiLineString(simplifiedFlatCoordinates, 'XY', simplifiedEnds);
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return 'MultiLineString';
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return (0, _intersectsextentJs.intersectsLineStringArray)(this.flatCoordinates, 0, this.ends_, this.stride, extent);
    }
    /**
   * Set the coordinates of the multilinestring.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 2);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        const ends = (0, _deflateJs.deflateCoordinatesArray)(this.flatCoordinates, 0, coordinates, this.stride, this.ends_);
        this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
        this.changed();
    }
}
exports.default = MultiLineString;

},{"./LineString.js":"jLUiq","./SimpleGeometry.js":"hLwk3","./flat/closest.js":"fi6H5","../extent.js":"6YrVc","./flat/deflate.js":"3TE5l","./flat/simplify.js":"jsqc5","../array.js":"1Fbic","./flat/inflate.js":"4Rpju","./flat/interpolate.js":"dh8ns","./flat/intersectsextent.js":"7x08H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k4LcJ":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/MultiPoint
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pointJs = require("./Point.js");
var _pointJsDefault = parcelHelpers.interopDefault(_pointJs);
var _simpleGeometryJs = require("./SimpleGeometry.js");
var _simpleGeometryJsDefault = parcelHelpers.interopDefault(_simpleGeometryJs);
var _extentJs = require("../extent.js");
var _deflateJs = require("./flat/deflate.js");
var _arrayJs = require("../array.js");
var _inflateJs = require("./flat/inflate.js");
var _mathJs = require("../math.js");
/**
 * @classdesc
 * Multi-point geometry.
 *
 * @api
 */ class MultiPoint extends (0, _simpleGeometryJsDefault.default) {
    /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */ constructor(coordinates, layout){
        super();
        if (layout && !Array.isArray(coordinates[0])) this.setFlatCoordinates(layout, /** @type {Array<number>} */ coordinates);
        else this.setCoordinates(/** @type {Array<import("../coordinate.js").Coordinate>} */ coordinates, layout);
    }
    /**
   * Append the passed point to this multipoint.
   * @param {Point} point Point.
   * @api
   */ appendPoint(point) {
        (0, _arrayJs.extend)(this.flatCoordinates, point.getFlatCoordinates());
        this.changed();
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!MultiPoint} Clone.
   * @api
   */ clone() {
        const multiPoint = new MultiPoint(this.flatCoordinates.slice(), this.layout);
        multiPoint.applyProperties(this);
        return multiPoint;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0, _extentJs.closestSquaredDistanceXY)(this.getExtent(), x, y)) return minSquaredDistance;
        const flatCoordinates = this.flatCoordinates;
        const stride = this.stride;
        for(let i = 0, ii = flatCoordinates.length; i < ii; i += stride){
            const squaredDistance = (0, _mathJs.squaredDistance)(x, y, flatCoordinates[i], flatCoordinates[i + 1]);
            if (squaredDistance < minSquaredDistance) {
                minSquaredDistance = squaredDistance;
                for(let j = 0; j < stride; ++j)closestPoint[j] = flatCoordinates[i + j];
                closestPoint.length = stride;
            }
        }
        return minSquaredDistance;
    }
    /**
   * Return the coordinates of the multipoint.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */ getCoordinates() {
        return (0, _inflateJs.inflateCoordinates)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
    }
    /**
   * Return the point at the specified index.
   * @param {number} index Index.
   * @return {Point} Point.
   * @api
   */ getPoint(index) {
        const n = this.flatCoordinates.length / this.stride;
        if (index < 0 || n <= index) return null;
        return new (0, _pointJsDefault.default)(this.flatCoordinates.slice(index * this.stride, (index + 1) * this.stride), this.layout);
    }
    /**
   * Return the points of this multipoint.
   * @return {Array<Point>} Points.
   * @api
   */ getPoints() {
        const flatCoordinates = this.flatCoordinates;
        const layout = this.layout;
        const stride = this.stride;
        /** @type {Array<Point>} */ const points = [];
        for(let i = 0, ii = flatCoordinates.length; i < ii; i += stride){
            const point = new (0, _pointJsDefault.default)(flatCoordinates.slice(i, i + stride), layout);
            points.push(point);
        }
        return points;
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return 'MultiPoint';
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        const flatCoordinates = this.flatCoordinates;
        const stride = this.stride;
        for(let i = 0, ii = flatCoordinates.length; i < ii; i += stride){
            const x = flatCoordinates[i];
            const y = flatCoordinates[i + 1];
            if ((0, _extentJs.containsXY)(extent, x, y)) return true;
        }
        return false;
    }
    /**
   * Set the coordinates of the multipoint.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 1);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        this.flatCoordinates.length = (0, _deflateJs.deflateCoordinates)(this.flatCoordinates, 0, coordinates, this.stride);
        this.changed();
    }
}
exports.default = MultiPoint;

},{"./Point.js":"hx2Ar","./SimpleGeometry.js":"hLwk3","../extent.js":"6YrVc","./flat/deflate.js":"3TE5l","../array.js":"1Fbic","./flat/inflate.js":"4Rpju","../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hx2Ar":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/Point
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _simpleGeometryJs = require("./SimpleGeometry.js");
var _simpleGeometryJsDefault = parcelHelpers.interopDefault(_simpleGeometryJs);
var _extentJs = require("../extent.js");
var _deflateJs = require("./flat/deflate.js");
var _mathJs = require("../math.js");
/**
 * @classdesc
 * Point geometry.
 *
 * @api
 */ class Point extends (0, _simpleGeometryJsDefault.default) {
    /**
   * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */ constructor(coordinates, layout){
        super();
        this.setCoordinates(coordinates, layout);
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!Point} Clone.
   * @api
   */ clone() {
        const point = new Point(this.flatCoordinates.slice(), this.layout);
        point.applyProperties(this);
        return point;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        const flatCoordinates = this.flatCoordinates;
        const squaredDistance = (0, _mathJs.squaredDistance)(x, y, flatCoordinates[0], flatCoordinates[1]);
        if (squaredDistance < minSquaredDistance) {
            const stride = this.stride;
            for(let i = 0; i < stride; ++i)closestPoint[i] = flatCoordinates[i];
            closestPoint.length = stride;
            return squaredDistance;
        }
        return minSquaredDistance;
    }
    /**
   * Return the coordinate of the point.
   * @return {import("../coordinate.js").Coordinate} Coordinates.
   * @api
   */ getCoordinates() {
        return this.flatCoordinates.slice();
    }
    /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */ computeExtent(extent) {
        return (0, _extentJs.createOrUpdateFromCoordinate)(this.flatCoordinates, extent);
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return 'Point';
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return (0, _extentJs.containsXY)(extent, this.flatCoordinates[0], this.flatCoordinates[1]);
    }
    /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 0);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        this.flatCoordinates.length = (0, _deflateJs.deflateCoordinate)(this.flatCoordinates, 0, coordinates, this.stride);
        this.changed();
    }
}
exports.default = Point;

},{"./SimpleGeometry.js":"hLwk3","../extent.js":"6YrVc","./flat/deflate.js":"3TE5l","../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2XIqx":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/MultiPolygon
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _multiPointJs = require("./MultiPoint.js");
var _multiPointJsDefault = parcelHelpers.interopDefault(_multiPointJs);
var _polygonJs = require("./Polygon.js");
var _polygonJsDefault = parcelHelpers.interopDefault(_polygonJs);
var _simpleGeometryJs = require("./SimpleGeometry.js");
var _simpleGeometryJsDefault = parcelHelpers.interopDefault(_simpleGeometryJs);
var _closestJs = require("./flat/closest.js");
var _extentJs = require("../extent.js");
var _deflateJs = require("./flat/deflate.js");
var _arrayJs = require("../array.js");
var _interiorpointJs = require("./flat/interiorpoint.js");
var _inflateJs = require("./flat/inflate.js");
var _intersectsextentJs = require("./flat/intersectsextent.js");
var _orientJs = require("./flat/orient.js");
var _areaJs = require("./flat/area.js");
var _centerJs = require("./flat/center.js");
var _containsJs = require("./flat/contains.js");
var _simplifyJs = require("./flat/simplify.js");
/**
 * @classdesc
 * Multi-polygon geometry.
 *
 * @api
 */ class MultiPolygon extends (0, _simpleGeometryJsDefault.default) {
    /**
   * @param {Array<Array<Array<import("../coordinate.js").Coordinate>>|Polygon>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` and `endss` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<Array<number>>} [endss] Array of ends for internal use with flat coordinates.
   */ constructor(coordinates, layout, endss){
        super();
        /**
     * @type {Array<Array<number>>}
     * @private
     */ this.endss_ = [];
        /**
     * @private
     * @type {number}
     */ this.flatInteriorPointsRevision_ = -1;
        /**
     * @private
     * @type {Array<number>|null}
     */ this.flatInteriorPoints_ = null;
        /**
     * @private
     * @type {number}
     */ this.maxDelta_ = -1;
        /**
     * @private
     * @type {number}
     */ this.maxDeltaRevision_ = -1;
        /**
     * @private
     * @type {number}
     */ this.orientedRevision_ = -1;
        /**
     * @private
     * @type {Array<number>|null}
     */ this.orientedFlatCoordinates_ = null;
        if (!endss && !Array.isArray(coordinates[0])) {
            const polygons = /** @type {Array<Polygon>} */ coordinates;
            /** @type {Array<number>} */ const flatCoordinates = [];
            const thisEndss = [];
            for(let i = 0, ii = polygons.length; i < ii; ++i){
                const polygon = polygons[i];
                const offset = flatCoordinates.length;
                const ends = polygon.getEnds();
                for(let j = 0, jj = ends.length; j < jj; ++j)ends[j] += offset;
                (0, _arrayJs.extend)(flatCoordinates, polygon.getFlatCoordinates());
                thisEndss.push(ends);
            }
            layout = polygons.length === 0 ? this.getLayout() : polygons[0].getLayout();
            coordinates = flatCoordinates;
            endss = thisEndss;
        }
        if (layout !== undefined && endss) {
            this.setFlatCoordinates(layout, /** @type {Array<number>} */ coordinates);
            this.endss_ = endss;
        } else this.setCoordinates(/** @type {Array<Array<Array<import("../coordinate.js").Coordinate>>>} */ coordinates, layout);
    }
    /**
   * Append the passed polygon to this multipolygon.
   * @param {Polygon} polygon Polygon.
   * @api
   */ appendPolygon(polygon) {
        /** @type {Array<number>} */ let ends;
        if (!this.flatCoordinates) {
            this.flatCoordinates = polygon.getFlatCoordinates().slice();
            ends = polygon.getEnds().slice();
            this.endss_.push();
        } else {
            const offset = this.flatCoordinates.length;
            (0, _arrayJs.extend)(this.flatCoordinates, polygon.getFlatCoordinates());
            ends = polygon.getEnds().slice();
            for(let i = 0, ii = ends.length; i < ii; ++i)ends[i] += offset;
        }
        this.endss_.push(ends);
        this.changed();
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!MultiPolygon} Clone.
   * @api
   */ clone() {
        const len = this.endss_.length;
        const newEndss = new Array(len);
        for(let i = 0; i < len; ++i)newEndss[i] = this.endss_[i].slice();
        const multiPolygon = new MultiPolygon(this.flatCoordinates.slice(), this.layout, newEndss);
        multiPolygon.applyProperties(this);
        return multiPolygon;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0, _extentJs.closestSquaredDistanceXY)(this.getExtent(), x, y)) return minSquaredDistance;
        if (this.maxDeltaRevision_ != this.getRevision()) {
            this.maxDelta_ = Math.sqrt((0, _closestJs.multiArrayMaxSquaredDelta)(this.flatCoordinates, 0, this.endss_, this.stride, 0));
            this.maxDeltaRevision_ = this.getRevision();
        }
        return (0, _closestJs.assignClosestMultiArrayPoint)(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */ containsXY(x, y) {
        return (0, _containsJs.linearRingssContainsXY)(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, x, y);
    }
    /**
   * Return the area of the multipolygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */ getArea() {
        return (0, _areaJs.linearRingss)(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
    }
    /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for multi-polygons.
   *
   * @param {boolean} [right] Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<Array<import("../coordinate.js").Coordinate>>>} Coordinates.
   * @api
   */ getCoordinates(right) {
        let flatCoordinates;
        if (right !== undefined) {
            flatCoordinates = this.getOrientedFlatCoordinates().slice();
            (0, _orientJs.orientLinearRingsArray)(flatCoordinates, 0, this.endss_, this.stride, right);
        } else flatCoordinates = this.flatCoordinates;
        return (0, _inflateJs.inflateMultiCoordinatesArray)(flatCoordinates, 0, this.endss_, this.stride);
    }
    /**
   * @return {Array<Array<number>>} Endss.
   */ getEndss() {
        return this.endss_;
    }
    /**
   * @return {Array<number>} Flat interior points.
   */ getFlatInteriorPoints() {
        if (this.flatInteriorPointsRevision_ != this.getRevision()) {
            const flatCenters = (0, _centerJs.linearRingss)(this.flatCoordinates, 0, this.endss_, this.stride);
            this.flatInteriorPoints_ = (0, _interiorpointJs.getInteriorPointsOfMultiArray)(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, flatCenters);
            this.flatInteriorPointsRevision_ = this.getRevision();
        }
        return /** @type {Array<number>} */ this.flatInteriorPoints_;
    }
    /**
   * Return the interior points as {@link module:ol/geom/MultiPoint~MultiPoint multipoint}.
   * @return {MultiPoint} Interior points as XYM coordinates, where M is
   * the length of the horizontal intersection that the point belongs to.
   * @api
   */ getInteriorPoints() {
        return new (0, _multiPointJsDefault.default)(this.getFlatInteriorPoints().slice(), 'XYM');
    }
    /**
   * @return {Array<number>} Oriented flat coordinates.
   */ getOrientedFlatCoordinates() {
        if (this.orientedRevision_ != this.getRevision()) {
            const flatCoordinates = this.flatCoordinates;
            if ((0, _orientJs.linearRingssAreOriented)(flatCoordinates, 0, this.endss_, this.stride)) this.orientedFlatCoordinates_ = flatCoordinates;
            else {
                this.orientedFlatCoordinates_ = flatCoordinates.slice();
                this.orientedFlatCoordinates_.length = (0, _orientJs.orientLinearRingsArray)(this.orientedFlatCoordinates_, 0, this.endss_, this.stride);
            }
            this.orientedRevision_ = this.getRevision();
        }
        return /** @type {Array<number>} */ this.orientedFlatCoordinates_;
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {MultiPolygon} Simplified MultiPolygon.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        /** @type {Array<number>} */ const simplifiedFlatCoordinates = [];
        /** @type {Array<Array<number>>} */ const simplifiedEndss = [];
        simplifiedFlatCoordinates.length = (0, _simplifyJs.quantizeMultiArray)(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(squaredTolerance), simplifiedFlatCoordinates, 0, simplifiedEndss);
        return new MultiPolygon(simplifiedFlatCoordinates, 'XY', simplifiedEndss);
    }
    /**
   * Return the polygon at the specified index.
   * @param {number} index Index.
   * @return {Polygon} Polygon.
   * @api
   */ getPolygon(index) {
        if (index < 0 || this.endss_.length <= index) return null;
        let offset;
        if (index === 0) offset = 0;
        else {
            const prevEnds = this.endss_[index - 1];
            offset = prevEnds[prevEnds.length - 1];
        }
        const ends = this.endss_[index].slice();
        const end = ends[ends.length - 1];
        if (offset !== 0) for(let i = 0, ii = ends.length; i < ii; ++i)ends[i] -= offset;
        return new (0, _polygonJsDefault.default)(this.flatCoordinates.slice(offset, end), this.layout, ends);
    }
    /**
   * Return the polygons of this multipolygon.
   * @return {Array<Polygon>} Polygons.
   * @api
   */ getPolygons() {
        const layout = this.layout;
        const flatCoordinates = this.flatCoordinates;
        const endss = this.endss_;
        const polygons = [];
        let offset = 0;
        for(let i = 0, ii = endss.length; i < ii; ++i){
            const ends = endss[i].slice();
            const end = ends[ends.length - 1];
            if (offset !== 0) for(let j = 0, jj = ends.length; j < jj; ++j)ends[j] -= offset;
            const polygon = new (0, _polygonJsDefault.default)(flatCoordinates.slice(offset, end), layout, ends);
            polygons.push(polygon);
            offset = end;
        }
        return polygons;
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return 'MultiPolygon';
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return (0, _intersectsextentJs.intersectsLinearRingMultiArray)(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, extent);
    }
    /**
   * Set the coordinates of the multipolygon.
   * @param {!Array<Array<Array<import("../coordinate.js").Coordinate>>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 3);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        const endss = (0, _deflateJs.deflateMultiCoordinatesArray)(this.flatCoordinates, 0, coordinates, this.stride, this.endss_);
        if (endss.length === 0) this.flatCoordinates.length = 0;
        else {
            const lastEnds = endss[endss.length - 1];
            this.flatCoordinates.length = lastEnds.length === 0 ? 0 : lastEnds[lastEnds.length - 1];
        }
        this.changed();
    }
}
exports.default = MultiPolygon;

},{"./MultiPoint.js":"k4LcJ","./Polygon.js":"cJuQF","./SimpleGeometry.js":"hLwk3","./flat/closest.js":"fi6H5","../extent.js":"6YrVc","./flat/deflate.js":"3TE5l","../array.js":"1Fbic","./flat/interiorpoint.js":"59VP9","./flat/inflate.js":"4Rpju","./flat/intersectsextent.js":"7x08H","./flat/orient.js":"btd6s","./flat/area.js":"7fT8A","./flat/center.js":"9OVXr","./flat/contains.js":"eArlN","./flat/simplify.js":"jsqc5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJuQF":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/Polygon
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create an approximation of a circle on the surface of a sphere.
 * @param {import("../coordinate.js").Coordinate} center Center (`[lon, lat]` in degrees).
 * @param {number} radius The great-circle distance from the center to
 *     the polygon vertices in meters.
 * @param {number} [n] Optional number of vertices for the resulting
 *     polygon. Default is `32`.
 * @param {number} [sphereRadius] Optional radius for the sphere (defaults to
 *     the Earth's mean radius using the WGS84 ellipsoid).
 * @return {Polygon} The "circular" polygon.
 * @api
 */ parcelHelpers.export(exports, "circular", ()=>circular);
/**
 * Create a polygon from an extent. The layout used is `XY`.
 * @param {import("../extent.js").Extent} extent The extent.
 * @return {Polygon} The polygon.
 * @api
 */ parcelHelpers.export(exports, "fromExtent", ()=>fromExtent);
/**
 * Create a regular polygon from a circle.
 * @param {import("./Circle.js").default} circle Circle geometry.
 * @param {number} [sides] Number of sides of the polygon. Default is 32.
 * @param {number} [angle] Start angle for the first vertex of the polygon in
 *     counter-clockwise radians. 0 means East. Default is 0.
 * @return {Polygon} Polygon geometry.
 * @api
 */ parcelHelpers.export(exports, "fromCircle", ()=>fromCircle);
/**
 * Modify the coordinates of a polygon to make it a regular polygon.
 * @param {Polygon} polygon Polygon geometry.
 * @param {import("../coordinate.js").Coordinate} center Center of the regular polygon.
 * @param {number} radius Radius of the regular polygon.
 * @param {number} [angle] Start angle for the first vertex of the polygon in
 *     counter-clockwise radians. 0 means East. Default is 0.
 */ parcelHelpers.export(exports, "makeRegular", ()=>makeRegular);
var _linearRingJs = require("./LinearRing.js");
var _linearRingJsDefault = parcelHelpers.interopDefault(_linearRingJs);
var _pointJs = require("./Point.js");
var _pointJsDefault = parcelHelpers.interopDefault(_pointJs);
var _simpleGeometryJs = require("./SimpleGeometry.js");
var _simpleGeometryJsDefault = parcelHelpers.interopDefault(_simpleGeometryJs);
var _closestJs = require("./flat/closest.js");
var _extentJs = require("../extent.js");
var _deflateJs = require("./flat/deflate.js");
var _arrayJs = require("../array.js");
var _interiorpointJs = require("./flat/interiorpoint.js");
var _inflateJs = require("./flat/inflate.js");
var _intersectsextentJs = require("./flat/intersectsextent.js");
var _orientJs = require("./flat/orient.js");
var _areaJs = require("./flat/area.js");
var _containsJs = require("./flat/contains.js");
var _mathJs = require("../math.js");
var _simplifyJs = require("./flat/simplify.js");
var _sphereJs = require("../sphere.js");
/**
 * @classdesc
 * Polygon geometry.
 *
 * @api
 */ class Polygon extends (0, _simpleGeometryJsDefault.default) {
    /**
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
   *     Array of linear rings that define the polygon. The first linear ring of the
   *     array defines the outer-boundary or surface of the polygon. Each subsequent
   *     linear ring defines a hole in the surface of the polygon. A linear ring is
   *     an array of vertices' coordinates where the first coordinate and the last are
   *     equivalent. (For internal use, flat coordinates in combination with
   *     `layout` and `ends` are also accepted.)
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
   */ constructor(coordinates, layout, ends){
        super();
        /**
     * @type {Array<number>}
     * @private
     */ this.ends_ = [];
        /**
     * @private
     * @type {number}
     */ this.flatInteriorPointRevision_ = -1;
        /**
     * @private
     * @type {import("../coordinate.js").Coordinate|null}
     */ this.flatInteriorPoint_ = null;
        /**
     * @private
     * @type {number}
     */ this.maxDelta_ = -1;
        /**
     * @private
     * @type {number}
     */ this.maxDeltaRevision_ = -1;
        /**
     * @private
     * @type {number}
     */ this.orientedRevision_ = -1;
        /**
     * @private
     * @type {Array<number>|null}
     */ this.orientedFlatCoordinates_ = null;
        if (layout !== undefined && ends) {
            this.setFlatCoordinates(layout, /** @type {Array<number>} */ coordinates);
            this.ends_ = ends;
        } else this.setCoordinates(/** @type {Array<Array<import("../coordinate.js").Coordinate>>} */ coordinates, layout);
    }
    /**
   * Append the passed linear ring to this polygon.
   * @param {LinearRing} linearRing Linear ring.
   * @api
   */ appendLinearRing(linearRing) {
        if (!this.flatCoordinates) this.flatCoordinates = linearRing.getFlatCoordinates().slice();
        else (0, _arrayJs.extend)(this.flatCoordinates, linearRing.getFlatCoordinates());
        this.ends_.push(this.flatCoordinates.length);
        this.changed();
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   */ clone() {
        const polygon = new Polygon(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
        polygon.applyProperties(this);
        return polygon;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0, _extentJs.closestSquaredDistanceXY)(this.getExtent(), x, y)) return minSquaredDistance;
        if (this.maxDeltaRevision_ != this.getRevision()) {
            this.maxDelta_ = Math.sqrt((0, _closestJs.arrayMaxSquaredDelta)(this.flatCoordinates, 0, this.ends_, this.stride, 0));
            this.maxDeltaRevision_ = this.getRevision();
        }
        return (0, _closestJs.assignClosestArrayPoint)(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */ containsXY(x, y) {
        return (0, _containsJs.linearRingsContainsXY)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, x, y);
    }
    /**
   * Return the area of the polygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */ getArea() {
        return (0, _areaJs.linearRings)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
    }
    /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for polygons.
   *
   * @param {boolean} [right] Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   */ getCoordinates(right) {
        let flatCoordinates;
        if (right !== undefined) {
            flatCoordinates = this.getOrientedFlatCoordinates().slice();
            (0, _orientJs.orientLinearRings)(flatCoordinates, 0, this.ends_, this.stride, right);
        } else flatCoordinates = this.flatCoordinates;
        return (0, _inflateJs.inflateCoordinatesArray)(flatCoordinates, 0, this.ends_, this.stride);
    }
    /**
   * @return {Array<number>} Ends.
   */ getEnds() {
        return this.ends_;
    }
    /**
   * @return {Array<number>} Interior point.
   */ getFlatInteriorPoint() {
        if (this.flatInteriorPointRevision_ != this.getRevision()) {
            const flatCenter = (0, _extentJs.getCenter)(this.getExtent());
            this.flatInteriorPoint_ = (0, _interiorpointJs.getInteriorPointOfArray)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, flatCenter, 0);
            this.flatInteriorPointRevision_ = this.getRevision();
        }
        return /** @type {import("../coordinate.js").Coordinate} */ this.flatInteriorPoint_;
    }
    /**
   * Return an interior point of the polygon.
   * @return {Point} Interior point as XYM coordinate, where M is the
   * length of the horizontal intersection that the point belongs to.
   * @api
   */ getInteriorPoint() {
        return new (0, _pointJsDefault.default)(this.getFlatInteriorPoint(), 'XYM');
    }
    /**
   * Return the number of rings of the polygon,  this includes the exterior
   * ring and any interior rings.
   *
   * @return {number} Number of rings.
   * @api
   */ getLinearRingCount() {
        return this.ends_.length;
    }
    /**
   * Return the Nth linear ring of the polygon geometry. Return `null` if the
   * given index is out of range.
   * The exterior linear ring is available at index `0` and the interior rings
   * at index `1` and beyond.
   *
   * @param {number} index Index.
   * @return {LinearRing|null} Linear ring.
   * @api
   */ getLinearRing(index) {
        if (index < 0 || this.ends_.length <= index) return null;
        return new (0, _linearRingJsDefault.default)(this.flatCoordinates.slice(index === 0 ? 0 : this.ends_[index - 1], this.ends_[index]), this.layout);
    }
    /**
   * Return the linear rings of the polygon.
   * @return {Array<LinearRing>} Linear rings.
   * @api
   */ getLinearRings() {
        const layout = this.layout;
        const flatCoordinates = this.flatCoordinates;
        const ends = this.ends_;
        const linearRings = [];
        let offset = 0;
        for(let i = 0, ii = ends.length; i < ii; ++i){
            const end = ends[i];
            const linearRing = new (0, _linearRingJsDefault.default)(flatCoordinates.slice(offset, end), layout);
            linearRings.push(linearRing);
            offset = end;
        }
        return linearRings;
    }
    /**
   * @return {Array<number>} Oriented flat coordinates.
   */ getOrientedFlatCoordinates() {
        if (this.orientedRevision_ != this.getRevision()) {
            const flatCoordinates = this.flatCoordinates;
            if ((0, _orientJs.linearRingsAreOriented)(flatCoordinates, 0, this.ends_, this.stride)) this.orientedFlatCoordinates_ = flatCoordinates;
            else {
                this.orientedFlatCoordinates_ = flatCoordinates.slice();
                this.orientedFlatCoordinates_.length = (0, _orientJs.orientLinearRings)(this.orientedFlatCoordinates_, 0, this.ends_, this.stride);
            }
            this.orientedRevision_ = this.getRevision();
        }
        return /** @type {Array<number>} */ this.orientedFlatCoordinates_;
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Polygon} Simplified Polygon.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        /** @type {Array<number>} */ const simplifiedFlatCoordinates = [];
        /** @type {Array<number>} */ const simplifiedEnds = [];
        simplifiedFlatCoordinates.length = (0, _simplifyJs.quantizeArray)(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(squaredTolerance), simplifiedFlatCoordinates, 0, simplifiedEnds);
        return new Polygon(simplifiedFlatCoordinates, 'XY', simplifiedEnds);
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return 'Polygon';
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return (0, _intersectsextentJs.intersectsLinearRingArray)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, extent);
    }
    /**
   * Set the coordinates of the polygon.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 2);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        const ends = (0, _deflateJs.deflateCoordinatesArray)(this.flatCoordinates, 0, coordinates, this.stride, this.ends_);
        this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
        this.changed();
    }
}
exports.default = Polygon;
function circular(center, radius, n, sphereRadius) {
    n = n ? n : 32;
    /** @type {Array<number>} */ const flatCoordinates = [];
    for(let i = 0; i < n; ++i)(0, _arrayJs.extend)(flatCoordinates, (0, _sphereJs.offset)(center, radius, 2 * Math.PI * i / n, sphereRadius));
    flatCoordinates.push(flatCoordinates[0], flatCoordinates[1]);
    return new Polygon(flatCoordinates, 'XY', [
        flatCoordinates.length
    ]);
}
function fromExtent(extent) {
    if ((0, _extentJs.isEmpty)(extent)) throw new Error('Cannot create polygon from empty extent');
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const flatCoordinates = [
        minX,
        minY,
        minX,
        maxY,
        maxX,
        maxY,
        maxX,
        minY,
        minX,
        minY
    ];
    return new Polygon(flatCoordinates, 'XY', [
        flatCoordinates.length
    ]);
}
function fromCircle(circle, sides, angle) {
    sides = sides ? sides : 32;
    const stride = circle.getStride();
    const layout = circle.getLayout();
    const center = circle.getCenter();
    const arrayLength = stride * (sides + 1);
    const flatCoordinates = new Array(arrayLength);
    for(let i = 0; i < arrayLength; i += stride){
        flatCoordinates[i] = 0;
        flatCoordinates[i + 1] = 0;
        for(let j = 2; j < stride; j++)flatCoordinates[i + j] = center[j];
    }
    const ends = [
        flatCoordinates.length
    ];
    const polygon = new Polygon(flatCoordinates, layout, ends);
    makeRegular(polygon, center, circle.getRadius(), angle);
    return polygon;
}
function makeRegular(polygon, center, radius, angle) {
    const flatCoordinates = polygon.getFlatCoordinates();
    const stride = polygon.getStride();
    const sides = flatCoordinates.length / stride - 1;
    const startAngle = angle ? angle : 0;
    for(let i = 0; i <= sides; ++i){
        const offset = i * stride;
        const angle = startAngle + (0, _mathJs.modulo)(i, sides) * 2 * Math.PI / sides;
        flatCoordinates[offset] = center[0] + radius * Math.cos(angle);
        flatCoordinates[offset + 1] = center[1] + radius * Math.sin(angle);
    }
    polygon.changed();
}

},{"./LinearRing.js":"jg1hj","./Point.js":"hx2Ar","./SimpleGeometry.js":"hLwk3","./flat/closest.js":"fi6H5","../extent.js":"6YrVc","./flat/deflate.js":"3TE5l","../array.js":"1Fbic","./flat/interiorpoint.js":"59VP9","./flat/inflate.js":"4Rpju","./flat/intersectsextent.js":"7x08H","./flat/orient.js":"btd6s","./flat/area.js":"7fT8A","./flat/contains.js":"eArlN","../math.js":"5jEFr","./flat/simplify.js":"jsqc5","../sphere.js":"eJjHw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jg1hj":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/LinearRing
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _simpleGeometryJs = require("./SimpleGeometry.js");
var _simpleGeometryJsDefault = parcelHelpers.interopDefault(_simpleGeometryJs);
var _closestJs = require("./flat/closest.js");
var _extentJs = require("../extent.js");
var _deflateJs = require("./flat/deflate.js");
var _simplifyJs = require("./flat/simplify.js");
var _inflateJs = require("./flat/inflate.js");
var _areaJs = require("./flat/area.js");
/**
 * @classdesc
 * Linear ring geometry. Only used as part of polygon; cannot be rendered
 * on its own.
 *
 * @api
 */ class LinearRing extends (0, _simpleGeometryJsDefault.default) {
    /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */ constructor(coordinates, layout){
        super();
        /**
     * @private
     * @type {number}
     */ this.maxDelta_ = -1;
        /**
     * @private
     * @type {number}
     */ this.maxDeltaRevision_ = -1;
        if (layout !== undefined && !Array.isArray(coordinates[0])) this.setFlatCoordinates(layout, /** @type {Array<number>} */ coordinates);
        else this.setCoordinates(/** @type {Array<import("../coordinate.js").Coordinate>} */ coordinates, layout);
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!LinearRing} Clone.
   * @api
   */ clone() {
        return new LinearRing(this.flatCoordinates.slice(), this.layout);
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0, _extentJs.closestSquaredDistanceXY)(this.getExtent(), x, y)) return minSquaredDistance;
        if (this.maxDeltaRevision_ != this.getRevision()) {
            this.maxDelta_ = Math.sqrt((0, _closestJs.maxSquaredDelta)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0));
            this.maxDeltaRevision_ = this.getRevision();
        }
        return (0, _closestJs.assignClosestPoint)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
    }
    /**
   * Return the area of the linear ring on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */ getArea() {
        return (0, _areaJs.linearRing)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
    }
    /**
   * Return the coordinates of the linear ring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */ getCoordinates() {
        return (0, _inflateJs.inflateCoordinates)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LinearRing} Simplified LinearRing.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        /** @type {Array<number>} */ const simplifiedFlatCoordinates = [];
        simplifiedFlatCoordinates.length = (0, _simplifyJs.douglasPeucker)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, squaredTolerance, simplifiedFlatCoordinates, 0);
        return new LinearRing(simplifiedFlatCoordinates, 'XY');
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return 'LinearRing';
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return false;
    }
    /**
   * Set the coordinates of the linear ring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 1);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        this.flatCoordinates.length = (0, _deflateJs.deflateCoordinates)(this.flatCoordinates, 0, coordinates, this.stride);
        this.changed();
    }
}
exports.default = LinearRing;

},{"./SimpleGeometry.js":"hLwk3","./flat/closest.js":"fi6H5","../extent.js":"6YrVc","./flat/deflate.js":"3TE5l","./flat/simplify.js":"jsqc5","./flat/inflate.js":"4Rpju","./flat/area.js":"7fT8A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7fT8A":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/area
 */ /**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Area.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linearRing", ()=>linearRing);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @return {number} Area.
 */ parcelHelpers.export(exports, "linearRings", ()=>linearRings);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @return {number} Area.
 */ parcelHelpers.export(exports, "linearRingss", ()=>linearRingss);
function linearRing(flatCoordinates, offset, end, stride) {
    let twiceArea = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for(; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        twiceArea += y1 * x2 - x1 * y2;
        x1 = x2;
        y1 = y2;
    }
    return twiceArea / 2;
}
function linearRings(flatCoordinates, offset, ends, stride) {
    let area = 0;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        area += linearRing(flatCoordinates, offset, end, stride);
        offset = end;
    }
    return area;
}
function linearRingss(flatCoordinates, offset, endss, stride) {
    let area = 0;
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        area += linearRings(flatCoordinates, offset, ends, stride);
        offset = ends[ends.length - 1];
    }
    return area;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59VP9":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/interiorpoint
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Calculates a point that is likely to lie in the interior of the linear rings.
 * Inspired by JTS's com.vividsolutions.jts.geom.Geometry#getInteriorPoint.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {Array<number>} flatCenters Flat centers.
 * @param {number} flatCentersOffset Flat center offset.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Destination point as XYM coordinate, where M is the
 * length of the horizontal intersection that the point belongs to.
 */ parcelHelpers.export(exports, "getInteriorPointOfArray", ()=>getInteriorPointOfArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {Array<number>} flatCenters Flat centers.
 * @return {Array<number>} Interior points as XYM coordinates, where M is the
 * length of the horizontal intersection that the point belongs to.
 */ parcelHelpers.export(exports, "getInteriorPointsOfMultiArray", ()=>getInteriorPointsOfMultiArray);
var _arrayJs = require("../../array.js");
var _containsJs = require("./contains.js");
function getInteriorPointOfArray(flatCoordinates, offset, ends, stride, flatCenters, flatCentersOffset, dest) {
    let i, ii, x, x1, x2, y1, y2;
    const y = flatCenters[flatCentersOffset + 1];
    /** @type {Array<number>} */ const intersections = [];
    // Calculate intersections with the horizontal line
    for(let r = 0, rr = ends.length; r < rr; ++r){
        const end = ends[r];
        x1 = flatCoordinates[end - stride];
        y1 = flatCoordinates[end - stride + 1];
        for(i = offset; i < end; i += stride){
            x2 = flatCoordinates[i];
            y2 = flatCoordinates[i + 1];
            if (y <= y1 && y2 <= y || y1 <= y && y <= y2) {
                x = (y - y1) / (y2 - y1) * (x2 - x1) + x1;
                intersections.push(x);
            }
            x1 = x2;
            y1 = y2;
        }
    }
    // Find the longest segment of the horizontal line that has its center point
    // inside the linear ring.
    let pointX = NaN;
    let maxSegmentLength = -Infinity;
    intersections.sort((0, _arrayJs.ascending));
    x1 = intersections[0];
    for(i = 1, ii = intersections.length; i < ii; ++i){
        x2 = intersections[i];
        const segmentLength = Math.abs(x2 - x1);
        if (segmentLength > maxSegmentLength) {
            x = (x1 + x2) / 2;
            if ((0, _containsJs.linearRingsContainsXY)(flatCoordinates, offset, ends, stride, x, y)) {
                pointX = x;
                maxSegmentLength = segmentLength;
            }
        }
        x1 = x2;
    }
    if (isNaN(pointX)) // There is no horizontal line that has its center point inside the linear
    // ring.  Use the center of the the linear ring's extent.
    pointX = flatCenters[flatCentersOffset];
    if (dest) {
        dest.push(pointX, y, maxSegmentLength);
        return dest;
    }
    return [
        pointX,
        y,
        maxSegmentLength
    ];
}
function getInteriorPointsOfMultiArray(flatCoordinates, offset, endss, stride, flatCenters) {
    /** @type {Array<number>} */ let interiorPoints = [];
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        interiorPoints = getInteriorPointOfArray(flatCoordinates, offset, ends, stride, flatCenters, 2 * i, interiorPoints);
        offset = ends[ends.length - 1];
    }
    return interiorPoints;
}

},{"../../array.js":"1Fbic","./contains.js":"eArlN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"btd6s":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/orient
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Is the linear ring oriented clockwise in a coordinate system with a bottom-left
 * coordinate origin? For a coordinate system with a top-left coordinate origin,
 * the ring's orientation is clockwise when this function returns false.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {boolean|undefined} Is clockwise.
 */ parcelHelpers.export(exports, "linearRingIsClockwise", ()=>linearRingIsClockwise);
/**
 * Determines if linear rings are oriented.  By default, left-hand orientation
 * is tested (first ring must be clockwise, remaining rings counter-clockwise).
 * To test for right-hand orientation, use the `right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean} [right] Test for right-hand orientation
 *     (counter-clockwise exterior ring and clockwise interior rings).
 * @return {boolean} Rings are correctly oriented.
 */ parcelHelpers.export(exports, "linearRingsAreOriented", ()=>linearRingsAreOriented);
/**
 * Determines if linear rings are oriented.  By default, left-hand orientation
 * is tested (first ring must be clockwise, remaining rings counter-clockwise).
 * To test for right-hand orientation, use the `right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Array of array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean} [right] Test for right-hand orientation
 *     (counter-clockwise exterior ring and clockwise interior rings).
 * @return {boolean} Rings are correctly oriented.
 */ parcelHelpers.export(exports, "linearRingssAreOriented", ()=>linearRingssAreOriented);
/**
 * Orient coordinates in a flat array of linear rings.  By default, rings
 * are oriented following the left-hand rule (clockwise for exterior and
 * counter-clockwise for interior rings).  To orient according to the
 * right-hand rule, use the `right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {boolean} [right] Follow the right-hand rule for orientation.
 * @return {number} End.
 */ parcelHelpers.export(exports, "orientLinearRings", ()=>orientLinearRings);
/**
 * Orient coordinates in a flat array of linear rings.  By default, rings
 * are oriented following the left-hand rule (clockwise for exterior and
 * counter-clockwise for interior rings).  To orient according to the
 * right-hand rule, use the `right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Array of array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean} [right] Follow the right-hand rule for orientation.
 * @return {number} End.
 */ parcelHelpers.export(exports, "orientLinearRingsArray", ()=>orientLinearRingsArray);
/**
 * Return a two-dimensional endss
 * @param {Array<number>} flatCoordinates Flat coordinates
 * @param {Array<number>} ends Linear ring end indexes
 * @return {Array<Array<number>>} Two dimensional endss array that can
 * be used to construct a MultiPolygon
 */ parcelHelpers.export(exports, "inflateEnds", ()=>inflateEnds);
var _reverseJs = require("./reverse.js");
function linearRingIsClockwise(flatCoordinates, offset, end, stride) {
    // https://stackoverflow.com/q/1165647/clockwise-method#1165943
    // https://github.com/OSGeo/gdal/blob/master/gdal/ogr/ogrlinearring.cpp
    let edge = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for(; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        edge += (x2 - x1) * (y2 + y1);
        x1 = x2;
        y1 = y2;
    }
    return edge === 0 ? undefined : edge > 0;
}
function linearRingsAreOriented(flatCoordinates, offset, ends, stride, right) {
    right = right !== undefined ? right : false;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        const isClockwise = linearRingIsClockwise(flatCoordinates, offset, end, stride);
        if (i === 0) {
            if (right && isClockwise || !right && !isClockwise) return false;
        } else {
            if (right && !isClockwise || !right && isClockwise) return false;
        }
        offset = end;
    }
    return true;
}
function linearRingssAreOriented(flatCoordinates, offset, endss, stride, right) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        if (!linearRingsAreOriented(flatCoordinates, offset, ends, stride, right)) return false;
        if (ends.length) offset = ends[ends.length - 1];
    }
    return true;
}
function orientLinearRings(flatCoordinates, offset, ends, stride, right) {
    right = right !== undefined ? right : false;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        const isClockwise = linearRingIsClockwise(flatCoordinates, offset, end, stride);
        const reverse = i === 0 ? right && isClockwise || !right && !isClockwise : right && !isClockwise || !right && isClockwise;
        if (reverse) (0, _reverseJs.coordinates)(flatCoordinates, offset, end, stride);
        offset = end;
    }
    return offset;
}
function orientLinearRingsArray(flatCoordinates, offset, endss, stride, right) {
    for(let i = 0, ii = endss.length; i < ii; ++i)offset = orientLinearRings(flatCoordinates, offset, endss[i], stride, right);
    return offset;
}
function inflateEnds(flatCoordinates, ends) {
    const endss = [];
    let offset = 0;
    let prevEndIndex = 0;
    let startOrientation;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        // classifies an array of rings into polygons with outer rings and holes
        const orientation = linearRingIsClockwise(flatCoordinates, offset, end, 2);
        if (startOrientation === undefined) startOrientation = orientation;
        if (orientation === startOrientation) endss.push(ends.slice(prevEndIndex, i + 1));
        else {
            if (endss.length === 0) continue;
            endss[endss.length - 1].push(ends[prevEndIndex]);
        }
        prevEndIndex = i + 1;
        offset = end;
    }
    return endss;
}

},{"./reverse.js":"hksTe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hksTe":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/reverse
 */ /**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "coordinates", ()=>coordinates);
function coordinates(flatCoordinates, offset, end, stride) {
    while(offset < end - stride){
        for(let i = 0; i < stride; ++i){
            const tmp = flatCoordinates[offset + i];
            flatCoordinates[offset + i] = flatCoordinates[end - stride + i];
            flatCoordinates[end - stride + i] = tmp;
        }
        offset += stride;
        end -= stride;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OVXr":[function(require,module,exports,__globalThis) {
/**
 * @module ol/geom/flat/center
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @return {Array<number>} Flat centers.
 */ parcelHelpers.export(exports, "linearRingss", ()=>linearRingss);
var _extentJs = require("../../extent.js");
function linearRingss(flatCoordinates, offset, endss, stride) {
    const flatCenters = [];
    let extent = (0, _extentJs.createEmpty)();
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        extent = (0, _extentJs.createOrUpdateFromFlatCoordinates)(flatCoordinates, offset, ends[0], stride);
        flatCenters.push((extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2);
        offset = ends[ends.length - 1];
    }
    return flatCenters;
}

},{"../../extent.js":"6YrVc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3a1E4":[function(require,module,exports,__globalThis) {
/**
 * @module ol
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Collection", ()=>(0, _collectionJsDefault.default));
parcelHelpers.export(exports, "Disposable", ()=>(0, _disposableJsDefault.default));
parcelHelpers.export(exports, "Feature", ()=>(0, _featureJsDefault.default));
parcelHelpers.export(exports, "Geolocation", ()=>(0, _geolocationJsDefault.default));
parcelHelpers.export(exports, "Graticule", ()=>(0, _graticuleJsDefault.default));
parcelHelpers.export(exports, "Image", ()=>(0, _imageJsDefault.default));
parcelHelpers.export(exports, "ImageWrapper", ()=>(0, _imageJsDefault.default));
parcelHelpers.export(exports, "ImageCanvas", ()=>(0, _imageCanvasJsDefault.default));
parcelHelpers.export(exports, "ImageTile", ()=>(0, _imageTileJsDefault.default));
parcelHelpers.export(exports, "Kinetic", ()=>(0, _kineticJsDefault.default));
parcelHelpers.export(exports, "Map", ()=>(0, _mapJsDefault.default));
parcelHelpers.export(exports, "MapBrowserEvent", ()=>(0, _mapBrowserEventJsDefault.default));
parcelHelpers.export(exports, "MapBrowserEventHandler", ()=>(0, _mapBrowserEventHandlerJsDefault.default));
parcelHelpers.export(exports, "MapEvent", ()=>(0, _mapEventJsDefault.default));
parcelHelpers.export(exports, "Object", ()=>(0, _objectJsDefault.default));
parcelHelpers.export(exports, "Observable", ()=>(0, _observableJsDefault.default));
parcelHelpers.export(exports, "Overlay", ()=>(0, _overlayJsDefault.default));
parcelHelpers.export(exports, "Tile", ()=>(0, _tileJsDefault.default));
parcelHelpers.export(exports, "TileCache", ()=>(0, _tileCacheJsDefault.default));
parcelHelpers.export(exports, "TileQueue", ()=>(0, _tileQueueJsDefault.default));
parcelHelpers.export(exports, "TileRange", ()=>(0, _tileRangeJsDefault.default));
parcelHelpers.export(exports, "VectorRenderTile", ()=>(0, _vectorRenderTileJsDefault.default));
parcelHelpers.export(exports, "VectorTile", ()=>(0, _vectorTileJsDefault.default));
parcelHelpers.export(exports, "View", ()=>(0, _viewJsDefault.default));
parcelHelpers.export(exports, "getUid", ()=>(0, _utilJs.getUid));
parcelHelpers.export(exports, "VERSION", ()=>(0, _utilJs.VERSION));
var _collectionJs = require("./Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
var _disposableJs = require("./Disposable.js");
var _disposableJsDefault = parcelHelpers.interopDefault(_disposableJs);
var _featureJs = require("./Feature.js");
var _featureJsDefault = parcelHelpers.interopDefault(_featureJs);
var _geolocationJs = require("./Geolocation.js");
var _geolocationJsDefault = parcelHelpers.interopDefault(_geolocationJs);
var _graticuleJs = require("./layer/Graticule.js");
var _graticuleJsDefault = parcelHelpers.interopDefault(_graticuleJs);
var _imageJs = require("./Image.js");
var _imageJsDefault = parcelHelpers.interopDefault(_imageJs);
var _imageCanvasJs = require("./ImageCanvas.js");
var _imageCanvasJsDefault = parcelHelpers.interopDefault(_imageCanvasJs);
var _imageTileJs = require("./ImageTile.js");
var _imageTileJsDefault = parcelHelpers.interopDefault(_imageTileJs);
var _kineticJs = require("./Kinetic.js");
var _kineticJsDefault = parcelHelpers.interopDefault(_kineticJs);
var _mapJs = require("./Map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _mapBrowserEventJs = require("./MapBrowserEvent.js");
var _mapBrowserEventJsDefault = parcelHelpers.interopDefault(_mapBrowserEventJs);
var _mapBrowserEventHandlerJs = require("./MapBrowserEventHandler.js");
var _mapBrowserEventHandlerJsDefault = parcelHelpers.interopDefault(_mapBrowserEventHandlerJs);
var _mapEventJs = require("./MapEvent.js");
var _mapEventJsDefault = parcelHelpers.interopDefault(_mapEventJs);
var _objectJs = require("./Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _observableJs = require("./Observable.js");
var _observableJsDefault = parcelHelpers.interopDefault(_observableJs);
var _overlayJs = require("./Overlay.js");
var _overlayJsDefault = parcelHelpers.interopDefault(_overlayJs);
var _tileJs = require("./Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _tileCacheJs = require("./TileCache.js");
var _tileCacheJsDefault = parcelHelpers.interopDefault(_tileCacheJs);
var _tileQueueJs = require("./TileQueue.js");
var _tileQueueJsDefault = parcelHelpers.interopDefault(_tileQueueJs);
var _tileRangeJs = require("./TileRange.js");
var _tileRangeJsDefault = parcelHelpers.interopDefault(_tileRangeJs);
var _vectorRenderTileJs = require("./VectorRenderTile.js");
var _vectorRenderTileJsDefault = parcelHelpers.interopDefault(_vectorRenderTileJs);
var _vectorTileJs = require("./VectorTile.js");
var _vectorTileJsDefault = parcelHelpers.interopDefault(_vectorTileJs);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _utilJs = require("./util.js");

},{"./Collection.js":false,"./Disposable.js":false,"./Feature.js":"liabO","./Geolocation.js":false,"./layer/Graticule.js":false,"./Image.js":false,"./ImageCanvas.js":false,"./ImageTile.js":false,"./Kinetic.js":false,"./Map.js":false,"./MapBrowserEvent.js":false,"./MapBrowserEventHandler.js":false,"./MapEvent.js":false,"./Object.js":false,"./Observable.js":false,"./Overlay.js":false,"./Tile.js":false,"./TileCache.js":false,"./TileQueue.js":false,"./TileRange.js":false,"./VectorRenderTile.js":false,"./VectorTile.js":false,"./View.js":false,"./util.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gi4gx":[function(require,module,exports,__globalThis) {
/**
 * Show a popup message that automatically disappears
 * @param {string} message - The message to display
 * @param {string} type - Message type: 'success', 'error', 'warning', or 'info'
 * @param {number} duration - Duration in milliseconds before the message disappears
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showPopupMessage", ()=>showPopupMessage);
function showPopupMessage(message, type = 'info', duration = 5000) {
    // Create popup element
    const popup = document.createElement('div');
    popup.className = `popup-message ${type}`;
    popup.textContent = message;
    // Add to document
    document.body.appendChild(popup);
    // Remove after duration
    setTimeout(()=>{
        popup.style.opacity = '0';
        setTimeout(()=>{
            document.body.removeChild(popup);
        }, 500); // Wait for fade out animation
    }, duration);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5NDio":[function(require,module,exports,__globalThis) {
/**
 * @module org/locationtech/jts/io/OL3Parser
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coordinateJs = require("../geom/Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _geometryFactoryJs = require("../geom/GeometryFactory.js");
var _geometryFactoryJsDefault = parcelHelpers.interopDefault(_geometryFactoryJs);
function p2c(p) {
    return [
        p.x,
        p.y
    ];
}
class OL3Parser {
    /**
   * OpenLayers Geometry parser and writer
   * @param {GeometryFactory} geometryFactory
   * @param {ol} olReference
   */ constructor(geometryFactory, olReference){
        this.geometryFactory = geometryFactory || new (0, _geometryFactoryJsDefault.default)();
        this.ol = olReference || typeof ol !== 'undefined' && ol;
    }
    /**
   * Inject OpenLayers geom classes
   */ inject(Point, LineString, LinearRing, Polygon, MultiPoint, MultiLineString, MultiPolygon, GeometryCollection) {
        this.ol = {
            geom: {
                Point,
                LineString,
                LinearRing,
                Polygon,
                MultiPoint,
                MultiLineString,
                MultiPolygon,
                GeometryCollection
            }
        };
    }
    /**
   * @param geometry {ol.geom.Geometry}
   * @return {Geometry}
   * @memberof module:org/locationtech/jts/io/OL3Parser#
   */ read(geometry) {
        const ol1 = this.ol;
        if (geometry instanceof ol1.geom.Point) return this.convertFromPoint(geometry);
        else if (geometry instanceof ol1.geom.LineString) return this.convertFromLineString(geometry);
        else if (geometry instanceof ol1.geom.LinearRing) return this.convertFromLinearRing(geometry);
        else if (geometry instanceof ol1.geom.Polygon) return this.convertFromPolygon(geometry);
        else if (geometry instanceof ol1.geom.MultiPoint) return this.convertFromMultiPoint(geometry);
        else if (geometry instanceof ol1.geom.MultiLineString) return this.convertFromMultiLineString(geometry);
        else if (geometry instanceof ol1.geom.MultiPolygon) return this.convertFromMultiPolygon(geometry);
        else if (geometry instanceof ol1.geom.GeometryCollection) return this.convertFromCollection(geometry);
    }
    convertFromPoint(point) {
        const coordinates = point.getCoordinates();
        return this.geometryFactory.createPoint(new (0, _coordinateJsDefault.default)(coordinates[0], coordinates[1]));
    }
    convertFromLineString(lineString) {
        return this.geometryFactory.createLineString(lineString.getCoordinates().map(function(coordinates) {
            return new (0, _coordinateJsDefault.default)(coordinates[0], coordinates[1]);
        }));
    }
    convertFromLinearRing(linearRing) {
        return this.geometryFactory.createLinearRing(linearRing.getCoordinates().map(function(coordinates) {
            return new (0, _coordinateJsDefault.default)(coordinates[0], coordinates[1]);
        }));
    }
    convertFromPolygon(polygon) {
        const linearRings = polygon.getLinearRings();
        let shell = null;
        const holes = [];
        for(let i = 0; i < linearRings.length; i++){
            const linearRing = this.convertFromLinearRing(linearRings[i]);
            if (i === 0) shell = linearRing;
            else holes.push(linearRing);
        }
        return this.geometryFactory.createPolygon(shell, holes);
    }
    convertFromMultiPoint(multiPoint) {
        const points = multiPoint.getPoints().map(function(point) {
            return this.convertFromPoint(point);
        }, this);
        return this.geometryFactory.createMultiPoint(points);
    }
    convertFromMultiLineString(multiLineString) {
        const lineStrings = multiLineString.getLineStrings().map(function(lineString) {
            return this.convertFromLineString(lineString);
        }, this);
        return this.geometryFactory.createMultiLineString(lineStrings);
    }
    convertFromMultiPolygon(multiPolygon) {
        const polygons = multiPolygon.getPolygons().map(function(polygon) {
            return this.convertFromPolygon(polygon);
        }, this);
        return this.geometryFactory.createMultiPolygon(polygons);
    }
    convertFromCollection(collection) {
        const geometries = collection.getGeometries().map(function(geometry) {
            return this.read(geometry);
        }, this);
        return this.geometryFactory.createGeometryCollection(geometries);
    }
    /**
   * @param geometry
   *          {Geometry}
   * @return {ol.geom.Geometry}
   * @memberof module:org/locationtech/jts/io/OL3Parser#
   */ write(geometry) {
        if (geometry.getGeometryType() === 'Point') return this.convertToPoint(geometry.getCoordinate());
        else if (geometry.getGeometryType() === 'LineString') return this.convertToLineString(geometry);
        else if (geometry.getGeometryType() === 'LinearRing') return this.convertToLinearRing(geometry);
        else if (geometry.getGeometryType() === 'Polygon') return this.convertToPolygon(geometry);
        else if (geometry.getGeometryType() === 'MultiPoint') return this.convertToMultiPoint(geometry);
        else if (geometry.getGeometryType() === 'MultiLineString') return this.convertToMultiLineString(geometry);
        else if (geometry.getGeometryType() === 'MultiPolygon') return this.convertToMultiPolygon(geometry);
        else if (geometry.getGeometryType() === 'GeometryCollection') return this.convertToCollection(geometry);
    }
    convertToPoint(coordinate) {
        return new this.ol.geom.Point([
            coordinate.x,
            coordinate.y
        ]);
    }
    convertToLineString(lineString) {
        const points = lineString._points._coordinates.map(p2c);
        return new this.ol.geom.LineString(points);
    }
    convertToLinearRing(linearRing) {
        const points = linearRing._points._coordinates.map(p2c);
        return new this.ol.geom.LinearRing(points);
    }
    convertToPolygon(polygon) {
        const rings = [
            polygon._shell._points._coordinates.map(p2c)
        ];
        for(let i = 0; i < polygon._holes.length; i++)rings.push(polygon._holes[i]._points._coordinates.map(p2c));
        return new this.ol.geom.Polygon(rings);
    }
    convertToMultiPoint(multiPoint) {
        return new this.ol.geom.MultiPoint(multiPoint.getCoordinates().map(p2c));
    }
    convertToMultiLineString(multiLineString) {
        const lineStrings = [];
        for(let i = 0; i < multiLineString._geometries.length; i++)lineStrings.push(this.convertToLineString(multiLineString._geometries[i]).getCoordinates());
        return new this.ol.geom.MultiLineString(lineStrings);
    }
    convertToMultiPolygon(multiPolygon) {
        const polygons = [];
        for(let i = 0; i < multiPolygon._geometries.length; i++)polygons.push(this.convertToPolygon(multiPolygon._geometries[i]).getCoordinates());
        return new this.ol.geom.MultiPolygon(polygons);
    }
    convertToCollection(geometryCollection) {
        const geometries = [];
        for(let i = 0; i < geometryCollection._geometries.length; i++){
            const geometry = geometryCollection._geometries[i];
            geometries.push(this.write(geometry));
        }
        return new this.ol.geom.GeometryCollection(geometries);
    }
}
exports.default = OL3Parser;

},{"../geom/Coordinate.js":"3REUb","../geom/GeometryFactory.js":"6Ct9y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3REUb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _numberUtilJs = require("../util/NumberUtil.js");
var _numberUtilJsDefault = parcelHelpers.interopDefault(_numberUtilJs);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
var _doubleJs = require("../../../../java/lang/Double.js");
var _doubleJsDefault = parcelHelpers.interopDefault(_doubleJs);
var _comparableJs = require("../../../../java/lang/Comparable.js");
var _comparableJsDefault = parcelHelpers.interopDefault(_comparableJs);
var _serializableJs = require("../../../../java/io/Serializable.js");
var _serializableJsDefault = parcelHelpers.interopDefault(_serializableJs);
var _assertJs = require("../util/Assert.js");
var _assertJsDefault = parcelHelpers.interopDefault(_assertJs);
var _cloneableJs = require("../../../../java/lang/Cloneable.js");
var _cloneableJsDefault = parcelHelpers.interopDefault(_cloneableJs);
var _comparatorJs = require("../../../../java/util/Comparator.js");
var _comparatorJsDefault = parcelHelpers.interopDefault(_comparatorJs);
const kBuf = new ArrayBuffer(8);
const kBufAsF64 = new Float64Array(kBuf);
const kBufAsI32 = new Int32Array(kBuf);
class Coordinate {
    constructor(){
        Coordinate.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this.x = null;
        this.y = null;
        this.z = null;
        if (arguments.length === 0) Coordinate.constructor_.call(this, 0.0, 0.0);
        else if (arguments.length === 1) {
            const c = arguments[0];
            Coordinate.constructor_.call(this, c.x, c.y, c.getZ());
        } else if (arguments.length === 2) {
            const x = arguments[0], y = arguments[1];
            Coordinate.constructor_.call(this, x, y, Coordinate.NULL_ORDINATE);
        } else if (arguments.length === 3) {
            const x = arguments[0], y = arguments[1], z = arguments[2];
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }
    static hashCode(n) {
        kBufAsF64[0] = n;
        return kBufAsI32[0] ^ kBufAsI32[1];
    }
    equals2D() {
        if (arguments.length === 1) {
            const other = arguments[0];
            if (this.x !== other.x) return false;
            if (this.y !== other.y) return false;
            return true;
        } else if (arguments.length === 2) {
            const c = arguments[0], tolerance = arguments[1];
            if (!(0, _numberUtilJsDefault.default).equalsWithTolerance(this.x, c.x, tolerance)) return false;
            if (!(0, _numberUtilJsDefault.default).equalsWithTolerance(this.y, c.y, tolerance)) return false;
            return true;
        }
    }
    setM(m) {
        throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid ordinate index: ' + Coordinate.M);
    }
    equals3D(other) {
        return this.x === other.x && this.y === other.y && (this.getZ() === other.getZ() || (0, _doubleJsDefault.default).isNaN(this.getZ()) && (0, _doubleJsDefault.default).isNaN(other.getZ()));
    }
    setX(x) {
        this.x = x;
    }
    compareTo(o) {
        const other = o;
        if (this.x < other.x) return -1;
        if (this.x > other.x) return 1;
        if (this.y < other.y) return -1;
        if (this.y > other.y) return 1;
        return 0;
    }
    getX() {
        return this.x;
    }
    copy() {
        return new Coordinate(this);
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ', ' + this.getZ() + ')';
    }
    distance3D(c) {
        const dx = this.x - c.x;
        const dy = this.y - c.y;
        const dz = this.getZ() - c.getZ();
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    getY() {
        return this.y;
    }
    getM() {
        return (0, _doubleJsDefault.default).NaN;
    }
    setOrdinate(ordinateIndex, value) {
        switch(ordinateIndex){
            case Coordinate.X:
                this.x = value;
                break;
            case Coordinate.Y:
                this.y = value;
                break;
            case Coordinate.Z:
                this.setZ(value);
                break;
            default:
                throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid ordinate index: ' + ordinateIndex);
        }
    }
    getZ() {
        return this.z;
    }
    getOrdinate(ordinateIndex) {
        switch(ordinateIndex){
            case Coordinate.X:
                return this.x;
            case Coordinate.Y:
                return this.y;
            case Coordinate.Z:
                return this.getZ();
        }
        throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid ordinate index: ' + ordinateIndex);
    }
    equals(other) {
        if (!(other instanceof Coordinate)) return false;
        return this.equals2D(other);
    }
    equalInZ(c, tolerance) {
        return (0, _numberUtilJsDefault.default).equalsWithTolerance(this.getZ(), c.getZ(), tolerance);
    }
    setZ(z) {
        this.z = z;
    }
    clone() {
        try {
            const coord = null;
            return coord;
        } catch (e) {
            if (e instanceof CloneNotSupportedException) {
                (0, _assertJsDefault.default).shouldNeverReachHere('this shouldn\'t happen because this class is Cloneable');
                return null;
            } else throw e;
        } finally{}
    }
    setY(y) {
        this.y = y;
    }
    distance(c) {
        const dx = this.x - c.x;
        const dy = this.y - c.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    hashCode() {
        let result = 17;
        result = 37 * result + Coordinate.hashCode(this.x);
        result = 37 * result + Coordinate.hashCode(this.y);
        return result;
    }
    setCoordinate(other) {
        this.x = other.x;
        this.y = other.y;
        this.z = other.getZ();
    }
    get interfaces_() {
        return [
            (0, _comparableJsDefault.default),
            (0, _cloneableJsDefault.default),
            (0, _serializableJsDefault.default)
        ];
    }
}
exports.default = Coordinate;
class DimensionalComparator {
    constructor(){
        DimensionalComparator.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._dimensionsToTest = 2;
        if (arguments.length === 0) DimensionalComparator.constructor_.call(this, 2);
        else if (arguments.length === 1) {
            const dimensionsToTest = arguments[0];
            if (dimensionsToTest !== 2 && dimensionsToTest !== 3) throw new (0, _illegalArgumentExceptionJsDefault.default)('only 2 or 3 dimensions may be specified');
            this._dimensionsToTest = dimensionsToTest;
        }
    }
    static compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        if ((0, _doubleJsDefault.default).isNaN(a)) {
            if ((0, _doubleJsDefault.default).isNaN(b)) return 0;
            return -1;
        }
        if ((0, _doubleJsDefault.default).isNaN(b)) return 1;
        return 0;
    }
    compare(c1, c2) {
        const compX = DimensionalComparator.compare(c1.x, c2.x);
        if (compX !== 0) return compX;
        const compY = DimensionalComparator.compare(c1.y, c2.y);
        if (compY !== 0) return compY;
        if (this._dimensionsToTest <= 2) return 0;
        const compZ = DimensionalComparator.compare(c1.getZ(), c2.getZ());
        return compZ;
    }
    get interfaces_() {
        return [
            (0, _comparatorJsDefault.default)
        ];
    }
}
Coordinate.DimensionalComparator = DimensionalComparator;
Coordinate.NULL_ORDINATE = (0, _doubleJsDefault.default).NaN;
Coordinate.X = 0;
Coordinate.Y = 1;
Coordinate.Z = 2;
Coordinate.M = 3;

},{"../util/NumberUtil.js":"eR6uc","../../../../java/lang/IllegalArgumentException.js":"1VQhm","../../../../java/lang/Double.js":"jCc26","../../../../java/lang/Comparable.js":"6Adw4","../../../../java/io/Serializable.js":"4emqV","../util/Assert.js":"ePbcB","../../../../java/lang/Cloneable.js":"bkkIE","../../../../java/util/Comparator.js":"6CEtH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eR6uc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NumberUtil {
    static equalsWithTolerance(x1, x2, tolerance) {
        return Math.abs(x1 - x2) <= tolerance;
    }
}
exports.default = NumberUtil;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VQhm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exceptionJs = require("./Exception.js");
var _exceptionJsDefault = parcelHelpers.interopDefault(_exceptionJs);
class IllegalArgumentException extends (0, _exceptionJsDefault.default) {
    constructor(message){
        super(message);
        this.name = Object.keys({
            IllegalArgumentException
        })[0];
    }
}
exports.default = IllegalArgumentException;

},{"./Exception.js":"gSmog","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSmog":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Exception extends Error {
    constructor(message){
        super(message);
        this.name = Object.keys({
            Exception
        })[0];
    }
    toString() {
        return this.message;
    }
}
exports.default = Exception;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jCc26":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Double);
var _longJs = require("./Long.js");
var _longJsDefault = parcelHelpers.interopDefault(_longJs);
function Double() {}
Double.NaN = NaN;
Double.isNaN = (n)=>Number.isNaN(n);
Double.isInfinite = (n)=>!Number.isFinite(n);
Double.MAX_VALUE = Number.MAX_VALUE;
Double.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Double.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
if (typeof Float64Array === 'function' && typeof Int32Array === 'function') // Simple and fast conversion between double and long bits
// using TypedArrays and ArrayViewBuffers.
(function() {
    const EXP_BIT_MASK = 0x7ff00000;
    const SIGNIF_BIT_MASK = 0xFFFFF;
    const f64buf = new Float64Array(1);
    const i32buf = new Int32Array(f64buf.buffer);
    Double.doubleToLongBits = function(value) {
        f64buf[0] = value;
        let low = i32buf[0] | 0;
        let high = i32buf[1] | 0;
        // Check for NaN based on values of bit fields, maximum
        // exponent and nonzero significand.
        if ((high & EXP_BIT_MASK) === EXP_BIT_MASK && (high & SIGNIF_BIT_MASK) !== 0 && low !== 0) {
            low = 0;
            high = 2146959360;
        }
        return new (0, _longJsDefault.default)(high, low);
    };
    Double.longBitsToDouble = function(bits) {
        i32buf[0] = bits.low;
        i32buf[1] = bits.high;
        return f64buf[0];
    };
})();
else // More complex and slower fallback implementation using
// math and the divide-by-two and multiply-by-two algorithms.
(function() {
    const BIAS = 1023;
    const log2 = Math.log2;
    const floor = Math.floor;
    const pow = Math.pow;
    const MAX_REL_BITS_INTEGER = function() {
        for(let i = 53; i > 0; i--){
            const bits = pow(2, i) - 1;
            if (floor(log2(bits)) + 1 === i) return bits;
        }
        return 0;
    }();
    Double.doubleToLongBits = function(value) {
        let x, y, f, bits, skip;
        let sign, exp, high, low;
        // Get the sign bit and absolute value.
        if (value < 0 || 1 / value === Number.NEGATIVE_INFINITY) {
            sign = -2147483648;
            value = -value;
        } else sign = 0;
        // Handle some special values.
        if (value === 0) {
            // Handle zeros (+/-0).
            low = 0;
            high = sign // exponent: 00..00, significand: 00..00
            ;
            return new (0, _longJsDefault.default)(high, low);
        }
        if (value === Infinity) {
            // Handle infinity (only positive values for value possible).
            low = 0;
            high = sign | 0x7ff00000 // exponent: 11..11, significand: 00..00
            ;
            return new (0, _longJsDefault.default)(high, low);
        }
        if (value !== value) {
            // Handle NaNs (boiled down to only one distinct NaN).
            low = 0;
            high = 0x7ff80000 // exponent: 11..11, significand: 10..00
            ;
            return new (0, _longJsDefault.default)(high, low);
        }
        // Preinitialize variables, that are not neccessarily set by
        // the algorithm.
        bits = 0;
        low = 0;
        // Get the (always positive) integer part of value.
        x = floor(value);
        // Process the integer part if it's greater than 1. Zero requires
        // no bits at all, 1 represents the implicit (hidden) leading bit,
        // which must not be written as well.
        if (x > 1) {
            // If we can reliably determine the number of bits required for
            // the integer part,
            if (x <= MAX_REL_BITS_INTEGER) {
                // get the number of bits required to represent it minus 1
                bits = floor(log2(x));
                /* + 1 - 1 */ // and simply copy/shift the integer bits into low and high.
                // That's much faster than the divide-by-two algorithm (saves
                // up to ~60%).
                // We always need to mask out the most significant bit, which
                // is the implicit (aka hidden) bit.
                if (bits <= 20) {
                    // The simple case in which the integer fits into the
                    // lower 20 bits of the high word is worth to be handled
                    // separately (saves ~25%).
                    low = 0;
                    high = x << 20 - bits & 0xfffff;
                } else {
                    // Here, the integer part is split into low and high.
                    // Since its value may require more than 32 bits, we
                    // cannot use bitwise operators (which implicitly cast
                    // to Int32), but use arithmetic operators % and / to
                    // get low and high parts. The uppper 20 bits go to high,
                    // the remaining bits (in f) to low.
                    f = bits - 20;
                    // Like (1 << f) but safe with even more than 32 bits.
                    y = pow(2, f);
                    low = x % y << 32 - f;
                    high = x / y & 0xfffff;
                }
            } else {
                // For greater values, we must use the much slower divide-by-two
                // algorithm. Bits are generated from right to left, that is from
                // least to most significant bit. For each bit, we left-shift both
                // low and high by one and carry bit #0 from high to #31 in low.
                // The next bit is then copied into bit #19 in high, the leftmost
                // bit of the double's significand.
                // Preserve x for later user, so work with f.
                f = x;
                low = 0;
                for(;;){
                    y = f / 2;
                    f = floor(y);
                    if (f === 0) break;
                    // Count this bit, shift low and carry bit #0 from high.
                    bits++;
                    low >>>= 1;
                    low |= (high & 0x1) << 31;
                    // Shift high.
                    high >>>= 1;
                    if (y !== f) // Copy the new bit into bit #19 in high (only required if 1).
                    high |= 0x80000;
                }
            }
        }
        // Bias the exponent.
        exp = bits + BIAS;
        // If the integer part is zero, we've not yet seen the implicit
        // leading bit. Variable skip is later used while processing the
        // fractional part (if any).
        skip = x === 0;
        // Get fraction only into x.
        x = value - x;
        // If some significand bits are still left to be filled and
        // the fractional part is not zero, convert the fraction using
        // the multiply-by-2 algorithm.
        if (bits < 52 && x !== 0) {
            // Initialize 'buffer' f, into which newly created bits get
            // shifted from right to left.
            f = 0;
            for(;;){
                y = x * 2;
                if (y >= 1) {
                    // This is a new 1-bit. Add and count this bit, if not
                    // prohibited by skip.
                    x = y - 1;
                    if (!skip) {
                        f <<= 1;
                        f |= 1;
                        bits++;
                    } else {
                        // Otherwise, decrement the exponent and unset
                        // skip, so that all following bits get written.
                        exp--;
                        skip = false;
                    }
                } else {
                    // This is a new 0-bit. Add and count this bit, if not
                    // prohibited by skip.
                    x = y;
                    if (!skip) {
                        f <<= 1;
                        bits++;
                    } else if (--exp === 0) {
                        // Otherwise we've just decremented the exponent. If the
                        // biased exponent is zero now (-1023), we process a
                        // subnormal number, which has no impled leading 1-bit.
                        // So, count this 0-bit and unset skip to write out
                        // all the following bits.
                        bits++;
                        skip = false;
                    }
                }
                if (bits === 20) {
                    // When 20 bits have been created in total, we're done with
                    // the high word. Copy the bits from 'buffer' f into high
                    // and reset 'buffer' f. Following bits will end up in the
                    // low word.
                    high |= f;
                    f = 0;
                } else if (bits === 52) {
                    // When 52 bits have been created in total, we're done with
                    // low word as well. Copy the bits from 'buffer' f into low
                    // and exit the loop.
                    low |= f;
                    break;
                }
                if (y === 1) {
                    // When y is exactly 1, there is no remainder and the process
                    // is complete (the number is finite). Copy the bits from
                    // 'buffer' f into either low or high and exit the loop.
                    if (bits < 20) high |= f << 20 - bits;
                    else if (bits < 52) low |= f << 52 - bits;
                    break;
                }
            }
        }
        // Copy/shift the exponent and sign bits into the high word.
        high |= exp << 20;
        high |= sign;
        return new (0, _longJsDefault.default)(high, low);
    };
    Double.longBitsToDouble = function(bits) {
        let i;
        let x, exp, fract;
        const high = bits.high;
        const low = bits.low;
        // Extract the sign.
        const sign = high & -2147483648 ? -1 : 1;
        // Extract the unbiased exponent.
        exp = ((high & 0x7ff00000) >> 20) - BIAS;
        // Calculate the fraction from left to right. Start
        // off with the 20 lower bits from the high word.
        fract = 0;
        x = 524288;
        for(i = 1; i <= 20; i++){
            if (high & x) fract += pow(2, -i);
            x >>>= 1;
        }
        // Continue with all 32 bits from the low word.
        x = -2147483648;
        for(i = 21; i <= 52; i++){
            if (low & x) fract += pow(2, -i);
            x >>>= 1;
        }
        // Handle special values.
        // Check for zero and subnormal values.
        if (exp === -BIAS) {
            if (fract === 0) // +/-1.0 * 0.0 => +/-0.0
            return sign * 0;
            exp = -1022;
        } else if (exp === BIAS + 1) {
            if (fract === 0) // +/-1.0 / 0.0 => +/-Infinity
            return sign / 0;
            return NaN;
        } else // Add the implicit leading bit (1*2^0).
        fract += 1;
        return sign * fract * pow(2, exp);
    };
})();

},{"./Long.js":"lCWie","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCWie":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Long {
    constructor(high, low){
        this.low = low || 0;
        this.high = high || 0;
    }
    static toBinaryString(i) {
        let mask;
        let result = '';
        for(mask = 0x80000000; mask > 0; mask >>>= 1)result += (i.high & mask) === mask ? '1' : '0';
        for(mask = 0x80000000; mask > 0; mask >>>= 1)result += (i.low & mask) === mask ? '1' : '0';
        return result;
    }
}
exports.default = Long;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Adw4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Comparable);
function Comparable() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4emqV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Serializable);
function Serializable() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ePbcB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assertionFailedExceptionJs = require("./AssertionFailedException.js");
var _assertionFailedExceptionJsDefault = parcelHelpers.interopDefault(_assertionFailedExceptionJs);
class Assert {
    static isTrue() {
        if (arguments.length === 1) {
            const assertion = arguments[0];
            Assert.isTrue(assertion, null);
        } else if (arguments.length === 2) {
            const assertion = arguments[0], message = arguments[1];
            if (!assertion) {
                if (message === null) throw new (0, _assertionFailedExceptionJsDefault.default)();
                else throw new (0, _assertionFailedExceptionJsDefault.default)(message);
            }
        }
    }
    static shouldNeverReachHere() {
        if (arguments.length === 0) Assert.shouldNeverReachHere(null);
        else if (arguments.length === 1) {
            const message = arguments[0];
            throw new (0, _assertionFailedExceptionJsDefault.default)('Should never reach here' + (message !== null ? ': ' + message : ''));
        }
    }
    static equals() {
        if (arguments.length === 2) {
            const expectedValue = arguments[0], actualValue = arguments[1];
            Assert.equals(expectedValue, actualValue, null);
        } else if (arguments.length === 3) {
            const expectedValue = arguments[0], actualValue = arguments[1], message = arguments[2];
            if (!actualValue.equals(expectedValue)) throw new (0, _assertionFailedExceptionJsDefault.default)('Expected ' + expectedValue + ' but encountered ' + actualValue + (message !== null ? ': ' + message : ''));
        }
    }
}
exports.default = Assert;

},{"./AssertionFailedException.js":"aEG2h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEG2h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _runtimeExceptionJs = require("../../../../java/lang/RuntimeException.js");
var _runtimeExceptionJsDefault = parcelHelpers.interopDefault(_runtimeExceptionJs);
class AssertionFailedException extends (0, _runtimeExceptionJsDefault.default) {
    constructor(){
        super();
        AssertionFailedException.constructor_.apply(this, arguments);
    }
    static constructor_() {
        if (arguments.length === 0) (0, _runtimeExceptionJsDefault.default).constructor_.call(this);
        else if (arguments.length === 1) {
            const message = arguments[0];
            (0, _runtimeExceptionJsDefault.default).constructor_.call(this, message);
        }
    }
}
exports.default = AssertionFailedException;

},{"../../../../java/lang/RuntimeException.js":"1sBnT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1sBnT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exceptionJs = require("./Exception.js");
var _exceptionJsDefault = parcelHelpers.interopDefault(_exceptionJs);
class RuntimeException extends (0, _exceptionJsDefault.default) {
    constructor(message){
        super(message);
        this.name = Object.keys({
            RuntimeException
        })[0];
    }
}
exports.default = RuntimeException;

},{"./Exception.js":"gSmog","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkkIE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Clonable);
function Clonable() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6CEtH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Comparator);
function Comparator() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Ct9y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasInterfaceJs = require("../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _linearRingJs = require("./LinearRing.js");
var _linearRingJsDefault = parcelHelpers.interopDefault(_linearRingJs);
var _coordinateArraySequenceFactoryJs = require("./impl/CoordinateArraySequenceFactory.js");
var _coordinateArraySequenceFactoryJsDefault = parcelHelpers.interopDefault(_coordinateArraySequenceFactoryJs);
var _multiPolygonJs = require("./MultiPolygon.js");
var _multiPolygonJsDefault = parcelHelpers.interopDefault(_multiPolygonJs);
var _coordinateSequencesJs = require("./CoordinateSequences.js");
var _coordinateSequencesJsDefault = parcelHelpers.interopDefault(_coordinateSequencesJs);
var _precisionModelJs = require("./PrecisionModel.js");
var _precisionModelJsDefault = parcelHelpers.interopDefault(_precisionModelJs);
var _serializableJs = require("../../../../java/io/Serializable.js");
var _serializableJsDefault = parcelHelpers.interopDefault(_serializableJs);
var _assertJs = require("../util/Assert.js");
var _assertJsDefault = parcelHelpers.interopDefault(_assertJs);
var _multiLineStringJs = require("./MultiLineString.js");
var _multiLineStringJsDefault = parcelHelpers.interopDefault(_multiLineStringJs);
var _coordinateSequenceFactoryJs = require("./CoordinateSequenceFactory.js");
var _coordinateSequenceFactoryJsDefault = parcelHelpers.interopDefault(_coordinateSequenceFactoryJs);
var _lineStringJs = require("./LineString.js");
var _lineStringJsDefault = parcelHelpers.interopDefault(_lineStringJs);
var _coordinateJs = require("./Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
var _pointJs = require("./Point.js");
var _pointJsDefault = parcelHelpers.interopDefault(_pointJs);
var _polygonJs = require("./Polygon.js");
var _polygonJsDefault = parcelHelpers.interopDefault(_polygonJs);
var _multiPointJs = require("./MultiPoint.js");
var _multiPointJsDefault = parcelHelpers.interopDefault(_multiPointJs);
var _coordinateSequenceJs = require("./CoordinateSequence.js");
var _coordinateSequenceJsDefault = parcelHelpers.interopDefault(_coordinateSequenceJs);
var _geometryCollectionJs = require("./GeometryCollection.js");
var _geometryCollectionJsDefault = parcelHelpers.interopDefault(_geometryCollectionJs);
class GeometryFactory {
    constructor(){
        GeometryFactory.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._precisionModel = null;
        this._coordinateSequenceFactory = null;
        this._SRID = null;
        if (arguments.length === 0) GeometryFactory.constructor_.call(this, new (0, _precisionModelJsDefault.default)(), 0);
        else if (arguments.length === 1) {
            if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceFactoryJsDefault.default))) {
                const coordinateSequenceFactory = arguments[0];
                GeometryFactory.constructor_.call(this, new (0, _precisionModelJsDefault.default)(), 0, coordinateSequenceFactory);
            } else if (arguments[0] instanceof (0, _precisionModelJsDefault.default)) {
                const precisionModel = arguments[0];
                GeometryFactory.constructor_.call(this, precisionModel, 0, GeometryFactory.getDefaultCoordinateSequenceFactory());
            }
        } else if (arguments.length === 2) {
            const precisionModel = arguments[0], SRID = arguments[1];
            GeometryFactory.constructor_.call(this, precisionModel, SRID, GeometryFactory.getDefaultCoordinateSequenceFactory());
        } else if (arguments.length === 3) {
            const precisionModel = arguments[0], SRID = arguments[1], coordinateSequenceFactory = arguments[2];
            this._precisionModel = precisionModel;
            this._coordinateSequenceFactory = coordinateSequenceFactory;
            this._SRID = SRID;
        }
    }
    static toMultiPolygonArray(multiPolygons) {
        const multiPolygonArray = new Array(multiPolygons.size()).fill(null);
        return multiPolygons.toArray(multiPolygonArray);
    }
    static toGeometryArray(geometries) {
        if (geometries === null) return null;
        const geometryArray = new Array(geometries.size()).fill(null);
        return geometries.toArray(geometryArray);
    }
    static getDefaultCoordinateSequenceFactory() {
        return (0, _coordinateArraySequenceFactoryJsDefault.default).instance();
    }
    static toMultiLineStringArray(multiLineStrings) {
        const multiLineStringArray = new Array(multiLineStrings.size()).fill(null);
        return multiLineStrings.toArray(multiLineStringArray);
    }
    static toLineStringArray(lineStrings) {
        const lineStringArray = new Array(lineStrings.size()).fill(null);
        return lineStrings.toArray(lineStringArray);
    }
    static toMultiPointArray(multiPoints) {
        const multiPointArray = new Array(multiPoints.size()).fill(null);
        return multiPoints.toArray(multiPointArray);
    }
    static toLinearRingArray(linearRings) {
        const linearRingArray = new Array(linearRings.size()).fill(null);
        return linearRings.toArray(linearRingArray);
    }
    static toPointArray(points) {
        const pointArray = new Array(points.size()).fill(null);
        return points.toArray(pointArray);
    }
    static toPolygonArray(polygons) {
        const polygonArray = new Array(polygons.size()).fill(null);
        return polygons.toArray(polygonArray);
    }
    static createPointFromInternalCoord(coord, exemplar) {
        exemplar.getPrecisionModel().makePrecise(coord);
        return exemplar.getFactory().createPoint(coord);
    }
    createEmpty(dimension) {
        switch(dimension){
            case -1:
                return this.createGeometryCollection();
            case 0:
                return this.createPoint();
            case 1:
                return this.createLineString();
            case 2:
                return this.createPolygon();
            default:
                throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid dimension: ' + dimension);
        }
    }
    toGeometry(envelope) {
        if (envelope.isNull()) return this.createPoint();
        if (envelope.getMinX() === envelope.getMaxX() && envelope.getMinY() === envelope.getMaxY()) return this.createPoint(new (0, _coordinateJsDefault.default)(envelope.getMinX(), envelope.getMinY()));
        if (envelope.getMinX() === envelope.getMaxX() || envelope.getMinY() === envelope.getMaxY()) return this.createLineString([
            new (0, _coordinateJsDefault.default)(envelope.getMinX(), envelope.getMinY()),
            new (0, _coordinateJsDefault.default)(envelope.getMaxX(), envelope.getMaxY())
        ]);
        return this.createPolygon(this.createLinearRing([
            new (0, _coordinateJsDefault.default)(envelope.getMinX(), envelope.getMinY()),
            new (0, _coordinateJsDefault.default)(envelope.getMinX(), envelope.getMaxY()),
            new (0, _coordinateJsDefault.default)(envelope.getMaxX(), envelope.getMaxY()),
            new (0, _coordinateJsDefault.default)(envelope.getMaxX(), envelope.getMinY()),
            new (0, _coordinateJsDefault.default)(envelope.getMinX(), envelope.getMinY())
        ]), null);
    }
    createLineString() {
        if (arguments.length === 0) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
        else if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
                const coordinates = arguments[0];
                return this.createLineString(coordinates !== null ? this.getCoordinateSequenceFactory().create(coordinates) : null);
            } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default))) {
                const coordinates = arguments[0];
                return new (0, _lineStringJsDefault.default)(coordinates, this);
            }
        }
    }
    createMultiLineString() {
        if (arguments.length === 0) return new (0, _multiLineStringJsDefault.default)(null, this);
        else if (arguments.length === 1) {
            const lineStrings = arguments[0];
            return new (0, _multiLineStringJsDefault.default)(lineStrings, this);
        }
    }
    createPolygon() {
        if (arguments.length === 0) return this.createPolygon(null, null);
        else if (arguments.length === 1) {
            if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default))) {
                const shell = arguments[0];
                return this.createPolygon(this.createLinearRing(shell));
            } else if (arguments[0] instanceof Array) {
                const shell = arguments[0];
                return this.createPolygon(this.createLinearRing(shell));
            } else if (arguments[0] instanceof (0, _linearRingJsDefault.default)) {
                const shell = arguments[0];
                return this.createPolygon(shell, null);
            }
        } else if (arguments.length === 2) {
            const shell = arguments[0], holes = arguments[1];
            return new (0, _polygonJsDefault.default)(shell, holes, this);
        }
    }
    getSRID() {
        return this._SRID;
    }
    createGeometryCollection() {
        if (arguments.length === 0) return new (0, _geometryCollectionJsDefault.default)(null, this);
        else if (arguments.length === 1) {
            const geometries = arguments[0];
            return new (0, _geometryCollectionJsDefault.default)(geometries, this);
        }
    }
    getPrecisionModel() {
        return this._precisionModel;
    }
    createLinearRing() {
        if (arguments.length === 0) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
        else if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
                const coordinates = arguments[0];
                return this.createLinearRing(coordinates !== null ? this.getCoordinateSequenceFactory().create(coordinates) : null);
            } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default))) {
                const coordinates = arguments[0];
                return new (0, _linearRingJsDefault.default)(coordinates, this);
            }
        }
    }
    createMultiPolygon() {
        if (arguments.length === 0) return new (0, _multiPolygonJsDefault.default)(null, this);
        else if (arguments.length === 1) {
            const polygons = arguments[0];
            return new (0, _multiPolygonJsDefault.default)(polygons, this);
        }
    }
    createMultiPoint() {
        if (arguments.length === 0) return new (0, _multiPointJsDefault.default)(null, this);
        else if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
                const point = arguments[0];
                return new (0, _multiPointJsDefault.default)(point, this);
            } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default))) {
                const coordinates = arguments[0];
                if (coordinates === null) return this.createMultiPoint(new Array(0).fill(null));
                const points = new Array(coordinates.size()).fill(null);
                for(let i = 0; i < coordinates.size(); i++){
                    const ptSeq = this.getCoordinateSequenceFactory().create(1, coordinates.getDimension(), coordinates.getMeasures());
                    (0, _coordinateSequencesJsDefault.default).copy(coordinates, i, ptSeq, 0, 1);
                    points[i] = this.createPoint(ptSeq);
                }
                return this.createMultiPoint(points);
            }
        }
    }
    buildGeometry(geomList) {
        let geomType = null;
        let isHeterogeneous = false;
        let hasGeometryCollection = false;
        for(let i = geomList.iterator(); i.hasNext();){
            const geom = i.next();
            const partType = geom.getTypeCode();
            if (geomType === null) geomType = partType;
            if (partType !== geomType) isHeterogeneous = true;
            if (geom instanceof (0, _geometryCollectionJsDefault.default)) hasGeometryCollection = true;
        }
        if (geomType === null) return this.createGeometryCollection();
        if (isHeterogeneous || hasGeometryCollection) return this.createGeometryCollection(GeometryFactory.toGeometryArray(geomList));
        const geom0 = geomList.iterator().next();
        const isCollection = geomList.size() > 1;
        if (isCollection) {
            if (geom0 instanceof (0, _polygonJsDefault.default)) return this.createMultiPolygon(GeometryFactory.toPolygonArray(geomList));
            else if (geom0 instanceof (0, _lineStringJsDefault.default)) return this.createMultiLineString(GeometryFactory.toLineStringArray(geomList));
            else if (geom0 instanceof (0, _pointJsDefault.default)) return this.createMultiPoint(GeometryFactory.toPointArray(geomList));
            (0, _assertJsDefault.default).shouldNeverReachHere('Unhandled geometry type: ' + geom0.getGeometryType());
        }
        return geom0;
    }
    createMultiPointFromCoords(coordinates) {
        return this.createMultiPoint(coordinates !== null ? this.getCoordinateSequenceFactory().create(coordinates) : null);
    }
    createPoint() {
        if (arguments.length === 0) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
        else if (arguments.length === 1) {
            if (arguments[0] instanceof (0, _coordinateJsDefault.default)) {
                const coordinate = arguments[0];
                return this.createPoint(coordinate !== null ? this.getCoordinateSequenceFactory().create([
                    coordinate
                ]) : null);
            } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default))) {
                const coordinates = arguments[0];
                return new (0, _pointJsDefault.default)(coordinates, this);
            }
        }
    }
    getCoordinateSequenceFactory() {
        return this._coordinateSequenceFactory;
    }
    get interfaces_() {
        return [
            (0, _serializableJsDefault.default)
        ];
    }
}
exports.default = GeometryFactory;

},{"../../../../hasInterface.js":"d8mIo","./LinearRing.js":"iks2I","./impl/CoordinateArraySequenceFactory.js":"bKVoa","./MultiPolygon.js":"56YaT","./CoordinateSequences.js":"fFRyy","./PrecisionModel.js":"9xUYw","../../../../java/io/Serializable.js":"4emqV","../util/Assert.js":"ePbcB","./MultiLineString.js":"fdpMS","./CoordinateSequenceFactory.js":"hAZID","./LineString.js":"1Hc8p","./Coordinate.js":"3REUb","../../../../java/lang/IllegalArgumentException.js":"1VQhm","./Point.js":"i9MoJ","./Polygon.js":"jawWe","./MultiPoint.js":"ikww2","./CoordinateSequence.js":"3GfKT","./GeometryCollection.js":"9xeCT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8mIo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(o, i) {
        return o.interfaces_ && o.interfaces_.indexOf(i) > -1;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iks2I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lineStringJs = require("./LineString.js");
var _lineStringJsDefault = parcelHelpers.interopDefault(_lineStringJs);
var _geometryJs = require("./Geometry.js");
var _geometryJsDefault = parcelHelpers.interopDefault(_geometryJs);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
var _coordinateSequencesJs = require("./CoordinateSequences.js");
var _coordinateSequencesJsDefault = parcelHelpers.interopDefault(_coordinateSequencesJs);
var _dimensionJs = require("./Dimension.js");
var _dimensionJsDefault = parcelHelpers.interopDefault(_dimensionJs);
class LinearRing extends (0, _lineStringJsDefault.default) {
    constructor(){
        super();
        LinearRing.constructor_.apply(this, arguments);
    }
    static constructor_() {
        const points = arguments[0], factory = arguments[1];
        (0, _lineStringJsDefault.default).constructor_.call(this, points, factory);
        this.validateConstruction();
    }
    copyInternal() {
        return new LinearRing(this._points.copy(), this._factory);
    }
    getBoundaryDimension() {
        return (0, _dimensionJsDefault.default).FALSE;
    }
    isClosed() {
        if (this.isEmpty()) return true;
        return super.isClosed.call(this);
    }
    reverseInternal() {
        const seq = this._points.copy();
        (0, _coordinateSequencesJsDefault.default).reverse(seq);
        return this.getFactory().createLinearRing(seq);
    }
    getTypeCode() {
        return (0, _geometryJsDefault.default).TYPECODE_LINEARRING;
    }
    validateConstruction() {
        if (!this.isEmpty() && !super.isClosed.call(this)) throw new (0, _illegalArgumentExceptionJsDefault.default)('Points of LinearRing do not form a closed linestring');
        if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < LinearRing.MINIMUM_VALID_SIZE) throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid number of points in LinearRing (found ' + this.getCoordinateSequence().size() + ' - must be 0 or >= 4)');
    }
    getGeometryType() {
        return (0, _geometryJsDefault.default).TYPENAME_LINEARRING;
    }
}
exports.default = LinearRing;
LinearRing.MINIMUM_VALID_SIZE = 4;

},{"./LineString.js":"1Hc8p","./Geometry.js":"d5V2e","../../../../java/lang/IllegalArgumentException.js":"1VQhm","./CoordinateSequences.js":"fFRyy","./Dimension.js":"966Ye","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Hc8p":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasInterfaceJs = require("../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _lengthJs = require("../algorithm/Length.js");
var _lengthJsDefault = parcelHelpers.interopDefault(_lengthJs);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
var _geometryComponentFilterJs = require("./GeometryComponentFilter.js");
var _geometryComponentFilterJsDefault = parcelHelpers.interopDefault(_geometryComponentFilterJs);
var _unsupportedOperationExceptionJs = require("../../../../java/lang/UnsupportedOperationException.js");
var _unsupportedOperationExceptionJsDefault = parcelHelpers.interopDefault(_unsupportedOperationExceptionJs);
var _coordinateArraysJs = require("./CoordinateArrays.js");
var _coordinateArraysJsDefault = parcelHelpers.interopDefault(_coordinateArraysJs);
var _dimensionJs = require("./Dimension.js");
var _dimensionJsDefault = parcelHelpers.interopDefault(_dimensionJs);
var _envelopeJs = require("./Envelope.js");
var _envelopeJsDefault = parcelHelpers.interopDefault(_envelopeJs);
var _geometryJs = require("./Geometry.js");
var _geometryJsDefault = parcelHelpers.interopDefault(_geometryJs);
var _coordinateFilterJs = require("./CoordinateFilter.js");
var _coordinateFilterJsDefault = parcelHelpers.interopDefault(_coordinateFilterJs);
var _linealJs = require("./Lineal.js");
var _linealJsDefault = parcelHelpers.interopDefault(_linealJs);
var _coordinateSequencesJs = require("./CoordinateSequences.js");
var _coordinateSequencesJsDefault = parcelHelpers.interopDefault(_coordinateSequencesJs);
var _geometryFilterJs = require("./GeometryFilter.js");
var _geometryFilterJsDefault = parcelHelpers.interopDefault(_geometryFilterJs);
var _coordinateSequenceFilterJs = require("./CoordinateSequenceFilter.js");
var _coordinateSequenceFilterJsDefault = parcelHelpers.interopDefault(_coordinateSequenceFilterJs);
class LineString extends (0, _geometryJsDefault.default) {
    constructor(){
        super();
        LineString.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._points = null;
        if (arguments.length === 0) ;
        else if (arguments.length === 2) {
            const points = arguments[0], factory = arguments[1];
            (0, _geometryJsDefault.default).constructor_.call(this, factory);
            this.init(points);
        }
    }
    computeEnvelopeInternal() {
        if (this.isEmpty()) return new (0, _envelopeJsDefault.default)();
        return this._points.expandEnvelope(new (0, _envelopeJsDefault.default)());
    }
    isRing() {
        return this.isClosed() && (0, _coordinateArraysJsDefault.default).isRing(this.getCoordinates());
    }
    getCoordinates() {
        return this._points.toCoordinateArray();
    }
    copyInternal() {
        return new LineString(this._points.copy(), this._factory);
    }
    equalsExact() {
        if (arguments.length === 2 && typeof arguments[1] === 'number' && arguments[0] instanceof (0, _geometryJsDefault.default)) {
            const other = arguments[0], tolerance = arguments[1];
            if (!this.isEquivalentClass(other)) return false;
            const otherLineString = other;
            if (this._points.size() !== otherLineString._points.size()) return false;
            for(let i = 0; i < this._points.size(); i++)if (!this.equal(this._points.getCoordinate(i), otherLineString._points.getCoordinate(i), tolerance)) return false;
            return true;
        } else return super.equalsExact.apply(this, arguments);
    }
    isClosed() {
        if (this.isEmpty()) return false;
        return this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
    }
    reverseInternal() {
        const seq = this._points.copy();
        (0, _coordinateSequencesJsDefault.default).reverse(seq);
        return this.getFactory().createLineString(seq);
    }
    getEndPoint() {
        if (this.isEmpty()) return null;
        return this.getPointN(this.getNumPoints() - 1);
    }
    getTypeCode() {
        return (0, _geometryJsDefault.default).TYPECODE_LINESTRING;
    }
    getDimension() {
        return 1;
    }
    getBoundary() {
        throw new (0, _unsupportedOperationExceptionJsDefault.default)();
    }
    isEquivalentClass(other) {
        return other instanceof LineString;
    }
    getCoordinateSequence() {
        return this._points;
    }
    getPointN(n) {
        return this.getFactory().createPoint(this._points.getCoordinate(n));
    }
    normalize() {
        for(let i = 0; i < Math.trunc(this._points.size() / 2); i++){
            const j = this._points.size() - 1 - i;
            if (!this._points.getCoordinate(i).equals(this._points.getCoordinate(j))) {
                if (this._points.getCoordinate(i).compareTo(this._points.getCoordinate(j)) > 0) {
                    const copy = this._points.copy();
                    (0, _coordinateSequencesJsDefault.default).reverse(copy);
                    this._points = copy;
                }
                return null;
            }
        }
    }
    getCoordinate() {
        if (this.isEmpty()) return null;
        return this._points.getCoordinate(0);
    }
    getBoundaryDimension() {
        if (this.isClosed()) return (0, _dimensionJsDefault.default).FALSE;
        return 0;
    }
    getLength() {
        return (0, _lengthJsDefault.default).ofLine(this._points);
    }
    getNumPoints() {
        return this._points.size();
    }
    compareToSameClass() {
        if (arguments.length === 1) {
            const o = arguments[0];
            const line = o;
            let i = 0;
            let j = 0;
            while(i < this._points.size() && j < line._points.size()){
                const comparison = this._points.getCoordinate(i).compareTo(line._points.getCoordinate(j));
                if (comparison !== 0) return comparison;
                i++;
                j++;
            }
            if (i < this._points.size()) return 1;
            if (j < line._points.size()) return -1;
            return 0;
        } else if (arguments.length === 2) {
            const o = arguments[0], comp = arguments[1];
            const line = o;
            return comp.compare(this._points, line._points);
        }
    }
    apply() {
        if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateFilterJsDefault.default))) {
            const filter = arguments[0];
            for(let i = 0; i < this._points.size(); i++)filter.filter(this._points.getCoordinate(i));
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceFilterJsDefault.default))) {
            const filter = arguments[0];
            if (this._points.size() === 0) return null;
            for(let i = 0; i < this._points.size(); i++){
                filter.filter(this._points, i);
                if (filter.isDone()) break;
            }
            if (filter.isGeometryChanged()) this.geometryChanged();
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _geometryFilterJsDefault.default))) {
            const filter = arguments[0];
            filter.filter(this);
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _geometryComponentFilterJsDefault.default))) {
            const filter = arguments[0];
            filter.filter(this);
        }
    }
    getCoordinateN(n) {
        return this._points.getCoordinate(n);
    }
    getGeometryType() {
        return (0, _geometryJsDefault.default).TYPENAME_LINESTRING;
    }
    isEmpty() {
        return this._points.size() === 0;
    }
    init(points) {
        if (points === null) points = this.getFactory().getCoordinateSequenceFactory().create([]);
        if (points.size() === 1) throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid number of points in LineString (found ' + points.size() + ' - must be 0 or >= 2)');
        this._points = points;
    }
    isCoordinate(pt) {
        for(let i = 0; i < this._points.size(); i++)if (this._points.getCoordinate(i).equals(pt)) return true;
        return false;
    }
    getStartPoint() {
        if (this.isEmpty()) return null;
        return this.getPointN(0);
    }
    get interfaces_() {
        return [
            (0, _linealJsDefault.default)
        ];
    }
}
exports.default = LineString;

},{"../../../../hasInterface.js":"d8mIo","../algorithm/Length.js":"2f2sM","../../../../java/lang/IllegalArgumentException.js":"1VQhm","./GeometryComponentFilter.js":"8aMWe","../../../../java/lang/UnsupportedOperationException.js":"fEx26","./CoordinateArrays.js":"hwXsf","./Dimension.js":"966Ye","./Envelope.js":"ha5UZ","./Geometry.js":"d5V2e","./CoordinateFilter.js":"9F02P","./Lineal.js":"fZhBn","./CoordinateSequences.js":"fFRyy","./GeometryFilter.js":"djHvd","./CoordinateSequenceFilter.js":"8HUHX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2f2sM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coordinateJs = require("../geom/Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
class Length {
    static ofLine(pts) {
        const n = pts.size();
        if (n <= 1) return 0.0;
        let len = 0.0;
        const p = new (0, _coordinateJsDefault.default)();
        pts.getCoordinate(0, p);
        let x0 = p.x;
        let y0 = p.y;
        for(let i = 1; i < n; i++){
            pts.getCoordinate(i, p);
            const x1 = p.x;
            const y1 = p.y;
            const dx = x1 - x0;
            const dy = y1 - y0;
            len += Math.sqrt(dx * dx + dy * dy);
            x0 = x1;
            y0 = y1;
        }
        return len;
    }
}
exports.default = Length;

},{"../geom/Coordinate.js":"3REUb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8aMWe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class GeometryComponentFilter {
    filter(geom) {}
}
exports.default = GeometryComponentFilter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fEx26":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exceptionJs = require("./Exception.js");
var _exceptionJsDefault = parcelHelpers.interopDefault(_exceptionJs);
class UnsupportedOperationException extends (0, _exceptionJsDefault.default) {
    constructor(message){
        super(message);
        this.name = Object.keys({
            UnsupportedOperationException
        })[0];
    }
}
exports.default = UnsupportedOperationException;

},{"./Exception.js":"gSmog","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwXsf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coordinateListJs = require("./CoordinateList.js");
var _coordinateListJsDefault = parcelHelpers.interopDefault(_coordinateListJs);
var _coordinatesJs = require("./Coordinates.js");
var _coordinatesJsDefault = parcelHelpers.interopDefault(_coordinatesJs);
var _mathUtilJs = require("../math/MathUtil.js");
var _mathUtilJsDefault = parcelHelpers.interopDefault(_mathUtilJs);
var _systemJs = require("../../../../java/lang/System.js");
var _systemJsDefault = parcelHelpers.interopDefault(_systemJs);
var _comparatorJs = require("../../../../java/util/Comparator.js");
var _comparatorJsDefault = parcelHelpers.interopDefault(_comparatorJs);
var _envelopeJs = require("./Envelope.js");
var _envelopeJsDefault = parcelHelpers.interopDefault(_envelopeJs);
class CoordinateArrays {
    static scroll(coordinates, firstCoordinate) {
        const i = CoordinateArrays.indexOf(firstCoordinate, coordinates);
        if (i < 0) return null;
        const newCoordinates = new Array(coordinates.length).fill(null);
        (0, _systemJsDefault.default).arraycopy(coordinates, i, newCoordinates, 0, coordinates.length - i);
        (0, _systemJsDefault.default).arraycopy(coordinates, 0, newCoordinates, coordinates.length - i, i);
        (0, _systemJsDefault.default).arraycopy(newCoordinates, 0, coordinates, 0, coordinates.length);
    }
    static removeRepeatedPoints(coord) {
        if (!CoordinateArrays.hasRepeatedPoints(coord)) return coord;
        const coordList = new (0, _coordinateListJsDefault.default)(coord, false);
        return coordList.toCoordinateArray();
    }
    static reverse(coord) {
        const last = coord.length - 1;
        const mid = Math.trunc(last / 2);
        for(let i = 0; i <= mid; i++){
            const tmp = coord[i];
            coord[i] = coord[last - i];
            coord[last - i] = tmp;
        }
    }
    static removeNull(coord) {
        let nonNull = 0;
        for(let i = 0; i < coord.length; i++)if (coord[i] !== null) nonNull++;
        const newCoord = new Array(nonNull).fill(null);
        if (nonNull === 0) return newCoord;
        let j = 0;
        for(let i = 0; i < coord.length; i++)if (coord[i] !== null) newCoord[j++] = coord[i];
        return newCoord;
    }
    static copyDeep() {
        if (arguments.length === 1) {
            const coordinates = arguments[0];
            const copy = new Array(coordinates.length).fill(null);
            for(let i = 0; i < coordinates.length; i++)copy[i] = coordinates[i].copy();
            return copy;
        } else if (arguments.length === 5) {
            const src = arguments[0], srcStart = arguments[1], dest = arguments[2], destStart = arguments[3], length = arguments[4];
            for(let i = 0; i < length; i++)dest[destStart + i] = src[srcStart + i].copy();
        }
    }
    static isEqualReversed(pts1, pts2) {
        for(let i = 0; i < pts1.length; i++){
            const p1 = pts1[i];
            const p2 = pts2[pts1.length - i - 1];
            if (p1.compareTo(p2) !== 0) return false;
        }
        return true;
    }
    static envelope(coordinates) {
        const env = new (0, _envelopeJsDefault.default)();
        for(let i = 0; i < coordinates.length; i++)env.expandToInclude(coordinates[i]);
        return env;
    }
    static extract(pts, start, end) {
        start = (0, _mathUtilJsDefault.default).clamp(start, 0, pts.length);
        end = (0, _mathUtilJsDefault.default).clamp(end, -1, pts.length);
        let npts = end - start + 1;
        if (end < 0) npts = 0;
        if (start >= pts.length) npts = 0;
        if (end < start) npts = 0;
        const extractPts = new Array(npts).fill(null);
        if (npts === 0) return extractPts;
        let iPts = 0;
        for(let i = start; i <= end; i++)extractPts[iPts++] = pts[i];
        return extractPts;
    }
    static isRing(pts) {
        if (pts.length < 4) return false;
        if (!pts[0].equals2D(pts[pts.length - 1])) return false;
        return true;
    }
    static ptNotInList(testPts, pts) {
        for(let i = 0; i < testPts.length; i++){
            const testPt = testPts[i];
            if (CoordinateArrays.indexOf(testPt, pts) < 0) return testPt;
        }
        return null;
    }
    static equals() {
        if (arguments.length === 2) {
            const coord1 = arguments[0], coord2 = arguments[1];
            if (coord1 === coord2) return true;
            if (coord1 === null || coord2 === null) return false;
            if (coord1.length !== coord2.length) return false;
            for(let i = 0; i < coord1.length; i++)if (!coord1[i].equals(coord2[i])) return false;
            return true;
        } else if (arguments.length === 3) {
            const coord1 = arguments[0], coord2 = arguments[1], coordinateComparator = arguments[2];
            if (coord1 === coord2) return true;
            if (coord1 === null || coord2 === null) return false;
            if (coord1.length !== coord2.length) return false;
            for(let i = 0; i < coord1.length; i++)if (coordinateComparator.compare(coord1[i], coord2[i]) !== 0) return false;
            return true;
        }
    }
    static intersection(coordinates, env) {
        const coordList = new (0, _coordinateListJsDefault.default)();
        for(let i = 0; i < coordinates.length; i++)if (env.intersects(coordinates[i])) coordList.add(coordinates[i], true);
        return coordList.toCoordinateArray();
    }
    static measures(pts) {
        if (pts === null || pts.length === 0) return 0;
        let measures = 0;
        for (const coordinate of pts)measures = Math.max(measures, (0, _coordinatesJsDefault.default).measures(coordinate));
        return measures;
    }
    static hasRepeatedPoints(coord) {
        for(let i = 1; i < coord.length; i++)if (coord[i - 1].equals(coord[i])) return true;
        return false;
    }
    static toCoordinateArray(coordList) {
        return coordList.toArray(CoordinateArrays.coordArrayType);
    }
    static dimension(pts) {
        if (pts === null || pts.length === 0) return 3;
        let dimension = 0;
        for (const coordinate of pts)dimension = Math.max(dimension, (0, _coordinatesJsDefault.default).dimension(coordinate));
        return dimension;
    }
    static atLeastNCoordinatesOrNothing(n, c) {
        return c.length >= n ? c : [];
    }
    static indexOf(coordinate, coordinates) {
        for(let i = 0; i < coordinates.length; i++)if (coordinate.equals(coordinates[i])) return i;
        return -1;
    }
    static increasingDirection(pts) {
        for(let i = 0; i < Math.trunc(pts.length / 2); i++){
            const j = pts.length - 1 - i;
            const comp = pts[i].compareTo(pts[j]);
            if (comp !== 0) return comp;
        }
        return 1;
    }
    static compare(pts1, pts2) {
        let i = 0;
        while(i < pts1.length && i < pts2.length){
            const compare = pts1[i].compareTo(pts2[i]);
            if (compare !== 0) return compare;
            i++;
        }
        if (i < pts2.length) return -1;
        if (i < pts1.length) return 1;
        return 0;
    }
    static minCoordinate(coordinates) {
        let minCoord = null;
        for(let i = 0; i < coordinates.length; i++)if (minCoord === null || minCoord.compareTo(coordinates[i]) > 0) minCoord = coordinates[i];
        return minCoord;
    }
}
exports.default = CoordinateArrays;
class ForwardComparator {
    compare(o1, o2) {
        const pts1 = o1;
        const pts2 = o2;
        return CoordinateArrays.compare(pts1, pts2);
    }
    get interfaces_() {
        return [
            (0, _comparatorJsDefault.default)
        ];
    }
}
class BidirectionalComparator {
    compare(o1, o2) {
        const pts1 = o1;
        const pts2 = o2;
        if (pts1.length < pts2.length) return -1;
        if (pts1.length > pts2.length) return 1;
        if (pts1.length === 0) return 0;
        const forwardComp = CoordinateArrays.compare(pts1, pts2);
        const isEqualRev = CoordinateArrays.isEqualReversed(pts1, pts2);
        if (isEqualRev) return 0;
        return forwardComp;
    }
    OLDcompare(o1, o2) {
        const pts1 = o1;
        const pts2 = o2;
        if (pts1.length < pts2.length) return -1;
        if (pts1.length > pts2.length) return 1;
        if (pts1.length === 0) return 0;
        const dir1 = CoordinateArrays.increasingDirection(pts1);
        const dir2 = CoordinateArrays.increasingDirection(pts2);
        let i1 = dir1 > 0 ? 0 : pts1.length - 1;
        let i2 = dir2 > 0 ? 0 : pts1.length - 1;
        for(let i = 0; i < pts1.length; i++){
            const comparePt = pts1[i1].compareTo(pts2[i2]);
            if (comparePt !== 0) return comparePt;
            i1 += dir1;
            i2 += dir2;
        }
        return 0;
    }
    get interfaces_() {
        return [
            (0, _comparatorJsDefault.default)
        ];
    }
}
CoordinateArrays.ForwardComparator = ForwardComparator;
CoordinateArrays.BidirectionalComparator = BidirectionalComparator;
CoordinateArrays.coordArrayType = new Array(0).fill(null);

},{"./CoordinateList.js":"39sXT","./Coordinates.js":"iNVOk","../math/MathUtil.js":"hTgav","../../../../java/lang/System.js":"11VqP","../../../../java/util/Comparator.js":"6CEtH","./Envelope.js":"ha5UZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39sXT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasInterfaceJs = require("../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _collectionJs = require("../../../../java/util/Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
var _coordinateJs = require("./Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _arrayListJs = require("../../../../java/util/ArrayList.js");
var _arrayListJsDefault = parcelHelpers.interopDefault(_arrayListJs);
class CoordinateList extends (0, _arrayListJsDefault.default) {
    constructor(){
        super();
        CoordinateList.constructor_.apply(this, arguments);
    }
    static constructor_() {
        if (arguments.length === 0) ;
        else if (arguments.length === 1) {
            const coord = arguments[0];
            this.ensureCapacity(coord.length);
            this.add(coord, true);
        } else if (arguments.length === 2) {
            const coord = arguments[0], allowRepeated = arguments[1];
            this.ensureCapacity(coord.length);
            this.add(coord, allowRepeated);
        }
    }
    getCoordinate(i) {
        return this.get(i);
    }
    addAll() {
        if (arguments.length === 2 && typeof arguments[1] === 'boolean' && (0, _hasInterfaceJsDefault.default)(arguments[0], (0, _collectionJsDefault.default))) {
            const coll = arguments[0], allowRepeated = arguments[1];
            let isChanged = false;
            for(let i = coll.iterator(); i.hasNext();){
                this.add(i.next(), allowRepeated);
                isChanged = true;
            }
            return isChanged;
        } else return super.addAll.apply(this, arguments);
    }
    clone() {
        const clone = super.clone.call(this);
        for(let i = 0; i < this.size(); i++)clone.add(i, this.get(i).clone());
        return clone;
    }
    closeRing() {
        if (this.size() > 0) {
            const duplicate = this.get(0).copy();
            this.add(duplicate, false);
        }
    }
    toCoordinateArray() {
        if (arguments.length === 0) return this.toArray(CoordinateList.coordArrayType);
        else if (arguments.length === 1) {
            const isForward = arguments[0];
            if (isForward) return this.toArray(CoordinateList.coordArrayType);
            const size = this.size();
            const pts = new Array(size).fill(null);
            for(let i = 0; i < size; i++)pts[i] = this.get(size - i - 1);
            return pts;
        }
    }
    add() {
        if (arguments.length === 1) {
            const coord = arguments[0];
            return super.add.call(this, coord);
        } else if (arguments.length === 2) {
            if (arguments[0] instanceof Array && typeof arguments[1] === 'boolean') {
                const coord = arguments[0], allowRepeated = arguments[1];
                this.add(coord, allowRepeated, true);
                return true;
            } else if (arguments[0] instanceof (0, _coordinateJsDefault.default) && typeof arguments[1] === 'boolean') {
                const coord = arguments[0], allowRepeated = arguments[1];
                if (!allowRepeated) {
                    if (this.size() >= 1) {
                        const last = this.get(this.size() - 1);
                        if (last.equals2D(coord)) return null;
                    }
                }
                super.add.call(this, coord);
            } else if (arguments[0] instanceof Object && typeof arguments[1] === 'boolean') {
                const obj = arguments[0], allowRepeated = arguments[1];
                this.add(obj, allowRepeated);
                return true;
            }
        } else if (arguments.length === 3) {
            if (typeof arguments[2] === 'boolean' && arguments[0] instanceof Array && typeof arguments[1] === 'boolean') {
                const coord = arguments[0], allowRepeated = arguments[1], direction = arguments[2];
                if (direction) for(let i = 0; i < coord.length; i++)this.add(coord[i], allowRepeated);
                else for(let i = coord.length - 1; i >= 0; i--)this.add(coord[i], allowRepeated);
                return true;
            } else if (typeof arguments[2] === 'boolean' && Number.isInteger(arguments[0]) && arguments[1] instanceof (0, _coordinateJsDefault.default)) {
                const i = arguments[0], coord = arguments[1], allowRepeated = arguments[2];
                if (!allowRepeated) {
                    const size = this.size();
                    if (size > 0) {
                        if (i > 0) {
                            const prev = this.get(i - 1);
                            if (prev.equals2D(coord)) return null;
                        }
                        if (i < size) {
                            const next = this.get(i);
                            if (next.equals2D(coord)) return null;
                        }
                    }
                }
                super.add.call(this, i, coord);
            }
        } else if (arguments.length === 4) {
            const coord = arguments[0], allowRepeated = arguments[1], start = arguments[2], end = arguments[3];
            let inc = 1;
            if (start > end) inc = -1;
            for(let i = start; i !== end; i += inc)this.add(coord[i], allowRepeated);
            return true;
        }
    }
}
exports.default = CoordinateList;
CoordinateList.coordArrayType = new Array(0).fill(null);

},{"../../../../hasInterface.js":"d8mIo","../../../../java/util/Collection.js":"fbl5V","./Coordinate.js":"3REUb","../../../../java/util/ArrayList.js":"g8omH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fbl5V":[function(require,module,exports,__globalThis) {
/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Collection.html
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Collection {
    /**
     * Ensures that this collection contains the specified element (optional
     * operation).
     * @param {Object} e
     * @return {boolean}
     */ add() {}
    /**
     * Appends all of the elements in the specified collection to the end of this
     * list, in the order that they are returned by the specified collection's
     * iterator (optional operation).
     * @param {javascript.util.Collection} c
     * @return {boolean}
     */ addAll() {}
    /**
     * Returns true if this collection contains no elements.
     * @return {boolean}
     */ isEmpty() {}
    /**
     * Returns an iterator over the elements in this collection.
     * @return {javascript.util.Iterator}
     */ iterator() {}
    /**
     * Returns an iterator over the elements in this collection.
     * @return {number}
     */ size() {}
    /**
     * Returns an array containing all of the elements in this collection.
     * @return {Array}
     */ toArray() {}
    /**
     * Removes a single instance of the specified element from this collection if it
     * is present. (optional)
     * @param {Object} e
     * @return {boolean}
     */ remove() {}
}
exports.default = Collection;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g8omH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _collectionJs = require("./Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
var _indexOutOfBoundsExceptionJs = require("../lang/IndexOutOfBoundsException.js");
var _indexOutOfBoundsExceptionJsDefault = parcelHelpers.interopDefault(_indexOutOfBoundsExceptionJs);
var _listJs = require("./List.js");
var _listJsDefault = parcelHelpers.interopDefault(_listJs);
var _noSuchElementExceptionJs = require("./NoSuchElementException.js");
var _noSuchElementExceptionJsDefault = parcelHelpers.interopDefault(_noSuchElementExceptionJs);
class ArrayList extends (0, _listJsDefault.default) {
    constructor(o){
        super();
        this.array = [];
        if (o instanceof (0, _collectionJsDefault.default)) this.addAll(o);
    }
    get interfaces_() {
        return [
            (0, _listJsDefault.default),
            (0, _collectionJsDefault.default)
        ];
    }
    ensureCapacity() {}
    add(e) {
        if (arguments.length === 1) this.array.push(e);
        else this.array.splice(arguments[0], 0, arguments[1]);
        return true;
    }
    clear() {
        this.array = [];
    }
    addAll(c) {
        for (const e of c)this.array.push(e);
    }
    set(index, element) {
        const oldElement = this.array[index];
        this.array[index] = element;
        return oldElement;
    }
    iterator() {
        return new Iterator(this);
    }
    get(index) {
        if (index < 0 || index >= this.size()) throw new (0, _indexOutOfBoundsExceptionJsDefault.default)();
        return this.array[index];
    }
    isEmpty() {
        return this.array.length === 0;
    }
    sort(comparator) {
        if (comparator) this.array.sort((a, b)=>comparator.compare(a, b));
        else this.array.sort();
    }
    size() {
        return this.array.length;
    }
    toArray() {
        return this.array.slice();
    }
    remove(o) {
        for(let i = 0, len = this.array.length; i < len; i++)if (this.array[i] === o) return !!this.array.splice(i, 1);
        return false;
    }
    [Symbol.iterator]() {
        return this.array.values();
    }
}
exports.default = ArrayList;
class Iterator {
    constructor(arrayList){
        this.arrayList = arrayList;
        this.position = 0;
    }
    next() {
        if (this.position === this.arrayList.size()) throw new (0, _noSuchElementExceptionJsDefault.default)();
        return this.arrayList.get(this.position++);
    }
    hasNext() {
        return this.position < this.arrayList.size();
    }
    set(element) {
        return this.arrayList.set(this.position - 1, element);
    }
    remove() {
        this.arrayList.remove(this.arrayList.get(this.position));
    }
}

},{"./Collection.js":"fbl5V","../lang/IndexOutOfBoundsException.js":"hKwCB","./List.js":"5xM2g","./NoSuchElementException.js":"1NxXp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKwCB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exceptionJs = require("./Exception.js");
var _exceptionJsDefault = parcelHelpers.interopDefault(_exceptionJs);
class IndexOutOfBoundsException extends (0, _exceptionJsDefault.default) {
    constructor(message){
        super(message);
        this.name = Object.keys({
            IndexOutOfBoundsException
        })[0];
    }
}
exports.default = IndexOutOfBoundsException;

},{"./Exception.js":"gSmog","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5xM2g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _collectionJs = require("./Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
class List extends (0, _collectionJsDefault.default) {
    /**
     * Returns the element at the specified position in this list.
     * @param {number} index
     * @return {Object}
     */ get() {}
    /**
     * Replaces the element at the specified position in this list with the
     * specified element (optional operation).
     * @param {number} index
     * @param {Object} e
     * @return {Object}
     */ set() {}
    /**
     * Returns true if this collection contains no elements.
     * @return {boolean}
     */ isEmpty() {}
}
exports.default = List;

},{"./Collection.js":"fbl5V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1NxXp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exceptionJs = require("../lang/Exception.js");
var _exceptionJsDefault = parcelHelpers.interopDefault(_exceptionJs);
class NoSuchElementException extends (0, _exceptionJsDefault.default) {
    constructor(message){
        super(message);
        this.name = Object.keys({
            NoSuchElementException
        })[0];
    }
}
exports.default = NoSuchElementException;

},{"../lang/Exception.js":"gSmog","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNVOk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coordinateXYJs = require("./CoordinateXY.js");
var _coordinateXYJsDefault = parcelHelpers.interopDefault(_coordinateXYJs);
var _coordinateJs = require("./Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _coordinateXYMJs = require("./CoordinateXYM.js");
var _coordinateXYMJsDefault = parcelHelpers.interopDefault(_coordinateXYMJs);
var _coordinateXYZMJs = require("./CoordinateXYZM.js");
var _coordinateXYZMJsDefault = parcelHelpers.interopDefault(_coordinateXYZMJs);
class Coordinates {
    static measures(coordinate) {
        if (coordinate instanceof (0, _coordinateXYJsDefault.default)) return 0;
        else if (coordinate instanceof (0, _coordinateXYMJsDefault.default)) return 1;
        else if (coordinate instanceof (0, _coordinateXYZMJsDefault.default)) return 1;
        else if (coordinate instanceof (0, _coordinateJsDefault.default)) return 0;
        return 0;
    }
    static create() {
        if (arguments.length === 1) {
            const dimension = arguments[0];
            return Coordinates.create(dimension, 0);
        } else if (arguments.length === 2) {
            const dimension = arguments[0], measures = arguments[1];
            if (dimension === 2) return new (0, _coordinateXYJsDefault.default)();
            else if (dimension === 3 && measures === 0) return new (0, _coordinateJsDefault.default)();
            else if (dimension === 3 && measures === 1) return new (0, _coordinateXYMJsDefault.default)();
            else if (dimension === 4 && measures === 1) return new (0, _coordinateXYZMJsDefault.default)();
            return new (0, _coordinateJsDefault.default)();
        }
    }
    static dimension(coordinate) {
        if (coordinate instanceof (0, _coordinateXYJsDefault.default)) return 2;
        else if (coordinate instanceof (0, _coordinateXYMJsDefault.default)) return 3;
        else if (coordinate instanceof (0, _coordinateXYZMJsDefault.default)) return 4;
        else if (coordinate instanceof (0, _coordinateJsDefault.default)) return 3;
        return 3;
    }
}
exports.default = Coordinates;

},{"./CoordinateXY.js":"gufGP","./Coordinate.js":"3REUb","./CoordinateXYM.js":"7v4Sk","./CoordinateXYZM.js":"g5hXR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gufGP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coordinateJs = require("./Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
class CoordinateXY extends (0, _coordinateJsDefault.default) {
    constructor(){
        super();
        CoordinateXY.constructor_.apply(this, arguments);
    }
    static constructor_() {
        if (arguments.length === 0) (0, _coordinateJsDefault.default).constructor_.call(this);
        else if (arguments.length === 1) {
            if (arguments[0] instanceof CoordinateXY) {
                const coord = arguments[0];
                (0, _coordinateJsDefault.default).constructor_.call(this, coord.x, coord.y);
            } else if (arguments[0] instanceof (0, _coordinateJsDefault.default)) {
                const coord = arguments[0];
                (0, _coordinateJsDefault.default).constructor_.call(this, coord.x, coord.y);
            }
        } else if (arguments.length === 2) {
            const x = arguments[0], y = arguments[1];
            (0, _coordinateJsDefault.default).constructor_.call(this, x, y, (0, _coordinateJsDefault.default).NULL_ORDINATE);
        }
    }
    setOrdinate(ordinateIndex, value) {
        switch(ordinateIndex){
            case CoordinateXY.X:
                this.x = value;
                break;
            case CoordinateXY.Y:
                this.y = value;
                break;
            default:
                throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid ordinate index: ' + ordinateIndex);
        }
    }
    setZ(z) {
        throw new (0, _illegalArgumentExceptionJsDefault.default)('CoordinateXY dimension 2 does not support z-ordinate');
    }
    copy() {
        return new CoordinateXY(this);
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
    setCoordinate(other) {
        this.x = other.x;
        this.y = other.y;
        this.z = other.getZ();
    }
    getZ() {
        return (0, _coordinateJsDefault.default).NULL_ORDINATE;
    }
    getOrdinate(ordinateIndex) {
        switch(ordinateIndex){
            case CoordinateXY.X:
                return this.x;
            case CoordinateXY.Y:
                return this.y;
        }
        throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid ordinate index: ' + ordinateIndex);
    }
}
exports.default = CoordinateXY;
CoordinateXY.X = 0;
CoordinateXY.Y = 1;
CoordinateXY.Z = -1;
CoordinateXY.M = -1;

},{"./Coordinate.js":"3REUb","../../../../java/lang/IllegalArgumentException.js":"1VQhm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7v4Sk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coordinateJs = require("./Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
class CoordinateXYM extends (0, _coordinateJsDefault.default) {
    constructor(){
        super();
        CoordinateXYM.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._m = null;
        if (arguments.length === 0) {
            (0, _coordinateJsDefault.default).constructor_.call(this);
            this._m = 0.0;
        } else if (arguments.length === 1) {
            if (arguments[0] instanceof CoordinateXYM) {
                const coord = arguments[0];
                (0, _coordinateJsDefault.default).constructor_.call(this, coord.x, coord.y);
                this._m = coord._m;
            } else if (arguments[0] instanceof (0, _coordinateJsDefault.default)) {
                const coord = arguments[0];
                (0, _coordinateJsDefault.default).constructor_.call(this, coord.x, coord.y);
                this._m = this.getM();
            }
        } else if (arguments.length === 3) {
            const x = arguments[0], y = arguments[1], m = arguments[2];
            (0, _coordinateJsDefault.default).constructor_.call(this, x, y, (0, _coordinateJsDefault.default).NULL_ORDINATE);
            this._m = m;
        }
    }
    setM(m) {
        this._m = m;
    }
    setZ(z) {
        throw new (0, _illegalArgumentExceptionJsDefault.default)('CoordinateXY dimension 2 does not support z-ordinate');
    }
    copy() {
        return new CoordinateXYM(this);
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ' m=' + this.getM() + ')';
    }
    setCoordinate(other) {
        this.x = other.x;
        this.y = other.y;
        this.z = other.getZ();
        this._m = other.getM();
    }
    getM() {
        return this._m;
    }
    setOrdinate(ordinateIndex, value) {
        switch(ordinateIndex){
            case CoordinateXYM.X:
                this.x = value;
                break;
            case CoordinateXYM.Y:
                this.y = value;
                break;
            case CoordinateXYM.M:
                this._m = value;
                break;
            default:
                throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid ordinate index: ' + ordinateIndex);
        }
    }
    getZ() {
        return (0, _coordinateJsDefault.default).NULL_ORDINATE;
    }
    getOrdinate(ordinateIndex) {
        switch(ordinateIndex){
            case CoordinateXYM.X:
                return this.x;
            case CoordinateXYM.Y:
                return this.y;
            case CoordinateXYM.M:
                return this._m;
        }
        throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid ordinate index: ' + ordinateIndex);
    }
}
exports.default = CoordinateXYM;
CoordinateXYM.X = 0;
CoordinateXYM.Y = 1;
CoordinateXYM.Z = -1;
CoordinateXYM.M = 2;

},{"./Coordinate.js":"3REUb","../../../../java/lang/IllegalArgumentException.js":"1VQhm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g5hXR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coordinateJs = require("./Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
class CoordinateXYZM extends (0, _coordinateJsDefault.default) {
    constructor(){
        super();
        CoordinateXYZM.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._m = null;
        if (arguments.length === 0) {
            (0, _coordinateJsDefault.default).constructor_.call(this);
            this._m = 0.0;
        } else if (arguments.length === 1) {
            if (arguments[0] instanceof CoordinateXYZM) {
                const coord = arguments[0];
                (0, _coordinateJsDefault.default).constructor_.call(this, coord);
                this._m = coord._m;
            } else if (arguments[0] instanceof (0, _coordinateJsDefault.default)) {
                const coord = arguments[0];
                (0, _coordinateJsDefault.default).constructor_.call(this, coord);
                this._m = this.getM();
            }
        } else if (arguments.length === 4) {
            const x = arguments[0], y = arguments[1], z = arguments[2], m = arguments[3];
            (0, _coordinateJsDefault.default).constructor_.call(this, x, y, z);
            this._m = m;
        }
    }
    setM(m) {
        this._m = m;
    }
    getOrdinate(ordinateIndex) {
        switch(ordinateIndex){
            case (0, _coordinateJsDefault.default).X:
                return this.x;
            case (0, _coordinateJsDefault.default).Y:
                return this.y;
            case (0, _coordinateJsDefault.default).Z:
                return this.getZ();
            case (0, _coordinateJsDefault.default).M:
                return this.getM();
        }
        throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid ordinate index: ' + ordinateIndex);
    }
    copy() {
        return new CoordinateXYZM(this);
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ', ' + this.getZ() + ' m=' + this.getM() + ')';
    }
    setCoordinate(other) {
        this.x = other.x;
        this.y = other.y;
        this.z = other.getZ();
        this._m = other.getM();
    }
    getM() {
        return this._m;
    }
    setOrdinate(ordinateIndex, value) {
        switch(ordinateIndex){
            case (0, _coordinateJsDefault.default).X:
                this.x = value;
                break;
            case (0, _coordinateJsDefault.default).Y:
                this.y = value;
                break;
            case (0, _coordinateJsDefault.default).Z:
                this.z = value;
                break;
            case (0, _coordinateJsDefault.default).M:
                this._m = value;
                break;
            default:
                throw new (0, _illegalArgumentExceptionJsDefault.default)('Invalid ordinate index: ' + ordinateIndex);
        }
    }
}
exports.default = CoordinateXYZM;

},{"./Coordinate.js":"3REUb","../../../../java/lang/IllegalArgumentException.js":"1VQhm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hTgav":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _doubleJs = require("../../../../java/lang/Double.js");
var _doubleJsDefault = parcelHelpers.interopDefault(_doubleJs);
class MathUtil {
    static log10(x) {
        const ln = Math.log(x);
        if ((0, _doubleJsDefault.default).isInfinite(ln)) return ln;
        if ((0, _doubleJsDefault.default).isNaN(ln)) return ln;
        return ln / MathUtil.LOG_10;
    }
    static min(v1, v2, v3, v4) {
        let min = v1;
        if (v2 < min) min = v2;
        if (v3 < min) min = v3;
        if (v4 < min) min = v4;
        return min;
    }
    static clamp() {
        if (typeof arguments[2] === 'number' && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
            const x = arguments[0], min = arguments[1], max = arguments[2];
            if (x < min) return min;
            if (x > max) return max;
            return x;
        } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            const x = arguments[0], min = arguments[1], max = arguments[2];
            if (x < min) return min;
            if (x > max) return max;
            return x;
        }
    }
    static average(x1, x2) {
        return (x1 + x2) / 2.0;
    }
    static wrap(index, max) {
        if (index < 0) return max - -index % max;
        return index % max;
    }
    static max() {
        if (arguments.length === 3) {
            const v1 = arguments[0], v2 = arguments[1], v3 = arguments[2];
            let max = v1;
            if (v2 > max) max = v2;
            if (v3 > max) max = v3;
            return max;
        } else if (arguments.length === 4) {
            const v1 = arguments[0], v2 = arguments[1], v3 = arguments[2], v4 = arguments[3];
            let max = v1;
            if (v2 > max) max = v2;
            if (v3 > max) max = v3;
            if (v4 > max) max = v4;
            return max;
        }
    }
}
exports.default = MathUtil;
MathUtil.LOG_10 = Math.log(10);

},{"../../../../java/lang/Double.js":"jCc26","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"11VqP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class System {
    static arraycopy(src, srcPos, dest, destPos, len) {
        let c = 0;
        for(let i = srcPos; i < srcPos + len; i++){
            dest[destPos + c] = src[i];
            c++;
        }
    }
    static getProperty(name) {
        return ({
            'line.separator': '\n'
        })[name];
    }
}
exports.default = System;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ha5UZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coordinateJs = require("./Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _comparableJs = require("../../../../java/lang/Comparable.js");
var _comparableJsDefault = parcelHelpers.interopDefault(_comparableJs);
var _serializableJs = require("../../../../java/io/Serializable.js");
var _serializableJsDefault = parcelHelpers.interopDefault(_serializableJs);
class Envelope {
    constructor(){
        Envelope.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._minx = null;
        this._maxx = null;
        this._miny = null;
        this._maxy = null;
        if (arguments.length === 0) this.init();
        else if (arguments.length === 1) {
            if (arguments[0] instanceof (0, _coordinateJsDefault.default)) {
                const p = arguments[0];
                this.init(p.x, p.x, p.y, p.y);
            } else if (arguments[0] instanceof Envelope) {
                const env = arguments[0];
                this.init(env);
            }
        } else if (arguments.length === 2) {
            const p1 = arguments[0], p2 = arguments[1];
            this.init(p1.x, p2.x, p1.y, p2.y);
        } else if (arguments.length === 4) {
            const x1 = arguments[0], x2 = arguments[1], y1 = arguments[2], y2 = arguments[3];
            this.init(x1, x2, y1, y2);
        }
    }
    static intersects() {
        if (arguments.length === 3) {
            const p1 = arguments[0], p2 = arguments[1], q = arguments[2];
            if (q.x >= (p1.x < p2.x ? p1.x : p2.x) && q.x <= (p1.x > p2.x ? p1.x : p2.x) && q.y >= (p1.y < p2.y ? p1.y : p2.y) && q.y <= (p1.y > p2.y ? p1.y : p2.y)) return true;
            return false;
        } else if (arguments.length === 4) {
            const p1 = arguments[0], p2 = arguments[1], q1 = arguments[2], q2 = arguments[3];
            let minq = Math.min(q1.x, q2.x);
            let maxq = Math.max(q1.x, q2.x);
            let minp = Math.min(p1.x, p2.x);
            let maxp = Math.max(p1.x, p2.x);
            if (minp > maxq) return false;
            if (maxp < minq) return false;
            minq = Math.min(q1.y, q2.y);
            maxq = Math.max(q1.y, q2.y);
            minp = Math.min(p1.y, p2.y);
            maxp = Math.max(p1.y, p2.y);
            if (minp > maxq) return false;
            if (maxp < minq) return false;
            return true;
        }
    }
    getArea() {
        return this.getWidth() * this.getHeight();
    }
    getMinX() {
        return this._minx;
    }
    expandToInclude() {
        if (arguments.length === 1) {
            if (arguments[0] instanceof (0, _coordinateJsDefault.default)) {
                const p = arguments[0];
                this.expandToInclude(p.x, p.y);
            } else if (arguments[0] instanceof Envelope) {
                const other = arguments[0];
                if (other.isNull()) return null;
                if (this.isNull()) {
                    this._minx = other.getMinX();
                    this._maxx = other.getMaxX();
                    this._miny = other.getMinY();
                    this._maxy = other.getMaxY();
                } else {
                    if (other._minx < this._minx) this._minx = other._minx;
                    if (other._maxx > this._maxx) this._maxx = other._maxx;
                    if (other._miny < this._miny) this._miny = other._miny;
                    if (other._maxy > this._maxy) this._maxy = other._maxy;
                }
            }
        } else if (arguments.length === 2) {
            const x = arguments[0], y = arguments[1];
            if (this.isNull()) {
                this._minx = x;
                this._maxx = x;
                this._miny = y;
                this._maxy = y;
            } else {
                if (x < this._minx) this._minx = x;
                if (x > this._maxx) this._maxx = x;
                if (y < this._miny) this._miny = y;
                if (y > this._maxy) this._maxy = y;
            }
        }
    }
    compareTo(o) {
        const env = o;
        if (this.isNull()) {
            if (env.isNull()) return 0;
            return -1;
        } else {
            if (env.isNull()) return 1;
        }
        if (this._minx < env._minx) return -1;
        if (this._minx > env._minx) return 1;
        if (this._miny < env._miny) return -1;
        if (this._miny > env._miny) return 1;
        if (this._maxx < env._maxx) return -1;
        if (this._maxx > env._maxx) return 1;
        if (this._maxy < env._maxy) return -1;
        if (this._maxy > env._maxy) return 1;
        return 0;
    }
    translate(transX, transY) {
        if (this.isNull()) return null;
        this.init(this.getMinX() + transX, this.getMaxX() + transX, this.getMinY() + transY, this.getMaxY() + transY);
    }
    copy() {
        return new Envelope(this);
    }
    expandBy() {
        if (arguments.length === 1) {
            const distance = arguments[0];
            this.expandBy(distance, distance);
        } else if (arguments.length === 2) {
            const deltaX = arguments[0], deltaY = arguments[1];
            if (this.isNull()) return null;
            this._minx -= deltaX;
            this._maxx += deltaX;
            this._miny -= deltaY;
            this._maxy += deltaY;
            if (this._minx > this._maxx || this._miny > this._maxy) this.setToNull();
        }
    }
    contains() {
        if (arguments.length === 1) {
            if (arguments[0] instanceof Envelope) {
                const other = arguments[0];
                return this.covers(other);
            } else if (arguments[0] instanceof (0, _coordinateJsDefault.default)) {
                const p = arguments[0];
                return this.covers(p);
            }
        } else if (arguments.length === 2) {
            const x = arguments[0], y = arguments[1];
            return this.covers(x, y);
        }
    }
    hashCode() {
        let result = 17;
        result = 37 * result + (0, _coordinateJsDefault.default).hashCode(this._minx);
        result = 37 * result + (0, _coordinateJsDefault.default).hashCode(this._maxx);
        result = 37 * result + (0, _coordinateJsDefault.default).hashCode(this._miny);
        result = 37 * result + (0, _coordinateJsDefault.default).hashCode(this._maxy);
        return result;
    }
    equals(other) {
        if (!(other instanceof Envelope)) return false;
        const otherEnvelope = other;
        if (this.isNull()) return otherEnvelope.isNull();
        return this._maxx === otherEnvelope.getMaxX() && this._maxy === otherEnvelope.getMaxY() && this._minx === otherEnvelope.getMinX() && this._miny === otherEnvelope.getMinY();
    }
    intersection(env) {
        if (this.isNull() || env.isNull() || !this.intersects(env)) return new Envelope();
        const intMinX = this._minx > env._minx ? this._minx : env._minx;
        const intMinY = this._miny > env._miny ? this._miny : env._miny;
        const intMaxX = this._maxx < env._maxx ? this._maxx : env._maxx;
        const intMaxY = this._maxy < env._maxy ? this._maxy : env._maxy;
        return new Envelope(intMinX, intMaxX, intMinY, intMaxY);
    }
    isNull() {
        return this._maxx < this._minx;
    }
    getMaxX() {
        return this._maxx;
    }
    covers() {
        if (arguments.length === 1) {
            if (arguments[0] instanceof (0, _coordinateJsDefault.default)) {
                const p = arguments[0];
                return this.covers(p.x, p.y);
            } else if (arguments[0] instanceof Envelope) {
                const other = arguments[0];
                if (this.isNull() || other.isNull()) return false;
                return other.getMinX() >= this._minx && other.getMaxX() <= this._maxx && other.getMinY() >= this._miny && other.getMaxY() <= this._maxy;
            }
        } else if (arguments.length === 2) {
            const x = arguments[0], y = arguments[1];
            if (this.isNull()) return false;
            return x >= this._minx && x <= this._maxx && y >= this._miny && y <= this._maxy;
        }
    }
    intersects() {
        if (arguments.length === 1) {
            if (arguments[0] instanceof Envelope) {
                const other = arguments[0];
                if (this.isNull() || other.isNull()) return false;
                return !(other._minx > this._maxx || other._maxx < this._minx || other._miny > this._maxy || other._maxy < this._miny);
            } else if (arguments[0] instanceof (0, _coordinateJsDefault.default)) {
                const p = arguments[0];
                return this.intersects(p.x, p.y);
            }
        } else if (arguments.length === 2) {
            if (arguments[0] instanceof (0, _coordinateJsDefault.default) && arguments[1] instanceof (0, _coordinateJsDefault.default)) {
                const a = arguments[0], b = arguments[1];
                if (this.isNull()) return false;
                const envminx = a.x < b.x ? a.x : b.x;
                if (envminx > this._maxx) return false;
                const envmaxx = a.x > b.x ? a.x : b.x;
                if (envmaxx < this._minx) return false;
                const envminy = a.y < b.y ? a.y : b.y;
                if (envminy > this._maxy) return false;
                const envmaxy = a.y > b.y ? a.y : b.y;
                if (envmaxy < this._miny) return false;
                return true;
            } else if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
                const x = arguments[0], y = arguments[1];
                if (this.isNull()) return false;
                return !(x > this._maxx || x < this._minx || y > this._maxy || y < this._miny);
            }
        }
    }
    getMinY() {
        return this._miny;
    }
    getDiameter() {
        if (this.isNull()) return 0;
        const w = this.getWidth();
        const h = this.getHeight();
        return Math.sqrt(w * w + h * h);
    }
    minExtent() {
        if (this.isNull()) return 0.0;
        const w = this.getWidth();
        const h = this.getHeight();
        if (w < h) return w;
        return h;
    }
    getWidth() {
        if (this.isNull()) return 0;
        return this._maxx - this._minx;
    }
    toString() {
        return 'Env[' + this._minx + ' : ' + this._maxx + ', ' + this._miny + ' : ' + this._maxy + ']';
    }
    setToNull() {
        this._minx = 0;
        this._maxx = -1;
        this._miny = 0;
        this._maxy = -1;
    }
    disjoint(other) {
        if (this.isNull() || other.isNull()) return true;
        return other._minx > this._maxx || other._maxx < this._minx || other._miny > this._maxy || other._maxy < this._miny;
    }
    getHeight() {
        if (this.isNull()) return 0;
        return this._maxy - this._miny;
    }
    maxExtent() {
        if (this.isNull()) return 0.0;
        const w = this.getWidth();
        const h = this.getHeight();
        if (w > h) return w;
        return h;
    }
    centre() {
        if (this.isNull()) return null;
        return new (0, _coordinateJsDefault.default)((this.getMinX() + this.getMaxX()) / 2.0, (this.getMinY() + this.getMaxY()) / 2.0);
    }
    init() {
        if (arguments.length === 0) this.setToNull();
        else if (arguments.length === 1) {
            if (arguments[0] instanceof (0, _coordinateJsDefault.default)) {
                const p = arguments[0];
                this.init(p.x, p.x, p.y, p.y);
            } else if (arguments[0] instanceof Envelope) {
                const env = arguments[0];
                this._minx = env._minx;
                this._maxx = env._maxx;
                this._miny = env._miny;
                this._maxy = env._maxy;
            }
        } else if (arguments.length === 2) {
            const p1 = arguments[0], p2 = arguments[1];
            this.init(p1.x, p2.x, p1.y, p2.y);
        } else if (arguments.length === 4) {
            const x1 = arguments[0], x2 = arguments[1], y1 = arguments[2], y2 = arguments[3];
            if (x1 < x2) {
                this._minx = x1;
                this._maxx = x2;
            } else {
                this._minx = x2;
                this._maxx = x1;
            }
            if (y1 < y2) {
                this._miny = y1;
                this._maxy = y2;
            } else {
                this._miny = y2;
                this._maxy = y1;
            }
        }
    }
    getMaxY() {
        return this._maxy;
    }
    distance(env) {
        if (this.intersects(env)) return 0;
        let dx = 0.0;
        if (this._maxx < env._minx) dx = env._minx - this._maxx;
        else if (this._minx > env._maxx) dx = this._minx - env._maxx;
        let dy = 0.0;
        if (this._maxy < env._miny) dy = env._miny - this._maxy;
        else if (this._miny > env._maxy) dy = this._miny - env._maxy;
        if (dx === 0.0) return dy;
        if (dy === 0.0) return dx;
        return Math.sqrt(dx * dx + dy * dy);
    }
    get interfaces_() {
        return [
            (0, _comparableJsDefault.default),
            (0, _serializableJsDefault.default)
        ];
    }
}
exports.default = Envelope;

},{"./Coordinate.js":"3REUb","../../../../java/lang/Comparable.js":"6Adw4","../../../../java/io/Serializable.js":"4emqV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"966Ye":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
var _characterJs = require("../../../../java/lang/Character.js");
var _characterJsDefault = parcelHelpers.interopDefault(_characterJs);
class Dimension {
    static toDimensionSymbol(dimensionValue) {
        switch(dimensionValue){
            case Dimension.FALSE:
                return Dimension.SYM_FALSE;
            case Dimension.TRUE:
                return Dimension.SYM_TRUE;
            case Dimension.DONTCARE:
                return Dimension.SYM_DONTCARE;
            case Dimension.P:
                return Dimension.SYM_P;
            case Dimension.L:
                return Dimension.SYM_L;
            case Dimension.A:
                return Dimension.SYM_A;
        }
        throw new (0, _illegalArgumentExceptionJsDefault.default)('Unknown dimension value: ' + dimensionValue);
    }
    static toDimensionValue(dimensionSymbol) {
        switch((0, _characterJsDefault.default).toUpperCase(dimensionSymbol)){
            case Dimension.SYM_FALSE:
                return Dimension.FALSE;
            case Dimension.SYM_TRUE:
                return Dimension.TRUE;
            case Dimension.SYM_DONTCARE:
                return Dimension.DONTCARE;
            case Dimension.SYM_P:
                return Dimension.P;
            case Dimension.SYM_L:
                return Dimension.L;
            case Dimension.SYM_A:
                return Dimension.A;
        }
        throw new (0, _illegalArgumentExceptionJsDefault.default)('Unknown dimension symbol: ' + dimensionSymbol);
    }
}
exports.default = Dimension;
Dimension.P = 0;
Dimension.L = 1;
Dimension.A = 2;
Dimension.FALSE = -1;
Dimension.TRUE = -2;
Dimension.DONTCARE = -3;
Dimension.SYM_FALSE = 'F';
Dimension.SYM_TRUE = 'T';
Dimension.SYM_DONTCARE = '*';
Dimension.SYM_P = '0';
Dimension.SYM_L = '1';
Dimension.SYM_A = '2';

},{"../../../../java/lang/IllegalArgumentException.js":"1VQhm","../../../../java/lang/Character.js":"kHj8q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHj8q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Character {
    static isWhitespace(c) {
        return c <= 32 && c >= 0 || c === 127;
    }
    static toUpperCase(c) {
        return c.toUpperCase();
    }
}
exports.default = Character;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5V2e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
var _geometryComponentFilterJs = require("./GeometryComponentFilter.js");
var _geometryComponentFilterJsDefault = parcelHelpers.interopDefault(_geometryComponentFilterJs);
var _comparableJs = require("../../../../java/lang/Comparable.js");
var _comparableJsDefault = parcelHelpers.interopDefault(_comparableJs);
var _cloneableJs = require("../../../../java/lang/Cloneable.js");
var _cloneableJsDefault = parcelHelpers.interopDefault(_cloneableJs);
var _serializableJs = require("../../../../java/io/Serializable.js");
var _serializableJsDefault = parcelHelpers.interopDefault(_serializableJs);
var _envelopeJs = require("./Envelope.js");
var _envelopeJsDefault = parcelHelpers.interopDefault(_envelopeJs);
class Geometry {
    constructor(){
        Geometry.constructor_.apply(this, arguments);
    }
    isGeometryCollection() {
        return this.getTypeCode() === Geometry.TYPECODE_GEOMETRYCOLLECTION;
    }
    getFactory() {
        return this._factory;
    }
    getGeometryN(n) {
        return this;
    }
    getArea() {
        return 0.0;
    }
    isRectangle() {
        return false;
    }
    equalsExact(other) {
        return this === other || this.equalsExact(other, 0);
    }
    geometryChanged() {
        this.apply(Geometry.geometryChangedFilter);
    }
    geometryChangedAction() {
        this._envelope = null;
    }
    equalsNorm(g) {
        if (g === null) return false;
        return this.norm().equalsExact(g.norm());
    }
    getLength() {
        return 0.0;
    }
    getNumGeometries() {
        return 1;
    }
    compareTo() {
        let other;
        if (arguments.length === 1) {
            const o = arguments[0];
            other = o;
            if (this.getTypeCode() !== other.getTypeCode()) return this.getTypeCode() - other.getTypeCode();
            if (this.isEmpty() && other.isEmpty()) return 0;
            if (this.isEmpty()) return -1;
            if (other.isEmpty()) return 1;
            return this.compareToSameClass(o);
        } else if (arguments.length === 2) {
            const o = arguments[0];
            const comp = arguments[1];
            other = o;
            if (this.getTypeCode() !== other.getTypeCode()) return this.getTypeCode() - other.getTypeCode();
            if (this.isEmpty() && other.isEmpty()) return 0;
            if (this.isEmpty()) return -1;
            if (other.isEmpty()) return 1;
            return this.compareToSameClass(o, comp);
        }
    }
    getUserData() {
        return this._userData;
    }
    getSRID() {
        return this._SRID;
    }
    getEnvelope() {
        return this.getFactory().toGeometry(this.getEnvelopeInternal());
    }
    static checkNotGeometryCollection(g) {
        if (g.getTypeCode() === Geometry.TYPECODE_GEOMETRYCOLLECTION) throw new (0, _illegalArgumentExceptionJsDefault.default)('This method does not support GeometryCollection arguments');
    }
    equal(a, b, tolerance) {
        if (tolerance === 0) return a.equals(b);
        return a.distance(b) <= tolerance;
    }
    norm() {
        const copy = this.copy();
        copy.normalize();
        return copy;
    }
    reverse() {
        const res = this.reverseInternal();
        if (this.envelope != null) res.envelope = this.envelope.copy();
        res.setSRID(this.getSRID());
        return res;
    }
    copy() {
        const copy = this.copyInternal();
        copy.envelope = this._envelope == null ? null : this._envelope.copy();
        copy._SRID = this._SRID;
        copy._userData = this._userData;
        return copy;
    }
    getPrecisionModel() {
        return this._factory.getPrecisionModel();
    }
    getEnvelopeInternal() {
        if (this._envelope === null) this._envelope = this.computeEnvelopeInternal();
        return new (0, _envelopeJsDefault.default)(this._envelope);
    }
    setSRID(SRID) {
        this._SRID = SRID;
    }
    setUserData(userData) {
        this._userData = userData;
    }
    compare(a, b) {
        const i = a.iterator();
        const j = b.iterator();
        while(i.hasNext() && j.hasNext()){
            const aElement = i.next();
            const bElement = j.next();
            const comparison = aElement.compareTo(bElement);
            if (comparison !== 0) return comparison;
        }
        if (i.hasNext()) return 1;
        if (j.hasNext()) return -1;
        return 0;
    }
    hashCode() {
        return this.getEnvelopeInternal().hashCode();
    }
    isEquivalentClass(other) {
        return this.getTypeCode() == other.getTypeCode();
    }
    get interfaces_() {
        return [
            (0, _cloneableJsDefault.default),
            (0, _comparableJsDefault.default),
            (0, _serializableJsDefault.default)
        ];
    }
    getClass() {
        return Geometry;
    }
    static hasNonEmptyElements(geometries) {
        for(let i = 0; i < geometries.length; i++)if (!geometries[i].isEmpty()) return true;
        return false;
    }
    static hasNullElements(array) {
        for(let i = 0; i < array.length; i++)if (array[i] === null) return true;
        return false;
    }
}
exports.default = Geometry;
Geometry.constructor_ = function(factory) {
    if (!factory) return;
    this._envelope = null;
    this._userData = null;
    this._factory = factory;
    this._SRID = factory.getSRID();
};
Geometry.TYPECODE_POINT = 0;
Geometry.TYPECODE_MULTIPOINT = 1;
Geometry.TYPECODE_LINESTRING = 2;
Geometry.TYPECODE_LINEARRING = 3;
Geometry.TYPECODE_MULTILINESTRING = 4;
Geometry.TYPECODE_POLYGON = 5;
Geometry.TYPECODE_MULTIPOLYGON = 6;
Geometry.TYPECODE_GEOMETRYCOLLECTION = 7;
Geometry.TYPENAME_POINT = 'Point';
Geometry.TYPENAME_MULTIPOINT = 'MultiPoint';
Geometry.TYPENAME_LINESTRING = 'LineString';
Geometry.TYPENAME_LINEARRING = 'LinearRing';
Geometry.TYPENAME_MULTILINESTRING = 'MultiLineString';
Geometry.TYPENAME_POLYGON = 'Polygon';
Geometry.TYPENAME_MULTIPOLYGON = 'MultiPolygon';
Geometry.TYPENAME_GEOMETRYCOLLECTION = 'GeometryCollection';
Geometry.geometryChangedFilter = {
    get interfaces_ () {
        return [
            (0, _geometryComponentFilterJsDefault.default)
        ];
    },
    filter (geom) {
        geom.geometryChangedAction();
    }
};

},{"../../../../java/lang/IllegalArgumentException.js":"1VQhm","./GeometryComponentFilter.js":"8aMWe","../../../../java/lang/Comparable.js":"6Adw4","../../../../java/lang/Cloneable.js":"bkkIE","../../../../java/io/Serializable.js":"4emqV","./Envelope.js":"ha5UZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9F02P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class CoordinateFilter {
    filter(coord) {}
}
exports.default = CoordinateFilter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZhBn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Lineal {
}
exports.default = Lineal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fFRyy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasInterfaceJs = require("../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _coordinateJs = require("./Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _doubleJs = require("../../../../java/lang/Double.js");
var _doubleJsDefault = parcelHelpers.interopDefault(_doubleJs);
var _coordinateSequenceJs = require("./CoordinateSequence.js");
var _coordinateSequenceJsDefault = parcelHelpers.interopDefault(_coordinateSequenceJs);
class CoordinateSequences {
    static scroll() {
        if (arguments.length === 2) {
            if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default)) && Number.isInteger(arguments[1])) {
                const seq = arguments[0], indexOfFirstCoordinate = arguments[1];
                CoordinateSequences.scroll(seq, indexOfFirstCoordinate, CoordinateSequences.isRing(seq));
            } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default)) && arguments[1] instanceof (0, _coordinateJsDefault.default)) {
                const seq = arguments[0], firstCoordinate = arguments[1];
                const i = CoordinateSequences.indexOf(firstCoordinate, seq);
                if (i <= 0) return null;
                CoordinateSequences.scroll(seq, i);
            }
        } else if (arguments.length === 3) {
            const seq = arguments[0], indexOfFirstCoordinate = arguments[1], ensureRing = arguments[2];
            const i = indexOfFirstCoordinate;
            if (i <= 0) return null;
            const copy = seq.copy();
            const last = ensureRing ? seq.size() - 1 : seq.size();
            for(let j = 0; j < last; j++)for(let k = 0; k < seq.getDimension(); k++)seq.setOrdinate(j, k, copy.getOrdinate((indexOfFirstCoordinate + j) % last, k));
            if (ensureRing) for(let k = 0; k < seq.getDimension(); k++)seq.setOrdinate(last, k, seq.getOrdinate(0, k));
        }
    }
    static isEqual(cs1, cs2) {
        const cs1Size = cs1.size();
        const cs2Size = cs2.size();
        if (cs1Size !== cs2Size) return false;
        const dim = Math.min(cs1.getDimension(), cs2.getDimension());
        for(let i = 0; i < cs1Size; i++)for(let d = 0; d < dim; d++){
            const v1 = cs1.getOrdinate(i, d);
            const v2 = cs2.getOrdinate(i, d);
            if (cs1.getOrdinate(i, d) === cs2.getOrdinate(i, d)) continue;
            if ((0, _doubleJsDefault.default).isNaN(v1) && (0, _doubleJsDefault.default).isNaN(v2)) continue;
            return false;
        }
        return true;
    }
    static minCoordinateIndex() {
        if (arguments.length === 1) {
            const seq = arguments[0];
            return CoordinateSequences.minCoordinateIndex(seq, 0, seq.size() - 1);
        } else if (arguments.length === 3) {
            const seq = arguments[0], from = arguments[1], to = arguments[2];
            let minCoordIndex = -1;
            let minCoord = null;
            for(let i = from; i <= to; i++){
                const testCoord = seq.getCoordinate(i);
                if (minCoord === null || minCoord.compareTo(testCoord) > 0) {
                    minCoord = testCoord;
                    minCoordIndex = i;
                }
            }
            return minCoordIndex;
        }
    }
    static extend(fact, seq, size) {
        const newseq = fact.create(size, seq.getDimension());
        const n = seq.size();
        CoordinateSequences.copy(seq, 0, newseq, 0, n);
        if (n > 0) for(let i = n; i < size; i++)CoordinateSequences.copy(seq, n - 1, newseq, i, 1);
        return newseq;
    }
    static reverse(seq) {
        const last = seq.size() - 1;
        const mid = Math.trunc(last / 2);
        for(let i = 0; i <= mid; i++)CoordinateSequences.swap(seq, i, last - i);
    }
    static ensureValidRing(fact, seq) {
        const n = seq.size();
        if (n === 0) return seq;
        if (n <= 3) return CoordinateSequences.createClosedRing(fact, seq, 4);
        const isClosed = seq.getOrdinate(0, (0, _coordinateSequenceJsDefault.default).X) === seq.getOrdinate(n - 1, (0, _coordinateSequenceJsDefault.default).X) && seq.getOrdinate(0, (0, _coordinateSequenceJsDefault.default).Y) === seq.getOrdinate(n - 1, (0, _coordinateSequenceJsDefault.default).Y);
        if (isClosed) return seq;
        return CoordinateSequences.createClosedRing(fact, seq, n + 1);
    }
    static minCoordinate(seq) {
        let minCoord = null;
        for(let i = 0; i < seq.size(); i++){
            const testCoord = seq.getCoordinate(i);
            if (minCoord === null || minCoord.compareTo(testCoord) > 0) minCoord = testCoord;
        }
        return minCoord;
    }
    static copyCoord(src, srcPos, dest, destPos) {
        const minDim = Math.min(src.getDimension(), dest.getDimension());
        for(let dim = 0; dim < minDim; dim++)dest.setOrdinate(destPos, dim, src.getOrdinate(srcPos, dim));
    }
    static isRing(seq) {
        const n = seq.size();
        if (n === 0) return true;
        if (n <= 3) return false;
        return seq.getOrdinate(0, (0, _coordinateSequenceJsDefault.default).X) === seq.getOrdinate(n - 1, (0, _coordinateSequenceJsDefault.default).X) && seq.getOrdinate(0, (0, _coordinateSequenceJsDefault.default).Y) === seq.getOrdinate(n - 1, (0, _coordinateSequenceJsDefault.default).Y);
    }
    static swap(seq, i, j) {
        if (i === j) return null;
        for(let dim = 0; dim < seq.getDimension(); dim++){
            const tmp = seq.getOrdinate(i, dim);
            seq.setOrdinate(i, dim, seq.getOrdinate(j, dim));
            seq.setOrdinate(j, dim, tmp);
        }
    }
    static copy(src, srcPos, dest, destPos, length) {
        for(let i = 0; i < length; i++)CoordinateSequences.copyCoord(src, srcPos + i, dest, destPos + i);
    }
    static indexOf(coordinate, seq) {
        for(let i = 0; i < seq.size(); i++)if (coordinate.x === seq.getOrdinate(i, (0, _coordinateSequenceJsDefault.default).X) && coordinate.y === seq.getOrdinate(i, (0, _coordinateSequenceJsDefault.default).Y)) return i;
        return -1;
    }
    static createClosedRing(fact, seq, size) {
        const newseq = fact.create(size, seq.getDimension());
        const n = seq.size();
        CoordinateSequences.copy(seq, 0, newseq, 0, n);
        for(let i = n; i < size; i++)CoordinateSequences.copy(seq, 0, newseq, i, 1);
        return newseq;
    }
}
exports.default = CoordinateSequences;

},{"../../../../hasInterface.js":"d8mIo","./Coordinate.js":"3REUb","../../../../java/lang/Double.js":"jCc26","./CoordinateSequence.js":"3GfKT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GfKT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _doubleJs = require("../../../../java/lang/Double.js");
var _doubleJsDefault = parcelHelpers.interopDefault(_doubleJs);
var _cloneableJs = require("../../../../java/lang/Cloneable.js");
var _cloneableJsDefault = parcelHelpers.interopDefault(_cloneableJs);
class CoordinateSequence {
    getCoordinate() {
        if (arguments.length === 1) {
            const i = arguments[0];
        } else if (arguments.length === 2) {
            const index = arguments[0], coord = arguments[1];
        }
    }
    getCoordinateCopy(i) {}
    createCoordinate() {}
    getDimension() {}
    hasM() {
        return this.getMeasures() > 0;
    }
    getX(index) {}
    hasZ() {
        return this.getDimension() - this.getMeasures() > 2;
    }
    getMeasures() {
        return 0;
    }
    expandEnvelope(env) {}
    copy() {}
    getY(index) {}
    toCoordinateArray() {}
    getM(index) {
        if (this.hasM()) {
            const mIndex = this.getDimension() - this.getMeasures();
            return this.getOrdinate(index, mIndex);
        } else return (0, _doubleJsDefault.default).NaN;
    }
    setOrdinate(index, ordinateIndex, value) {}
    getZ(index) {
        if (this.hasZ()) return this.getOrdinate(index, 2);
        else return (0, _doubleJsDefault.default).NaN;
    }
    size() {}
    getOrdinate(index, ordinateIndex) {}
    get interfaces_() {
        return [
            (0, _cloneableJsDefault.default)
        ];
    }
}
exports.default = CoordinateSequence;
CoordinateSequence.X = 0;
CoordinateSequence.Y = 1;
CoordinateSequence.Z = 2;
CoordinateSequence.M = 3;

},{"../../../../java/lang/Double.js":"jCc26","../../../../java/lang/Cloneable.js":"bkkIE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djHvd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class GeometryFilter {
    filter(geom) {}
}
exports.default = GeometryFilter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8HUHX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class CoordinateSequenceFilter {
    filter(seq, i) {}
    isGeometryChanged() {}
    isDone() {}
}
exports.default = CoordinateSequenceFilter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKVoa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coordinateSequenceFactoryJs = require("../CoordinateSequenceFactory.js");
var _coordinateSequenceFactoryJsDefault = parcelHelpers.interopDefault(_coordinateSequenceFactoryJs);
var _coordinateSequenceJs = require("../CoordinateSequence.js");
var _coordinateSequenceJsDefault = parcelHelpers.interopDefault(_coordinateSequenceJs);
var _serializableJs = require("../../../../../java/io/Serializable.js");
var _serializableJsDefault = parcelHelpers.interopDefault(_serializableJs);
var _hasInterfaceJs = require("../../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _coordinateArraySequenceJs = require("./CoordinateArraySequence.js");
var _coordinateArraySequenceJsDefault = parcelHelpers.interopDefault(_coordinateArraySequenceJs);
class CoordinateArraySequenceFactory {
    static instance() {
        return CoordinateArraySequenceFactory.instanceObject;
    }
    readResolve() {
        return CoordinateArraySequenceFactory.instance();
    }
    create() {
        if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
                const coordinates = arguments[0];
                return new (0, _coordinateArraySequenceJsDefault.default)(coordinates);
            } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default))) {
                const coordSeq = arguments[0];
                return new (0, _coordinateArraySequenceJsDefault.default)(coordSeq);
            }
        } else if (arguments.length === 2) {
            let size = arguments[0], dimension = arguments[1];
            if (dimension > 3) dimension = 3;
            if (dimension < 2) dimension = 2;
            return new (0, _coordinateArraySequenceJsDefault.default)(size, dimension);
        } else if (arguments.length === 3) {
            let size = arguments[0], dimension = arguments[1], measures = arguments[2];
            let spatial = dimension - measures;
            if (measures > 1) measures = 1;
            if (spatial > 3) spatial = 3;
            if (spatial < 2) spatial = 2;
            return new (0, _coordinateArraySequenceJsDefault.default)(size, spatial + measures, measures);
        }
    }
    get interfaces_() {
        return [
            (0, _coordinateSequenceFactoryJsDefault.default),
            (0, _serializableJsDefault.default)
        ];
    }
}
exports.default = CoordinateArraySequenceFactory;
CoordinateArraySequenceFactory.instanceObject = new CoordinateArraySequenceFactory();

},{"../CoordinateSequenceFactory.js":"hAZID","../CoordinateSequence.js":"3GfKT","../../../../../java/io/Serializable.js":"4emqV","../../../../../hasInterface.js":"d8mIo","./CoordinateArraySequence.js":"bdL5X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hAZID":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasInterfaceJs = require("../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _coordinateSequenceJs = require("./CoordinateSequence.js");
var _coordinateSequenceJsDefault = parcelHelpers.interopDefault(_coordinateSequenceJs);
class CoordinateSequenceFactory {
    create() {
        if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
                const coordinates = arguments[0];
            } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default))) {
                const coordSeq = arguments[0];
            }
        } else if (arguments.length === 2) {
            const size = arguments[0], dimension = arguments[1];
        } else if (arguments.length === 3) {
            const size = arguments[0], dimension = arguments[1], measures = arguments[2];
            return this.create(size, dimension);
        }
    }
}
exports.default = CoordinateSequenceFactory;

},{"../../../../hasInterface.js":"d8mIo","./CoordinateSequence.js":"3GfKT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bdL5X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasInterfaceJs = require("../../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _coordinateJs = require("../Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _doubleJs = require("../../../../../java/lang/Double.js");
var _doubleJsDefault = parcelHelpers.interopDefault(_doubleJs);
var _coordinatesJs = require("../Coordinates.js");
var _coordinatesJsDefault = parcelHelpers.interopDefault(_coordinatesJs);
var _coordinateSequenceJs = require("../CoordinateSequence.js");
var _coordinateSequenceJsDefault = parcelHelpers.interopDefault(_coordinateSequenceJs);
var _coordinateArraysJs = require("../CoordinateArrays.js");
var _coordinateArraysJsDefault = parcelHelpers.interopDefault(_coordinateArraysJs);
var _serializableJs = require("../../../../../java/io/Serializable.js");
var _serializableJsDefault = parcelHelpers.interopDefault(_serializableJs);
var _stringBuilderJs = require("../../../../../java/lang/StringBuilder.js");
var _stringBuilderJsDefault = parcelHelpers.interopDefault(_stringBuilderJs);
class CoordinateArraySequence {
    constructor(){
        CoordinateArraySequence.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._dimension = 3;
        this._measures = 0;
        this._coordinates = null;
        if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
                const coordinates = arguments[0];
                CoordinateArraySequence.constructor_.call(this, coordinates, (0, _coordinateArraysJsDefault.default).dimension(coordinates), (0, _coordinateArraysJsDefault.default).measures(coordinates));
            } else if (Number.isInteger(arguments[0])) {
                const size = arguments[0];
                this._coordinates = new Array(size).fill(null);
                for(let i = 0; i < size; i++)this._coordinates[i] = new (0, _coordinateJsDefault.default)();
            } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default))) {
                const coordSeq = arguments[0];
                if (coordSeq === null) {
                    this._coordinates = new Array(0).fill(null);
                    return null;
                }
                this._dimension = coordSeq.getDimension();
                this._measures = coordSeq.getMeasures();
                this._coordinates = new Array(coordSeq.size()).fill(null);
                for(let i = 0; i < this._coordinates.length; i++)this._coordinates[i] = coordSeq.getCoordinateCopy(i);
            }
        } else if (arguments.length === 2) {
            if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
                const coordinates = arguments[0], dimension = arguments[1];
                CoordinateArraySequence.constructor_.call(this, coordinates, dimension, (0, _coordinateArraysJsDefault.default).measures(coordinates));
            } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
                const size = arguments[0], dimension = arguments[1];
                this._coordinates = new Array(size).fill(null);
                this._dimension = dimension;
                for(let i = 0; i < size; i++)this._coordinates[i] = (0, _coordinatesJsDefault.default).create(dimension);
            }
        } else if (arguments.length === 3) {
            if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
                const coordinates = arguments[0], dimension = arguments[1], measures = arguments[2];
                this._dimension = dimension;
                this._measures = measures;
                if (coordinates === null) this._coordinates = new Array(0).fill(null);
                else this._coordinates = coordinates;
            } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
                const size = arguments[0], dimension = arguments[1], measures = arguments[2];
                this._coordinates = new Array(size).fill(null);
                this._dimension = dimension;
                this._measures = measures;
                for(let i = 0; i < size; i++)this._coordinates[i] = this.createCoordinate();
            }
        }
    }
    getCoordinate() {
        if (arguments.length === 1) {
            const i = arguments[0];
            return this._coordinates[i];
        } else if (arguments.length === 2) {
            const index = arguments[0], coord = arguments[1];
            coord.setCoordinate(this._coordinates[index]);
        }
    }
    getCoordinateCopy(i) {
        const copy = this.createCoordinate();
        copy.setCoordinate(this._coordinates[i]);
        return copy;
    }
    createCoordinate() {
        return (0, _coordinatesJsDefault.default).create(this.getDimension(), this.getMeasures());
    }
    getDimension() {
        return this._dimension;
    }
    getX(index) {
        return this._coordinates[index].x;
    }
    getMeasures() {
        return this._measures;
    }
    expandEnvelope(env) {
        for(let i = 0; i < this._coordinates.length; i++)env.expandToInclude(this._coordinates[i]);
        return env;
    }
    copy() {
        const cloneCoordinates = new Array(this.size()).fill(null);
        for(let i = 0; i < this._coordinates.length; i++){
            const duplicate = this.createCoordinate();
            duplicate.setCoordinate(this._coordinates[i]);
            cloneCoordinates[i] = duplicate;
        }
        return new CoordinateArraySequence(cloneCoordinates, this._dimension, this._measures);
    }
    toString() {
        if (this._coordinates.length > 0) {
            const strBuilder = new (0, _stringBuilderJsDefault.default)(17 * this._coordinates.length);
            strBuilder.append('(');
            strBuilder.append(this._coordinates[0]);
            for(let i = 1; i < this._coordinates.length; i++){
                strBuilder.append(', ');
                strBuilder.append(this._coordinates[i]);
            }
            strBuilder.append(')');
            return strBuilder.toString();
        } else return '()';
    }
    getY(index) {
        return this._coordinates[index].y;
    }
    toCoordinateArray() {
        return this._coordinates;
    }
    getM(index) {
        if (this.hasM()) return this._coordinates[index].getM();
        else return (0, _doubleJsDefault.default).NaN;
    }
    setOrdinate(index, ordinateIndex, value) {
        switch(ordinateIndex){
            case (0, _coordinateSequenceJsDefault.default).X:
                this._coordinates[index].x = value;
                break;
            case (0, _coordinateSequenceJsDefault.default).Y:
                this._coordinates[index].y = value;
                break;
            default:
                this._coordinates[index].setOrdinate(ordinateIndex, value);
        }
    }
    getZ(index) {
        if (this.hasZ()) return this._coordinates[index].getZ();
        else return (0, _doubleJsDefault.default).NaN;
    }
    size() {
        return this._coordinates.length;
    }
    getOrdinate(index, ordinateIndex) {
        switch(ordinateIndex){
            case (0, _coordinateSequenceJsDefault.default).X:
                return this._coordinates[index].x;
            case (0, _coordinateSequenceJsDefault.default).Y:
                return this._coordinates[index].y;
            default:
                return this._coordinates[index].getOrdinate(ordinateIndex);
        }
    }
    get interfaces_() {
        return [
            (0, _coordinateSequenceJsDefault.default),
            (0, _serializableJsDefault.default)
        ];
    }
}
exports.default = CoordinateArraySequence;

},{"../../../../../hasInterface.js":"d8mIo","../Coordinate.js":"3REUb","../../../../../java/lang/Double.js":"jCc26","../Coordinates.js":"iNVOk","../CoordinateSequence.js":"3GfKT","../CoordinateArrays.js":"hwXsf","../../../../../java/io/Serializable.js":"4emqV","../../../../../java/lang/StringBuilder.js":"iGg1z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iGg1z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class StringBuilder {
    constructor(str){
        this.str = str;
    }
    append(e) {
        this.str += e;
    }
    setCharAt(i, c) {
        this.str = this.str.substr(0, i) + c + this.str.substr(i + 1);
    }
    toString() {
        return this.str;
    }
}
exports.default = StringBuilder;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56YaT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _geometryJs = require("./Geometry.js");
var _geometryJsDefault = parcelHelpers.interopDefault(_geometryJs);
var _geometryCollectionJs = require("./GeometryCollection.js");
var _geometryCollectionJsDefault = parcelHelpers.interopDefault(_geometryCollectionJs);
var _polygonalJs = require("./Polygonal.js");
var _polygonalJsDefault = parcelHelpers.interopDefault(_polygonalJs);
var _arrayListJs = require("../../../../java/util/ArrayList.js");
var _arrayListJsDefault = parcelHelpers.interopDefault(_arrayListJs);
class MultiPolygon extends (0, _geometryCollectionJsDefault.default) {
    constructor(){
        super();
        MultiPolygon.constructor_.apply(this, arguments);
    }
    static constructor_() {
        const polygons = arguments[0], factory = arguments[1];
        (0, _geometryCollectionJsDefault.default).constructor_.call(this, polygons, factory);
    }
    copyInternal() {
        const polygons = new Array(this._geometries.length).fill(null);
        for(let i = 0; i < polygons.length; i++)polygons[i] = this._geometries[i].copy();
        return new MultiPolygon(polygons, this._factory);
    }
    equalsExact() {
        if (arguments.length === 2 && typeof arguments[1] === 'number' && arguments[0] instanceof (0, _geometryJsDefault.default)) {
            const other = arguments[0], tolerance = arguments[1];
            if (!this.isEquivalentClass(other)) return false;
            return super.equalsExact.call(this, other, tolerance);
        } else return super.equalsExact.apply(this, arguments);
    }
    getBoundaryDimension() {
        return 1;
    }
    getTypeCode() {
        return (0, _geometryJsDefault.default).TYPECODE_MULTIPOLYGON;
    }
    getDimension() {
        return 2;
    }
    getBoundary() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        const allRings = new (0, _arrayListJsDefault.default)();
        for(let i = 0; i < this._geometries.length; i++){
            const polygon = this._geometries[i];
            const rings = polygon.getBoundary();
            for(let j = 0; j < rings.getNumGeometries(); j++)allRings.add(rings.getGeometryN(j));
        }
        const allRingsArray = new Array(allRings.size()).fill(null);
        return this.getFactory().createMultiLineString(allRings.toArray(allRingsArray));
    }
    getGeometryType() {
        return (0, _geometryJsDefault.default).TYPENAME_MULTIPOLYGON;
    }
    get interfaces_() {
        return [
            (0, _polygonalJsDefault.default)
        ];
    }
}
exports.default = MultiPolygon;

},{"./Geometry.js":"d5V2e","./GeometryCollection.js":"9xeCT","./Polygonal.js":"gO2Qf","../../../../java/util/ArrayList.js":"g8omH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xeCT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _treeSetJs = require("../../../../java/util/TreeSet.js");
var _treeSetJsDefault = parcelHelpers.interopDefault(_treeSetJs);
var _hasInterfaceJs = require("../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
var _geometryComponentFilterJs = require("./GeometryComponentFilter.js");
var _geometryComponentFilterJsDefault = parcelHelpers.interopDefault(_geometryComponentFilterJs);
var _dimensionJs = require("./Dimension.js");
var _dimensionJsDefault = parcelHelpers.interopDefault(_dimensionJs);
var _arrayListJs = require("../../../../java/util/ArrayList.js");
var _arrayListJsDefault = parcelHelpers.interopDefault(_arrayListJs);
var _geometryJs = require("./Geometry.js");
var _geometryJsDefault = parcelHelpers.interopDefault(_geometryJs);
var _arraysJs = require("../../../../java/util/Arrays.js");
var _arraysJsDefault = parcelHelpers.interopDefault(_arraysJs);
var _coordinateFilterJs = require("./CoordinateFilter.js");
var _coordinateFilterJsDefault = parcelHelpers.interopDefault(_coordinateFilterJs);
var _geometryFilterJs = require("./GeometryFilter.js");
var _geometryFilterJsDefault = parcelHelpers.interopDefault(_geometryFilterJs);
var _coordinateSequenceFilterJs = require("./CoordinateSequenceFilter.js");
var _coordinateSequenceFilterJsDefault = parcelHelpers.interopDefault(_coordinateSequenceFilterJs);
var _envelopeJs = require("./Envelope.js");
var _envelopeJsDefault = parcelHelpers.interopDefault(_envelopeJs);
var _assertJs = require("../util/Assert.js");
var _assertJsDefault = parcelHelpers.interopDefault(_assertJs);
class GeometryCollection extends (0, _geometryJsDefault.default) {
    constructor(){
        super();
        GeometryCollection.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._geometries = null;
        if (arguments.length === 0) ;
        else if (arguments.length === 2) {
            let geometries = arguments[0], factory = arguments[1];
            (0, _geometryJsDefault.default).constructor_.call(this, factory);
            if (geometries === null) geometries = [];
            if ((0, _geometryJsDefault.default).hasNullElements(geometries)) throw new (0, _illegalArgumentExceptionJsDefault.default)('geometries must not contain null elements');
            this._geometries = geometries;
        }
    }
    computeEnvelopeInternal() {
        const envelope = new (0, _envelopeJsDefault.default)();
        for(let i = 0; i < this._geometries.length; i++)envelope.expandToInclude(this._geometries[i].getEnvelopeInternal());
        return envelope;
    }
    getGeometryN(n) {
        return this._geometries[n];
    }
    getCoordinates() {
        const coordinates = new Array(this.getNumPoints()).fill(null);
        let k = -1;
        for(let i = 0; i < this._geometries.length; i++){
            const childCoordinates = this._geometries[i].getCoordinates();
            for(let j = 0; j < childCoordinates.length; j++){
                k++;
                coordinates[k] = childCoordinates[j];
            }
        }
        return coordinates;
    }
    getArea() {
        let area = 0.0;
        for(let i = 0; i < this._geometries.length; i++)area += this._geometries[i].getArea();
        return area;
    }
    copyInternal() {
        const geometries = new Array(this._geometries.length).fill(null);
        for(let i = 0; i < geometries.length; i++)geometries[i] = this._geometries[i].copy();
        return new GeometryCollection(geometries, this._factory);
    }
    equalsExact() {
        if (arguments.length === 2 && typeof arguments[1] === 'number' && arguments[0] instanceof (0, _geometryJsDefault.default)) {
            const other = arguments[0], tolerance = arguments[1];
            if (!this.isEquivalentClass(other)) return false;
            const otherCollection = other;
            if (this._geometries.length !== otherCollection._geometries.length) return false;
            for(let i = 0; i < this._geometries.length; i++)if (!this._geometries[i].equalsExact(otherCollection._geometries[i], tolerance)) return false;
            return true;
        } else return super.equalsExact.apply(this, arguments);
    }
    reverseInternal() {
        const numGeometries = this._geometries.length;
        const reversed = new (0, _arrayListJsDefault.default)(numGeometries);
        for(let i = 0; i < numGeometries; i++)reversed.add(this._geometries[i].reverse());
        return this.getFactory().buildGeometry(reversed);
    }
    getTypeCode() {
        return (0, _geometryJsDefault.default).TYPECODE_GEOMETRYCOLLECTION;
    }
    getDimension() {
        let dimension = (0, _dimensionJsDefault.default).FALSE;
        for(let i = 0; i < this._geometries.length; i++)dimension = Math.max(dimension, this._geometries[i].getDimension());
        return dimension;
    }
    getNumGeometries() {
        return this._geometries.length;
    }
    getBoundary() {
        (0, _geometryJsDefault.default).checkNotGeometryCollection(this);
        (0, _assertJsDefault.default).shouldNeverReachHere();
        return null;
    }
    getGeometryType() {
        return (0, _geometryJsDefault.default).TYPENAME_GEOMETRYCOLLECTION;
    }
    isEmpty() {
        for(let i = 0; i < this._geometries.length; i++)if (!this._geometries[i].isEmpty()) return false;
        return true;
    }
    normalize() {
        for(let i = 0; i < this._geometries.length; i++)this._geometries[i].normalize();
        (0, _arraysJsDefault.default).sort(this._geometries);
    }
    getCoordinate() {
        if (this.isEmpty()) return null;
        return this._geometries[0].getCoordinate();
    }
    getBoundaryDimension() {
        let dimension = (0, _dimensionJsDefault.default).FALSE;
        for(let i = 0; i < this._geometries.length; i++)dimension = Math.max(dimension, this._geometries[i].getBoundaryDimension());
        return dimension;
    }
    getLength() {
        let sum = 0.0;
        for(let i = 0; i < this._geometries.length; i++)sum += this._geometries[i].getLength();
        return sum;
    }
    getNumPoints() {
        let numPoints = 0;
        for(let i = 0; i < this._geometries.length; i++)numPoints += this._geometries[i].getNumPoints();
        return numPoints;
    }
    compareToSameClass() {
        if (arguments.length === 1) {
            const o = arguments[0];
            const theseElements = new (0, _treeSetJsDefault.default)((0, _arraysJsDefault.default).asList(this._geometries));
            const otherElements = new (0, _treeSetJsDefault.default)((0, _arraysJsDefault.default).asList(o._geometries));
            return this.compare(theseElements, otherElements);
        } else if (arguments.length === 2) {
            const o = arguments[0], comp = arguments[1];
            const gc = o;
            const n1 = this.getNumGeometries();
            const n2 = gc.getNumGeometries();
            let i = 0;
            while(i < n1 && i < n2){
                const thisGeom = this.getGeometryN(i);
                const otherGeom = gc.getGeometryN(i);
                const holeComp = thisGeom.compareToSameClass(otherGeom, comp);
                if (holeComp !== 0) return holeComp;
                i++;
            }
            if (i < n1) return 1;
            if (i < n2) return -1;
            return 0;
        }
    }
    apply() {
        if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateFilterJsDefault.default))) {
            const filter = arguments[0];
            for(let i = 0; i < this._geometries.length; i++)this._geometries[i].apply(filter);
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceFilterJsDefault.default))) {
            const filter = arguments[0];
            if (this._geometries.length === 0) return null;
            for(let i = 0; i < this._geometries.length; i++){
                this._geometries[i].apply(filter);
                if (filter.isDone()) break;
            }
            if (filter.isGeometryChanged()) this.geometryChanged();
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _geometryFilterJsDefault.default))) {
            const filter = arguments[0];
            filter.filter(this);
            for(let i = 0; i < this._geometries.length; i++)this._geometries[i].apply(filter);
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _geometryComponentFilterJsDefault.default))) {
            const filter = arguments[0];
            filter.filter(this);
            for(let i = 0; i < this._geometries.length; i++)this._geometries[i].apply(filter);
        }
    }
}
exports.default = GeometryCollection;

},{"../../../../java/util/TreeSet.js":"iQa9l","../../../../hasInterface.js":"d8mIo","../../../../java/lang/IllegalArgumentException.js":"1VQhm","./GeometryComponentFilter.js":"8aMWe","./Dimension.js":"966Ye","../../../../java/util/ArrayList.js":"g8omH","./Geometry.js":"d5V2e","../../../../java/util/Arrays.js":"8vEqO","./CoordinateFilter.js":"9F02P","./GeometryFilter.js":"djHvd","./CoordinateSequenceFilter.js":"8HUHX","./Envelope.js":"ha5UZ","../util/Assert.js":"ePbcB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQa9l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _collectionJs = require("./Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
var _noSuchElementExceptionJs = require("./NoSuchElementException.js");
var _noSuchElementExceptionJsDefault = parcelHelpers.interopDefault(_noSuchElementExceptionJs);
var _unsupportedOperationExceptionJs = require("../lang/UnsupportedOperationException.js");
var _unsupportedOperationExceptionJsDefault = parcelHelpers.interopDefault(_unsupportedOperationExceptionJs);
var _sortedSetJs = require("./SortedSet.js");
var _sortedSetJsDefault = parcelHelpers.interopDefault(_sortedSetJs);
class TreeSet extends (0, _sortedSetJsDefault.default) {
    constructor(o){
        super();
        this.array = [];
        if (o instanceof (0, _collectionJsDefault.default)) this.addAll(o);
    }
    contains(o) {
        for (const e of this.array)if (e.compareTo(o) === 0) return true;
        return false;
    }
    add(o) {
        if (this.contains(o)) return false;
        for(let i = 0, len = this.array.length; i < len; i++){
            const e = this.array[i];
            if (e.compareTo(o) === 1) return !!this.array.splice(i, 0, o);
        }
        this.array.push(o);
        return true;
    }
    addAll(c) {
        for (const e of c)this.add(e);
        return true;
    }
    remove() {
        throw new (0, _unsupportedOperationExceptionJsDefault.default)();
    }
    size() {
        return this.array.length;
    }
    isEmpty() {
        return this.array.length === 0;
    }
    toArray() {
        return this.array.slice();
    }
    iterator() {
        return new Iterator(this.array);
    }
}
exports.default = TreeSet;
class Iterator {
    constructor(array){
        this.array = array;
        this.position = 0;
    }
    next() {
        if (this.position === this.array.length) throw new (0, _noSuchElementExceptionJsDefault.default)();
        return this.array[this.position++];
    }
    hasNext() {
        return this.position < this.array.length;
    }
    remove() {
        throw new (0, _unsupportedOperationExceptionJsDefault.default)();
    }
}

},{"./Collection.js":"fbl5V","./NoSuchElementException.js":"1NxXp","../lang/UnsupportedOperationException.js":"fEx26","./SortedSet.js":"fqiEm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fqiEm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setJs = require("./Set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
class SortedSet extends (0, _setJsDefault.default) {
}
exports.default = SortedSet;

},{"./Set.js":"6BSHf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6BSHf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _collectionJs = require("./Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
class Set extends (0, _collectionJsDefault.default) {
    /**
   * Returns true if this set contains the specified element. More formally,
   * returns true if and only if this set contains an element e such that (o==null ?
   * e==null : o.equals(e)).
   * @param {Object} e
   * @return {boolean}
   */ contains() {}
}
exports.default = Set;

},{"./Collection.js":"fbl5V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8vEqO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayListJs = require("./ArrayList.js");
var _arrayListJsDefault = parcelHelpers.interopDefault(_arrayListJs);
class Arrays {
    static sort() {
        const a = arguments[0];
        if (arguments.length === 1) a.sort((a, b)=>a.compareTo(b));
        else if (arguments.length === 2) a.sort((a, b)=>arguments[1].compare(a, b));
        else if (arguments.length === 3) {
            const t = a.slice(arguments[1], arguments[2]);
            t.sort();
            const r = a.slice(0, arguments[1]).concat(t, a.slice(arguments[2], a.length));
            a.splice(0, a.length);
            for (const e of r)a.push(e);
        } else if (arguments.length === 4) {
            const t = a.slice(arguments[1], arguments[2]);
            t.sort((a, b)=>arguments[3].compare(a, b));
            const r = a.slice(0, arguments[1]).concat(t, a.slice(arguments[2], a.length));
            a.splice(0, a.length);
            for (const e of r)a.push(e);
        }
    }
    /**
   * @param {Array} array
   * @return {ArrayList}
   */ static asList(array) {
        const arrayList = new (0, _arrayListJsDefault.default)();
        for (const e of array)arrayList.add(e);
        return arrayList;
    }
    static copyOf(original, newLength) {
        return original.slice(0, newLength);
    }
}
exports.default = Arrays;

},{"./ArrayList.js":"g8omH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gO2Qf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Polygonal {
}
exports.default = Polygonal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xUYw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hashMapJs = require("../../../../java/util/HashMap.js");
var _hashMapJsDefault = parcelHelpers.interopDefault(_hashMapJs);
var _coordinateJs = require("./Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _doubleJs = require("../../../../java/lang/Double.js");
var _doubleJsDefault = parcelHelpers.interopDefault(_doubleJs);
var _integerJs = require("../../../../java/lang/Integer.js");
var _integerJsDefault = parcelHelpers.interopDefault(_integerJs);
var _comparableJs = require("../../../../java/lang/Comparable.js");
var _comparableJsDefault = parcelHelpers.interopDefault(_comparableJs);
var _serializableJs = require("../../../../java/io/Serializable.js");
var _serializableJsDefault = parcelHelpers.interopDefault(_serializableJs);
class PrecisionModel {
    constructor(){
        PrecisionModel.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._modelType = null;
        this._scale = null;
        if (arguments.length === 0) this._modelType = PrecisionModel.FLOATING;
        else if (arguments.length === 1) {
            if (arguments[0] instanceof Type) {
                const modelType = arguments[0];
                this._modelType = modelType;
                if (modelType === PrecisionModel.FIXED) this.setScale(1.0);
            } else if (typeof arguments[0] === 'number') {
                const scale = arguments[0];
                this._modelType = PrecisionModel.FIXED;
                this.setScale(scale);
            } else if (arguments[0] instanceof PrecisionModel) {
                const pm = arguments[0];
                this._modelType = pm._modelType;
                this._scale = pm._scale;
            }
        }
    }
    static mostPrecise(pm1, pm2) {
        if (pm1.compareTo(pm2) >= 0) return pm1;
        return pm2;
    }
    equals(other) {
        if (!(other instanceof PrecisionModel)) return false;
        const otherPrecisionModel = other;
        return this._modelType === otherPrecisionModel._modelType && this._scale === otherPrecisionModel._scale;
    }
    compareTo(o) {
        const other = o;
        const sigDigits = this.getMaximumSignificantDigits();
        const otherSigDigits = other.getMaximumSignificantDigits();
        return (0, _integerJsDefault.default).compare(sigDigits, otherSigDigits);
    }
    getType() {
        return this._modelType;
    }
    toString() {
        let description = 'UNKNOWN';
        if (this._modelType === PrecisionModel.FLOATING) description = 'Floating';
        else if (this._modelType === PrecisionModel.FLOATING_SINGLE) description = 'Floating-Single';
        else if (this._modelType === PrecisionModel.FIXED) description = 'Fixed (Scale=' + this.getScale() + ')';
        return description;
    }
    makePrecise() {
        if (typeof arguments[0] === 'number') {
            const val = arguments[0];
            if ((0, _doubleJsDefault.default).isNaN(val)) return val;
            if (this._modelType === PrecisionModel.FLOATING_SINGLE) {
                const floatSingleVal = val;
                return floatSingleVal;
            }
            if (this._modelType === PrecisionModel.FIXED) return Math.round(val * this._scale) / this._scale;
            return val;
        } else if (arguments[0] instanceof (0, _coordinateJsDefault.default)) {
            const coord = arguments[0];
            if (this._modelType === PrecisionModel.FLOATING) return null;
            coord.x = this.makePrecise(coord.x);
            coord.y = this.makePrecise(coord.y);
        }
    }
    getMaximumSignificantDigits() {
        let maxSigDigits = 16;
        if (this._modelType === PrecisionModel.FLOATING) maxSigDigits = 16;
        else if (this._modelType === PrecisionModel.FLOATING_SINGLE) maxSigDigits = 6;
        else if (this._modelType === PrecisionModel.FIXED) maxSigDigits = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)));
        return maxSigDigits;
    }
    setScale(scale) {
        this._scale = Math.abs(scale);
    }
    getScale() {
        return this._scale;
    }
    isFloating() {
        return this._modelType === PrecisionModel.FLOATING || this._modelType === PrecisionModel.FLOATING_SINGLE;
    }
    get interfaces_() {
        return [
            (0, _serializableJsDefault.default),
            (0, _comparableJsDefault.default)
        ];
    }
}
exports.default = PrecisionModel;
class Type {
    constructor(){
        Type.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._name = null;
        const name = arguments[0];
        this._name = name;
        Type.nameToTypeMap.put(name, this);
    }
    readResolve() {
        return Type.nameToTypeMap.get(this._name);
    }
    toString() {
        return this._name;
    }
    get interfaces_() {
        return [
            (0, _serializableJsDefault.default)
        ];
    }
}
Type.nameToTypeMap = new (0, _hashMapJsDefault.default)();
PrecisionModel.Type = Type;
PrecisionModel.FIXED = new Type('FIXED');
PrecisionModel.FLOATING = new Type('FLOATING');
PrecisionModel.FLOATING_SINGLE = new Type('FLOATING SINGLE');
PrecisionModel.maximumPreciseValue = 9007199254740992.0;

},{"../../../../java/util/HashMap.js":"gwL7P","./Coordinate.js":"3REUb","../../../../java/lang/Double.js":"jCc26","../../../../java/lang/Integer.js":"9MkbL","../../../../java/lang/Comparable.js":"6Adw4","../../../../java/io/Serializable.js":"4emqV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gwL7P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayListJs = require("./ArrayList.js");
var _arrayListJsDefault = parcelHelpers.interopDefault(_arrayListJs);
var _mapJs = require("./Map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _hashSetJs = require("./HashSet.js");
var _hashSetJsDefault = parcelHelpers.interopDefault(_hashSetJs);
class HashMap extends (0, _mapJsDefault.default) {
    constructor(){
        super();
        this.map = new Map();
    }
    get(key) {
        return this.map.get(key) || null;
    }
    put(key, value) {
        this.map.set(key, value);
        return value;
    }
    values() {
        const arrayList = new (0, _arrayListJsDefault.default)();
        const it = this.map.values();
        let o = it.next();
        while(!o.done){
            arrayList.add(o.value);
            o = it.next();
        }
        return arrayList;
    }
    entrySet() {
        const hashSet = new (0, _hashSetJsDefault.default)();
        this.map.entries().forEach((entry)=>hashSet.add(entry));
        return hashSet;
    }
    size() {
        return this.map.size();
    }
}
exports.default = HashMap;

},{"./ArrayList.js":"g8omH","./Map.js":"aMj1H","./HashSet.js":"cNQO2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aMj1H":[function(require,module,exports,__globalThis) {
/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Map.html
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Map {
    /**
     * Returns the value to which the specified key is mapped, or null if this map
     * contains no mapping for the key.
     * @param {Object} key
     * @return {Object}
     */ get() {}
    /**
     * Associates the specified value with the specified key in this map (optional
     * operation).
     * @param {Object} key
     * @param {Object} value
     * @return {Object}
     */ put() {}
    /**
     * Returns the number of key-value mappings in this map.
     * @return {number}
     */ size() {}
    /**
     * Returns a Collection view of the values contained in this map.
     * @return {javascript.util.Collection}
     */ values() {}
    /**
     * Returns a {@link Set} view of the mappings contained in this map.
     * The set is backed by the map, so changes to the map are
     * reflected in the set, and vice-versa.  If the map is modified
     * while an iteration over the set is in progress (except through
     * the iterator's own <tt>remove</tt> operation, or through the
     * <tt>setValue</tt> operation on a map entry returned by the
     * iterator) the results of the iteration are undefined.  The set
     * supports element removal, which removes the corresponding
     * mapping from the map, via the <tt>Iterator.remove</tt>,
     * <tt>Set.remove</tt>, <tt>removeAll</tt>, <tt>retainAll</tt> and
     * <tt>clear</tt> operations.  It does not support the
     * <tt>add</tt> or <tt>addAll</tt> operations.
     *
     * @return {Set} a set view of the mappings contained in this map
     */ entrySet() {}
}
exports.default = Map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cNQO2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _collectionJs = require("./Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
var _noSuchElementExceptionJs = require("./NoSuchElementException.js");
var _noSuchElementExceptionJsDefault = parcelHelpers.interopDefault(_noSuchElementExceptionJs);
var _unsupportedOperationExceptionJs = require("../lang/UnsupportedOperationException.js");
var _unsupportedOperationExceptionJsDefault = parcelHelpers.interopDefault(_unsupportedOperationExceptionJs);
var _setJs = require("./Set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
class HashSet extends (0, _setJsDefault.default) {
    constructor(o){
        super();
        this.map = new Map();
        if (o instanceof (0, _collectionJsDefault.default)) this.addAll(o);
    }
    contains(o) {
        const hashCode = o.hashCode ? o.hashCode() : o;
        if (this.map.has(hashCode)) return true;
        return false;
    }
    add(o) {
        const hashCode = o.hashCode ? o.hashCode() : o;
        if (this.map.has(hashCode)) return false;
        return !!this.map.set(hashCode, o);
    }
    addAll(c) {
        for (const e of c)this.add(e);
        return true;
    }
    remove() {
        throw new (0, _unsupportedOperationExceptionJsDefault.default)();
    }
    size() {
        return this.map.size;
    }
    isEmpty() {
        return this.map.size === 0;
    }
    toArray() {
        return Array.from(this.map.values());
    }
    iterator() {
        return new Iterator(this.map);
    }
    [Symbol.iterator]() {
        return this.map;
    }
}
exports.default = HashSet;
class Iterator {
    constructor(map){
        this.iterator = map.values();
        const { done, value } = this.iterator.next();
        this.done = done;
        this.value = value;
    }
    next() {
        if (this.done) throw new (0, _noSuchElementExceptionJsDefault.default)();
        const current = this.value;
        const { done, value } = this.iterator.next();
        this.done = done;
        this.value = value;
        return current;
    }
    hasNext() {
        return !this.done;
    }
    remove() {
        throw new (0, _unsupportedOperationExceptionJsDefault.default)();
    }
}

},{"./Collection.js":"fbl5V","./NoSuchElementException.js":"1NxXp","../lang/UnsupportedOperationException.js":"fEx26","./Set.js":"6BSHf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9MkbL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Integer {
    constructor(value){
        this.value = value;
    }
    intValue() {
        return this.value;
    }
    compareTo(o) {
        if (this.value < o) return -1;
        if (this.value > o) return 1;
        return 0;
    }
    static compare(x, y) {
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    }
    static isNan(n) {
        return Number.isNaN(n);
    }
    static valueOf(value) {
        return new Integer(value);
    }
}
exports.default = Integer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdpMS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _geometryJs = require("./Geometry.js");
var _geometryJsDefault = parcelHelpers.interopDefault(_geometryJs);
var _linealJs = require("./Lineal.js");
var _linealJsDefault = parcelHelpers.interopDefault(_linealJs);
var _dimensionJs = require("./Dimension.js");
var _dimensionJsDefault = parcelHelpers.interopDefault(_dimensionJs);
var _geometryCollectionJs = require("./GeometryCollection.js");
var _geometryCollectionJsDefault = parcelHelpers.interopDefault(_geometryCollectionJs);
var _unsupportedOperationExceptionJs = require("../../../../java/lang/UnsupportedOperationException.js");
var _unsupportedOperationExceptionJsDefault = parcelHelpers.interopDefault(_unsupportedOperationExceptionJs);
class MultiLineString extends (0, _geometryCollectionJsDefault.default) {
    constructor(){
        super();
        MultiLineString.constructor_.apply(this, arguments);
    }
    static constructor_() {
        const lineStrings = arguments[0], factory = arguments[1];
        (0, _geometryCollectionJsDefault.default).constructor_.call(this, lineStrings, factory);
    }
    copyInternal() {
        const lineStrings = new Array(this._geometries.length).fill(null);
        for(let i = 0; i < lineStrings.length; i++)lineStrings[i] = this._geometries[i].copy();
        return new MultiLineString(lineStrings, this._factory);
    }
    equalsExact() {
        if (arguments.length === 2 && typeof arguments[1] === 'number' && arguments[0] instanceof (0, _geometryJsDefault.default)) {
            const other = arguments[0], tolerance = arguments[1];
            if (!this.isEquivalentClass(other)) return false;
            return super.equalsExact.call(this, other, tolerance);
        } else return super.equalsExact.apply(this, arguments);
    }
    getBoundaryDimension() {
        if (this.isClosed()) return (0, _dimensionJsDefault.default).FALSE;
        return 0;
    }
    isClosed() {
        if (this.isEmpty()) return false;
        for(let i = 0; i < this._geometries.length; i++)if (!this._geometries[i].isClosed()) return false;
        return true;
    }
    getTypeCode() {
        return (0, _geometryJsDefault.default).TYPECODE_MULTILINESTRING;
    }
    getDimension() {
        return 1;
    }
    getBoundary() {
        throw new (0, _unsupportedOperationExceptionJsDefault.default)();
    }
    getGeometryType() {
        return (0, _geometryJsDefault.default).TYPENAME_MULTILINESTRING;
    }
    get interfaces_() {
        return [
            (0, _linealJsDefault.default)
        ];
    }
}
exports.default = MultiLineString;

},{"./Geometry.js":"d5V2e","./Lineal.js":"fZhBn","./Dimension.js":"966Ye","./GeometryCollection.js":"9xeCT","../../../../java/lang/UnsupportedOperationException.js":"fEx26","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9MoJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasInterfaceJs = require("../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _geometryComponentFilterJs = require("./GeometryComponentFilter.js");
var _geometryComponentFilterJsDefault = parcelHelpers.interopDefault(_geometryComponentFilterJs);
var _dimensionJs = require("./Dimension.js");
var _dimensionJsDefault = parcelHelpers.interopDefault(_dimensionJs);
var _puntalJs = require("./Puntal.js");
var _puntalJsDefault = parcelHelpers.interopDefault(_puntalJs);
var _illegalStateExceptionJs = require("../../../../java/lang/IllegalStateException.js");
var _illegalStateExceptionJsDefault = parcelHelpers.interopDefault(_illegalStateExceptionJs);
var _geometryJs = require("./Geometry.js");
var _geometryJsDefault = parcelHelpers.interopDefault(_geometryJs);
var _coordinateFilterJs = require("./CoordinateFilter.js");
var _coordinateFilterJsDefault = parcelHelpers.interopDefault(_coordinateFilterJs);
var _geometryFilterJs = require("./GeometryFilter.js");
var _geometryFilterJsDefault = parcelHelpers.interopDefault(_geometryFilterJs);
var _coordinateSequenceFilterJs = require("./CoordinateSequenceFilter.js");
var _coordinateSequenceFilterJsDefault = parcelHelpers.interopDefault(_coordinateSequenceFilterJs);
var _envelopeJs = require("./Envelope.js");
var _envelopeJsDefault = parcelHelpers.interopDefault(_envelopeJs);
var _assertJs = require("../util/Assert.js");
var _assertJsDefault = parcelHelpers.interopDefault(_assertJs);
class Point extends (0, _geometryJsDefault.default) {
    constructor(){
        super();
        Point.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._coordinates = null;
        const coordinates = arguments[0], factory = arguments[1];
        (0, _geometryJsDefault.default).constructor_.call(this, factory);
        this.init(coordinates);
    }
    computeEnvelopeInternal() {
        if (this.isEmpty()) return new (0, _envelopeJsDefault.default)();
        const env = new (0, _envelopeJsDefault.default)();
        env.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0));
        return env;
    }
    getCoordinates() {
        return this.isEmpty() ? [] : [
            this.getCoordinate()
        ];
    }
    copyInternal() {
        return new Point(this._coordinates.copy(), this._factory);
    }
    equalsExact() {
        if (arguments.length === 2 && typeof arguments[1] === 'number' && arguments[0] instanceof (0, _geometryJsDefault.default)) {
            const other = arguments[0], tolerance = arguments[1];
            if (!this.isEquivalentClass(other)) return false;
            if (this.isEmpty() && other.isEmpty()) return true;
            if (this.isEmpty() !== other.isEmpty()) return false;
            return this.equal(other.getCoordinate(), this.getCoordinate(), tolerance);
        } else return super.equalsExact.apply(this, arguments);
    }
    reverseInternal() {
        return this.getFactory().createPoint(this._coordinates.copy());
    }
    getTypeCode() {
        return (0, _geometryJsDefault.default).TYPECODE_POINT;
    }
    getDimension() {
        return 0;
    }
    getNumPoints() {
        return this.isEmpty() ? 0 : 1;
    }
    getX() {
        if (this.getCoordinate() === null) throw new (0, _illegalStateExceptionJsDefault.default)('getX called on empty Point');
        return this.getCoordinate().x;
    }
    getBoundary() {
        return this.getFactory().createGeometryCollection();
    }
    getGeometryType() {
        return (0, _geometryJsDefault.default).TYPENAME_POINT;
    }
    getCoordinateSequence() {
        return this._coordinates;
    }
    getY() {
        if (this.getCoordinate() === null) throw new (0, _illegalStateExceptionJsDefault.default)('getY called on empty Point');
        return this.getCoordinate().y;
    }
    isSimple() {
        return true;
    }
    normalize() {}
    getCoordinate() {
        return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
    }
    getBoundaryDimension() {
        return (0, _dimensionJsDefault.default).FALSE;
    }
    compareToSameClass() {
        if (arguments.length === 1) {
            const other = arguments[0];
            const point = other;
            return this.getCoordinate().compareTo(point.getCoordinate());
        } else if (arguments.length === 2) {
            const other = arguments[0], comp = arguments[1];
            const point = other;
            return comp.compare(this._coordinates, point._coordinates);
        }
    }
    apply() {
        if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateFilterJsDefault.default))) {
            const filter = arguments[0];
            if (this.isEmpty()) return null;
            filter.filter(this.getCoordinate());
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceFilterJsDefault.default))) {
            const filter = arguments[0];
            if (this.isEmpty()) return null;
            filter.filter(this._coordinates, 0);
            if (filter.isGeometryChanged()) this.geometryChanged();
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _geometryFilterJsDefault.default))) {
            const filter = arguments[0];
            filter.filter(this);
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _geometryComponentFilterJsDefault.default))) {
            const filter = arguments[0];
            filter.filter(this);
        }
    }
    isEmpty() {
        return this._coordinates.size() === 0;
    }
    init(coordinates) {
        if (coordinates === null) coordinates = this.getFactory().getCoordinateSequenceFactory().create([]);
        (0, _assertJsDefault.default).isTrue(coordinates.size() <= 1);
        this._coordinates = coordinates;
    }
    get interfaces_() {
        return [
            (0, _puntalJsDefault.default)
        ];
    }
}
exports.default = Point;

},{"../../../../hasInterface.js":"d8mIo","./GeometryComponentFilter.js":"8aMWe","./Dimension.js":"966Ye","./Puntal.js":"2RT7X","../../../../java/lang/IllegalStateException.js":"4MAFg","./Geometry.js":"d5V2e","./CoordinateFilter.js":"9F02P","./GeometryFilter.js":"djHvd","./CoordinateSequenceFilter.js":"8HUHX","./Envelope.js":"ha5UZ","../util/Assert.js":"ePbcB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2RT7X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Puntal {
}
exports.default = Puntal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4MAFg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exceptionJs = require("./Exception.js");
var _exceptionJsDefault = parcelHelpers.interopDefault(_exceptionJs);
class IllegalStateException extends (0, _exceptionJsDefault.default) {
    constructor(message){
        super(message);
        this.name = Object.keys({
            IllegalStateException
        })[0];
    }
}
exports.default = IllegalStateException;

},{"./Exception.js":"gSmog","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jawWe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _areaJs = require("../algorithm/Area.js");
var _areaJsDefault = parcelHelpers.interopDefault(_areaJs);
var _hasInterfaceJs = require("../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
var _orientationJs = require("../algorithm/Orientation.js");
var _orientationJsDefault = parcelHelpers.interopDefault(_orientationJs);
var _coordinateSequencesJs = require("./CoordinateSequences.js");
var _coordinateSequencesJsDefault = parcelHelpers.interopDefault(_coordinateSequencesJs);
var _geometryComponentFilterJs = require("./GeometryComponentFilter.js");
var _geometryComponentFilterJsDefault = parcelHelpers.interopDefault(_geometryComponentFilterJs);
var _polygonalJs = require("./Polygonal.js");
var _polygonalJsDefault = parcelHelpers.interopDefault(_polygonalJs);
var _geometryJs = require("./Geometry.js");
var _geometryJsDefault = parcelHelpers.interopDefault(_geometryJs);
var _arraysJs = require("../../../../java/util/Arrays.js");
var _arraysJsDefault = parcelHelpers.interopDefault(_arraysJs);
var _coordinateFilterJs = require("./CoordinateFilter.js");
var _coordinateFilterJsDefault = parcelHelpers.interopDefault(_coordinateFilterJs);
var _geometryFilterJs = require("./GeometryFilter.js");
var _geometryFilterJsDefault = parcelHelpers.interopDefault(_geometryFilterJs);
var _coordinateSequenceFilterJs = require("./CoordinateSequenceFilter.js");
var _coordinateSequenceFilterJsDefault = parcelHelpers.interopDefault(_coordinateSequenceFilterJs);
class Polygon extends (0, _geometryJsDefault.default) {
    constructor(){
        super();
        Polygon.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._shell = null;
        this._holes = null;
        let shell = arguments[0], holes = arguments[1], factory = arguments[2];
        (0, _geometryJsDefault.default).constructor_.call(this, factory);
        if (shell === null) shell = this.getFactory().createLinearRing();
        if (holes === null) holes = [];
        if ((0, _geometryJsDefault.default).hasNullElements(holes)) throw new (0, _illegalArgumentExceptionJsDefault.default)('holes must not contain null elements');
        if (shell.isEmpty() && (0, _geometryJsDefault.default).hasNonEmptyElements(holes)) throw new (0, _illegalArgumentExceptionJsDefault.default)('shell is empty but holes are not');
        this._shell = shell;
        this._holes = holes;
    }
    computeEnvelopeInternal() {
        return this._shell.getEnvelopeInternal();
    }
    getCoordinates() {
        if (this.isEmpty()) return [];
        const coordinates = new Array(this.getNumPoints()).fill(null);
        let k = -1;
        const shellCoordinates = this._shell.getCoordinates();
        for(let x = 0; x < shellCoordinates.length; x++){
            k++;
            coordinates[k] = shellCoordinates[x];
        }
        for(let i = 0; i < this._holes.length; i++){
            const childCoordinates = this._holes[i].getCoordinates();
            for(let j = 0; j < childCoordinates.length; j++){
                k++;
                coordinates[k] = childCoordinates[j];
            }
        }
        return coordinates;
    }
    getArea() {
        let area = 0.0;
        area += (0, _areaJsDefault.default).ofRing(this._shell.getCoordinateSequence());
        for(let i = 0; i < this._holes.length; i++)area -= (0, _areaJsDefault.default).ofRing(this._holes[i].getCoordinateSequence());
        return area;
    }
    equalsExact() {
        if (arguments.length === 2 && typeof arguments[1] === 'number' && arguments[0] instanceof (0, _geometryJsDefault.default)) {
            const other = arguments[0], tolerance = arguments[1];
            if (!this.isEquivalentClass(other)) return false;
            const otherPolygon = other;
            const thisShell = this._shell;
            const otherPolygonShell = otherPolygon._shell;
            if (!thisShell.equalsExact(otherPolygonShell, tolerance)) return false;
            if (this._holes.length !== otherPolygon._holes.length) return false;
            for(let i = 0; i < this._holes.length; i++)if (!this._holes[i].equalsExact(otherPolygon._holes[i], tolerance)) return false;
            return true;
        } else return super.equalsExact.apply(this, arguments);
    }
    reverseInternal() {
        const shell = this.getExteriorRing().reverse();
        const holes = new Array(this.getNumInteriorRing()).fill(null);
        for(let i = 0; i < holes.length; i++)holes[i] = this.getInteriorRingN(i).reverse();
        return this.getFactory().createPolygon(shell, holes);
    }
    getTypeCode() {
        return (0, _geometryJsDefault.default).TYPECODE_POLYGON;
    }
    getDimension() {
        return 2;
    }
    getBoundary() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        const rings = new Array(this._holes.length + 1).fill(null);
        rings[0] = this._shell;
        for(let i = 0; i < this._holes.length; i++)rings[i + 1] = this._holes[i];
        if (rings.length <= 1) return this.getFactory().createLinearRing(rings[0].getCoordinateSequence());
        return this.getFactory().createMultiLineString(rings);
    }
    getGeometryType() {
        return (0, _geometryJsDefault.default).TYPENAME_POLYGON;
    }
    getExteriorRing() {
        return this._shell;
    }
    copyInternal() {
        const shellCopy = this._shell.copy();
        const holeCopies = new Array(this._holes.length).fill(null);
        for(let i = 0; i < this._holes.length; i++)holeCopies[i] = this._holes[i].copy();
        return new Polygon(shellCopy, holeCopies, this._factory);
    }
    isRectangle() {
        if (this.getNumInteriorRing() !== 0) return false;
        if (this._shell === null) return false;
        if (this._shell.getNumPoints() !== 5) return false;
        const seq = this._shell.getCoordinateSequence();
        const env = this.getEnvelopeInternal();
        for(let i = 0; i < 5; i++){
            const x = seq.getX(i);
            if (!(x === env.getMinX() || x === env.getMaxX())) return false;
            const y = seq.getY(i);
            if (!(y === env.getMinY() || y === env.getMaxY())) return false;
        }
        let prevX = seq.getX(0);
        let prevY = seq.getY(0);
        for(let i = 1; i <= 4; i++){
            const x = seq.getX(i);
            const y = seq.getY(i);
            const xChanged = x !== prevX;
            const yChanged = y !== prevY;
            if (xChanged === yChanged) return false;
            prevX = x;
            prevY = y;
        }
        return true;
    }
    normalize() {
        if (arguments.length === 0) {
            this._shell = this.normalized(this._shell, true);
            for(let i = 0; i < this._holes.length; i++)this._holes[i] = this.normalized(this._holes[i], false);
            (0, _arraysJsDefault.default).sort(this._holes);
        } else if (arguments.length === 2) {
            const ring = arguments[0], clockwise = arguments[1];
            if (ring.isEmpty()) return null;
            const seq = ring.getCoordinateSequence();
            const minCoordinateIndex = (0, _coordinateSequencesJsDefault.default).minCoordinateIndex(seq, 0, seq.size() - 2);
            (0, _coordinateSequencesJsDefault.default).scroll(seq, minCoordinateIndex, true);
            if ((0, _orientationJsDefault.default).isCCW(seq) === clockwise) (0, _coordinateSequencesJsDefault.default).reverse(seq);
        }
    }
    getCoordinate() {
        return this._shell.getCoordinate();
    }
    getNumInteriorRing() {
        return this._holes.length;
    }
    getBoundaryDimension() {
        return 1;
    }
    getLength() {
        let len = 0.0;
        len += this._shell.getLength();
        for(let i = 0; i < this._holes.length; i++)len += this._holes[i].getLength();
        return len;
    }
    getNumPoints() {
        let numPoints = this._shell.getNumPoints();
        for(let i = 0; i < this._holes.length; i++)numPoints += this._holes[i].getNumPoints();
        return numPoints;
    }
    convexHull() {
        return this.getExteriorRing().convexHull();
    }
    normalized(ring, clockwise) {
        const res = ring.copy();
        this.normalize(res, clockwise);
        return res;
    }
    compareToSameClass() {
        if (arguments.length === 1) {
            const o = arguments[0];
            const thisShell = this._shell;
            const otherShell = o._shell;
            return thisShell.compareToSameClass(otherShell);
        } else if (arguments.length === 2) {
            const o = arguments[0], comp = arguments[1];
            const poly = o;
            const thisShell = this._shell;
            const otherShell = poly._shell;
            const shellComp = thisShell.compareToSameClass(otherShell, comp);
            if (shellComp !== 0) return shellComp;
            const nHole1 = this.getNumInteriorRing();
            const nHole2 = poly.getNumInteriorRing();
            let i = 0;
            while(i < nHole1 && i < nHole2){
                const thisHole = this.getInteriorRingN(i);
                const otherHole = poly.getInteriorRingN(i);
                const holeComp = thisHole.compareToSameClass(otherHole, comp);
                if (holeComp !== 0) return holeComp;
                i++;
            }
            if (i < nHole1) return 1;
            if (i < nHole2) return -1;
            return 0;
        }
    }
    apply() {
        if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateFilterJsDefault.default))) {
            const filter = arguments[0];
            this._shell.apply(filter);
            for(let i = 0; i < this._holes.length; i++)this._holes[i].apply(filter);
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceFilterJsDefault.default))) {
            const filter = arguments[0];
            this._shell.apply(filter);
            if (!filter.isDone()) for(let i = 0; i < this._holes.length; i++){
                this._holes[i].apply(filter);
                if (filter.isDone()) break;
            }
            if (filter.isGeometryChanged()) this.geometryChanged();
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _geometryFilterJsDefault.default))) {
            const filter = arguments[0];
            filter.filter(this);
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _geometryComponentFilterJsDefault.default))) {
            const filter = arguments[0];
            filter.filter(this);
            this._shell.apply(filter);
            for(let i = 0; i < this._holes.length; i++)this._holes[i].apply(filter);
        }
    }
    isEmpty() {
        return this._shell.isEmpty();
    }
    getInteriorRingN(n) {
        return this._holes[n];
    }
    get interfaces_() {
        return [
            (0, _polygonalJsDefault.default)
        ];
    }
}
exports.default = Polygon;

},{"../algorithm/Area.js":"lw4mS","../../../../hasInterface.js":"d8mIo","../../../../java/lang/IllegalArgumentException.js":"1VQhm","../algorithm/Orientation.js":"QDWSa","./CoordinateSequences.js":"fFRyy","./GeometryComponentFilter.js":"8aMWe","./Polygonal.js":"gO2Qf","./Geometry.js":"d5V2e","../../../../java/util/Arrays.js":"8vEqO","./CoordinateFilter.js":"9F02P","./GeometryFilter.js":"djHvd","./CoordinateSequenceFilter.js":"8HUHX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lw4mS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasInterfaceJs = require("../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _coordinateJs = require("../geom/Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _coordinateSequenceJs = require("../geom/CoordinateSequence.js");
var _coordinateSequenceJsDefault = parcelHelpers.interopDefault(_coordinateSequenceJs);
class Area {
    static ofRingSigned() {
        if (arguments[0] instanceof Array) {
            const ring = arguments[0];
            if (ring.length < 3) return 0.0;
            let sum = 0.0;
            const x0 = ring[0].x;
            for(let i = 1; i < ring.length - 1; i++){
                const x = ring[i].x - x0;
                const y1 = ring[i + 1].y;
                const y2 = ring[i - 1].y;
                sum += x * (y2 - y1);
            }
            return sum / 2.0;
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default))) {
            const ring = arguments[0];
            const n = ring.size();
            if (n < 3) return 0.0;
            const p0 = new (0, _coordinateJsDefault.default)();
            const p1 = new (0, _coordinateJsDefault.default)();
            const p2 = new (0, _coordinateJsDefault.default)();
            ring.getCoordinate(0, p1);
            ring.getCoordinate(1, p2);
            const x0 = p1.x;
            p2.x -= x0;
            let sum = 0.0;
            for(let i = 1; i < n - 1; i++){
                p0.y = p1.y;
                p1.x = p2.x;
                p1.y = p2.y;
                ring.getCoordinate(i + 1, p2);
                p2.x -= x0;
                sum += p1.x * (p0.y - p2.y);
            }
            return sum / 2.0;
        }
    }
    static ofRing() {
        if (arguments[0] instanceof Array) {
            const ring = arguments[0];
            return Math.abs(Area.ofRingSigned(ring));
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default))) {
            const ring = arguments[0];
            return Math.abs(Area.ofRingSigned(ring));
        }
    }
}
exports.default = Area;

},{"../../../../hasInterface.js":"d8mIo","../geom/Coordinate.js":"3REUb","../geom/CoordinateSequence.js":"3GfKT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"QDWSa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasInterfaceJs = require("../../../../hasInterface.js");
var _hasInterfaceJsDefault = parcelHelpers.interopDefault(_hasInterfaceJs);
var _illegalArgumentExceptionJs = require("../../../../java/lang/IllegalArgumentException.js");
var _illegalArgumentExceptionJsDefault = parcelHelpers.interopDefault(_illegalArgumentExceptionJs);
var _cgalgorithmsDDJs = require("./CGAlgorithmsDD.js");
var _cgalgorithmsDDJsDefault = parcelHelpers.interopDefault(_cgalgorithmsDDJs);
var _coordinateSequenceJs = require("../geom/CoordinateSequence.js");
var _coordinateSequenceJsDefault = parcelHelpers.interopDefault(_coordinateSequenceJs);
class Orientation {
    static isCCW() {
        if (arguments[0] instanceof Array) {
            const ring = arguments[0];
            const nPts = ring.length - 1;
            if (nPts < 3) throw new (0, _illegalArgumentExceptionJsDefault.default)('Ring has fewer than 4 points, so orientation cannot be determined');
            let hiPt = ring[0];
            let hiIndex = 0;
            for(let i = 1; i <= nPts; i++){
                const p = ring[i];
                if (p.y > hiPt.y) {
                    hiPt = p;
                    hiIndex = i;
                }
            }
            let iPrev = hiIndex;
            do {
                iPrev = iPrev - 1;
                if (iPrev < 0) iPrev = nPts;
            }while (ring[iPrev].equals2D(hiPt) && iPrev !== hiIndex);
            let iNext = hiIndex;
            do iNext = (iNext + 1) % nPts;
            while (ring[iNext].equals2D(hiPt) && iNext !== hiIndex);
            const prev = ring[iPrev];
            const next = ring[iNext];
            if (prev.equals2D(hiPt) || next.equals2D(hiPt) || prev.equals2D(next)) return false;
            const disc = Orientation.index(prev, hiPt, next);
            let isCCW = null;
            if (disc === 0) isCCW = prev.x > next.x;
            else isCCW = disc > 0;
            return isCCW;
        } else if ((0, _hasInterfaceJsDefault.default)(arguments[0], (0, _coordinateSequenceJsDefault.default))) {
            const ring = arguments[0];
            const nPts = ring.size() - 1;
            if (nPts < 3) throw new (0, _illegalArgumentExceptionJsDefault.default)('Ring has fewer than 4 points, so orientation cannot be determined');
            let hiPt = ring.getCoordinate(0);
            let hiIndex = 0;
            for(let i = 1; i <= nPts; i++){
                const p = ring.getCoordinate(i);
                if (p.y > hiPt.y) {
                    hiPt = p;
                    hiIndex = i;
                }
            }
            let prev = null;
            let iPrev = hiIndex;
            do {
                iPrev = iPrev - 1;
                if (iPrev < 0) iPrev = nPts;
                prev = ring.getCoordinate(iPrev);
            }while (prev.equals2D(hiPt) && iPrev !== hiIndex);
            let next = null;
            let iNext = hiIndex;
            do {
                iNext = (iNext + 1) % nPts;
                next = ring.getCoordinate(iNext);
            }while (next.equals2D(hiPt) && iNext !== hiIndex);
            if (prev.equals2D(hiPt) || next.equals2D(hiPt) || prev.equals2D(next)) return false;
            const disc = Orientation.index(prev, hiPt, next);
            let isCCW = null;
            if (disc === 0) isCCW = prev.x > next.x;
            else isCCW = disc > 0;
            return isCCW;
        }
    }
    static index(p1, p2, q) {
        return (0, _cgalgorithmsDDJsDefault.default).orientationIndex(p1, p2, q);
    }
}
exports.default = Orientation;
Orientation.CLOCKWISE = -1;
Orientation.RIGHT = Orientation.CLOCKWISE;
Orientation.COUNTERCLOCKWISE = 1;
Orientation.LEFT = Orientation.COUNTERCLOCKWISE;
Orientation.COLLINEAR = 0;
Orientation.STRAIGHT = Orientation.COLLINEAR;

},{"../../../../hasInterface.js":"d8mIo","../../../../java/lang/IllegalArgumentException.js":"1VQhm","./CGAlgorithmsDD.js":"3tMI9","../geom/CoordinateSequence.js":"3GfKT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3tMI9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coordinateJs = require("../geom/Coordinate.js");
var _coordinateJsDefault = parcelHelpers.interopDefault(_coordinateJs);
var _doubleJs = require("../../../../java/lang/Double.js");
var _doubleJsDefault = parcelHelpers.interopDefault(_doubleJs);
var _ddJs = require("../math/DD.js");
var _ddJsDefault = parcelHelpers.interopDefault(_ddJs);
class CGAlgorithmsDD {
    static orientationIndex(p1, p2, q) {
        const index = CGAlgorithmsDD.orientationIndexFilter(p1, p2, q);
        if (index <= 1) return index;
        const dx1 = (0, _ddJsDefault.default).valueOf(p2.x).selfAdd(-p1.x);
        const dy1 = (0, _ddJsDefault.default).valueOf(p2.y).selfAdd(-p1.y);
        const dx2 = (0, _ddJsDefault.default).valueOf(q.x).selfAdd(-p2.x);
        const dy2 = (0, _ddJsDefault.default).valueOf(q.y).selfAdd(-p2.y);
        return dx1.selfMultiply(dy2).selfSubtract(dy1.selfMultiply(dx2)).signum();
    }
    static signOfDet2x2() {
        if (arguments[3] instanceof (0, _ddJsDefault.default) && arguments[2] instanceof (0, _ddJsDefault.default) && arguments[0] instanceof (0, _ddJsDefault.default) && arguments[1] instanceof (0, _ddJsDefault.default)) {
            const x1 = arguments[0], y1 = arguments[1], x2 = arguments[2], y2 = arguments[3];
            const det = x1.multiply(y2).selfSubtract(y1.multiply(x2));
            return det.signum();
        } else if (typeof arguments[3] === 'number' && typeof arguments[2] === 'number' && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
            const dx1 = arguments[0], dy1 = arguments[1], dx2 = arguments[2], dy2 = arguments[3];
            const x1 = (0, _ddJsDefault.default).valueOf(dx1);
            const y1 = (0, _ddJsDefault.default).valueOf(dy1);
            const x2 = (0, _ddJsDefault.default).valueOf(dx2);
            const y2 = (0, _ddJsDefault.default).valueOf(dy2);
            const det = x1.multiply(y2).selfSubtract(y1.multiply(x2));
            return det.signum();
        }
    }
    static intersection(p1, p2, q1, q2) {
        const px = new (0, _ddJsDefault.default)(p1.y).selfSubtract(p2.y);
        const py = new (0, _ddJsDefault.default)(p2.x).selfSubtract(p1.x);
        const pw = new (0, _ddJsDefault.default)(p1.x).selfMultiply(p2.y).selfSubtract(new (0, _ddJsDefault.default)(p2.x).selfMultiply(p1.y));
        const qx = new (0, _ddJsDefault.default)(q1.y).selfSubtract(q2.y);
        const qy = new (0, _ddJsDefault.default)(q2.x).selfSubtract(q1.x);
        const qw = new (0, _ddJsDefault.default)(q1.x).selfMultiply(q2.y).selfSubtract(new (0, _ddJsDefault.default)(q2.x).selfMultiply(q1.y));
        const x = py.multiply(qw).selfSubtract(qy.multiply(pw));
        const y = qx.multiply(pw).selfSubtract(px.multiply(qw));
        const w = px.multiply(qy).selfSubtract(qx.multiply(py));
        const xInt = x.selfDivide(w).doubleValue();
        const yInt = y.selfDivide(w).doubleValue();
        if ((0, _doubleJsDefault.default).isNaN(xInt) || (0, _doubleJsDefault.default).isInfinite(xInt) || (0, _doubleJsDefault.default).isNaN(yInt) || (0, _doubleJsDefault.default).isInfinite(yInt)) return null;
        return new (0, _coordinateJsDefault.default)(xInt, yInt);
    }
    static orientationIndexFilter(pa, pb, pc) {
        let detsum = null;
        const detleft = (pa.x - pc.x) * (pb.y - pc.y);
        const detright = (pa.y - pc.y) * (pb.x - pc.x);
        const det = detleft - detright;
        if (detleft > 0.0) {
            if (detright <= 0.0) return CGAlgorithmsDD.signum(det);
            else detsum = detleft + detright;
        } else if (detleft < 0.0) {
            if (detright >= 0.0) return CGAlgorithmsDD.signum(det);
            else detsum = -detleft - detright;
        } else return CGAlgorithmsDD.signum(det);
        const errbound = CGAlgorithmsDD.DP_SAFE_EPSILON * detsum;
        if (det >= errbound || -det >= errbound) return CGAlgorithmsDD.signum(det);
        return 2;
    }
    static signum(x) {
        if (x > 0) return 1;
        if (x < 0) return -1;
        return 0;
    }
}
exports.default = CGAlgorithmsDD;
CGAlgorithmsDD.DP_SAFE_EPSILON = 1e-15;

},{"../geom/Coordinate.js":"3REUb","../../../../java/lang/Double.js":"jCc26","../math/DD.js":"jc3gq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jc3gq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stringBufferJs = require("../../../../java/lang/StringBuffer.js");
var _stringBufferJsDefault = parcelHelpers.interopDefault(_stringBufferJs);
var _doubleJs = require("../../../../java/lang/Double.js");
var _doubleJsDefault = parcelHelpers.interopDefault(_doubleJs);
var _integerJs = require("../../../../java/lang/Integer.js");
var _integerJsDefault = parcelHelpers.interopDefault(_integerJs);
var _characterJs = require("../../../../java/lang/Character.js");
var _characterJsDefault = parcelHelpers.interopDefault(_characterJs);
var _comparableJs = require("../../../../java/lang/Comparable.js");
var _comparableJsDefault = parcelHelpers.interopDefault(_comparableJs);
var _cloneableJs = require("../../../../java/lang/Cloneable.js");
var _cloneableJsDefault = parcelHelpers.interopDefault(_cloneableJs);
var _serializableJs = require("../../../../java/io/Serializable.js");
var _serializableJsDefault = parcelHelpers.interopDefault(_serializableJs);
var _illegalStateExceptionJs = require("../../../../java/lang/IllegalStateException.js");
var _illegalStateExceptionJsDefault = parcelHelpers.interopDefault(_illegalStateExceptionJs);
class DD {
    constructor(){
        DD.constructor_.apply(this, arguments);
    }
    static constructor_() {
        this._hi = 0.0;
        this._lo = 0.0;
        if (arguments.length === 0) this.init(0.0);
        else if (arguments.length === 1) {
            if (typeof arguments[0] === 'number') {
                const x = arguments[0];
                this.init(x);
            } else if (arguments[0] instanceof DD) {
                const dd = arguments[0];
                this.init(dd);
            } else if (typeof arguments[0] === 'string') {
                const str = arguments[0];
                DD.constructor_.call(this, DD.parse(str));
            }
        } else if (arguments.length === 2) {
            const hi = arguments[0], lo = arguments[1];
            this.init(hi, lo);
        }
    }
    static determinant() {
        if (typeof arguments[3] === 'number' && typeof arguments[2] === 'number' && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
            const x1 = arguments[0], y1 = arguments[1], x2 = arguments[2], y2 = arguments[3];
            return DD.determinant(DD.valueOf(x1), DD.valueOf(y1), DD.valueOf(x2), DD.valueOf(y2));
        } else if (arguments[3] instanceof DD && arguments[2] instanceof DD && arguments[0] instanceof DD && arguments[1] instanceof DD) {
            const x1 = arguments[0], y1 = arguments[1], x2 = arguments[2], y2 = arguments[3];
            const det = x1.multiply(y2).selfSubtract(y1.multiply(x2));
            return det;
        }
    }
    static sqr(x) {
        return DD.valueOf(x).selfMultiply(x);
    }
    static valueOf() {
        if (typeof arguments[0] === 'string') {
            const str = arguments[0];
            return DD.parse(str);
        } else if (typeof arguments[0] === 'number') {
            const x = arguments[0];
            return new DD(x);
        }
    }
    static sqrt(x) {
        return DD.valueOf(x).sqrt();
    }
    static parse(str) {
        let i = 0;
        const strlen = str.length;
        while((0, _characterJsDefault.default).isWhitespace(str.charAt(i)))i++;
        let isNegative = false;
        if (i < strlen) {
            const signCh = str.charAt(i);
            if (signCh === '-' || signCh === '+') {
                i++;
                if (signCh === '-') isNegative = true;
            }
        }
        const val = new DD();
        let numDigits = 0;
        let numBeforeDec = 0;
        let exp = 0;
        let hasDecimalChar = false;
        while(true){
            if (i >= strlen) break;
            const ch = str.charAt(i);
            i++;
            if ((0, _characterJsDefault.default).isDigit(ch)) {
                const d = ch - '0';
                val.selfMultiply(DD.TEN);
                val.selfAdd(d);
                numDigits++;
                continue;
            }
            if (ch === '.') {
                numBeforeDec = numDigits;
                hasDecimalChar = true;
                continue;
            }
            if (ch === 'e' || ch === 'E') {
                const expStr = str.substring(i);
                try {
                    exp = (0, _integerJsDefault.default).parseInt(expStr);
                } catch (ex) {
                    if (ex instanceof NumberFormatException) throw new NumberFormatException('Invalid exponent ' + expStr + ' in string ' + str);
                    else throw ex;
                } finally{}
                break;
            }
            throw new NumberFormatException('Unexpected character \'' + ch + '\' at position ' + i + ' in string ' + str);
        }
        let val2 = val;
        if (!hasDecimalChar) numBeforeDec = numDigits;
        const numDecPlaces = numDigits - numBeforeDec - exp;
        if (numDecPlaces === 0) val2 = val;
        else if (numDecPlaces > 0) {
            const scale = DD.TEN.pow(numDecPlaces);
            val2 = val.divide(scale);
        } else if (numDecPlaces < 0) {
            const scale = DD.TEN.pow(-numDecPlaces);
            val2 = val.multiply(scale);
        }
        if (isNegative) return val2.negate();
        return val2;
    }
    static createNaN() {
        return new DD((0, _doubleJsDefault.default).NaN, (0, _doubleJsDefault.default).NaN);
    }
    static copy(dd) {
        return new DD(dd);
    }
    static magnitude(x) {
        const xAbs = Math.abs(x);
        const xLog10 = Math.log(xAbs) / Math.log(10);
        let xMag = Math.trunc(Math.floor(xLog10));
        const xApprox = Math.pow(10, xMag);
        if (xApprox * 10 <= xAbs) xMag += 1;
        return xMag;
    }
    static stringOfChar(ch, len) {
        const buf = new (0, _stringBufferJsDefault.default)();
        for(let i = 0; i < len; i++)buf.append(ch);
        return buf.toString();
    }
    le(y) {
        return this._hi < y._hi || this._hi === y._hi && this._lo <= y._lo;
    }
    extractSignificantDigits(insertDecimalPoint, magnitude) {
        let y = this.abs();
        let mag = DD.magnitude(y._hi);
        const scale = DD.TEN.pow(mag);
        y = y.divide(scale);
        if (y.gt(DD.TEN)) {
            y = y.divide(DD.TEN);
            mag += 1;
        } else if (y.lt(DD.ONE)) {
            y = y.multiply(DD.TEN);
            mag -= 1;
        }
        const decimalPointPos = mag + 1;
        const buf = new (0, _stringBufferJsDefault.default)();
        const numDigits = DD.MAX_PRINT_DIGITS - 1;
        for(let i = 0; i <= numDigits; i++){
            if (insertDecimalPoint && i === decimalPointPos) buf.append('.');
            const digit = Math.trunc(y._hi);
            digit < 0 || digit;
            if (digit < 0) break;
            let rebiasBy10 = false;
            let digitChar = 0;
            if (digit > 9) {
                rebiasBy10 = true;
                digitChar = '9';
            } else digitChar = '0' + digit;
            buf.append(digitChar);
            y = y.subtract(DD.valueOf(digit)).multiply(DD.TEN);
            if (rebiasBy10) y.selfAdd(DD.TEN);
            let continueExtractingDigits = true;
            const remMag = DD.magnitude(y._hi);
            if (remMag < 0 && Math.abs(remMag) >= numDigits - i) continueExtractingDigits = false;
            if (!continueExtractingDigits) break;
        }
        magnitude[0] = mag;
        return buf.toString();
    }
    sqr() {
        return this.multiply(this);
    }
    getSpecialNumberString() {
        if (this.isZero()) return '0.0';
        if (this.isNaN()) return 'NaN ';
        return null;
    }
    setValue() {
        if (arguments[0] instanceof DD) {
            const value = arguments[0];
            this.init(value);
            return this;
        } else if (typeof arguments[0] === 'number') {
            const value = arguments[0];
            this.init(value);
            return this;
        }
    }
    multiply() {
        if (arguments[0] instanceof DD) {
            const y = arguments[0];
            if (y.isNaN()) return DD.createNaN();
            return DD.copy(this).selfMultiply(y);
        } else if (typeof arguments[0] === 'number') {
            const y = arguments[0];
            if ((0, _doubleJsDefault.default).isNaN(y)) return DD.createNaN();
            return DD.copy(this).selfMultiply(y, 0.0);
        }
    }
    isNaN() {
        return (0, _doubleJsDefault.default).isNaN(this._hi);
    }
    reciprocal() {
        let hc = null, tc = null, hy = null, ty = null, C = null, c = null, U = null, u = null;
        C = 1.0 / this._hi;
        c = DD.SPLIT * C;
        hc = c - C;
        u = DD.SPLIT * this._hi;
        hc = c - hc;
        tc = C - hc;
        hy = u - this._hi;
        U = C * this._hi;
        hy = u - hy;
        ty = this._hi - hy;
        u = hc * hy - U + hc * ty + tc * hy + tc * ty;
        c = (1.0 - U - u - C * this._lo) / this._hi;
        const zhi = C + c;
        const zlo = C - zhi + c;
        return new DD(zhi, zlo);
    }
    doubleValue() {
        return this._hi + this._lo;
    }
    subtract() {
        if (arguments[0] instanceof DD) {
            const y = arguments[0];
            return this.add(y.negate());
        } else if (typeof arguments[0] === 'number') {
            const y = arguments[0];
            return this.add(-y);
        }
    }
    equals() {
        if (arguments.length === 1 && arguments[0] instanceof DD) {
            const y = arguments[0];
            return this._hi === y._hi && this._lo === y._lo;
        }
    }
    isZero() {
        return this._hi === 0.0 && this._lo === 0.0;
    }
    selfSubtract() {
        if (arguments[0] instanceof DD) {
            const y = arguments[0];
            if (this.isNaN()) return this;
            return this.selfAdd(-y._hi, -y._lo);
        } else if (typeof arguments[0] === 'number') {
            const y = arguments[0];
            if (this.isNaN()) return this;
            return this.selfAdd(-y, 0.0);
        }
    }
    min(x) {
        if (this.le(x)) return this;
        else return x;
    }
    selfDivide() {
        if (arguments.length === 1) {
            if (arguments[0] instanceof DD) {
                const y = arguments[0];
                return this.selfDivide(y._hi, y._lo);
            } else if (typeof arguments[0] === 'number') {
                const y = arguments[0];
                return this.selfDivide(y, 0.0);
            }
        } else if (arguments.length === 2) {
            const yhi = arguments[0], ylo = arguments[1];
            let hc = null, tc = null, hy = null, ty = null, C = null, c = null, U = null, u = null;
            C = this._hi / yhi;
            c = DD.SPLIT * C;
            hc = c - C;
            u = DD.SPLIT * yhi;
            hc = c - hc;
            tc = C - hc;
            hy = u - yhi;
            U = C * yhi;
            hy = u - hy;
            ty = yhi - hy;
            u = hc * hy - U + hc * ty + tc * hy + tc * ty;
            c = (this._hi - U - u + this._lo - C * ylo) / yhi;
            u = C + c;
            this._hi = u;
            this._lo = C - u + c;
            return this;
        }
    }
    dump() {
        return 'DD<' + this._hi + ', ' + this._lo + '>';
    }
    divide() {
        if (arguments[0] instanceof DD) {
            const y = arguments[0];
            let hc = null, tc = null, hy = null, ty = null, C = null, c = null, U = null, u = null;
            C = this._hi / y._hi;
            c = DD.SPLIT * C;
            hc = c - C;
            u = DD.SPLIT * y._hi;
            hc = c - hc;
            tc = C - hc;
            hy = u - y._hi;
            U = C * y._hi;
            hy = u - hy;
            ty = y._hi - hy;
            u = hc * hy - U + hc * ty + tc * hy + tc * ty;
            c = (this._hi - U - u + this._lo - C * y._lo) / y._hi;
            u = C + c;
            const zhi = u;
            const zlo = C - u + c;
            return new DD(zhi, zlo);
        } else if (typeof arguments[0] === 'number') {
            const y = arguments[0];
            if ((0, _doubleJsDefault.default).isNaN(y)) return DD.createNaN();
            return DD.copy(this).selfDivide(y, 0.0);
        }
    }
    ge(y) {
        return this._hi > y._hi || this._hi === y._hi && this._lo >= y._lo;
    }
    pow(exp) {
        if (exp === 0.0) return DD.valueOf(1.0);
        let r = new DD(this);
        let s = DD.valueOf(1.0);
        let n = Math.abs(exp);
        if (n > 1) while(n > 0){
            if (n % 2 === 1) s.selfMultiply(r);
            n /= 2;
            if (n > 0) r = r.sqr();
        }
        else s = r;
        if (exp < 0) return s.reciprocal();
        return s;
    }
    ceil() {
        if (this.isNaN()) return DD.NaN;
        const fhi = Math.ceil(this._hi);
        let flo = 0.0;
        if (fhi === this._hi) flo = Math.ceil(this._lo);
        return new DD(fhi, flo);
    }
    compareTo(o) {
        const other = o;
        if (this._hi < other._hi) return -1;
        if (this._hi > other._hi) return 1;
        if (this._lo < other._lo) return -1;
        if (this._lo > other._lo) return 1;
        return 0;
    }
    rint() {
        if (this.isNaN()) return this;
        const plus5 = this.add(0.5);
        return plus5.floor();
    }
    max(x) {
        if (this.ge(x)) return this;
        else return x;
    }
    sqrt() {
        if (this.isZero()) return DD.valueOf(0.0);
        if (this.isNegative()) return DD.NaN;
        const x = 1.0 / Math.sqrt(this._hi);
        const ax = this._hi * x;
        const axdd = DD.valueOf(ax);
        const diffSq = this.subtract(axdd.sqr());
        const d2 = diffSq._hi * (x * 0.5);
        return axdd.add(d2);
    }
    selfAdd() {
        if (arguments.length === 1) {
            if (arguments[0] instanceof DD) {
                const y = arguments[0];
                return this.selfAdd(y._hi, y._lo);
            } else if (typeof arguments[0] === 'number') {
                const y = arguments[0];
                let H = null, h = null, S = null, s = null, e = null, f = null;
                S = this._hi + y;
                e = S - this._hi;
                s = S - e;
                s = y - e + (this._hi - s);
                f = s + this._lo;
                H = S + f;
                h = f + (S - H);
                this._hi = H + h;
                this._lo = h + (H - this._hi);
                return this;
            }
        } else if (arguments.length === 2) {
            const yhi = arguments[0], ylo = arguments[1];
            let H = null, h = null, T = null, t = null, S = null, s = null, e = null, f = null;
            S = this._hi + yhi;
            T = this._lo + ylo;
            e = S - this._hi;
            f = T - this._lo;
            s = S - e;
            t = T - f;
            s = yhi - e + (this._hi - s);
            t = ylo - f + (this._lo - t);
            e = s + T;
            H = S + e;
            h = e + (S - H);
            e = t + h;
            const zhi = H + e;
            const zlo = e + (H - zhi);
            this._hi = zhi;
            this._lo = zlo;
            return this;
        }
    }
    selfMultiply() {
        if (arguments.length === 1) {
            if (arguments[0] instanceof DD) {
                const y = arguments[0];
                return this.selfMultiply(y._hi, y._lo);
            } else if (typeof arguments[0] === 'number') {
                const y = arguments[0];
                return this.selfMultiply(y, 0.0);
            }
        } else if (arguments.length === 2) {
            const yhi = arguments[0], ylo = arguments[1];
            let hx = null, tx = null, hy = null, ty = null, C = null, c = null;
            C = DD.SPLIT * this._hi;
            hx = C - this._hi;
            c = DD.SPLIT * yhi;
            hx = C - hx;
            tx = this._hi - hx;
            hy = c - yhi;
            C = this._hi * yhi;
            hy = c - hy;
            ty = yhi - hy;
            c = hx * hy - C + hx * ty + tx * hy + tx * ty + (this._hi * ylo + this._lo * yhi);
            const zhi = C + c;
            hx = C - zhi;
            const zlo = c + hx;
            this._hi = zhi;
            this._lo = zlo;
            return this;
        }
    }
    selfSqr() {
        return this.selfMultiply(this);
    }
    floor() {
        if (this.isNaN()) return DD.NaN;
        const fhi = Math.floor(this._hi);
        let flo = 0.0;
        if (fhi === this._hi) flo = Math.floor(this._lo);
        return new DD(fhi, flo);
    }
    negate() {
        if (this.isNaN()) return this;
        return new DD(-this._hi, -this._lo);
    }
    clone() {
        try {
            return null;
        } catch (ex) {
            if (ex instanceof CloneNotSupportedException) return null;
            else throw ex;
        } finally{}
    }
    intValue() {
        return Math.trunc(this._hi);
    }
    toString() {
        const mag = DD.magnitude(this._hi);
        if (mag >= -3 && mag <= 20) return this.toStandardNotation();
        return this.toSciNotation();
    }
    toStandardNotation() {
        const specialStr = this.getSpecialNumberString();
        if (specialStr !== null) return specialStr;
        const magnitude = new Array(1).fill(null);
        const sigDigits = this.extractSignificantDigits(true, magnitude);
        const decimalPointPos = magnitude[0] + 1;
        let num = sigDigits;
        if (sigDigits.charAt(0) === '.') num = '0' + sigDigits;
        else if (decimalPointPos < 0) num = '0.' + DD.stringOfChar('0', -decimalPointPos) + sigDigits;
        else if (sigDigits.indexOf('.') === -1) {
            const numZeroes = decimalPointPos - sigDigits.length;
            const zeroes = DD.stringOfChar('0', numZeroes);
            num = sigDigits + zeroes + '.0';
        }
        if (this.isNegative()) return '-' + num;
        return num;
    }
    toSciNotation() {
        if (this.isZero()) return DD.SCI_NOT_ZERO;
        const specialStr = this.getSpecialNumberString();
        if (specialStr !== null) return specialStr;
        const magnitude = new Array(1).fill(null);
        const digits = this.extractSignificantDigits(false, magnitude);
        const expStr = DD.SCI_NOT_EXPONENT_CHAR + magnitude[0];
        if (digits.charAt(0) === '0') throw new (0, _illegalStateExceptionJsDefault.default)('Found leading zero: ' + digits);
        let trailingDigits = '';
        if (digits.length > 1) trailingDigits = digits.substring(1);
        const digitsWithDecimal = digits.charAt(0) + '.' + trailingDigits;
        if (this.isNegative()) return '-' + digitsWithDecimal + expStr;
        return digitsWithDecimal + expStr;
    }
    abs() {
        if (this.isNaN()) return DD.NaN;
        if (this.isNegative()) return this.negate();
        return new DD(this);
    }
    isPositive() {
        return this._hi > 0.0 || this._hi === 0.0 && this._lo > 0.0;
    }
    lt(y) {
        return this._hi < y._hi || this._hi === y._hi && this._lo < y._lo;
    }
    add() {
        if (arguments[0] instanceof DD) {
            const y = arguments[0];
            return DD.copy(this).selfAdd(y);
        } else if (typeof arguments[0] === 'number') {
            const y = arguments[0];
            return DD.copy(this).selfAdd(y);
        }
    }
    init() {
        if (arguments.length === 1) {
            if (typeof arguments[0] === 'number') {
                const x = arguments[0];
                this._hi = x;
                this._lo = 0.0;
            } else if (arguments[0] instanceof DD) {
                const dd = arguments[0];
                this._hi = dd._hi;
                this._lo = dd._lo;
            }
        } else if (arguments.length === 2) {
            const hi = arguments[0], lo = arguments[1];
            this._hi = hi;
            this._lo = lo;
        }
    }
    gt(y) {
        return this._hi > y._hi || this._hi === y._hi && this._lo > y._lo;
    }
    isNegative() {
        return this._hi < 0.0 || this._hi === 0.0 && this._lo < 0.0;
    }
    trunc() {
        if (this.isNaN()) return DD.NaN;
        if (this.isPositive()) return this.floor();
        else return this.ceil();
    }
    signum() {
        if (this._hi > 0) return 1;
        if (this._hi < 0) return -1;
        if (this._lo > 0) return 1;
        if (this._lo < 0) return -1;
        return 0;
    }
    get interfaces_() {
        return [
            (0, _serializableJsDefault.default),
            (0, _comparableJsDefault.default),
            (0, _cloneableJsDefault.default)
        ];
    }
}
exports.default = DD;
DD.PI = new DD(3.141592653589793116e+00, 1.224646799147353207e-16);
DD.TWO_PI = new DD(6.283185307179586232e+00, 2.449293598294706414e-16);
DD.PI_2 = new DD(1.570796326794896558e+00, 6.123233995736766036e-17);
DD.E = new DD(2.718281828459045091e+00, 1.445646891729250158e-16);
DD.NaN = new DD((0, _doubleJsDefault.default).NaN, (0, _doubleJsDefault.default).NaN);
DD.EPS = 1.23259516440783e-32;
DD.SPLIT = 134217729.0;
DD.MAX_PRINT_DIGITS = 32;
DD.TEN = DD.valueOf(10.0);
DD.ONE = DD.valueOf(1.0);
DD.SCI_NOT_EXPONENT_CHAR = 'E';
DD.SCI_NOT_ZERO = '0.0E0';

},{"../../../../java/lang/StringBuffer.js":"lJQsM","../../../../java/lang/Double.js":"jCc26","../../../../java/lang/Integer.js":"9MkbL","../../../../java/lang/Character.js":"kHj8q","../../../../java/lang/Comparable.js":"6Adw4","../../../../java/lang/Cloneable.js":"bkkIE","../../../../java/io/Serializable.js":"4emqV","../../../../java/lang/IllegalStateException.js":"4MAFg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJQsM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class StringBuffer {
    constructor(str){
        this.str = str;
    }
    append(e) {
        this.str += e;
    }
    setCharAt(i, c) {
        this.str = this.str.substr(0, i) + c + this.str.substr(i + 1);
    }
    toString() {
        return this.str;
    }
}
exports.default = StringBuffer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ikww2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _geometryJs = require("./Geometry.js");
var _geometryJsDefault = parcelHelpers.interopDefault(_geometryJs);
var _geometryCollectionJs = require("./GeometryCollection.js");
var _geometryCollectionJsDefault = parcelHelpers.interopDefault(_geometryCollectionJs);
var _dimensionJs = require("./Dimension.js");
var _dimensionJsDefault = parcelHelpers.interopDefault(_dimensionJs);
var _puntalJs = require("./Puntal.js");
var _puntalJsDefault = parcelHelpers.interopDefault(_puntalJs);
class MultiPoint extends (0, _geometryCollectionJsDefault.default) {
    constructor(){
        super();
        MultiPoint.constructor_.apply(this, arguments);
    }
    static constructor_() {
        const points = arguments[0], factory = arguments[1];
        (0, _geometryCollectionJsDefault.default).constructor_.call(this, points, factory);
    }
    equalsExact() {
        if (arguments.length === 2 && typeof arguments[1] === 'number' && arguments[0] instanceof (0, _geometryJsDefault.default)) {
            const other = arguments[0], tolerance = arguments[1];
            if (!this.isEquivalentClass(other)) return false;
            return super.equalsExact.call(this, other, tolerance);
        } else return super.equalsExact.apply(this, arguments);
    }
    getTypeCode() {
        return (0, _geometryJsDefault.default).TYPECODE_MULTIPOINT;
    }
    getDimension() {
        return 0;
    }
    getBoundary() {
        return this.getFactory().createGeometryCollection();
    }
    getGeometryType() {
        return (0, _geometryJsDefault.default).TYPENAME_MULTIPOINT;
    }
    copyInternal() {
        const points = new Array(this._geometries.length).fill(null);
        for(let i = 0; i < points.length; i++)points[i] = this._geometries[i].copy();
        return new MultiPoint(points, this._factory);
    }
    isValid() {
        return true;
    }
    getCoordinate() {
        if (arguments.length === 1 && Number.isInteger(arguments[0])) {
            const n = arguments[0];
            return this._geometries[n].getCoordinate();
        } else return super.getCoordinate.apply(this, arguments);
    }
    getBoundaryDimension() {
        return (0, _dimensionJsDefault.default).FALSE;
    }
    get interfaces_() {
        return [
            (0, _puntalJsDefault.default)
        ];
    }
}
exports.default = MultiPoint;

},{"./Geometry.js":"d5V2e","./GeometryCollection.js":"9xeCT","./Dimension.js":"966Ye","./Puntal.js":"2RT7X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["5lfr7"], null, "parcelRequired761", {})

//# sourceMappingURL=draw.1ae0b739.js.map
