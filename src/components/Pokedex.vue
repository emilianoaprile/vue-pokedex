<template>
    <div class="pokedex mt-2 custom_height">
        <div class="custom_container mx-auto h-full">
            <div class="wrapper flex bg-red-500 justify-between p-4 gap-3 h-full">
                <div class="pokedex_left w-1/2 border border-black p-3">
                    <SearchBar @searchPokemon="fetchPokemon()" @catchPok="catchPokemon()" />
                    <Details :pokemon="store.pokemon" />
                </div>
                <div class="pokedex_right w-1/2 border border-black p-3">
                    <PokemonList :pokemonList="store.pokemonList" />
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
                    })
                    .catch(err => {
                        console.log('Pokemon non trovato', err)
                    })
            }
            store.searchInput = ''
        },
        catchPokemon() {
            if (Object.keys(store.pokemon).length > 0) {
                store.pokemonList.push(store.pokemon)
            }
            console.log('pokemon pushato')
        }
    },
    created() {
        this.fetchPokemon()
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