import AnimatedText from "./AnimatedText"

export default function Competences() {
  return (
    <div className="max-w-2xl mx-auto text-[color:var(--color-fg)] font-mono text-sm leading-relaxed p-2">
      <AnimatedText className="block text-accent text-lg font-bold mb-2">
        MODULE D’EXPOSITION : COMPÉTENCES TECHNIQUES
      </AnimatedText>
      <div className="mb-2">
        <span className="text-accent">Requête reçue.</span> Traitement en cours.
        <br />
        Affichage du profil opérationnel :{" "}
        <span className="text-accent">Barillon, Terry</span> – entité développement
        logiciel.
      </div>
      <div className="mb-2">Analyse des capacités déclarées :</div>
      <ul className="mb-2 list-disc list-inside ml-2">
        <li>
          <span className="text-accent">Langages fondamentaux détectés.</span> Les
          unités suivantes sont maîtrisées à un niveau exploitable :
          <br />
          <span className="ml-4">HTML, CSS, JavaScript, PHP, Python, SQL, C#.</span>
        </li>
        <li className="mt-2">
          <span className="text-accent">Capacités backend étendues via modules :</span>
          <br />
          <span className="ml-4">
            NodeJS, Django, Symfony, Django Rest Framework.
          </span>
        </li>
        <li className="mt-2">
          <span className="text-accent">Compétences frontend recensées :</span>
          <br />
          <span className="ml-4">VueJS, Angular, Nuxt, Tailwind, Flutter.</span>
          <br />
          Interface graphique conçue à l’aide de : Figma, Wordpress.
        </li>
        <li className="mt-2">
          <span className="text-accent">
            Protocoles de versionnement et supervision validés :
          </span>
          <br />
          <span className="ml-4">Git, Sentry, Auth0.</span>
        </li>
        <li className="mt-2">
          <span className="text-accent">
            Base de données relationnelles et NoSQL intégrées :
          </span>
          <br />
          <span className="ml-4">
            PostgreSQL, MySQL, SQL Server, MongoDB.
          </span>
        </li>
        <li className="mt-2">
          Mention incidente :{" "}
          <span className="text-accent">"IA"</span> — précision non fournie.
          Niveau de contrôle non déterminé.
        </li>
      </ul>
      <div className="mb-2">
        <span className="text-accent">Traits cognitifs déclarés :</span>
        <br />
        <div className="ml-4">– Capacité réflexive activée.</div>
        <div className="ml-4">– Proactivité affirmée.</div>
        <div className="ml-4">– Composant critique surdéveloppé.</div>
      </div>
      <div className="mt-4 border-t border-accent pt-2 text-accent">
        Diagnostic global :{" "}
        <span className="text-fg">
          l’unité possède un socle fonctionnel complet pour le déploiement
          d’interfaces complexes et la manipulation de données persistantes. Niveau
          d’autonomie : croissant.
        </span>
      </div>
    </div>
  )
}
