const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const appRoute = require("./routes/appRoute");
const port = process.env.PORT || 80;

app = express();
app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(expressLayouts);

// const urlChars = "https://stand-by-me.herokuapp.com/api/v1/characters";
// const urlStands = "https://stand-by-me.herokuapp.com/api/v1/stands";
// let dataChars = null;
// let dataStands = null;

// // fetch data chars by middleware
// const fetchChar = (req, res, next) => {
//   if (!dataChars) {
//     fetch(urlChars)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         dataChars = data;
//         // req.dataChars = data
//         next();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     dataChars = dataChars;
//     next();
//   }
// };

// // fetch data stands by middleware
// const fetchStands = (req, res, next) => {
//   if (!dataStands) {
//     fetch(urlStands)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         dataStands = data;
//         // req.dataStands = data
//         next();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     dataStands = dataStands;
//     next();
//   }
// };

//route
app.use("/", appRoute);

// // home route
// app.get("/", fetchChar, fetchStands, (req, res) => {
//   const charactersData = getRandomData(dataChars, 3);
//   const standsData = getRandomData(dataStands, 3);

//   res.render("home", {
//     title: "home",
//     charactersData,
//     standsData,
//     layout: "layouts/main-layouts",
//   });
// });

// // char route
// app.get("/char", fetchChar, (req, res) => {
//   res.render("character", {
//     title: "Char page",
//     datas: dataChars,
//     layout: "layouts/main-layouts",
//   });
// });

// // char id route
// app.get("/char/:id", fetchChar, (req, res) => {
//   charId = req.params.id;
//   char = dataChars.find((data) => data.id === charId);
//   res.render("charProfile", {
//     title: `Character ${charId}`,
//     char,
//     layout: "layouts/main-layouts",
//   });
// });

// // stands route
// app.get("/stands", fetchStands, (req, res) => {
//   res.render("stands", {
//     title: "Stands Page",
//     datas: dataStands,
//     layout: "layouts/main-layouts",
//   });
// });

// // stands id route
// app.get("/stand/:id", fetchStands, fetchChar, (req, res) => {
//   standId = req.params.id;
//   stand = dataStands.find((data) => data.id === standId);
//   standUser = dataChars.find((data) => data.id === stand.standUser);
//   res.render("standProfile", {
//     title: `Character ${standId}`,
//     standUser,
//     stand,
//     layout: "layouts/main-layouts",
//   });
// });

// app.get("/chapters", (req, res) => {
//   res.render("chapter", { layout: "layouts/main-layouts", title: "Chapters" });
// });

// // search characters and stands
// app.get("/search", fetchChar, fetchStands, (req, res) => {
//   searchValue = req.query.s;
//   const charactersData = getSearchData(dataChars, searchValue);
//   const standsData = getSearchData(dataStands, searchValue);

//   res.render("search", {
//     title: "search",
//     searchValue,
//     charactersData,
//     standsData,
//     layout: "layouts/main-layouts",
//   });
// });

// not found page
app.use("/", (req, res) => {
  res.render("404", { title: "NOT FOUND", layout: "layouts/main-layouts" });
});

// server
app.listen(port, () => {
  console.log("Server Running.....");
});
