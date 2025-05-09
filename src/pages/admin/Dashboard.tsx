import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Diamond, Package, LogOut, Plus } from "lucide-react";
import ProductForm from "../../components/admin/ProductForm";
import ProductList from "../../components/admin/ProductList";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("products");
  const [adminInfo, setAdminInfo] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const storedAdminInfo = localStorage.getItem("adminInfo");
    if (!storedAdminInfo) {
      navigate("/admin/login");
      return;
    }

    setAdminInfo(JSON.parse(storedAdminInfo));

    // Verify token validity
    const verifyToken = async () => {
      try {
        const response = await fetch("/api/admin/profile", {
          headers: {
            Authorization: `Bearer ${JSON.parse(storedAdminInfo).token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Token invalid");
        }
      } catch (error) {
        localStorage.removeItem("adminInfo");
        navigate("/admin/login");
      }
    };

    verifyToken();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminInfo");
    navigate("/admin/login");
  };

  if (!adminInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-10">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center p-6 border-b">
            <img
              src="https://res.cloudinary.com/dcidvttvz/image/upload/v1740777244/logo_ohh01b.jpg"
              alt="RB Jewellers"
              className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-contain"
            />
            <span className="text-2xl font-serif font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              RB JEWELERS
            </span>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("products")}
                className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "products"
                    ? "bg-green-50 text-green-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Package className="h-5 w-5 mr-3" />
                <span>Products</span>
              </button>

              <button
                onClick={() => setActiveTab("add-product")}
                className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "add-product"
                    ? "bg-green-50 text-green-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Plus className="h-5 w-5 mr-3" />
                <span>Add Product</span>
              </button>
            </nav>
          </div>

          <div className="p-4 border-t">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium text-gray-900">{adminInfo.name}</p>
                <p className="text-sm text-gray-500">{adminInfo.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900">
            {activeTab === "products" && "Manage Products"}
            {activeTab === "add-product" && "Add New Product"}
          </h1>
        </header>

        <main>
          {activeTab === "products" && <ProductList />}
          {activeTab === "add-product" && <ProductForm />}
        </main>
      </div>
    </div>
  );
}