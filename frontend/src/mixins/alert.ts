import Vue from 'vue'
import Component from 'vue-class-component'
import { ToastObject } from 'vue-toasted'

@Component
class AlertMixin extends Vue {

    public Error(msg: string): ToastObject {

        return this.$toasted.show(msg, {
            icon: () => 'fa-exclamation-triangle',
            className: 'Toasted-Error',
            type: 'error',
        })

    }

    public Success(msg: string): ToastObject {

        return this.$toasted.show(msg, {
            className: 'Toasted-Error',
            icon: () => 'done',
            type: 'success',
        })

    }
}

export default AlertMixin