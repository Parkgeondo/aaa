import react from "react";
import styles from "./Ui.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faBatteryFull, faSignalPerfect } from "@fortawesome/free-solid-svg-icons";

function TopUi(props){
    return(
        <div className={styles.TopUi}>
            <p style={{fontWeight : 900}}>9:41</p>
            <div className={styles.TopUi_systemIcon}>
                <div><FontAwesomeIcon icon={faSignalPerfect} style={{color: 'black'}}/></div>
                <div><FontAwesomeIcon icon={faWifi} style={{color: 'black'}}/></div>
                <div><FontAwesomeIcon icon={faBatteryFull} style={{color: 'black'}}/></div>
            </div>
        </div>
    )
}

export default TopUi;