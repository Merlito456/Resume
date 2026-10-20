import { ArrowUp, Download, FileText, Printer } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface FooterProps {
  onOpenPdf: () => void;
}

export function Footer({ onOpenPdf }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-xs text-slate-400 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sm font-bold text-white">
              {RESUME_DATA.personal.fullName}
            </p>
            <p className="text-xs text-slate-400">
              {RESUME_DATA.personal.title}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-300">
            <a href="#summary" className="hover:text-cyan-400 transition-colors">
              Summary
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#software-inventions" className="hover:text-cyan-400 transition-colors">
              Software
            </a>
            <a href="#competencies" className="hover:text-cyan-400 transition-colors">
              Competencies
            </a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">
              Education
            </a>
            <a href="#references" className="hover:text-cyan-400 transition-colors">
              References
            </a>
            <button
              onClick={() => window.print()}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-slate-300"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onOpenPdf}
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PDF Document</span>
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-md border border-slate-800 transition-colors text-xs"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
