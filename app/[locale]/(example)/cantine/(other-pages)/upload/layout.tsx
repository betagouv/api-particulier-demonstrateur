'use client';

import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { useTranslations } from 'next-intl';
import CardUnitedPricing from '@/components/CardUnitedPricing';
import Tooltip from '@/components/Tooltip';
import styles from './layout.module.css';
import { useJourney } from '@/app/journey-provider';
import { useSearchParams } from 'next/navigation';

export default function Layout({ children }: { children: JSX.Element }) {
  const t = useTranslations('Verification');
  const { journey } = useJourney();
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

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
            stepCount={journey?.user?.isFranceConnectAuth ? 2 : 3}
            title={t('stepperNextTitle')}
          />
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: '65%' }}>{children}</div>

          <div style={{ flex: '35%', paddingLeft: '60px' }} className={styles.card}>
            <CardUnitedPricing />
          </div>
        </div>
      </div>

      {error !== 'true' ? (
        <Tooltip isOpenedByDefault={true}>
          <ul>
            <li>
              <i className={fr.cx('ri-information-fill')} />{' '}
              <b>
                Sans FranceConnect, ne jamais transmettre les informations de l’API Particulier tant que l’identité de
                l’usager n’est pas confirmée :
              </b>
              <br />
              <i>
                Dans cet exemple, que le quotient familial de Kevin soit récupéré ou non, aucune information ne sera
                cependant affichée, car l’identité de Kevin devra d’abord être vérifiée manuellement par un agent. Sa
                pièce d’identité est donc demandée.
              </i>
              <br />
              <br />
              Dans l’objectif de ne délivrer aucune donnée personnelle à un usager malintentionné, voici les règles à
              appliquer tant que l’identité de l’usager n’est pas confirmée :
              <ul>
                <li>
                  <b>Si l’appel à l’API fonctionne et permet d’accéder à l’information :</b>{' '}
                  <i>Ici, le quotient familial de Kevin.</i> L’interface ne doit pas transmettre cette information, ni
                  mentionner un succès (car il s’agit aussi d’une information du particulier).
                </li>
                <li>
                  <b>Si l’appel à l’API fonctionne et indique que l’information n’existe pas pour cet usager :</b>{' '}
                  L’interface ne doit pas le mentionner car il s’agit d’une information personnelle.{' '}
                  <i>
                    Dans l’exemple du quotient familial CAF ou MSA, indiquer que l’information est indisponible peut
                    laisser penser que la personne dont les informations ont été renseignées en paramètre d’appel n’est
                    pas allocataire.
                  </i>
                </li>
                <li>
                  <b>Enfin, si l’appel à l’API ne fonctionne pas :</b> Il est inutile de le préciser, cela permet de
                  brouiller l’information précédente du cas où l’appel fonctionne mais renvoie une réponse négative .{' '}
                </li>
              </ul>
              Pour chacun de ces cas, la suite de la démarche se fait donc a posteriori d’une vérification par un agent
              habilité, qui pourra accéder aux réponses de l’API le cas échéant.
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
