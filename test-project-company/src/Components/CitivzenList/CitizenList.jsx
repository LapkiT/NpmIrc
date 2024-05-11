import React, { useState, useEffect } from 'react';
import './CitizenList.module.css';

const CitizenList = () => {
  const [citizens, setCitizens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Добавлено состояние для ошибок

  useEffect(() => {
    fetch('http://localhost:3000/citizens')
      .then(response => {
        if (!response.ok) { // Проверка статуса ответа
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (Array.isArray(data)) { // Проверка, что полученные данные - это массив
          setCitizens(data);
          setError(null); // Очистка сообщений об ошибках при успешной загрузке данных
        } else {
          throw new Error('Data is not an array'); // Вызов ошибки, если данные не в ожидаемом формате
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load citizens.'); // Установка сообщения об ошибке
        setLoading(false); // Установка состояния загрузки в false в случае ошибки
      });
  }, []);

  return (
    <div className="citizen-list">
      <h1>Список Граждан</h1>
      {(
        <ul>
          {citizens.map(citizen => (
            <li key={citizen.id}>{citizen.name}</li> // Вывод информации о гражданах
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitizenList;
