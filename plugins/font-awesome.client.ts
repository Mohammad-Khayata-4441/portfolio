/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faAt, faHome, faCircleUser, faImage, faPaperPlane, faEnvelope, faNewspaper, faArrowRight, faPhone, faMapMarker, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
library.add(...[
    faUserSecret,
    faArrowRight,
    faHome,
    faCircleUser,
    faImage,
    faEnvelope,
    faPaperPlane,
    faNewspaper,
    faPhone,
    faMapMarker,
    faLinkedinIn,
    faMoon,
    faSun,
    faAt

])

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('f-icon', FontAwesomeIcon)

})