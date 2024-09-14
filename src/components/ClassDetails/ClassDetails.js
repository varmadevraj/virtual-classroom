import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ClassDetails.css'

function ClassDetails() {
  const { id } = useParams();
  const [classDetail, setClassDetail] = useState(null);

  useEffect(() => {
    async function fetchClassDetail() {
      try {
        const response = await axios.get(`/api/classes/${id}`);
        setClassDetail(response.data);
      } catch (error) {
        console.error('Error fetching class detail', error);
      }
    }
    fetchClassDetail();
  }, [id]);

  if (!classDetail) return <div>Loading...</div>;

  return (
    <div>
      <h1>{classDetail.name}</h1>
      <div>
        <h2>Units</h2>
        <ul>
          {classDetail.units.map((unit) => (
            <li key={unit.id}>{unit.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Sessions</h2>
        <ul>
          {classDetail.sessions.map((session) => (
            <li key={session.id}>
              {session.name}
              <ul>
                {session.lectures.map((lecture) => (
                  <li key={lecture.id}>
                    {lecture.title}
                    {/* Implement comments and nested discussions here */}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClassDetails;
