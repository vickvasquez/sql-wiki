export interface Section {
  name: string
  url: string
  description: string
}

const sections: Section[] = [
  {
    name: 'Blog',
    url: '/blog',
    description: 'En esta sección aprenderás a implementar el lenguaje en sus diferentes motores'
  },
  {
    name: 'Conceptos',
    url:'/concepts',
    description: 'Aprende los diferentes conceptos del lenguaje SQL'
  },
  {
    name: 'Gists',
    url:'/gist',
    description: 'Necesitas scripts que te pueden ayudar a mejorar tu dia a dia?'
  },
  {
    name: 'Preguntas frecuentes',
    url: 'faq',
    description: 'Todas la preguntas relacionadas a SQL'
  }
]

export default sections
