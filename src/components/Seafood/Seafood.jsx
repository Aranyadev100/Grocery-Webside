import CategoryPage from "../CategoryPage/CategoryPage";
import seafoodBanner from "../../assets/meat-and-seafood.png";

const Seafood = () => {
  return <CategoryPage title="Meat & Seafood" bgImage={seafoodBanner} categories={["Seafood", "Meat"]} />;
};

export default Seafood;