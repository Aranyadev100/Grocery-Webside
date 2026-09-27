import CategoryPage from "../CategoryPage/CategoryPage";
import dairyBanner from "../../assets/dairy-and-eggs.png"; 

const Dairy = () => {
  return <CategoryPage title="Dairy & Eggs" bgImage={dairyBanner} categories={["Dairy"]} />;
};

export default Dairy;