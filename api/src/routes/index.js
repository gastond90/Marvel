const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { API_KEY } = process.env;
const { HASH } = process.env;
const { TS } = process.env;

router.get("/characters", async (req, res, next) => {
  try {
    const { name } = req.query;
    if (name) {
      const nameInApi = ( 
        await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=1000&apikey=d90d6140617c322226c93ba1f1dd331b&hash=41b216fca4b71519e41e8e0763cd75f2`
        )
      ).data.data.results;

      let chars = [];

      if (nameInApi.length > 0) {
        chars = nameInApi.map((character) => {
          return {
            id: character.id,
            name: character.name,
            image: character.thumbnail,
            description: character.description,
          };
        });
      }

      chars.length === 0
        ? res.send(["No existe el juego"])
        : res.send(chars);
    } else {

      let characters = [];

      const api = (await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1000&apikey=d90d6140617c322226c93ba1f1dd331b&hash=41b216fca4b71519e41e8e0763cd75f2` //cada llamado me trae 20
      ))


     api.data.data.results?.forEach((ch) => {
        characters.push({
          id: ch.id,
          name: ch.name,
          image: ch.thumbnail,
          description: ch.description,
        });
      });

      res.send(characters);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/characters/:id", async (req, res, next) => {

  try {
    const { id } = req.params;

    const foundInApi = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?&ts=1000&apikey=d90d6140617c322226c93ba1f1dd331b&hash=41b216fca4b71519e41e8e0763cd75f2`
    );


    const CHAR = {
      id: foundInApi.data.data.results[0].id,
      name: foundInApi.data.data.results[0].name,
      image: foundInApi.data.data.results[0].thumbnail,
      description: foundInApi.data.data.results[0].description,
      events:foundInApi.data.data.results[0].events.items.map(i=>i.name),
      comics: foundInApi.data.data.results[0].comics.items.map(i=>i.name)
    };

    res.send(CHAR);
  } catch (error) {
    next(error);
  }
});


router.get("/comics", async (req, res, next) => {

  try {
    const { name } = req.query;
    if (name) {
      const nameInApi = ( 
        await axios.get(
          `https://gateway.marvel.com:443/v1/public/comics?&titleStartsWith=${name}&ts=1000&apikey=d90d6140617c322226c93ba1f1dd331b&hash=41b216fca4b71519e41e8e0763cd75f2`
        )
      ).data.data.results;

      console.log("NAMEINAPI", nameInApi)

      let coms = [];

      if (nameInApi.length > 0) {
        coms = nameInApi.map((co) => {
          return {
            id: co.id,
            title: co.title,
            thumbnail: co.thumbnail,
            images:co.images,
            description: co.description,
            characters: co.characters.items?.map(it=>it.name)
          };
        });
      }

      coms.length === 0
        ? res.send(["No existe el juego"])
        : res.send(coms);

    } else {

    const comicsapi = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&limit=10&ts=1000&apikey=d90d6140617c322226c93ba1f1dd331b&hash=41b216fca4b71519e41e8e0763cd75f2`
    );

    let comics = [];

    /* console.log("COMICS", comicsapi.data.data.results) */

    comicsapi.data.data.results?.forEach((co) => {
      comics.push({
        id: co.id,
        title: co.title,
        thumbnail: co.thumbnail,
        images:co.images,
        description: co.description,
        characters: co.characters.items?.map(it=>it.name)
      });
    });
    
    res.send(comics);}
  } catch (error) {
    next(error);
  }
});


router.get("/events", async (req, res, next) => {

  try {
    const { name } = req.query;
    if (name) {
      const eventInApi = ( 
        await axios.get(
          `https://gateway.marvel.com:443/v1/public/events?&nameStartsWith=${name}&ts=1000&apikey=d90d6140617c322226c93ba1f1dd331b&hash=41b216fca4b71519e41e8e0763cd75f2`
        )
      ).data.data.results;

      console.log("NAMEINAPI", eventInApi)

      let events = [];

      if (eventInApi.length > 0) {
        events = eventInApi.map((co) => {
          return {
            id: co.id,
            title: co.title,
            thumbnail: co.thumbnail,
            description: co.description,
            characters: co.characters.items?.map(it=>it.name)
          };
        });
      }

      events.length === 0
        ? res.send(["No existe el juego"])
        : res.send(events);

    } else {

    const evssapi = await axios.get(
      `https://gateway.marvel.com:443/v1/public/events?&limit=20&ts=1000&apikey=d90d6140617c322226c93ba1f1dd331b&hash=41b216fca4b71519e41e8e0763cd75f2`
    );

    let evs = [];


    evssapi.data.data.results?.forEach((co) => {
      evs.push({
        id: co.id,
        title: co.title,
        thumbnail: co.thumbnail,
        description: co.description,
        characters: co.characters.items?.map(it=>it.name)
      });
    });
    
    res.send(evs);}
  } catch (error) {
    next(error);
  }
});

router.get("/movies", async (req, res, next) => {

  try {
    const films = await axios.get(
      `https://imdb-api.com/en/API/IMDbList/k_9ucia6j0/ls000024621/?sort=list_order,asc&st_dt=&mode=detail&page=1&title_type=movie&ref_=ttls_ref_typ`
    );

    let movies = [];

   /*  console.log("MOVIES", films.data) */

    films.data.items?.forEach((it) => {
      movies.push({
        id: it.id,
        title: it.title,
        year: it.year,
        image: it.image,
        description:it.description
      });
    });
    
    res.send(movies);
  } catch (error) {
    next(error);
  }
});


router.get("/events/:id", async (req, res, next) => {

  try {
    const { id } = req.params;

    const foundInApi = await axios.get(
      `https://gateway.marvel.com:443/v1/public/events/${id}?&ts=1000&apikey=d90d6140617c322226c93ba1f1dd331b&hash=41b216fca4b71519e41e8e0763cd75f2`
    );

    const EV = {
      id: foundInApi.data.data.results[0].id,
      name: foundInApi.data.data.results[0].title,
      thumbnail: foundInApi.data.data.results[0].thumbnail,
      description: foundInApi.data.data.results[0].description,
      characters: foundInApi.data.data.results[0].characters.items?.map(it=>it.name)
    };

    res.send(EV);
  } catch (error) {
    next(error);
  }
});

router.get("/comics/:id", async (req, res, next) => {

  try {
    const { id } = req.params;

    const foundInApi = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?&ts=1000&apikey=d90d6140617c322226c93ba1f1dd331b&hash=41b216fca4b71519e41e8e0763cd75f2`
    );

    const COM = {
      id: foundInApi.data.data.results[0].id,
      name: foundInApi.data.data.results[0].title,
      thumbnail: foundInApi.data.data.results[0].thumbnail,
      images:foundInApi.data.data.results[0].images,
      description: foundInApi.data.data.results[0].description,
      characters: foundInApi.data.data.results[0].characters.items?.map(it=>it.name)
    };


    res.send(COM);
  } catch (error) {
    next(error);
  }
});

router.get("/movies/:id", async (req, res, next) => {

  try {
    const { id } = req.params;

   /*  console.log("ELID", id) */

    const foundInApi = await axios.get(
      `https://imdb-api.com/en/API/Title/k_9ucia6j0/${id}/Images,Trailer,`
    );

    const MOV = {
      id: foundInApi.data.id,
      title: foundInApi.data.title,
      year:foundInApi.data.year,
      runtime:foundInApi.data.runtimeStr,
      image: foundInApi.data.image,
      rating: foundInApi.data.imDbRating,
      plot: foundInApi.data.plot,
      directors: foundInApi.data.directors,
      cast: foundInApi.data.actorList.map(ac=>ac.name),
      genres: foundInApi.data.genreList.map(ac=>ac.value),
      images:foundInApi.data.images.items.map(ac=>ac.image),
      trailer:foundInApi.data.trailer.linkEmbed

    };

    
    res.send(MOV);
  } catch (error) {
    next(error);
  }
});



router.get("/videogames", async (req, res, next) => {
  try {
   
      let videogames = []; 

      //y ahora me traigo todos (100) de la api
      const api = axios.get(
        `https://api.rawg.io/api/games?search=marvel&key=d47fdbc78fde4d58b3ae93f7ac2c6b7e&page=2` //cada llamado me trae 20
      );
      /* const api2 = axios.get(
        `https://api.rawg.io/api/games?search=marvel&key=d47fdbc78fde4d58b3ae93f7ac2c6b7e&page=2`
      );
      const api3 = axios.get(
        `https://api.rawg.io/api/games?search=marvel&key=d47fdbc78fde4d58b3ae93f7ac2c6b7e&page=3`
      ); */
     /*  const api4 = axios.get(
        `https://api.rawg.io/api/games?search=marvel&key=${API_KEY}&page=4`
      );
      const api5 = axios.get(
        `https://api.rawg.io/api/games?search=marvel&key=${API_KEY}&page=5`
      ); */

      let promesas = await Promise.all([api, /* api2, api3, */ /* api4, api5 */]);

      PageOne = promesas[0].data.results;
      /* PageTwo = promesas[1].data.results;
      PageThree = promesas[2].data.results; */
      /* PageFour = promesas[3].data.results;
      PageFive = promesas[4].data.results; */

      let todo = PageOne/* .concat(PageTwo)
        .concat(PageThree) */
        /* .concat(PageFour)
        .concat(PageFive); */

      todo.forEach((videogame) => {
        
        videogames.push({
          id: videogame.id,
          name: videogame.name,
          image: videogame.background_image,
          released: videogame.released,
          description: videogame.description,
          rating: videogame.rating,
          platforms: videogame.platforms?.map((pl) => pl.platform.name),
          genres: videogame.genres?.map((gen) => gen.name),
        });
      });

      res.send(videogames); // mando el array con todo lo pusheado
    }
   catch (error) {
    next(error);
  }
});

router.get("/videogames/:id", async (req, res, next) => {
  //si busco un game por ID
  try {
    const { id } = req.params;

      const foundInApi = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=d47fdbc78fde4d58b3ae93f7ac2c6b7e`
      );

      const APIGAME = {
        
        id: foundInApi.data.id,
        name: foundInApi.data.name,
        image: foundInApi.data.background_image,
        description: foundInApi.data.description,
        released: foundInApi.data.released,
        rating: foundInApi.data.rating,
        platforms: foundInApi.data.platforms.map((p) => p.platform.name),
        genres: foundInApi.data.genres.map((g) => g.name),
      };

      res.send(APIGAME); 
    
  } catch (error) {
    next(error);
  }
});



module.exports = router;
