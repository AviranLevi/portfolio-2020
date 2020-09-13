import React from 'react';
import Title from '../title';

const Card = ({ title = '', jobTitle = '', location = '', links = [] }) => (
  <div className='card center-items'>
    <div className='card-titles center-items'>
      <Title className='card-title' text={title} />

      <h3 className='card-job-title'>
        {jobTitle} from <span>{location}</span>
      </h3>
    </div>

    <div className='cards-links center-items'>
      {links.length
        ? links.map((link) => (
            <a className='link center-items' href={link.url} style={link.style}>
              {link.icon}
            </a>
          ))
        : null}
    </div>

    <button>Lets talk!</button>
  </div>
);

export default Card;
