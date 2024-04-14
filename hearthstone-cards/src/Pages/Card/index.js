import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/Card.css';

export default function FindCards() {
  const { CardsName } = useParams();
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await api.get(`/cards/${CardsName}`);
        setCards(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching Hearthstone Card details.');
        setLoading(false);
      }
    }
    fetchCards();
  }, [CardsName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="card-details">
      <h2>{cards.name}</h2>
      <img src={cards.sprites.front_default} alt="Hearthstone Card" />
      <p>
        Type:
        {cards.types.map((type) => (
          <span
            className={`${type.type.name}`}
            style={{ padding: '5px', margin: '5px', borderRadius: '5px' }}
            key={type.type.name}
          >
            {type.type.name}
          </span>
        ))}
      </p>
      <Link to="/" className="back-button">
        Voltar
      </Link>
    </div>
  );
}
