<template>
    <div class="px-8 bg-white h-full ">
        <h1 v-if="store.pokemonList.length > 0" class="text-center text-xl font-extrabold pb-6 pt-4">Your Pokémon</h1>
        <div v-else class="text-center text-3xl font-extrabold h-full flex items-center justify-center">
            Pokedex empty!
        </div>
        <div v-if="pokemonList.length > 0" class="grid grid-cols-2 gap-8 pb-6">
            <div @click="$emit('pokemonInfo', pokemon)"
                class="pokemon_card cursor-pointer flex flex-col justify-center items-center p-2 bg-gradient-to-t from-slate-300 to-slate-100 rounded-lg hover:scale-110 hover:border border-red-500 transition-all ease-in delay-75"
                v-for="(pokemon, i) in pokemonList" :key="pokemon.id">
                <img class="w-full" :src="pokemon.general_info.images.img_front" alt="">
                <p class="pokemon_name text-lg font-bold">
                    {{ pokemon.general_info.name }}
                </p>
            </div>
        </div>
    </div>

</template>

<script>
import { store } from '../store';

export default {
    props: {
        pokemonList: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    },
}
</script>

<style scoped></style>b