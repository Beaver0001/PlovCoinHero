import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="absolute top-4 right-4 text-sm space-x-2 text-yellow-200">
      <button
        onClick={() => changeLanguage('en')}
        className={`hover:underline ${i18n.language === 'en' ? 'font-bold' : ''}`}
      >
        EN
      </button>
      <span>|</span>
      <button
        onClick={() => changeLanguage('ru')}
        className={`hover:underline ${i18n.language === 'ru' ? 'font-bold' : ''}`}
      >
        RU
      </button>
    </div>
  )
}

export default LanguageSwitcher
