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
                </Link> {/*3*/}
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