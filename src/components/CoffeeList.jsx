import React from "react";

export default function CoffeeList({ brews }) {
  if (brews.length === 0) {
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
          }}
        >
          <h3 style={{ margin: "0 0 8px 0" }}>{brew.beanName}</h3>
          <p style={{ margin: "4px 0" }}>
            <strong>Ratio:</strong> {brew.coffeeGrams}g coffee /{" "}
            {brew.waterGrams}g water
          </p>
          {brew.notes && (
            <p style={{ margin: "8px 0 0 0", fontStyle: "italic" }}>
              "{brew.notes}"
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
