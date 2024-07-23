// src/components/Card.jsx


import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './CreatorsCard.css';

const Card = ({ creator, onDelete }) => {
  const handleDelete = () => {
    onDelete(creator.name);
  };

  return (
    <div className="game-cards">
      <img className ="game-img" src={creator.photoURL} alt={creator.name} />
      <h2><Link className='black' to={`/creators/${creator.name}`}>{creator.name}</Link></h2>
      <p>{creator.description}</p>
      
      <div >
      <a className="creator-url" href={creator.url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faYoutube} className="youtube-icon"  />
      </a>
      <a className="creator-url" href={creator.ig_url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="instrgram-icon"  />
      </a>

      <a className="creator-url" href={creator.twitter_url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} className="twitter-icon"  />
      </a>

      <a className="creator-url" href={creator.tictok_url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTiktok} className="tictok-icon"  />
      </a>
      
      </div>
     
      <div className='button-flex'>
      
      <Link to={`/creators/${creator.name}`}>
      <button>View Details</button>
      </Link>
      
      
      <Link to={`/edit/${creator.name}`}><button>Edit</button></Link>
      
      <button  onClick={handleDelete}>Delete</button>
    </div>
    </div>
  );
};

export default Card;
