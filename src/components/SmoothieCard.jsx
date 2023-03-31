import { Link } from "react-router-dom";
import { supabase } from "../config/supabaseClient";

export default function SmoothieCard({ smoothie, onDelete }) {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("smoothies")
      .delete()
      .eq("id", smoothie.id)
      .select()
      .single();

    if (error) {
      console.log({ error });
    }

    onDelete(data.id);
  };

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={`/${smoothie.id}`}>
          <i className="material-icons">edit</i>
        </Link>
        <i onClick={handleDelete} className="material-icons">
          delete
        </i>
      </div>
    </div>
  );
}
