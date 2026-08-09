import React, { useState } from "react";

export default function CoffeeForm({ onAddBrew }) {
  let [beanName, setBeanName] = useState("");
  let [brewMethod, setBrewMethod] = useState("");
  let [coffeeGrams, setCoffeeGrams] = useState("");
  let [waterGrams, setWaterGrams] = useState("");
  let [notes, setNotes] = useState("");
  let [rating, setRating] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!beanName.trim() || !coffeeGrams || !waterGrams || !notes.trim()) {
      alert("Field cannot be left blank");
      return;
    }

    let newBrew = {
      id: Date.now(),
      beanName,
      brewMethod,
      coffeeGrams: Number(coffeeGrams),
      waterGrams: Number(waterGrams),
      notes,
    };

    onAddBrew(newBrew);

    setBeanName("");
    setCoffeeGrams("");
    setWaterGrams("");
    setNotes("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginBottom: "32px",
      }}
    >
      <input
        type="text"
        placeholder="Bean Name (e.g., Guatemala Huehuetenango)"
        value={beanName}
        onChange={(e) => setBeanName(e.target.value)}
        required
      />
      <select
        value={brewMethod}
        onChange={(e) => setBrewMethod(e.target.value)}
        required
        style={{
          color: brewMethod === "" ? "#757575" : "#000000",
        }}
      >
        <option value="" disabled hidden>
          Method
        </option>
        <option value="V60" style={{ color: "#000000" }}>
          V60
        </option>
        <option value="Aeropress" style={{ color: "#000000" }}>
          Aeropress
        </option>
        <option value="French Press" style={{ color: "#000000" }}>
          French Press
        </option>
        <option value="Espresso" style={{ color: "#000000" }}>
          Espresso
        </option>
        <option value="Chemex" style={{ color: "#000000" }}>
          Chemex
        </option>
      </select>
      <input
        type="number"
        placeholder="Coffee (grams)"
        value={coffeeGrams}
        onChange={(e) => setCoffeeGrams(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Water (grams)"
        value={waterGrams}
        onChange={(e) => setWaterGrams(e.target.value)}
        required
      />
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          fontSize: "14px",
        }}
      />
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          fontSize: "14px",
        }}
      >
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
          style={{
            color: rating === "" ? "#757575" : "#0000",
          }}
        >
          <option value="" disabled hidden style={{ color: "#757575" }}>
            Rating (1-5)
          </option>

          <option value="" disabled hidden>
            Rating (1-5)
          </option>
          <option value="1" style={{ color: "#000000" }}>
            1- Poor
          </option>
          <option value="2" style={{ color: "#000000" }}>
            2 - Fair
          </option>
          <option value="3" style={{ color: "#000000" }}>
            3 - Good
          </option>
          <option value="4" style={{ color: "#000000" }}>
            4 - Very Good
          </option>
          <option value="5" style={{ color: "#000000" }}>
            5- Excellent
          </option>
        </select>
      </label>

      <textarea
        placeholder="Tasting Notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        required
      />
      <button type="submit">Log It! </button>
    </form>
  );
}
