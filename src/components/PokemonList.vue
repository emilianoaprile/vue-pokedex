<template>
    <div v-if="pokemonList.length > 0" class="grid grid-cols-2 gap-8">
        <div class="pokemon_card flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg"
            v-for="(pokemon, i) in pokemonList" :key="pokemon.id">
            <img class="w-full" :src="pokemon.general_info.images.img_front" alt="">
            <p class="pokemon_name text-lg font-bold">
                {{ pokemon.general_info.name }}
            </p>
            <button @click="removePokemon(i)" class="bg-red-800 text-white px-4 py-2 rounded-lg">
                Release
            </button>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        pokemonList: {
            type: Array,
            required: true
        }
    },
    methods: {
        removePokemon(index) {
            this.pokemonList.splice(index, 1)
        }
    },
    created() {
        console.log(this.pokemonList)
    }
}
</script>

<style scoped></style>b