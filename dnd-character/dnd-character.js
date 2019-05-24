export const abilityModifier = input => {
    if (input < 3) {
        throw new Error('Ability scores must be at least 3');
    }
    if (input > 18) {
        throw new Error('Ability scores can be at most 18');
    }
    return Math.floor((input - 10) / 2);
};

export class Character
{
    constructor()
    {
        this.strength = Character.rollAbility();
        this.dexterity = Character.rollAbility();
        this.constitution = Character.rollAbility();
        this.intelligence = Character.rollAbility();
        this.wisdom = Character.rollAbility();
        this.charisma = Character.rollAbility();
        this.hitpoints = 10 + abilityModifier(this.constitution);
    }

    static rollAbility()
    {
        let dice = [];
        for (let i = 0; i < 4; ++i) {
            dice.push(this.rollDice());
        }

        return this.arrSum(dice) - Math.min(...dice);
    }

    static rollDice()
    {
        return Math.floor((Math.random() * 5)) + 1;
    }

    static arrSum(arr)
    {
        return arr.reduce((a, b) => a + b, 0);
    }
}

