import aboutpic from './components/Access/mePhoto.jpg'
import darklogo from './components/Access/logo_dark.png'
import whitelogo from './components/Access/logo_white.png'
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
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Movie Tracker',
    description:
      'As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.',
    stack: [
      'localstorage',
      'Openweather API',
      'Google Map API',
      'Movie Database API',
    ],
    sourceCode: 'https://github.com/Mike-C-Sanders/Movie-Tracker',
    livePreview: 'https://mike-c-sanders.github.io/Movie-Tracker/',
  },
  {
    name: 'Event Planner',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'npm', 'jawsdb', 'handlebars', 'express', 'nodejs'],
    sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
    livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },
  {
    name: 'Resource Planner',
    description:
      'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com/stone-com/Resource-Planner',
    livePreview: 'https://resource-planner-group2.herokuapp.com/',
  },
  {
    name: 'GameStoreData(back end)',
    description:
      'GameStoreData is able to let user retrieve the game from database based on its year and category',
    stack: ['Java 8', 'MySQL', 'React'],
    sourceCode: 'https://github.com/stone-com/Resource-Planner',
  },
  {
    name: 'Music Store(back end)',
    description:
      'MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode:
      'https://github.com/Morganbb104/M7-project2-musictore-recommendations-Huang_Chengchien',
    livePreview: 'https://cheng32-musicstore-catalog.herokuapp.com/track',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
  'Java 8',
  'Java Spring Boot',
  'Microservices',
  'Docker',
  'Heroku',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hcc780921@gmail.com',
}

export { header, about, projects, skills, contact }
