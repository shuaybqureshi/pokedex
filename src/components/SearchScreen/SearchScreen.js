import React, { Component } from 'react';
import SideBar from "../../containers/SideBar/SideBar";
import PokemonCard from "../../containers/PokemonCard/PokemonCard";
import axios from 'axios';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.orginalPokemonList = []; 
    }

    state = {
        pokemonList: [],
        selectedPokemon: [],
        showPokemoncard: false,
        showMobileNav:false
    }
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100').then(response => {
            this.orginalPokemonList = response.data.results;
            this.setState({ pokemonList: response.data.results });
        });
    }

    pokemonSearch = (event) => {
        let searchValue = event.target.value;
        let newPokemonObj = [];
        this.orginalPokemonList.map((pokemon) => {
            if (pokemon.name.includes(searchValue)) {
                newPokemonObj.push(pokemon);
            }
            return null;
        })
        this.setState({ pokemonList: newPokemonObj });
    }
    pokemonClickHanlder = (pokemon) => {
        console.log("yeo")
        axios.get(pokemon.url).then(response => {
        this.setState({ selectedPokemon: response.data, showPokemoncard: true });
        this.mobileToggleCloseHandler();
        });
    }
    mobileToggleHanlder =() =>{
        this.setState({showMobileNav:true})
    }
    mobileToggleCloseHandler =() =>{
        this.setState({showMobileNav:false})
    }

    render() {

        return (
            <div>
                <SideBar
                    pokemonSearch={this.pokemonSearch}
                    pokemonList={this.state.pokemonList}
                    pokemonNameClick={this.pokemonClickHanlder}
                    mobileToggleClick={this.mobileToggleHanlder}
                    showMobileNav={this.state.showMobileNav}
                    mobileToggleClose={this.mobileToggleCloseHandler}
                />
                <div className="search-page-right-container">
                    <h1 >Shuayb's Pokédex</h1>

                    {this.state.showPokemoncard ?
                        <PokemonCard 
                            selectedPokemon={this.state.selectedPokemon}
                        />
                        :null
                    }
                </div>
            </div>
        )
    }
}

export default SearchScreen;
