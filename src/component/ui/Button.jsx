import react from "react";
import styles from "./Ui.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Button(props){
    if(props.typeButton){
        return(
            <button className={styles.boredredButton}
                    onClick={props.onClick}>
                    <FontAwesomeIcon icon={faPlus} size="lg" style={{color: 'white'}}/>
            </button>
        )
    }else{
        return(
            <button className={styles.typoButton}
            onClick={props.onClick}>
                SEND
            </button>
        )
    }
}

export default Button;

//https://fontawesome.com/icons/bars?f=classic&s=solid