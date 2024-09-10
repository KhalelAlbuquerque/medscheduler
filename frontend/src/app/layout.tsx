import Header from "@/components/Header/page";
import "./globals.css";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/Footer/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="flex flex-col min-h-screen bg-[#d1dee8] relative">
        <Header />
        <Box flex="1" paddingTop={80}>
          <Providers>{children}</Providers>
        </Box>
        <Footer />
      </body>
    </html>
  );
}
