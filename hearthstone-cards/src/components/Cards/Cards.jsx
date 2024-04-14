/* eslint-disable react/prop-types */
import './Cards.css';

export const Cards = ({data, onActive, onId}) => {
  const onClickHandler = (id) => {
    onId(id);
    onActive(true);
  };

  const render = () => {
    if (data) {
      const items = data.map((item, index) => {
        if (item.img) {
          return (
            <div
              className='card'
              key={index}
              onClick={() => onClickHandler(index)}
            >
              <img src={item.img} alt={item.name} className='card_img' />
            </div>
          );
        }
        return null;
      });

      return items;
    } else {
      return null;
    }
  };

  const elements = render();

  return elements;
};
