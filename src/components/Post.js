import React from "react";
import { Votes } from "../features/votes/Votes";
import { Comments } from "../features/comments/Comments";

export const Post = ({postDetail})=>{
    console.log(postDetail);
    return (
        <div className="postContainer">
            <div className="post">
                <Votes postId = {postDetail.id}/>
                <div className="postArea">
                    <div className="author">{postDetail.author}</div>
                    <div className="title">{postDetail.title}</div>
                    <div className="media"></div>
                </div>
            </div>
            <Comments comments = {postDetail.comments}/>
        </div>
    );
}