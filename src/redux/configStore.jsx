import {combineReducers, createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import { CarouselReducer } from './reducers/CarouselReducer';
import { CinemaListReducer } from './reducers/CinemaListReducer';
import { MovieListReducer } from './reducers/MovieListReducer';

const rootReducer = combineReducers({
    //state
    CarouselReducer,
    MovieListReducer,
    CinemaListReducer,
})

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))