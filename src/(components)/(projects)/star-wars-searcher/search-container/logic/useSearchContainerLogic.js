'use client'
import { useState } from 'react';
const axios = require('axios').default;

function useSearchContainerLogic() {
    const [searchResults, setSearchResults] = useState();

    const getPersonInfo = async (searchParam) => {
      try {
        await axios.get(`https://swapi.tech/api/people/?name=${searchParam}`)
        .then( async (response) => {
          setSearchResults(response.data['result']);
        });
      } catch (error) {
        alert(error);
      }
    };

    return { searchResults, getPersonInfo };
  }
  
  export default useSearchContainerLogic;