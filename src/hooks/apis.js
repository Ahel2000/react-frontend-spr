import axios from 'axios';

const getStudentsutil = async () => {
  try {
    const students = await axios.get("http://localhost:8081/student/getAll");
    return students;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStudents = async (type) => {
  try {
    
    const students = getStudentsutil();
    return students;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};