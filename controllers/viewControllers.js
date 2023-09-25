const { getRandomData } = require("../utils/data");
const { getSearchData } = require("../utils/searchData");

const homeController = async (req, res) => {
  const dataCharacter = await req.chars;
  const dataStand = await req.stands;
  const charactersData = getRandomData(dataCharacter, 3);
  const standsData = getRandomData(dataStand, 3);

  res.render("home", {
    title: "home",
    charactersData,
    standsData,
    layout: "layouts/main-layouts",
  });
};

const charController = (req, res) => {
  res.render("character", {
    title: "Char page",
    datas: req.chars,
    layout: "layouts/main-layouts",
  });
};

const charIdController = (req, res) => {
  charId = req.params.id;
  char = req.chars.find((data) => data.id === charId);
  res.render("charProfile", {
    title: `Character ${charId}`,
    char,
    layout: "layouts/main-layouts",
  });
};

const standController = (req, res) => {
  res.render("stands", {
    title: "Stands Page",
    datas: req.stands,
    layout: "layouts/main-layouts",
  });
};

const standIdController = (req, res) => {
  standId = req.params.id;
  stand = req.stands.find((data) => data.id === standId);
  standUser = req.chars.find((data) => data.id === stand.standUser);
  res.render("standProfile", {
    title: `Character ${standId}`,
    standUser,
    stand,
    layout: "layouts/main-layouts",
  });
};

const chapterController = (req, res) => {
  standId = req.params.id;
  stand = req.stands.find((data) => data.id === standId);
  standUser = req.chars.find((data) => data.id === stand.standUser);
  res.render("standProfile", {
    title: `Character ${standId}`,
    standUser,
    stand,
    layout: "layouts/main-layouts",
  });
};

const searchCharacterAndStandController = (req, res) => {
  searchValue = req.query.s;
  const charactersData = getSearchData(req.chars, searchValue);
  const standsData = getSearchData(req.stands, searchValue);

  res.render("search", {
    title: "search",
    searchValue,
    charactersData,
    standsData,
    layout: "layouts/main-layouts",
  });
};

module.exports = {
  homeController,
  charController,
  charIdController,
  standController,
  standIdController,
  chapterController,
  searchCharacterAndStandController,
};
