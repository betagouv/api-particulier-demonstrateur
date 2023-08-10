import { Header } from '@codegouvfr/react-dsfr/Header';
import { Footer } from '@codegouvfr/react-dsfr/Footer';
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';

export default function DemonstratorLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      {' '}
      <Header
        brandTop={<>DÉMONSTRATEUR API PARTICULIER</>}
        serviceTitle="Mobilité+ "
        homeLinkProps={{
          href: '/',
          title: 'Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)',
        }}
      />
      {children}{' '}
      <Footer
        accessibility="fully compliant"
        contentDescription={`
                    Ceci est un démonstrateur pour illustrer l'usage de l'API Particulier. 
                `}
        bottomItems={[headerFooterDisplayItem]}
      />
    </>
  );
}
