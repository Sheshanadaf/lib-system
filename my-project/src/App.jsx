import React, { useEffect, useState } from 'react';
import { getLibraryData } from './services/api';
import { FaBook, FaSearch, FaUser, FaFilter, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const filteredData = data.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase()) && (filter === 'all' || book.genre === filter)
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-5 shadow-md bg-purple-700 text-white">
        <div className="flex items-center space-x-3">
          <FaBook className="text-3xl text-yellow-400" />
          <h1 className="text-3xl font-bold">Library Management System Updated</h1>
        </div>
        <div className="flex space-x-4">
          <button className="bg-yellow-400 px-4 py-2 rounded-lg text-black hover:bg-yellow-500">Home</button>
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-700">Books</button>
          <button className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-700">Members</button>
          {isLoggedIn ? (
            <button className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-700" onClick={handleLogout}>
              <FaSignOutAlt className="inline mr-2" /> Logout
            </button>
          ) : (
            <button className="bg-gray-500 px-4 py-2 rounded-lg text-white hover:bg-gray-700" onClick={handleLogin}>
              <FaSignInAlt className="inline mr-2" /> Login
            </button>
          )}
        </div>
      </header>

      {/* Search & Filter */}
      <div className="flex justify-center mt-6 space-x-4">
        <div className="relative w-1/2">
          <input
            type="text"
            className="w-full p-3 rounded-lg text-black"
            placeholder="Search for books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-4 text-gray-500" />
        </div>
        <select
          className="p-3 rounded-lg text-black"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Genres</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="mystery">Mystery</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>

      {/* Book List */}
      <div className="mt-8 p-6 bg-white mx-10 rounded-lg shadow-lg text-black">
        {loading ? (
          <p className="text-center text-xl">Loading...</p>
        ) : (
          <ul className="space-y-4">
            {filteredData.map((item) => (
              <li key={item.id} className="p-4 bg-blue-100 rounded-lg shadow-sm flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">by {item.author} ({item.year})</p>
                </div>
                <button className="bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-700">Borrow</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;