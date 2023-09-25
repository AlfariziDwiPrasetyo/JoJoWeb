const axios = require("axios");
const { response } = require("express");

//fetch api
const urlChars = "https://stand-by-me.herokuapp.com/api/v1/characters";
const urlStands = "https://stand-by-me.herokuapp.com/api/v1/stands";

const fetchChars = async (req, res, next) => {
  try {
    const response = await axios.get(urlChars);
    req.chars = response.data;
    next();
  } catch (error) {
    throw error;
  }
};

const fetchStands = async (req, res, next) => {
  try {
    const response = await axios.get(urlStands);
    req.stands = response.data;
    next();
  } catch (error) {
    throw error;
  }
};

module.exports = { fetchChars, fetchStands };
