const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentTurn: 0,
      winner: null,
      logs: [{ who: "Game", did: "starts", value: null }],
    };
  },
  watch: {
    monsterHealth(value) {
      if (value < 0) {
        this.monsterHealth = 0;
      }
    },
    playerHealth(value) {
      if (value < 0) {
        this.playerHealth = 0;
      }
      if (value > 100) {
        this.playerHealth = 100;
      }
    },
  },
  computed: {
    playerHealthbar() {
      return { width: this.playerHealth + "%" };
    },
    monsterHealthbar() {
      return { width: this.monsterHealth + "%" };
    },
    mayUseSpecial() {
      return this.currentTurn % 3 !== 0 || this.currentTurn === 0;
    },
  },
  methods: {
    attackMonster() {
      const attackValue = generateRandom(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogs("Player", "attacks", attackValue);
      this.roundCheck();
    },
    attackPlayer() {
      const attackValue = generateRandom(8, 14);
      this.playerHealth -= attackValue;
      this.addLogs("Monster", "attacks", attackValue);
    },
    specialAttack() {
      const attackValue = generateRandom(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogs("Player", "attacks", attackValue);
      this.roundCheck();
    },
    heal() {
      const healValue = generateRandom(10, 20);
      this.playerHealth += healValue;
      this.addLogs("Player", "heals", healValue);
      this.roundCheck();
    },
    roundCheck() {
      this.currentTurn++;
      if (this.monsterHealth <= 0) {
        this.addLogs("Player", "wins", null);
        this.winner = "Player";
      }
      this.attackPlayer();
      if (this.playerHealth <= 0) {
        this.addLogs("Monster", "wins", null);
        this.winner = "Monster";
      }
    },
    restart() {
      this.winner = null;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentTurn = 0;
      this.logs = [{ who: "Game", did: "starts", value: null }];
    },
    surrender() {
      this.addLogs("Monster", "wins", null);
      this.winner = "Monster";
    },
    addLogs(who, did, value) {
      console.log(who, did, value);
      this.logs.unshift({
        who: who,
        did: did,
        value: value,
      });
    },
  },
});

app.mount("#game");
