import React, { useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const Homepage = () => {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)

    const getPokemon = async () => {
        let pokemonArray = [];
        for (let i = 1; i <= 151; i++){
            pokemonArray.push(await getPokemonData(i));
        }
        console.log(pokemonArray)
        setPokemon(pokemonArray)
        setLoading(false)

    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/${id}`);
        return res;

    }

  return (
    <div>

    </div>
  );
};

export default Homepage;
