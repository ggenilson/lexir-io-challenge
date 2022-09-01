import React from "react";

type NavItemsType = {
  title: string;
  href: string;
  ExtraComponent?: React.ReactNode;
};

export const navItems: NavItemsType[] = [
  {
    title: "products",
    href: "#",
  },
  {
    title: "brands",
    href: "#",
  },
  {
    title: "hello, leandro",
    ExtraComponent: <img src="/assets/user.png" alt="user-img" />,
    href: "#",
  },
  {
    title: "cart",
    ExtraComponent: (
      <img
        src="/assets/cart.png"
        alt="cart-img"
        className="before:contents:'df' before:bg-blue-500 before:text-black before:absolute before:inset-0 before:text-center before:flex before:items-center before:justify-center"
      />
    ),
    href: "#",
  },
];
