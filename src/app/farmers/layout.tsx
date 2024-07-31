import "~/styles/globals.css";
import { Inter } from "next/font/google";
import SideLayout from "~/components/sidelayout";

export const metadata = {
  title: "Framer",
  description: "Farmer layout",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex-1 flex flex-row">
      <SideLayout>
        {children}
      </SideLayout>
    </div>
  );
}
