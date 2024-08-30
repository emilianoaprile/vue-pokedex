<template>
    <div class="search_bar flex items-center gap-4">
        <input class="pl-1" type="text" v-model="store.searchInput" @keyup.enter="$emit('searchPokemon')">
        <button @click="$emit('searchPokemon')" class="bg-white flex justify-center items-center rounded-lg p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </button>

        <button v-if="objIsNotEmpty(store.pokemon)" class="bg-red-300 px-2 rounded-md" @click="$emit('catchPok')">
            Catch it!
        </button>
    </div>
</template>

<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        objIsNotEmpty(obj) {
            return Object.keys(obj).length === 0 ? false : true
        }
    }
}
</script>

<style scoped></style>