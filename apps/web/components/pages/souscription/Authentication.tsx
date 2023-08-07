import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import styles from './Authentication.module.css';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { FranceConnectButton } from '@codegouvfr/react-dsfr/FranceConnectButton';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { PasswordInput } from '@codegouvfr/react-dsfr/blocks/PasswordInput';
import { Tag } from '@codegouvfr/react-dsfr/Tag';

export default function Authentication() {
  return (
    <div
      className={'fr-container'}
      style={{
        ...fr.spacing('padding', {
          top: '15v',
          bottom: '15v',
        }),
        width: '100%',
      }}
    >
      <Stepper currentStep={1} nextTitle="Éligibilité au tarif social" stepCount={3} title="S'authentifier" />

      <div className={styles.choiceContainer}>
        <h2>Se connecter</h2>
        <div className={styles.choice}>
          <div className={styles.leftChoice}>
            <h3 className={styles.leftTitle}>Se connecter avec FranceConnect :</h3>
            <Tag className={styles.tag} iconId="fr-icon-notification-3-fill">
              En cas de demande de tarif réduit: Souscription en 3 clics
            </Tag>
            <FranceConnectButton url="https://example.com" />
          </div>
          <div className={styles.separator}>
            <span className={styles.orText}>Ou</span>
          </div>
          <div className={styles.rightChoice}>
            <h3 className={styles.rightTitle}>Se connecter avec son compte :</h3>
            <Tag className={styles.tag} iconId="fr-icon-notification-3-fill">
              En cas de demande de tarif réduit: Délais moyen de 15 jours
            </Tag>
            <Input
              className={styles.centeredInput}
              label="Identifiant"
              state="default"
              stateRelatedMessage="Text de validation / d'explication de l'erreur"
            />

            <PasswordInput className={styles.centeredInput} label="Mot de passe" />
            {/* <div className={styles.forgotPassword}>Mot de passe oublié ?</div> */}
            <Button
              size="large"
              /*onClick={function noRefCheck() {}}*/
              iconId="fr-icon-arrow-right-line"
              iconPosition="right"
            >
              Se connecter
            </Button>
          </div>
        </div>
        <div className={styles.centeredText}>
          <h4 style={{ marginBottom: 0 }} className={styles.buttonBottom}>
            Pas encore de compte ?
          </h4>
          <Button
            style={{ color: '#636363' }}
            iconId="fr-icon-arrow-right-line"
            iconPosition="right"
            // onClick={function noRefCheck() {}}
            priority="tertiary no outline"
          >
            Créer un compte
          </Button>
        </div>
      </div>
    </div>
  );
}
