import CartItem from "./cartItem";
import type { CartItemType } from "../types/type";

interface Props {
  cart: CartItemType[];
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}

const DISCOUNT_THRESHOLD = 300;
const DISCOUNT_RATE = 0.1;

const Cart = ({ cart, increaseQty, decreaseQty }: Props) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isDiscountApplied = totalPrice > DISCOUNT_THRESHOLD;
  const discountAmount = isDiscountApplied ? totalPrice * DISCOUNT_RATE : 0;
  const finalPrice = totalPrice - discountAmount;

  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Your Cart</h2>
        {totalItems > 0 && (
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            {totalItems} item{totalItems > 1 ? "s" : ""}
          </span>
        )}
      </div>

      {cart.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">
          Your cart is empty. Add some items!
        </p>
      ) : (
        <>
          <div>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} increaseQty={increaseQty} decreaseQty={decreaseQty} />
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Subtotal</span>
              <span className={`text-sm ${isDiscountApplied ? "line-through text-gray-400" : "font-bold text-gray-800"}`}>
                ₹{totalPrice}
              </span>
            </div>

            {isDiscountApplied && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">Congrats for your 10% discount🎉</span>
                  <span className="text-sm text-green-600 font-medium">− ₹{discountAmount.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-dashed border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">Total</span>
                  <span className="text-lg font-bold text-green-700">₹{finalPrice.toFixed(2)}</span>
                </div>
              </>
            )}

            {!isDiscountApplied && (
              <div className="text-xs text-gray-400 mt-1">
                Add ₹{DISCOUNT_THRESHOLD - totalPrice} more to get 10% off!
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;