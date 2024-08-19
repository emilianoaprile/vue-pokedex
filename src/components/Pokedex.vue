<template>
    <div class="pokedex mt-44">
        <div class="custom_container mx-auto">
            <div class="wrapper flex bg-red-400 justify-between p-4">
                <div class="pokedex_left">
                    <SearchBar />
                    <Details />
                </div>
                <div class="pokedex_right">
                    <PokemonList />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Details from './Details.vue';
import PokemonList from './PokemonList.vue';
export default {
    components: {
        SearchBar,
        Details,
        PokemonList
    },

}
</script>

<style scoped>
.custom_container {
    width: 800px;
}
</style>