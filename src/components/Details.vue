<template>
    <section v-if="pokemon" class="details flex flex-col items-center m-t gap-3">
        <div class="pokemon_img mt-8 border-8 border-slate-300 bg-white w-60 h-30 flex justify-center">
            <img v-if="pokemon.general_info" :src="pokemon.general_info.images.img_front" alt="" class="w-1/2">
            <img v-else src="/img/pokeball.png" alt="" class="w-1/2">
        </div>
        <div v-if="pokemon.general_info" class="info self-start bg-green-400 w-full p-2">
            <div class="general_info">
                <h1 class="text-lg font-bold">General Info:</h1>
                <ul>
                    <li><strong>Name:</strong> {{ pokemon.general_info.name }}</li>
                    <li><strong>Type:</strong> {{ pokemon.general_info.type }}</li>
                    <li><strong>Height:</strong> {{ pokemon.general_info.height }}</li>
                    <li><strong>Weight:</strong> {{ pokemon.general_info.weight }} lbs</li>
                </ul>
            </div>
            <div v-if="pokemon.stats" class="stats">
                <h1 class="text-lg font-bold">Stats:</h1>
                <ul>
                    <li v-for="stat in pokemon.stats">
                        <span><strong>{{ stat.stat.name }}:</strong> </span>{{ stat.base_stat }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    }

}
</script>

<style scoped></style>