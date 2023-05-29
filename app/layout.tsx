import "@/styles/globals.css";
import { ReactNode } from "react";
import { request } from "@/lib/datocms";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LAYOUT_QUERY } from "@/queries/layout-query";
import { NAVIGATION_QUERY } from "@/queries/navigation-query";
import { HeaderProvider } from "@/contexts/header-context";
import { RootLayoutQueryProps } from "@/types/root-layout";
import { NavigationQueryProps } from "@/types/navigation";

async function getRootLayoutData(): Promise<{
  props: { navData: any; layoutData: RootLayoutQueryProps };
}> {
  const layoutData = (await request({
    query: LAYOUT_QUERY,
  })) as RootLayoutQueryProps;
  const navData = (await request({
    query: NAVIGATION_QUERY,
  })) as NavigationQueryProps;

  return {
    props: { navData, layoutData },
  };
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const data = await getRootLayoutData();
  const { logo, socialLinks, contactEmail } = data.props.layoutData.global;
  const { siteName } = data.props.layoutData._site.globalSeo;
  const { navigation } = data.props.navData.global;

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <HeaderProvider>
          <Header logo={logo} siteName={siteName} navItems={navigation} />
          {children}
        </HeaderProvider>
        <Footer
          logo={logo}
          siteName={siteName}
          socialLinks={socialLinks}
          contactEmail={contactEmail}
        />
      </body>
    </html>
  );
}
