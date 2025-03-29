// systems/QuestSystem.js

export class Quest {
    constructor(name, description, objective, reward) {
        this.name = name;
        this.description = description;
        this.objective = objective; // e.g. { kills: 0, required: 5 }
        this.reward = reward;       // e.g., { xp: 50 }
        this.isCompleted = false;
    }
}