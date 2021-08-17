import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jiyun Park | iOS Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hotel.png',
    title: 'Hotel Web Service',
    info: 'This project is developed for a virtual hotel visitors. We assumed that visitors could book a room and get help from robots. Managements of hotel can supervise employees and robots such as their location and status. And we implemented web service for that managements.',
    info2: 'I was in charge of developing a reservation system with Python and Django, managing DB with SQLite, and deploying AWS with EC2.',
    url: '',
    repo: 'https://github.com/glossyyoon/hotel-db-system', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wastesorting.png',
    title: 'Waste Sorting Game',
    info: 'As a participant in Swift Student Challenge 2021, I made a drag and drop game with a Swift playground.',
    info2: ' The game was developed to inform that there are many trash that cannot be recycling and inform how to sorting wastes that we usually didnt know well.',
    url: '',
    repo: 'https://github.com/glossyyoon/WasteSorting', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'named.png',
    title: 'Teeth memo',
    info: 'This project is under development for patients who wants to make a note for their dental treatment. ',
    info2: 'I implemented main view and calendar view with UIKit and cocoapods JTAppleCalendar library programmatically without storyboard, login feature with Firebase and modeling data with CoreData.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mypju1128@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/feed/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/glossyyoon',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
