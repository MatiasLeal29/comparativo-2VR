# Dashboard Electoral 2025 – Comparativo Segunda Vuelta

Plataforma informativa construida con **React + TypeScript + Vite** para ofrecer un comparativo claro y verificable entre los dos candidatos que pasan a la segunda vuelta presidencial de Chile 2025:

- **Jeannette Jara**
- **José Antonio Kast**

La información proviene de los programas de gobierno publicados oficialmente por cada comando.

---

## 🎯 Objetivo del proyecto
- Presentar perfiles profesionales resumidos de ambos candidatos.
- Comparar propuestas oficiales por temática con enlaces al programa completo.
- Mostrar resultados nacionales de la primera vuelta con visualizaciones simples y responsivas.
- Entregar una herramienta accesible y fácil de consultar desde cualquier dispositivo.

---

## ✨ Funcionalidades principales
1. **Perfil Profesional**  
   - Biografía resumida de cada candidato.  
   - Experiencia en el sector público.  
   - Hitos políticos destacados.

2. **Comparativa por Temática**  
   - Economía, seguridad, salud, vivienda, educación, energía, medio ambiente, digitalización/IA, empleo, entre otras.  
   - Cada propuesta enlaza al programa oficial correspondiente.

3. **Resultados Primera Vuelta**  
   - Gráfico de barras con porcentaje y votos.  
   - Totales nacionales y participación electoral.

---

## 🛠 Tecnologías
- React 18 + TypeScript
- Vite 5
- Framer Motion (microinteracciones)
- CSS puro (incluye dark mode)
- Datos en JSON servidos desde `public/data`

---

## 📁 Estructura
- `src/` componentes, páginas y contexto de tema.  
- `public/data/` archivos JSON con perfiles, comparativas y resultados.  
- `public/images/` assets de los candidatos.  
- `vite.config.ts` configuración de Vite.  
- `vercel.json` salida de build (`dist`) para despliegue.
