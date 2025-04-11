import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, getQuery as getQuery$1, appendHeader, getRouterParam, readBody, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, getResponseStatusText } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/vue-bundle-renderer@2.1.1/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/unhead@2.0.5/node_modules/unhead/dist/server.mjs';
import { isVNode, toValue, isRef } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/vue@3.5.13_typescript@5.8.3/node_modules/vue/index.mjs';
import { walkResolver } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/unhead@2.0.5/node_modules/unhead/dist/utils.mjs';
import { renderToString } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/vue@3.5.13_typescript@5.8.3/node_modules/vue/server-renderer/index.mjs';
import { createHooks } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/node-mock-http@1.0.0/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.1_better-sqlite3@11.9.1__ioredis@5.6.0/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.1_better-sqlite3@11.9.1__ioredis@5.6.0/node_modules/unstorage/drivers/fs.mjs';
import { digest, hash as hash$1 } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { snakeCase, pascalCase } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/youch-core@0.3.2/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/youch@4.1.0-beta.7/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/source-map@0.7.4/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/errx@0.1.0/node_modules/errx/dist/index.js';
import { basename, isAbsolute } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import { getIcons } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/@iconify+utils@2.3.0/node_modules/@iconify/utils/lib/index.mjs';
import { collections } from 'file:///Users/rgallegos/proyectos/blog-raul/.nuxt/nuxt-icon-server-bundle.mjs';
import { appConfigSchema, collections as collections$1, gitInfo } from 'file:///Users/rgallegos/proyectos/blog-raul/.nuxt/content/preview.mjs';
import localAdapter from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/db0@0.3.1_better-sqlite3@11.9.1/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import { fileURLToPath } from 'node:url';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Users/rgallegos/proyectos/blog-raul/node_modules/.pnpm/ipx@2.1.0_db0@0.3.1_better-sqlite3@11.9.1__ioredis@5.6.0/node_modules/ipx/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/rgallegos/proyectos/blog-raul/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/rgallegos/proyectos/blog-raul","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/rgallegos/proyectos/blog-raul/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/rgallegos/proyectos/blog-raul/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/rgallegos/proyectos/blog-raul/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/rgallegos/proyectos/blog-raul/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {},
  "ui": {
    "icons": {
      "caution": "i-lucide-circle-alert",
      "copy": "i-lucide-copy",
      "copyCheck": "i-lucide-copy-check",
      "dark": "i-lucide-moon",
      "error": "i-lucide-circle-x",
      "external": "i-lucide-arrow-up-right",
      "eye": "i-lucide-eye",
      "eyeOff": "i-lucide-eye-off",
      "file": "i-lucide-file-text",
      "folder": "i-lucide-folder",
      "folderOpen": "i-lucide-folder-open",
      "hash": "i-lucide-hash",
      "info": "i-lucide-info",
      "light": "i-lucide-sun",
      "menu": "i-lucide-menu",
      "panelClose": "i-lucide-panel-left-close",
      "panelOpen": "i-lucide-panel-left-open",
      "success": "i-lucide-circle-check",
      "system": "i-lucide-monitor",
      "tip": "i-lucide-lightbulb",
      "warning": "i-lucide-triangle-alert",
      "arrowLeft": "i-lucide-arrow-left",
      "arrowRight": "i-lucide-arrow-right",
      "check": "i-lucide-check",
      "chevronDoubleLeft": "i-lucide-chevrons-left",
      "chevronDoubleRight": "i-lucide-chevrons-right",
      "chevronDown": "i-lucide-chevron-down",
      "chevronLeft": "i-lucide-chevron-left",
      "chevronRight": "i-lucide-chevron-right",
      "chevronUp": "i-lucide-chevron-up",
      "close": "i-lucide-x",
      "ellipsis": "i-lucide-ellipsis",
      "loading": "i-lucide-refresh-cw",
      "minus": "i-lucide-minus",
      "plus": "i-lucide-plus",
      "search": "i-lucide-search"
    },
    "colors": {
      "primary": "green",
      "secondary": "blue",
      "success": "green",
      "info": "blue",
      "warning": "yellow",
      "error": "red",
      "neutral": "slate"
    }
  },
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "cssLayer": "components",
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  }
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        },
        "cache": {
          "maxAge": 31536000
        }
      },
      "/__nuxt_content/content/sql_dump": {
        "prerender": true
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "content": {
      "wsUrl": "ws://localhost:4001/"
    },
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "accordion": "ProseAccordion",
          "accordion-item": "ProseAccordionItem",
          "badge": "ProseBadge",
          "callout": "ProseCallout",
          "card": "ProseCard",
          "card-group": "ProseCardGroup",
          "caution": "ProseCaution",
          "code-collapse": "ProseCodeCollapse",
          "code-group": "ProseCodeGroup",
          "code-icon": "ProseCodeIcon",
          "code-preview": "ProseCodePreview",
          "code-tree": "ProseCodeTree",
          "collapsible": "ProseCollapsible",
          "field": "ProseField",
          "field-group": "ProseFieldGroup",
          "icon": "ProseIcon",
          "kbd": "ProseKbd",
          "note": "ProseNote",
          "steps": "ProseSteps",
          "tabs": "ProseTabs",
          "tabs-item": "ProseTabsItem",
          "tip": "ProseTip",
          "warning": "ProseWarning"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "preview": {
      "api": "https://api.nuxt.studio",
      "iframeMessagingAllowedOrigins": ""
    }
  },
  "icon": {
    "serverKnownCssClasses": []
  },
  "content": {
    "databaseVersion": "v3.3.0",
    "version": "3.4.0",
    "database": {
      "type": "sqlite",
      "filename": "./contents.sqlite"
    },
    "localDatabase": {
      "type": "sqlite",
      "filename": "/Users/rgallegos/proyectos/blog-raul/.data/content/contents.sqlite"
    },
    "integrityCheck": true
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Users/rgallegos/proyectos/blog-raul/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = url.pathname + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script$1 = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _uSZ98UCsSRJz2x1uwxEIbkqptT2CMwlznTYjPN2wTc = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script$1}<\/script>`);
  });
});

const rootDir = "/Users/rgallegos/proyectos/blog-raul";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt","class":"isolate"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _4ZAswCeMkZGUxDQnS2xXBFIJb6dbPIW9ox5l4vGY3zk = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _vlkWbSZ6au1Eh7IK7MUuT2hol2cDbO7xQ577Psyawo = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _uSZ98UCsSRJz2x1uwxEIbkqptT2CMwlznTYjPN2wTc,
_4ZAswCeMkZGUxDQnS2xXBFIJb6dbPIW9ox5l4vGY3zk,
_vlkWbSZ6au1Eh7IK7MUuT2hol2cDbO7xQ577Psyawo
];

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const checksums = {
  "content": "v3.3.0--p5tYysU_yP_Ah1yTqcyvFIRADTML632X_WEyZEZEnBM"
};
const checksumsStructure = {
  "content": "bgIYhpjRuV8zbHJE_CfelwKpJ_Td6YuGJwixiek8lmI"
};
const tables = {
  "content": "_content_content",
  "info": "_content_info"
};
const contentManifest = {
  "content": {
    "type": "page",
    "fields": {
      "id": "string",
      "stem": "string",
      "extension": "string",
      "meta": "json",
      "path": "string",
      "title": "string",
      "description": "string",
      "seo": "json",
      "body": "json",
      "navigation": "json"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
};

async function fetchDatabase(event, collection) {
  return await $fetch(`/__nuxt_content/${collection}/sql_dump`, {
    context: event ? { cloudflare: event.context.cloudflare } : {},
    responseType: "text",
    headers: { "content-type": "text/plain" },
    query: { v: checksums[String(collection)], t: Date.now()  }
  });
}

const warnOnceSet = /* @__PURE__ */ new Set();
const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _Tn6xkJ = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola$1.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  } else {
    if (collectionName && !warnOnceSet.has(collectionName) && apiEndPoint === DEFAULT_ENDPOINT) {
      consola$1.warn([
        `[Icon] Collection \`${collectionName}\` is not found locally`,
        `We suggest to install it via \`npm i -D @iconify-json/${collectionName}\` to provide the best end-user experience.`
      ].join("\n"));
      warnOnceSet.add(collectionName);
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola$1.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola$1.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery$1(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const components = {
  "ProseA": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/A.vue",
    "pascalName": "ProseA",
    "kebabName": "prose-a",
    "chunkName": "components/prose-a",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | null | undefined",
            "schema": {
              "0": "undefined",
              "1": "null",
              "2": "\"_blank\"",
              "3": "\"_parent\"",
              "4": "\"_self\"",
              "5": "\"_top\""
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "href",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "target",
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | null | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | null | undefined",
            "schema": {
              "0": "undefined",
              "1": "null",
              "2": "\"_blank\"",
              "3": "\"_parent\"",
              "4": "\"_self\"",
              "5": "\"_top\""
            }
          }
        }
      ]
    }
  },
  "ProseAccordion": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Accordion.vue",
    "pascalName": "ProseAccordion",
    "kebabName": "prose-accordion",
    "chunkName": "components/prose-accordion",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "\"multiple\" | \"single\" | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"multiple\" | \"single\" | undefined",
            "schema": {
              "0": "undefined",
              "1": "\"multiple\"",
              "2": "\"single\""
            }
          },
          "default": "\"multiple\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{} | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "{} | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "{}",
                "schema": {}
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & AccordionSlots",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & AccordionSlots",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(props?: {} | undefined) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props?: {} | undefined): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "type",
          "type": "\"multiple\" | \"single\"",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "\"multiple\" | \"single\"",
            "schema": {
              "0": "\"multiple\"",
              "1": "\"single\""
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        }
      ]
    }
  },
  "ProseAccordionItem": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/AccordionItem.vue",
    "pascalName": "ProseAccordionItem",
    "kebabName": "prose-accordion-item",
    "chunkName": "components/prose-accordion-item",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "label",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ mdcUnwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ mdcUnwrap: string; }",
            "schema": {
              "mdcUnwrap": {
                "name": "mdcUnwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: { mdcUnwrap: string; }): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "label",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        }
      ]
    }
  },
  "ProseBadge": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Badge.vue",
    "pascalName": "ProseBadge",
    "kebabName": "prose-badge",
    "chunkName": "components/prose-badge",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{ mdcUnwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ mdcUnwrap: string; }",
            "schema": {
              "mdcUnwrap": {
                "name": "mdcUnwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: { mdcUnwrap: string; }): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        }
      ]
    }
  },
  "ProseBlockquote": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Blockquote.vue",
    "pascalName": "ProseBlockquote",
    "kebabName": "prose-blockquote",
    "chunkName": "components/prose-blockquote",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseCallout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Callout.vue",
    "pascalName": "ProseCallout",
    "kebabName": "prose-callout",
    "chunkName": "components/prose-callout",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "to",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": {
                "kind": "object",
                "type": "RouteLocationAsRelativeGeneric",
                "schema": {
                  "name": {
                    "name": "name",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteRecordNameGeneric",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteRecordNameGeneric",
                      "schema": {
                        "0": "undefined",
                        "1": "string",
                        "2": "symbol"
                      }
                    }
                  },
                  "params": {
                    "name": "params",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteParamsRawGeneric | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteParamsRawGeneric | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "RouteParamsRawGeneric"
                      }
                    }
                  },
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "A relative path to the current location. This property should be removed",
                    "tags": [],
                    "required": false,
                    "type": "undefined",
                    "schema": "undefined"
                  },
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "LocationQueryRaw | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "LocationQueryRaw"
                      }
                    }
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "string | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "string"
                      }
                    }
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "false",
                        "2": "true"
                      }
                    }
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "HistoryState | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "object",
                          "type": "HistoryState",
                          "schema": {}
                        }
                      }
                    }
                  }
                }
              },
              "3": {
                "kind": "object",
                "type": "RouteLocationAsPathGeneric",
                "schema": {
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "Percentage encoded pathname section of the URL.",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": "LocationQueryRaw | undefined"
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": "string | undefined"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": "HistoryState | undefined"
                  }
                }
              }
            }
          }
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
            "schema": {
              "0": "undefined",
              "1": "null",
              "2": "\"_blank\"",
              "3": "\"_parent\"",
              "4": "\"_self\"",
              "5": "\"_top\"",
              "6": {
                "kind": "object",
                "type": "string & {}",
                "schema": {}
              }
            }
          }
        },
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "color",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'neutral'"
            }
          ],
          "required": false,
          "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
            "schema": {
              "0": "undefined",
              "1": "\"primary\"",
              "2": "\"secondary\"",
              "3": "\"success\"",
              "4": "\"info\"",
              "5": "\"warning\"",
              "6": "\"error\"",
              "7": "\"neutral\""
            }
          }
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "PartialString<{ base: string[]; icon: string[]; externalIcon: string[]; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "PartialString<{ base: string[]; icon: string[]; externalIcon: string[]; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "PartialString<{ base: string[]; icon: string[]; externalIcon: string[]; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{} | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "{} | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "{}",
                "schema": {}
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & CalloutSlots",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & CalloutSlots",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(props?: {} | undefined) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props?: {} | undefined): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "target",
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
            "schema": {
              "0": "undefined",
              "1": "null",
              "2": "\"_blank\"",
              "3": "\"_parent\"",
              "4": "\"_self\"",
              "5": "\"_top\"",
              "6": {
                "kind": "object",
                "type": "string & {}",
                "schema": {}
              }
            }
          }
        },
        {
          "name": "to",
          "type": "string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": {
                "kind": "object",
                "type": "RouteLocationAsRelativeGeneric",
                "schema": {
                  "name": {
                    "name": "name",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteRecordNameGeneric",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteRecordNameGeneric",
                      "schema": {
                        "0": "undefined",
                        "1": "string",
                        "2": "symbol"
                      }
                    }
                  },
                  "params": {
                    "name": "params",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteParamsRawGeneric | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteParamsRawGeneric | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "RouteParamsRawGeneric"
                      }
                    }
                  },
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "A relative path to the current location. This property should be removed",
                    "tags": [],
                    "required": false,
                    "type": "undefined",
                    "schema": "undefined"
                  },
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "LocationQueryRaw | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "LocationQueryRaw"
                      }
                    }
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "string | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "string"
                      }
                    }
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "false",
                        "2": "true"
                      }
                    }
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "HistoryState | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "object",
                          "type": "HistoryState",
                          "schema": {}
                        }
                      }
                    }
                  }
                }
              },
              "3": {
                "kind": "object",
                "type": "RouteLocationAsPathGeneric",
                "schema": {
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "Percentage encoded pathname section of the URL.",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": "LocationQueryRaw | undefined"
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": "string | undefined"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": "HistoryState | undefined"
                  }
                }
              }
            }
          }
        },
        {
          "name": "icon",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "color",
          "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
            "schema": {
              "0": "undefined",
              "1": "\"primary\"",
              "2": "\"secondary\"",
              "3": "\"success\"",
              "4": "\"info\"",
              "5": "\"warning\"",
              "6": "\"error\"",
              "7": "\"neutral\""
            }
          }
        },
        {
          "name": "ui",
          "type": "PartialString<{ base: string[]; icon: string[]; externalIcon: string[]; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "PartialString<{ base: string[]; icon: string[]; externalIcon: string[]; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "PartialString<{ base: string[]; icon: string[]; externalIcon: string[]; }>"
            }
          }
        }
      ]
    }
  },
  "ProseCard": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Card.vue",
    "pascalName": "ProseCard",
    "kebabName": "prose-card",
    "chunkName": "components/prose-card",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "to",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": {
                "kind": "object",
                "type": "RouteLocationAsRelativeGeneric",
                "schema": {
                  "name": {
                    "name": "name",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteRecordNameGeneric",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteRecordNameGeneric",
                      "schema": {
                        "0": "undefined",
                        "1": "string",
                        "2": "symbol"
                      }
                    }
                  },
                  "params": {
                    "name": "params",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteParamsRawGeneric | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteParamsRawGeneric | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "RouteParamsRawGeneric"
                      }
                    }
                  },
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "A relative path to the current location. This property should be removed",
                    "tags": [],
                    "required": false,
                    "type": "undefined",
                    "schema": "undefined"
                  },
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "LocationQueryRaw | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "LocationQueryRaw"
                      }
                    }
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "string | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "string"
                      }
                    }
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "false",
                        "2": "true"
                      }
                    }
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "HistoryState | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "object",
                          "type": "HistoryState",
                          "schema": {}
                        }
                      }
                    }
                  }
                }
              },
              "3": {
                "kind": "object",
                "type": "RouteLocationAsPathGeneric",
                "schema": {
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "Percentage encoded pathname section of the URL.",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": "LocationQueryRaw | undefined"
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": "string | undefined"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": "HistoryState | undefined"
                  }
                }
              }
            }
          }
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
            "schema": {
              "0": "undefined",
              "1": "null",
              "2": "\"_blank\"",
              "3": "\"_parent\"",
              "4": "\"_self\"",
              "5": "\"_top\"",
              "6": {
                "kind": "object",
                "type": "string & {}",
                "schema": {}
              }
            }
          }
        },
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "color",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'primary'"
            }
          ],
          "required": false,
          "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
            "schema": {
              "0": "undefined",
              "1": "\"primary\"",
              "2": "\"secondary\"",
              "3": "\"success\"",
              "4": "\"info\"",
              "5": "\"warning\"",
              "6": "\"error\"",
              "7": "\"neutral\""
            }
          }
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "PartialString<{ base: string[]; icon: string; title: string; description: string; externalIcon: string[]; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "PartialString<{ base: string[]; icon: string; title: string; description: string; externalIcon: string[]; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "PartialString<{ base: string[]; icon: string; title: string; description: string; externalIcon: string[]; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{} | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "{} | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "{}",
                "schema": {}
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & CardSlots",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & CardSlots",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(props?: {} | undefined) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props?: {} | undefined): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "target",
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
            "schema": {
              "0": "undefined",
              "1": "null",
              "2": "\"_blank\"",
              "3": "\"_parent\"",
              "4": "\"_self\"",
              "5": "\"_top\"",
              "6": {
                "kind": "object",
                "type": "string & {}",
                "schema": {}
              }
            }
          }
        },
        {
          "name": "to",
          "type": "string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": {
                "kind": "object",
                "type": "RouteLocationAsRelativeGeneric",
                "schema": {
                  "name": {
                    "name": "name",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteRecordNameGeneric",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteRecordNameGeneric",
                      "schema": {
                        "0": "undefined",
                        "1": "string",
                        "2": "symbol"
                      }
                    }
                  },
                  "params": {
                    "name": "params",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteParamsRawGeneric | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteParamsRawGeneric | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "RouteParamsRawGeneric"
                      }
                    }
                  },
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "A relative path to the current location. This property should be removed",
                    "tags": [],
                    "required": false,
                    "type": "undefined",
                    "schema": "undefined"
                  },
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "LocationQueryRaw | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "LocationQueryRaw"
                      }
                    }
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "string | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "string"
                      }
                    }
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "false",
                        "2": "true"
                      }
                    }
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "HistoryState | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "object",
                          "type": "HistoryState",
                          "schema": {}
                        }
                      }
                    }
                  }
                }
              },
              "3": {
                "kind": "object",
                "type": "RouteLocationAsPathGeneric",
                "schema": {
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "Percentage encoded pathname section of the URL.",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": "LocationQueryRaw | undefined"
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": "string | undefined"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": "HistoryState | undefined"
                  }
                }
              }
            }
          }
        },
        {
          "name": "icon",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "title",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "color",
          "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
            "schema": {
              "0": "undefined",
              "1": "\"primary\"",
              "2": "\"secondary\"",
              "3": "\"success\"",
              "4": "\"info\"",
              "5": "\"warning\"",
              "6": "\"error\"",
              "7": "\"neutral\""
            }
          }
        },
        {
          "name": "ui",
          "type": "PartialString<{ base: string[]; icon: string; title: string; description: string; externalIcon: string[]; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "PartialString<{ base: string[]; icon: string; title: string; description: string; externalIcon: string[]; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "PartialString<{ base: string[]; icon: string; title: string; description: string; externalIcon: string[]; }>"
            }
          }
        }
      ]
    }
  },
  "ProseCardGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CardGroup.vue",
    "pascalName": "ProseCardGroup",
    "kebabName": "prose-card-group",
    "chunkName": "components/prose-card-group",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseCode": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Code.vue",
    "pascalName": "ProseCode",
    "kebabName": "prose-code",
    "chunkName": "components/prose-code",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "lang",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "color",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'neutral'"
            }
          ],
          "required": false,
          "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
            "schema": {
              "0": "undefined",
              "1": "\"primary\"",
              "2": "\"secondary\"",
              "3": "\"success\"",
              "4": "\"info\"",
              "5": "\"warning\"",
              "6": "\"error\"",
              "7": "\"neutral\""
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "color",
          "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
            "schema": {
              "0": "undefined",
              "1": "\"primary\"",
              "2": "\"secondary\"",
              "3": "\"success\"",
              "4": "\"info\"",
              "5": "\"warning\"",
              "6": "\"error\"",
              "7": "\"neutral\""
            }
          }
        },
        {
          "name": "lang",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseCodeCollapse": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeCollapse.vue",
    "pascalName": "ProseCodeCollapse",
    "kebabName": "prose-code-collapse",
    "chunkName": "components/prose-code-collapse",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "The icon displayed to toggle the code.",
          "tags": [
            {
              "name": "defaultValue",
              "text": "appConfig.ui.icons.chevronDown"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "name",
          "global": false,
          "description": "The name displayed in the trigger label.",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'code'"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"code\""
        },
        {
          "name": "openText",
          "global": false,
          "description": "The text displayed when the code is collapsed.",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'Expand'"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"Expand\""
        },
        {
          "name": "closeText",
          "global": false,
          "description": "The text displayed when the code is expanded.",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'Collapse'"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"Collapse\""
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "PartialString<{ root: string; footer: string; trigger: string; triggerIcon: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "PartialString<{ root: string; footer: string; trigger: string; triggerIcon: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "PartialString<{ root: string; footer: string; trigger: string; triggerIcon: string; }>"
            }
          }
        },
        {
          "name": "open",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "false",
              "2": "true"
            }
          },
          "default": "false"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [
        {
          "name": "update:open",
          "description": "",
          "tags": [],
          "type": "[value: boolean]",
          "signature": "(event: \"update:open\", value: boolean): void",
          "schema": [
            {
              "kind": "enum",
              "type": "boolean",
              "schema": [
                "false",
                "true"
              ]
            }
          ]
        }
      ],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name displayed in the trigger label.",
          "schema": "string"
        },
        {
          "name": "openText",
          "type": "string",
          "description": "The text displayed when the code is collapsed.",
          "schema": "string"
        },
        {
          "name": "closeText",
          "type": "string",
          "description": "The text displayed when the code is expanded.",
          "schema": "string"
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "icon",
          "type": "string | undefined",
          "description": "The icon displayed to toggle the code.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "ui",
          "type": "PartialString<{ root: string; footer: string; trigger: string; triggerIcon: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "PartialString<{ root: string; footer: string; trigger: string; triggerIcon: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "PartialString<{ root: string; footer: string; trigger: string; triggerIcon: string; }>"
            }
          }
        },
        {
          "name": "open",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "false",
              "2": "true"
            }
          }
        },
        {
          "name": "onUpdate:open",
          "type": "((value: boolean) => any) | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "((value: boolean) => any) | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "event",
                "type": "(value: boolean): any",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "boolean",
                    "schema": [
                      "false",
                      "true"
                    ]
                  }
                ]
              }
            }
          }
        }
      ]
    }
  },
  "ProseCodeGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeGroup.vue",
    "pascalName": "ProseCodeGroup",
    "kebabName": "prose-code-group",
    "chunkName": "components/prose-code-group",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "defaultValue",
          "global": false,
          "description": "The default tab to select.",
          "tags": [
            {
              "name": "example",
              "text": "'1'"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"0\""
        },
        {
          "name": "sync",
          "global": false,
          "description": "Sync the selected tab with a local storage key.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "PartialString<{ root: string; list: string; indicator: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "PartialString<{ root: string; list: string; indicator: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "PartialString<{ root: string; list: string; indicator: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }>"
            }
          }
        },
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{} | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "{} | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "{}",
                "schema": {}
              }
            }
          }
        }
      ],
      "events": [
        {
          "name": "update:modelValue",
          "description": "",
          "tags": [],
          "type": "[value: string | undefined]",
          "signature": "(event: \"update:modelValue\", value: string | undefined): void",
          "schema": [
            {
              "kind": "enum",
              "type": "string | undefined",
              "schema": [
                "undefined",
                "string"
              ]
            }
          ]
        }
      ],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & CodeGroupSlots",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & CodeGroupSlots",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(props?: {} | undefined) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props?: {} | undefined): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "defaultValue",
          "type": "string",
          "description": "The default tab to select.",
          "schema": "string"
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "ui",
          "type": "PartialString<{ root: string; list: string; indicator: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "PartialString<{ root: string; list: string; indicator: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "PartialString<{ root: string; list: string; indicator: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }>"
            }
          }
        },
        {
          "name": "sync",
          "type": "string | undefined",
          "description": "Sync the selected tab with a local storage key.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "modelValue",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "onUpdate:modelValue",
          "type": "((value: string | undefined) => any) | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "((value: string | undefined) => any) | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "event",
                "type": "(value: string | undefined): any",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "string | undefined",
                    "schema": [
                      "undefined",
                      "string"
                    ]
                  }
                ]
              }
            }
          }
        }
      ]
    }
  },
  "ProseCodeIcon": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeIcon.vue",
    "pascalName": "ProseCodeIcon",
    "kebabName": "prose-code-icon",
    "chunkName": "components/prose-code-icon",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "icon",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "filename",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseCodePreview": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodePreview.vue",
    "pascalName": "ProseCodePreview",
    "kebabName": "prose-code-preview",
    "chunkName": "components/prose-code-preview",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Partial<{ root: string; preview: string; code: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ root: string; preview: string; code: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ root: string; preview: string; code: string; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{} | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "{} | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "{}",
                "schema": {}
              }
            }
          }
        },
        {
          "name": "code",
          "type": "{} | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "{} | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "{}",
                "schema": {}
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & CodePreviewSlots",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & CodePreviewSlots",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(props?: {} | undefined) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props?: {} | undefined): any",
                  "schema": {}
                }
              },
              "code": {
                "name": "code",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(props?: {} | undefined) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props?: {} | undefined): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "ui",
          "type": "Partial<{ root: string; preview: string; code: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ root: string; preview: string; code: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ root: string; preview: string; code: string; }>"
            }
          }
        }
      ]
    }
  },
  "ProseCodeTree": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeTree.vue",
    "pascalName": "ProseCodeTree",
    "kebabName": "prose-code-tree",
    "chunkName": "components/prose-code-tree",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "defaultValue",
          "global": false,
          "description": "The default path to select.",
          "tags": [
            {
              "name": "example",
              "text": "'package.json'"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Partial<{ root: string; list: string; item: string; listWithChildren: string; itemWithChildren: string; link: string; linkLeadingIcon: string; linkLabel: string; linkTrailing: string; linkTrailingIcon: string; content: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ root: string; list: string; item: string; listWithChildren: string; itemWithChildren: string; link: string; linkLeadingIcon: string; linkLabel: string; linkTrailing: string; linkTrailingIcon: string; content: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ root: string; list: string; item: string; listWithChildren: string; itemWithChildren: string; link: string; linkLeadingIcon: string; linkLabel: string; linkTrailing: string; linkTrailingIcon: string; content: string; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{} | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "{} | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "{}",
                "schema": {}
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & CodeTreeSlots",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & CodeTreeSlots",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(props?: {} | undefined) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props?: {} | undefined): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "ui",
          "type": "Partial<{ root: string; list: string; item: string; listWithChildren: string; itemWithChildren: string; link: string; linkLeadingIcon: string; linkLabel: string; linkTrailing: string; linkTrailingIcon: string; content: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ root: string; list: string; item: string; listWithChildren: string; itemWithChildren: string; link: string; linkLeadingIcon: string; linkLabel: string; linkTrailing: string; linkTrailingIcon: string; content: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ root: string; list: string; item: string; listWithChildren: string; itemWithChildren: string; link: string; linkLeadingIcon: string; linkLabel: string; linkTrailing: string; linkTrailingIcon: string; content: string; }>"
            }
          }
        },
        {
          "name": "defaultValue",
          "type": "string | undefined",
          "description": "The default path to select.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseCollapsible": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Collapsible.vue",
    "pascalName": "ProseCollapsible",
    "kebabName": "prose-collapsible",
    "chunkName": "components/prose-collapsible",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "The icon displayed to toggle the collapsible.",
          "tags": [
            {
              "name": "defaultValue",
              "text": "appConfig.ui.icons.chevronDown"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "name",
          "global": false,
          "description": "The name displayed in the trigger label.",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'properties'"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"properties\""
        },
        {
          "name": "openText",
          "global": false,
          "description": "The text displayed when the collapsible is open.",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'Show'"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"Show\""
        },
        {
          "name": "closeText",
          "global": false,
          "description": "The text displayed when the collapsible is closed.",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'Hide'"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"Hide\""
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "PartialString<{ base: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "PartialString<{ base: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "PartialString<{ base: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ mdcUnwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ mdcUnwrap: string; }",
            "schema": {
              "mdcUnwrap": {
                "name": "mdcUnwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: { mdcUnwrap: string; }): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name displayed in the trigger label.",
          "schema": "string"
        },
        {
          "name": "openText",
          "type": "string",
          "description": "The text displayed when the collapsible is open.",
          "schema": "string"
        },
        {
          "name": "closeText",
          "type": "string",
          "description": "The text displayed when the collapsible is closed.",
          "schema": "string"
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "icon",
          "type": "string | undefined",
          "description": "The icon displayed to toggle the collapsible.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "ui",
          "type": "PartialString<{ base: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "PartialString<{ base: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "PartialString<{ base: string; trigger: string[]; triggerIcon: string; triggerLabel: string; }>"
            }
          }
        }
      ]
    }
  },
  "ProseEm": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Em.vue",
    "pascalName": "ProseEm",
    "kebabName": "prose-em",
    "chunkName": "components/prose-em",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseField": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Field.vue",
    "pascalName": "ProseField",
    "kebabName": "prose-field",
    "chunkName": "components/prose-field",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "name",
          "global": false,
          "description": "The name of the field.",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "type",
          "global": false,
          "description": "Expected type of the field’s value",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "as",
          "global": false,
          "description": "The element or component this component should render as.",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'div'"
            }
          ],
          "required": false,
          "type": "any",
          "schema": "any"
        },
        {
          "name": "description",
          "global": false,
          "description": "Description of the field",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "required",
          "global": false,
          "description": "Indicate whether the field is required",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "false",
              "2": "true"
            }
          }
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Partial<{ root: string; container: string; name: string; wrapper: string; required: string; type: string; description: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ root: string; container: string; name: string; wrapper: string; required: string; type: string; description: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ root: string; container: string; name: string; wrapper: string; required: string; type: string; description: string; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{} | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "{} | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "{}",
                "schema": {}
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & FieldSlots",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & FieldSlots",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(props?: {} | undefined) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props?: {} | undefined): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "type",
          "type": "string",
          "description": "Expected type of the field’s value",
          "schema": "string"
        },
        {
          "name": "ui",
          "type": "Partial<{ root: string; container: string; name: string; wrapper: string; required: string; type: string; description: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ root: string; container: string; name: string; wrapper: string; required: string; type: string; description: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ root: string; container: string; name: string; wrapper: string; required: string; type: string; description: string; }>"
            }
          }
        },
        {
          "name": "description",
          "type": "string | undefined",
          "description": "Description of the field",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name of the field.",
          "schema": "string"
        },
        {
          "name": "as",
          "type": "any",
          "description": "The element or component this component should render as.",
          "schema": "any"
        },
        {
          "name": "required",
          "type": "boolean | undefined",
          "description": "Indicate whether the field is required",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "false",
              "2": "true"
            }
          }
        }
      ]
    }
  },
  "ProseFieldGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/FieldGroup.vue",
    "pascalName": "ProseFieldGroup",
    "kebabName": "prose-field-group",
    "chunkName": "components/prose-field-group",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "as",
          "global": false,
          "description": "The element or component this component should render as.",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'div'"
            }
          ],
          "required": false,
          "type": "any",
          "schema": "any"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{} | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "{} | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "{}",
                "schema": {}
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & FieldGroupSlots",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & FieldGroupSlots",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(props?: {} | undefined) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props?: {} | undefined): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "as",
          "type": "any",
          "description": "The element or component this component should render as.",
          "schema": "any"
        }
      ]
    }
  },
  "ProseH1": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H1.vue",
    "pascalName": "ProseH1",
    "kebabName": "prose-h1",
    "chunkName": "components/prose-h1",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Partial<{ base: string; link: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ base: string; link: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ base: string; link: string; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "ui",
          "type": "Partial<{ base: string; link: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ base: string; link: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ base: string; link: string; }>"
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseH2": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H2.vue",
    "pascalName": "ProseH2",
    "kebabName": "prose-h2",
    "chunkName": "components/prose-h2",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "ui",
          "type": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }>"
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseH3": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H3.vue",
    "pascalName": "ProseH3",
    "kebabName": "prose-h3",
    "chunkName": "components/prose-h3",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "ui",
          "type": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ base: string[]; leading: string[]; leadingIcon: string; link: string; }>"
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseH4": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H4.vue",
    "pascalName": "ProseH4",
    "kebabName": "prose-h4",
    "chunkName": "components/prose-h4",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Partial<{ base: string; link: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ base: string; link: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ base: string; link: string; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "ui",
          "type": "Partial<{ base: string; link: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ base: string; link: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ base: string; link: string; }>"
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseHr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Hr.vue",
    "pascalName": "ProseHr",
    "kebabName": "prose-hr",
    "chunkName": "components/prose-hr",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseIcon": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Icon.vue",
    "pascalName": "ProseIcon",
    "kebabName": "prose-icon",
    "chunkName": "components/prose-icon",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "name",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "name",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Img.vue",
    "pascalName": "ProseImg",
    "kebabName": "prose-img",
    "chunkName": "components/prose-img",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "alt",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": "number"
            }
          }
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": "number"
            }
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "alt",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "width",
          "type": "string | number | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": "number"
            }
          }
        },
        {
          "name": "height",
          "type": "string | number | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": "number"
            }
          }
        }
      ]
    }
  },
  "ProseKbd": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Kbd.vue",
    "pascalName": "ProseKbd",
    "kebabName": "prose-kbd",
    "chunkName": "components/prose-kbd",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "value",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseLi": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Li.vue",
    "pascalName": "ProseLi",
    "kebabName": "prose-li",
    "chunkName": "components/prose-li",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseOl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Ol.vue",
    "pascalName": "ProseOl",
    "kebabName": "prose-ol",
    "chunkName": "components/prose-ol",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseP": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/P.vue",
    "pascalName": "ProseP",
    "kebabName": "prose-p",
    "chunkName": "components/prose-p",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProsePre": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Pre.vue",
    "pascalName": "ProsePre",
    "kebabName": "prose-pre",
    "chunkName": "components/prose-pre",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "number[] | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "array",
                "type": "number[]",
                "schema": [
                  "number"
                ]
              }
            }
          }
        },
        {
          "name": "hideHeader",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "false",
              "2": "true"
            }
          }
        },
        {
          "name": "meta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Partial<{ root: string; header: string; filename: string; icon: string; copy: string; base: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ root: string; header: string; filename: string; icon: string; copy: string; base: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ root: string; header: string; filename: string; icon: string; copy: string; base: string; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "icon",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "ui",
          "type": "Partial<{ root: string; header: string; filename: string; icon: string; copy: string; base: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ root: string; header: string; filename: string; icon: string; copy: string; base: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ root: string; header: string; filename: string; icon: string; copy: string; base: string; }>"
            }
          }
        },
        {
          "name": "code",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "filename",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "language",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "highlights",
          "type": "number[] | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "number[] | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "array",
                "type": "number[]",
                "schema": [
                  "number"
                ]
              }
            }
          }
        },
        {
          "name": "hideHeader",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "false",
              "2": "true"
            }
          }
        },
        {
          "name": "meta",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseScript": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Script.vue",
    "pascalName": "ProseScript",
    "kebabName": "prose-script",
    "chunkName": "components/prose-script",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseSteps": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Steps.vue",
    "pascalName": "ProseSteps",
    "kebabName": "prose-steps",
    "chunkName": "components/prose-steps",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "level",
          "global": false,
          "description": "The heading level to apply to the steps.",
          "tags": [
            {
              "name": "defaultValue",
              "text": "'3'"
            }
          ],
          "required": false,
          "type": "\"3\" | \"2\" | \"4\" | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"3\" | \"2\" | \"4\" | undefined",
            "schema": {
              "0": "undefined",
              "1": "\"3\"",
              "2": "\"2\"",
              "3": "\"4\""
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "level",
          "type": "\"3\" | \"2\" | \"4\" | undefined",
          "description": "The heading level to apply to the steps.",
          "schema": {
            "kind": "enum",
            "type": "\"3\" | \"2\" | \"4\" | undefined",
            "schema": {
              "0": "undefined",
              "1": "\"3\"",
              "2": "\"2\"",
              "3": "\"4\""
            }
          }
        }
      ]
    }
  },
  "ProseStrong": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Strong.vue",
    "pascalName": "ProseStrong",
    "kebabName": "prose-strong",
    "chunkName": "components/prose-strong",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseTable": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Table.vue",
    "pascalName": "ProseTable",
    "kebabName": "prose-table",
    "chunkName": "components/prose-table",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Partial<{ root: string; base: string; }> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ root: string; base: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ root: string; base: string; }>"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "ui",
          "type": "Partial<{ root: string; base: string; }> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Partial<{ root: string; base: string; }> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Partial<{ root: string; base: string; }>"
            }
          }
        }
      ]
    }
  },
  "ProseTabs": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tabs.vue",
    "pascalName": "ProseTabs",
    "kebabName": "prose-tabs",
    "chunkName": "components/prose-tabs",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "defaultValue",
          "global": false,
          "description": "The default tab to select.",
          "tags": [
            {
              "name": "example",
              "text": "'1'"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"0\""
        },
        {
          "name": "sync",
          "global": false,
          "description": "Sync the selected tab with a local storage key.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "hash",
          "global": false,
          "description": "The hash to scroll to when the tab is selected.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{} | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "{} | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "{}",
                "schema": {}
              }
            }
          }
        }
      ],
      "events": [
        {
          "name": "update:modelValue",
          "description": "",
          "tags": [],
          "type": "[value: string | undefined]",
          "signature": "(event: \"update:modelValue\", value: string | undefined): void",
          "schema": [
            {
              "kind": "enum",
              "type": "string | undefined",
              "schema": [
                "undefined",
                "string"
              ]
            }
          ]
        }
      ],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & TabsSlots",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & TabsSlots",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(props?: {} | undefined) => any",
                "schema": {
                  "kind": "event",
                  "type": "(props?: {} | undefined): any",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "defaultValue",
          "type": "string",
          "description": "The default tab to select.",
          "schema": "string"
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "sync",
          "type": "string | undefined",
          "description": "Sync the selected tab with a local storage key.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "modelValue",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "onUpdate:modelValue",
          "type": "((value: string | undefined) => any) | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "((value: string | undefined) => any) | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "event",
                "type": "(value: string | undefined): any",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "string | undefined",
                    "schema": [
                      "undefined",
                      "string"
                    ]
                  }
                ]
              }
            }
          }
        },
        {
          "name": "hash",
          "type": "string | undefined",
          "description": "The hash to scroll to when the tab is selected.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseTabsItem": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/TabsItem.vue",
    "pascalName": "ProseTabsItem",
    "kebabName": "prose-tabs-item",
    "chunkName": "components/prose-tabs-item",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "label",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ mdcUnwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ mdcUnwrap: string; }",
            "schema": {
              "mdcUnwrap": {
                "name": "mdcUnwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: { mdcUnwrap: string; }): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "label",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "schema": "any"
        }
      ]
    }
  },
  "ProseTbody": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tbody.vue",
    "pascalName": "ProseTbody",
    "kebabName": "prose-tbody",
    "chunkName": "components/prose-tbody",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseTd": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Td.vue",
    "pascalName": "ProseTd",
    "kebabName": "prose-td",
    "chunkName": "components/prose-td",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseTh": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Th.vue",
    "pascalName": "ProseTh",
    "kebabName": "prose-th",
    "chunkName": "components/prose-th",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseThead": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Thead.vue",
    "pascalName": "ProseThead",
    "kebabName": "prose-thead",
    "chunkName": "components/prose-thead",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseTr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tr.vue",
    "pascalName": "ProseTr",
    "kebabName": "prose-tr",
    "chunkName": "components/prose-tr",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseUl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Ul.vue",
    "pascalName": "ProseUl",
    "kebabName": "prose-ul",
    "chunkName": "components/prose-ul",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseCaution": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Caution.vue",
    "pascalName": "ProseCaution",
    "kebabName": "prose-caution",
    "chunkName": "components/prose-caution",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{ mdcUnwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ mdcUnwrap: string; }",
            "schema": {
              "mdcUnwrap": {
                "name": "mdcUnwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: { mdcUnwrap: string; }): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseNote": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Note.vue",
    "pascalName": "ProseNote",
    "kebabName": "prose-note",
    "chunkName": "components/prose-note",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{ mdcUnwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ mdcUnwrap: string; }",
            "schema": {
              "mdcUnwrap": {
                "name": "mdcUnwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: { mdcUnwrap: string; }): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTip": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Tip.vue",
    "pascalName": "ProseTip",
    "kebabName": "prose-tip",
    "chunkName": "components/prose-tip",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{ mdcUnwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ mdcUnwrap: string; }",
            "schema": {
              "mdcUnwrap": {
                "name": "mdcUnwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: { mdcUnwrap: string; }): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseWarning": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxt+ui-pro@3.0.2_@babel+parser@7.27.0_db0@0.3.1_better-sqlite3@11.9.1__embla-carousel_c91fed73073e7ebd3bd8cfe4cd954783/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/callout/Warning.vue",
    "pascalName": "ProseWarning",
    "kebabName": "prose-warning",
    "chunkName": "components/prose-warning",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{ mdcUnwrap: string; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ mdcUnwrap: string; }",
            "schema": {
              "mdcUnwrap": {
                "name": "mdcUnwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: { mdcUnwrap: string; }) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: { mdcUnwrap: string; }) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: { mdcUnwrap: string; }): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseH5": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxtjs+mdc@0.16.1_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue",
    "pascalName": "ProseH5",
    "kebabName": "prose-h5",
    "chunkName": "components/prose-h5",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseH6": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/.pnpm/@nuxtjs+mdc@0.16.1_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue",
    "pascalName": "ProseH6",
    "kebabName": "prose-h6",
    "chunkName": "components/prose-h6",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: (((props: {}) => any) & ((props: {}) => any)) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "Icon": {
    "chunkName": "components/icon",
    "global": true,
    "kebabName": "icon",
    "pascalName": "Icon",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "priority": 0,
    "meta": {
      "type": 0,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    },
    "name": "Icon",
    "filePath": "node_modules/.pnpm/@nuxt+icon@1.12.0_magicast@0.3.5_vite@6.2.6_jiti@2.4.2_lightningcss@1.29.2_terser@5.39._45852c06d0891daac18bddc1664bb3a3/node_modules/@nuxt/icon/dist/runtime/components/index.js"
  }
};

const _DSx4yz = eventHandler(async () => {
  const mappedComponents = Object.values(components).map(({ pascalName, filePath, meta }) => {
    return {
      name: pascalName,
      path: filePath,
      meta: {
        props: meta.props,
        slots: meta.slots,
        events: meta.events
      }
    };
  });
  const appConfig = useAppConfig();
  const runtimeConfig = useRuntimeConfig();
  const { content } = runtimeConfig;
  const { preview } = runtimeConfig.public;
  const { version } = content;
  return {
    version,
    preview,
    gitInfo,
    collections: collections$1,
    appConfigSchema,
    appConfig,
    components: mappedComponents
  };
});

const _9Ufa5L = defineEventHandler((event) => {
  appendHeader(event, "Access-Control-Allow-Origin", "*");
  const componentName = (event.context.params?.["component?"] || "").replace(/\.json$/, "");
  if (componentName) {
    const meta = components[pascalCase(componentName)];
    if (!meta) {
      throw createError({
        statusMessage: "Components not found!",
        statusCode: 404,
        data: {
          description: "Please make sure you are looking for correct component"
        }
      });
    }
    return meta;
  }
  return components;
});

const _1nkzOb = eventHandler(async (event) => {
  const collection = getRouterParam(event, "collection");
  const data = await useStorage().getItem(`build:content:database.compressed.mjs`) || "";
  if (data) {
    const lineStart = `export const ${collection} = "`;
    const content = String(data).split("\n").find((line) => line.startsWith(lineStart));
    if (content) {
      return content.substring(lineStart.length, content.length - 1);
    }
  }
  return await import('file:///Users/rgallegos/proyectos/blog-raul/.nuxt/content/database.compressed.mjs').then((m) => m[collection]);
});

async function decompressSQLDump(base64Str, compressionType = "gzip") {
  const binaryData = Uint8Array.from(atob(base64Str), (c) => c.charCodeAt(0));
  const response = new Response(new Blob([binaryData]));
  const decompressedStream = response.body?.pipeThrough(new DecompressionStream(compressionType));
  const decompressedText = await new Response(decompressedStream).text();
  return decompressedText.split("\n");
}

function refineContentFields(sql, doc) {
  const fields = findCollectionFields(sql);
  const item = { ...doc };
  for (const key in item) {
    if (fields[key] === "json" && item[key] && item[key] !== "undefined") {
      item[key] = JSON.parse(item[key]);
    }
    if (fields[key] === "boolean" && item[key] !== "undefined") {
      item[key] = Boolean(item[key]);
    }
  }
  for (const key in item) {
    if (item[key] === "NULL") {
      item[key] = void 0;
    }
  }
  return item;
}
function findCollectionFields(sql) {
  const table = sql.match(/FROM\s+(\w+)/);
  if (!table) {
    return {};
  }
  const info = contentManifest[getCollectionName(table[1])];
  return info?.fields || {};
}
function getCollectionName(table) {
  return table.replace(/^_content_/, "");
}

let db;
function loadDatabaseAdapter(config) {
  const { database, localDatabase } = config;
  if (!db) {
    {
      db = localAdapter(refineDatabaseConfig(localDatabase));
    }
  }
  return {
    all: async (sql, params = []) => {
      return db.prepare(sql).all(...params).then((result) => (result || []).map((item) => refineContentFields(sql, item)));
    },
    first: async (sql, params = []) => {
      return db.prepare(sql).get(...params).then((item) => item ? refineContentFields(sql, item) : item);
    },
    exec: async (sql, params = []) => {
      return db.prepare(sql).run(...params);
    }
  };
}
const checkDatabaseIntegrity = {};
const integrityCheckPromise = {};
async function checkAndImportDatabaseIntegrity(event, collection, config) {
  if (checkDatabaseIntegrity[String(collection)] !== false) {
    checkDatabaseIntegrity[String(collection)] = false;
    integrityCheckPromise[String(collection)] = integrityCheckPromise[String(collection)] || _checkAndImportDatabaseIntegrity(event, collection, checksums[String(collection)], checksumsStructure[String(collection)], config).then((isValid) => {
      checkDatabaseIntegrity[String(collection)] = !isValid;
    }).catch((error) => {
      console.error("Database integrity check failed", error);
      checkDatabaseIntegrity[String(collection)] = true;
      integrityCheckPromise[String(collection)] = null;
    });
  }
  if (integrityCheckPromise[String(collection)]) {
    await integrityCheckPromise[String(collection)];
  }
}
async function _checkAndImportDatabaseIntegrity(event, collection, integrityVersion, structureIntegrityVersion, config) {
  const db2 = loadDatabaseAdapter(config);
  const before = await db2.first(`SELECT * FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => null);
  if (before?.version && !String(before.version)?.startsWith(`${config.databaseVersion}--`)) {
    await db2.exec(`DROP TABLE IF EXISTS ${tables.info}`);
    before.version = "";
  }
  const unchangedStructure = before?.structureVersion === structureIntegrityVersion;
  if (before?.version) {
    if (before.version === integrityVersion) {
      if (before.ready) {
        return true;
      }
      await waitUntilDatabaseIsReady(db2, collection);
      return true;
    }
    await db2.exec(`DELETE FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]);
    if (!unchangedStructure) {
      await db2.exec(`DROP TABLE IF EXISTS ${tables[collection]}`);
    }
  }
  const dump = await loadDatabaseDump(event, collection).then(decompressSQLDump);
  const dumpLinesHash = dump.map((row) => row.split(" -- ").pop());
  let hashesInDb = /* @__PURE__ */ new Set();
  if (unchangedStructure) {
    const hashListFromTheDump = new Set(dumpLinesHash);
    const hashesInDbRecords = await db2.all(`SELECT __hash__ FROM ${tables[collection]}`).catch(() => []);
    hashesInDb = new Set(hashesInDbRecords.map((r) => r.__hash__));
    const hashesToDelete = hashesInDb.difference(hashListFromTheDump);
    if (hashesToDelete.size) {
      await db2.exec(`DELETE FROM ${tables[collection]} WHERE __hash__ IN (${Array(hashesToDelete.size).fill("?").join(",")})`, Array.from(hashesToDelete));
    }
  }
  await dump.reduce(async (prev, sql, index) => {
    await prev;
    const hash = dumpLinesHash[index];
    const statement = sql.substring(0, sql.length - hash.length - 4);
    if (unchangedStructure) {
      if (hash === "structure") {
        return Promise.resolve();
      }
      if (hashesInDb.has(hash)) {
        return Promise.resolve();
      }
    }
    await db2.exec(statement).catch((err) => {
      const message = err.message || "Unknown error";
      console.error(`Failed to execute SQL ${sql}: ${message}`);
    });
  }, Promise.resolve());
  const after = await db2.first(`SELECT version FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ version: "" }));
  return after?.version === integrityVersion;
}
const REQUEST_TIMEOUT = 90;
async function waitUntilDatabaseIsReady(db2, collection) {
  let iterationCount = 0;
  let interval;
  await new Promise((resolve, reject) => {
    interval = setInterval(async () => {
      const row = await db2.first(`SELECT ready FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ ready: true }));
      if (row?.ready) {
        clearInterval(interval);
        resolve(0);
      }
      if (iterationCount++ > REQUEST_TIMEOUT) {
        clearInterval(interval);
        reject(new Error("Waiting for another database initialization timed out"));
      }
    }, 1e3);
  }).catch((e) => {
    throw e;
  }).finally(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
}
async function loadDatabaseDump(event, collection) {
  return await fetchDatabase(event, String(collection)).catch((e) => {
    console.error("Failed to fetch compressed dump", e);
    return "";
  });
}
function refineDatabaseConfig(config) {
  if (config.type === "d1") {
    return { ...config, bindingName: config.bindingName || config.binding };
  }
  if (config.type === "sqlite") {
    const _config = { ...config };
    if (config.filename === ":memory:") {
      return { name: "memory" };
    }
    if ("filename" in config) {
      const filename = isAbsolute(config?.filename || "") || config?.filename === ":memory:" ? config?.filename : new URL(config.filename, globalThis._importMeta_.url).pathname;
      _config.path = process.platform === "win32" && filename.startsWith("/") ? filename.slice(1) : filename;
    }
    return _config;
  }
  return config;
}

const SQL_COMMANDS = /SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|\$/i;
const SQL_COUNT_REGEX = /COUNT\((DISTINCT )?([a-z_]\w+|\*)\)/i;
const SQL_SELECT_REGEX = /^SELECT (.*) FROM (\w+)( WHERE .*)? ORDER BY (["\w,\s]+) (ASC|DESC)( LIMIT \d+)?( OFFSET \d+)?$/;
function assertSafeQuery(sql, collection) {
  if (!sql) {
    throw new Error("Invalid query");
  }
  const cleanedupQuery = cleanupQuery(sql);
  if (cleanedupQuery !== sql) {
    throw new Error("Invalid query");
  }
  const match = sql.match(SQL_SELECT_REGEX);
  if (!match) {
    throw new Error("Invalid query");
  }
  const [_, select, from, where, orderBy, order, limit, offset] = match;
  const columns = select.trim().split(", ");
  if (columns.length === 1) {
    if (columns[0] !== "*" && !columns[0].match(SQL_COUNT_REGEX) && !columns[0].match(/^"[a-z_]\w+"$/i)) {
      throw new Error("Invalid query");
    }
  } else if (!columns.every((column) => column.match(/^"[a-z_]\w+"$/i))) {
    throw new Error("Invalid query");
  }
  if (from !== `_content_${collection}`) {
    throw new Error("Invalid query");
  }
  if (where) {
    if (!where.startsWith(" WHERE (") || !where.endsWith(")")) {
      throw new Error("Invalid query");
    }
    const noString = cleanupQuery(where, { removeString: true });
    if (noString.match(SQL_COMMANDS)) {
      throw new Error("Invalid query");
    }
  }
  const _order = (orderBy + " " + order).split(", ");
  if (!_order.every((column) => column.match(/^("[a-zA-Z_]+"|[a-zA-Z_]+) (ASC|DESC)$/))) {
    throw new Error("Invalid query");
  }
  if (limit !== void 0 && !limit.match(/^ LIMIT \d+$/)) {
    throw new Error("Invalid query");
  }
  if (offset !== void 0 && !offset.match(/^ OFFSET \d+$/)) {
    throw new Error("Invalid query");
  }
  return true;
}
function cleanupQuery(query, options = { removeString: false }) {
  let inString = false;
  let stringFence = "";
  let result = "";
  for (let i = 0; i < query.length; i++) {
    const char = query[i];
    const prevChar = query[i - 1];
    const nextChar = query[i + 1];
    if (char === "'" || char === '"') {
      if (!options?.removeString) {
        result += char;
        continue;
      }
      if (inString) {
        if (char !== stringFence || nextChar === stringFence || prevChar === stringFence) {
          continue;
        }
        inString = false;
        stringFence = "";
        continue;
      } else {
        inString = true;
        stringFence = char;
        continue;
      }
    }
    if (!inString) {
      if (char === "-" && nextChar === "-") {
        return result;
      }
      if (char === "/" && nextChar === "*") {
        i += 2;
        while (i < query.length && !(query[i] === "*" && query[i + 1] === "/")) {
          i += 1;
        }
        i += 2;
        continue;
      }
      result += char;
    }
  }
  return result;
}

const _XKVQ7v = eventHandler(async (event) => {
  const { sql } = await readBody(event);
  const collection = getRouterParam(event, "collection");
  assertSafeQuery(sql, collection);
  const conf = useRuntimeConfig().content;
  if (conf.integrityCheck) {
    await checkAndImportDatabaseIntegrity(event, collection, conf);
  }
  return loadDatabaseAdapter(conf).all(sql);
});

const _6qW8Ha = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_woS7Mk = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/__nuxt_error', handler: _lazy_woS7Mk, lazy: true, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _Tn6xkJ, lazy: false, middleware: false, method: undefined },
  { route: '/__preview.json', handler: _DSx4yz, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta', handler: _9Ufa5L, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta.json', handler: _9Ufa5L, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta/:component?', handler: _9Ufa5L, lazy: false, middleware: false, method: "get" },
  { route: '/__nuxt_content/:collection/sql_dump', handler: _1nkzOb, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/:collection/query', handler: _XKVQ7v, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _6qW8Ha, lazy: false, middleware: false, method: undefined },
  { route: '/_fonts/**', handler: _lazy_woS7Mk, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_woS7Mk, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + messages.statusCode + " - " + (messages.statusMessage || "Internal Server Error") + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + messages.statusCode + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + messages.description + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><div class="font-light leading-tight p-8 text-xl z-10">' + messages.stack + "</div></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getClientManifest = () => import('file:///Users/rgallegos/proyectos/blog-raul/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file:///Users/rgallegos/proyectos/blog-raul/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
      const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
      const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
      const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
      return appTemplate + loaderTemplate;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const unheadOptions = {
  disableDefaults: true,
};

const renderSSRHeadOptions = {"omitLineBreaks":true};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = !isRenderingIsland && PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createHead(unheadOptions);
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest) {
    head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    head.push({ style: inlinedStyles });
  }
  {
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      head.push({ link }, headEntryOptions);
    }
  }
  if (isRenderingIsland && islandContext) {
    const islandHead = {};
    for (const entry of head.entries.values()) {
      for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
        const currentValue = islandHead[key];
        if (Array.isArray(currentValue)) {
          currentValue.push(...value);
        }
        islandHead[key] = value;
      }
    }
    islandHead.link ||= [];
    islandHead.style ||= [];
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(_rendered.html),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  if (!NO_SCRIPTS) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
