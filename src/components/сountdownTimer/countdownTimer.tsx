import React from 'react';
import { useCountdownTimer } from '../../utils';
import { CountdownUI } from '../ui/countdown';

export const CountdownTimer: React.FC = () => {
  const targetDate = '2029-09-16T00:00:00';
  const timeLeft = useCountdownTimer(targetDate);

  return <CountdownUI {...timeLeft} />;
};

export default CountdownTimer;
