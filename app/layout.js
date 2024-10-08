import "./globals.css";
import Link from "next/link";
import Time from "@/app/components/time";
import WeatherComponent from "@/app/weather/Weather";

export const metadata = {
  title: "portfolio",
  description: "Generated by create next app",
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <div id="wrap">
          {children}
          <div className="Bottom_bar">
            <div className="loginArea">
              <Link href="/">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/login.gif" alt="loginImage" />
                  <p className="home">Home</p>
                </div>
              </Link>
            </div>
            <div className="timeArea">
              <WeatherComponent />
              <Time />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
