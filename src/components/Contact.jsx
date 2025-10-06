import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
        <p className="mt-1 text-sm text-white/70">Ready for liftoff? Let’s build something stellar.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-white/80">Name</label>
                <input id="name" name="name" className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-purple-400/50" placeholder="Ada Lovelace" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-white/80">Email</label>
                <input id="email" name="email" type="email" className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-purple-400/50" placeholder="you@galaxy.dev" />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-white/80">Message</label>
              <textarea id="message" name="message" rows={5} className="resize-y rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-purple-400/50" placeholder="Tell me about your mission..." />
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-purple-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-purple-500/20 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <aside className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/80">
            Prefer email or socials? Reach out directly through the channels below.
          </p>
          <a href="mailto:you@galaxy.dev" className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 hover:bg-black/20">
            <Mail className="h-5 w-5 text-purple-300" /> you@galaxy.dev
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 hover:bg-black/20">
            <Github className="h-5 w-5 text-purple-300" /> github.com/yourhandle
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 hover:bg-black/20">
            <Linkedin className="h-5 w-5 text-purple-300" /> linkedin.com/in/yourhandle
          </a>
        </aside>
      </div>
    </section>
  );
}
