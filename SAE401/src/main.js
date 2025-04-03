// filepath: /Applications/XAMPP/xamppfiles/htdocs/SAE401/SAE401/src/main.js
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add(fas);

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Register FontAwesomeIcon globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');