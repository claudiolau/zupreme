export type INavRoute = {
  id: Number;
  route: String;
  label: String;
};

export const Navigation: INavRoute[] = [
  {
    id: 1,
    route: "/",
    label: "Zupreme",
  },
  {
    id: 2,
    route: "/new-arrivals",
    label: "New Arrivals ",
  },
  {
    id: 3,
    route: "/about-us",
    label: "About us",
  },
  {
    id: 4,
    route: "/help",
    label: "Help",
  },
];
