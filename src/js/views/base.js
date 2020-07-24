// all the selectors will be here 

export const selectors = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResultList: document.querySelector('.results__list'),
    searchRes: document.querySelector('.results')
}

export const elementClasses = {
    loader: 'loader',
}
export const renderLoader = parent => {
    const loader = `
        <div class="${elementClasses.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader)
}

export const clearLoader = () =>{
    const loader = document.querySelector('.'+elementClasses.loader)
    if (loader) loader.parentElement.removeChild(loader)
}