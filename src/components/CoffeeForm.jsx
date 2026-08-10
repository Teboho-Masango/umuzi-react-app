import React, { useState, useEffect } from "react";

export default function CoffeeForm({ onAddBrew, onUpdateBrew, editingBrew }) {
  const [beanName, setBeanName] = useState("");
  const [brewMethod, setBrewMethod] = useState("");
  const [coffeeGrams, setCoffeeGrams] = useState("");
  const [waterGrams, setWaterGrams] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (editingBrew) {
      setBeanName(editingBrew.bean_name);
      setBrewMethod(editingBrew.brew_method);
      setCoffeeGrams(editingBrew.coffee_grams);
      setWaterGrams(editingBrew.water_grams);
      setNotes(editingBrew.notes);
      setRating(editingBrew.rating.toString());
    } else {
      setBeanName("");
      setBrewMethod("");
      setCoffeeGrams("");
      setWaterGrams("");
      setNotes("");
      setRating("");
    }
  }, [editingBrew]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !beanName.trim() ||
      !brewMethod ||
      !coffeeGrams ||
      !waterGrams ||
      !notes.trim() ||
      !rating
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    const brewData = {
      bean_name: beanName.trim(),
      brew_method: brewMethod,
      coffee_grams: Number(coffeeGrams),
      water_grams: Number(waterGrams),
      notes: notes.trim(),
      rating: Number(rating),
    };

    if (editingBrew) {
      brewData.id = editingBrew.id;
      onUpdateBrew(brewData);
    } else {
      onAddBrew(brewData);
    }

    setBeanName("");
    setBrewMethod("");
    setCoffeeGrams("");
    setWaterGrams("");
    setNotes("");
    setRating("");
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
        step="1"
        placeholder="Coffee (grams)"
        value={coffeeGrams}
        onChange={(e) => setCoffeeGrams(e.target.value)}
        required
      />

      <input
        type="number"
        step="1"
        placeholder="Water (grams)"
        value={waterGrams}
        onChange={(e) => setWaterGrams(e.target.value)}
        required
      />

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{
          color: rating === "" ? "#757575" : "#000000",
        }}
        required
      >
        <option value="" disabled hidden>
          Rating (1-5)
        </option>
        <option value="1" style={{ color: "#000000" }}>
          1 - Poor
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
          5 - Excellent
        </option>
      </select>

      <textarea
        placeholder="Tasting Notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        required
      />

      <button type="submit">{editingBrew ? "Update Brew" : "Log It!"}</button>
    </form>
  );
}
