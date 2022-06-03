import { mockData } from "../../mockData";

/* ---------Action Creater-------- */
export const upVote = ()=>({type: 'votes/upVote'});
export const downVote = ()=>({type: 'votes/downVote'});
export const loadVotes = (vote)=>({
    type: 'votes/loadVotes',
    payload: vote //from post it self
});


const intialState = 0;
export const votesReducer = (state = intialState, action)=>{
    switch(action.type){
        case 'votes/upVote':{
            return state + 1;
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

export const selectVote = state => {            //posts are available
    return state.posts.map((post)=>({
        id: post.id,
        votes: post.vote
    }));
}