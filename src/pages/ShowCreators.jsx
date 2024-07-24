// src/pages/ShowCreators.jsx
import "../components/CreatorsCard.css";
import "./Creators.css";
import React, { useEffect, useState } from 'react';
import { supabase } from '../Client';
import Card from '../components/Card';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: {
        duration: 1.5, // Adjust this for slower animation
      }
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
        
      <motion.ul className="ul-container"
      variants={containerVariants}
            initial="hidden"
            animate="visible">
      {creators.map((creator) => (
        <motion.oi className ="game-card" key={creator.name} variants={itemVariants}>
        <Card key={creator.name} creator={creator} onDelete={deleteCreator} />
        </motion.oi>
      ))}</motion.ul>
      )}
    </div>
    </div>
  );
};

export default ShowCreators;
