type navItems = {
  id: string;
  path: string;
  title: string;
}[];

export interface NavigationQueryProps {
  global: {
    navigation: navItems;
  };
}

export interface NavigationComponentProps {
  navItems: navItems;
}
