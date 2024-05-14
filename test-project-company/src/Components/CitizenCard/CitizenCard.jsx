import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CitizenCard.module.css';
import ClipLoader from "react-spinners/ClipLoader";

const CitizenCard = () => {
  const { id } = useParams(); // Получение ID из URL
  const [citizen, setCitizen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/citizens/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCitizen(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load citizen details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p><ClipLoader
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
  /></p>;
  if (error) return <p>{error}</p>;
  if (!citizen) return <p>No citizen found.</p>;

  return (
    <div className={styles.cardContainer}>
    <h1 className={styles.cardHeader}>Citizen Details</h1>
      <img src={citizen.img}/>
    <div className={styles.cardBody}>
      <strong className={styles.strong}>Name:</strong> {citizen.name}
      <br />
      <strong className={styles.strong}>Date of Birth:</strong> {citizen.birthDate}
      <br />
      <strong className={styles.strong}>Family Members:</strong> {citizen.familyMembers}
      <br />
      <strong className={styles.strong}>Education:</strong> {citizen.education}
      <br />
      <strong className={styles.strong}>Tickets:</strong>
      <ul className={styles.detailList}>
        {citizen.tickets.map(ticket => (
          <li key={ticket.id} className={styles.detailItem}>
            {ticket.issue} - {ticket.status}
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default CitizenCard;
