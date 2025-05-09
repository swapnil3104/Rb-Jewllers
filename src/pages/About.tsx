import React from "react";
import { Award, Diamond, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-emerald-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold mb-8">Our Story</h1>
            <p className="text-xl text-gray-300">
              Since 1990, RB JEWELERS has been crafting exceptional jewelry that
              captures the essence of luxury and timeless elegance. Our
              commitment to excellence and attention to detail has made us a
              trusted name in fine jewelry.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Diamond, stat: "30+", label: "Years of Excellence" },
              { icon: Users, stat: "50K+", label: "Happy Clients" },
              { icon: Award, stat: "200+", label: "Design Awards" },
              { icon: Globe, stat: "20+", label: "Countries Served" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  {item.stat}
                </p>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80"
                alt="Jewelry crafting"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">
                A Legacy of Excellence
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded by master craftsman Pierre RB JEWELERS in 1990, our
                  journey began in a small atelier in Paris. With a vision to
                  create jewelry that would stand the test of time, Pierre
                  combined traditional craftsmanship with innovative design.
                </p>
                <p>
                  Today, RB JEWELERS is recognized globally for our exceptional
                  quality and unique designs. Each piece is still crafted with
                  the same attention to detail and passion that Pierre instilled
                  in our first creation.
                </p>
                <p>
                  Our commitment to excellence extends beyond our craftsmanship.
                  We source only the finest materials and ethically sourced
                  gemstones, ensuring that each piece not only looks
                  extraordinary but also upholds our values of sustainability
                  and responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Our Master Artisans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Sophie Laurent",
                role: "Master Jeweler",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Marcus Chen",
                role: "Design Director",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Isabella Romano",
                role: "Gemologist",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-green-600 opacity-0 hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Excellence",
                description:
                  "We pursue perfection in every piece we create, from design to final polish.",
              },
              {
                title: "Integrity",
                description:
                  "We maintain the highest ethical standards in sourcing and craftsmanship.",
              },
              {
                title: "Innovation",
                description:
                  "We blend traditional techniques with contemporary design innovation.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-serif font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
