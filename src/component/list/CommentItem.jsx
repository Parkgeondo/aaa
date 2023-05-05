import react, { useState } from "react";
import styles from "./List.module.css";
import Profile from "../ui/Profile";


function CommentItem(props){
    return(
        <div className={styles.Comment_Wrapper}>
            <Profile className={styles.Profile} profile={props.name} profile_img={props.img} profile_day={props.profile_day}/>
            <p className={styles.Comment_time}>{props.profile_day}</p>
            <p className={styles.Comment_Content}>
                {props.content}
            </p>
        </div>
    )
}

export default CommentItem;