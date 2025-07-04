import AnimatedText from "./AnimatedText"
import { useEffect, useRef, useState } from "react"

const TABS = [
	{
		label: "Identification",
		content: (
			<div className="flex-1 min-w-0 flex flex-col items-center md:items-start">
				<div className="p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
					<div className="text-accent font-semibold mb-2 text-center md:text-left">
						IDENTIFICATION
					</div>
					<div>Identification : Barillon, Terry</div>
					<div>Localisation : Zone Nantes (France)</div>
					<div className="break-all">Protocole de contact : terry.barillon@ecoles-epsi.net | 06 84 57 07 61</div>
				</div>
			</div>
		),
	},
	{
		label: "Formation",
		content: (
			<div className="flex-1 min-w-0 flex flex-col items-center md:items-start">
				<div className="p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
					<div className="text-accent font-semibold mb-2 text-center md:text-left">
						TRAJECTOIRE FORMATIONNELLE
					</div>
					<div>Éléments éducatifs traités :</div>
					<ul className="list-disc list-inside ml-4">
						<li>2022–2024 → BTS SIO. Niveau Bac +2 validé.</li>
						<li>2024–2025 → Bachelor Développeur Full Stack. Bac +3 en cours.</li>
						<li>2025–2027 → Master Expert Informatique & SI. Bac +5 projeté.</li>
					</ul>
					<div className="mt-1">
						Établissement d’ancrage : EPSI – unité locale Nantes.
					</div>
				</div>
			</div>
		),
	},
	{
		label: "Expérience",
		content: (
			<div className="flex-1 min-w-0 flex flex-col items-center md:items-start">
				<div className="p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
					<div className="text-accent font-semibold mb-2 text-center md:text-left">
						TRAJECTOIRE OPÉRATIONNELLE
					</div>
					<div>Historique des missions codées :</div>
					<ol className="list-decimal list-inside ml-4">
						<li className="mb-2">
							<span className="font-semibold">Akajoule</span>
							<br />
							<span className="ml-2">Mission : Développeur Fullstack</span>
							<br />
							<span className="ml-2">Période : Janvier 2025 – Septembre 2025</span>
							<br />
							<span className="ml-2">Rôle :</span>
							<ul className="list-disc list-inside ml-8">
								<li>
									Conception d’un outil d’aide à la réduction des émissions de gaz à
									effet de serre.
								</li>
								<li>Correction de tests unitaires défectueux.</li>
								<li>Débogage par analyse structurelle.</li>
								<li>Implémentation d’un modèle de régression linéaire multiple.</li>
								<li>Surveillance des erreurs via Sentry.</li>
							</ul>
							<span className="ml-2">
								Stack utilisée : Nuxt, Django, Tailwind, Django Rest Framework, Auth0,
								PostgreSQL, Sentry.
							</span>
						</li>
						<li className="mb-2">
							<span className="font-semibold">Yvonne Barillon</span>
							<br />
							<span className="ml-2">Mission : Développeur Web</span>
							<br />
							<span className="ml-2">Période : Janvier 2024 – Février 2024</span>
							<br />
							<span className="ml-2">
								Rôle : développement d’une interface e-commerce/vitrine.
							</span>
							<br />
							<span className="ml-2">Outils utilisés : Figma, Wordpress.</span>
						</li>
						<li className="mb-2">
							<span className="font-semibold">ZICPLACE</span>
							<br />
							<span className="ml-2">Mission : Développeur Web</span>
							<br />
							<span className="ml-2">Période : Mai 2023 – Juin 2023</span>
							<br />
							<span className="ml-2">
								Rôle : conception et développement d’un site vitrine/e-commerce.
							</span>
							<br />
							<span className="ml-2">Stack technique : Figma, HTML, CSS, JavaScript, PHP.</span>
						</li>
					</ol>
				</div>
			</div>
		),
	},
	{
		label: "Objectif",
		content: (
			<div className="flex-1 min-w-0 flex flex-col items-center md:items-start">
				<div className="p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
					<div className="text-accent font-semibold mb-2 text-center md:text-left">
						OBJECTIF STRATÉGIQUE
					</div>
					<div>Demande identifiée : alternance de 24 mois.</div>
					<div>Fenêtre de déploiement : septembre 2025.</div>
					<div>Rôle ciblé : développeur FullStack.</div>
					<div className="border-l-4 border-accent pl-4 my-4 italic text-fg">
						"M’impliquer durablement dans les projets de l’entreprise, renforcer mes compétences en systèmes d’information et développement, tout en apportant une réelle valeur ajoutée à l’équipe grâce à une montée en expertise progressive."
					</div>
					<div>Analyse : compatibilité alignée avec environnement technique multi-stack. Adaptabilité probable.</div>
				</div>
			</div>
		),
	},
]

export default function Parcours() {
	const [selected, setSelected] = useState(0)
	const navRef = useRef<HTMLDivElement>(null)

	// Navigation clavier (flèches gauche/droite) globale
	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") setSelected(s => (s - 1 + TABS.length) % TABS.length)
			if (e.key === "ArrowRight") setSelected(s => (s + 1) % TABS.length)
		}
		window.addEventListener("keydown", handleKey)
		return () => window.removeEventListener("keydown", handleKey)
	}, [])

	return (
		<div className="max-w-4xl mx-auto w-full text-[color:var(--color-fg)] font-mono text-sm leading-relaxed p-2">
			<AnimatedText className="block text-accent text-lg font-bold mb-6 text-center">
				MODULE D’EXPOSITION : PARCOURS ET OBJECTIF
			</AnimatedText>
			<nav
				ref={navRef}
				className="flex flex-row justify-center gap-2 mb-6"
			>
				{TABS.map((tab, i) => (
					<button
						key={tab.label}
						className={`px-3 py-1 transition-colors text-xs md:text-sm font-semibold ${
							i === selected
								? "border-b-2 border-accent text-accent"
								: "hover:bg-zinc-800"
						}`}
						onClick={() => setSelected(i)}
						tabIndex={0}
						aria-current={i === selected ? "page" : undefined}
					>
						<AnimatedText>{tab.label}</AnimatedText>
					</button>
				))}
			</nav>
			<div className="w-full flex justify-center">{TABS[selected].content}</div>
		</div>
	)
}
