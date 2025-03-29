// systems/CombatSystem.js

import { Enemy } from '../characters/Enemy.js';
import { Character } from '../characters/Character.js';

export function calculateRiskFactor(player, enemy) {
    const baseRisk = enemy.stats.attack / player.stats.defense;
    const randomFactor = 1 + (Math.random() * 0.5 - 0.25);
    return baseRisk * randomFactor;
}

export function combatScenario(player, enemy) {
    const risk = calculateRiskFactor(player, enemy);
    const successRate = Math.max(0, 1 - risk / 5);

    console.log(`\nEncounter: ${enemy.name}`);
    console.log(`Approx success rate to fight: ${(successRate * 100).toFixed(1)}%`);
    // in a real game, gather user input
    const userChoice = "fight"; // placeholder

    if (userChoice === "fight") {
        while (player.stats.health > 0 && enemy.stats.health > 0) {
            let dmgToEnemy = Math.max(0, player.stats.attack - enemy.stats.defense);
            enemy.stats.health -= dmgToEnemy;

            if (enemy.stats.health <= 0) {
                console.log(`You defeated ${enemy.name}!`);
                player.gainExperience(50);
                break;
            }

            let dmgToPlayer = Math.max(0, enemy.stats.attack - player.stats.defense);
            player.stats.health -= dmgToPlayer;

            if (player.stats.health <= 0) {
                console.log("You died...");
                break;
            }
        }
    } else {
        const runChance = Math.random();
        if (runChance < 0.5) {
            console.log("You managed to run away!");
        } else {
            console.log("Failed to run...");
            let dmgToPlayer = Math.max(0, enemy.stats.attack - player.stats.defense);
            player.stats.health -= dmgToPlayer;
            if (player.stats.health <= 0) {
                console.log("You died...");
            }
        }
    }
}