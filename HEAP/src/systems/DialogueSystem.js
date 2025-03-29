// systems/DialogueSystem.js

export class Dialogue {
    constructor(script) {
        this.script = script; // e.g. ["Hello", "We need your help!"]
        this.index = 0;
    }

    nextLine() {
        if (this.index < this.script.length) {
            console.log(this.script[this.index]);
            this.index++;
        } else {
            console.log("End of dialogue.");
        }
    }
}