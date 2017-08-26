import i18next from 'i18next'
import ru from './ru'

i18next.init({ lng: 'ru', resources: { ru: { translation: ru } } })

export default (key, options) => (
  i18next.t(key, options)
)
