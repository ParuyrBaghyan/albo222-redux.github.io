import ProductShape from "./UI/ProductShape";
import { useSelector } from "react-redux";

export default function Favorite() {
  const favorite = useSelector((state) => state.favorite.favorite);

  return (
    <div className="favorite-container">
      <h2>Նախընտրած ապրանքների ցանկ</h2>
      <div className="favorite-content">
        {favorite.map((prod) => {
          return <ProductShape prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}
