// characters/Enemy.js

export class Enemy {
    constructor(name, stats, weaknesses, strengths) {
        this.name = name;
        // stats might be { health, attack, defense }
        this.stats = stats;
        // e.g., arrays or objects describing weaknesses & strengths
        this.weaknesses = weaknesses;
        this.strengths = strengths;
    }
}