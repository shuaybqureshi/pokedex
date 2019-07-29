import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PokemonPage extends Component {
    render() {
        return (
            <div>
                <h1>Pokédex</h1>
                <NavLink class="back-navlink" to="/SearchScreen">
                    <button className="fc-btn">Go Back</button>
                </NavLink>
                <div className="card">
                    <div className="card-container">
                        <h4 class="pokemon-name" ><b>Bulbasaur #1</b></h4>
                        <div class="padding-2" ><span class="type-box">poison</span><span class="type-box">grass</span>
                        </div>
                        <hr class="card-hr" />
                        <hr class="card-hr" />
                        <img class="pokemon-image" src="https://img.pokemondb.net/artwork/bulbasaur.jpg" alt="pokemon-2"/>
                        <hr class="card-hr" />
                        <p class="card-pk-desc">Bulbasaur is a Pokemon that weights 69 pounds. Its base experience is 64 points.</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
export default PokemonPage;
