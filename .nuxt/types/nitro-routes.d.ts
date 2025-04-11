// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_better-sqlite3@11.9.1_db0@0.3.1_better-sqlite3@11.9.1_a6b5ad1cb5036dbaf4ce1846bec1b973/node_modules/nuxt/dist/core/runtime/nitro/handlers/renderer').default>>>>
    }
    '/__nuxt_content/:collection/sql_dump': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@3.4.0_magicast@0.3.5_typescript@5.8.3/node_modules/@nuxt/content/dist/runtime/presets/node/database-handler').default>>>>
    }
    '/__nuxt_content/:collection/query': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@3.4.0_magicast@0.3.5_typescript@5.8.3/node_modules/@nuxt/content/dist/runtime/api/query.post').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.1_better-sqlite3@11.9.1__ioredis@5.6.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}