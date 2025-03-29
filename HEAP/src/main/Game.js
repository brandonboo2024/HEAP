// main/Game.js

// Import characters
import { Character } from '../characters/Character.js';

// Import items & inventory
import { Inventory } from '../items/Inventory.js';

// Import systems
import { GameMap, PlayerPosition } from '../systems/MapSystem.js';
import { combatScenario } from '../systems/CombatSystem.js';
import { Enemy } from '../characters/Enemy.js';
import { Quest } from '../systems/QuestSystem.js';

// Suppose we use 'prompt-sync' for reading user input in Node.
import promptSync from 'prompt-sync';
const prompt = promptSync();  // initialize it

export class Game {
    constructor() {
        // Create a player
        this.player = new Character('Hero', 1, {
            health: 20,
            maxHealth: 20,
            attack: 5,
            defense: 2,
        });

        // Create an inventory
        this.inventory = new Inventory();

        // Create map
        this.gameMap = new GameMap(10, 10);

        // Player position
        this.playerPos = new PlayerPosition(5, 5);

        // Quests
        this.quests = [
            new Quest(
                'Goblin Trouble',
                'Defeat 5 goblins in the forest.',
                { kills: 0, required: 5 },
                { xp: 50 }
            ),
        ];
    }

    // Instead of auto-moving right, we read user input for movement.
    update() {
        console.log("\nEnter movement direction (W/A/S/D), or 'Q' to quit:");
        const input = prompt("> ").toUpperCase();

        let dx = 0;
        let dy = 0;

        switch (input) {
            case 'W':
                dy = -1; // move up
                break;
            case 'S':
                dy = 1;  // move down
                break;
            case 'A':
                dx = -1; // move left
                break;
            case 'D':
                dx = 1;  // move right
                break;
            case 'Q':
                // allow user to quit the game loop
                console.log("Exiting the game...");
                // returning false signals we want to end the main loop
                return false;
            default:
                console.log("Invalid input. Use W/A/S/D or Q.");
        }

        // Attempt movement
        if (dx !== 0 || dy !== 0) {
            this.playerPos.move(dx, dy, this.gameMap);
        }

        return true;  // returning true means continue the loop
    }

    render() {
        // Basic text representation
        console.log(`Player is at (${this.playerPos.x}, ${this.playerPos.y})`);
    }

    handleEncounter() {
        // Random chance of encountering an enemy
        const chance = Math.random();
        if (chance < 0.3) {
            // create an Enemy
            const enemy = new Enemy(
                'Goblin',
                { health: 10, attack: 3, defense: 1 },
                ['fire'],
                ['poison']
            );
            combatScenario(this.player, enemy);
        }
    }

    gameLoop() {
        while (this.player.stats.health > 0) {
            // Get user movement input
            const continueGame = this.update();
            // If user chose 'Q' or an exit condition, break out
            if (!continueGame) break;

            // Then render position & handle encounters
            this.render();
            this.handleEncounter();
        }

        console.log("\nGame Over (player health <= 0 or user quit).");
    }
}
