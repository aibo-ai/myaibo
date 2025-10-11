"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

const navigation = [
	{ 
		name: "Solutions", 
		href: "#solutions",
		hasDropdown: true,
		dropdownItems: [
			{ name: "AI & ML", href: "/solutions/ai-ml" },
			{ name: "Full Stack Development", href: "/solutions/full-stack-development" },
			{ name: "Search Engine Optimization", href: "/solutions/seo" },
			{ name: "Content Marketing", href: "/solutions/content-marketing" },
		]
	},
	{ name: "Case Studies", href: "/#case-studies" },
	{ name: "About Us", href: "/about" },
	{ name: "Contact Us", href: "/contact" },
]

export function Header() {
	// const [isScrolled, setIsScrolled] = useState(false)

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

	// useEffect(() => {
	//   // const handleScroll = () => {
	//   //   const scrollY = window.scrollY
	//   //   // setIsScrolled(scrollY > 10)


	//   // }

	//   handleScroll() // Call once on mount
	//   window.addEventListener("scroll", handleScroll)
	//   return () => window.removeEventListener("scroll", handleScroll)
	// }, [])

	const handleNavClick = (href: string) => {
		setIsMobileMenuOpen(false)

		if (href.startsWith("#")) {
			const element = document.querySelector(href)
			if (element) {
				element.scrollIntoView({ behavior: "smooth" })
			}
		}
	}

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white"
				// isScrolled
				//   ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
				//   : "bg-transparent"
			)}
		>
			<Container>
				<div className="flex items-center justify-between h-32 lg:h-40 py-6">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<Image
							src="/MyAibo_Logo.png"
							alt="MyAibo"
							width={1200}
							height={360}
							className="h-60 lg:h-72 w-auto"
							priority
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-12">
						{navigation.map((item) => (
							<div
								key={item.name}
								className="relative"
								onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
								onMouseLeave={() => setActiveDropdown(null)}
							>
								{item.hasDropdown ? (
									<button
										className="flex items-center space-x-1 text-xl lg:text-2xl font-bold transition-colors"
										style={{ color: "#7c3bed" }}
									>
										<span>{item.name}</span>
										<ChevronDown className="h-5 w-5" />
									</button>
								) : (
									<Link
										href={item.href}
										onClick={(e) => {
											if (item.href.startsWith("#")) {
												e.preventDefault()
												handleNavClick(item.href)
											}
										}}
										className="text-xl lg:text-2xl font-bold transition-colors"
										style={{ color: "#7c3bed" }}
									>
										{item.name}
									</Link>
								)}
								
								{/* Dropdown Menu */}
								{item.hasDropdown && activeDropdown === item.name && (
									<div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
										{item.dropdownItems?.map((dropdownItem) => (
											<Link
												key={dropdownItem.name}
												href={dropdownItem.href}
												className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
											>
												{dropdownItem.name}
											</Link>
										))}
									</div>
								)}
							</div>
						))}
					</nav>

					{/* Mobile menu button */}
					<button
						className="md:hidden p-3 transition-colors"
						style={{ color: "#7c3bed" }}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? (
							<X className="h-8 w-8" />
						) : (
							<Menu className="h-8 w-8" />
						)}
					</button>
				</div>
			</Container>

			{/* Mobile Navigation */}
			{isMobileMenuOpen && (
				<div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
					<div className="px-4 pt-4 pb-6 space-y-2">
						{navigation.map((item) => (
							<div key={item.name}>
								{item.hasDropdown ? (
									<div>
										<button
											onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
											className="flex items-center justify-between w-full px-4 py-3 text-xl font-bold hover:bg-purple-50 rounded-md transition-colors"
											style={{ color: "#7c3bed" }}
										>
											<span>{item.name}</span>
											<ChevronDown 
												className={`h-5 w-5 transition-transform ${
													activeDropdown === item.name ? 'rotate-180' : ''
												}`} 
											/>
										</button>
										{activeDropdown === item.name && (
											<div className="ml-4 mt-2 space-y-1">
												{item.dropdownItems?.map((dropdownItem) => (
													<Link
														key={dropdownItem.name}
														href={dropdownItem.href}
														onClick={() => setIsMobileMenuOpen(false)}
														className="block px-4 py-2 text-lg text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
													>
														{dropdownItem.name}
													</Link>
												))}
											</div>
										)}
									</div>
								) : (
									<Link
										href={item.href}
										onClick={(e) => {
											if (item.href.startsWith("#")) {
												e.preventDefault()
												handleNavClick(item.href)
											} else {
												setIsMobileMenuOpen(false)
											}
										}}
										className="block px-4 py-3 text-xl font-bold hover:bg-purple-50 rounded-md transition-colors"
										style={{ color: "#7c3bed" }}
									>
										{item.name}
									</Link>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</header>
	)
}
