import React from 'react';
import './styles.css';

const Photo = React.memo(({ id, title, thumbnailUrl }) => (
  <>
    <p>{`${id}. ${title}`}</p>
    <img src={thumbnailUrl} alt={'item photos'} />
  </>
));

export default Photo;
