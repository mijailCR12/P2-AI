import { defineNuxtConfig } from 'nuxt/config'
// import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['@nuxt/content','@nuxtjs/snipcart'],
	  snipcart: {publicApiKey: 'YWYxZDZkMjgtNzU0Ny00OTdiLTgxMWYtMDhmZjIxMDJmZjM2NjM4MzU5NTM0ODY2MTU3OTcz'},
    app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Raleway:400,300,600' },
        { rel: 'stylesheet', href: 'css/normalize.css'},
        { rel: 'stylesheet', href: 'css/skeleton.css'},
        { rel: 'icon', type:"image/png", href: 'images/favicon.png'}
      ]
    }
	}
})