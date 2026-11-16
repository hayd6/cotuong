import { useState } from 'react';
import { motion } from 'motion/react';

interface MinimaxTreeVisualProps {
  mode: 'minimax' | 'alphabeta';
}

export function MinimaxTreeVisual({ mode }: MinimaxTreeVisualProps) {
  const [step, setStep] = useState<number>(3);

  return (
    <div className="flex h-full flex-col justify-between p-3 text-[#171411]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#B92B27]">
          {mode === 'minimax' ? 'Cây quyết định Minimax (Đỏ MAX / Đen MIN)' : 'Cắt tỉa Alpha–Beta (α = 3)'}
        </span>
        <div className="flex gap-1.5">
          {[
            { s: 1, label: 'Bước 1: Xét A' },
            { s: 2, label: 'Bước 2: Xét B' },
            { s: 3, label: mode === 'minimax' ? 'Bước 3: Chọn A' : 'Bước 3: Cắt nhánh 9' },
          ].map((btn) => (
            <button
              key={btn.s}
              type="button"
              onClick={() => setStep(btn.s)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                step === btn.s
                  ? 'bg-[#B92B27] text-white shadow-xs'
                  : 'bg-[#F2ECE0] text-[#4B433B] hover:bg-[#E5DAC8]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 540 310" className="my-2 w-full flex-1 select-none">
        {/* Edges Root -> A, Root -> B */}
        <line
          x1="270"
          y1="48"
          x2="145"
          y2="138"
          stroke={step >= 3 ? '#15805D' : '#94A3B8'}
          strokeWidth={step >= 3 ? 3.5 : 2}
        />
        <line
          x1="270"
          y1="48"
          x2="395"
          y2="138"
          stroke={step >= 2 ? '#64748B' : '#CBD5E1'}
          strokeWidth="2"
          strokeDasharray={step >= 3 && mode === 'alphabeta' ? '6 4' : undefined}
        />

        {/* Edges A -> 3, 5 */}
        <line x1="145" y1="138" x2="80" y2="242" stroke={step >= 1 ? '#15805D' : '#CBD5E1'} strokeWidth="2.8" />
        <line x1="145" y1="138" x2="210" y2="242" stroke="#94A3B8" strokeWidth="2" />

        {/* Edges B -> 2, 9 */}
        <line x1="395" y1="138" x2="330" y2="242" stroke={step >= 2 ? '#D97706' : '#CBD5E1'} strokeWidth="2.8" />
        <line
          x1="395"
          y1="138"
          x2="460"
          y2="242"
          stroke={mode === 'alphabeta' && step >= 3 ? '#DC2626' : '#94A3B8'}
          strokeWidth="2"
          strokeDasharray={mode === 'alphabeta' && step >= 3 ? '5 4' : undefined}
          strokeOpacity={mode === 'alphabeta' && step >= 3 ? 0.65 : 1}
        />

        {mode === 'alphabeta' && step >= 3 && (
          <motion.g initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}>
            <line x1="414" y1="178" x2="444" y2="202" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="444" y1="178" x2="414" y2="202" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" />
            <rect x="446" y="176" width="84" height="22" rx="5" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.2" />
            <text x="488" y="191" textAnchor="middle" fill="#991B1B" fontSize="10.5" fontWeight="bold">
              CẮT TỈA
            </text>
          </motion.g>
        )}

        <text x="192" y="88" fill="#15805D" fontSize="13" fontWeight="700">Phương án A</text>
        <text x="348" y="88" fill="#6E655A" fontSize="13" fontWeight="700">Phương án B</text>

        {/* Root Node: MAX (Red) */}
        <g>
          <rect x="200" y="18" width="140" height="44" rx="10" fill="#B92B27" />
          <text x="270" y="37" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
            LƯỢT ĐỎ (MAX)
          </text>
          <text x="270" y="54" textAnchor="middle" fill="#FEF08A" fontSize="13" fontWeight="700" className="font-mono-tech">
            {step >= 3 ? 'Chọn A = 3' : step >= 1 ? 'α ≥ 3' : 'Đang tính...'}
          </text>
        </g>

        {/* Node A: MIN */}
        <g>
          <rect x="88" y="116" width="114" height="44" rx="10" fill={step >= 1 ? '#15805D' : '#64748B'} />
          <text x="145" y="135" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
            ĐEN (MIN) · A
          </text>
          <text x="145" y="152" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700" className="font-mono-tech">
            {step >= 1 ? 'min(3, 5) = 3' : '?'}
          </text>
        </g>

        {/* Node B: MIN */}
        <g>
          <rect x="338" y="116" width="114" height="44" rx="10" fill={step >= 2 ? '#B45309' : '#64748B'} />
          <text x="395" y="135" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
            ĐEN (MIN) · B
          </text>
          <text x="395" y="152" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700" className="font-mono-tech">
            {step >= 2 ? (mode === 'alphabeta' ? '≤ 2 (Cắt!)' : 'min(2, 9) = 2') : '?'}
          </text>
        </g>

        {/* Leaf Nodes */}
        {[
          { x: 80, val: '3', active: step >= 1, color: '#15805D' },
          { x: 210, val: '5', active: step >= 1, color: '#64748B' },
          { x: 330, val: '2', active: step >= 2, color: '#D97706' },
          {
            x: 460,
            val: '9',
            active: step >= 2 && !(mode === 'alphabeta' && step >= 3),
            pruned: mode === 'alphabeta' && step >= 3,
            color: '#64748B',
          },
        ].map((leaf, i) => (
          <g key={i} opacity={leaf.pruned ? 0.38 : 1}>
            <circle
              cx={leaf.x}
              cy={255}
              r="24"
              fill={leaf.active ? leaf.color : '#EFE7D8'}
              stroke={leaf.pruned ? '#DC2626' : '#DFD4C1'}
              strokeWidth="2"
            />
            <text
              x={leaf.x}
              y={261}
              textAnchor="middle"
              fill={leaf.active ? '#FFFFFF' : '#4B433B'}
              fontSize="18"
              fontWeight="800"
              className="font-mono-tech"
            >
              {leaf.val}
            </text>
          </g>
        ))}
      </svg>

      <div className="rounded-xl border border-[#EAE0CF] bg-[#FAF6EE] px-3.5 py-2.5 text-xs font-medium text-[#4B433B]">
        {mode === 'minimax'
          ? step === 1
            ? 'Xét phương án A: Nếu Đen phản ứng tối ưu, Đỏ nhận min(3, 5) = 3 điểm.'
            : step === 2
            ? 'Xét phương án B: Đen có thể kéo điểm xuống 2, nên B chỉ đạt min(2, 9) = 2 điểm.'
            : 'Kết quả Minimax: Đỏ chọn A (3 điểm) thay vì mạo hiểm với B (có thể bị kéo về 2).'
          : step === 1
          ? 'Sau khi xét A, Đỏ đã nắm chắc cận dưới α = 3 điểm.'
          : step === 2
          ? 'Khi rẽ sang B và gặp ngay nhánh đầu bằng 2 (< α = 3), Đen chắc chắn chọn ≤ 2.'
          : 'Cắt bỏ hoàn toàn nhánh 9 mà không cần đánh giá — quyết định cuối vẫn giữ nguyên A = 3.'}
      </div>
    </div>
  );
}
