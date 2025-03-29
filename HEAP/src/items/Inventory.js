// items/Inventory.js

export class Inventory {
    constructor() {
        this.items = [];
        this.equipped = {
            weapon: null,
            armor: null,
            // etc.
        };
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    equipItem(item, slot) {
        this.equipped[slot] = item;
    }
}