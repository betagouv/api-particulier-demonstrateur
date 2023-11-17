'use client';

import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { useTranslations } from 'next-intl';
import CardSocialPricing from '@/components/CardSocialPricing';
import Tooltip from '@/components/Tooltip';
import styles from './layout.module.css';
import { useJourney } from '@/app/journey-provider';
import { useSearchParams } from 'next/navigation';

export default function Layout({ children }: { children: JSX.Element }) {
  const t = useTranslations('Verification');
  const { journey } = useJourney();
  const searchParams = useSearchParams();
  const scope = searchParams.get('scope');
  const user = searchParams.get('user');

  return (
    <>
      <div
        className={'fr-container'}
        style={{
          ...fr.spacing('padding', {
            top: '15v',
            bottom: '15v',
          }),
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div className={styles.stepper}>
          <Stepper
            currentStep={3}
            nextTitle={t('stepperNextTitle')}
            stepCount={journey?.user?.isFranceConnectAuth ? 3 : 4}
            title={t('stepperTitle')}
          />
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: '65%' }}>{children}</div>

          <div style={{ flex: '35%', paddingLeft: '60px' }} className={styles.card}>
            <CardSocialPricing />
          </div>
        </div>
      </div>

      {user === '1' && scope === 'jobSeeker' ? (
        <Tooltip isOpenedByDefault={false} />
      ) : user === '1' && scope === 'studentScholarship' ? (
        <Tooltip isOpenedByDefault={true}>
          <ul>
            <li>
              <i className={fr.cx('ri-information-fill')} /> <b>En cas d’échec, proposer une solution alternative :</b>
              <br />
              L’utilisation des API ne doit pas empêcher les usagers de déposer leur dossier par eux-mêmes. Il est donc
              indispensable de permettre à l’usager de poursuivre la démarche.
              <br />
              <i>
                Dans cet exemple, Henri s’est trompé, il n’est pas étudiant boursier. Mais il lui est tout de même
                proposé de transmettre son attestation CNOUS, de consulter la liste des guichets ou même de continuer
                sans tarif réduit.
              </i>
            </li>
          </ul>
          <ul></ul>
        </Tooltip>
      ) : user === '2' ? (
        <Tooltip isOpenedByDefault={true}>
          <ul>
            <li>
              <i className={fr.cx('ri-information-fill')} />{' '}
              <b>En cas d’échec, permettre à l’usager de reessayer ou de choisir une solution alternative.</b>
              <br />
              <i>
                Dans cet exemple, Juliette peut relancer réessayer une seconde fois, transmettre son certificat de
                scolarité, consulter la liste des guichets et même continuer sans tarif réduit.
              </i>
              <br />
              <br />
              <i className={fr.cx('ri-information-fill')} />{' '}
              <b>
                Sans FranceConnect, ne jamais transmettre les informations de l’API Particulier tant que l’identité de
                l’usager n’est pas confirmée :
              </b>
              <br />
              <i>
                Dans cet exemple, le statut étudiant de Juliette n’est pas confirmé car elle a fait une erreur de
                saisie. Toutefois, dans l’objectif de ne délivrer aucune donnée personnelle à un usager malintentionné,
                seule la mention « la connexion n’a pu être établie est indiquée ».
              </i>
            </li>
          </ul>
          <ul></ul>
        </Tooltip>
      ) : (
        <Tooltip isOpenedByDefault={false} />
      )}
    </>
  );
}
