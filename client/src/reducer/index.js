import {
  GET_CHARACTERS,
  ORDER_BY_NAME,
  FILTER_BY_NAME,
  FILTER_BY_GENRE,
  GET_DETAIL,
  GET_GENRES,
  GET_COMICS,
  COMIC_BY_NAME,
  GET_EVENTS,
  EVENTS_BY_NAME,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  GET_EVENT_DETAIL,
  GET_COMIC_DETAIL,
  GET_VIDEOGAMES,
  GET_GAME_DETAIL
} from "../actions/constants";

const initialSate = {
  videogames: [],
  allVideogames: [],
  genres: [],
  detail: [],
  comics: [],
  events: [],
  movies: [],
  games:[]
};

function rootReducer(state = initialSate, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      };

      case GET_VIDEOGAMES:
        return {
        ...state,
        games: action.payload,
        
        };

    case ORDER_BY_NAME:
            const orderGames = action.payload === 'az' ? 
            state.videogames.sort((a,b)=>{
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0;
            }) :
            state.videogames.sort((a,b)=>{
                if(a.name > b.name){ return -1;}
                if(b.name > a.name){ return 1; }
                return 0;

            })

            return{
                ...state,
                videogames: orderGames
            }

    case FILTER_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };

    case FILTER_BY_GENRE:
      return {
        ...state,
        videogames: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_COMIC_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_EVENT_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_GAME_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_COMICS:
      return {
        ...state,
        comics: action.payload,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    case COMIC_BY_NAME:
      return {
        ...state,
        comics: action.payload,
      };
    case EVENTS_BY_NAME:
      return {
        ...state,
        events: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
