import '@/styles/main.scss'
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#337566',
        secondary: '#E8E8E8',
        error: '#B00020',
        info: '#0F0F0F',
        success: '#4CAF50',
        warning: '#FB8C00',
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