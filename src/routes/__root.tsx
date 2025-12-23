import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import appCss from "../app/styles.css?url";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import { generateHomeSEO, generateSEOTags } from "~/shared/lib/seo";
import { ErrorBoundary } from "~/shared/ui/error-boundary";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => {
		const seoConfig = generateHomeSEO();
		const { meta, links } = generateSEOTags(seoConfig);
		return {
			meta,
			links: [
				...links,
				{
					rel: "stylesheet",
					href: appCss,
				},
			],
		};
	},

	component: RootComponent,
});

function RootComponent() {
	return (
		<ErrorBoundary>
			<RootDocument>
				<Outlet />
			</RootDocument>
		</ErrorBoundary>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<head>
				<HeadContent />
			</head>
			<body className="min-h-screen relative bg-background text-foreground overflow-hidden">
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
						TanStackQueryDevtools,
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
