export interface HeaderProps {
  logo: any;
  siteName: string;
  navItems: [
    {
      id: string;
      path: string;
      title: string;
    }
  ];
}
