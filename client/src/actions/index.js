import axios from "axios"



export function getVideogames() {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/videogames`);
      if(response?.data){
        dispatch({ type: "GET_VIDEOGAMES", payload: response.data });
      }
    }
    catch(error){
      console.log(error);
    }
    
  };
}







export function searchVideogames(name) {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/videogames?name=${name}`);
      if(response?.data){
        dispatch({ type: "SEARCH_VIDEOGAMES", payload: response.data });
      }
    }
    catch(error){
      console.log(error);
    }
    
  };
}






export function getVideogameById(id) {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/videogame/${id}`);
      if(response?.data){
        dispatch({ type: "GET_VIDEOGAME_BY_ID", payload: response.data });
      }
    }
    catch(error){
      console.log(error);
    }
    
  };
}




export function getGenres() {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/genres`);
      if(response?.data){
        dispatch({ type: "GET_GENRES", payload: response.data });
      }
    }
    catch(error){
      console.log(error);
    }
    
  };
}





export const createVideogame = (data) => {
  return async function (dispatch) {
    await axios.post("http://localhost:3001/videogame", data);
    return dispatch({
      type: "CREATE_VIDEOGAME",
    });
  };
};


export const resetAll = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET",
    });
  };
};


export const filterByGenre = (genres) => (dispatch, getState) => {
  
  let filteredGames =[]

   filteredGames = getState().videogames;
  if ( getState().searchVideogameByName.length>0) filteredGames = getState().searchVideogameByName 
  if (genres !== "All"){
    console.log(genres);
    filteredGames = filteredGames.filter((game) =>
      (game.genres).includes(genres)
    )
    console.log(filteredGames);
    if (filteredGames.length === 0) filteredGames = [404]
  };
  
  
 
  dispatch({
    type: "FILTER_BY_GENRE",
    payload: {
      genres,
      videogameGenre: filteredGames,
    },
  });
};


export const orderAsc = (type) => (dispatch, getState) => {
  
  let filtered = getState().filteredVideogames;
  if (filtered.length===0) filtered = getState().videogames; 
  if ( getState().searchVideogameByName.length>0 && getState().filteredVideogames.length===0) filtered = getState().searchVideogameByName 
  console.log(filtered.length);
  let videogamesOrder = []

    if (type === "asc_name") {
      videogamesOrder = filtered.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    } else if (type === "asc_rating") {
      videogamesOrder = filtered.sort(
        (a, b) => a.rating - b.rating
      );
    }
    dispatch({
      type: "ORDER_ASC_RATING",
      payload: {
        videogamesOrder,
        name: type,
      },
    });
}


export const orderDesc = (type) => (dispatch, getState) => {
  let filtered = getState().filteredVideogames;
  if (filtered.length===0) filtered = getState().videogames 
  if ( getState().searchVideogameByName.length>0 && getState().filteredVideogames.length===0) filtered = getState().searchVideogameByName 
  console.log(filtered.length);
  let videogamesOrder = []
    
    if (type === "desc_name") {
      videogamesOrder = filtered.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
    } else if (type === "desc_rating") {
      videogamesOrder = filtered.sort(
        (a, b) => b.rating - a.rating
      );
    }
    dispatch({
      type: "ORDER_DESC_RATING",
      payload: {
        videogamesOrder,
        name: type,
      },
    });
}


export const orderByCreator = (source) => (dispatch, getState) => {
  
  let filtered = getState().videogames;
  
  if ( getState().searchVideogameByName.length>0) filtered = getState().searchVideogameByName 
  
  const videogames = filtered.filter(function (G) {
      return G.source === source
    });
  dispatch({
    type: "ORDER_BY_CREATOR",
    payload: {
      videogames,
      source,
    },
  });
};