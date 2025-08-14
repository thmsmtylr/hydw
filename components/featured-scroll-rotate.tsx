"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FeaturedScrollRotate({
	children,
}: {
	children: React.ReactNode;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

	return (
		<motion.div ref={ref} style={{ rotate }} className="will-change-transform">
			{children}
		</motion.div>
	);
}
