export const skills = [
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'HTML',
  'CSS',
  'SASS',
  'NPM',
  'GIT',
  'Webpack',
  'Java',
  'Python',
  'Bash',
  'Axios',
  'Notion',
  'Adobe XD',
  'Adobe Photoshop',
  'Microsoft Word',
  'Microsoft PowerPoint',
  'Problem Solving',
  'Time Management',
  'Self Learning',
];

export const projects = [
  {
    icon: 'FaShoppingCart',
    name: 'The Store',
    img: 'the-store.png',
    description:
      'The Store is an online store where users can do online shopping.',
    liveLink: 'https://the-store.pages.dev/',
    githubLink: 'https://github.com/Suleiman-Ali/the-store-front-end',
    builtWith: [
      'HTML',
      'SASS',
      'Typescript',
      'ReactJs',
      'NodeJs',
      'MongoDB',
      'Mongoose',
      'Express',
    ],
  },
  {
    icon: 'FaVideo',
    name: 'Movies Info',
    img: 'movies-info.png',
    description:
      'Movies Info is an app where users can view details of their favorite TV Shows and Movies, it is similar to IMDB.',
    liveLink: 'https://movies-info.pages.dev/',
    githubLink: 'https://github.com/Suleiman-Ali/movies-info',
    builtWith: [
      'HTML',
      'SASS',
      'Typescript',
      'ReactJs',
      'SwiperJs',
      'TMDB API',
      'Express',
    ],
  },
  {
    icon: 'FaBriefcase',
    name: 'Job Listings',
    img: 'job-listing.png',
    description:
      'Job Listings is an app where users can post and look for new jobs, it is similar to Weworkremotely.',
    liveLink: 'https://job-listings-4qg.pages.dev/',
    githubLink: 'https://github.com/Suleiman-Ali/job-listings-front-end',
    builtWith: [
      'HTML',
      'SASS',
      'Typescript',
      'ReactJs',
      'NodeJs',
      'MongoDB',
      'Mongoose',
      'Express',
    ],
  },
  {
    icon: 'FaGithubSquare',
    name: 'Github Finder',
    img: 'github-finder.png',
    description:
      'Github Finder is an app where users can search for github users and view their profile details.',
    liveLink: 'https://github-finder-24k.pages.dev/',
    githubLink: 'https://github.com/Suleiman-Ali/github-finder',
    builtWith: ['HTML', 'SASS', 'Typescript', 'ReactJs', 'Github API'],
  },
  {
    icon: 'FaColumns',
    name: 'Kanban',
    img: 'kanban.png',
    description:
      'Kanban is an implementation of Kanban boards which is a visual system used to view tasks at various stages.',
    liveLink: 'https://kanban-s6z.pages.dev/',
    githubLink: 'https://github.com/Suleiman-Ali/kanban',
    builtWith: ['HTML', 'SASS', 'Typescript', 'ReactJs'],
  },
  {
    icon: 'FaStopwatch20',
    name: 'Pomodoro',
    img: 'pomodoro.png',
    description:
      'Pomodoro is an implementation of Pomodoro technique which is a time management method.',
    liveLink: 'https://pomodoro-78i.pages.dev/',
    githubLink: 'https://github.com/Suleiman-Ali/pomodoro',
    builtWith: ['HTML', 'SASS', 'Typescript', 'ReactJs'],
  },
  {
    icon: 'FaCalculator',
    name: 'Calculator',
    img: 'calculator.png',
    description:
      'Calculator is a simple equation solver, it includes all basic math operations.',
    liveLink: 'https://calculator-6bm.pages.dev/',
    githubLink: 'https://github.com/Suleiman-Ali/calculator',
    builtWith: ['HTML', 'SASS', 'Typescript', 'ReactJs', 'MathJs'],
  },
  {
    icon: 'FaDice',
    name: 'Rock Paper Scissors',
    img: 'rock-paper.png',
    description:
      'Rock Paper Scissors is a simple childhood game played by at least two.',
    liveLink: 'https://rock-paper-scissors-ew4.pages.dev/',
    githubLink: 'https://github.com/Suleiman-Ali/rock-paper-scissors',
    builtWith: ['HTML', 'SASS', 'Typescript', 'ReactJs'],
  },
];

export const linkClickHandler = (e: any, id: string, setter?: any) => {
  e.preventDefault();
  //@ts-ignore
  window.scrollTo(0, document.getElementById(id).offsetTop - 50);
  if (setter) setter(false);
};
