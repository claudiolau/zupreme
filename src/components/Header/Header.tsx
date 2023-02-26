import Link from "next/link";
import { INavRoute, Navigation } from "./constants";

export const Header: React.FC = () => {
  const routePage = Navigation.map((n: INavRoute) => (
    <Link className="p-4" key={n.id.toString()} href={n.route.toString()}>
      {n.label}
    </Link>
  ));

  return (
    <>
      <div className="flex flex-col justify-center pr-4 pl-4">
        <nav className="items-center p-4 justify-between w-full max-w-4xl mx-auto pt-8 pb-8 text-grey-800">
          <div>{routePage}</div>
        </nav>
      </div>
    </>
  );
};
