<template>
    <section v-if="pokemon && store.showPokemon" class="details flex flex-col items-center m-t gap-3">
        <div class="pokemon_img mt-8 border-8 border-slate-300 bg-white w-60 h-30 flex justify-center rounded-lg">
            <img v-if="pokemon.general_info" :src="pokemon.general_info.images.img_front" alt="" class="w-1/2">
            <img v-else src="/img/pokeball.png" alt="" class="w-1/2">
        </div>
        <div v-if="pokemon.general_info" class="info self-start bg-green-400 w-full py-4 px-2 rounded-lg">
            <div class="general_info">
                <ul class="text-sm">
                    <li><strong>Name:</strong> {{ pokemon.general_info.name }}</li>
                    <li><strong>Type:</strong> {{ pokemon.general_info.type }}</li>
                    <li><strong>Height:</strong> {{ pokemon.general_info.height }}</li>
                    <li><strong>Weight:</strong> {{ pokemon.general_info.weight }} lbs</li>
                </ul>
            </div>
            <div v-if="pokemon.stats" class="stats mt-4">
                <ul class="text-sm">
                    <li v-for="stat in pokemon.stats" class="w-full flex gap-2 items-center h-8">
                        <div class="w-[38%]"><strong>{{ stat.stat.name }}</strong> </div>
                        <div class="w-[200px]">
                            <div class="text text-[8px] text-right">
                                {{ stat.base_stat }} / 200
                            </div>
                            <div class="w-full bg-slate-200 h-2 rounded-lg">
                                <div class="bg-black h-2 rounded-lg" :style="{ width: stat.base_stat + 'px' }">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section v-else-if="selectedPokemon && store.showSelectedPokemon"
        class="details flex flex-col items-center m-t gap-3 font-embed">
        <div class="pokemon_img mt-8 border-8 border-slate-300 bg-white w-60 h-30 flex justify-center rounded-lg">
            <img v-if="selectedPokemon.general_info" :src="selectedPokemon.general_info.images.img_front" alt=""
                class="w-1/2">
            <img v-else src="/img/pokeball.png" alt="" class="w-1/2">
        </div>
        <div v-if="selectedPokemon.general_info" class="info self-start bg-green-400 w-full py-4 px-2 rounded-lg">
            <div class="general_info">
                <ul class="text-sm">
                    <li><strong>Name:</strong> {{ selectedPokemon.general_info.name }}</li>
                    <li><strong>Type:</strong> {{ selectedPokemon.general_info.type }}</li>
                    <li><strong>Height:</strong> {{ selectedPokemon.general_info.height }}</li>
                    <li><strong>Weight:</strong> {{ selectedPokemon.general_info.weight }} lbs</li>
                </ul>
            </div>
            <div v-if="selectedPokemon.stats" class="stats mt-4">
                <ul class="text-sm">
                    <li v-for="stat in selectedPokemon.stats" class="w-full flex gap-2 items-center h-8">
                        <div class="w-[38%]"><strong>{{ stat.stat.name }}</strong> </div>
                        <div class="w-[200px]">
                            <div class="text text-[8px] text-right">
                                {{ stat.base_stat }} / 200
                            </div>
                            <div class="w-full bg-slate-200 h-2 rounded-lg">
                                <div class="bg-black h-2 rounded-lg" :style="{ width: stat.base_stat + 'px' }">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <div v-else class="flex flex-col items-center m-t gap-3 font-embed">
        <div class="pokemon_img mt-8 border-8 border-slate-300 bg-white w-60 h-30 flex justify-center rounded-lg">
            <img src="/img/pokeball.png" alt="" class="w-1/2">
        </div>
    </div>
</template>

<script>
import { store } from '../store'
export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        },
        selectedPokemon: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<style scoped></style>