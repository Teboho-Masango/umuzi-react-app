import React from "react";

export default function CoffeeList({ brews, onDeleteBrew, onEditClick }) {
  if (!brews || brews.length === 0) {
    return (
      <p style={{ textAlign: "center" }}>No brews logged yet. Add your fav!</p>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {brews.map((brew) => (
        <div
          key={brew.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            backgroundColor: "#f9f9f9",
            position: "relative",
          }}
        >
          <h3 style={{ margin: "0 0 8px 0" }}>{brew.bean_name}</h3>
          <p style={{ margin: "4px 0" }}>
            <strong>Ratio:</strong> {brew.coffee_grams} g coffee /{" "}
            {brew.water_grams} g water
          </p>
          {brew.notes && (
            <p style={{ margin: "8px 0 0 0", fontStyle: "italic" }}>
              "{brew.notes}"
            </p>
          )}
          {brew.rating && (
            <p style={{ margin: "8px 0 0 0" }}>Rating: {brew.rating} / 5</p>
          )}

          {/* Add Edit and Delete buttons */}
          <div style={{ position: "absolute", top: "8px", right: "8px" }}>
            <button
              style={{
                marginRight: "8px",
                padding: "4px 8px",
                fontSize: "0.9em",
                cursor: "pointer",
              }}
              onClick={() => onEditClick(brew)}
            >
              Edit
            </button>
            <button
              style={{
                padding: "4px 8px",
                fontSize: "0.9em",
                cursor: "pointer",
              }}
              onClick={() => onDeleteBrew(brew.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
