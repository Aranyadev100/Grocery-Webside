// আপাতত আপনার assets ফোল্ডারে যে ছবিগুলো আছে, সেগুলোই ইমপোর্ট করা হলো:
import bananaImg from "../../assets/banana.png";
import broccoliImg from "../../assets/broccoli.png";
import strawberryImg from "../../assets/strawberry.png";
import milkImg from "../../assets/milk.png";
import eggsImg from "../../assets/eggs.png";
import cheeseImg from "../../assets/cheese.png";
import salmonImg from "../../assets/salmon.png";
import shrimpImg from "../../assets/shrimp.png";
import beefImg from "../../assets/beef.png";

export const productList = [
  { id: 1, name: "Organic Bananas", price: 3.50, category: "Fruits", unit: "1 kg", image: bananaImg, description: "Naturally sweet, farm-fresh bananas packed with everyday goodness." },
  { id: 2, name: "Fresh Milk", price: 2.00, category: "Dairy", unit: "1 liter", image: milkImg, description: "Creamy farm-fresh milk, gently handled for a clean, rich taste." },
  { id: 3, name: "Atlantic Salmon", price: 8.50, category: "Seafood", unit: "500 g", image: salmonImg, description: "Premium salmon fillets with a delicate texture and rich flavor." },
  { id: 4, name: "Organic Broccoli", price: 1.20, category: "Vegetables", unit: "500 g", image: broccoliImg, description: "Crisp green broccoli, harvested fresh for your favorite meals." },
  { id: 5, name: "Premium Beef", price: 12.00, category: "Meat", unit: "500 g", image: beefImg, description: "Tender premium beef selected for hearty, delicious cooking." },
  { id: 6, name: "Farm Eggs", price: 1.50, category: "Dairy", unit: "12 pack", image: eggsImg, description: "Farm-fresh eggs with golden yolks and excellent everyday value." },
  { id: 7, name: "Sweet Strawberries", price: 4.25, category: "Fruits", unit: "250 g", image: strawberryImg, description: "Bright, juicy strawberries that bring a fresh finish to every bowl." },
  { id: 8, name: "Golden Shrimp", price: 10.50, category: "Seafood", unit: "500 g", image: shrimpImg, description: "Plump, clean shrimp ready for quick weeknight cooking." },
  { id: 9, name: "Cheddar Cheese", price: 5.75, category: "Dairy", unit: "250 g", image: cheeseImg, description: "Smooth, savory cheddar for sandwiches, snacks, and family recipes." },
];