import Entity from "./Entity";

class Loot extends Entity {
    action(verb, world) {
        if(verb === 'bump') {
            world.player.add(this);
            world.remove(this);
            console.log('pickup', this);
        }
        if(verb === 'drop') {
            console.log('drop', this);
        }
    }
}

export default Loot;