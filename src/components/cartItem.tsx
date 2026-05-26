import type { CartItemType } from "../types/type";

interface Props {
  item: CartItemType;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}

const CartItem = ({ item, increaseQty, decreaseQty }: Props) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-800">{item.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">₹{item.price} each</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-sm text-gray-500 w-16 text-right">₹{item.price * item.quantity}</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => decreaseQty(item.id)}
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 font-bold flex items-center justify-center transition-colors"
          >
            −
          </button>
          <span className="text-sm font-semibold text-gray-700 w-4 text-center">{item.quantity}</span>
          <button
            onClick={() => increaseQty(item.id)}
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 font-bold flex items-center justify-center transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;