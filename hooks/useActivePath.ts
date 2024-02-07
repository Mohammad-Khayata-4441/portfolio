import { usePathname } from "@/i18n";
import { useLocale } from "next-intl";
import { useCallback } from "react";

export const useActiveLink = () => {
    const path = usePathname();
    const locale = useLocale()


    const isActive = (to: string) => {
        console.log(path, to)
        return path === to
    }


    return isActive
}