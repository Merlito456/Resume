import {
  Building2,
  Check,
  CheckCircle,
  Copy,
  Mail,
  Phone,
  Send,
  UserCheck
} from 'lucide-react';
import { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';

export function ReferencesAndContact() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyPhone = (phone: string, idx: number) => {
    navigator.clipboard.writeText(phone);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="references" className="py-12 sm:py-16 border-b transition-colors border-slate-800/80 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
            References
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Professional References
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            References from Globe Telecom, Fiberhome Technologies, and Nokia Shanghai Bell.
          </p>
        </div>

        {/* 3 Reference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {RESUME_DATA.references.map((ref, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Reference {idx + 1}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {ref.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-cyan-300 mb-0.5">
                  {ref.title}
                </p>
                <p className="text-xs text-slate-400 font-semibold mb-4">
                  – {ref.company}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs font-mono text-slate-300">
                  {ref.contact}
                </div>
                <button
                  onClick={() => handleCopyPhone(ref.contact, idx)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded transition-colors"
                  title="Copy contact phone number"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 opacity-60" />
                      <span className="text-[11px]">Copy Phone</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Hire Contact Banner (no-print) */}
        <div className="no-print bg-slate-950 border border-cyan-500/30 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Contact Engr. John Carlo Rabanes
            </h3>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              Open to telecom engineering, OLT rollout, and process automation opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`mailto:${RESUME_DATA.personal.email}?subject=Telecom%20Opportunity%20-%20Engr.%20John%20Carlo%20Rabanes`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm shadow-cyan-500/20 whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              <span>{RESUME_DATA.personal.email}</span>
            </a>

            <a
              href={`tel:${RESUME_DATA.personal.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{RESUME_DATA.personal.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
