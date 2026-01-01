"use client";

import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "./button";
import { Kbd } from "./kbd";
import { Tooltip } from "./tooltip";

const CircleAnimation = () => {
	const CIRCLE_RADIUS = 20;

	return (
		<svg
			className="pointer-events-none absolute -top-3 -left-3"
			style={{
				width: CIRCLE_RADIUS * 2,
				height: CIRCLE_RADIUS * 2,
			}}
		>
			<title>Like Animation Circle</title>
			<motion.circle
				cx={CIRCLE_RADIUS}
				cy={CIRCLE_RADIUS}
				r={CIRCLE_RADIUS - 2}
				fill="none"
				initial={{
					scale: 0,
					stroke: "#E5214A",
					strokeWidth: CIRCLE_RADIUS * 2,
				}}
				animate={{
					scale: 1,
					stroke: "#CC8EF5",
					strokeWidth: 0,
				}}
				transition={{
					duration: 0.4,
					ease: [0.33, 1, 0.68, 1], // cubic-out
				}}
			/>
		</svg>
	);
};

// Burst animation with particles
const BurstAnimation = () => {
	// Colors for particles with from/to transitions
	const colorPairs = [
		{ from: "#9EC9F5", to: "#9ED8C6" },
		{ from: "#91D3F7", to: "#9AE4CF" },
		{ from: "#DC93CF", to: "#E3D36B" },
		{ from: "#CF8EEF", to: "#CBEB98" },
		{ from: "#87E9C6", to: "#1FCC93" },
		{ from: "#A7ECD0", to: "#9AE4CF" },
		{ from: "#87E9C6", to: "#A635D9" },
		{ from: "#D58EB3", to: "#E0B6F5" },
		{ from: "#F48BA2", to: "#CF8EEF" },
		{ from: "#91D3F7", to: "#A635D9" },
		{ from: "#CF8EEF", to: "#CBEB98" },
		{ from: "#87E9C6", to: "#A635D9" },
		{ from: "#9EC9F5", to: "#9ED8C6" },
		{ from: "#91D3F7", to: "#9AE4CF" },
	];

	return (
		<div className="pointer-events-none absolute -top-3 -left-3 grid size-10 place-items-center">
			{colorPairs.map((colors, index) => (
				<Particle
					// biome-ignore lint/suspicious/noArrayIndexKey: intentional for static list
					key={index}
					fromColor={colors.from}
					toColor={colors.to}
					index={index}
					totalParticles={colorPairs.length}
				/>
			))}
		</div>
	);
};

const BURST_RADIUS = 32;
const START_RADIUS = 4;
const PATH_SCALE_FACTOR = 0.8;

// Particle component for burst animation
const Particle = ({
	fromColor,
	toColor,
	index,
	totalParticles,
}: {
	fromColor: string;
	toColor: string;
	index: number;
	totalParticles: number;
}) => {
	// Calculate angle based on index with 45 degree offset
	const angle = (index / totalParticles) * 360 + 45;
	const radians = (angle * Math.PI) / 180;

	// Add randomness to the burst distance (±15%)
	const randomFactor = 0.85 + Math.random() * 0.3;
	const burstDistance = BURST_RADIUS * randomFactor;

	// Randomize duration between 500-700ms
	const duration = 500 + Math.random() * 200;

	// Calculate the degree shift (13 degrees in radians)
	const degreeShift = (13 * Math.PI) / 180;

	return (
		<motion.div
			className="pointer-events-none absolute size-1.5 rounded-full"
			style={{ backgroundColor: fromColor, opacity: 0 }}
			initial={{
				opacity: 0,
				scale: 1,
				x: Math.cos(radians) * START_RADIUS * PATH_SCALE_FACTOR,
				y: Math.sin(radians) * START_RADIUS * PATH_SCALE_FACTOR,
				backgroundColor: fromColor,
			}}
			animate={{
				opacity: [0, 1, 1, 0],
				x: Math.cos(radians + degreeShift) * burstDistance * PATH_SCALE_FACTOR,
				y: Math.sin(radians + degreeShift) * burstDistance * PATH_SCALE_FACTOR,
				scale: 0,
				backgroundColor: toColor,
			}}
			transition={{
				opacity: {
					times: [0, 0.01, 0.99, 1],
					duration: duration / 1000,
					delay: 0.4,
				},
				x: {
					duration: duration / 1000,
					ease: [0.23, 1, 0.32, 1], // quint.out for movement
					delay: 0.3,
				},
				y: {
					duration: duration / 1000,
					ease: [0.23, 1, 0.32, 1], // quint.out for movement
					delay: 0.3,
				},
				scale: {
					duration: duration / 1000,
					ease: [0.55, 0.085, 0.68, 0.53], // quad.in for scaling
					delay: 0.3,
				},
				backgroundColor: {
					duration: duration / 1000,
					delay: 0.3,
				},
			}}
		/>
	);
};

interface LikeButtonProps {
	isLiked?: boolean;
	onToggle?: () => void;
}

export const LikeButton = ({
	isLiked: externalIsLiked = false,
	onToggle,
}: LikeButtonProps) => {
	const [isAnimating, setIsAnimating] = useState(false);
	const iconButtonRef = useRef<null | HTMLButtonElement>(null);

	const toggleLike = () => {
		if (onToggle) {
			onToggle();
			if (!externalIsLiked) {
				setIsAnimating(true);
			}
		}
	};

	const MotionHeart = motion(Heart);

	return (
		<Tooltip
			label={
				<span className="flex items-center gap-2">
					{externalIsLiked ? "Quitar de favoritos" : "Agregar a favoritos"}
					<Kbd>F</Kbd>
				</span>
			}
		>
			<Button
				variant={"ghost"}
				size={"icon"}
				ref={iconButtonRef}
				type="button"
				onClick={toggleLike}
				aria-label={
					externalIsLiked ? "Quitar de favoritos" : "Agregar a favoritos"
				}
			>
				<div className="relative">
					{isAnimating && <CircleAnimation />}
					{isAnimating && <BurstAnimation />}
					{isAnimating ? (
						<MotionHeart
							key="animating-heart"
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 10,
								delay: 0.3,
							}}
							onAnimationComplete={() => setIsAnimating(false)}
							className="text-red-500"
							width="15"
							height="15"
							viewBox="0 0 24 24"
							stroke="currentColor"
							fill="currentColor"
						/>
					) : (
						<Heart
							className={cn("transition-colors", {
								"text-red-500 fill-red-500": externalIsLiked,
								"text-foreground": !externalIsLiked,
							})}
						/>
					)}
				</div>
			</Button>
		</Tooltip>
	);
};
