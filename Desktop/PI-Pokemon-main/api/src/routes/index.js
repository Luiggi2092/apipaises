const { Router } = require('express');
const { handlerPocket,
        handlerPokemons, 
        handlerPokemonsxid,
        handletPokemonxName,
        handlerPokemonsPost} = require('../handlers/pokemonhandlers');
const { handlerTypes } = require('../handlers/typeshandlers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", handlerPocket);
router.get("/pokemons", handlerPokemons);
router.get("/pokemons/:id",handlerPokemonsxid);
router.post("/pokemons",handlerPokemonsPost);
router.get("/types", handlerTypes);



module.exports = router;
