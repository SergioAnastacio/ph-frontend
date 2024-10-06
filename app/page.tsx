import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

export default function Home() {
	return (
		<>
			<div className="h-8 prose my-2 text-center bg-slate-400">
				<p>Lorem ipsum dolor sit amet consectetur adipisi</p>
			</div>
			<Header />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Sidebar />
				<div className="md:col-span-2">
					<h1 className="text-4xl font-semibold text-gray-800 mb-4">
						¡Bienvenido a la tienda!
					</h1>
					<p className="text-lg text-gray-600 mb-4">
						En nuestra tienda encontrarás todo lo que necesitas para tu hogar.
					</p>
					<article className="prose">
						<h2>Lo mas vendido </h2>
					</article>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-2">
						<ProductCard
							image="/product.webp"
							title="Producto 1"
							price="$10.00"
							stract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nisl nunc nec."
						/>
						<ProductCard
							image="/product.webp"
							title="Producto 2"
							price="$20.00"
							stract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nisl nunc nec."
						/>
						<ProductCard
							image="/product.webp"
							title="Producto 3"
							price="$30.00"
							stract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nisl nunc nec."
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
