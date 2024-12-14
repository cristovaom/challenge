import Header from "@/components/my-ui/header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
