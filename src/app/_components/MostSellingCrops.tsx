export const MostSellingCrops = () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Seasons Most Selling Crops</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {/* Example Crop */}
        <div className="border p-4">
          <img src="/path/to/crop.jpg" alt="Crop" className="w-full h-32 object-cover" />
          <h3 className="mt-2 text-lg font-bold">Crop Name</h3>
          <p className="mt-1">Description of the crop...</p>
        </div>
        {/* Add more crops similarly */}
      </div>
    </div>
  );
  