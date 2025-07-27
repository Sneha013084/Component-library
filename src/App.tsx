import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import AlertBox from "./components/AlertBox/AlertBox";
import './App.css';
import ProductDisplayCard from "./components/ProductDisplay/ProductDisplay";
 
 export default function App(){

   const handleEdit =(id:string) =>{
      alert (`Editing user ${id}`);
    }
    
   const user = {
  name: "Sneha Kurian",
  id :"abc",
  email: "sneha@gmail.com",
  role: "Software Engineer",
  avatarUrl :'https://www.w3schools.com/howto/img_avatar2.png',
  onEdit: handleEdit,
  
};

const handleAddToCart= (ProductId:string) =>{
  alert(`Product ${ProductId} added to cart!`);
};

  const product={
     id: "1",
  name: " wireless HeadPhone",
  price: 246,
  description: "High-quality wireless headphones with noise cancellation.",
  imageUrl: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-wireless-headphone-png-image_15830312.png",
  inStock: true,
}

  return (
    <div>
       <UserProfileCard user ={user}  showEmail ={true} showRole ={true}/>
      < AlertBox type ="success" message={"Your profile has been updated successfully"}/>
       <ProductDisplayCard product={product} showDescription ={true} showStockStatus={true} onAddToCart={handleAddToCart}
       />
  </div>
  );
}

  
 

