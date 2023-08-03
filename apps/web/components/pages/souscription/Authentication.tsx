import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';

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
    </div>
  );
}
