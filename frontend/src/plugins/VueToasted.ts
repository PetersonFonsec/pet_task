import Toasted from 'vue-toasted'
import Vue from 'vue'

Vue.use(Toasted, {
    position: 'top-right',
    duration: 3000,
    action : {
        class: 'Toasted',
        text : 'Close',
        onClick : (e, toastObject) => {
            toastObject.goAway(0);
        }
    },
})