const { Dragon } = require('./dragon');

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals() {
        let arr = this.lifeGoals;
        // for (let i = 0; i < arr.length; i++) {
        //     console.log(`${this.name} likes to ${arr[i]}`);
        // }

        arr.forEach(lifeGoal => {
            console.log(`${this.name} likes to ${lifeGoal}`);
        });
    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`
    }
}

module.exports = {
    FriendlyDragon,
};
