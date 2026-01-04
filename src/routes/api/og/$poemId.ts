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
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" preserveAspectRatio="xMidYMid slice">
  <defs>
    <style>
      .title { 
        font-family: Georgia, serif; 
        font-size: 52px; 
        fill: #1a1a1a; 
        font-weight: bold;
      }
      .author { 
        font-family: Georgia, serif; 
        font-size: 32px; 
        fill: rgba(26,26,26,0.8); 
      }
      .verse { 
        font-family: Georgia, serif; 
        font-size: 24px; 
        fill: rgba(26,26,26,0.7); 
        font-style: italic;
      }
      .movement { 
        font-family: system-ui, sans-serif; 
        font-size: 18px; 
        fill: rgba(26,26,26,0.6); 
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .logo { 
        font-family: Georgia, serif; 
        font-size: 22px; 
        fill: rgba(26,26,26,0.5); 
        font-style: italic;
      }
    </style>
  </defs>
  
  <!-- Fondo amarillo (color de acento) -->
  <rect width="1200" height="630" fill="#fde047"/>
  
  <!-- Decoración: Línea superior -->
  <line x1="100" y1="120" x2="280" y2="120" stroke="rgba(26,26,26,0.3)" stroke-width="3"/>
  
  <!-- Movimiento literario -->
  <text x="100" y="95" class="movement">${poem.context.movement || "Poesía"}</text>
  
  <!-- Título del poema (centrado en el área) -->
  <text x="100" y="200" class="title">${poem.title}</text>
  
  <!-- Autor -->
  <text x="100" y="260" class="author">${poem.author}</text>
  
  <!-- Primer verso (decorativo) -->
  <text x="100" y="340" class="verse">"${truncatedVerse}"</text>
  
  <!-- Decoración: Línea inferior -->
  <line x1="100" y1="490" x2="1100" y2="490" stroke="rgba(26,26,26,0.2)" stroke-width="1"/>
  
  <!-- Logo "Entre Líneas" -->
  <text x="100" y="545" class="logo">Entre Líneas</text>
  
  <!-- Año publicación -->
  <text x="1080" y="545" class="movement" text-anchor="end">
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
