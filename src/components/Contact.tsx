import { useRef, useState } from "react"
import AnimatedText from "./AnimatedText"
import emailjs from "emailjs-com"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    if (!formRef.current) return
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(() => {
        setStatus("Message envoyé ! Merci pour votre contact.")
        formRef.current?.reset()
      })
      .catch(() => setStatus("Erreur lors de l'envoi. Merci de réessayer."))
      .finally(() => setLoading(false))
  }

  return (
    <div className="max-w-md mx-auto w-full text-[color:var(--color-fg)] font-mono text-sm leading-relaxed p-2">
      <AnimatedText className="block text-accent text-lg font-bold mb-4">
        ME CONTACTER
      </AnimatedText>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-accent">Nom</label>
          <input name="user_name" placeholder="Saisir nom" required className="w-full px-2 py-1 bg-transparent border-b border-b-accent text-fg" />
        </div>
        <div>
          <label className="block mb-1 text-accent">Email</label>
          <input name="user_email" placeholder="Saisir email" type="email" required className="w-full px-2 py-1 bg-transparent border-b border-b-accent text-fg" />
        </div>
        <div>
          <label className="block mb-1 text-accent">Message</label>
          <textarea name="message" placeholder="Saisir message" required rows={5} className="w-full px-2 py-1 bg-transparent border-b border-b-accent text-fg" />
        </div>
        <button type="submit" disabled={loading} className="text-accent underline px-4 py-2 font-bold text-lg">
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>
      {status && <div className="mt-4 text-accent">{status}</div>}
    </div>
  )
}
