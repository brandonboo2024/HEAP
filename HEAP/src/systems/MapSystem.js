// systems/MapSystem.js

export class Tile {
    constructor(x, y, terrain) {
        this.x = x;
        this.y = y;
        this.terrain = terrain; // e.g., 'grass', 'wall'
        this.isPassable = (terrain !== 'wall');
    }
}

export class GameMap {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = [];
        this.generateMap();
    }

    generateMap() {
        for (let y = 0; y < this.height; y++) {
            const row = [];
            for (let x = 0; x < this.width; x++) {
                const terrain = Math.random() > 0.8 ? 'wall' : 'grass';
                row.push(new Tile(x, y, terrain));
            }
            this.tiles.push(row);
        }
    }

    isPassable(x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return false;
        }
        return this.tiles[y][x].isPassable;
    }
}

export class PlayerPosition {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(dx, dy, gameMap) {
        const newX = this.x + dx;
        const newY = this.y + dy;
        if (gameMap.isPassable(newX, newY)) {
            this.x = newX;
            this.y = newY;
        } else {
            console.log("You can't move there!");
        }
    }
}