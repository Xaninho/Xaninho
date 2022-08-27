import { HomeObject } from './../../types/general';

export const HomeObjOne : HomeObject = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'More about me',
    headline: 'Currently working on various projects',
    description: "Right now I'm focusing on building smaller projects to gain momentum to complete bigger ones. I'm also working on a side project called 'Thesaurus' which is a simple web application that allows you to search for a word and get a list of synonyms and antonyms.",
    buttonLabel: 'Visit Projects',
    link: "/projects",
    img: './images/developer-activity.svg',
    alt: 'Github Activity',
    dark: false,
    primary: false,
    darkText: true
}

export const HomeObjTwo : HomeObject = {
    id: 'teamwork',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Team Work',
    headline: 'Open to new collaborations and ideas',
    description: 'If you like my work and want to collaborate, feel free to contact me on LinkedIn or. I am always open to new ideas and I am always looking for new ways to improve my skills.',
    buttonLabel: 'Visit Github',
    imgStart: true,
    img: './images/teamwork.svg',
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: true,
    link: "https://github.com/Xaninho"
}