﻿# sitlinejquery


The jquery version of Situation Line. 

Situation Line is my attempt at making a "choose your own adventure" text game similar to LifeLine, but with players dealing with a hostage crisis. The game responds back in real time just like in lifeline, and the choices do matter. There are 6 unique endings for the game. 

After I wrote the game, I had difficult finding a way to write it. I just knew I didn't want to write a game that was composed of hundreds of switch statements, or even more if/then situation. 

After A LOT of research, I came across this jquery plugin for making a Finite State Machine (FSM): https://github.com/intersel/iFSM. 

I also chose to use Phonegap/Phonegap Build because they seemed to streamline the process of building your APK.  

As of 7/1/16, I have been working on redoing the app using React/Redux for building, and React-native to replace the webview experience provided by phonegap. 
