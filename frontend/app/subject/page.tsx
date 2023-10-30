'use client'
import React, { useState, useEffect } from 'react';
import { getSubjects, addSubject, updateSubject, deleteSubject } from '../api/subjectApi';

const Home: React.FC = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');

  const fetchSubjects = async () => {
    const subjectsData = await getSubjects();
    setSubjects(subjectsData);
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  const handleAddSubject = async () => {
    await addSubject({ name: newSubject });
    fetchSubjects();
    setNewSubject('');
  };

  const handleUpdateSubject = async (id: string, newName: string) => {
    await updateSubject(id, { name: newName });
    fetchSubjects();
  };

  const handleDeleteSubject = async (id: string) => {
    await deleteSubject(id);
    fetchSubjects();
  };

  return (
    <div>
      <h1>Subjects</h1>
      <ul>
        {subjects.map((subject: any) => (
          <li key={subject._id}>
            {subject.name}
            <button onClick={() => handleUpdateSubject(subject._id, `${subject.name} (Updated)`)}>
              Update
            </button>
            <button onClick={() => handleDeleteSubject(subject._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Add New Subject</h2>
        <input type="text" value={newSubject} onChange={(e) => setNewSubject(e.target.value)} />
        <button onClick={handleAddSubject}>Add</button>
      </div>
    </div>
  );
};

export default Home;
