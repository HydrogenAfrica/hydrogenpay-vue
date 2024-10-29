import hydrogen from './hydrogenpay.vue'

export default {
  install(Vue, options) {
    Vue.component("hydrogenpay-vue", hydrogen);
  }
};