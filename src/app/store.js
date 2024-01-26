import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";
import { notesSlice } from "../features/notes/notesSlice";
import { thunk } from 'redux-thunk'

let state = {
    owner: {},
    list: [
    ]
};

export const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        owner: ownerSlice.reducer,
        list: cartSlice.reducer,
        notes: notesSlice.reducer,
    }),
    // La fonction getDefaultMiddleware est utilisée pour obtenir les middlewares par défaut configurés par configureStore,
    //  puis thunk est ajouté à la fin de cette liste.
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(thunk);
      }
    // middleware: [
    //     () => (next) => (action) => {
    //         console.log('Action', action)
    //         next(action);
    //     },
    //     thunk,
    // ]
});