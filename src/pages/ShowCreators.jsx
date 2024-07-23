// src/pages/ShowCreators.jsx
import "../components/CreatorsCard.css";
import "./Creators.css";
import React, { useEffect, useState } from 'react';
import { supabase } from '../Client';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    const { data } = await supabase.from('creators').select('*');
    setCreators(data);
  };

  const deleteCreator = async (name) => {
    await supabase.from('creators').delete().eq('name', name);
    setCreators(creators.filter((creator) => creator.name !== name));
  };
  
  return (
    <div>
    {/* <div>
      <h1 id = "head">Content Creators</h1>
      <Link to="/add">
        <button>Add Creator</button>
      </Link>
      <Link to="/">
        <button>View All Creators</button>
      </Link>
      </div> */}
      <div className="center">
      {creators.length === 0 ? (
        <p>No creators found. Please add a creator.</p>
      ) :(
        
      <ul className="ul-container">
      {creators.map((creator) => (
        <oi className ="game-card" key={creator.name}>
        <Card key={creator.name} creator={creator} onDelete={deleteCreator} />
        </oi>
      ))}</ul>
      )}
    </div>
    </div>
  );
};

export default ShowCreators;
