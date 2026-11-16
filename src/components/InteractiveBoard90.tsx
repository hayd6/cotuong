import { useState } from 'react';
import { motion } from 'motion/react';

type BoardRuleMode = 'coords' | 'horse' | 'cannon' | 'check';

export function InteractiveBoard90() {
  const [mode, setMode] = useState<BoardRuleMode>('coords');

  const tabs: Array<{ id: BoardRuleMode; label: string }> = [
    { id: 'coords', label: '90 Giao điểm (x, y)' },
    { id: 'horse', label: 'Cản chân Mã' },
    { id: 'cannon', label: 'Pháo cần ngòi' },
    { id: 'check', label: 'Cấm tự chiếu Tướng' },
  ];

  const cx = (c: number) => 48 + c * 40;
  const cy = (r: number) => 38 + r * 38;

  return (
    <div className="flex h-full flex-col p-3">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#15805D]">
          Bộ biểu diễn trạng thái & Kiểm tra luật
        </span>
        <div className="flex flex-wrap gap-1.5">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setMode(t.id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                mode === t.id
                  ? 'bg-[#B92B27] text-white shadow-sm'
                  : 'bg-[#F2ECE0] text-[#4B433B] hover:bg-[#E5DAC8]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center">
        <svg viewBox="0 0 420 420" className="h-full max-h-[385px] w-auto select-none">
          {/* Warm wooden parchment board */}
          <rect x="20" y="16" width="376" height="388" rx="12" fill="#F8F1E3" stroke="#B6832C" strokeWidth="2" />

          {Array.from({ length: 10 }).map((_, r) => (
            <line
              key={`h-${r}`}
              x1={cx(0)}
              y1={cy(r)}
              x2={cx(8)}
              y2={cy(r)}
              stroke="#7A5A32"
              strokeOpacity="0.6"
              strokeWidth="1.3"
            />
          ))}

          {Array.from({ length: 9 }).map((_, c) =>
            c === 0 || c === 8 ? (
              <line
                key={`v-${c}`}
                x1={cx(c)}
                y1={cy(0)}
                x2={cx(c)}
                y2={cy(9)}
                stroke="#7A5A32"
                strokeOpacity="0.7"
                strokeWidth="1.6"
              />
            ) : (
              <g key={`v-${c}`}>
                <line x1={cx(c)} y1={cy(0)} x2={cx(c)} y2={cy(4)} stroke="#7A5A32" strokeOpacity="0.6" strokeWidth="1.3" />
                <line x1={cx(c)} y1={cy(5)} x2={cx(c)} y2={cy(9)} stroke="#7A5A32" strokeOpacity="0.6" strokeWidth="1.3" />
              </g>
            )
          )}

          {/* Palaces */}
          <line x1={cx(3)} y1={cy(0)} x2={cx(5)} y2={cy(2)} stroke="#7A5A32" strokeOpacity="0.6" strokeWidth="1.3" />
          <line x1={cx(5)} y1={cy(0)} x2={cx(3)} y2={cy(2)} stroke="#7A5A32" strokeOpacity="0.6" strokeWidth="1.3" />
          <line x1={cx(3)} y1={cy(7)} x2={cx(5)} y2={cy(9)} stroke="#7A5A32" strokeOpacity="0.6" strokeWidth="1.3" />
          <line x1={cx(5)} y1={cy(7)} x2={cx(3)} y2={cy(9)} stroke="#7A5A32" strokeOpacity="0.6" strokeWidth="1.3" />

          <text x={cx(4)} y={cy(4.55)} textAnchor="middle" fill="#8C6530" fillOpacity="0.75" fontSize="14" fontFamily="serif" letterSpacing="8">
            楚河 · 漢界
          </text>

          {Array.from({ length: 9 }).map((_, c) => (
            <text key={`col-${c}`} x={cx(c)} y={28} textAnchor="middle" fill="#6E655A" fontSize="10.5" className="font-mono-tech font-bold">
              {c + 1}
            </text>
          ))}

          {mode === 'coords' && (
            <g>
              {Array.from({ length: 9 }).map((_, c) =>
                [0, 3, 6, 9].map((r) => (
                  <circle key={`pt-${c}-${r}`} cx={cx(c)} cy={cy(r)} r="2.8" fill="#1D4ED8" fillOpacity="0.6" />
                ))
              )}
              <PieceToken x={cx(4)} y={cy(9)} label="帥" side="red" />
              <PieceToken x={cx(4)} y={cy(0)} label="將" side="black" />
              <PieceToken x={cx(1)} y={cy(7)} label="炮" side="red" />
              <PieceToken x={cx(6)} y={cy(7)} label="馬" side="red" />
              <PieceToken x={cx(8)} y={cy(9)} label="車" side="red" />
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <rect x={cx(5.1)} y={cy(6.25)} width="104" height="22" rx="5" fill="#1D4ED8" />
                <text x={cx(5.1) + 52} y={cy(6.25) + 14.5} textAnchor="middle" fill="#FFFFFF" fontSize="10.5" className="font-mono-tech font-bold">
                  Mã (x=7, y=2)
                </text>
              </motion.g>
            </g>
          )}

          {mode === 'horse' && (
            <g>
              <PieceToken x={cx(4)} y={cy(6)} label="馬" side="red" />
              <PieceToken x={cx(4)} y={cy(5)} label="卒" side="black" highlight="amber" />
              <line x1={cx(4)} y1={cy(6)} x2={cx(4)} y2={cy(5)} stroke="#DC2626" strokeWidth="3" />
              <line x1={cx(4)} y1={cy(5)} x2={cx(3)} y2={cy(4)} stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" />
              <line x1={cx(4)} y1={cy(5)} x2={cx(5)} y2={cy(4)} stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" />
              <text x={cx(3)} y={cy(4) - 6} textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="bold">✕ Cấm</text>
              <text x={cx(5)} y={cy(4) - 6} textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="bold">✕ Cấm</text>
              <line x1={cx(4)} y1={cy(6)} x2={cx(5)} y2={cy(6)} stroke="#15805D" strokeWidth="2.5" />
              <line x1={cx(5)} y1={cy(6)} x2={cx(6)} y2={cy(5)} stroke="#15805D" strokeWidth="2" />
              <circle cx={cx(6)} cy={cy(5)} r="8" fill="#15805D" fillOpacity="0.22" stroke="#15805D" strokeWidth="2" />
              <line x1={cx(4)} y1={cy(6)} x2={cx(3)} y2={cy(6)} stroke="#15805D" strokeWidth="2.5" />
              <line x1={cx(3)} y1={cy(6)} x2={cx(2)} y2={cy(5)} stroke="#15805D" strokeWidth="2" />
              <circle cx={cx(2)} cy={cy(5)} r="8" fill="#15805D" fillOpacity="0.22" stroke="#15805D" strokeWidth="2" />
            </g>
          )}

          {mode === 'cannon' && (
            <g>
              <PieceToken x={cx(1)} y={cy(7)} label="炮" side="red" />
              <PieceToken x={cx(1)} y={cy(4)} label="卒" side="black" highlight="amber" />
              <PieceToken x={cx(1)} y={cy(1)} label="馬" side="black" highlight="emerald" />
              <line x1={cx(1)} y1={cy(7)} x2={cx(1)} y2={cy(1)} stroke="#15805D" strokeWidth="2.5" strokeDasharray="5 3" />
              <rect x={cx(1.55)} y={cy(4) - 11} width="110" height="22" rx="5" fill="#B45309" />
              <text x={cx(1.55) + 55} y={cy(4) + 3.5} textAnchor="middle" fill="#FFFFFF" fontSize="10.5" className="font-mono-tech font-bold">
                Ngòi (Screen)
              </text>
              <rect x={cx(1.55)} y={cy(1) - 11} width="128" height="22" rx="5" fill="#15805D" />
              <text x={cx(1.55) + 64} y={cy(1) + 3.5} textAnchor="middle" fill="#FFFFFF" fontSize="10.5" className="font-mono-tech font-bold">
                ✓ Hợp lệ: Ăn quân
              </text>
            </g>
          )}

          {mode === 'check' && (
            <g>
              <PieceToken x={cx(4)} y={cy(9)} label="帥" side="red" highlight="red" />
              <PieceToken x={cx(4)} y={cy(8)} label="仕" side="red" />
              <PieceToken x={cx(4)} y={cy(2)} label="車" side="black" highlight="red" />
              <line x1={cx(4)} y1={cy(2)} x2={cx(4)} y2={cy(9)} stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 3" />
              <line x1={cx(4)} y1={cy(8)} x2={cx(5)} y2={cy(7)} stroke="#DC2626" strokeWidth="2.5" />
              <text x={cx(5.2)} y={cy(7) - 4} fill="#DC2626" fontSize="11" fontWeight="bold">
                ✕ Tự mở mặt chiếu!
              </text>
            </g>
          )}
        </svg>
      </div>

      <div className="mt-2 rounded-xl border border-[#EAE0CF] bg-[#FAF6EE] px-3.5 py-2 text-xs font-medium text-[#4B433B]">
        {mode === 'coords' && 'Bàn cờ gồm 90 giao điểm (9 cột × 10 hàng). Quân cờ nằm tại giao điểm, không nằm trong ô.'}
        {mode === 'horse' && 'Luật cản chân Mã: Quân Tốt chặn hướng tiến khiến Mã chỉ đi được hai cánh tự do.'}
        {mode === 'cannon' && 'Luật Pháo ăn quân: Di chuyển thẳng nhưng bắt buộc nhảy qua đúng 1 quân làm ngòi để bắt quân.'}
        {mode === 'check' && 'Kiểm tra hợp lệ: Nước đi đúng hình học (Sĩ đi chéo) vẫn bị loại nếu khiến Tướng mình bị chiếu.'}
      </div>
    </div>
  );
}

function PieceToken({
  x,
  y,
  label,
  side,
  highlight,
}: {
  x: number;
  y: number;
  label: string;
  side: 'red' | 'black';
  highlight?: 'amber' | 'emerald' | 'red';
}) {
  const ringColor =
    highlight === 'amber'
      ? '#D97706'
      : highlight === 'emerald'
      ? '#15805D'
      : highlight === 'red'
      ? '#DC2626'
      : side === 'red'
      ? '#B92B27'
      : '#1E293B';

  return (
    <g>
      {highlight && <circle cx={x} cy={y} r="18" fill="none" stroke={ringColor} strokeWidth="2.2" />}
      <circle cx={x} cy={y} r="14.5" fill="#FFFDF7" stroke={side === 'red' ? '#B92B27' : '#1E293B'} strokeWidth="2.2" />
      <text
        x={x}
        y={y + 5}
        textAnchor="middle"
        fontSize="14.5"
        fontFamily="serif"
        fontWeight="bold"
        fill={side === 'red' ? '#B92B27' : '#0F172A'}
      >
        {label}
      </text>
    </g>
  );
}
