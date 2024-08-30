<template>
    <div v-if="pokemonList.length > 0">
        <p class="text-3xl" v-for="(pokemon, i) in pokemonList" :key="pokemon.id">
            {{ pokemonList[0].general_info.name }}
        </p>
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
    created() {
        console.log(this.pokemonList)
    }
}
</script>

<style scoped></style>b