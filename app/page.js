import MyPCModal from "@/app/components/MyPCModal";
import RecycleBinModal from "@/app/components/RecycleBinModal";
import Link from "next/link";

export default function Home() {
    return (
        <div className="background">
            <div className="double-click-grid">
                <Link className="icon" href="https://www.naver.com/" target="_blank">
                    <img src="/internetIcon.png" alt="Go to internet"/>
                </Link> {/*internet*/}
                <MyPCModal /> {/*MyPC*/}
                <RecycleBinModal/> {/*RecycleBin*/}
            </div>
        </div>
    );
}