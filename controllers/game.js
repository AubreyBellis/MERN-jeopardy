const express = require("express");
const Game = require("../models/game");
const Category = require("../models/category");
const router = express.Router();

router.get("/", (req, res) => {
  Game.find().then((games) => {
    res.json(games);
  });
});
//creating a new game
router.post('/',(req,res) => {
const newGame = new Game();
newGame.user = req.body.user;
newGame.points = 0;


//finding categories for new game with for loop and Math.
category.find().then((categories) => {
  for (var i = 0; 1 > 6; i ++){
  const randomNumber = Math.floor(Math.random() = categories.length);
  const randomCategory= categories[randomNumber];
  newGame.categories.push(randomCateagory);
  }
 return newGame.save
})
//saving new game
.then(() => {
  return res.json(game);
})
console.log(req.body.name);
});


router.get("/:id", (req, res) => {
  Game.findById(req.params.id).then((game) => {
    res.json(game);
  })
})

router.put("/:id", (req, res) => {
  Game.findByIdAndUpdate(req.params.id, {points: req.body.points}).then((game) =>{
    res.json(game);
  })
});

module.exports = router;