import {
  Award,
  Calendar,
  CheckCircle,
  FileCheck,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export function EducationAndLicense() {
  return (
    <section id="education" className="py-12 sm:py-16 border-b transition-colors border-slate-800/80 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
            Education Details
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Education & PRC Board Licensure
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Academic degrees, technical certifications, and government professional licensure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: College Degree */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 mb-3">
                <GraduationCap className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  College Education
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                BS in Electronics and Communication Engineering (ECE)
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mb-2">
                Liceo De Cagayan University
              </p>
              <p className="text-xs font-mono text-slate-300">
                Period: SY 2016-2017
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Liceo De Cagayan University</span>
              <span className="text-slate-300">SY 2016-2017</span>
            </div>
          </div>

          {/* Card 2: PRC Board Examination */}
          <div className="bg-slate-950 border border-cyan-500/30 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 mb-3">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Professional Licensure
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                Electronics Engineer
              </h3>
              <p className="text-sm font-semibold text-cyan-400 font-mono mb-2">
                PRC No. 0073854
              </p>
              <p className="text-xs font-mono text-emerald-400">
                Date Pass the Boards: May 2019
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>PRC Philippines</span>
              <span className="text-emerald-400 font-medium">May 2019</span>
            </div>
          </div>

          {/* Card 3: Secondary Education */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 mb-3">
                <Award className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Secondary Education
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                NC2 in Electronics Technology
              </h3>
              <p className="text-sm font-semibold text-slate-200 mb-2">
                Opol National Secondary Technical School
              </p>
              <p className="text-xs font-mono text-slate-300">
                Period: SY 2010 – 2011
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Opol Technical School</span>
              <span className="text-slate-300">SY 2010 – 2011</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
