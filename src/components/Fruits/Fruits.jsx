import CategoryPage from "../CategoryPage/CategoryPage";
import fruitsBanner from "../../assets/fruits-and-veggies.png"; // ব্যানারের জন্য ছবি

const Fruits = () => {
  
  return <CategoryPage title="Fruits & Veggies" bgImage={fruitsBanner} categories={["Fruits", "Vegetables"]} />;
};

export default Fruits;