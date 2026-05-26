import ProductCard from "./productCard";
import type { Product } from "../types/type";
import type { SortOrder } from "../App";

interface Props {
  products: Product[];
  addItem: (product: Product) => void;
  searchQuery?: string;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
}

const ProductList = ({ products, addItem, searchQuery, categories, selectedCategory, onCategoryChange, sortOrder, onSortChange }: Props) => {
  return (
    <section>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium capitalize transition-colors border ${
                selectedCategory === cat
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-600"
              }`}
            >
              {cat === "all" ? "All" : cat}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-gray-500 whitespace-nowrap">Sort by price:</span>
          <select
            value={sortOrder}
            onChange={(e) => onSortChange(e.target.value as SortOrder)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none cursor-pointer"
          >
            <option value="default">Default</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-3">
        {searchQuery
          ? products.length > 0 ? `Results for "${searchQuery}"` : `No results for "${searchQuery}"`
          : selectedCategory !== "all"
          ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} (${products.length})`
          : `Products (${products.length})`}
      </h2>

      {products.length > 0 ? (
        <div className="space-y-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addItem={addItem} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <p className="text-sm">No items match your search.</p>
        </div>
      )}
    </section>
  );
};

export default ProductList;