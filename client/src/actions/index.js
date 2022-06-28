import axios from "axios";
import {
  GET_CHARACTERS,
  ORDER_BY_NAME,
  FILTER_BY_NAME,
  FILTER_BY_GENRE,
  GET_DETAIL,
  GET_COMICS,
  COMIC_BY_NAME,
  GET_EVENTS,
  EVENTS_BY_NAME,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  GET_EVENT_DETAIL,
  GET_COMIC_DETAIL
} from "./constants";

export function getCharacters() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/characters");
    return dispatch({
      type: GET_CHARACTERS,
      payload: json.data,
    });
  };
}

export function getComics() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/comics");
    return dispatch({
      type: GET_COMICS,
      payload: json.data,
    });
  };
}

export function getEvents() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/events");
    return dispatch({
      type: GET_EVENTS,
      payload: json.data,
    });
  };
}

export function getMovies() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/movies");
    return dispatch({
      type: GET_MOVIES,
      payload: json.data,
    });
  };
}

export function orderByName (payload){
    return({
        type: ORDER_BY_NAME,
        payload
    })
};


export function getCharactersByName(payload) {
  return async function (dispatch) {
    try {
      var json2 = await axios.get(
        `http://localhost:3001/characters?name=${payload}`
      );
      return dispatch({
        type: FILTER_BY_NAME,
        payload: json2.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getComicsByName(payload) {
  return async function (dispatch) {
    try {
      var json2 = await axios.get(
        `http://localhost:3001/comics?name=${payload}`
      );
      return dispatch({
        type: COMIC_BY_NAME,
        payload: json2.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getEventsByName(payload) {
  return async function (dispatch) {
    try {
      var json2 = await axios.get(
        `http://localhost:3001/events?name=${payload}`
      );
      return dispatch({
        type: EVENTS_BY_NAME,
        payload: json2.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json5 = await axios.get(`http://localhost:3001/characters/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: json5.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getComicDetail(id) {
    return async function (dispatch) {
      try {
        var json5 = await axios.get(`http://localhost:3001/comics/${id}`);
        return dispatch({
          type: GET_COMIC_DETAIL,
          payload: json5.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function getEventDetail(id) {
    return async function (dispatch) {
      try {
        var json5 = await axios.get(`http://localhost:3001/events/${id}`);
        return dispatch({
          type: GET_EVENT_DETAIL,
          payload: json5.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function getMovieDetail(id) {
    return async function (dispatch) {
      try {
        var json5 = await axios.get(`http://localhost:3001/movies/${id}`);
        return dispatch({
          type: GET_MOVIE_DETAIL,
          payload: json5.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

