import {
  Download,
  FileText,
  Menu,
  Moon,
  Printer,
  Sun,
  X
} from 'lucide-react';
import { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';

interface HeaderProps {
  onOpenPdf: () => void;
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export function Header({ onOpenPdf, isLightMode, onToggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b transition-colors no-print bg-slate-900/95 dark:bg-slate-950/95 border-slate-800 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
            <span>{RESUME_DATA.personal.shortName}, ECE</span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#summary" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Summary
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Experience
            </a>
            <a href="#software-inventions" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Software Applications
            </a>
            <a href="#competencies" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Competencies
            </a>
            <a href="#education" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Education & License
            </a>
            <a href="#references" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              References
            </a>
          </nav>

          {/* Zone 3: Actions (Print, PDF, Theme) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title={isLightMode ? "Switch to Dark Mode" : "Switch to Clean Paper View"}
              aria-label="Toggle visual theme"
            >
              {isLightMode ? <Moon className="w-4 h-4 text-cyan-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Print Resume Button */}
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
              title="Print standard physical resume"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print Resume</span>
            </button>

            {/* Resume PDF Viewer Button */}
            <button
              onClick={onOpenPdf}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-cyan-500/20"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Official PDF</span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-900 px-4 pt-3 pb-5 space-y-3 text-sm font-medium">
          <a
            href="#summary"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-slate-300 hover:text-cyan-400"
          >
            Summary
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-slate-300 hover:text-cyan-400"
          >
            Experience
          </a>
          <a
            href="#software-inventions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-slate-300 hover:text-cyan-400"
          >
            Software Applications (9 Tools)
          </a>
          <a
            href="#competencies"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-slate-300 hover:text-cyan-400"
          >
            Technical Competencies
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-slate-300 hover:text-cyan-400"
          >
            Education & PRC License
          </a>
          <a
            href="#references"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-slate-300 hover:text-cyan-400"
          >
            Verified References
          </a>
          <div className="pt-2 border-t border-slate-800 flex items-center gap-3">
            <button
              onClick={() => {
                handlePrint();
                setMobileMenuOpen(false);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-md"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Print CV</span>
            </button>
            <a
              href={RESUME_DATA.personal.pdfUrl}
              download="John_Carlo_Rabanes_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-md"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
