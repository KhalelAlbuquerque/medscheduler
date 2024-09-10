import Header from "@/components/Header/page";
import "./globals.css"
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[#d1dee8]">
        <Header/>
        <Box paddingTop={80}>
          <Providers>{children}</Providers>
        </Box>
      </body>
    </html>
  );
}
