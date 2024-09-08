import "./globals.css"
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[#d1dee8]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
