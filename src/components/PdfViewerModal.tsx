import {
  Download,
  ExternalLink,
  FileText,
  Maximize2,
  X
} from 'lucide-react';
import { useEffect } from 'react';
import { RESUME_DATA } from '../data/resumeData';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PdfViewerModal({ isOpen, onClose }: PdfViewerModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume PDF Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md"
    >
      <div className="relative w-full max-w-5xl h-[90vh] bg-slate-900 border border-slate-800 rounded-xl flex flex-col overflow-hidden shadow-2xl">
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-white truncate">
              John_Carlo_Rabanes_Resume_2026.pdf
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              · Official PRC Registered ECE Document
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={RESUME_DATA.personal.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-md transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in New Tab</span>
            </a>

            <a
              href={RESUME_DATA.personal.pdfUrl}
              download="John_Carlo_Rabanes_Resume_2026.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close PDF Viewer"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Embed Canvas */}
        <div className="flex-1 bg-slate-950 overflow-hidden relative">
          <iframe
            src={`${RESUME_DATA.personal.pdfUrl}#view=FitH`}
            title="John Carlo Rabanes Resume PDF"
            className="w-full h-full border-0"
          />

          {/* Fallback notice if browser blocks iframe PDF render */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 text-center p-6 text-slate-400 text-xs">
            <p>
              If the document does not display in your browser frame,{' '}
              <a
                href={RESUME_DATA.personal.pdfUrl}
                download
                className="pointer-events-auto text-cyan-400 underline font-semibold"
              >
                click here to download the PDF directly
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
