import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

// actionCreator для успішної ініціалізації
export const initializedSuccess = () =>
    ({ type: INITIALIZED_SUCCESS })

// thunk для успішної ініціалізації (по завершенні асинхронних диспатчів)
export const initializeApp = () => (dispatch) => {
    // отримання авторизаційних даних (асинхронний)
    let promise = dispatch(getAuthUserData());

    // можливі інші диспатчі (асинхронні)
    // dispatch(somethingelse());
    // dispatch(somethingelse());

    // проміси для всіх асинхронних диспатчів
    Promise.all([promise])
        .then(() => {
            // після завершення всіх асинхронних диспатчів 
            dispatch(initializedSuccess());
        });
}

export default appReducer;