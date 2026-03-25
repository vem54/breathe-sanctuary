export default function Footer() {
  return (
    <footer className="bg-charcoal py-16 text-warm-white/70">
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
              {["Experiences", "Gallery", "Dining", "Pricing", "Find Us"].map(
                (label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase().replace(" ", "-")}`}
                    className="font-sans text-sm transition-colors hover:text-warm-white"
                  >
                    {label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-warm-white">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-3 font-sans text-sm">
              <a
                href="#contact"
                className="transition-colors hover:text-warm-white"
              >
                WhatsApp
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-warm-white"
              >
                Email
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-warm-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-warm-white/10 pt-8">
          <p className="font-sans text-xs text-warm-white/40">
            &copy; {new Date().getFullYear()} Breathe Sanctuary. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
