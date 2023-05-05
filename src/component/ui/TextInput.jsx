import react from "react";
import styles from "./Ui.module.css";

function TextInput(props){
    return(
        <textarea className={styles.TextInput}
                style={{'--height' : props.height + 'px'}}
                height={props.height}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onClick={props.onClick}>
        </textarea>
    )
}

export default TextInput;