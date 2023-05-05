import react,{ useState,useEffect } from "react";
import styles from "./Ui.module.css";
import heart from '../../img/heart.png';
import heart2 from '../../img/heart2.png';
import comment from '../../img/comment.png';
import link from '../../img/link.png';
import dot from '../../img/dot.png';
import {db} from '../../firebase.js';
import Modal from './Modal';
import { useNavigate, useParams } from "react-router-dom";

function PostBottom(props){

    const [data, setData] = useState([])
    const [postNumber, setPostNumber] = useState(props.postNumber);
    
    //모달이 열려있을지 않을지 변경하는 스테이트
    const [modalOpen, setModalOpen] = useState(false);
    const [like, setLike] = useState(false);
    const nav = useNavigate();

    const openModal = (e) => {
        e.stopPropagation();
        setModalOpen(true);
    }

    const closeModal = (e) => {
        e.stopPropagation();
        setModalOpen(false);
    }

    //누르면 하트 모양 토글
    const likeToggle = (e) => {
        setLike(!like)
        if(like){
            setLike(like)
        }
    }


    //삭제되면 업그레이드?
    //삭제버튼
    const deleteModal = (e) => {
        e.stopPropagation();

        db.collection('post').doc(props.postNumber).delete().then(function(){
            window.location.reload();
        })
    }

    return(
        <div className={styles.PostBottom}>
            <div className={styles.PostBottom_block}>
                <div className={styles.PostBottom_unit} onClick={props.onClick}><img onClick={likeToggle} src={like?heart2:heart} alt="BigCo Inc. logo"/>{props.like}</div>
                <div className={styles.PostBottom_unit}><img src={comment} alt="BigCo Inc. logo"/>{props.comments}</div>
            </div>
            <div className={styles.PostBottom_block}>
                <div> <img src={link} alt="BigCo Inc. logo"/></div>
                <div onClick={openModal}> <img src={dot} alt="BigCo Inc. logo"/> </div>
            </div>
            
            <Modal open = {modalOpen} delete = {deleteModal} close = {closeModal}>
            </Modal>
        </div>
    )
}

export default PostBottom;