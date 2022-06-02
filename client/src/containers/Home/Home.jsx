import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentPage, getVideogames, mayorcuatro, resetAll } from "../../actions/index";
import Videogames from "../../components/Videogames/Videogames";
import { Pagination } from "../../components/Pagination/Pagination";
import { Filter } from "../Filter/Filter";
import "./Home.css";
import NotFound from "../../components/NotFound/NotFound";

export default function Home() {
  const dispatch = useDispatch();

  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    videogames.length===0 && dispatch(resetAll());
    videogames.length===0 && dispatch(getVideogames());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Filtrado y Ordenado
  let allVideogames;
  filterBy === "All" && orderBy === "Select"
    ? (allVideogames = videogames)
    : (allVideogames = filteredVideogames);

  // Paginacion
  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  // const handle4 = (e) => {
  //   dispatch(mayorcuatro())
  //   // dispatch(genderState(e.target.value))
  //   // paginate(e, 1);
  // };


  
  

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(15);

  let lastCardPerPage = page * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  let currentPageGames = allVideogames.slice(firtsCardPerPage, lastCardPerPage);
  // console.log(currentPageGames);


  useEffect(()=>{
    dispatch(currentPage(page))
  },[page])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="home">
      <Filter paginate={paginate} />
      
      {allVideogames[0]===404 ? <NotFound /> 
      :
      <>
      <Videogames videogames={currentPageGames} />
      <Pagination
        videogamesPerPage={videogamesPerPage}
        totalVideogames={allVideogames.length}
        paginate={paginate}
      />
      </>
      }
      
     
      
    </div>
  );
};