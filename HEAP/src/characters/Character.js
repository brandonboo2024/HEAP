// characters/Character.js

export class Character {
    constructor(name, level, stats) {
        this.name = name;
        this.level = level;
        // stats could include: { health, maxHealth, attack, defense, speed, etc. }
        this.stats = stats;
        // track experience for leveling up
        this.experience = 0;
        // track active quests
        this.activeQuests = [];
    }

    distributeStatPoints(pointsToDistribute) {
        // e.g., give user a UI to pick which stats to increase
        this.stats.maxHealth += pointsToDistribute;
        this.stats.health = this.stats.maxHealth;
    }

    gainExperience(amount) {
        this.experience += amount;
        const xpForNextLevel = this.level * 100; // simplistic formula
        if (this.experience >= xpForNextLevel) {
            this.level++;
            this.experience -= xpForNextLevel;
            this.distributeStatPoints(5);
        }
    }
}