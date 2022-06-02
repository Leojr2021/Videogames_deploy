import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById, resetAll, resetAllDetails } from "../../actions/index";
// import { deleteVideogame } from "../../actions/index";
import NotFound from "../../components/NotFound/NotFound";
import "./GameDetail.css";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import Image from "../../components/ImageComponent/Image";

function GameDetail() {
  const dispatch = useDispatch();
  const videogame = useSelector((store) => store.searchVideogameById);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  // const history = useHistory();
  // const { idVideogame } = useParams();

  useEffect(() => {
    // dispatch(resetAll());
    dispatch(resetAllDetails());
    dispatch(getVideogameById(id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const goBack = () => {
    navigate(-1);
  };

  // const handleDelete = () => {
  //   dispatch(deleteVideogame(id));
  //   // navigate("/home");
  // };


  return (
    <>
      {videogame.length === 0 ? (
        <Loading />
      ) : (
        <div className="detail_container">
          <div className="detail_image">
            {videogame.image === null || !videogame.image ? (
              <NotFound image={"noimage"} />
            ) : (
              <img
                className="gallery_img"
                src={videogame.image}
                alt={videogame.name}
              />
              // <Image src={videogame.image} alt={videogame.name}/>
            )}
          </div>
          <div className="detail_title">
            <h1>{videogame.name} </h1>
          </div>
          <div className="details">
            <div className="date_details">
              <h2>
                Release: <span>{videogame.released}</span>{" "}
              </h2>
            </div>

            <div className="genres_detail">
              <h2>
                Genres: <span>{videogame.genres}</span>
              </h2>
            </div>
            <div className="rating_detail">
              <h2>
                Rating: <span>{videogame.rating}</span>{" "}
              </h2>
            </div>

            <div className="platforms_datail">
              <div className="platforms">
                <h2>Platforms</h2>
                <p> {videogame.platforms}.</p>
              </div>
            </div>
          </div>
          <div className="description_detail">
            <h2>Description:</h2>
            <p>{videogame.description}</p>
          </div>

          <div className="button_detail_container">
            <Link to="/home">
              <button onClick={goBack} className="button_detail" type="submit">
                Return
              </button>
            </Link>
          </div>

          {/* {typeof videogame.id === "string" && (
          <button onClick={handleDelete} className="delete_button">
            DELETE POKEMON
          </button>
        )}  */}

        </div>
      )}
    </>
  );
}

export default GameDetail;
