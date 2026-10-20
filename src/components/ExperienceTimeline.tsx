import {
  Briefcase,
  Building2,
  Calendar,
  ChevronRight,
  Filter
} from 'lucide-react';
import { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';

export function ExperienceTimeline() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rollout' | 'field' | 'management'>('all');

  const filteredExperiences = RESUME_DATA.experiences.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="experience" className="py-12 sm:py-16 border-b transition-colors border-slate-800/80 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
              Professional Experience
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Work History & Carrier Deployments
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Field rollout engineering, OLT commissioning, and technical management track record directly from resume.
            </p>
          </div>

          {/* Filter Bar (no-print) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg no-print self-start sm:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({RESUME_DATA.experiences.length})
            </button>
            <button
              onClick={() => setActiveFilter('rollout')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'rollout'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Roll-Out
            </button>
            <button
              onClick={() => setActiveFilter('field')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'field'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Field & NOC
            </button>
            <button
              onClick={() => setActiveFilter('management')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'management'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Leadership
            </button>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {filteredExperiences.map((exp) => (
            <article
              key={exp.id}
              className="print-break-inside-avoid bg-slate-950/70 border border-slate-800/90 rounded-xl p-5 sm:p-7 shadow-sm transition-colors hover:border-slate-700"
            >
              {/* Position & Company Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-base font-semibold text-cyan-400">
                      – {exp.company}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-cyan-300 px-3 py-1 bg-cyan-950/40 border border-cyan-800/50 rounded-md self-start">
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Grouped Functional Sections (e.g., Nokia Shanghai Bell) */}
              {exp.sections && exp.sections.length > 0 && (
                <div className="space-y-4 my-3">
                  {exp.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="bg-slate-900/40 p-4 rounded-lg border border-slate-800/70">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                        {sec.heading}:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {sec.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                            <span className="flex-1">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Flat Highlights (e.g., Neo-Tech, Polymedic, Insystic, Quintas, Intellisoft) */}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="space-y-2.5 my-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span className="flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Additional Responsibilities (e.g., Fiberhome Technologies) */}
              {exp.additionalResponsibilities && exp.additionalResponsibilities.length > 0 && (
                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-4 bg-slate-900/40 p-4 rounded-lg">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Additional Responsibilities:
                  </div>
                  {exp.additionalResponsibilities.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="text-sm font-bold text-white">
                          {sub.title} ({sub.period})
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
                        {sub.bullets.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
