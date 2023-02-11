const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin(defenderObject) {
    const attackerValues = Object.values(this);
    const defenderValues = Object.values(defenderObject);
    let captureChance = 0;
    attackerValues.forEach((value, index) => {
      if (value > defenderValues[index] && typeof value === 'number') {
        captureChance++;
      }
    });

    return [captureChance, defenderValues.length];
  },
  improveArmy() {
    Object.entries(this).forEach((item) => {
      const key = item[0];
      const value = item[1];
      if (typeof value === 'number') {
        this[key] = value + 5;
      }
    });
  },
  attack(defender) {
    const chancesArr = this.checkChancesToWin(defender);
    const ourArmyChances = chancesArr[0];
    const maximumChances = chancesArr[1];
    const seventyPercentChances = Math.round(maximumChances * 0.7);
    if (ourArmyChances < seventyPercentChances) {
      alert(`Наши шансы равны ${ourArmyChances}/${maximumChances}`);
      this.improveArmy();
    } else {
      alert('Мы усилились! Мы несомненно победим! Наши шансы высоки');
    }
  },
};

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
