import Header from "@/components/Header/page";
import "./globals.css";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/Footer/page";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html>
      <body className="flex flex-col min-h-screen bg-[#d1dee8] relative">
        <Providers session={session}>
          <Header />
          <Box flex="1" paddingTop={'80px'}>
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
