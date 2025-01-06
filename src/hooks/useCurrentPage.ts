import { isDashboard, urlContainsItem } from "@/utils/routes";
import { usePathname } from "next/navigation";


const useCurrentPage = () => {
    const pathname = usePathname();

    const handleIsCurrentPath = (item: string) => {
        if (isDashboard(pathname, item)) return true
        if (urlContainsItem(pathname, item)) return true
        return false
    }

    return handleIsCurrentPath 
};

export default useCurrentPage;