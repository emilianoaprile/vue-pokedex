<template>
    <div class="pokedex mt-2 custom_height">
        <div class="custom_container mx-auto h-full">
            <div class="wrapper flex bg-red-500 justify-between p-4 gap-3 h-full">
                <div class="pokedex_left w-1/2 border border-black p-3">
                    <SearchBar @searchPokemon="fetchPokemon()" @catchPok="catchPokemon()" @remPok="removePokemon()" />
                    <Details :pokemon="store.pokemon" :selectedPokemon="store.selectedPokemon" />
                </div>
                <div class="pokedex_right w-1/2 border border-black p-8 overflow-y-auto">
                    <PokemonList :pokemonList="store.pokemonList" @pokemonInfo="onclickCardPokemon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Details from './Details.vue';
import PokemonList from './PokemonList.vue';
import { store } from '../store'
import axios from 'axios'
export default {
    components: {
        SearchBar,
        Details,
        PokemonList
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        fetchPokemon() {
            if (store.searchInput.length > 0) {
                axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${store.searchInput}/`)
                    .then(res => {
                        const c = res.data // c = currentEl abbreviato
                        store.pokemon = {
                            id: c.id,
                            general_info: {
                                name: c.name,
                                type: c.types[0].type.name,
                                height: c.height,
                                weight: c.weight,
                                images: {
                                    img_front: c.sprites.front_default,
                                    img_back: c.sprites.back_default
                                }
                            },
                            stats: c.stats
                        }
                        console.log(store.pokemon)
                        store.showPokemon = true

                    })
                    .catch(err => {
                        console.log('Pokemon non trovato', err)
                        store.showPokemon = false
                    })
            }
            store.searchInput = ''
        },
        catchPokemon() {
            if (Object.keys(store.pokemon).length > 0) {
                // pokemon già catturato
                const caught = store.pokemonList.some(curr => curr.id === store.pokemon.id)
                if (!caught) {
                    store.pokemonList.push(store.pokemon)
                    // console.log(`${store.pokemon.general_info.name} aggiunto al pokedex`)
                } else {
                    // console.log(`${store.pokemon.general_info.name} è già stato catturato`)
                }
            }
            store.showPokemon = false
            store.showSelectedPokemon = false
            console.log('pokemon pushato')
        },
        removePokemon() {
            const pClicked = store.pokemonList.find(curr => curr.id === store.selectedPokemon.id)
            const pIndex = store.pokemonList.indexOf(pClicked)
            store.pokemonList.splice(pIndex, 1)
            store.showSelectedPokemon = false
            console.log('pokemon rimosso')
        },
        onclickCardPokemon(pokemon) {
            store.selectedPokemon = pokemon
            store.showSelectedPokemon = true
            console.log('click sulla carda del pokemon')
        }
    }

}
</script>

<style scoped>
.custom_container {
    width: 800px;
}

.custom_height {
    height: 590px;
}
</style>