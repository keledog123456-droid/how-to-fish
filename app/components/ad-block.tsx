'use client';

import { useEffect } from 'react';

const SCRIPT_SRC =
  'https://pl31224898.profitableratecpmnetwork.com/9606d6fe7e4f963fae11cfd412f2504c/invoke.js';

const CONTAINER_ID = 'container-9606d6fe7e4f963fae11cfd412f2504c';

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
