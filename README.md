# HEAP

Application Name 

Roguelike RPG Game (Dungeons & Dragons Themed)


Type

Web application / Game


Motivation/Problem

RPG games tend to have long storylines & complex mechanics, making them time-consuming to develop and play. We recognise that roguelike games can offer similar experiences by incorporating randomisation, simpler controls, and progressive difficulty levels that suit needs of students and/or casual gamers. This game aims to create a small-scale roguelike RPG that is intuitive to play while still being challenging & rewarding.


What does your project set out to accomplish?

Implementation of key game development concepts


Who are your target audience?

Casual gamers / Students / People will little free time

User Stories (optional)

As a user of the application, I want to explore & interact with an open world using user input (keys, mouse, etc). When logging off, I want to save my player & world progress through a cloud database (non-locally). To make the game easy to play, there should be a (GUI) setup that provides various functions for the user’s gameplay like map, view player stats, etc. I want to have settings that can adjust certain attributes like audio volume, and also reload a saved progress.


Features

1. Character system
Display player stats
Allow user to change attribute values (stat points)

2. Item system (Inventory)
Display list of items equipped and in storage
Display details of each item (name, stats)

3. Combat system
Calculate risk factor (%-based success rate for user to choose from → fight / run)
Preview strength & weaknesses against enemy types

4. Map & Movement system
Tiled-based environment
Use tiled-map for movement

5. Quest & Dialogue system
Dialogue trees (or remain linear)
Quest tracking for plotlines

6. Saving & Loading system (cloud/local)
User to save & load a player progression (manual saves / autosaves)


Tech Stack (optional)

1. Javascript
2. Typescript
3. Phaser.js
4. Tiled API 
5. Firebase 
6. Netlify




Current Folder Structure:

HEAP/
├── classes/ 
├── src/
│   ├── characters/
│   │   ├── Character.js
│   │   └── Enemy.js
│   ├── items/
│   │   ├── Inventory.js
│   │   └── Item.js
│   ├── main/
│   │   └── Game.js
│   ├── systems/
│   │   ├── CombatSystem.js
│   │   ├── DialogueSystem.js
│   │   ├── MapSystem.js
│   │   └── QuestSystem.js
│   ├── index.js       
│   └── Main.js         
└── package.json
└── package-lock.json

