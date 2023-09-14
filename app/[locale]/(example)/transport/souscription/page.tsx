'use client';

import PurchaseInfo from '@/components/PurchaseInfo';
import PricingInfo from '@/components/transport/PricingInfo';
import Tooltip from '@/components/Tooltip';
import { useTranslations } from 'next-intl';
import { fr } from '@codegouvfr/react-dsfr';

export default function Page() {
  const t = useTranslations('DemonstratorLayout');

  return (
    <>
      <PurchaseInfo
        title={t('transport.subscribeTitle')}
        style={{ backgroundImage: 'url("/images/bg-transport.jpg")' }}
      />
      <PricingInfo />
      <Tooltip>
        <ul>
          <li>
            <i className={fr.cx('ri-information-fill')} /> Ceci est un conseil business concernant la page souscription
            du cas d&apos;usage du transport
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae aliquet nec. Hendrerit dolor magna eget est lorem
              ipsum dolor sit amet. Eu consequat ac felis donec et odio pellentesque. Id porta nibh venenatis cras sed
              felis eget velit aliquet. Habitant morbi tristique senectus et netus et malesuada fames ac. Nec dui nunc
              mattis enim ut.
            </p>
            <p>
              Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nec feugiat in fermentum posuere urna nec
              tincidunt praesent semper. Sit amet purus gravida quis. Semper auctor neque vitae tempus quam pellentesque
              nec. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Vitae tortor condimentum
              lacinia quis vel eros donec ac odio. Ultricies integer quis auctor elit sed vulputate mi sit amet. Dui ut
              ornare lectus sit amet.
            </p>
            <p>
              Faucibus purus in massa tempor nec feugiat. Eu consequat ac felis donec et odio pellentesque diam
              volutpat. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Et netus et malesuada fames.
              Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Fringilla urna porttitor rhoncus dolor
              purus. Ultrices gravida dictum fusce ut. Sit amet nisl purus in mollis nunc sed id. Id diam maecenas
              ultricies mi eget mauris. Ut lectus arcu bibendum at. Turpis egestas maecenas pharetra convallis posuere
              morbi leo urna.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <i className={fr.cx('ri-information-fill')} /> Ceci est un conseil technique concernant la page souscription
            du cas d&apos;usage du transport
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae aliquet nec. Hendrerit dolor magna eget est lorem
              ipsum dolor sit amet. Eu consequat ac felis donec et odio pellentesque. Id porta nibh venenatis cras sed
              felis eget velit aliquet. Habitant morbi tristique senectus et netus et malesuada fames ac. Nec dui nunc
              mattis enim ut.
            </p>
            <p>
              Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nec feugiat in fermentum posuere urna nec
              tincidunt praesent semper. Sit amet purus gravida quis. Semper auctor neque vitae tempus quam pellentesque
              nec. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Vitae tortor condimentum
              lacinia quis vel eros donec ac odio. Ultricies integer quis auctor elit sed vulputate mi sit amet. Dui ut
              ornare lectus sit amet.
            </p>
            <p>
              Faucibus purus in massa tempor nec feugiat. Eu consequat ac felis donec et odio pellentesque diam
              volutpat. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Et netus et malesuada fames.
              Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Fringilla urna porttitor rhoncus dolor
              purus. Ultrices gravida dictum fusce ut. Sit amet nisl purus in mollis nunc sed id. Id diam maecenas
              ultricies mi eget mauris. Ut lectus arcu bibendum at. Turpis egestas maecenas pharetra convallis posuere
              morbi leo urna.
            </p>
          </li>
          <li>
            <i className={fr.cx('ri-information-fill')} /> Ceci est troisième conseil technique concernant la page
            souscription du cas d&apos;usage du transport
          </li>
          <li>
            <i className={fr.cx('ri-information-fill')} /> Ceci est un quatrième conseil technique concernant la page
            souscription du cas d&apos;usage du transport
          </li>
        </ul>
      </Tooltip>
    </>
  );
}
