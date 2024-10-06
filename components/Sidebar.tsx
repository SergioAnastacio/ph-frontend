"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Definimos un tipo para nuestras imágenes promocionales
type PromoImage = {
	src: string;
	alt: string;
};

// Array de imágenes promocionales (reemplaza con tus propias imágenes)
const promoImages: PromoImage[] = [
	{ src: "/498680.jpg", alt: "Promoción 1" },
	{ src: "/499022.jpg", alt: "Promoción 2" },
	{ src: "/498680.jpg", alt: "Promoción 3" },
	{ src: "/499022.jpg", alt: "Promoción 5" },
	{ src: "/499022.jpg", alt: "Promoción 6" },
	{ src: "/499022.jpg", alt: "Promoción 7" },
	{ src: "/499022.jpg", alt: "Promoción 8" },
];

export default function Sidebar() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % promoImages.length);
	}, []);

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + promoImages.length) % promoImages.length,
		);
	};

	useEffect(() => {
		const intervalId = setInterval(nextSlide, 10000);
		return () => clearInterval(intervalId);
	}, [nextSlide]);

	return (
		<>
			<div className="relative w-full max-w-7xl mx-auto h-60">
				<div className="overflow-hidden relative rounded-lg shadow-lg h-60">
					{promoImages.map((image, index) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
								index === currentIndex ? "opacity-100" : "opacity-0"
							}`}
						>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								priority={index === 0}
							/>
						</div>
					))}
				</div>

				{/* Controles de navegación */}
				<button
					type="button"
					onClick={prevSlide}
					className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
					aria-label="Imagen anterior"
				>
					<ChevronLeft className="w-6 h-6" />
				</button>
				<button
					type="button"
					onClick={nextSlide}
					className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
					aria-label="Siguiente imagen"
				>
					<ChevronRight className="w-6 h-6" />
				</button>

				{/* Indicadores de posición */}
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
					{promoImages.map((_, index) => (
						<button
							type="button"
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-3 h-3 rounded-full ${
								index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
							}`}
							aria-label={`Ir a la imagen ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</>
	);
}
