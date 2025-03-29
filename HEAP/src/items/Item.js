// items/Item.js

export class Item {
    constructor(name, description, stats) {
        this.name = name;
        this.description = description;
        // stats might be { attackBonus, defenseBonus, etc. }
        this.stats = stats;
    }
}