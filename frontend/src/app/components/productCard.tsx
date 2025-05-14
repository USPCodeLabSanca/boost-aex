"use client";

import Link from "next/link";
import { Truck, TrendingDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Product {
  location: string;
  userName: string | undefined;
  userAvatar: string;
  sellerHandlesDelivery: any;
  isNegotiable: any;
  id: string;
  userId: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  createdAt: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
  showWishlist?: boolean;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <Link href={`/produto/${product.id}`}>
      <div
        className={`bg-white rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md relative cursor-pointer ${className || ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover w-full h-full transition-transform duration-300"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />

          {/* Badges */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
            <div className="flex flex-wrap gap-1">
              {product.isNegotiable && (
                <div className="bg-white/90 text-gray-800 text-xs px-2 py-0.5 rounded flex items-center gap-1">
                  <TrendingDown className="h-3 w-3" />
                  Negociável
                </div>
              )}
              {product.sellerHandlesDelivery && (
                <div className="bg-white/90 text-gray-800 text-xs px-2 py-0.5 rounded flex items-center gap-1">
                  <Truck className="h-3 w-3" />
                  Entrega
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="mb-1 flex justify-between">
            <span className="font-semibold text-lg">{formattedPrice}</span>
          </div>
          <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>

          <div className="flex items-center mt-2 text-xs text-gray-500">
            <img
              src={product.userAvatar || "https://via.placeholder.com/24"}
              alt={product.userName}
              className="h-4 w-4 rounded-full mr-1 object-cover"
            />
            <span className="truncate">{product.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
