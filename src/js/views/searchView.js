import { selectors } from './base'

export const getSearchInput = () => selectors.searchInput.value;

// clearing the search field 
export const clearSearchBox = () =>{
    selectors.searchInput.value = '';
}

// clearing previous search results
export const clearSearchResult = () =>{
    selectors.searchResultList.innerHTML = '';
}
const renderBrewery = brewery =>{

    const markup = `
                <li>
                    <a class="results__link " href="#${brewery.id}">
                        <figure class="results__fig">
                            <img src="img/default.jpg" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${brewery.name}</h4>
                            <p class="results__author">${brewery.city}</p>
                        </div>
                    </a>
                </li>

    `;
    selectors.searchResultList.insertAdjacentHTML('beforeend', markup);

}

export const renderResult = breweries =>{
    breweries.forEach(renderBrewery)
}
 