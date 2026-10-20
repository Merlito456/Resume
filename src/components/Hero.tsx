import {
  Award,
  Calendar,
  Check,
  Copy,
  Download,
  FileCheck,
  FileText,
  Mail,
  MapPin,
  Phone,
  Printer,
  Sparkles,
  User
} from 'lucide-react';
import { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';

interface HeroProps {
  onOpenPdf: () => void;
}

export function Hero({ onOpenPdf }: HeroProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleCopyAll = () => {
    const allInfo = `Name: ${RESUME_DATA.personal.fullName}
Title: ${RESUME_DATA.personal.title}
Phone: ${RESUME_DATA.personal.phone}
Email: ${RESUME_DATA.personal.email}
Address: ${RESUME_DATA.personal.address}
Date of Birth: ${RESUME_DATA.personal.birthDate}
Birth Place: ${RESUME_DATA.personal.birthPlace}
Marital Status: ${RESUME_DATA.personal.maritalStatus}
Expected Salary: ${RESUME_DATA.personal.expectedSalary}`;
    navigator.clipboard.writeText(allInfo);
    setCopiedField('all');
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="summary" className="pt-8 pb-12 sm:pb-16 border-b transition-colors border-slate-800/80 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Document Top Badge / Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2 font-medium">
            <span className="font-semibold text-cyan-400">OFFICIAL CURRICULUM VITAE</span>
            <span aria-hidden="true">·</span>
            <span>PRC License No. 0073854</span>
            <span aria-hidden="true">·</span>
            <span>May 2019 ECE Board Exam Passer</span>
          </div>

          <div className="flex items-center gap-2 no-print">
            <button
              onClick={handleCopyAll}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
            >
              {copiedField === 'all' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied Full CV Data</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Contact Info</span>
                </>
              )}
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Executive Header Block */}
        <div className="pt-8 pb-8 flex flex-col md:flex-row items-start gap-6 lg:gap-8 justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
              {RESUME_DATA.personal.fullName}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">
              {RESUME_DATA.personal.title}
            </p>

            {/* Contact details grid with high legibility */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2.5 gap-x-6 text-sm text-slate-300 mb-6 py-4 px-4 bg-slate-950/70 border border-slate-800/80 rounded-xl">
              <button
                onClick={() => handleCopy(RESUME_DATA.personal.phone, 'phone')}
                className="inline-flex items-center gap-2 hover:text-cyan-400 text-left transition-colors group"
                title="Click to copy phone number"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono">{RESUME_DATA.personal.phone}</span>
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 shrink-0" />
                )}
              </button>

              <button
                onClick={() => handleCopy(RESUME_DATA.personal.email, 'email')}
                className="inline-flex items-center gap-2 hover:text-cyan-400 text-left transition-colors group truncate"
                title="Click to copy email address"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono truncate">{RESUME_DATA.personal.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 shrink-0" />
                )}
              </button>

              <div className="inline-flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{RESUME_DATA.personal.address}</span>
              </div>

              <div className="inline-flex items-center gap-2 text-slate-400 text-xs">
                <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Date of Birth: {RESUME_DATA.personal.birthDate}</span>
              </div>

              <div className="inline-flex items-center gap-2 text-slate-400 text-xs">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Birth Place: {RESUME_DATA.personal.birthPlace}</span>
              </div>

              <div className="inline-flex items-center gap-2 text-slate-400 text-xs">
                <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Marital Status: {RESUME_DATA.personal.maritalStatus}</span>
              </div>

              <div className="inline-flex items-center gap-2 text-slate-400 text-xs">
                <FileCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Expected Salary: {RESUME_DATA.personal.expectedSalary}</span>
              </div>
            </div>

            {/* Professional Summary Prose */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Executive Professional Summary
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl text-pretty font-normal">
                {RESUME_DATA.personal.summary}
              </p>
            </div>
          </div>

          {/* Right Column: Headshot Photo & Quick Document Buttons */}
          <div className="flex flex-row md:flex-col items-center md:items-end gap-4 shrink-0">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-md shrink-0">
              <img
                src={RESUME_DATA.personal.photoUrl}
                alt="Engr. John Carlo Rabanes"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback avatar container
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col gap-2 no-print w-full sm:w-auto">
              <button
                onClick={onOpenPdf}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-cyan-500/20"
              >
                <FileText className="w-4 h-4" />
                <span>View Original PDF</span>
              </button>

              <a
                href={RESUME_DATA.personal.pdfUrl}
                download="John_Carlo_Rabanes_Resume.pdf"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Core Quantitative Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
          {RESUME_DATA.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums mb-1">
                {metric.value}
              </div>
              <div className="text-xs font-medium text-slate-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
