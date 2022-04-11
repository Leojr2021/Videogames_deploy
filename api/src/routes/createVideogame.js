const { Router } = require('express');
const { Videogame, Genre } = require('../db.js');

const router = Router();

// Recibe la data colectada desde el formulario por el body
// Creo el videojuego en la db

router.post('/', async (req, res) => {
  const { name, description, image, released, rating, platforms, genres } = req.body;

//   let platformString = platforms.join(', ')
try{
    if (name){
  let gameCreated = await Videogame.create({//le paso al create el objeto con todos los atributos que quiero que tenga mi nuevo videojuego
    name,
    description,
    image, 
    released,
    rating,
    platforms ,
  })

  const genrEDB = await Genre.findAll({//en generos, buscame todos aquellos
    where: {
      name: genres,
    },
  });
  await gameCreated.addGenre(genrEDB);//a mi juego creado, le agrego algun genero

  return res.status(201).send(gameCreated );
    }
}
catch (e) {
    console.log(e);
  }

});




module.exports = router;