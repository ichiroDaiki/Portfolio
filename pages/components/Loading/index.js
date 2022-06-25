import styles from '../../../styles/loading.module.css'
import MoonLoader from "react-spinners/MoonLoader";

const Loading = ({ load }) =>{

    return(
        <div className={styles.loadingContainer}>
            <MoonLoader
             color={"#fff"} loading={load} size={80} />
        </div>
    )
}

export default Loading