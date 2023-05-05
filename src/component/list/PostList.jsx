import React from "react";
import PostItem from "./PostItem";
import styles from "./List.module.css";
import { useNavigate } from "react-router-dom";

function PostList(props){
    const nav = useNavigate()

    const list = props.posts.map(function(item){
        
        return (
            <PostItem key={item.id}
                    postNum={item.id}
                      profile={item.profile}
                      profile_day={item.profile_day}
                      profile_img={item.profile_img}
                      image={item.image}
                      title={item.title}
                      content={item.content}
                      postsLength={props.postsLength}
                      comments={item.comments.length}
                      like={item.like}
                      onClick={function(){
                        nav('/post/' + item.id)
                    }}
            />
        )
    })
    return(
    // 만약 글이 없다면 없는 UI제공 
    <>{(props.postsLength) ? <div className={styles.postListWrap}>{list}</div>: 
                            <div className={styles.postError}> <img src="/nothing.png" alt=""/> <br /> 블로그에 글이 없어요. <br/> 좀 심심하지 않나요..? </div>}
    </>
    )
}

export default PostList;