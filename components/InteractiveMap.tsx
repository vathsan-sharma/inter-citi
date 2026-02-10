
import React, { useState } from 'react';

interface MapPoint {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'hub' | 'terminal';
  details: string;
}

const hubs: MapPoint[] = [
  { id: 'toronto', name: 'Toronto HQ', x: 745, y: 365, type: 'hub', details: 'Main Distribution & Woodbridge Ops' },
  { id: 'montreal', name: 'Montreal', x: 815, y: 335, type: 'hub', details: 'East Coast Gateway' },
  { id: 'chicago', name: 'Chicago', x: 635, y: 415, type: 'terminal', details: 'Midwest Distribution Hub' },
  { id: 'vancouver', name: 'Vancouver', x: 120, y: 245, type: 'terminal', details: 'West Coast Gateway' },
  { id: 'seattle', name: 'Seattle', x: 120, y: 285, type: 'terminal', details: 'Pacific Northwest Link' },
  { id: 'new-jersey', name: 'New York / NJ', x: 825, y: 415, type: 'hub', details: 'Northeast Logistics Center' },
  { id: 'calgary', name: 'Calgary', x: 260, y: 285, type: 'terminal', details: 'Western Canada Hub' },
  { id: 'denver', name: 'Denver', x: 420, y: 495, type: 'terminal', details: 'Mountain Region Center' },
  { id: 'detroit', name: 'Detroit', x: 690, y: 395, type: 'terminal', details: 'Automotive Corridor' },
];

const corridors = [
  { from: 'toronto', to: 'chicago', time: 'Next-Day', id: 't-c' },
  { from: 'toronto', to: 'montreal', time: 'Next-Day', id: 't-m' },
  { from: 'montreal', to: 'new-jersey', time: '1-2 Days', id: 'm-nj' },
  { from: 'vancouver', to: 'seattle', time: 'Next-Day', id: 'v-s' },
  { from: 'calgary', to: 'denver', time: '2 Days', id: 'c-d' },
  { from: 'toronto', to: 'detroit', time: 'Next-Day', id: 't-d' },
];

const InteractiveMap: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[16/10] bg-slate-950 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 group">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Continent Graphic Container */}
      <div className="absolute inset-0 flex items-center justify-center p-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000">
        <svg viewBox="0 0 1000 700" className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          {/* Stylized North America Outline */}
          <path
            d="M50,150 Q200,50 400,80 T700,50 T950,150 L980,450 Q900,650 600,680 T200,600 L50,450 Z"
            fill="rgba(30, 41, 59, 0.4)"
            stroke="#334155"
            strokeWidth="2"
          />
          
          {/* Animated Transit Corridors */}
          {corridors.map((c) => {
            const from = hubs.find(h => h.id === c.from)!;
            const to = hubs.find(h => h.id === c.to)!;
            const isActive = hoveredId === c.from || hoveredId === c.to || hoveredId === c.id;
            
            return (
              <g key={c.id}>
                {/* Static Path */}
                <line
                  x1={from.x} y1={from.y}
                  x2={to.x} y2={to.y}
                  stroke={isActive ? "#60a5fa" : "#1e293b"}
                  strokeWidth={isActive ? "3" : "1.5"}
                  className="transition-all duration-500"
                />
                
                {/* Moving Particle Effect */}
                <circle r="2" fill="#60a5fa">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path={`M ${from.x},${from.y} L ${to.x},${to.y}`}
                  />
                </circle>
              </g>
            );
          })}

          {/* Hub & Terminal Points */}
          {hubs.map((hub) => (
            <g 
              key={hub.id}
              onMouseEnter={() => setHoveredId(hub.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="cursor-pointer"
            >
              {/* Pulse effect for hubs */}
              {hub.type === 'hub' && (
                <circle cx={hub.x} cy={hub.y} r="12" fill="#3b82f6" className="animate-ping opacity-20" />
              )}
              
              {/* Outer Ring */}
              <circle
                cx={hub.x}
                cy={hub.y}
                r={hoveredId === hub.id ? "10" : "6"}
                fill="none"
                stroke={hub.type === 'hub' ? "#3b82f6" : "#94a3b8"}
                strokeWidth="2"
                className="transition-all duration-300"
              />
              
              {/* Inner Core */}
              <circle
                cx={hub.x}
                cy={hub.y}
                r={hoveredId === hub.id ? "5" : "3"}
                fill={hoveredId === hub.id ? "#fff" : (hub.type === 'hub' ? "#3b82f6" : "#475569")}
                className="transition-all duration-300 shadow-lg"
              />

              {/* Permanent Label for Main Hubs */}
              {hub.type === 'hub' && (
                <text 
                  x={hub.x} y={hub.y + 25} 
                  textAnchor="middle" 
                  className="fill-slate-400 text-[10px] font-black uppercase tracking-tighter pointer-events-none select-none"
                >
                  {hub.name}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Floating Network Intel Overlay */}
      <div className="absolute top-8 left-8 max-w-[200px] pointer-events-none">
        <div className="bg-slate-900/40 backdrop-blur-xl p-6 rounded-3xl border border-white/5 shadow-2xl">
          <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Network Status</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] text-white font-bold uppercase tracking-wider">Ops Normal</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">9 Hub Terminals</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">6 Major Corridors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Detail Panel (Hover) */}
      <div className={`absolute bottom-8 right-8 left-8 md:left-auto md:w-80 transition-all duration-500 ${hoveredId ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {hoveredId && hubs.find(h => h.id === hoveredId) && (
          <div className="bg-white p-6 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-blue-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest block mb-1">
                  {hubs.find(h => h.id === hoveredId)?.type === 'hub' ? 'Regional Hub' : 'Active Terminal'}
                </span>
                <h3 className="hero-title text-xl text-slate-900 uppercase">
                  {hubs.find(h => h.id === hoveredId)?.name}
                </h3>
              </div>
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              {hubs.find(h => h.id === hoveredId)?.details}
            </p>
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Direct LTL Connection
            </div>
          </div>
        )}
      </div>

      {/* Legend & Instructions */}
      <div className="absolute bottom-8 left-8 hidden lg:flex items-center gap-8 bg-slate-950/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/5">
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Major Hubs</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Terminals</span>
         </div>
         <div className="h-4 w-px bg-white/10"></div>
         <span className="text-[9px] font-medium text-slate-500 italic uppercase tracking-widest">Interactive Network Map</span>
      </div>
    </div>
  );
};

export default InteractiveMap;
