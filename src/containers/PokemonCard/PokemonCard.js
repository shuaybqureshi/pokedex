import React from 'react';

const pokemonCard = (props) => {
    const pokemon = props.selectedPokemon;
    const imgUrl = "https://img.pokemondb.net/artwork/" + pokemon.name + ".jpg";
    console.log(pokemon.stats);

    let types = pokemon.types.map((type,index) => {
        return (
            <span key= {"type-"+index} className={"type-box " +type.type.name}>{type.type.name}</span>
        )
    });

    let stats = pokemon.stats.map((stat,index) => {
        return(
            <li className="stats" key={"stat-"+index}><strong>{stat.stat.name}: </strong>{stat.base_stat}</li>
        )
    });
    return (
        <div className="card">
            <div className="card-container">
                <h1 className="pokemon-name"><b> {pokemon.name} #{pokemon.id}</b></h1>
                <hr className="card-hr" />
                <img className="pokemon-image" src={imgUrl} alt="pokemon-1" />
                <hr className="card-hr" />
                <h3 className="types-header">Type </h3>
                <div className="padding-2"> {types}</div>
                <hr className="card-hr" />
                <h3 className="types-header">POKEMON STATS </h3>
                <ul className="Stats-list">
                    {stats}
                </ul>
            </div>
        </div>
    )
};

export default pokemonCard;