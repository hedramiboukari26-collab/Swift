import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Swift — تبديل العملات الرقمية",
  description: "منصة غير وصائية لتبديل العملات الرقمية — أموالك تبقى في محفظتك",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
