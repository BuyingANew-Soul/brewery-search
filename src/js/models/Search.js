import axios from 'axios';

class Search {
    constructor(query) {
        this.query = query;
    }
  
    async  getResult(){
        try {
            const res = await axios(`https://cors-anywhere.herokuapp.com/https://api.openbrewerydb.org/breweries/search?query=${this.query}`)
            this.result = res.data;
            // console.log(this.result)
        }
         catch (error) {
            alert(error)
        }}
    
}

export default Search;