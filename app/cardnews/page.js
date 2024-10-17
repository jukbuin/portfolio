import styles from './cardnews.module.css';
import Slider from "@/app/components/Slider";

export default function Cardnews() {
    return (
        <div id={styles.Wrapper}>
            <div id={styles.Header}>
                <img className={styles.logo} src="/c_logo.png" alt="logo" />
            </div> {/*Header*/}
            <div id={styles.Container}>
                <div id={styles.Contents}>
                    <div className={styles.post_header}>
                        <div className={styles.profile}></div>
                        <span className={styles.profile_name}>petitparty</span>
                    </div>
                    <Slider />
                    <div className={styles.post_menu}>
                        <div className={styles.like}></div>
                        <div className={styles.chat}></div>
                        <div className={styles.send}></div>
                        <div className={styles.keep}></div>
                    </div>
                    <div className={styles.post_content}>
                        <p className={styles.likeC}>좋아요 304개</p>
                        <p className={styles.sub}>
                            <strong>petitparty</strong>
                            👻할로윈 세일 최대 50%👻 귀여운 호박친구들도 만나용🎃
                        </p>
                        <p className={styles.date}>10월 18일</p>
                    </div>
                </div> {/*Contents*/}
            </div> {/*Container*/}
        </div>
    )
}