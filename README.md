# notes for Thursday morning:
Totally fine if you guys want to start from where we left off yesterday if I'm not in early, but we have this version for backup if needed:

I might come in a little late as I was working on this late into the night. I'm tired.  It's messy but Combat works fine and output to console should mostly make sense. Pick the WARRIOR for now, that's what I was testing with, shouldn't matter but I had better luck with him? I don't know.  

updating the scores on the DOM from -combatInitialized- (thats the object that the continuing action changes until the monster dies) as combat is going on should be one of the things that still needs to be done.

There will probably be "ghost" messages left behind that will need to be set back to null or something, but should be a minor issue. Probably will just reset the whole CombatRound object after death or run away. 

onLoad doesn't need to be used for all of it as the buttons wont be clicked too fast.  Stuff might not be in the right place in index but whatever for now.

Hero is immortal for now so we can test.  Monster is too basically if you want to keep killing it for testing.  

AfterActionReport (end combat object) could be used for an end screen after monster killed, or not.  But that's where combat buttons should be told to disappear. 

most of the odds stuff in the combatRound.js I can tweak fairly quickly.  I should be in by 10am at the latest. 


# (Application Name)

#### (Brief Description of Application)

#### By Zachary Cipolletta

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_
* CSS
* HTML
* JavaScript
* Node.js
* Jest
* Webpack
* npm

## Description

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_
* If using an API remember to add instructions for creating a .env file and adding it to your .gitignore + instructions for getting and setting up an API key
* Include all steps for getting a key — from the link to sign up for an account to any steps to getting an API key to the name of the API key variables that should be added to the .env file. Including accurate instructions for getting and setting up an API key

* Clone repository to your desktop
* Navigate to the top level of the directory
* Install all packages with $ npm install.
* Build the project using webpack with $ npm run build
* If you wish to lint JS files in the src folder, run $ npm run lint
* All business logic should be tested and pass Jest using $ npm run test
* Start a development server with $ npm run start

## Known Bugs

* _Any known issues_
* _should go here_

## License
MIT
