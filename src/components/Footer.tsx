import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-sm">
      <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-indigo-500/20 rounded-lg">
            <Code2 className="w-4 h-4 text-indigo-400" />
          </div>
          <span className="font-bold text-zinc-200">INNOVATEX 2025</span>
        </div>
        <div className="text-zinc-500 text-center md:text-right">
          <p>&copy; 2025 Gyaniketan Tech Club. All rights reserved.</p>
          <div className="flex justify-center md:justify-end gap-4 mt-2">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
