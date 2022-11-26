import { useState, useEffect } from 'react';
import { getStudents } from './apis';

const useDataFetcher = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState(0)

  useEffect(() => {
    setIsLoading(true);
    getStudents()
      .then((students) => {
        setStudents(students);
        setIsLoading(false);
        console.log("datafetcher", students)
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);

  return { isLoading, students };
};

export default useDataFetcher;
