import react from "react";
import styles from "./Ui.module.css";

function Profile(props){
    

    return(
        <div className={styles.Profile}>
            <img className={styles.Profile_img} src="/profile/3.png" alt="" />
            {/* <div className={styles.Profile_img}></div> */}
            <div>
                <div className={styles.Profile_name}>{props.profile}</div>

                {/* 거짓이면 아래 html을 없애준다 */}
                {
                    props.dayShow === true
                    ? <div className={styles.Profile_day}>{props.profile_day}</div>
                    :null
                }
            </div>
        </div>
    )
}

export default Profile;