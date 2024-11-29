export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'en';

export const routes = {
  en: {
    'projects': 'projects',
    'experience': 'experience',
    'about': 'about',
  },
  es: {
    'projects': 'proyectos',
    'experience': 'experiencia',
    'about': 'sobre',  },
}

export const ui = {
  es: {
    'nav.experience':'Experiencia',
    'nav.projects':'Proyectos',
    'nav.about':'Sobre mi',
    'nav.contact':'Contacto',
  },
  en: {
    'nav.experience':'Experience',
    'nav.projects':'Projects',
    'nav.about':'About me',
    'nav.contact':'Contact',
  },
} as const;