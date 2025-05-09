import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const collections = [
  {
    id: 1,
    name: "Royal Diamonds",
    category: "Engagement",
    gender: "Women",
    material: "Diamonds",
    price: "From $5,000",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Vintage Elegance",
    category: "Necklaces",
    gender: "Women",
    material: "Gold",
    price: "From $2,500",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Modern Romance",
    category: "Rings",
    gender: "Women",
    material: "Platinum",
    price: "From $1,800",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Pearl Essence",
    category: "Earrings",
    gender: "Women",
    material: "Silver",
    price: "From $1,200",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Sapphire Dreams",
    category: "Bracelets",
    gender: "Women",
    material: "Gold",
    price: "From $3,500",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Emerald Allure",
    category: "Necklaces",
    gender: "Women",
    material: "Gold",
    price: "From $4,200",
    image: "https://images.unsplash.com/photo-1599459183200-59c7687a0275?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Diamond Infinity",
    category: "Engagement",
    gender: "Women",
    material: "Diamonds",
    price: "From $6,500",
    image: "https://images.unsplash.com/photo-1544917567-3e10286bc57e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Ruby Romance",
    category: "Rings",
    gender: "Women",
    material: "Gold",
    price: "From $2,800",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Ocean Pearl",
    category: "Earrings",
    gender: "Women",
    material: "Silver",
    price: "From $1,500",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Golden Heritage",
    category: "Bracelets",
    gender: "Women",
    material: "Gold",
    price: "From $3,200",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Platinum Elite",
    category: "Engagement",
    gender: "Women",
    material: "Platinum",
    price: "From $7,500",
    image: "https://images.unsplash.com/photo-1595781572981-d63151b232ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Crystal Cascade",
    category: "Necklaces",
    gender: "Women",
    material: "Silver",
    price: "From $2,900",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Executive Timepiece",
    category: "Watches",
    gender: "Men",
    material: "Gold",
    price: "From $4,500",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    name: "Gentleman's Band",
    category: "Rings",
    gender: "Men",
    material: "Platinum",
    price: "From $2,200",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Modern Chain",
    category: "Necklaces",
    gender: "Men",
    material: "Silver",
    price: "From $1,800",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    name: "Onyx Link",
    category: "Bracelets",
    gender: "Men",
    material: "Silver",
    price: "From $1,500",
    image: "https://images.unsplash.com/photo-1618151313441-bc79b11e5090?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    name: "Diamond Signet",
    category: "Rings",
    gender: "Men",
    material: "Diamonds",
    price: "From $3,800",
    image: "https://images.unsplash.com/photo-1636138390765-38f855e5de5e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    name: "Gold Chronograph",
    category: "Watches",
    gender: "Men",
    material: "Gold",
    price: "From $6,200",
    image: "https://images.unsplash.com/photo-1548171915-e5c6d55f0d33?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCollections, setFilteredCollections] = useState(collections);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  // Categories for filter buttons
  const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets", "Watches", "Engagement"];
  const materials = ["All", "Gold", "Silver", "Platinum", "Diamonds"];
  const genders = ["All", "Women", "Men"];

  useEffect(() => {
    // Get query parameters from URL
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    const searchParam = queryParams.get('search');
    
    if (searchParam) {
      setSearchTerm(searchParam);
    } else {
      setSearchTerm("");
    }
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("All");
    }
    
    // Filter collections based on URL parameters
    filterCollections(categoryParam, searchParam);
  }, [location.search]);

  const filterCollections = (categoryParam: string | null, searchParam: string | null) => {
    let filtered = [...collections];
    
    // Filter by category from URL
    if (categoryParam && categoryParam !== "All") {
      // Check if it's a combined category (e.g., "Women-Rings")
      if (categoryParam.includes('-')) {
        const [gender, category] = categoryParam.split('-');
        filtered = filtered.filter(item => 
          item.gender === gender && item.category === category
        );
      } 
      // Check if it's a material
      else if (materials.includes(categoryParam)) {
        filtered = filtered.filter(item => item.material === categoryParam);
      }
      // Check if it's a gender
      else if (genders.includes(categoryParam)) {
        filtered = filtered.filter(item => item.gender === categoryParam);
      }
      // Otherwise it's a regular category
      else {
        filtered = filtered.filter(item => item.category === categoryParam);
      }
    }
    
    // Filter by search term
    if (searchParam) {
      const search = searchParam.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(search) || 
        item.category.toLowerCase().includes(search) ||
        item.material.toLowerCase().includes(search) ||
        item.gender.toLowerCase().includes(search)
      );
    }
    
    setFilteredCollections(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    // Update URL with the new category
    const searchParams = new URLSearchParams(location.search);
    if (category === "All") {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    
    // Keep search term if it exists
    if (searchTerm) {
      searchParams.set('search', searchTerm);
    }
    
    window.history.pushState({}, '', `${location.pathname}?${searchParams.toString()}`);
    
    // Filter collections
    filterCollections(category, searchTerm);
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif font-bold text-center mb-6">Our Collections</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Discover our exquisite jewelry collections, each piece carefully crafted to perfection.
          From timeless classics to contemporary designs, find the perfect piece to tell your story.
        </p>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full border-2 transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'border-green-600 bg-green-600 text-white shadow-lg'
                  : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Material filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {materials.map((material) => (
            <button
              key={material}
              onClick={() => handleCategoryChange(material)}
              className={`px-6 py-2 rounded-full border-2 transition-all transform hover:scale-105 ${
                selectedCategory === material
                  ? 'border-green-600 bg-green-600 text-white shadow-lg'
                  : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
              }`}
            >
              {material}
            </button>
          ))}
        </div>
        
        {/* Gender filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {genders.map((gender) => (
            <button
              key={gender}
              onClick={() => handleCategoryChange(gender)}
              className={`px-6 py-2 rounded-full border-2 transition-all transform hover:scale-105 ${
                selectedCategory === gender
                  ? 'border-green-600 bg-green-600 text-white shadow-lg'
                  : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
              }`}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

      {/* Collections Grid */}
      <div className="container mx-auto px-4 pb-24">
        {filteredCollections.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-serif font-bold mb-4">No items found</h3>
            <p className="text-gray-600">Try adjusting your filters or search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((collection) => (
              <div
                key={collection.id}
                className="group transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="relative aspect-w-4 aspect-h-3">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      <span className="px-3 py-1 bg-white/90 text-green-600 text-sm rounded-full shadow-lg backdrop-blur-sm">
                        {collection.category}
                      </span>
                      <span className="px-3 py-1 bg-white/90 text-green-600 text-sm rounded-full shadow-lg backdrop-blur-sm">
                        {collection.gender}
                      </span>
                      <span className="px-3 py-1 bg-white/90 text-green-600 text-sm rounded-full shadow-lg backdrop-blur-sm">
                        {collection.material}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold mb-2">{collection.name}</h3>
                    <p className="text-green-600 font-semibold">{collection.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}