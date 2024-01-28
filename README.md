Photogram - An Instagram Clone

To run -> npm run dev

React + Firebase + Vite + ChakraUI

ChakraUI has many common elements already defined for us to use
Vite is used because it makes stuff work fast
Firebase - backend
Zustand - Global State management for React
React-firebase-hooks - React for firebase

You must add a .env file at the root of the project with the following variables from your own firebase account

FIREBASE_APIKEY,

FIREBASE_AUTHDOMAIN,

FIREBASE_PROJECTID,

FIREBASE_STORAGEBUCKET,

FIREBASE_MESSAGINGSENDERID,

FIREBASE_APPID,

FIREBASE_MEASUREMENTID

In this project, we use Firebase used for -> Authentication, Database, and Image storage

Database is of users(followers, posts etc)

of Posts(image url, likes, comments etc)

of comments(author content, created at etc)

Has Google Login

at 3:05:40