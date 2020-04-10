import React from 'react';

const List = ({items}) => (
    <ul>
        <h1>Seznam</h1>
        {
            items.map((item, index) => <li key={index}>{item}
                <button itemID={index}>Odeber</button>
            </li>)
        }
    </ul>
);

export default List;
