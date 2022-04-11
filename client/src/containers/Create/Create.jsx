import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createVideogame } from "../../actions/index";
// import { Verification } from "../../components/Verification/Verification";
import "./Create.css";

export default function Create() {
    const dispatch = useDispatch();
    const genres = useSelector((store) => store.genres);
    const genres1 = genres.slice(0, 10)
    const genres2 = genres.slice(10, 20)
    // const createVideogame =useSelector((store)=>store.createVideogame)
    // const history = useHistory();

    // const IDcreatedvideogame = createVideogame.id;
    
    // const push = () => {
    //     history.push("/videogames");
    //     // history.push("/blog", { fromPopup: true });
    //     history.push({
    //       pathname: "/videogames",
    //       search: {IDcreatedvideogame},
    //     //   hash: "#react",
    //     //   state: { fromPopup: true }
    //     });
    //   };
    

    const [game, setGame] = useState({
        name: "",
        description: "",
        image: "",
        released: "",
        rating: 0,
        genres: [],
        platforms: [],
    });

    // useEffect(() => {
    //     dispatch(getGenres());
    // }, []); 

    const Platfomrs1 = ["PC", "iOS", "Android", "macOS"  ]
    const Platforms2 = ["PlayStation 4", "PlayStation 5", "Xbox", "PS Vita"]




    //ONCHANGE

    const ChangeInput = (e) => {
        if (e.target.name === "genres" || e.target.name === "platforms") {
        const arr = game[e.target.name];
        setGame({
            ...game,
            [e.target.name]: arr.concat(e.target.value),
        });
    } else {
        setGame({
            ...game,
            [e.target.name]: e.target.value,
        });
    }
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
        name: game.name,
        description: game.description,
        image: game.image,
        released: game.released,
        rating: game.rating,
        genres: game.genres,
        platforms: game.platforms,
        };

        // Validaciones
        if (!obj.name) {
            alert("Name can't be empty")
            return
        }
        if (!obj.description) {
            alert("Description can't be empty")
            return
        }if (!obj.released) {
            alert("Date can't be empty")
            return
        }// }if (obj.rating > 5 || obj.rating < 0) {
        //     alert("Rating must be between 0 and 5.")
        //     return
        // }
        if(obj.genres.length===0){
            alert("Choose at least 01 Genres")
            return
        }
        if(obj.platforms.length===0){
            alert("Choose at least 01 latforms")
            return
        }




        dispatch(createVideogame(obj));
        e.target.reset();
        alert("Videogame created successfully!");
        //  dispatch(getVideogames()) 

        setGame({
            name: "",
            description: "",
            image: "",
            released: "",
            rating: 0,
            genres: [],
            platforms: [],
        });


        // push()



    };

return (

    <>
    <div className="create_container_out">
    <div className="create_container">
        <h1>Add your Videogame</h1>
        <form
            id="survey-form"
            className="form"
            noValidate
            onChange={(e) => ChangeInput(e)}
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className="top_side">
            <div className="left_side">
                
                    <div className="name_form left_side_margin">
                        <label>Name: </label>
                        <input
                        className="label"
                        type="text"
                        name="name"
                        value={game.name}
                        required
                        onChange={(e) => ChangeInput(e)}
                        ></input>
                    </div>
                    
                    <div className="date_form left_side_margin">
                        <label>Released: </label>
                        <input
                        className="label"
                        type="date"
                        name="released"
                        value={game.released}
                        required
                        onChange={(e) => ChangeInput(e)}
                        ></input>
                    </div>
                    <div className="rating_form left_side_margin">
                        <label>Rating:     {game.rating}</label>
                        {/* <input type="range" min="-10" max="10"></input> */}
                        <input
                        className="label"
                        type="range"
                        min="0"
                        max="5"
                        name="rating"
                        value={game.rating}
                        // placeholder=" 0 to 5"
                        // required
                        list="tickmarks"
                        onChange={(e) => ChangeInput(e)}
                        ></input>
                        <datalist id="tickmarks">
                            <option value="0" label="0"/>
                            <option value="1" label="1"/>
                            <option value="2" label="2"/>
                            <option value="3" label="3"/>
                            <option value="4" label="4"/>
                            <option value="5" label="5"/>

                            </datalist>
                    </div>
               
                <div className="image_form left_side_margin">
                    <label>Image URL: </label>
                    <input
                    className="imagein"
                    type="text"
                    name="image"
                    value={game.image}
                    required
                    onChange={(e) => ChangeInput(e)}
                    ></input>
                </div>

                <label>Description</label>
                <div className="botton_side">
                        
                        <textarea
                        className="left_side_margin"
                        name="description"
                        value={game.description}
                        cols="50"
                        rows="5"
                        placeholder="Write the description"
                        
                        required
                        onChange={(e) => ChangeInput(e)}
                        ></textarea>
                      
                    </div>

            </div>
                <div className="checkboxs_right">
                <h2>Genres</h2>
                    <div className="checks">
                        
                        <div className="checkbox_genres">
                            <div className="checkbox_genres_left">
                                {genres1.map((gen) => (
                                <div className="checkbox_genres_left_inside" key={gen.name}>
                                    <input
                                    type="checkbox"
                                    name="genres"
                                    value={gen.name}
                                    onChange={(e) => ChangeInput(e)}
                                    ></input>
                                    <label name={gen}>{gen.name}</label>
                                </div>
                                ))}
                            </div>
                            <div className="checkbox_genres_right">
                                {genres2.map((gen) => (
                                <div className="checkbox_genres_right_inside" key={gen.name}>
                                    <input
                                    type="checkbox"
                                    name="genres"
                                    value={gen.name}
                                    onChange={(e) => ChangeInput(e)}
                                    ></input>
                                    <label name={gen}>{gen.name}</label>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <h2>Platforms</h2>
                    <div className="checkbox_platforms">
                        
                        <div className="checkbox_platforms_left" >
                            {Platfomrs1.map((P) => (
                            <div className="checkbox_platforms_left_inside"  key={P}>
                                <input
                                type="checkbox"
                                name="platforms"
                                value={P}
                                required
                                onChange={(e) => ChangeInput(e)}
                                ></input>
                                <label name={P}>{P}</label>
                            </div>
                            ))}
                        </div>
                        <div className="checkbox_platforms_right" >
                            {Platforms2.map((P) => (
                            <div className="checkbox_platforms_right_inside" key={P}>
                                <input
                                type="checkbox"
                                name="platforms"
                                value={P}
                                required
                                onChange={(e) => ChangeInput(e)}
                                ></input>
                                <label name={P}>{P}</label>
                            </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                </div>

                
            
                
                <button className="button_create" type="submit">
                    Create
                </button>
            
        </form>
    </div>

    {/* {verification && <Verification />} */}
    </div>
    
    </>
);
}

