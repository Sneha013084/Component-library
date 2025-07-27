
//setting a reusable AlertBox- using typescript for typing//

export type AlertType ='success' |'error'|'warning'|'info'; // alert type

 //AlertBox

export interface AlertBoxProps{
    type : AlertType;
    message: string;
    onClose?: () => void;
    children?: React.ReactNode;  // for accept additional content inside the alert//
}

//UserProfileCard component//

export interface User {
     onEdit: any;
    // onEdit: any;
     id : string;
     name: string;
     email : string;
     role : string;
     avatarUrl ? : string;
}
// this define the props-that userprofile card-accepts//
 
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

//productDisplay Component//


export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

export interface ProductDisplayProps {
  product: Product;

  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}