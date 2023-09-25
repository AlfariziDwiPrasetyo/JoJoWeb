const express = require("express");
const {
  homeController,
  charController,
  charIdController,
  standController,
  standIdController,
  chapterController,
  searchCharacterAndStandController,
} = require("../controllers/viewControllers");
const { fetchChars, fetchStands } = require("../middlewares/fetchData");

//route
const appRoute = express.Router();

//home
appRoute.get("/", fetchChars, fetchStands, homeController);

//character
appRoute.get("/char", fetchChars, charController);

//character id
appRoute.get("/char/:id", fetchChars, charIdController);

//stands
appRoute.get("/stands", fetchStands, standController);

//stand id
appRoute.get("/stand/:id", fetchStands, fetchChars, standIdController);

//chapter
appRoute.get("/chapters", chapterController);

//search characters and stands
appRoute.get(
  "/search",
  fetchChars,
  fetchStands,
  searchCharacterAndStandController
);

module.exports = appRoute;
