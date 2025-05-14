import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className='sticky top-0 z-50 w-full bg-white border-b border-gray-200'>
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <Link className="flex items-center space-x-2" href='/'>
              <span className="text-xl font-bold text-sanca">Sanca Brechó</span>
            </Link>
            <div className="hidden sm:flex-1 sm:flex sm:max-w-md sm:mx-4">
              <div className="relative w-full">
                <input placeholder="O que você está procurando?" className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full pl-10 pr-4" type="text" />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute top-3 left-3 h-4 w-4 text-gray-400"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <Link className='text-black hover:text-sanca' href='/anunciar'>Anunciar</Link>
              <Link className="text-black hover:text-sanca" href='/wishlist'>Favoritos</Link>
              <Link href="/notifications">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell h-5 w-5 text-gray-600 hover:text-sanca"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
              {/* span para quantidade de notificiações ajustar assim que backend ficar pronto */}
              </Link>
              <Link href="/usuario/1">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                  <Image alt="foto de perfil" width={225} height={225} className="aspect-square h-full w-full" src="https://i.pravatar.cc/150?img=1"/>
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    )
}