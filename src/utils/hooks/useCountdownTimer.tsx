import { useState, useEffect } from 'react';

/**
 * Кастомный хук для расчета обратного отсчета до заданной даты.
 * @param targetDate - Целевая дата в формате строки (например, '2029-09-16T00:00:00').
 * @returns Объект с оставшимися днями, часами, минутами и секундами.
 */
export function useCountdownTimer(targetDate: string) {
  /**
   * Функция для расчета оставшегося времени до заданной даты.
   * @returns Объект с оставшимися днями, часами, минутами и секундами.
   * Если время вышло, возвращает объект с нулями.
   */
  const calculateTimeLeft = () => {
    const now = new Date(); // Текущее время
    const difference = new Date(targetDate).getTime() - now.getTime(); // Разница в миллисекундах

    // Если целевая дата уже прошла, возвращаем нули
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Вычисляем дни, часы, минуты и секунды
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)), // Полные дни
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24), // Полные часы, оставшиеся после дней
      minutes: Math.floor((difference / (1000 * 60)) % 60), // Полные минуты, оставшиеся после часов
      seconds: Math.floor((difference / 1000) % 60), // Полные секунды, оставшиеся после минут
    };
  };

  /**
   * Состояние для хранения оставшегося времени.
   * Начальное значение рассчитывается сразу при загрузке компонента.
   */
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  /**
   * Эффект, который запускает обновление состояния каждую секунду.
   * Таймер очищается при размонтировании компонента.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // Обновляем состояние каждую секунду
    }, 1000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(timer);
  }, [targetDate]); // Зависимость от целевой даты

  /**
   * Возвращаем объект с рассчитанным временем.
   * Формат: { days, hours, minutes, seconds }
   */
  return timeLeft;
}

// Пример использования:
// const timeLeft = useCountdownTimer('2025-01-01T00:00:00');
// console.log(`До Нового года осталось: ${timeLeft.days} дней`);
