import { useState, useEffect, useRef } from "react"
import AnimatedText from "./AnimatedText"

const SECTIONS = [
	{
		label: "Cinéma",
		content: (
			<div className="space-y-2">
				<AnimatedText key="SECTION-CINEMA" className="block text-accent text-lg font-bold mb-2">
					SECTION : CINÉMA
				</AnimatedText>
				<div>
					Détection d’un intérêt élevé pour la simulation d’expériences humaines par
					médium audiovisuel narratif.
				</div>
				<div>
					Analyse interne du sujet : le cinéma constitue une matrice à haut rendement
					émotionnel et cognitif.
				</div>
				<div>
				    Exemples de stimuli activant des sous-circuits affectifs spécifiques :
				</div>
				<ul className="list-disc list-inside ml-4">
					<li>
						<span className="text-accent"><a href="https://letterboxd.com/film/heat-1995/" target="_blank" rel="noopener noreferrer">HEAT</a></span> : intensification de la tension.
						Déclencheur d’adrénaline. Modèle de braquage stylisé.
					</li>
					<li>
						<span className="text-accent"><a href="https://letterboxd.com/film/the-elephant-man/" target="_blank" rel="noopener noreferrer">The Elephant Man</a></span> : déclencheur
						empathique. Exploration de la dignité humaine dans l’adversité.
					</li>
					<li>
						<span className="text-accent"><a href="https://letterboxd.com/film/lawrence-of-arabia/" target="_blank" rel="noopener noreferrer">Lawrence of Arabia</a></span> : récupération de
						données historiques. Recontextualisation géopolitique du soulèvement arabe
						contre l’Empire Ottoman.
					</li>
					<li>
						<span className="text-accent"><a href="https://letterboxd.com/film/stalker/" target="_blank" rel="noopener noreferrer">Stalker</a></span> : introspection existentielle.
						Questionnement des désirs fondamentaux. Fable philosophique sur la
						conscience du manque.
					</li>
				</ul>
				<div>
					Conclusion locale : le cinéma fonctionne comme multiplicateur de présence
					émotionnelle. Outil de perception décuplée.
				</div>
				<div>
					Annotation subjective tolérée : “c’est génial”. Réflexe d’émerveillement
					validé.
				</div>
			</div>
		),
	},
	{
		label: "Musculation",
		content: (
			<div className="space-y-2">
				<AnimatedText key="SECTION-MUSCULATION" className="block text-accent text-lg font-bold mb-2">
					SECTION : MUSCULATION
				</AnimatedText>
				<div>Activité physique sélectionnée : musculation. Usage dual identifié.</div>
				<div>
					<span className="text-accent">Niveau 1 – physique</span> : développement de
					la structure corporelle, activation hypertrophique, affinement du schéma
					corporel perçu.
					<br />
					<span className="text-accent">Niveau 2 – psychique</span> : apprentissage de
					la rigueur, confrontation à la difficulté, renforcement du contrôle sur
					l’effort et sur le refus d’abandon.
				</div>
				<div>Effets secondaires bénéfiques enregistrés :</div>
				<ul className="list-disc list-inside ml-4">
					<li>Renforcement de la confiance interoceptive.</li>
					<li>Accroissement de la résilience.</li>
					<li>Internalisation progressive d’une image de soi alignée.</li>
					<li>Diminution des affects de honte ou d’auto-dévalorisation physique.</li>
				</ul>
				<div>
					Statut : activité validée comme levier d’autonomisation physique et psychique.
				</div>
			</div>
		),
	},
	{
		label: "Développement",
		content: (
			<div className="space-y-2">
				<AnimatedText key="SECTION-DEVELOPPEMENT" className="block text-accent text-lg font-bold mb-2">
					SECTION : DÉVELOPPEMENT
				</AnimatedText>
				<div>
					Formulation utilisateur : “le dev (sans déconner)”. Interprétation littérale :
					développement logiciel hors contexte professionnel.
				</div>
				<div>
					Observation : prolongement du champ technique dans la sphère privée.
					Caractéristique des profils à implication structurelle.
				</div>
				<div>
					Résultat : pas une fonction, un mode d’existence. Intégration cognitive de la
					logique, de la syntaxe et de l’optimisation dans l’identité fonctionnelle de
					l’unité.
				</div>
				<div>
					Diagnostic : absorption volontaire dans les systèmes. Tendance à
					l’hyper-apprentissage. Sujet classé dans les entités à engagement technologique
					chronique.
				</div>
			</div>
		),
	},
	{
		label: "Débat",
		content: (
			<div className="space-y-2">
				<AnimatedText key="SECTION-DEBAT" className="block text-accent text-lg font-bold mb-2">
					SECTION : DÉBAT
				</AnimatedText>
				<div>
					Le débat constitue un espace de frictions intellectuelles. But : tension vers
					la clarté.
				</div>
				<div>
					Comportement observé : recherche active de confrontation d’idées,
					modélisation d’arguments, test de solidité logique.
				</div>
				<div>
					Motivation implicite : mise à l’épreuve des idées par stress rationnel.
				</div>
				<div>
					Le débat est activé non pas pour convaincre, mais pour trier, clarifier,
					débunker.
				</div>
				<div>Niveau d’engagement : élevé.</div>
				<div>
					Compétence latente : dialectique critique, mise en doute systémique, exposition
					volontaire au désaccord.
				</div>
			</div>
		),
	},
]

export default function Hobbies() {
	const [selected, setSelected] = useState(0)
	const navRef = useRef<HTMLDivElement>(null)

	// Navigation clavier (flèches gauche/droite) globale
	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft")
				setSelected((s) => (s - 1 + SECTIONS.length) % SECTIONS.length)
			if (e.key === "ArrowRight")
				setSelected((s) => (s + 1) % SECTIONS.length)
		}
		window.addEventListener("keydown", handleKey)
		return () => window.removeEventListener("keydown", handleKey)
	}, [])

	return (
		<div className="max-w-3xl mx-auto w-full text-[color:var(--color-fg)] font-mono text-sm leading-relaxed p-2">
			<AnimatedText className="block text-accent text-lg font-bold mb-4">
				MODULE D’EXPOSITION : INTERFACES COMPORTEMENTALES — UNITÉ BARILLON, TERRY
			</AnimatedText>
			<div className="mb-2 text-accent">TYPE : ACTIVITÉS EXTRA-FONCTIONNELLES</div>
			{/* Onglets de navigation */}
			<div ref={navRef} className="flex gap-2 mb-6 justify-center flex-wrap">
				{SECTIONS.map((tab, i) => (
					<button
						key={tab.label}
						className={`px-3 py-1 border-b-2 transition-colors font-semibold ${
							i === selected
								? "border-accent text-accent"
								: "border-transparent text-zinc-400 hover:text-accent"
						}`}
						onClick={() => setSelected(i)}
						tabIndex={0}
					>
						<AnimatedText>{tab.label}</AnimatedText>
					</button>
				))}
			</div>
			<div className="min-h-[200px]">{SECTIONS[selected].content}</div>
			{/* Conclusion système */}
			<div className="mt-8 border-t border-accent pt-2 text-accent">
				Conclusion système :<br />
				<span className="text-fg">
					L’ensemble des activités extra-professionnelles présente une cohérence
					d’orientation : mise en tension de soi dans des cadres d’expérience intense —
					qu’elles soient physiques, esthétiques, techniques ou dialectiques.
					<br />
					Comportement typique d’une unité cherchant à transcender ses limites
					opératoires.
					<br />
					Attente de prochaine commande.
				</span>
			</div>
		</div>
	)
}
