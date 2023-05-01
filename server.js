const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require("./models/pokemon");

// View Engine Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set("view engine", "jsx");
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set("views", "./views");

//Custom Middleware
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("Middleware running...");
  next();
});

app.get("/", (req, res) => {
  res.send(
    `Welcome to the Pokemon App! <br/> <a href="/pokemon">Go to Index</a>`
  );
});
//Index
app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//creates/receives info from new route to then create a new pokemon w/it
app.post("/pokemon", (req, res) => {
  pokemon.push(req.body);
  res.redirect("/pokemon");
});

//Show
app.get("/pokemon/:id", (req, res) => {
  res.render("Show", { pkmn: pokemon[req.params.id] });
});
//Listening
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
