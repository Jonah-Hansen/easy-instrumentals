# 🎹 [Easy Instrumentals](https://easy-instrumentals.vercel.app/)
## by [Jonah Hansen](https://linkedin.com/in/jonah-hansen-dev)
 Capstone project for [BrainStation](https://brainstation.io/) Web Development Bootcamp

---

## The Problem: 
Many people are interested in the idea of producing their own music, but the barrier to entry is quite high. Not only does one need to commit to purchasing a potentially expensive Digital Audio Workstation, but the learning curve of such sophisticated software is quite steep. Additionally, without a sound understanding of music theory, it can be difficult to create melodies and chord progressions from scratch, so those who just want to make music to sing or play along to end up giving up the idea of making something themselves. 

## the Solution:
Easy Instrumentals aims to solve this problem by providing an accessible, simplified workstation with limited features to lower the learning curve, and the ability to drag and drop in pre-made tracks that can be mixed, matched and modified, relieving the stress of making an entire song from scratch.

Easy Instrumentals is designed for music producers, musicians, singers, and anyone interested in creating music themselves. It is simple enough that little knowledge of music theory or the function of other DAWs is required; but flexible enough that those with more experience can achieve the effects they want within the designed limitations. Easy Instrumentals provides an easily accessible and simplified outlet for prototyping new music.

## Tech Stack:
Easy instrumentals is built using React, with Sass and MUI for styling and Howler for audio processing.

it is connected to a Supabase Backend-as-a-service project that hosts a PostgreSQL database and static file storage.

## Features:
- drag and drop pre-made tracks
- listen to a 5s sample of a track
- play all active tracks simultaneously
- control master volume and individual track volume 
- keyboard controls for pause/play and stop 
- visual representation of playback position

### see the deployed production build on Vercel here: https://easy-instrumentals.vercel.app/
to run easy instrumentals locally in a development environment:
1. download or clone this repo.
2. create a supabase project with at minimum
    - a table called 'tracks' with fields id(UUID), title(string), and type(string: 'melody', 'chords', 'bass', or 'drums')
    - a public storage bucket to hold wav files named according the the id of the associated track in the database
    - note: you may need to configure a policy for the public bucket to allow anonymous users to access wav files. (you can use the template for images and just replace the file extension from jpg to wav)
3. create a .env based on .env-example, replacing the values with the api key and url from your supabase project
4. run npm install in the project directory to install the dependencies
5. run npm start in the project directory to launch the app. it will automatically open your browser to http://localhost:3000

## What I learned building Easy Instrumentals:
- using [react-DnD](https://github.com/react-dnd/react-dnd) for drag and drop functionality
- api usage with a backend-as-a-service like [Supabase](https://supabase.com/)
- using [MUI](https://mui.com/) components and icons, as well as custom SVG icons as react components
- adding event listeners for keyboard shortcuts
- audio processing and playback with [react-howler](https://github.com/thangngoc89/react-howler), a react wrapper for [HowlerJS](https://github.com/goldfire/howler.js/)
- deploying a front-end app with [Vercel](https://vercel.com)

## future development
post bootcamp, I'd like to rebuild easy instrumentals as a react-typescript project, and use midi data instead of audio files for tracks.

while more complicated to implement, using midi data will make it easier to implement greater functionality with features such as:
- modifying virtual instruments used by the tracks
- global control over key and bpm
- editing notes within the tracks

once functional, easy instrumentals could be made into a full social platform where users can log in, upload their own midi tracks, create songs and download the midi or compiled audio file, and share their creations.
