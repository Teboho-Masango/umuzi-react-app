import React, { useState, useEffect } from "react";
import CoffeeForm from "./components/CoffeeForm.jsx";
import BrewList from "./components/CoffeeList.jsx";

const API_URL = "http://127.0.0.1:8000/brews";

function App() {
  const [brews, setBrews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBrews();
  }, []);

  const fetchBrews = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch brews from server");
      const data = await response.json();
      setBrews(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(
        "Could not connect to backend server. Make sure FastAPI is running!",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAddBrew = async (newBrewData) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBrewData),
      });

      if (!response.ok) throw new Error("Failed to save brew");

      const savedBrew = await response.json();
      setBrews((prevBrews) => [savedBrew, ...prevBrews]);
    } catch (err) {
      console.error(err);
      alert("Error saving brew to database!");
    }
  };

  const handleDeleteBrew = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete brew");

      setBrews((prevBrews) => prevBrews.filter((brew) => brew.id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting brew from database!");
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1> Log It...My Brew!</h1>
        <p>Every brew has a story — tasting notes keep track of it.</p>
      </header>

      {error && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#ffebee",
            color: "#c62828",
            borderRadius: "4px",
            marginBottom: "20px",
          }}
        >
          {error}
        </div>
      )}

      <main style={{ display: "grid", gap: "30px" }}>
        <CoffeeForm onAddBrew={handleAddBrew} />

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading brews...</p>
        ) : (
          <BrewList brews={brews} onDeleteBrew={handleDeleteBrew} />
        )}
      </main>
    </div>
  );
}

export default App;
