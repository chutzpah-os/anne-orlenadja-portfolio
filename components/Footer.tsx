export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/8 py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-tight text-xs text-muted font-medium">
          © {new Date().getFullYear()} Anne Orlenadja. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://instagram.com/anneorlenadja"
            target="_blank"
            rel="noopener noreferrer"
            className="font-tight text-xs text-muted hover:text-black transition-colors duration-200 font-medium"
          >
            Instagram
          </a>
          <a
            href="mailto:aorlenadja@gmail.com"
            className="font-tight text-xs text-muted hover:text-black transition-colors duration-200 font-medium"
          >
            Email
          </a>
          <a
            href="tel:+5579998733448"
            className="font-tight text-xs text-muted hover:text-black transition-colors duration-200 font-medium"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
