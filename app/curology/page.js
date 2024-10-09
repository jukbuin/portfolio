import { Span } from 'next/dist/trace';
import styles from './curology.module.css';

export default function Curology() {
    return (
        <div id={styles.Wrapper}>
            <div id={styles.Header}>
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
                </div> {/*상단메뉴바*/}
                <div className={styles.header_inner}>
                    <h1>CUROLOGY</h1>
                    <div className={styles.search_box}>
                        <p>검색어를 입력해주세요</p>
                        <button className={styles.searchIcon}></button>
                    </div>
                </div> {/*상단바 로고, 검색 */}
            </div> {/*Header*/}
            <div id={styles.Gnb}>
                <div id={styles.GnbWrap}>
                    <a className={styles.gnbOpen}>
                        <img src="/category.svg" alt="Go to curology" />
                        카테고리
                    </a>
                    <ul className={styles.gnb_menu_list}>
                        <li><a>Best</a></li>
                        <li><a>오특</a></li>
                        <li><a>세일</a></li>
                        <li><a>멤버십/쿠폰</a></li>
                        <li><a>이벤트</a></li>
                        <li><a>전체상품</a></li>
                    </ul>
                </div>
            </div> {/*카테고리*/}
            <div id={styles.Container}>
                <div id={styles.Contents}>
                    <div className={styles.page_location}>
                        <a className={styles.loc_home}></a>
                        <ul className={styles.loc_history}>
                            <li><a>&gt;</a></li>
                            <li><a>스킨케어</a></li>
                            <li><a>&gt;</a></li>
                            <li><a>크림</a></li>
                        </ul>
                    </div> {/*상세 카테고리*/}
                    <div className={`${styles.prd_detail_box} clearfix`}>
                        <div className={styles.left_area}>
                            <div className={styles.prd_img}>
                                <img src="/thumbnail.jpg" alt="thumbnail img" />
                            </div>
                            <div className={styles.prd_review}>
                                <p>고객리뷰</p>
                                <img src="/review_point.svg" alt="review_point" />
                                <b>4.8</b>
                                <em>(27,350건)</em>
                            </div>
                        </div>
                        <div className={styles.right_area}>
                            <p className={styles.prd_name}>[속수분 크림] 큐롤로지 더 모이스처라이저 50ml</p>
                            <div className={styles.price}>
                                <span className={styles.price_1}>
                                    <strike>4,3000</strike>
                                    <span>원</span>
                                </span>
                                <span className={styles.price_2}>
                                    <strong>2,4000</strong>
                                    <span>원</span>
                                </span>
                            </div>
                            <div className={styles.prd_more_info}>
                                <div className={styles.row}>
                                    <p className={styles.tit}>배송정보</p>
                                    <li>
                                        <span>일반배송</span>
                                        <p>ㅣ</p>
                                        <div>
                                            <p>2,500원 ( 20,000 원 이상 무료배송 )</p>
                                            <p>평균 3일 이내 배송</p>
                                        </div>
                                    </li>
                                </div>
                                <div className={styles.row}>
                                    <p className={styles.tit}>결제혜택</p>
                                    <div className={styles.txt_list}>
                                        <p>무무카드 추가 10% 할인</p>
                                        <p>큐롤로지 포인트 1% 적립</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.prd_option_box}>
                                <a className={styles.sel_option}>상품을 선택해주세요
                                    <img src="/option_sel.svg" alt="option_sel" />
                                </a>
                            </div>
                            <div className={styles.prd_total_price}>
                                <span className={styles.tx_tit}>상품금액 합계</span>
                                <span className={styles.tx_cont}>
                                    <span className={styles.tx_num}>0</span>
                                    원
                                </span>
                            </div>
                            <div className={styles.prd_btn_area}>
                                <button className={styles.btnBasket}>장바구니</button>
                                <button className={styles.btnBuy}>바로구매</button>
                                <button className={styles.btnGift}></button>
                                <button className={styles.btnZzim}></button>

                            </div>
                        </div>
                    </div> {/*상품가격*/}
                    <ul className={styles.prd_detail_tab}>
                        <li className={styles.on}><a>상세정보</a></li>
                        <li><a>리뷰 (27,350)</a></li>
                        <li><a>Q&A (55)</a></li>
                        <li><a>반품/교환정보</a></li>
                    </ul> {/*상품텝메뉴*/}
                    <div className={styles.prd_detail_cont}>
                        <div className={styles.detail_area}>
                            <img src="/banner.jpg" alt="banner" />
                            <div className={styles.contEditor}>
                                <div className={styles.speedycat_container}>
                                    <img src="/Curology_01.jpg" alt="Curology_01.jpg" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/G_Curology1.gif" alt="G_Curology1.gif" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/G_Curology2.gif" alt="G_Curology2.gif" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/Curology_02.jpg" alt="Curology_02.jpg" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/G_Curology3.gif" alt="G_Curology3.gif" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/Curology_03.jpg" alt="Curology_03.jpg" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/G_Curology4.gif" alt="G_Curology4.gif" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/G_Curology5.gif" alt="G_Curology5.gif" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/Curology_04.jpg" alt="Curology_04.jpg" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/G_Curology6.gif" alt="G_Curology6.gif" />
                                </div>
                                <div className={styles.speedycat_container}>
                                    <img src="/Curology_05.jpg" alt="Curology_05.jpg" />
                                </div>
                            </div>
                        </div>
                    </div> {/*상세페이지 내용*/}
                </div> {/*Contents*/}
            </div> {/*Container*/}
            <div id={styles.Footer}>
                <ul className={styles.conts}>
                    <li><a>Curology</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Customer</a></li>
                    <li><a>Terms of Use</a></li>
                </ul>
                <ul className={styles.conts_detail}>
                    <li><a>123456 서울특별시 무무구 무무로 50길</a></li>
                    <li>
                        <a>curology_official@naver.com</a>
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