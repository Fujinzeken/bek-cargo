export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Fleet", href: "#fleet" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Dry Van Shipping",
    "Nationwide Coverage",
    "Real-Time Tracking",
    "24/7 Dispatch",
    "Insured Freight",
  ];

  return (
    <footer className="animated-gradient text-white relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">BC</span>
              </div>
              <span className="text-lg font-black">
                BEK <span className="text-primary-light">CARGO</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Keeping America&apos;s freight moving — one truck at a time.
              Comprehensive trucking services with safe handling and
              coast-to-coast coverage since 2021.
            </p>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full pulse-dot" />
              </div>
              <span className="text-sm text-gray-500">24/7 Operations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-5 text-white/70">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary/40 rounded-full group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-5 text-white/70">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary/40 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-5 text-white/70">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>9674 Waterford Pl Apt 104</p>
              <p>Loveland, OH 45140</p>
              <a
                href="tel:+15434931023"
                className="block hover:text-primary-light transition-colors"
              >
                (543) 493-1023
              </a>
              <a
                href="mailto:dispatch@bek-cargo.com"
                className="block hover:text-primary-light transition-colors"
              >
                dispatch@bek-cargo.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} BEK CARGO INC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
