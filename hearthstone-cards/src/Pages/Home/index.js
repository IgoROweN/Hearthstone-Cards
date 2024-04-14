import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/Home.css';

export default function Home() {
  const [hearthstoneCards, setHearthstoneCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHearthstoneCards() {
      try {
        const response = await api.get('/cards');
        const results = response.data.results;

        if (!results) {
          throw new Error('Results are undefined or empty.');
        }

        const hearthstoneCardsData = await Promise.all(
          results.map(async (card) => {
            const cardResponse = await api.get(card.url);
            return cardResponse.data;
          })
        );

        setHearthstoneCards(hearthstoneCardsData);
      } catch (error) {
        console.error('Error fetching Hearthstone Cards:', error.message);
        setError('Error fetching Hearthstone information. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchHearthstoneCards();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {loading && (
        <div className="loading-overlay">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      {error && <p>{error}</p>}

      <div
        className="cards-container"
        style={{
          opacity: loading ? 0.5 : 1,
          pointerEvents: loading ? 'none' : 'auto',
        }}
      >
        {hearthstoneCards.map((card) => (
          <Link
            key={card.name}
            to={`/cards/${card.name}`}
            className={`card ${card.types[0].type.name}`}
          >
            <div>
              <img src={card.sprites.front_default} alt="Hearthstone Cards Sprite" />
              <p className='card-name'>{card.name.toUpperCase()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
