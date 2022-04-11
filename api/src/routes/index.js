const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videogame = require('./videogame')
const videogames = require('./videogames');
const genres = require('./genres')
const createVideogame = require('./createVideogame')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



  // Buscar videogame por su ID
router.use('/videogame', videogame);
  // Buscar 100 primeros videogames o ?name="nemo" busco los de ese nombre
router.use('/videogames', videogames);
  // Buscar todos los genres
router.use('/genres', genres); 
  // Creo un video juego POST
router.use('/videogame', createVideogame)





module.exports = router;
