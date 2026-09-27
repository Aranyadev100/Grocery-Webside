import CategoryPage from "../CategoryPage/CategoryPage";

import allProductsBanner from "../../assets/fruits-and-veggies.png"; 

const AllProducts = () => {
  return <CategoryPage title="All Products" bgImage={allProductsBanner} categories={["All"]} />;
};

export default AllProducts;