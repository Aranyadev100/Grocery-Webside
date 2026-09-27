import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import { productList } from "../ProductList/ProductList"; // আপনার প্রোডাক্ট ডেটা ফাইল

const CategoryPage = ({ title, bgImage, categories }) => {
    
    const filteredItems = categories.includes("All")
        ? productList
        : productList.filter((item) => categories.includes(item.category));

    return (
        <div className="max-w-[1400px] mx-auto px-10 pb-20">
            
            <Banner title={title} bgImage={bgImage} />

            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
                {filteredItems.length > 0 ? (
                    filteredItems.map((product) => (
                        <Card key={product.id} product={product} />
                    ))
                ) : (
                    <h3 className="text-2xl text-center col-span-full mt-10">No products found in this category.</h3>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;