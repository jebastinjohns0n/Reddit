import React from "react";


export const Comments = ({comments})=>{
    const helper = comment=>{
        return (
            <div className="comment" key={comment.id}>
                <div>{comment.author}</div>
                <div>{comment.comment}</div>
            </div>
        )
    }
    return (
        <div className="commentContainer">
            {
                comments.map((comment) => helper(comment))
            }
        </div>
    );

    
}