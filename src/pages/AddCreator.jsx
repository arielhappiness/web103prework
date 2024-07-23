// src/pages/AddCreator.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../Client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faIdBadge, faLink, faInfoCircle, faImage } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Add-Creator.css';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [id, setId] = useState('');
  const [ig_url, setIg_Url] = useState('');
  const [twitter_url, setTwitter_Url] = useState('');
  const [tictok_url, setTictok_Url] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').insert(
        [{ name:name, url: url, description, 
            photoURL: photoURL, ig_url:ig_url,
            twitter_url:twitter_url, tictok_url:tictok_url}]
        );
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="add-page">
    <form onSubmit={handleSubmit}>
      <h3>Add New Creator</h3>
      <div className="form-group">
      <div className='out'>
      <FontAwesomeIcon className='icon' icon={faUser} />
        <label htmlFor="name">Creator's Name</label>
        
        </div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      {/* <div className="form-group">
        <div className='out'>
      <FontAwesomeIcon className='icon' icon={faIdBadge} />
        <label htmlFor='ID'>ID</label>
        </div>
        
      <input
        type="text"
        placeholder="Please put the sum of creators, then plus one to the number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        id = "ID"
      />
      </div> */}

      <div className="form-group">
      <div className='out'>
      <FontAwesomeIcon className='icon' icon={faYoutube} />
          <label htmlFor="url">Youtube Account URL</label>
          </div>
      <input
        type="text"
        placeholder="Video Account URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        id="url"
      />
      </div>

      <div className="form-group">
      <div className='out'>
      <FontAwesomeIcon className='icon' icon={faInstagram} />
          <label htmlFor="ig_url">Instagram URL</label>
          </div>
      <input
        type="text"
        placeholder="Instagram URL(Optional)"
        value={ig_url}
        onChange={(e) => setIg_Url(e.target.value)}
        id="ig_url"
      />
      </div>

      <div className="form-group">
      <div className='out'>
      <FontAwesomeIcon className='icon' icon={faTwitter} />
          <label htmlFor="twitter_url">Twitter URL</label>
          </div>
      <input
        type="text"
        placeholder="Twitter URL((Optional))"
        value={twitter_url}
        onChange={(e) => setTwitter_Url(e.target.value)}
        id="twitter_url"
      />
      </div>

      <div className="form-group">
      <div className='out'>
      <FontAwesomeIcon className='icon' icon={faTiktok} />
          <label htmlFor="tictok_url">Tictok URL</label>
          </div>
      <input
        type="text"
        placeholder="Tictok URL((Optional))"
        value={tictok_url}
        onChange={(e) => setTictok_Url(e.target.value)}
        id="tictok_url"
      />
      </div>


      <div className="form-group">
      <div className='out'>
      <FontAwesomeIcon className='icon' icon={faInfoCircle} />
          <label htmlFor="description">Description</label>
          </div>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id="description"
      />
      </div>
      <div className="form-group">
      <div className='out'>
      <FontAwesomeIcon className='icon' icon={faImage} />
          <label htmlFor="photoURL">Photo URL</label>
          </div>
      <input
        type="text"
        placeholder="Photo URL"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
        id="photoURL"
      />
      </div>
      <div className="button-group">
      <button className='add-button' type="submit">Add Creator</button>
      <button className ='cancel-button' type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
    </div>
  );
};

export default AddCreator;
