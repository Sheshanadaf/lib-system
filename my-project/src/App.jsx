import React, { useEffect, useState } from 'react';
import { getLibraryData } from './services/api';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getLibraryData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="text-4xl text-center">Libraryj Management System</h1>
      <div className="mt-8 text-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item.id} className="py-2">{item.name} by {item.author} ({item.year})</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
