import React from 'react';
import './styles.css';

const ListItem = ({ component, ...args }) => (
  <>
    <li>
      {component(args)}
    </li>
  </>
);

export default ListItem;
