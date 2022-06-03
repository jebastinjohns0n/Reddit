import {configureStore} from '@reduxjs/toolkit';
import { postsReducer } from '../features/posts/postsSlice';
import { votesReducer } from '../features/votes/votesSlice';

export const store = configureStore({
    reducer:{
        posts: postsReducer,
        votes: votesReducer
    }
})