import styles from './petitparty.module.css';

export default function Curology() {
    return (
        <div id={styles.Wrapper}>
            <div id={styles.Header}>
                <div className={styles.top_util}>
                    <ul className={styles.menu_list}>
                        <li className={styles.gnb1}><a href="#">LOGIN</a></li>
                        <li className={styles.gnb1}><a href="#">JOIN</a></li>
                        <li className={styles.logo}><img src="/petitLogo.svg" alt="logo" /></li>
                        <li className={styles.gnb2}><a href="#">CART</a></li>
                        <li className={styles.gnb2}><a href="#">MY PAGE</a></li>
                    </ul>
                </div> {/*상단메뉴*/}
                <div className={styles.header_gnb}>
                    <ul>
                        <li><a>BEST</a></li>
                        <li><a>NEW</a></li>
                        <li><a>BRAND</a></li>
                        <li><a>ANIMAL_DOLL</a></li>
                        <li><a>CHARACTER_DOLLS</a></li>
                        <li><a>about us</a></li>
                        <li><a>board</a></li>
                    </ul>
                </div> {/*상단바 메뉴 카테고리 */}
            </div> {/*Header*/}
            <div id={styles.Container}>
                <div id={styles.Contents}>
                    <div className={`${styles.prd_detail_box} clearfix`}>
                        <div className={styles.left_area}>
                            <div className={styles.prd_img}>
                                <img src="/P_thumbnail.jpg" alt="thumbnail img" />
                            </div>
                        </div>
                        <div className={styles.right_area}>
                            <p className={styles.prd_name}>럭키비키 토끼인형</p>
                            <div className={styles.price}>
                                <span className={styles.price_1}>price</span>
                                <span className={styles.price_2}>
                                    <strong>14,000원</strong>
                                    <strike>16,800원</strike>
                                </span>
                            </div>
                            <div className={styles.point}>
                                <span className={styles.point_1}>point</span>
                                <span className={styles.point_2}>140원 (1%)</span>
                            </div>
                            <div className={styles.delivery}>
                                <span className={styles.delivery_1}>delivery</span>
                                <span className={styles.delivery_2}>택배</span>
                            </div>
                            <div className={styles.charge}>
                                <span className={styles.charge_1}>charge</span>
                                <span className={styles.charge_2}>3,000원 (50,000원 이상 구매 시 무료)</span>
                            </div>

                            <div className={styles.prd_option_box}>
                                <span>option</span>
                                <a className={styles.sel_option}>- [필수] 옵션을 선택해 주세요 -
                                    <img src="/option_sel.svg" alt="option_sel" />
                                </a>
                            </div>
                            <div className={styles.prd_total_price}>
                                <span className={styles.tx_tit}>TOTAL PRICE</span>
                                <span className={styles.qty}> (qty)</span>
                                <strong> 14,000원</strong>
                                <span className={styles.qty}> (1개)</span>
                            </div>
                            <button className={styles.btnBasket}>ADD TO CART</button>
                        </div>
                    </div> {/*상품가격*/}
                    <ul className={styles.prd_detail_tab}>
                        <li className={styles.on}><a>Info</a></li>
                        <li><a>Review (170)</a></li>
                        <li><a>Q&A (55)</a></li>
                        <li><a>Delivery & Returns</a></li>
                    </ul> {/*상품텝메뉴*/}
                    <div className={styles.prd_detail_cont}>
                        <div className={styles.detail_area}>
                            <div className={styles.contEditor}>
                                <div className={styles.speedycat_container}>
                                    <img src="/petitparty_01.jpg" alt="petitparty_01.jpg" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/G_Petit1.gif" alt="G_Petit1.gif" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/petitparty_02.jpg" alt="petitparty_02.jpg" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/G_Petit2.gif" alt="G_Petit2.gif" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/petitparty_03.jpg" alt="petitparty_03.jpg" />
                                </div>
                            </div>
                        </div>
                    </div> {/*상세페이지 내용*/}
                </div> {/*Contents*/}
            </div> {/*Container*/}
            <div id={styles.Footer}>
                <ul className={styles.conts}>
                    <li><a>쁘띠빠띠</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Customer</a></li>
                    <li><a>Terms of Use</a></li>
                </ul>
                <ul className={styles.conts_detail}>
                    <li><a>123456 서울특별시 무무구 무무로 50길</a></li>
                    <li>
                        <a>petit-official@naver.com</a>
                        <a>정예은</a>
                        <br></br>
                        <a>Q&A Board</a>
                    </li>
                    <li>
                        <a>123-456-789</a>
                        <a>Mon-Fri am11:00-pm6:00</a>
                        <a>Lunch pm12:30-pm2:00</a>
                        <a>Saturday/Sunday Off</a>
                    </li>
                    <li>
                        <a>About us</a>
                        <a>Agreement</a>
                        <a>Guide</a>
                        <a>Privacy Policy</a>
                    </li>
                </ul>
            </div> {/*Footer*/}
        </div>
    )
}