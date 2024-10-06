import Image from "next/image";
import React from "react";

type LogoProps = {
	className?: string;
};

export default function Logo({ className }: LogoProps) {
	return (
		<>
			<div className={`relative ${className}`}>
				<Image src="/logo.svg" alt="Logo" width={60} height={60} />
			</div>
		</>
	);
}
