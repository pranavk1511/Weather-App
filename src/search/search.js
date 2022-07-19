import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL,geoApioptions } from "../api";
const Search =({onSearchChange}) =>{

    const {seacrh, setSearch} = useState(null);
    const handleOnChange = (searchData)=>{
        setSearch(searchData);
        onSearchChange(searchData)
    }
    const loadOptions =(inputValue) => {
         return fetch('${GEO_API_URL}/cities?minPopulation=1000000namePredix=${inputValue}', geoApioptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    }
    return(
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600} 
            value={seacrh}
            onChange={handleOnChange}
            loadOptions={loadOptions}     
         />
    )
}

export default Search;