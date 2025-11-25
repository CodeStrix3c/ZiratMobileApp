type Product = {
  _id: string;
  title: string;
  photos: string[];
  price: number;
  discountPrice?: number;
  label?: string;
  category?: string;
  rating?: number;
};

 export type ProductCarouselProps = {
  items: Product[];
  imageMapper: Record<string, any>; // or ImageSourcePropType if you want strict typing
};