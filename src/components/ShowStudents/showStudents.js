import React from 'react';
import useDataFetcher from '../../hooks/dataFetcher';
import StudentItem from '../StudentItem/studentitem';
import './showStudents.css'

const ShowStories = ({ type }) => {
    
  const { isLoading, students } = useDataFetcher();

   console.log("showstudents", students)
console.log(students.data)

const data = students.data
  return (
    <>
      <div className='students-container-wrapper'>
        {data.map((student) => 
            <StudentItem name={student.name} address={student.address}/>
        )}
      </div>
    </>
  );
};

export default ShowStories;