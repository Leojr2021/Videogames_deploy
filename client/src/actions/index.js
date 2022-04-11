export function getVideogames() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/videogames`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_VIDEOGAMES", payload: json });
      });
  };
}

export function searchVideogames(name) {
  return (dispatch) =>
    fetch(`http://localhost:3001/videogames?name=${name}`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "SEARCH_VIDEOGAMES",
          payload: json,
        });
      });
}

export function getVideogameById(id) {
  return (dispatch) =>
    fetch(`http://localhost:3001/videogame/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "GET_VIDEOGAME_BY_ID",
          payload: json,
        });
      });
}

export function getGenres() {
  return (dispatch) =>
    fetch(`http://localhost:3001/genres`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "GET_GENRES",
          payload: json,
        });
      });
}

export function createVideogame(obj) {
  return (dispatch) =>
    fetch("http://localhost:3001/videogame", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "CREATE_VIDEOGAME",
          payload: json,
        });
      });
}

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
    if (filteredGames.length === 0) filteredGames = ["No hay nada que mostrar"]
  };
  
  
  
  
  // let filteredGames = [];

  // if (genres === "All") {
  //   filteredGames = getState().videogames;
  // } else {
  //   console.log(genres);
  //    filteredGames = getState().videogames.filter((game) =>
  //     (game.genres).includes(genres)
  //   )
  //   console.log(filteredGames);
  //   if (filteredGames.length === 0) filteredGames = ["No hay nada que mostrar"]
  // };


  
  
  // let filteredGames = [];

  // if (genres === "All") {
  //   filteredGames = getState().videogames;
  // } else {
  //   filteredGames = getState().videogames.filter((game) =>
  //     (game.genres).includes(genres)
  //   )
  //   if (filteredGames.length === 0) filteredGames = ["No hay nada que mostrar"]
  // };
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
  if ( getState().searchVideogameByName.length>0) filtered = getState().searchVideogameByName 
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
  if ( getState().searchVideogameByName.length>0) filtered = getState().searchVideogameByName 
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