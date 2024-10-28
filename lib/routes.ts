import { NavigationRouteType } from "./types";

export const navigationRoutes: NavigationRouteType[] = [
  { id: 0, title: "Welcome", route: "welcome", link: "/sign-up/welcome" },
  {
    id: 1,
    title: "Connect your Shopify store",
    route: "connect-shopify",
    link: "/sign-up/connect-shopify",
  },
  {
    id: 2,
    title: "Connect your customer support email",
    route: "connect-email",
    link: "/sign-up/connect-email",
  },
  { id: 3, title: "Done", route: "done", link: "/sign-up/done" },
];

export const storePlatforms = [
  { id: "bigcommerce", name: "BigCommerce" },
  { id: "wix", name: "Wix" },
];

export const emailPlatforms = [
  { id: "gmail", name: "Gmail" },
  { id: "outlook", name: "Outlook" },
];
