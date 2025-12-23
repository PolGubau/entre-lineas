 
import { ComponentProps, ReactNode } from "react";
import { cn } from "~/shared/lib/utils";

type Props = ComponentProps<"input"> & {
	icon?: ReactNode;
};

export const Input = ({ className, type, icon, ref, ...props }: Props) => {
		return (
			<div className="relative">
				<div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
					{icon}
				</div>
				<input
					ref={ref}
					type={type}
					data-slot="input"
					className={cn(
						"file:text-foreground placeholder:text-muted-foreground  dark:bg-input/30 border-input w-full min-w-0 rounded-2xl border bg-background px-4 py-4 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

						"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",

						"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",

						{ "pl-12": icon },
						className,
					)}
					{...props}
				/>
			</div>
		);
	}
 

 