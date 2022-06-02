import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAll, searchVideogames } from "../../actions/index";
import Videogames from "../../components/Videogames/Videogames";
import { Pagination } from "../../components/Pagination/Pagination";
import NotFound from "../../components/NotFound/NotFound";
import "./Search.css";
import Filter from "../Filter/Filter";

export default function Search() {
  const dispatch = useDispatch();
  
  let { name } = useParams()

  const searchVideogame = useSelector((state) => state.searchVideogameByName);
  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);

  useEffect(() => {
    dispatch(resetAll());
    dispatch(searchVideogames(name));
  }, [name]); // eslint-disable-line react-hooks/exhaustive-deps
  
  // Paginacion
  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }





  let search_filter = []

  filterBy === "All" && orderBy === "Select"
    ? (search_filter = searchVideogame)
    : (search_filter = filteredVideogames);

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(10);

  let lastCardPerPage = page * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  let currentPageGames = search_filter.slice(firtsCardPerPage, lastCardPerPage);




 


  return (


     <div className="search">
        
        <Filter paginate={paginate} />
      
      {search_filter[0]===404 ? <NotFound /> 
      :
      <>
      <Videogames videogames={currentPageGames} />
      <Pagination
        videogamesPerPage={videogamesPerPage}
        totalVideogames={search_filter.length}
        paginate={paginate}
      />
      </>
      }
        
        
        
        
        
        
        
        
        
        {/* {searchVideogame[0] === 404 ?
        <>
          <NotFound />
          
        </>
        :  <>
        
        <Filter paginate={paginate} />
        <Videogames videogames={currentPageGames} />
        <Pagination
          videogamesPerPage={videogamesPerPage}
          totalVideogames={search_filter.length}
          paginate={paginate}
        />
    
        </>
        } */}
    </div>








    // <div className="search">
    //     {searchVideogame.length > 0 ?
    //     <>
          
    //       <Filter paginate={paginate} />
    //       <Videogames videogames={currentPageGames} />
    //       <Pagination
    //         videogamesPerPage={videogamesPerPage}
    //         totalVideogames={search_filter.length}
    //         paginate={paginate}
    //       />
    //     </>
    //     : <NotFound image={"nogames"} />
    //     }
    // </div>
  )
};