import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/og/home")({
	server: {
		handlers: {
			GET: () => {
				const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
    <style>
      .title { 
        font-family: Georgia, serif; 
        font-size: 72px; 
        fill: white; 
        font-weight: bold;
      }
      .subtitle { 
        font-family: Georgia, serif; 
        font-size: 32px; 
        fill: rgba(255,255,255,0.85); 
        font-style: italic;
      }
      .description { 
        font-family: system-ui, sans-serif; 
        font-size: 24px; 
        fill: rgba(255,255,255,0.75); 
      }
    </style>
  </defs>
  
  <!-- Fondo con gradiente -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  
  <!-- Overlay oscuro -->
  <rect width="1200" height="630" fill="rgba(0,0,0,0.15)"/>
  
  <!-- Decoración: Líneas superiores -->
  <line x1="60" y1="120" x2="250" y2="120" stroke="rgba(255,255,255,0.5)" stroke-width="3"/>
  
  <!-- Título principal -->
  <text x="60" y="220" class="title">Entre Líneas</text>
  
  <!-- Subtítulo -->
  <text x="60" y="280" class="subtitle">Análisis Interactivo de Poesía</text>
  
  <!-- Descripción -->
  <text x="60" y="360" class="description">Explora figuras retóricas, contexto histórico</text>
  <text x="60" y="400" class="description">y el significado profundo de cada verso</text>
  
  <!-- Decoración: Patrón de puntos -->
  <circle cx="900" cy="200" r="120" fill="rgba(255,255,255,0.05)"/>
  <circle cx="1050" cy="350" r="80" fill="rgba(255,255,255,0.05)"/>
  <circle cx="950" cy="480" r="100" fill="rgba(255,255,255,0.05)"/>
  
  <!-- Footer -->
  <line x1="60" y1="530" x2="1140" y2="530" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
  <text x="60" y="580" class="description" fill="rgba(255,255,255,0.6)">
    Lorca · Machado · Neruda · Generación del 27
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
