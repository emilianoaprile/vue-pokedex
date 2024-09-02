import { reactive } from 'vue'
export const store = reactive({
  pokemon: {},
  searchInput: '',
  pokemonList: [],
  showPokemon: false,
  showSelectedPokemon: false,
  selectedPokemon: null,
  notFound: false,
  caught: false,
})
