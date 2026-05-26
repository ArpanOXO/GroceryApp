import type { Product } from "../types/type";

interface Props {
  product: Product;
  addItem: (product: Product) => void;
}

const ProductCard = ({ product, addItem }: Props) => {
  return (
    <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <img src={product.img} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-800">{product.name}</p>
        <p className="text-sm text-gray-500 mt-0.5">₹{product.price}</p>
      </div>
      <button
        onClick={() => addItem(product)}
        className="px-3 py-1.5 text-sm font-medium bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
      >
        Add
      </button>
    </div>
  );
};

export default ProductCard;