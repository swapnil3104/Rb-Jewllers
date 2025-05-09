import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Diamond,
  Award,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Gift,
  Clock,
  Sparkles,
  Shield,
  Gem,
  Truck,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const navigate = useNavigate();

  const featuredCollections = [
    {
      title: "Royal Diamonds",
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
      description: "Exquisite diamond pieces for life's special moments",
    },
    {
      title: "Vintage Elegance",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      description: "Timeless designs inspired by classic aesthetics",
    },
    {
      title: "Modern Romance",
      image:
        "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80",
      description: "Contemporary pieces for the modern connoisseur",
    },
    {
      title: "Sapphire Dreams",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      description: "Elegant sapphire jewelry for the sophisticated",
    },
    {
      title: "Pearl Essence",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      description: "Timeless pearl collections for every occasion",
    },
  ];

  // Categories for the horizontal slider
  const categories = [
    {
      name: "Women's Rings",
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
      filter: "Women-Rings",
    },
    {
      name: "Men's Watches",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
      filter: "Men-Watches",
    },
    {
      name: "Gold Collection",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      filter: "Gold",
    },
    {
      name: "Diamond Jewelry",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
      filter: "Diamonds",
    },
    {
      name: "Engagement",
      image:
        "https://images.unsplash.com/photo-1544917567-3e10286bc57e?auto=format&fit=crop&w=800&q=80",
      filter: "Engagement",
    },
    {
      name: "Women's Necklaces",
      image:
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80",
      filter: "Women-Necklaces",
    },
    {
      name: "Men's Bracelets",
      image:
        "https://images.unsplash.com/photo-1618151313441-bc79b11e5090?auto=format&fit=crop&w=800&q=80",
      filter: "Men-Bracelets",
    },
    {
      name: "Silver Collection",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      filter: "Silver",
    },
  ];

  // New Launches
  const newLaunches = [
    {
      name: "Celestial Collection",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
      description:
        "Inspired by the cosmos, featuring star and moon motifs in precious metals",
      price: "From $1,200",
    },
    {
      name: "Emerald Whispers",
      image:
        "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=800&q=80",
      description: "Vibrant emeralds set in intricate gold filigree designs",
      price: "From $3,500",
    },
    {
      name: "Minimalist Platinum",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      description:
        "Clean, contemporary designs in pure platinum for the modern minimalist",
      price: "From $2,800",
    },
    {
      name: "Rosegold Blush",
      image:
        "https://images.unsplash.com/photo-1576022162026-9b1e63666312?auto=format&fit=crop&w=800&q=80",
      description: "Delicate rose gold pieces with blush-toned gemstones",
      price: "From $1,800",
    },
  ];

  // Festive Special
  const festiveSpecials = [
    {
      name: "Holiday Glamour",
      image:
        "https://images.unsplash.com/photo-1513267048331-5611cad62e41?auto=format&fit=crop&w=800&q=80",
      description:
        "Dazzling pieces perfect for holiday celebrations and special occasions",
    },
    {
      name: "Anniversary Collection",
      image:
        "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=800&q=80",
      description:
        "Celebrate milestones with our curated anniversary jewelry selection",
    },
    {
      name: "Wedding Season",
      image:
        "https://images.unsplash.com/photo-1546167889-f5476a0e2b3b?auto=format&fit=crop&w=800&q=80",
      description: "Complete bridal sets for the perfect wedding day ensemble",
    },
  ];

  const navigateToCategory = (filter: string) => {
    navigate(`/collections?category=${encodeURIComponent(filter)}`);
  };

  return (
    <div>
      {/* Hero Section - Reduced height */}
      <section className="h-[60vh] relative bg-gradient-to-br from-green-50 to-emerald-50 flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-12 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-green-900 to-emerald-800 bg-clip-text text-transparent">
              Timeless Elegance, Crafted for Eternity
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Discover our exquisite collection of handcrafted jewelry, where
              each piece tells a unique story of luxury and sophistication.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/collections"
                className="bg-gradient-to-r from-green-700 to-emerald-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
              >
                Explore Collections
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-full text-lg font-medium hover:bg-green-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Launches Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                New Launches
              </span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-700 to-emerald-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be the first to discover our latest creations, fresh from our
              master artisans' workshop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newLaunches.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-w-3 aspect-h-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full shadow-lg">
                      New
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    {item.description}
                  </p>
                  <p className="text-green-600 font-semibold">{item.price}</p>
                  <button className="mt-4 w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/collections"
              className="inline-flex items-center text-green-700 font-medium hover:text-green-900 transition-colors"
            >
              View All New Arrivals
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Slider */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Browse by Category
              </span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-700 to-emerald-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections and find the perfect piece to
              express your unique style
            </p>
          </div>
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.5}
              centeredSlides={true}
              loop={true}
              navigation={{
                prevEl: ".category-swiper-button-prev",
                nextEl: ".category-swiper-button-next",
              }}
              breakpoints={{
                640: { slidesPerView: 2.5 },
                768: { slidesPerView: 3.5 },
                1024: { slidesPerView: 4.5 },
              }}
              className="px-4 py-8"
            >
              {categories.map((category, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                    onClick={() => navigateToCategory(category.filter)}
                  >
                    <div className="aspect-w-3 aspect-h-3">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-green-900/70 group-hover:to-emerald-600/30 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-2xl font-serif font-bold text-white text-center px-4 transform group-hover:scale-110 transition-transform duration-300">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="category-swiper-button-prev absolute top-1/2 left-2 z-10 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
              <ChevronLeft className="h-6 w-6 text-green-600" />
            </button>
            <button className="category-swiper-button-next absolute top-1/2 right-2 z-10 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
              <ChevronRight className="h-6 w-6 text-green-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Our Specialties
              </span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-700 to-emerald-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets RB JEWELERS apart in the world of fine jewelry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-green-100 p-4 rounded-full">
                <Diamond className="h-10 w-10 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  Ethically Sourced Gemstones
                </h3>
                <p className="text-gray-600">
                  We partner exclusively with ethical mines and suppliers who
                  adhere to the highest standards of environmental and social
                  responsibility. Every gemstone in our collection can be traced
                  back to its origin.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-green-100 p-4 rounded-full">
                <Gem className="h-10 w-10 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  Custom Design Service
                </h3>
                <p className="text-gray-600">
                  Our master designers work one-on-one with clients to create
                  bespoke pieces that perfectly capture personal stories and
                  milestones. From concept to creation, we bring your vision to
                  life.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-green-100 p-4 rounded-full">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  Artisanal Craftsmanship
                </h3>
                <p className="text-gray-600">
                  Our jewelry is handcrafted using techniques passed down
                  through generations. Each piece undergoes over 40 hours of
                  meticulous work by our skilled artisans before it reaches you.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-green-100 p-4 rounded-full">
                <Sparkles className="h-10 w-10 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  Innovative Designs
                </h3>
                <p className="text-gray-600">
                  We blend traditional craftsmanship with contemporary
                  aesthetics to create pieces that are both timeless and modern.
                  Our design team draws inspiration from art, architecture, and
                  nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Featured Collections
          </h2>
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-green-600",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-green-600",
              }}
              className="px-4 py-8"
            >
              {featuredCollections.map((collection, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative overflow-hidden rounded-xl shadow-lg">
                    <div className="aspect-w-3 aspect-h-4">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">
                        {collection.title}
                      </h3>
                      <p className="text-gray-200 mb-4">
                        {collection.description}
                      </p>
                      <Link
                        to="/collections"
                        className="text-white font-medium hover:text-green-300 transition-colors inline-flex items-center"
                      >
                        Explore Collection
                        <span className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-prev !w-12 !h-12 !bg-white/80 rounded-full shadow-lg backdrop-blur-sm after:!text-2xl after:!text-green-600 hover:!bg-white transition-colors">
              <ChevronLeft className="h-6 w-6 text-green-600" />
            </button>
            <button className="swiper-button-next !w-12 !h-12 !bg-white/80 rounded-full shadow-lg backdrop-blur-sm after:!text-2xl after:!text-green-600 hover:!bg-white transition-colors">
              <ChevronRight className="h-6 w-6 text-green-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Festive Special */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Festive Special
              </span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-700 to-emerald-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrate life's special moments with our curated festive
              collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {festiveSpecials.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg h-[400px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-green-900/80 group-hover:via-green-800/40 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="mb-4">
                    <Gift className="h-10 w-10 text-emerald-400 mb-2" />
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-200 mb-6">{item.description}</p>
                  </div>
                  <button className="bg-white/90 backdrop-blur-sm text-green-700 py-3 px-6 rounded-lg hover:bg-white transition-colors font-medium">
                    Discover Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualities Section */}
      <section className="py-24 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our Quality Promise
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Every RB JEWELERS piece is crafted with uncompromising attention
              to quality and detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
              <Shield className="h-12 w-12 text-emerald-300 mx-auto mb-6" />
              <h3 className="text-xl font-serif font-bold mb-3">
                Lifetime Warranty
              </h3>
              <p className="text-gray-300">
                Every piece comes with our comprehensive lifetime warranty
                against manufacturing defects
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
              <Diamond className="h-12 w-12 text-emerald-300 mx-auto mb-6" />
              <h3 className="text-xl font-serif font-bold mb-3">
                Certified Gemstones
              </h3>
              <p className="text-gray-300">
                All our gemstones are certified by internationally recognized
                gemological laboratories
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
              <Truck className="h-12 w-12 text-emerald-300 mx-auto mb-6" />
              <h3 className="text-xl font-serif font-bold mb-3">
                Secure Delivery
              </h3>
              <p className="text-gray-300">
                Fully insured worldwide shipping with discreet packaging for
                your privacy
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
              <Heart className="h-12 w-12 text-emerald-300 mx-auto mb-6" />
              <h3 className="text-xl font-serif font-bold mb-3">
                Satisfaction Guarantee
              </h3>
              <p className="text-gray-300">
                30-day return policy if you're not completely satisfied with
                your purchase
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/about"
              className="inline-flex items-center bg-white/90 backdrop-blur-sm text-green-700 py-3 px-8 rounded-lg hover:bg-white transition-colors font-medium"
            >
              Learn More About Our Craft
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
