<template>
    <div class="search_bar flex items-center gap-4 h-8 justify-between">
        <div class="flex h-full gap-2">
            <input class="pl-1 rounded-md h-full" type="text" v-model="store.searchInput"
                @keyup.enter="$emit('searchPokemon')">
            <button @click="$emit('searchPokemon')"
                class="bg-white flex justify-center items-center rounded-lg h-full aspect-square">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>

        <button v-if="objIsNotEmpty(store.pokemon) && store.showPokemon" class="bg-green-400 px-2 rounded-md h-full"
            @click="$emit('catchPok')">
            Catch it!
        </button>
        <button v-else-if="store.showSelectedPokemon" @click="$emit('remPok')"
            class="bg-green-400 px-2 rounded-md h-full">
            Release
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
        },

    }
}
</script>

<style scoped></style>