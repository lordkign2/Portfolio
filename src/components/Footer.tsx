export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-9">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-2 
        rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 shadow-lg text-white">
        
        <p className="text-sm">&copy; {new Date().getFullYear()} Umeh kingsley</p>
        
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/lordkign2"
            target="_blank"
            className="hover:text-blue-400 transition cursor-target"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/umeh-kingsley-43a322369"
            target="_blank"
            className="hover:text-blue-400 transition cursor-target"
          >
            LinkedIn
          </a>
          <a
            href="mailto:lordkign1@gmail.com"
            className="hover:text-blue-400 transition cursor-target"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
