import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faPlus,
  faBars,
  faTrash,
  faFilter,
  faArrowUpAZ,
  faArrowDownAZ,
  faTriangleExclamation,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import './style.css';
import App from './App.vue';

const pinia = createPinia();
library.add(faPlus);
library.add(faBars);
library.add(faTrash);
library.add(faFilter);
library.add(faArrowUpAZ);
library.add(faArrowDownAZ);
library.add(faTriangleExclamation);
library.add(faSpinner);

createApp(App)
  .use(pinia)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
