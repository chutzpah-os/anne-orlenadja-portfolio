export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/8 py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-tight text-xs text-muted font-medium">
          © {new Date().getFullYear()} Anne Orlenadja. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6">
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
          <a
            href="https://www.youtube.com/@anneorlenadja"
            target="_blank"
            rel="noopener noreferrer"
            className="font-tight text-xs text-muted hover:text-black transition-colors duration-200 font-medium"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  )
}
