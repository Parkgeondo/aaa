import react,{ useState,useEffect } from "react";
import styles from "./Ui.module.css";

function Modal(props){
    

    return(
        //모달 뒷 배경
        <div onClick={props.close} className={props.open ? styles.modalBackIn : styles.modalBackOut}>
            {props.open ? 
                <div className={styles.modal2}>
                    <div className={styles.modalTop}>
                        <div className={styles.modalItem}>이웃 새글 끄기</div>
                        <div className={styles.modalItem}>앱 알림켜기</div>
                        <div className={styles.modalItem} onClick={props.delete}>이 글 삭제하기</div>
                        <div className={styles.modalItem}>신고</div>
                    </div>
                    <div className={styles.modalItem2} onClick={props.close}>취소</div>
                </div>
                :null}
        </div>
    )
}

export default Modal;