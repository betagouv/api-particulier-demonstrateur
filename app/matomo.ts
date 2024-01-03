'use client';

import { useEffect } from 'react';
import React from 'react';

export const MatomoTracker: React.FC = () => {
  useEffect(() => {
    var _paq = ((window as any)._paq = (window as any)._paq || []);
    _paq.push(['setExcludedQueryParams', ['simulationId', '_csrf']]);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function () {
      var u = 'https://stats.data.gouv.fr/';
      _paq.push(['setTrackerUrl', u + 'matomo.php']);
      _paq.push(['setSiteId', '293']);
      var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
      g.async = true;
      g.src = u + 'matomo.js';
      if (s.parentNode) {
        s.parentNode.insertBefore(g, s);
      }
    })();
  }, []);

  return null;
};
