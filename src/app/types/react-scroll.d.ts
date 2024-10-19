declare module "react-scroll" {
  import { ComponentType, ReactNode } from "react";

  export const Link: ComponentType<{
    to: string;
    smooth?: boolean | "easeInOutQuint";
    duration?: number;
    className?: string; // Include className if you're using it
    children?: ReactNode; // Add children prop
  }>;

  export const Element: ComponentType<{
    name: string;
    children?: ReactNode; // Add children prop
    // Ajoutez d'autres props selon vos besoins
  }>;

  export const Events: any;
  export const animateScroll: any;
  export const scroller: any;
}
