import react from "react";
import styles from "./Ui.module.css";
import menu from '../../img/menu.png';
import cancel from '../../img/cancel.png';
import backArrow from '../../img/backArrow.png';

function Menu(props){
    const MenuUI = {
        profile : <div className={styles.profile_only_img}></div>,
        menu : <div><img src={menu}/></div>,
        cancel : <div onClick={props.onClick}><img src={cancel}/></div>,
        add : <div onClick={props.onClick2} className={styles.registration}>등록</div>,
        arrow:<div onClick={props.onClick}><img src={backArrow}/></div>,
        null: null,
    }

    let rightUI = props.right
    let leftUI = props.left

    return(
        <div className={styles.menu}>
            {MenuUI[leftUI]}
            {MenuUI[rightUI]}
        </div>
    )
}

export default Menu;