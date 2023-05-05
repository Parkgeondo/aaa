import React, { useState, useEffect } from "react";
import styles from "./List.module.css";
import PostBottom from "../ui/PostBottom";
import Profile from "../ui/Profile";
import { db } from "../../firebase.js";

function PostItem(props) {
  const postId = props.postNum;
  const [like, setLike] = useState(0);

  useEffect(function(){
        db.collection("post").doc(postId).get().then(function (doc) {
        setLike(doc.data().like);
      });
  }, [postId]);

  const handleLikeClick = () => {
    db.collection("post").doc(postId).update({
        like: like + 1,
      })
      .then(() => {
        setLike(like + 1);
      });
  };

  return (
    <div className={styles.Post_Wrapper} onClick={props.onClick}>
      <Profile dayShow profile={props.profile} profile_img={props.profile_img} profile_day={props.profile_day}/>
      <img className={styles.Post_image} src={props.image} alt="preview-img" onError={(e) => {e.target.src = "/error.png";
        }}
      />
      <div className={styles.Post_Title}>{props.title}</div>
      <div className={styles.Post_content}>{props.content}</div>
      <PostBottom
      postsLength={props.postsLength}
        comments={props.comments}
        like={like}
        postNumber={postId}
        onClick={(e) => {
          e.stopPropagation();
          handleLikeClick();
        }}
      />
    </div>
  );
}

export default PostItem;