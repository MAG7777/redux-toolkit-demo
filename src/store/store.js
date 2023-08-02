import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './counterReducer'
import { getPosts } from './apiReducer';


const store = configureStore({
    reducer: {
        counterReducer:rootReducer,
        [getPosts.reducerPath]: getPosts.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getPosts.middleware),
})


// Մեկ հատ reducer դեպքում
// const store = configureStore({
//         reducer:rootReducer,
    
// })

export default store;