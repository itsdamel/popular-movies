const API_KEY = '60333fe76f8b9de19cc5752f48b60ee0'

const options = {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  };


async function fetching(url){
    try {
        let response = await fetch(url)
        let responseJson = await response.json()
        return responseJson.results
    } catch(err) {
        console.log(err)
    }
   
}

export{fetching}