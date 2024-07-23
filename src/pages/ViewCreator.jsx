// src/pages/ViewCreator.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../Client';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

import "./View-Creator.css";


const ViewCreator = () => {
  const { Name } = useParams();
  const [creator, setCreator] = useState(null);
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };
  const goEdit = () =>{
    navigate(`/edit/${creator.name}`);

  }
  const handleDelete = async () => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('name', Name);

    if (error) {
      console.error(error);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select('*').eq('name', Name).single();
      setCreator(data);
    };


    fetchCreator();
  }, [Name]);

  if (!creator) {
    return <div>Loading..., Please Check the Creator' information</div>;
  }

  return (
    <div className="view-creator-page">
      <div className="creator-card">
        <div className="left-side">
          <img src={creator.photoURL} alt={creator.name} />
        </div>
        <div className="right-side">
          <h2>{creator.name}</h2>
          <p>{creator.description}</p>
          <div className='sns'>
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
        </div>
      </div>
      <div className="buttons">
        <button className='button-edit' onClick={goEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => navigate('/')}>View All Creators</button>
      </div>
    </div>

  );
};

export default ViewCreator;
