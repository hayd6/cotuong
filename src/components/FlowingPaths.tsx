import { motion } from 'motion/react';

export interface FlowNode {
  id: string;
  label: string;
  sublabel?: string;
  accent?: string;
}

interface FlowingPathsProps {
  title: string;
  nodes: FlowNode[];
  reducedMotion?: boolean;
}

export function FlowingPaths({
  title,
  nodes,
  reducedMotion = false,
}: FlowingPathsProps) {
  return (
    <div className="liquid-glass rounded-[26px] p-5 text-[#171411]">
      <div className="mb-3.5 flex items-center justify-between">
        <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#B92B27]">
          {title}
        </span>
        <span className="text-xs font-medium text-[#6E655A]">
          Luồng xử lý dữ liệu liên tục
        </span>
      </div>

      <div className="relative flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {nodes.map((node, idx) => (
          <div key={node.id} className="flex flex-1 flex-col items-stretch md:flex-row md:items-center">
            <motion.div
              initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reducedMotion ? 0 : idx * 0.12, duration: 0.4 }}
              className="relative flex-1 rounded-xl border border-[#E5DAC8] bg-[#FAF6EE] p-3.5 shadow-xs"
              style={{
                borderTopWidth: '3px',
                borderTopColor: node.accent || '#B6832C',
              }}
            >
              <div className="mb-1 flex items-center justify-between">
                <span
                  className="font-mono-tech text-[11px] font-bold uppercase"
                  style={{ color: node.accent || '#B6832C' }}
                >
                  0{idx + 1}
                </span>
                {!reducedMotion && (
                  <span
                    className="h-2 w-2 animate-pulse rounded-full"
                    style={{ backgroundColor: node.accent || '#B6832C' }}
                  />
                )}
              </div>
              <div className="text-[18px] font-extrabold leading-snug text-[#1A1714]">{node.label}</div>
              {node.sublabel && (
                <div className="mt-1.5 text-[16px] leading-snug text-[#4B433B]">
                  {node.sublabel}
                </div>
              )}
            </motion.div>

            {idx < nodes.length - 1 && (
              <div className="relative mx-auto my-1 h-5 w-1 overflow-hidden rounded-full bg-[#DFD4C1] md:mx-1.5 md:my-0 md:h-1 md:w-8">
                {!reducedMotion && (
                  <motion.div
                    className="h-full w-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${node.accent || '#B92B27'}, transparent)`,
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: idx * 0.35,
                      ease: 'easeInOut',
                    }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
