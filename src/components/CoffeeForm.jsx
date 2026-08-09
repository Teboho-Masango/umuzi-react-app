export default function CoffeeForm({ onAddBrew }) {
  let [beanName, setBeanName] = useState("");
  let [brewMethod, setBrewMethod] = useState("V60");
  let [coffeeGrams, setCoffeeGrams] = useState("");
  let [waterGrams, setWaterGrams] = useState("");
  let [notes, setNotes] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!beanName) return;

    let newBrew = {
      id: Date.now(),
      beanName,
      brewMethod,
      coffeeGrams: Number(coffeeGrams),
      waterGrams: Number(waterGrams),
      notes,
    };

    onAddBrew(newBrew);

    // Reset form fields after submitting
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
      >
        <option value="V60">V60</option>
        <option value="Aeropress">Aeropress</option>
        <option value="French Press">French Press</option>
        <option value="Espresso">Espresso</option>
        <option value="Chemex">Chemex</option>
      </select>
      <input
        type="number"
        placeholder="Coffee (grams)"
        value={coffeeGrams}
        onChange={(e) => setCoffeeGrams(e.target.value)}
      />
      <input
        type="number"
        placeholder="Water (grams)"
        value={waterGrams}
        onChange={(e) => setWaterGrams(e.target.value)}
      />
      <textarea
        placeholder="Tasting Notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Log It! </button>
    </form>
  );
}
