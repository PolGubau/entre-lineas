import { createFileRoute } from "@tanstack/react-router";
import { poemasData } from "~/data/poems.data";

export const Route = createFileRoute("/api/og/$poemId")({
	server: {
		handlers: {
			GET: ({ params }) => {
				const poem = poemasData.find((p) => p.id === params.poemId);

				if (!poem) {
					return new Response("Poem not found", { status: 404 });
				}

				// Obtener primer verso del poema para mostrar
				const firstVerse = poem.estrofas[0]?.verses[0]?.text || "";
				const truncatedVerse =
					firstVerse.length > 80
						? `${firstVerse.substring(0, 80)}...`
						: firstVerse;

				// Gradiente basado en el movimiento literario
				const gradients: Record<string, { start: string; end: string }> = {
					Modernismo: { start: "#667eea", end: "#764ba2" },
					"Generación del 27": { start: "#f093fb", end: "#f5576c" },
					"Generación del 98": { start: "#4facfe", end: "#00f2fe" },
					default: { start: "#667eea", end: "#764ba2" },
				};

				const gradient =
					gradients[poem.context.movement || ""] || gradients.default;

				const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${gradient.start};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${gradient.end};stop-opacity:1" />
    </linearGradient>
    <style>
      .title { 
        font-family: Georgia, serif; 
        font-size: 56px; 
        fill: white; 
        font-weight: bold;
      }
      .author { 
        font-family: Georgia, serif; 
        font-size: 36px; 
        fill: rgba(255,255,255,0.9); 
      }
      .verse { 
        font-family: Georgia, serif; 
        font-size: 28px; 
        fill: rgba(255,255,255,0.8); 
        font-style: italic;
      }
      .movement { 
        font-family: system-ui, sans-serif; 
        font-size: 20px; 
        fill: rgba(255,255,255,0.7); 
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .logo { 
        font-family: Georgia, serif; 
        font-size: 24px; 
        fill: rgba(255,255,255,0.6); 
        font-style: italic;
      }
    </style>
  </defs>
  
  <!-- Fondo con gradiente -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  
  <!-- Overlay oscuro para mejor legibilidad -->
  <rect width="1200" height="630" fill="rgba(0,0,0,0.15)"/>
  
  <!-- Decoración: Líneas -->
  <line x1="60" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
  
  <!-- Movimiento literario -->
  <text x="60" y="80" class="movement">${poem.context.movement || "Poesía"}</text>
  
  <!-- Título del poema -->
  <text x="60" y="180" class="title">${poem.title}</text>
  
  <!-- Autor -->
  <text x="60" y="240" class="author">${poem.author}</text>
  
  <!-- Primer verso (decorativo) -->
  <text x="60" y="320" class="verse">"${truncatedVerse}"</text>
  
  <!-- Decoración: Línea inferior -->
  <line x1="60" y1="500" x2="1140" y2="500" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
  
  <!-- Logo "Entre Líneas" -->
  <text x="60" y="560" class="logo">Entre Líneas</text>
  
  <!-- Año publicación -->
  <text x="1100" y="560" class="movement" text-anchor="end">
    ${poem.context.publicationDate.getFullYear()}
  </text>
</svg>
    `.trim();

				return new Response(svg, {
					headers: {
						"Content-Type": "image/svg+xml",
						"Cache-Control": "public, max-age=31536000, immutable",
					},
				});
			},
		},
	},
});
