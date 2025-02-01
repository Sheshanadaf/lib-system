import React, { useEffect, useState } from 'react';
import { getLibraryData } from './services/api'; // Import the API service

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const result = await getLibraryData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="text-4xl text-center">Library Management System</h1>
      <div className="mt-8 text-center">
        {data ? (
          <p>{data}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
