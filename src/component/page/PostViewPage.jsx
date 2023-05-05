import react, {useState, useEffect} from "react";
import styles from "./Page.module.css";
import TopUi from '../ui/Top';
// import data from '../../data';
import CommentList from "../list/CommentList";
import TextInput from '../ui/TextInput'
import Button from '../ui/Button'
import Menu from '../ui/Menu';
import Profile from "../ui/Profile";
import { useNavigate, useParams } from "react-router-dom";
import { db } from '../../firebase.js';


function PostViewPage(props){
    const nav = useNavigate();
    const postId = useParams().id
    console.log(postId)
    // const post = data.find(function(item){
    //     return item.id == postId
    // })


    const [post, setPost] = useState({
        id: 0,
        title: '',
        content: '',
        comments: [{
            profile:'',
            img:'',
            profile_day:''
        }]
    })

    useEffect(function(){
        db.collection('post').doc(postId).get().then(function(doc){
            setPost(doc.data())
        })
    },[])
    
    const [comment, setComment] = useState('')
    
    return(
        <div>
            <TopUi></TopUi>
            <Menu left='arrow' right='profile'
                onClick={function(){
                nav('/')
                }}></Menu>
            <div>
    
                <div className={styles.Post_View_Wrap}>
                    <p className={styles.Post_View_title}>{post.title}</p>


                    {/* 아이디 값에 맞게 프로필 이미지 교체해주기 */}
                    <Profile dayShow={false} profile={post.profile}/>
                    <img className={styles.Post_image} src={post.image} alt="preview-img" onError={function(e){e.target.src = '/error.png';}}/>
                    <p className={styles.Post_View_content}>{post.content}</p>
                </div>

                <CommentList comments={post.comments}/>

                <div className={styles.TextInput_Wrap}>
                    <TextInput height={60} value={comment}
                            className={styles.comment}
                            onChange={function(e){ setComment(e.target.value)}}/>
                    <Button title = "댓글저장"
                        onClick={function(e){
                            console.log('ASDSAD')

                            let timestamp = new Date().getTime().toString();
                            let date = new Date();
                            let Year = date.getFullYear();
                            let Month = date.getMonth() + 1;
                            let Day = date.getDate();

                            let tempComments = post.comments
                            tempComments.push({
                                id: postId + '_' + timestamp,
                                content : comment,
                                profile:"박건도",
                                profile_day: `${Year}.${Month}.${Day}`
                            })
                            db.collection('post').doc(postId).update({
                                comments: tempComments
                            }).then(function(){
                                setComment('')
                            })
                        }}/>
                </div>
            </div>
        </div>
    )
}

export default PostViewPage;