export default function Footer() {
  const navLinks = [
    { label: "Experiences", href: "#experiences" },
    { label: "Gallery", href: "#gallery" },
    { label: "Dining", href: "#dining" },
    { label: "Pricing", href: "#pricing" },
    { label: "Find Us", href: "#location" },
  ];

  return (
    <footer className="border-t border-warm-white/10 bg-charcoal py-16 text-warm-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-light tracking-[0.2em] text-warm-white">
              BREATHE
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed">
              A thermal wellness sanctuary in the heart of Phuket. Recovery,
              restoration, and quiet luxury.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-warm-white">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm transition-colors hover:text-warm-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-warm-white">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-3 font-sans text-sm">
              <span>WhatsApp</span>
              <a
                href="mailto:hello@breathephuket.com"
                className="transition-colors hover:text-warm-white"
              >
                hello@breathephuket.com
              </a>
              <a
                href="https://www.instagram.com/breathe.phuket/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-warm-white"
              >
                @breathe.phuket
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-warm-white/10 pt-8">
          <p className="font-sans text-xs text-warm-white/40">
            &copy; 2026 Breathe Sanctuary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
