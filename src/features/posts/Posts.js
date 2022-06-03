import React,{useEffect} from "react";
import { Post } from "../../components/Post";
import { loadPosts } from "./postsSlice";
import {useDispatch, useSelector} from 'react-redux'
import { selectPosts } from "./postsSlice";

export const Posts = ()=>{
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    console.log(posts)
    const firstLoad = ()=>{
        dispatch(loadPosts());
    }
    useEffect(firstLoad, []);
    return (
        <div className="postsContainer">
            {
                posts.map((post)=>{
                    return <Post postDetail = {post} key={post}/>
                })
            }
        </div>
    );
}