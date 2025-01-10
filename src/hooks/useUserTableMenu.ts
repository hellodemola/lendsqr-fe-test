import { useState } from "react";

const useUserTableMenu = () => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>();
    const [menuId, setMenuId] = useState<string>();

    const handleShowMenu = (id: string) => {
        setIsShowMenu(true);
        setMenuId(id);
      };
    
      const handleCloseMenu = () => {
        setIsShowMenu(false);
        setMenuId(undefined);
      };

    return { handleShowMenu, handleCloseMenu, menuId, isShowMenu }
}

export default useUserTableMenu;