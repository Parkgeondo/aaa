import React,{ useState,useEffect,useRef } from "react";
import styles from "./Ui.module.css";
import smail from '../../img/smail.png';
import text from '../../img/text.png';
import line from '../../img/line.png';
import image from '../../img/image.png';

function WriteBottom(props){

    const fileInput = React.useRef(null);

    const handleButtonClick = e => {
        fileInput.current.click();
    };

    const handleChange = e => {
        console.log(e.target.files[0]);
    };

    return(
        <div className={styles.WriteBottom}>
            <div>
            <div className={styles.iconMenu}>
                <img src={smail} alt="BigCo Inc. logo"/>
                <img src={text} alt="BigCo Inc. logo"/>
                <img src={line} alt="BigCo Inc. logo"/>
                <div onClick={handleButtonClick}><img src={image} alt="BigCo Inc. logo"/></div>

                <input type="file"
                ref={fileInput}
                onChange={handleChange}
                style={{ display: "none" }} />


            </div>
            <div className={styles.numberMenu}>
                <p>글자수</p>
                <span></span>
                <p>{props.textLength}</p>
            </div>
            </div>
        </div>
    )
}

export default WriteBottom;
