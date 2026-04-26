import { Metadata } from "next";
import { BackButton } from "@/components/back-button";

/* 
Metada do layout se aplica a todas as páginas dentro do layout
*/
export const metadata: Metadata = {
  title: "Education",
  description: "Learning React and Next.js",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <div className="px-4 pt-4">
        <BackButton />
      </div>
      {children}
    </>
  );
}
