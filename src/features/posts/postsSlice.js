import { mockData } from "../../mockData";


export const loadPosts = ()=>{
    return {
        type: 'posts/loadPosts',
        payload: mockData
    }
}
const initialState = [];
export const postsReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'posts/loadPosts':{
            return action.payload;
        }
        case 'votes/upVote':{
            const p = state.filter((post)=> post.id === action.payload);
            return  p;
        }
        case 'votes/downVote':{
            return state - 1;
        }
        case 'votes/loadVotes':{
            return action.payload
        }
        default:{
            return state;
        }
    }
}

export const selectPosts = (state) =>{
    return state.posts;
}
export const selectVotes = (state) => {
    return state.posts.map((post) => ({
        id: post.id,
        votes: post.vote
    }));
}