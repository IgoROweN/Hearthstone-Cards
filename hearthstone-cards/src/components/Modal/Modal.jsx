/* eslint-disable react/prop-types */
import './Modal.css';

export const Modal = ({el, setIsActive}) => {
  const onclickHandler = (e) => {
    if (e.target && e.target.firstChild.children[1]) {
      setIsActive(false);
    }
  };

  return (
    <div className='modal-wrapper' onClick={(e) => onclickHandler(e)}>
      <div className='modal'>
        <div className='left'>
          <img src={el.img} alt='' className='modal_img' />
        </div>
        <div className='right'>
          {el.name && <div className='stat name'>{el.name}</div>}
          <div className='stats'>
            {el.rarity && <div className='stat'>Rarity: {el.rarity}</div>}
            {el.type && <div className='stat'>Type: {el.type}</div>}
          </div>
          <div className='stats'>
            {el.attack && <div className='stat'>Attack: {el.attack}</div>}
            {el.health && <div className='stat'>Health: {el.health}</div>}
            {el.cost ? <div className='stat'>Cost: {el.cost}</div> : null}
          </div>
          <div className='stats'>
            {el.playerClass && (
              <div className='stat'>Class: {el.playerClass}</div>
            )}
            {el.cardSet && <div className='stat'>Set: {el.cardSet}</div>}
          </div>
          {el.flavor && <div className='flavor'>{el.flavor}</div>}
        </div>
      </div>
    </div>
  );
};
