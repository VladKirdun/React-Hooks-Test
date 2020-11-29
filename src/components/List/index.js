import React from 'react';
import ListItem from "../ListItem";
import Spinner from "../Spinner";
import './styles.css';

const List = ({ children, component, isLoading }) => (
  <>
    <ul>
      {children.map(item => (<ListItem key={item.id} component={component} {...item} />))}
    </ul>
    {isLoading && <Spinner/>}
  </>
);

export default List;
