import Vue from "vue";
import App from "./App";


/**
 * Form Components
 */
import avcForms from './components/Form/index';
import AppInputControl from '@/components/Base/AppInputControl';

Vue.config.productionTip = false;

/**
 * Register Components
 */
avcForms.forEach(component => {
    Vue.component(component.name, component);
});

Vue.component('AppInputControl', AppInputControl)

new Vue({
  render: h => h(App)
}).$mount("#app");
