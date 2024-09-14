import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
function Home() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function fetchClasses() {
      try {
        const response = await axios.get('/api/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes', error);
      }
    }
    fetchClasses();
  }, []);

  return (
    <div>
      <h1>Virtual Classroom</h1>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            <a href={`/class/${classItem.id}`}>{classItem.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
