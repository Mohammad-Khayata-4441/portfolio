import viewer  from 'v-viewer'
export default defineNuxtPlugin((app) => {
app.vueApp.use(viewer,{
    defaultOptions:{}
})
})