import react, {useState, useEffect} from "react";
import styles from "./Page.module.css";
import PostList from "../list/PostList";
import Button from '../ui/Button'
import {db} from '../../firebase.js';
// import data from '../../data.json';
import Menu from '../ui/Menu';
import Profile from '../ui/Profile';
import { useNavigate } from "react-router-dom";

function MainPage(props){
    const [data, setData] = useState([])
    const [datalength, setDatalength] = useState('')
    const nav = useNavigate()


    useEffect(function(){
        db.collection('post').get().then(function(qs){
            let tempData = []
            
            qs.forEach(function(doc){
                tempData.push( doc.data())
            })
            setData( tempData )
            setDatalength(data.length)
            console.log(datalength)
        })
    }, [])

    

    return(
        <div className={styles.Page_Wrapper}>
            
            <Menu left='menu' right='profile'></Menu>
            <div className={styles.Post}>Post</div>
            <div className={styles.Page_Container}>
                <Button title = "글작성하기" //디스플레이
                        typeButton
                        onClick={function(){
                            nav('/write')
                            console.log("글 작성 페이지로 이동")
                        }}/>
                
                <PostList posts={data}
                          postsLength={data.length}
                />
            </div>
        </div>
    )
}

export default MainPage;