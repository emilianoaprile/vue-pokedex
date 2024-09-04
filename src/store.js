import { reactive } from 'vue'
const loadDataFromLocalSt = (key) => {
  const data = localStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  }
  return []
}
export const store = reactive({
  pokemon: {},
  searchInput: '',
  pokemonList: loadDataFromLocalSt('pokemonList'),
  showPokemon: false,
  showSelectedPokemon: false,
  selectedPokemon: null,
  notFound: false,
  caught: false,

  catchPokemon(item) {
    if (Object.keys(item).length > 0) {
      const caught = this.pokemonList.some((c) => c.id === item.id)
      if (!caught) {
        this.pokemonList.push(item)
        localStorage.setItem('pokemonList', JSON.stringify(this.pokemonList))
      } else {
        this.caught = true
        this.showPokemon = false
      }
    }
    this.showPokemon = false
    this.showSelectedPokemon = false
  },
  removePokemon(item) {
    const pClicked = this.pokemonList.find((c) => c.id === item.id)
    const pIndex = this.pokemonList.indexOf(pClicked)
    this.pokemonList.splice(pIndex, 1)
    localStorage.setItem('pokemonList', JSON.stringify(this.pokemonList))
    this.showSelectedPokemon = false
  },
})
