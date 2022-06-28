import { GET_CHARACTERS } from "./actionTypes";

const initialState = {
    // definir estado inicial
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return {
                
            };
        default:
            return state;
    }
};