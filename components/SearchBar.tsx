import { Search } from "lucide-react";
type SearchBarProps = {
	className?: string;
	placeholder?: string;
};
export default function SearchBar({ className, placeholder }: SearchBarProps) {
	return (
		<>
			<div className={`relative ${className}`}>
				<input
					type="text"
					placeholder={placeholder}
					className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<Search className="h-5 w-5 text-gray-400" />
				</div>
			</div>
		</>
	);
}
