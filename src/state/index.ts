import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import authSlice from "./slices/authSlice";
import storage from "redux-persist/lib/storage";

// persistir data del store:

const persistAuth = ({
    key: 'auth',
    storage,
    whitelist: ['accessToken'],
    // whitelist: ['las partes del estado que queremos persistir']
    // blacklist: ['las partes del estado que no!! queremos persistir']

})




const store = configureStore({
    reducer: {
        auth:  persistReducer<ReturnType<typeof authSlice>>(persistAuth, authSlice)
    },
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: false
        })
})


//tipando el estado ;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const persistor = persistStore(store)

export default store;