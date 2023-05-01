const React = require("react");
const p = require("../models/pokemon");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#DB5461",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>See all the Pokemon!</h1>
        <ul>
          {pokemon.map((pkmn, i) => {
            return (
              <li>
                <a href={`/pokemon/${i}`}>
                  {pkmn.name.charAt(0).toUpperCase() + pkmn.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
