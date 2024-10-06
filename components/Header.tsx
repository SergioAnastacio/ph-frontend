import { Menu, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
	return (
		<>
			<header className="bg-white shadow-md sm:py-2">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<Logo className="w-auto" />
						{/* Search Bar */}
						<SearchBar
							className="hidden sm:block flex-grow max-w-md mx-4"
							placeholder="Buscar productos ..."
						/>
						{/* Menu Button */}
						<div className="flex items-center">
							<button
								type="button"
								className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
							>
								<span className="sr-only">Abrir menu</span>
								<Menu className="h-6 w-6" />
							</button>

							{/* Cart Button */}
							<button
								type="button"
								className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
							>
								<span className="sr-only">Ver carrito</span>
								<ShoppingCart className="h-6 w-6" />
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Search Bar */}
				<SearchBar
					className="sm:hidden m-3"
					placeholder="Buscar productos ..."
				/>
			</header>
		</>
	);
}
