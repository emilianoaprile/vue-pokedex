<template>
    <div class="search_bar flex items-center gap-4">
        <input type="text" v-model="searchInput">
        <button @click="fetchPokemon()" class="bg-white flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            pokemon: [],
            searchInput: ''
        }
    },
    methods: {
        fetchPokemon() {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${this.searchInput}/`)
                .then(res => {
                    console.log(res.data)
                })
        }
    },
    created() {
        this.fetchPokemon()
    }

}
</script>

<style scoped></style>