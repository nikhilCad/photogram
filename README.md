Photogram - An Instagram Clone - Try to not call it a clone lol

To run -> npm run dev

React + Firebase + Vite + ChakraUI

ChakraUI has many common elements already defined for us to use
Vite is used because it makes stuff work fast
Firebase - backend
Zustand - Global State management for React
React-firebase-hooks - React for firebase

CHakraUI has Text, Avatar, VStack, Flexbox, Modal, Button etc

React-firebase-hooks hs many common use-case function like sign in with email, passowrd, logout, giving error codes etc

Firebase - used for authentication, storage, and database, images are stored as base64 encoded string and they have a maximum size of 2Mb

Consists of reusable components and hooks like usePreviewImg.js which is used to select new profile picture in edit profile and create new post in photogram

Zustand is mainly used used for state management, so that our changes immediately reflect, also used for chaning state between homepage and login page 
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

a@a.com a a 123456

at 5:11:18