// "use client";

import Link from "next/link";
import { CapCase } from "@/utils";
import { INavRoute, Navigation } from "./constants";
import { usePathname } from "next/navigation";
import React from "react";

export const Header: React.FC = () => {
  const router = usePathname();
  const linkStyle = "font-bold hover:bg-violet-200 rounded-full mr-8";

  const routePage = Navigation.map((n: INavRoute) => (
    <Link
      className={router == n.route ? ` bg-violet-50  ${linkStyle}` : linkStyle}
      key={n.id.toString()}
      href={n.route.toString()}
    >
      {n.route === "/" ? n.label : CapCase(n.label)}
    </Link>
  ));

  return (
    <>
      <div className="flex flex-col justify-center p-4">
        <nav className="items-center p-8 justify-between w-full max-w-4xl mx-auto text-grey-800">
          <div>{routePage}</div>
        </nav>
      </div>
    </>
  );
};
