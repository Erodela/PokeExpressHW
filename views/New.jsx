const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Add a New Pokemon</h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          Image url: <input type="text" name="img" />
          e.g. http://img.pokemondb.net/artwork/mewtwo
          <input type="submit" value="Add Pokemon" />
        </form>
      </div>
    );
  }
}
module.exports = New;
