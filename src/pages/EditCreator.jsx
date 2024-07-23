// src/pages/EditCreator.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../Client';
import "./Edit-Creator.css"


const EditCreator = () => {
    const { Name } = useParams();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [ig_url, setIg_Url] = useState('');
    const [twitter_url, setTwitter_Url] = useState('');
    const [tictok_url, setTictok_Url] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchCreator = async () => {
        const { data } = await supabase
          .from('creators')
          .select('*')
          .eq('name', Name)
          .single();
        if (data) {
          setName(data.name);
          setUrl(data.url);
          setDescription(data.description);
          setPhotoURL(data.photoURL);
          setIg_Url(data.ig_url);
          setTwitter_Url(data.twitter_url);
          setTictok_Url(data.tictok_url);

        }
      };
  
      fetchCreator();
    }, [Name]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await supabase
        .from('creators')
        .update({ name:name, url, description, photoURL, ig_url,twitter_url,tictok_url})
        .eq('name', Name);
      navigate('/');
    };
  
    const handleCancel = () => {
      navigate('/');
    };
  
    const handleDelete = async () => {
      await supabase
        .from('creators')
        .delete()
        .eq('name', Name);
      navigate('/');
    };
  
    return (
        <div className="edit-creator-container">
      <form className="edit-creator-form" onSubmit={handleSubmit}>
        <h1>Edit Creator</h1>
        <label htmlFor="name">Creator's Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="url">Video Account URL</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label htmlFor="ig_url">Instgram URL</label>
        <input
          type="text"
          id="ig_url"
          value={ig_url}
          onChange={(e) => setIg_Url(e.target.value)}
        />
        <label htmlFor="twitter_url">X(Twitter) URL</label>
        <input
          type="text"
          id="twitter_url"
          value={twitter_url}
          onChange={(e) => setTwitter_Url(e.target.value)}
        />

        <label htmlFor="tictok_url">Tictok URL</label>
        <input
          type="text"
          id="tictok_url"
          value={tictok_url}
          onChange={(e) => setTictok_Url(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="photoURL">Photo URL</label>
        <input
          type="text"
          id="photoURL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <div className="button-group">
          <button type="submit">Save Changes</button>
          <button type="button" className = "cancel-button" onClick={handleCancel}>Cancel</button>
          <button type="button" className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
      </form>
      </div>
    );
  };
  



// const EditCreator = () => {
//   const { id } = useParams();
//   const [name, setName] = useState('');
//   const [url, setUrl] = useState('');
//   const [description, setDescription] = useState('');
//   const [photoURL, setPhotoURL] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCreator = async () => {
//       const { data } = await supabase.from('creators').select('*').eq('id', id).single();
//       setName(data.name);
//       setUrl(data.url);
//       setDescription(data.description);
//       setPhotoURL(data.photoURL);
//     };

//     fetchCreator();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await supabase.from('creators').update({ name, url: url, description, photoURL: photoURL }).eq('id', id);
//     navigate('/');
//   };
//   const cancel = () => {
//     navigate('/');
//   };
//   const handleDelete = async () => {
//     const { error } = await supabase
//       .from('creators')
//       .delete()
//       .eq('id', id);

//     if (error) {
//       console.error(error);
//     } else {
//       navigate('/');
//     }
//   };

//   return (
//     <div >
//     <h2>Edit Creator</h2>
    
//     <div className="edit-page-content">
    
//    <div>
//    <h2>Edit Creatorfkfjffjif</h2>
   
//    <span className='txt1'>
//     <form  onSubmit={handleSubmit}>
        
//       <div className='form-group'>
        
//       <label htmlFor='name' > Name</label>
//       <input
//         id = "name"
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       </div>
//       <div>
//       <label htmlFor='videoURL' className='margin-right'> Youtube Channel URL</label>
//       <input
//         id = "videoURL"
//         type="text"
//         placeholder="Video Account URL"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//       />
//       </div>
//       <div >
//       <label htmlFor='description' className='margin-right'> Description</label>
//       <textarea
//         id='description'
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className = "textbox"
//       />
//       </div>
//       <div>
//         <label htmlFor='photo-URL'>Photo URL</label>
//       <input
//         id = 'photo-URL'
//         type="text"
//         placeholder="Photo URL"
//         value={photoURL}
//         onChange={(e) => setPhotoURL(e.target.value)}
//       />
      
//       </div>
//       <button type="submit">Update Creator</button>
//       <button type="button" onClick={cancel}>cancel</button>
//       <button type="button" onClick={handleDelete}>Delete</button>
      
//     </form>
//     </span>
    
//     </div>
//     </div>
    
//     </div>
//   );
// };

export default EditCreator;
