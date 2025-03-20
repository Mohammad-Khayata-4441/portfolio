import { usePathname } from "@/i18n";
import { useLocale } from "next-intl";
import { useCallback } from "react";

export const useActiveLink = () => {
    const path = usePathname();
    const locale = useLocale()


    const isActive = (to: string) => {
        return path === to
    }


    return isActive
}