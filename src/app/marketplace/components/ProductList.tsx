export const ProductList = () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Products</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {/* Example Product */}
        <div className="border p-4">
          <img src="/path/to/product.jpg" alt="Product" className="w-full h-32 object-cover" />
          <h3 className="mt-2 text-lg font-bold">Product Name</h3>
          <p className="mt-1">Description of the product...</p>
        </div>
        {/* Add more products similarly */}
      </div>
    </div>
  );
  