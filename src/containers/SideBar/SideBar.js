import React from 'react';
import pokedexLogo from "../../../src/Pokédex_logo.png"

const sideBar = (props) => {
    let pokemonList;
    if (props.pokemonList.length > 0) {
        pokemonList = props.pokemonList.map((pokemon, index) => {
            return (
                <li key={index}
                onClick={()=>props.pokemonNameClick(pokemon)}
                className="pokemon-name-list"
                > {pokemon.name}</li>
            )
        });
    }
    
    return (<div>
        <div className="side-bar">
            <div className="pokemon-list">
            <div className="pokedex-image-container">
    <img src={pokedexLogo} alt="pokedexLogo" className="pokedex-image"/>
</div>
                <div className="search-box-container">
                    <input type="text" placeholder="Search.." className="search-box"
                    onChange={ props.pokemonSearch.bind(this) } 
                     />
                </div>
                <ul>
                    {pokemonList}
                </ul>
            </div>
        </div>
    </div>
    )
};

export default sideBar;