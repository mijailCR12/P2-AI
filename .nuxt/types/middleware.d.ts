import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/mijail/Desktop/Arquitectura informatica/P2-AI/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}