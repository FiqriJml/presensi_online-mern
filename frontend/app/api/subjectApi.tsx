import axios from 'axios';
const url = 'http://localhost:4000/api/subjects'
export const getSubjects = async () => {
  const response = await axios.get(url); // Sesuaikan dengan endpoint server Anda
  return response.data;
};

export const addSubject = async (subjectData: any) => {
    const response = await axios.post(url, subjectData); // Sesuaikan dengan endpoint server Anda
    return response.data;
  };

export const updateSubject = async (subjectId: string, subjectData: any) => {
const response = await axios.put(`${url}/${subjectId}`, subjectData); // Sesuaikan dengan endpoint server Anda
return response.data;
};

export const deleteSubject = async (subjectId: string) => {
    const response = await axios.delete(`${url}/${subjectId}`); // Sesuaikan dengan endpoint server Anda
    return response.data;
  };