import { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Dodano stanje za učitavanje
  const [error, setError] = useState(null); // Dodano stanje za greške

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error(`HTTP greška! Status: ${response.status}`);
        }
        const results = await response.json();
        setData(results.slice(0, 10)); // Prikaz samo prvih 10 rezultata
      } catch (error) {
        setError(error.message); // Postavljanje greške u state
      } finally {
        setLoading(false); // Završetak učitavanja, bilo da je uspjeh ili greška
      }
    };

    fetchData();
  }, []); // Pokreće se samo jednom nakon mountanja komponente

  if (loading) {
    return <p>Učitavanje...</p>;
  }

  if (error) {
    return <p>Greška: {error}</p>;
  }

  return (
    <div>
      <h2>Prvih 10 Postova:</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
