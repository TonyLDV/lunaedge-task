import { navigationRoutes } from "@/lib/routes";
import { usePathname } from "next/navigation";

export const useCurrentPath = () => {
  const pathname = usePathname();

  const relevantPath = "/" + pathname.split("/").slice(1, 3).join("/");

  const activePath = navigationRoutes.findIndex(
    (step) => step.link === relevantPath
  );

  return { activePath };
};
