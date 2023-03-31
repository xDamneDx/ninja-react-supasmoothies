import { useState, useEffect } from "react";
import { supabase } from "../config/supabaseClient";

// Components:
import SmoothieCard from "../components/SmoothieCard";

export default function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  const handleDelete = (id) => {
    setSmoothies((prevSmoothies) =>
      prevSmoothies.filter((smoothie) => smoothie.id !== id)
    );
  };

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("smoothies").select();

      if (error) {
        setFetchError("Could not fetch the smoothies..");
        setSmoothies(null);

        return;
      }

      setSmoothies(data);
      setFetchError(null);
    };

    fetchSmoothies();
  }, []);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className="smoothies">
          {/* order-by buttons */}
          <div className="smoothie-grid">
            {smoothies.map((smoothie) => (
              <SmoothieCard
                key={smoothie.id}
                smoothie={smoothie}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
