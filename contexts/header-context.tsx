"use client";

import { createContext, useContext, useState } from "react";

const defaultContext = {
  menuOpen: false,
  setMenuOpen: (_menuOpen: boolean) => {},
  onOpenChange: () => {},
};

export const HeaderContext = createContext(defaultContext);

export function HeaderProvider({ children }: any) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleSetMenuOpen = (isOpen: boolean) => {
    setMenuOpen(isOpen);
  };

  return (
    <HeaderContext.Provider
      value={{
        menuOpen: menuOpen,
        setMenuOpen: handleSetMenuOpen,
        onOpenChange: () => setMenuOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderContext() {
  return useContext(HeaderContext);
}
