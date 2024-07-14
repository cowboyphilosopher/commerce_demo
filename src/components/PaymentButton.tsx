'use client';

import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

import { createCharge } from '@/components/ChargeGenerator';

export default function App() {
  const [hostedUrl, setHostedUrl] = useState('');

  useEffect(() => {
    const fetchChargeData = async () => {
      const chargeData = await createCharge();
      if (chargeData && chargeData.data && chargeData.data.hosted_url) {
        setHostedUrl(chargeData.data.hosted_url);
      }
    };

    fetchChargeData();
  }, []);

  const handleClick = () => {
    if (hostedUrl) {
      window.location.href = hostedUrl;
    }
  };

  return (
    <Button color="primary" onClick={handleClick} disabled={!hostedUrl}>
      Pay with Crypto
    </Button>
  );
}
