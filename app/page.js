import Link from "next/link";

export default function Home() {
    return (
        <div className="background">
            <div className="double-click-grid">
                <Link className="icon" href="./curology">
                    <img src="/curology.png" alt="Go to curology" />
                </Link> {/*curology*/}
                <Link className="icon" href="./petitparty">
                    <img src="/petitparty.png" alt="Go to petitparty" />
                </Link> {/*petitparty*/}
                <Link className="icon" href="./cardnews">
                    <img src="/cardnews.png" alt="Go to cardnews" />
                </Link> {/*cardnews*/}
                <Link className="icon tooltip" href="https://smartstore.naver.com/theweforme/products/11210358290?nl-query=%EB%93%9C%EB%A5%B4%EB%A0%81+%EB%B0%A9%EC%A7%80+%EC%86%94%EB%A3%A8%EC%85%98&nl-ts-pid=i2y2EwqpsECss5vg4Nhssssss1V-484674&NaPm=ct%3Dm54of4jc%7Cci%3D3f15424426ff45a1054d4a96a0a9b637afce80b8%7Ctr%3Dsls%7Csn%3D10204475%7Chk%3D8b01f773319dd61becc48590dc80ad6b17d7ada7"
                    target="_blank"
                    data-tooltip={`클라이언트 : 드르렁 방지 솔루션\n클라이언트에게 참고 레퍼런스와 기획안, 제품 이미지를 제공받아 제작하였습니다.`}>
                    <img src="/anti_growl.png" alt="Go to anti_growl" />
                </Link> {/*anti_growl*/}
                <Link className="icon" href="https://www.naver.com/" target="_blank">
                    <img src="/internetIcon.png" alt="Go to internet" />
                </Link> {/*internet*/}
                <Link className="icon" href="#">
                    <img src="/myPC.png" alt="Go to myPC" />
                </Link> {/*myPC*/}
                <Link className="icon" href="#">
                    <img src="/RecycleBin.png" alt="Go to RecycleBin" />
                </Link> {/*RecycleBin*/}
            </div>
        </div>
    );
}