"use client"

import Link from "next/link";
import Image from "next/image";
import ProductImageCarousel from "@/app/components/productImageCarousel";
import { notFound, useParams } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { Edit, Eye, Heart, MapPin, Share } from "lucide-react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

type ProdutoProps = {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    condition: string;
    location: string;
    createdAt: string;
    images: string[];
    userId: number;
    userName: string;
    userAvatar: string;
    phone: string;
    views: number;
  };
};

export default function ProdutoClient() {
  const { id } = useParams<{ id: string }>()
  
  // TODO: Fetch do produto da API pelo ID
  const product = {
    id: parseInt(id),
    title: "Macbook Air 2020",
    description: "Macbook Air 2020 com M1.\nUsado, mas em ótimo estado. \nAcompanha carregador e caixa original.",
    price: 3999.99,
    category: "Eletrônicos",
    condition: "Usado",
    location: "São Carlos, SP",
    createdAt: new Date().toISOString(),
    images: ["https://picsum.photos/id/0/1280/900", 
              "https://picsum.photos/id/2/1280/900",
              "https://picsum.photos/id/9/1280/900",
              "https://picsum.photos/id/5/1280/900",
              "https://picsum.photos/id/6/1280/900",
              "https://picsum.photos/id/8/1280/900",
              "https://picsum.photos/id/4/1280/900",
            ],
    userId: 1,
    userName: "João Silva",
    userAvatar: "https://placehold.co/50x50.jpg",
    phone: "+5511999999999",
    views: 100,
  };

  // TODO: Retornar página de erro se não for encontrado
  if (!product) {
    notFound()
  }
  
  {/*}
  const handleWishlistClick = () => {
    if (isAuthenticated) {
      toggleWishlist(product.id);
      console.log(wishlist.includes(product.id) 
          ? "Removido dos favoritos" 
          : "Adicionado aos favoritos");
    } else {
      console.log("Faça login para adicionar aos favoritos");
    }
  };*/}

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${product.phone}?text=Olá! Vi seu anúncio do produto "${product.title}" no Sanca Brechó e gostaria de mais informações.`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: `Confira este produto no Sanca Brechó: ${product.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      console.log("Link copiado para a área de transferência"); // TODO: Implementar um toast melhor
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pb-10">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="py-4">
            <Link href="/" className="text-gray-500 hover:text-sanca flex items-center text-sm">
              {/*<ArrowLeft className="h-4 w-4 mr-1" />*/}
              ← Voltar para produtos
            </Link>
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductImageCarousel images={product.images} />
            
            {/* Product Info */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
                  <p className="text-gray-500">{product.category} • {product.condition}</p>
                </div>
                <div className="flex gap-2">
                  {/*<button
                    onClick={() => {console.log("implementar wishlist");}}
                    className="border-gray-200"
                  >
                    <Heart className="h-5 w-5 text-gray-500 hover:text-sanca" />
                  </button>*/}
                  {true && ( // TODO: Implementar lógica de verificar dono do produto
                    <Link href="#">
                      <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap border border-gray-300 rounded-md text-sm text-black font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-9 px-3 w-full bg-white hover:bg-sanca/10">
                        <Edit className="h-4 w-4" />Editar
                      </button>
                    </Link>)}
                  <button
                    onClick={handleShare}
                    className="border-gray-200 text-gray-500 hover:text-sanca cursor-pointer"
                  >
                    <Share className="h-5 w-5"/>
                  </button>
                </div>
              </div>
              
              <div className="bg-sanca/5 p-4 rounded-lg mb-6">
                <p className="text-3xl font-bold text-sanca">
                  R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              
              <div className="mb-6">
                <button onClick={handleWhatsAppClick} className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-green-600 hover:bg-green-700">
                  <FaWhatsapp/>Contatar Vendedor pelo WhatsApp
                </button>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <Link href={`/usuario/${product.userId}`} className="flex items-center">
                  <Image
                    width={50}
                    height={50}
                    src={product.userAvatar}
                    alt={product.userName}
                    className="rounded-full"
                  ></Image>
                  <div className="ml-2">
                    <p className="font-medium text-gray-800">{product.userName}</p>
                    <p className="text-xs text-gray-500">Vendedor</p>
                  </div>
                </Link>
                
                <Link href={`/usuario/${product.userId}`} className="ml-auto">
                  <button className="border border-gray-300 hover:bg-gray-100 h-9 rounded-md px-3">
                    Ver perfil
                  </button>
                </Link>
              </div>
              
              <div className="flex items-center gap-3 text-gray-500 text-sm mb-6">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {product.location}
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {product.views} visualizações
                </div>
              </div>
              <Tabs>
                <TabList className="grid grid-cols-2 bg-slate-100 rounded-sm p-1 mb-4">
                  <Tab selectedClassName="bg-white rounded-sm shadow-xs" className="flex items-center justify-center p-1 cursor-pointer focus:outline-none">Descrição</Tab>
                  <Tab selectedClassName="bg-white rounded-sm shadow-xs" className="flex items-center justify-center p-1 cursor-pointer focus:outline-none">Especificações</Tab>
                </TabList>

                <TabPanel>
                  <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
                </TabPanel>

                <TabPanel>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500">Categoria</span>
                      <span className="font-medium">{product.category}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500">Condição</span>
                      <span className="font-medium">{product.condition}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500">Localização</span>
                      <span className="font-medium">{product.location}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500">Publicado</span>
                      <span className="font-medium">
                        {new Date(product.createdAt).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500">Identificador</span>
                      <span className="font-medium">
                        {product.id}
                      </span>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}