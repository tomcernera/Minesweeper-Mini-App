const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/highscores');

let scoresSchema = new mongoose.Schema({
  time: Number,
  size: Number,
  difficulty: String,
  player: String
});

let Scores = new mongoose.model('Scores', scoresSchema);

module.exports = {
  createScore: (score) => {
    return Scores.create(score);
  },

  readAllScores: (size, difficulty) => {
    return Scores.find({size: size, difficulty: difficulty}).sort({time: 1});
  }
}

