import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2dfc4c9b = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _0b0bf14b = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _18616443 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _6b80a0d6 = () => interopDefault(import('..\\pages\\categories\\_category.vue' /* webpackChunkName: "pages/categories/_category" */))
const _c264dc62 = () => interopDefault(import('..\\pages\\products\\_product.vue' /* webpackChunkName: "pages/products/_product" */))
const _57594fe7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _2dfc4c9b,
    name: "cart"
  }, {
    path: "/categories",
    component: _0b0bf14b,
    name: "categories"
  }, {
    path: "/products",
    component: _18616443,
    name: "products"
  }, {
    path: "/categories/:category",
    component: _6b80a0d6,
    name: "categories-category"
  }, {
    path: "/products/:product",
    component: _c264dc62,
    name: "products-product"
  }, {
    path: "/",
    component: _57594fe7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
