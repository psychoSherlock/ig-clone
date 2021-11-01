import USERS from "./users";

const POSTS = [
  {
    username: USERS[0].username,
    profilePic: USERS[0].profilePic,
    postUri: "https://i.imgur.com/VevYblJ.jpg",
    caption: "Just hanging out on my Spaceship 😜 🚀",
    likes: 7250,
    comments: [
      {
        user: "nikola.tesla",
        comment:
          "You Stole my idea Elon 😒. Dont forget that you are sitting there because of me 😐",
      },
      {
        user: "grimes_musk",
        comment:
          "Way to go Elon 😍. Looking forward for having a breakup so that finally you can have that time with your work that you were talking about 😒",
      },
      {
        user: "psychoSherlock",
        comment: "🤯 😍",
      },
    ],
  },
  {
    username: USERS[4].username,
    profilePic: USERS[4].profilePic,
    postUri: "https://i.imgur.com/i3VqRAO.jpg",
    caption: "Today's gonna be my first shooting 🥳 I am so exited",
    likes: 227,
    comments: [],
  },
  {
    username: USERS[3].username,
    profilePic: USERS[3].profilePic,
    postUri: "https://i.imgur.com/K6N3I1D.png",
    caption:
      "Hanging out with my best fatty friend Alan 🧔🏽 and his fu**ing wolf 🐺 gang ",
    likes: 4,
    comments: [
      {
        user: "stu_the_dentist111",
        comment: "Speaking of which, does anyone know where my tooth is  😩",
      },
    ],
  },
];

export default POSTS;
