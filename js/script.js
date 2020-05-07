"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
    "Help": {
        "Title": "Help",
        "Subtitle": "Some useful Links",
        "Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
    }
};

// Define the notifications used in the game
let notifications = {
    "Welcome": {
        title: "Welcome",
        body: "This is the Monogatari VN Engine",
        icon: ""
    }
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
    "Day": "Day.jpg",
    "White": "White.jpg"
};

// Define the Characters
const characters = {
/*    "u": {
        "Name": "Udin",
        "Directory": "Udin",
        "Color": "rgb(118, 125, 184)",

        "Images": {
            "angry":"Angry.png",
            "smile": "Smile.png",
            "grin": "Grin.png",
            "neutral": "Neutral.png",
            "sad": "Sad.png",
            "shock": "Shock.png"

        }
    },*/
    
    "n": {
        "Name": "Nasrudin",
        "Directory": "Nasrudin",
        "Color": "#7db876",

        "Images": {
            "angry":"Angry.jpg",
            "smile": "Happy.jpg",
            "confused": "Confused.jpg",
            "normal": "Normal.jpg",
            "sad": "Sad.jpg",
            "shock": "Shocked.jpg",
            "nervous" : "Nervous.jpg"

        }
    },
    
    "g": {
    	"Name" : "Neng",
    	"Directory" : "Neng",
    	"Color" : "#ff96fc",
    	
    	"Images": {
    		"angry":"Angry.jpg",
    		"sad":"Sad.jpg",
    		"normal":"Normal.jpg",
    		"shock":"Shock.jpg",
    		"happy":"Happy.jpg"
    	}
    },

};

let script = {
    // The game starts here.
    "Start": [
        "scene Night",

        "notify Welcome",
		{
			"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
					return true;
				},
				"Warning": "You must enter a name!"
			}
		},
        "show n normal",
        "Hai Neng...",
        "hide n",
        "show g normal",
        "g Hai juga {{player.Name}}",
        "hide g",
        "show n smile",
		"Kamu apa kabar Neng??",
		"hide n",
		"show g normal",
        "g hm.....",
        "g Baik",
        "g Kamu apa kabar {{player.Name}}",
        "hide g",
        "show n smile",
        "Baik",
        "hide n",
        "show g normal",
        "g ok",
        {
            "Choice": {
                "Dialog": "g {{player.Name}} Gimana Kalau kita jalan-jalan ke Taman ?",
                "Gay": {
                    "Text": "Ga Gua Gay",
                    "Do": "jump Gay"
                },
                "Ga": {
                    "Text": "Ga",
                    "Do": "jump Ga"
                },
                "Kabur": {
                    "Text": "Kabur",
                    "Do": "jump Kabur"
                },
                "Bunuh": {
                    "Text": "Bunuh",
                    "Do": "jump Bunuh"
                },
            }
        }
    ],

    "Gay": [
		"hide n",
		"show g normal",
		"g .....",
		"show g sad",
		"g ha.....",
		"show g angry",
		"g .......",
		"show g sad",
		"hide g",
		"scene white",
		"Dah Gitu ajjh cerita nya, Yang ngebuatnya males .... ty ",
		"end"
    ],

    "Ga": [
    	"hide n",
		"show g angry",
        "g Hmpppphhh.",
        "hide g",
        "scene white",
		"Dah Gitu ajjh cerita nya, Yang ngebuatnya males .... ty ",
		"end"
    ],
    "Kabur": [
    	"hide n",
    		"show g angry",
        "g Hmpppphhh.",
    	"g kok Kabur Sih",
    	"scene white",
    	"hide g",
		"Dah Gitu ajjh cerita nya, Yang ngebuatnya males .... ty ",
		"end"
    ],
    "Bunuh": [
    	"hide n",
		"scene white",
		"*Dor Dor Dor Dor",
		"Dah Gitu ajjh cerita nya, Yang ngebuatnya males .... ty ",
		"end"
    ]
};