import React from 'react';
import pokedexLogo from "../../../src/Pokédex_logo.png"

const sideBar = (props) => {
    let pokemonList;
    let mobileNavClass, closeSvgClass;
    if (props.pokemonList.length > 0) {
        pokemonList = props.pokemonList.map((pokemon, index) => {
            return (
                <li key={index}
                    onClick={() => props.pokemonNameClick(pokemon)}
                    className="pokemon-name-list"
                > {pokemon.name}</li>
            )
        });
    }
    console.log("showMB", props.showMobileNav)
    if (props.showMobileNav) {
        mobileNavClass = "side-bar";
        closeSvgClass = "close-toggle-btn";
    } else {
        mobileNavClass = "side-bar hide-mobile";
        closeSvgClass = "close-toggle-btn hide-mobile";
    }

    return (<div>
        <div className="mobile-only mobile-nav">
            <div className="mobile-toggle-btn" onClick={props.mobileToggleClick} >
                <svg className="svg-toggle-btn-mb" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </div>
            <div className="pokedex-image-container-mb"  >
                <img src={pokedexLogo} alt="pokedexLogo" className="pokedex-image-mb" />
            </div>
            <div className={closeSvgClass} onClick={props.mobileToggleClose}><svg className="svg-close-btn-mb" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path></svg></div>
        </div>
        <div className={mobileNavClass}>
            <div className="pokemon-list">
                <div className="pokedex-image-container">
                    <img src={pokedexLogo} alt="pokedexLogo" className="pokedex-image" />
                </div>
                <div className="search-box-container">
                    <input type="text" placeholder="Search.." className="search-box"
                        onChange={props.pokemonSearch.bind(this)}
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