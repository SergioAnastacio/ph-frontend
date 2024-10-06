import Image from "next/image";
import React from "react";

type ProductCardProps = {
	image: string;
	title: string;
	price: string;
	stract: string;
};

export default function ProductCard({
	image,
	title,
	price,
	stract,
}: ProductCardProps) {
	return (
		<>
			<div className="border rounded-lg overflow-hidden shadow-lg">
				<Image
					src={image}
					alt={title}
					width={300}
					height={300}
					className="w-full object-cover my-3"
				/>
				<div className="p-4">
					<h2 className="text-lg font-semibold">{title}</h2>
					<p className="text-gray-600">{price}</p>
					<p className="prose prose-xl my-1">{stract}</p>
				</div>
			</div>
		</>
	);
}
