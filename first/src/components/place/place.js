import React, { useEffect, useState } from "react";
import styles from "./Place.module.css"; // Подключаем стили CSS-модуля

const Place = () => {
  const apiKey = 'e771feb9f7ed47e986f125026241301';
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const gettingWeather = async () => {
    try {
      const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Ошибка при получении данных о погоде:", error.message);
    }
  };

  useEffect(() => {
    if (city) {
      gettingWeather();
    }
  }, []);

  return (
    <div className={styles.container}>
      <input
      placeholder="Sity"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={styles.inputField}
      />
      <button onClick={gettingWeather} className={styles.button}>
        Получить погоду
      </button>

      {weatherData && (
        <div className={styles.weatherInfo}>
                
          <h2>{weatherData.location.name}</h2>
          <p>Температура: {weatherData.current.temp_c}°C</p>
          <p>Погода: {weatherData.current.condition.text}</p>
          <p>Ветер: {weatherData.current.wind_kph} км/ч, {weatherData.current.wind_dir}</p>
          <p>Влажность: {weatherData.current.humidity}%</p>
          {/* Другие детали в зависимости от структуры ответа вашего API */}
        </div>
      )}
    </div>
  );
};

export default Place;