import axios from 'axios';
import {
    GET_CHARACTERS,
    ORDER_BY_NAME,
    ORDER_BY_RATING,
    FILTER_BY_NAME,
    FILTER_BY_GENRE,
    GET_DETAIL,
    GET_COMICS,
    COMIC_BY_NAME,
    GET_EVENTS,
    EVENTS_BY_NAME,
    GET_MOVIES
} from './constants';

export function getCharacters() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/characters');
        return dispatch({
            type: GET_CHARACTERS,
            payload: json.data
        })
    }
};

export function getComics() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/comics');
        return dispatch({
            type: GET_COMICS,
            payload: json.data
        })
    }
};


export function getEvents() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/events');
        return dispatch({
            type: GET_EVENTS,
            payload: json.data
        })
    }
};

export function getMovies() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/movies');
        return dispatch({
            type: GET_MOVIES,
            payload: json.data
        })
    }
};

/* export function orderByName (payload){
    return({
        type: ORDER_BY_NAME,
        payload
    })
};

export function orderByRating (payload){
    return({
        type: ORDER_BY_RATING,
        payload
    })
}; */


export function getCharactersByName(payload) {
    return async function (dispatch) {
        try {
            var json2 = await axios.get(`http://localhost:3001/characters?name=${payload}`);
            return dispatch({
                type: FILTER_BY_NAME,
                payload: json2.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function getComicsByName(payload) {
    return async function (dispatch) {
        try {
            var json2 = await axios.get(`http://localhost:3001/comics?name=${payload}`);
            return dispatch({
                type: COMIC_BY_NAME,
                payload: json2.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};
export function getEventsByName(payload) {
    return async function (dispatch) {
        try {
            var json2 = await axios.get(`http://localhost:3001/events?name=${payload}`);
            return dispatch({
                type: EVENTS_BY_NAME,
                payload: json2.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};


export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json5 = await axios.get(`http://localhost:3001/characters/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: json5.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
};

/* export function getGenres (){
    return async function (dispatch){
        try {
            var json6 = await axios.get("http://localhost:3001/genre");
            return dispatch({
                type: GET_GENRES,
                payload: json6.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};
 */