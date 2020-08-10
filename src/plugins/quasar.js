import Vue from 'vue';

import 'quasar/dist/quasar.css';
import '../styles/quasar.scss';
import 'quasar/dist/quasar.ie.polyfills';
import lang from 'quasar/lang/zh-hans.js';
import iconSet from 'quasar/icon-set/mdi-v5.js';
import '@quasar/extras/mdi-v5/mdi-v5.css';
import { Dialog, Loading, Notify, QSpinnerBall, Quasar } from 'quasar';

Vue.use(Quasar, {
    config: {
        notify: {
            /* look at QUASARCONFOPTIONS from the API card (bottom of page) */
            type: 'info',
            position: 'center',
            progress: true,
            timeout: 2000,
            textColor: 'white',
            color: '#909399'
        },
        loading: {
            spinner: QSpinnerBall,
            spinnerColor: 'primary',
            backgroundColor: 'white',
            spinnerSize: 100,
            message: '加载中',
            messageColor: 'primary'
        }
    },
    components: { /* not needed if importStrategy is not 'manual' */ },
    directives: { /* not needed if importStrategy is not 'manual' */ },
    plugins: {
        Dialog,
        Loading,
        Notify
    },
    lang: lang,
    iconSet: iconSet
});
