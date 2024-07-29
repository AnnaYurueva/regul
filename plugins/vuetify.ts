import '@/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
    colors: {
        background: '#FFFFFF',
        header: '#FFF7EB',
        footer: '#F5F5F5',
        'footer-link': '#6B6B6B',
        primary: '#337566',
        secondary: '#E8E8E8',
        error: '#B00020',
        info: '#0F0F0F',
        success: '#4CAF50',
        warning: '#FB8C00',
        divider: '#CCCCCC',
      },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
          myCustomLightTheme,
        },
    },
  })
  
  app.vueApp.use(vuetify)
})