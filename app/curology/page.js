import styles from './curology.module.css';

export default function Curology() {
    return (
        <div id={styles.wrap}>
        <div id={styles.header}>
            <div className={styles.top_util}>
                <ul className={styles.menu_list}>
                    <li><a href="#">회원가입</a></li>
                    <li><a>ㅣ</a></li>
                    <li><a href="#">로그인</a></li>
                    <li><a>ㅣ</a></li>
                    <li><a href="#">장바구니</a></li>
                    <li><a>ㅣ</a></li>
                    <li><a href="#">주문배송</a></li>
                    <li><a>ㅣ</a></li>
                    <li><a href="#">고객센터</a></li>
                    <li><a>ㅣ</a></li>
                    <li><a href="#">매장안내</a></li>
                </ul>
            </div>
            {/* <div>안녕</div> */}
        </div>
        </div>

    )
}