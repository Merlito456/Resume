import {
  ExternalLink,
  Layers,
  Maximize2,
  Terminal,
  X
} from 'lucide-react';
import { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';

export function SoftwareShowcase() {
  const [selectedToolId, setSelectedToolId] = useState<string>('raawa');
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const selectedTool =
    RESUME_DATA.softwareTools.find((t) => t.id === selectedToolId) ||
    RESUME_DATA.softwareTools[0];

  return (
    <section id="software-inventions" className="py-12 sm:py-16 border-b transition-colors border-slate-800/80 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
            Software Development & Technical Skills
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Internal Applications Developed (9 Tools)
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
            Built to streamline operations: Independently developed and deployed 9 internal software applications using Android, Python, and JavaScript to streamline field operations and administrative workflows.
          </p>
        </div>

        {/* 2-Column Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: 9 Tools List directly from Resume */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              9 Internal Applications Built to Streamline Operations:
            </div>
            <div className="space-y-1.5">
              {RESUME_DATA.softwareTools.map((tool) => {
                const isSelected = tool.id === selectedToolId;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedToolId(tool.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-white shadow-sm'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-xs font-mono font-bold text-cyan-400 shrink-0">
                        {tool.number}.
                      </span>
                      <span className="text-sm font-semibold truncate">
                        {tool.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {tool.screenshotUrl && (
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-1.5 py-0.5 rounded">
                          Preview
                        </span>
                      )}
                      {tool.liveUrl && (
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" title="Live Deployed Web Application" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Tool Detail & Screenshot */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-xl p-5 sm:p-7 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                  <span>APPLICATION #{selectedTool.number} OF 9</span>
                  <span>·</span>
                  <span>Android / Python / JavaScript</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedTool.name}
                </h3>
              </div>

              {selectedTool.liveUrl && (
                <a
                  href={selectedTool.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm shadow-cyan-500/20 whitespace-nowrap self-start sm:self-auto"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live Application</span>
                </a>
              )}
            </div>

            {/* Screenshot Preview */}
            {selectedTool.screenshotUrl ? (
              <div className="mt-4 mb-2">
                <div
                  onClick={() =>
                    setLightboxImage({
                      url: selectedTool.screenshotUrl!,
                      title: selectedTool.name
                    })
                  }
                  className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-800 bg-slate-900 max-h-72"
                  title="Click to view full screenshot"
                >
                  <img
                    src={selectedTool.screenshotUrl}
                    alt={selectedTool.name}
                    className="w-full h-56 sm:h-64 object-cover object-top transition-transform duration-200 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-xs">
                    <Maximize2 className="w-4 h-4 text-cyan-400" />
                    <span>Click to view full size screenshot</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-6 mb-4 p-8 rounded-lg border border-dashed border-slate-800 bg-slate-900/30 text-center">
                <Terminal className="w-8 h-8 text-cyan-400 mx-auto mb-2 opacity-60" />
                <h4 className="text-sm font-bold text-white mb-1">
                  {selectedTool.name}
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Internal telecom automation application built to reduce manual errors and save engineering hours across field teams.
                </p>
              </div>
            )}

            {/* Note from resume */}
            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300">Resume Excerpt: </span>
              "Created automated tools including MOP (Powertapping & Integration) Generators, an Ericsson to Nokia TSSR Generator, a Billing/Materials Grabber, and PRAMS (Project Rollout and Management System) to reduce manual errors and save engineering hours."
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          >
            <div className="px-5 py-3 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">
                  {lightboxImage.title}
                </h4>
                <p className="text-xs text-cyan-400">
                  Application Interface Screenshot
                </p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 overflow-auto bg-slate-950 flex items-center justify-center">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
