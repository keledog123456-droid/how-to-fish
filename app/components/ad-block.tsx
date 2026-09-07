'use client';

import { useEffect } from 'react';

const SCRIPT_SRC =
  'https://pl31225349.profitableratecpmnetwork.com/272ec937c29a6a1763a84dda3352a718/invoke.js';

const CONTAINER_ID = 'container-272ec937c29a6a1763a84dda3352a718';

export function AdBlock() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = SCRIPT_SRC;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="ad-block" aria-label="Advertisement">
      <div id={CONTAINER_ID} />
    </div>
  );
}
