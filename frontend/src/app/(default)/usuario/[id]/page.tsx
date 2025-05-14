"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductCard from "@/app/components/productCard";
import { FaWhatsapp } from 'react-icons/fa';
import {
  MapPin,
  Calendar,
  Star,
  Package,
  Search,
  Trash2,
  Settings,
  Plus,
  Edit,
  BadgeCheck
} from "lucide-react";

const Usuario = () => {
  const { id } = useParams<{ id: string }>();

  const users = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@ufscar.br',
    avatar: 'https://i.pravatar.cc/150?img=1',
    university: 'UFSCar',
    rating: 4.5,
    joinedDate: '2023-03-15',
    isAdmin: true,
    verified: true,
  },
  {
    id: '2',
    name: 'Ana Souza',
    email: 'ana@usp.br',
    avatar: 'https://i.pravatar.cc/150?img=5',
    university: 'USP São Carlos',
    rating: 4.8,
    joinedDate: '2023-05-20',
    isAdmin: false,
    verified: false,
  },
  ];

  const currentUser = users[0];
  const userId = id;

  const products = [
  {
    id: '101',
    userId: '1',
    title: 'Livro de Cálculo',
    description: 'Livro em ótimo estado, pouco usado.',
    price: 50,
    images: ['https://picsum.photos/id/0/1280/900', 'https://picsum.photos/id/2/1280/900', 'https://picsum.photos/id/9/1280/900'],
    createdAt: '2023-06-01',
    category: 'Livros',
    location: 'Ufscar',
    userName: 'João Silva',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    sellerHandlesDelivery: true,
    isNegotiable: true
  },
  {
    id: '102',
    userId: '2',
    title: 'Microscópio',
    description: 'Microscópio usado, funcionando perfeitamente.',
    price: 200,
    images: ['https://picsum.photos/id/0/1280/900', 'https://picsum.photos/id/2/1280/900', 'https://picsum.photos/id/9/1280/900'],
    createdAt: '2023-06-10',
    category: 'Equipamentos',
    location: 'Ufscar',
    userName: 'João Silva',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    sellerHandlesDelivery: true,
    isNegotiable: true
  },
  ];

  const lookingFor = [
    {
      id: '201',
      userId: '1',
      title: 'Livro de Álgebra Linear',
      description: 'Procuro livro em bom estado para estudar para as provas.',
      createdAt: '2023-07-01',
      category: 'Livros',
    },
    {
      id: '202',
      userId: '1',
      title: 'Lupa de Mão',
      description: 'Preciso de uma lupa para laboratório.',
      createdAt: '2023-07-05',
      category: 'Equipamentos',
    },
  ];

  const reviews = [
  {
    id: '1',
    userId: '1',
    reviewerId: '2',
    userName: 'Ana Souza',
    userAvatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    comment: 'Produto em ótimo estado, como descrito. Entrega rápida e vendedor atencioso.',
    date: '2023-08-10',
  },
  {
    id: '2',
    userId: '1',
    reviewerId: '3',
    userName: 'Carlos Mendes',
    userAvatar: 'https://i.pravatar.cc/150?img=8',
    rating: 4,
    comment: 'Ótima negociação, recomendo.',
    date: '2023-07-22',
  },
  ];

  const user = users.find((u) => u.id === userId);
  const userProducts = products.filter((product) => product.userId === userId);
  const userLookingFor = lookingFor.filter((item) => item.userId === userId);
  const userReviews = reviews.filter((review) => review.userId === user?.id);
  const isOwnProfile = currentUser?.id === user?.id;

  if (!user) {
  return (
    <div className="min-h-screen flex flex-col">
    <div className="flex-grow flex items-center justify-center">
      <div className="text-center">
      <h1 className="text-xl font-bold mb-4">Usuário não encontrado</h1>
      <Link href="/">
        <button className=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-sanca hover:bg-sanca/90">
          Voltar a página inicial
        </button>
      </Link>
      </div>
    </div>
    </div>
  );
  }

  return (
  <div className="min-h-screen flex flex-col">
    <main className="flex-grow py-10">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
        <div className="h-32 bg-gradient-to-r from-sanca to-[#0ea5e9]"></div>
        <div className="px-6 py-4 relative">
        <div className="absolute -top-12 left-6 border-4 border-white rounded-full overflow-hidden bg-white">
          <img src={user.avatar} alt={`Foto de perfil de ${user.name}`} className="h-24 w-24 object-cover" />
        </div>
        <div className="pt-14 pb-2 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            {user.name}
            {user.verified && (
              <div className="relative group">
                <BadgeCheck className="text-sanca pl-1.5 h-8 w-8" />
                <div className="absolute w-32 text-center bottom-full mb-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white bg-black px-2 py-1 rounded-md">
                  Usuário verificado
                </div>
              </div>
            )}
          </h1>
          <div className="flex items-center mt-1 space-x-4 text-sm text-gray-500">
            <div className="flex items-center"><MapPin size={16} className="mr-1" />{user.university}</div>
            <div className="flex items-center"><Calendar size={16} className="mr-1" />Membro desde {new Date(user.joinedDate).toLocaleDateString('pt-BR')}</div>
            {userReviews.length > 0 &&
              <div className="flex items-center"><Star size={16} className="mr-1 fill-yellow-400 text-yellow-400" />{user.rating} ({userReviews.length} avaliações)</div>
            }
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
          {isOwnProfile ? (
            <>
            <Link href="#">
              <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap border border-gray-300 rounded-md text-sm text-black font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-white hover:bg-sanca/10">
                <Edit className="mr-1 h-4 w-4" />Editar Perfil
              </button>
            </Link>
            {user.isAdmin && (
              <Link href="/admin">
              <button className=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-sanca hover:bg-sanca/90">
                <Settings className="mr-1 h-4 w-4" />Admin
              </button>
              </Link>
            )}
            </>
          ) : (
            <>
            <button className=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-[#25D366] hover:bg-[#25D366]/90">
              <FaWhatsapp className="text-white" />Entrar em contato
            </button>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
      <Tabs defaultValue="products">
        <TabList className="grid grid-cols-3 bg-slate-100 rounded-sm p-1">
          <Tab selectedClassName="bg-white rounded-sm shadow-xs" value="products" className="flex items-center justify-center p-1 cursor-pointer focus:outline-none"><Package className="h-4 w-4 mr-2" /><span>Produtos</span></Tab>
          <Tab selectedClassName="bg-white rounded-sm shadow-xs" value="lookingFor" className="flex items-center justify-center p-1 cursor-pointer focus:outline-none"><Search className="h-4 w-4 mr-2" /><span>Buscando</span></Tab>
          <Tab selectedClassName="bg-white rounded-sm shadow-xs" value="reviews" className="flex items-center justify-center p-1 cursor-pointer focus:outline-none"><Star className="h-4 w-4 mr-2" /><span>Avaliações</span></Tab>
        </TabList>
        <TabPanel value="products">
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Produtos Anunciados ({userProducts.length})</h2>
          {userProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {userProducts.map((product) => (
              <ProductCard product={product} key={product.id}/>))
            }
          </div>
          ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <Package className="h-12 w-12 mx-auto text-gray-300" />
            <p className="mt-2 text-gray-500">Nenhum produto anunciado</p>
            {isOwnProfile && (
            <Link href="/anunciar">
              <button className=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-sanca hover:bg-sanca/90">
                Anunciar Produto
              </button>
            </Link>
            )}
          </div>
          )}
        </div>
        </TabPanel>
        <TabPanel value="lookingFor">
        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Produtos que Busca ({userLookingFor.length})</h2>
          {isOwnProfile && (
            <Link href="/buscar-produto">
              <button className=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-sanca hover:bg-sanca/90">
                <Plus className="h-4 w-4" />Adicionar
              </button>
            </Link>
          )}
          </div>
          {userLookingFor.length > 0 ? (
          <div className="space-y-4">
            {userLookingFor.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between">
              <h3 className="font-medium">{item.title}</h3>
              <span className="text-sm text-gray-500">{new Date(item.createdAt).toLocaleDateString('pt-BR')}</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-gray-500">Categoria: {item.category}</span>
              {!isOwnProfile ? (
                <button className=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-48 bg-[#25D366] hover:bg-[#25D366]/90">
                  <FaWhatsapp className="text-white" />Entrar em contato
                </button>
              ) : (
                <button className=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-24 bg-sanca hover:bg-sanca/90">
                  <Trash2 className="h-4 w-4" />Excluir
                </button>
              )}
              </div>
            </div>
            ))}
          </div>
          ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <Search className="h-12 w-12 mx-auto text-gray-300" />
            <p className="mt-2 text-gray-500">Nenhum produto na lista de buscas</p>
            {isOwnProfile && (
            <Link href="/buscar-produto">
              <button className=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-sanca hover:bg-sanca/90">
                Adicionar produto buscado
              </button>
            </Link>
            )}
          </div>
          )}
        </div>
        </TabPanel>
        <TabPanel value="reviews">
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Avaliações Recebidas</h2>
          {userReviews.length > 0 ? (
          <div className="space-y-4">
            {userReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
              <div className="flex items-start">
              <img src={review.userAvatar} alt={`Foto de ${review.userName}`} className="h-10 w-10 rounded-full object-cover" />
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                <Link href={`/usuario/${review.reviewerId}`} className="font-medium text-gray-800">{review.userName}</Link>
                <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                  key={i}
                  size={16}
                  className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
              </div>
            </div>
            ))}
          </div>
          ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <Star className="h-12 w-12 mx-auto text-gray-300" />
            <p className="mt-2 text-gray-500">Nenhuma avaliação recebida</p>
          </div>
          )}
        </div>
        </TabPanel>
      </Tabs>
      </div>
    </div>
    </main>
  </div>
  );
};

export default Usuario;