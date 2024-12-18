import React from 'react';

interface CountdownUIProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownUI: React.FC<CountdownUIProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => (
  <div
    style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    }}
  >
    <h2>Обратный отсчет до 16 сентября 2029 года</h2>
    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
      {days} дней {hours} часов {minutes} минут {seconds} секунд
    </div>
  </div>
);
