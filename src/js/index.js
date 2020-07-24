import Search from './models/Search';
import * as searchView from './views/searchView'
import { selectors, renderLoader, clearLoader } from './views/base'

// managing a state
// 1. search object
// 2. brewery object
// 3. shopping list object
// 4. liked brewry
const state = {};

// what happens when Search is clicked
selectors.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    handleSearch();
})

const handleSearch = async () =>{
    // get query from view
    const query = searchView.getSearchInput() // todo

    if (query){
        // new search object and save in state
        state.search = new Search(query)

        // prepare ui for results
        searchView.clearSearchBox()
        searchView.clearSearchResult()
        renderLoader(selectors.searchRes)
        // search for breweries
        await state.search.getResult()

        // render result on UI
        clearLoader()
        searchView.renderResult(state.search.result)
    }
   
}




