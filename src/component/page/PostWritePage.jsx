import React,{ useState,useEffect,useRef } from "react";
import styles from "./Page.module.css";
import Button from '../ui/Button'
import Menu from '../ui/Menu';
import TextInput from '../ui/TextInput';
import TopUi from '../ui/Top';
import WriteBottom from '../ui/WriteBottom';
import { useNavigate } from "react-router-dom";
import {db} from '../../firebase.js';

import smail from '../../img/smail.png';
import text from '../../img/text.png';
import line from '../../img/line.png';
import image from '../../img/image.png';
import deleteIcon from '../../img/delete.png';

function PostWritePage(props){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // 이미지 넣었는지 유무
    const [preview, setPreview] = useState(false)
    const nav = useNavigate()

    // 이미지 내용
    const [base, setBase] = useState('')
    
    // 이미지 선택상태
    const [imgselect, setImgselect] = useState(false)

    const fileInput = React.useRef(null);

    const handleButtonClick = e => {
        fileInput.current.click();
    };

    const handleChange = e => {
        const imageLists = e.target.files;
        console.log(imageLists)
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        //다 완료되면 작동
        reader.onload = function () {
            setBase(reader.result)
            // console.log(reader.result);
            setPreview(true)
        };
    };
    

    const imgSelect = e => {
        setImgselect(!imgselect)
    }

    const Delete = e => {  
        setImgselect(false)
        setPreview(false)
        fileInput.current.value ="";
        setBase('')
    }
    

    return(
        <div className={styles.Page_Wrapper}>
            <TopUi></TopUi>
            <Menu left='cancel' right='add' onClick={function(){
                            nav('/')
                        }}
                        onClick2={function(){
                            let timestamp = new Date().getTime().toString();
                            let date = new Date();
                            let Year = date.getFullYear();

                            //현지시간?
                            let Month = date.getMonth() + 1;
                            let Day = date.getDate();

                            db.collection('post').doc(timestamp).set({
                                id: timestamp,
                                title: title,
                                content: content,
                                comments:[],
                                image: base,
                                profile:'박건도',
                                profile_day:`${Year}.${Month}.${Day}`,
                                like: 0,
                            }).then(function(){
                                nav('/')
                                console.log('글 작성 완료')        
                            })
                }} ></Menu>

            <div className={styles.Post_Container}>
                <TextInput height={60}
                           value={title}
                           placeholder={'제목'}
                           onClick={function(e){setImgselect(false)}}
                           onChange={function(e){ setTitle(e.target.value)}}/>

            <div className={styles.textFlex}>

                {preview === true ? <div><img className={`${styles.previewImg} ${imgselect ? styles.previewImgSelected : null}`} src= {base} onClick={imgSelect} /></div>: null}

                <TextInput height={preview === true ? 514-144 : 514}
                           value={content}
                           placeholder={'오늘은 어떤 일이 있었나요?'}
                           onClick={function(e){setImgselect(false)}}
                           onChange={function(e){ setContent(e.target.value)}}
                />
            </div>    
                
            </div>

            {/* 이미지 저장 */}
                <div className={styles.WriteBottom}>
                    <div>
                    <div className={styles.iconMenu}>
                        <img src={smail} alt="BigCo Inc. logo"/>
                        <img src={text} alt="BigCo Inc. logo"/>
                        <img src={line} alt="BigCo Inc. logo"/>
                        <div onClick={handleButtonClick}><img src={image} alt="BigCo Inc. logo"/></div>

                        <input type="file"
                            ref={fileInput}
                            onChange={ handleChange}
                            style={{ display: "none" }} />
                    </div>

                    {imgselect ? 
                    <img src={deleteIcon} onClick={Delete}/> : <div className={styles.numberMenu}>
                        <p>글자수</p>
                        <span></span>
                        <p>{content.length}</p>
                    </div>}
                    
                </div>
            </div>
        </div>
    )
}

export default PostWritePage;