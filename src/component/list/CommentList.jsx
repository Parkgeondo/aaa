import React from "react";
import CommentItem from "./CommentItem";
import styles from "./List.module.css";


function CommentList(props){

//map에 따라서 아이디를 써 넣으면 이미지가 바뀔 수 있게
    const list = props.comments.map(function(comment){
        return (
            <CommentItem key={comment.id}
                        content={comment.content}
                        img={comment.img}
                        name={comment.profile}
                        profile_day={comment.profile_day}
                        />
                )
    })
    return(
        <div className={styles.CommentList_Wrapper}>{list}</div>
    )
}

export default CommentList;