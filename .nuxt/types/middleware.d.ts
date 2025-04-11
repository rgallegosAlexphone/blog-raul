import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = never
declare module "../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_better-sqlite3@11.9.1_db0@0.3.1_better-sqlite3@11.9.1_a6b5ad1cb5036dbaf4ce1846bec1b973/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}