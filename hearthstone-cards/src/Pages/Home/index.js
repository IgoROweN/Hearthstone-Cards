import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/Home.css';

export default function Home() {
  const [cardTypes, setCardTypes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await api.get('/cards');
        const results = response.data;

        console.log('results', results);

        setCardTypes(results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Hearthstone cards:', error);
        setLoading(false);
      }
    }
    fetchCards();
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

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          flexWrap: 'wrap',
          opacity: loading ? 0.5 : 1,
          pointerEvents: loading ? 'none' : 'auto',
        }}
      >
        {Object.keys(cardTypes).map((type, index) => (
          <div key={index}>
            <h2>{type}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {cardTypes[type].map((card, i) => (
                // Verifica se a carta tem uma imagem antes de renderizá-la
                card.img && (
                  <Link
                    key={i}
                    to={`/cards/${card.name}`}
                    className="card-link"
                  >
                    <div>
                      <img
                        src={card.img}
                        alt=""
                      />
                      <p className="nameHearthstone">
                        {card.name && card.name.toUpperCase()}
                      </p>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
