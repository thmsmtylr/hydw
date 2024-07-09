import { ReactNode } from "react";
import { Metadata } from "next";
import { request } from "@/lib/datocms";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeaderProvider } from "@/contexts/header-context";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LAYOUT_QUERY } from "@/queries/layout-query";
import { NAVIGATION_QUERY } from "@/queries/navigation-query";
import { RootLayoutQueryProps } from "@/types/root-layout";
import { NavigationQueryProps } from "@/types/navigation";

import "@/styles/globals.css";
import "@/fonts/fonts.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://haventyoudonewell.com"),
  title: {
    template: "%s | Haven't You Done Well Productions",
    default: "Haven't You Done Well Productions",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const data = await getRootLayoutData();
  const { logo, socialLinks, contactEmail, acknowledgementOfCountry } =
    data.props.layoutData.global;
  const { siteName } = data.props.layoutData._site.globalSeo;
  const { navigation } = data.props.navData.global;

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-hydw-vanilla font-ambit text-mbbase lg:text-dtbase">
        <HeaderProvider>
          <Header logo={logo} siteName={siteName} navItems={navigation} />
          {children}
        </HeaderProvider>
        <Footer
          logo={logo}
          siteName={siteName}
          socialLinks={socialLinks}
          contactEmail={contactEmail}
          acknowledgementOfCountry={acknowledgementOfCountry}
        />
        <GoogleAnalytics gaId="G-M45SP3T5X1" />
      </body>
    </html>
  );
}
