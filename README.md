# OS React — Customizable Themed Portfolio (Alien & more)

This project is an interactive "OS"-style portfolio built with React + TypeScript + Vite, designed to be **highly customizable with movie themes** (Alien, and more to come). The goal is to offer an immersive, unique experience adaptable to different cinematic universes.

## Purpose

- Offer an original personal portfolio inspired by iconic movie interfaces.
- Allow dynamic theme switching (Alien, then others: Lawrence of Arabia, Zodiac, Heat, etc.).
- Make each theme immersive: colors, fonts, animations, wallpapers, UI/UX, music, etc.

## Main Features

- **Animated boot screen** (GSAP/SplitType) faithful to each universe.
- **Dynamic themes** (Alien, and future themes): colors, fonts, wallpapers, UI/UX variations, music.
- **Interactive desktop** with draggable windows, keyboard-navigable vertical menu, contextual module display.
- **Content modules**: Skills, Projects, Hobbies, Journey, Contact.
- **Keyboard navigation** (vertical and horizontal) for all menus and tabs.
- **Background music** according to the theme.
- **AnimatedText component** for letter-by-letter animation, reusable everywhere.
- **Contact form** with EmailJS (public key via environment variable).
- **Responsive** and design inspired by retro-futuristic or cyberpunk interfaces depending on the theme.

## Project Structure

- `src/components/`: all modules (BootScreen, Desktop, DesktopArea, Window, AnimatedText, Competences, Projets, Hobbies, Parcours, Contact…)
- `src/core/theme/`: theme management, types, providers, theme files (one per universe).
- `public/`: static assets (wallpapers, sounds…)
- `index.css`: global styles, fonts, scanline effects.

## Installation & Launch

1. **Clone the repo**  
   `git clone ...`

2. **Install dependencies**  
   `npm install`

3. **Configure EmailJS**  
   Create a `.env` file at the root:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

4. **Start the project**  
   `npm run dev`

## Add a New Movie Theme

1. Create a file in `src/core/theme/themes/` (e.g. `matrix.ts`, `bladeRunner.ts`...)
2. Define the colors, fonts, wallpapers, effects, music, etc. specific to the universe.
3. Add the theme to the theme selector (`Desktop.tsx`).
4. Customize the modules if needed to match the movie's atmosphere.

## Customization

- **Themes**: editable and extensible in `src/core/theme/themes/`
- **Modules**: each module is an independent component, easily editable.
- **Effects**: scanlines, glow, GSAP/SplitType animations, music, etc.

## Tech Stack

- React 18 + TypeScript
- Vite
- TailwindCSS
- Zustand (window management)
- GSAP, SplitType (animations)
- EmailJS (contact)
- Custom fonts

---

Project by Barillon Terry — Experimental portfolio inspired by Alien/MU-TH-UR 6000 and other universes to come.

---

> For any questions or suggestions, use the "Contact Me" section of the OS.
