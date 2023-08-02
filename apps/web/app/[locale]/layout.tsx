import { NextAppDirEmotionCacheProvider } from 'tss-react/next';
import { DsfrHead } from '@codegouvfr/react-dsfr/next-appdir/DsfrHead';
import { DsfrProvider } from '@codegouvfr/react-dsfr/next-appdir/DsfrProvider';
import { getHtmlAttributes } from '@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes';
import { StartDsfr } from '../StartDsfr';
import { defaultColorScheme } from '../defaultColorScheme';
import MuiDsfrThemeProvider from '@codegouvfr/react-dsfr/mui';
import { Header } from '@codegouvfr/react-dsfr/Header';
import { Footer } from '@codegouvfr/react-dsfr/Footer';
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import Link from 'next/link';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

interface Params {
  locale: string;
}

interface PageProps {
  params: Params;
  children: JSX.Element;
}

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export default async function RootLayout({ children, params: { locale } }: PageProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html {...getHtmlAttributes({ defaultColorScheme })} lang={locale}>
      <head>
        <StartDsfr />
        <DsfrHead
          Link={Link}
          preloadFonts={[
            //"Marianne-Light",
            //"Marianne-Light_Italic",
            'Marianne-Regular',
            //"Marianne-Regular_Italic",
            'Marianne-Medium',
            //"Marianne-Medium_Italic",
            'Marianne-Bold',
            //"Marianne-Bold_Italic",
            //"Spectral-Regular",
            //"Spectral-ExtraBold"
          ]}
        />
      </head>
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <DsfrProvider>
          <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
            <MuiDsfrThemeProvider>
              <Header
                brandTop={<>INTITULE</>}
                serviceTitle="Mobilité+ "
                homeLinkProps={{
                  href: '/',
                  title: 'Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)',
                }}
              />

              <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
              </NextIntlClientProvider>

              <Footer
                accessibility="fully compliant"
                contentDescription={`
                    Ceci est un démonstrateur pour illustrer l'usage de l'API Particulier. 
                `}
                bottomItems={[headerFooterDisplayItem]}
              />
            </MuiDsfrThemeProvider>
          </NextAppDirEmotionCacheProvider>
        </DsfrProvider>
      </body>
    </html>
  );
}
