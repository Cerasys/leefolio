import aboutpic from './components/Access/mePhoto.jpg'
import orangelogo from './components/Access/logo_orange.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nathanblee.com',
  logo: orangelogo,
}

const about = {
  photo: aboutpic,
  name: 'Nathan Lee',
  role: 'Full stack developer',
  description:
    '🇺🇸 🇹🇼 entrepreneur passionate about building delightful product experiences, lifelong learning, and wearing different hats across product, design, growth, and operations.',
  resume:
    'https://drive.google.com/file/d/1wlu5zUxQfA3eyNtvGQ-cn7LMwt1uxG4k/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/nlnathanlee/',
    github: 'https://github.com/Cerasys',
    instagram: 'https://www.instagram.com/nathan.b.lee/',
    spotify: 'https://open.spotify.com/user/aixora?si=91a1d3cbdf224e1c',
  },
}

const portfolio = 'https://nblee.notion.site/bd37d0430b3c4ca5b057ac968a57b7d1'

const projects = []

const skills = []

const contact = {
  // email is optional - if left empty Contact section won't show up
  // email: 'nathanblee@gmail.com',
}

export { header, about, projects, skills, contact, portfolio }
