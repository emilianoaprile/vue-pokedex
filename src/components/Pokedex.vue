<template>
    <div class="h-screen flex items-center justify-center bg-green-700 font-main">
        <div class="pokedex custom_height">
            <div class="custom_container mx-auto h-full">
                <div class="wrapper flex bg-red-500 justify-between p-4 gap-3 h-full rounded-xl">
                    <div class="pokedex_left w-1/2 border border-black p-3 rounded-lg">
                        <SearchBar @searchPokemon="fetchPokemon()" @catchPok="catchPokemon()"
                            @remPok="removePokemon()" />
                        <Details :pokemon="store.pokemon" :selectedPokemon="store.selectedPokemon" />
                        <ErrorNotFound v-if="store.notFound" />
                        <AlreadyCaught v-if="store.caught" />
                    </div>
                    <div class="pokedex_right w-1/2 border border-black overflow-y-auto rounded-lg bg-white">
                        <PokemonList :pokemonList="store.pokemonList" @pokemonInfo="onclickCardPokemon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Details from './Details.vue';
import PokemonList from './PokemonList.vue';
import ErrorNotFound from './ErrorNotFound.vue';
import AlreadyCaught from './AlreadyCaught.vue';
import { store } from '../store'
import axios from 'axios'
export default {
    components: {
        SearchBar,
        Details,
        PokemonList,
        ErrorNotFound,
        AlreadyCaught
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
                        store.notFound = false
                        store.caught = false
                    })
                    .catch(err => {
                        console.log('Pokemon non trovato', err)
                        store.showPokemon = false
                        store.notFound = true
                        if (store.caught) {
                            store.caught = false
                        }
                        if (store.showSelectedPokemon) {
                            store.showSelectedPokemon = false
                        }
                    })
            }
            store.searchInput = ''
        },
        catchPokemon() {
            store.catchPokemon(store.pokemon)
        },
        removePokemon() {
            store.removePokemon(store.selectedPokemon)
        },
        onclickCardPokemon(pokemon) {
            store.selectedPokemon = pokemon
            store.showSelectedPokemon = true
            if (store.notFound) {
                store.notFound = false
            }
            if (store.caught) {
                store.caught = false
            }
            if (store.showPokemon) {
                store.showPokemon = false
            }
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