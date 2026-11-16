import { motion } from 'motion/react';
import {
  Swords,
  GraduationCap,
  ShieldAlert,
  TrendingUp,
  Target,
  Compass,
  BookOpen,
  Scale,
  ArrowRight,
} from 'lucide-react';
import type { SlideDefinition } from '../data/types';
import { CH2_CONTENT } from '../data/verbatimContent';
import type { SlideRenderHandlers } from './Chapter1Slides';
import {
  SlideHeader,
  FullBleedBackdrop,
  EditorialPhotoPlate,
  DeviceMockupPlate,
  VideoPreviewPlate,
  ContentCard,
} from '../components/SlideChrome';
import { XiangqiBoardSVG } from '../components/XiangqiBoardSVG';
import { AdvantageTimelineVisual } from '../components/AnimatedChart';
import { FlowingPaths } from '../components/FlowingPaths';
import { TiltPlate } from '../components/cinematic/TiltPlate';
import { staggerContainer, staggerItem } from '../animations/motionPresets';

export function Slide12Ch2Training({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s12;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="parallax-fg z-20 col-span-8 grid grid-cols-2 gap-5"
        >
          <motion.div
            variants={staggerItem(reducedMotion)}
            className="liquid-glass flex flex-col rounded-[26px] p-6"
          >
            <div className="mb-3.5 flex items-center gap-3 text-[#B92B27]">
              <Swords className="h-6 w-6" />
              <h2 className="text-[22px] font-extrabold leading-snug text-[#171411]">
                {c.b1Title}
              </h2>
            </div>
            <ul className="space-y-3 text-[20px] leading-relaxed text-[#2C2722]">
              {c.b1Items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 rounded-2xl border border-white/85 bg-white/75 p-3.5"
                >
                  <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#B92B27]" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={staggerItem(reducedMotion)}
            className="liquid-glass flex flex-col rounded-[26px] p-6"
          >
            <div className="mb-3.5 flex items-center gap-3 text-[#15805D]">
              <GraduationCap className="h-6 w-6" />
              <h2 className="text-[22px] font-extrabold leading-snug text-[#171411]">
                {c.b2Title}
              </h2>
            </div>
            <div className="space-y-3.5 text-[20px] leading-relaxed text-[#2C2722]">
              {c.b2Items.map((it) => (
                <div
                  key={it.label}
                  className="rounded-2xl border border-white/85 bg-white/75 p-4"
                >
                  <div className="text-[21px] font-extrabold text-[#15805D]">{it.label}</div>
                  <p className="mt-1.5">{it.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="parallax-mid col-span-4 h-full min-h-0 py-1">
          <EditorialPhotoPlate
            src="images/photo-xiangqi-students.jpg"
            caption="Hoạt động học tập và đối luyện Cờ tướng tại câu lạc bộ học đường"
            source="He JiaWei · Wikimedia Commons (CC BY-SA 2.0)"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export function Slide13Ch2ExampleOpening({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s13;

  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="parallax-fg z-20 col-span-4 flex flex-col justify-center space-y-4">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={['#1D4ED8', '#B45309', '#15805D'][idx]}
            >
              <div className="text-[21px] font-extrabold text-[#171411]">{it.label}</div>
              <p className="mt-1 text-[19px] leading-relaxed text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}

          <div className="liquid-glass-warm rounded-[18px] p-4 font-mono-tech text-xs font-extrabold text-[#5C5349]">
            {c.figuresNote} · Hiển thị đồng thời Hình 2.1, 2.2 & phân tích AI Hình 2.3.
          </div>
        </div>

        {/* ALL 3 figures displayed cleanly together in multi-depth layers (no hidden tabs!) */}
        <div className="parallax-mid col-span-8 grid h-full min-h-0 grid-cols-12 items-center gap-4">
          <div className="col-span-5 flex h-full min-h-0 flex-col justify-between gap-4">
            <div className="liquid-glass min-h-0 flex-1 rounded-[22px] p-3">
              <XiangqiBoardSVG presetId="hinh-2-1" compact onZoom={onZoom} />
            </div>
            <div className="liquid-glass min-h-0 flex-1 rounded-[22px] p-3">
              <XiangqiBoardSVG presetId="hinh-2-2" compact onZoom={onZoom} />
            </div>
          </div>

          <div className="parallax-fg col-span-7 h-full min-h-0">
            <div className="liquid-glass h-full rounded-[26px] p-4">
              <XiangqiBoardSVG presetId="hinh-2-3" onZoom={onZoom} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide14Ch2OpeningSystems({
  slide,
  reducedMotion,
  ambientPaused = false,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s14;
  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/hero-ch2-tactics.jpg"
        fadeDirection="bottom"
        ambientPaused={ambientPaused}
        imageOpacity={0.24}
      />

      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        {/* Left artistic opening study visual so text never sits alone */}
        <div className="parallax-mid col-span-4 h-full min-h-0 py-1">
          <EditorialPhotoPlate
            src="images/vis-openings-tactics.jpg"
            caption="3 hệ thống khai cuộc: Đối công, Nửa đối công & Phòng thủ"
            source="Minh họa cấu trúc khai cuộc Cờ tướng"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>

        <div className="parallax-fg z-20 col-span-8 flex flex-col justify-center space-y-4">
          <div className="liquid-glass flex items-center gap-3.5 rounded-[20px] px-5 py-3.5">
            <Compass className="h-6 w-6 shrink-0 text-[#B92B27]" />
            <p className="text-[21px] font-bold text-[#171411]">{c.lead}</p>
          </div>

          <div className="liquid-glass overflow-hidden rounded-[26px]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-white/65 text-[18px] font-extrabold text-[#171411]">
                  {c.tableHeaders.map((h) => (
                    <th key={h} className="border-b border-white/80 px-5 py-3.5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/60 text-[19px]">
                {c.tableRows.map((row, rIdx) => (
                  <tr key={row[0]} className="transition hover:bg-white/50">
                    <td
                      className="px-5 py-4 font-extrabold"
                      style={{ color: ['#B92B27', '#1D4ED8', '#15805D'][rIdx] }}
                    >
                      {row[0]}
                    </td>
                    <td className="px-5 py-4 leading-snug text-[#2C2722]">{row[1]}</td>
                    <td className="px-5 py-4 font-bold text-[#171411]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="liquid-glass-warm rounded-[20px] border border-[#15805D]/35 bg-[#EFFCF6]/85 px-5 py-3.5 text-[20px] font-bold leading-snug text-[#15805D]">
            {c.outro}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide15Ch2OpeningOptimize({
  slide,
  reducedMotion,
  ambientPaused = false,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s15;
  const icons = [Target, ShieldAlert, BookOpen];
  const accents = ['#15805D', '#B92B27', '#1D4ED8'];

  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/hero-ch2-tactics.jpg"
        fadeDirection="top"
        ambientPaused={ambientPaused}
        imageOpacity={0.3}
      />

      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 flex flex-1 flex-col justify-center space-y-5">
        {/* Top wide Liquid Glass studio hero ribbon */}
        <div className="parallax-mid h-[195px] w-full">
          <EditorialPhotoPlate
            src="images/hero-ch2-tactics.jpg"
            caption="AI duyệt sâu hàng chục lớp biến hóa khai cuộc để tối ưu tốc độ xuất quân"
            source="Phân tích khai cuộc hiện đại"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>

        {/* 3 overlapping Liquid Glass pillars ascending across the bottom */}
        <div className="parallax-fg -mt-10 grid grid-cols-3 gap-5 px-2">
          {c.items.map((it, idx) => {
            const Icon = icons[idx];
            return (
              <TiltPlate key={it.label} disabled={reducedMotion} maxTiltDeg={4} className="h-full">
                <motion.div
                  initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="liquid-glass relative flex h-full flex-col justify-center overflow-hidden rounded-[28px] p-6"
                  style={{
                    boxShadow: `inset 0 5px 0 ${accents[idx]}, inset 0 1.5px 1px #fff, 0 24px 56px -12px rgba(26,23,20,0.14)`,
                  }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${accents[idx]}16`, color: accents[idx] }}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono-tech text-xs font-extrabold text-[#685F54]">
                      0{idx + 1} / 03
                    </span>
                  </div>

                  <h2 className="text-[23px] font-extrabold leading-snug text-[#171411]">
                    {it.label}
                  </h2>
                  <p className="mt-2.5 text-[20px] leading-relaxed text-[#2C2722]">{it.text}</p>
                </motion.div>
              </TiltPlate>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Slide16Ch2ExampleTienNhan({
  slide,
  reducedMotion,
  onZoom,
  onOpenVideo,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s16;

  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="parallax-fg z-20 col-span-5 flex flex-col justify-center space-y-3.5">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={['#B45309', '#15805D', '#B92B27'][idx]}
            >
              <div className="text-[20px] font-extrabold text-[#171411]">{it.label}</div>
              <p className="mt-1 text-[19px] leading-snug text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}

          {slide.video && (
            <VideoPreviewPlate video={slide.video} onOpenVideo={onOpenVideo} compact />
          )}
        </div>

        {/* BOTH Hình 2.4 and Hình 2.5 shown cleanly side-by-side simultaneously */}
        <div className="parallax-mid col-span-7 grid h-full min-h-0 grid-cols-2 gap-4">
          <div className="liquid-glass h-full min-h-0 rounded-[24px] p-4">
            <XiangqiBoardSVG presetId="hinh-2-4" onZoom={onZoom} />
          </div>
          <div className="liquid-glass h-full min-h-0 rounded-[24px] p-4">
            <XiangqiBoardSVG presetId="hinh-2-5" onZoom={onZoom} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide17Ch2MidgameAttackDefense({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s17;
  const accents = ['#B92B27', '#B45309', '#1D4ED8', '#15805D'];
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="parallax-mid col-span-4 h-full min-h-0 py-1">
          <EditorialPhotoPlate
            src="images/photo-xiangqi-sunlight.jpg"
            caption="Cục diện trung cuộc đòi hỏi tính toán chính xác mối liên kết Xe – Pháo – Mã"
            source="Jacob Ehnmark · Wikimedia Commons (CC BY 2.0)"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>

        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="parallax-fg z-20 col-span-8 grid grid-cols-2 gap-5"
        >
          {c.items.map((it, idx) => (
            <motion.div key={it.label} variants={staggerItem(reducedMotion)}>
              <ContentCard accent={accents[idx]} className="h-full">
                <div className="mb-1.5 font-mono-tech text-xs font-extrabold uppercase text-[#9A6E21]">
                  Phân tích 0{idx + 1}
                </div>
                <h2 className="text-[22px] font-extrabold text-[#171411]">{it.label}</h2>
                <p className="mt-2 text-[20px] leading-relaxed text-[#2C2722]">{it.text}</p>
              </ContentCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function Slide18Ch2MidgameTactics({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s18;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="parallax-fg z-20 col-span-8">
          <div className="liquid-glass overflow-hidden rounded-[28px]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-white/65 text-[19px] font-extrabold text-[#171411]">
                  {c.tableHeaders.map((h) => (
                    <th key={h} className="border-b border-white/80 px-5 py-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/65 text-[19px]">
                {c.tableRows.map((row, idx) => (
                  <tr key={row[0]} className="transition hover:bg-white/55">
                    <td
                      className="px-5 py-4.5 font-extrabold"
                      style={{ color: ['#B92B27', '#B45309', '#1D4ED8', '#15805D'][idx] }}
                    >
                      {row[0]}
                    </td>
                    <td className="px-5 py-4.5 leading-snug text-[#2C2722]">{row[1]}</td>
                    <td className="px-5 py-4.5 font-semibold leading-snug text-[#171411]">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="parallax-mid col-span-4 h-full min-h-0 py-1">
          <EditorialPhotoPlate
            src="images/vis-openings-tactics.jpg"
            caption="Quỹ đạo chiến thuật tranh tiên, phong tỏa và chuyển thủ sang công"
            source="Minh họa Trung cuộc Cờ tướng"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export function Slide19Ch2ExampleTranhTien({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s19;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="parallax-fg z-20 col-span-5 flex flex-col justify-center space-y-3.5">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={['#1D4ED8', '#15805D', '#B92B27'][idx]}
            >
              <div className="text-[20px] font-extrabold text-[#171411]">{it.label}</div>
              <p className="mt-1 text-[19px] leading-snug text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}

          <div className="liquid-glass rounded-[22px] p-1">
            <AdvantageTimelineVisual reducedMotion={reducedMotion} />
          </div>
        </div>

        {/* Simultaneous layered pair: Hình 2.6 caption on top-left + Hình 2.7 crisp front-right */}
        <div className="parallax-mid relative col-span-7 grid h-full min-h-0 grid-cols-12 items-center gap-4">
          <div className="col-span-5 h-[72%] self-start pt-2">
            <EditorialPhotoPlate
              src="images/hinh-2-6-trung-cuoc-tranh-tien.png"
              caption="Hình 2.6: Tình huống trước khi xử lý"
              source="Giáo trình Cờ tướng"
              badge="Hình 2.6"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
              imgClassName="h-full w-full object-contain bg-white"
            />
          </div>

          <div className="parallax-fg liquid-glass col-span-7 h-full min-h-0 rounded-[26px] p-4">
            <div className="mb-1 flex items-center gap-2 font-mono-tech text-xs font-extrabold text-[#15805D]">
              <TrendingUp className="h-4 w-4" />
              <span>Hình 2.7 · Xe 4 thoái 1 (+690) · {c.figuresNote}</span>
            </div>
            <div className="h-[calc(100%-24px)]">
              <XiangqiBoardSVG presetId="hinh-2-7" onZoom={onZoom} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide20Ch2Endgame({
  slide,
  reducedMotion,
  ambientPaused = false,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s20;
  return (
    <div className="relative flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/hero-ch3-endgame.jpg"
        fadeDirection="left"
        ambientPaused={ambientPaused}
        imageOpacity={0.28}
      />

      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="parallax-fg z-20 col-span-6 flex flex-col justify-center space-y-4">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={['#1D4ED8', '#15805D', '#B92B27'][idx]}
            >
              <div className="mb-1 flex items-center gap-2.5 text-[22px] font-extrabold text-[#171411]">
                <Scale className="h-5 w-5 text-[#B6832C]" />
                <span>{it.label}</span>
              </div>
              <p className="text-[20px] leading-relaxed text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}
        </div>

        {/* Multi-layer endgame artwork + vector board overlapping with top caption clarity */}
        <div className="parallax-mid relative col-span-6 h-full min-h-0">
          <div className="absolute top-0 right-0 h-[58%] w-[64%]">
            <EditorialPhotoPlate
              src="images/hero-ch3-endgame.jpg"
              caption="Cân bằng lực lượng tàn cuộc chính xác"
              source="Minh họa Tàn cuộc"
              captionPosition="top"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>
          <div className="parallax-fg liquid-glass absolute bottom-0 left-0 z-20 h-[84%] w-[72%] rounded-[28px] p-4">
            <XiangqiBoardSVG presetId="tan-cuoc-xe-phao" onZoom={onZoom} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide21Ch2Puzzles({
  slide,
  reducedMotion,
  onZoom,
  onOpenVideo,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s21;

  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="parallax-fg z-20 col-span-5 flex flex-col justify-center space-y-3.5"
        >
          {c.items.map((it, idx) => (
            <motion.div key={it.label} variants={staggerItem(reducedMotion)}>
              <ContentCard accent={['#1D4ED8', '#15805D', '#B92B27'][idx]}>
                <div className="text-[21px] font-extrabold text-[#171411]">{it.label}</div>
                <p className="mt-1 text-[19px] leading-snug text-[#2C2722]">{it.text}</p>
              </ContentCard>
            </motion.div>
          ))}

          {slide.video && (
            <VideoPreviewPlate video={slide.video} onOpenVideo={onOpenVideo} compact />
          )}
        </motion.div>

        {/* Simultaneous side-by-side non-occluding pair: Tiểu Xa Mã Vector + Pikafish/ChessDB proof */}
        <div className="parallax-mid col-span-7 grid h-full min-h-0 grid-cols-12 items-center gap-4">
          <div className="liquid-glass col-span-6 h-full min-h-0 rounded-[26px] p-4">
            <XiangqiBoardSVG presetId="tieu-xa-ma" onZoom={onZoom} />
          </div>

          <div className="parallax-fg col-span-6 h-[78%] self-end pb-1">
            <DeviceMockupPlate
              src="images/co-the-tieu-xa-ma-pikafish.png"
              domain="pikafish.org · ChessDB Solver"
              caption="Pikafish & ChessDB: Tiểu Xa Mã — Đỏ chiếu bí sau 27 nước"
              source="Thực nghiệm Pikafish Web"
              badge="ChessDB"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide22Ch2GameReview({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s22;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="parallax-fg z-20 col-span-6 flex flex-col justify-center space-y-4">
          {c.items.map((it, idx) => (
            <ContentCard
              key={it.label}
              accent={['#1D4ED8', '#B92B27', '#15805D'][idx]}
            >
              <div className="text-[22px] font-extrabold text-[#171411]">{it.label}</div>
              <p className="mt-1.5 text-[20px] leading-relaxed text-[#2C2722]">{it.text}</p>
            </ContentCard>
          ))}
        </div>

        <div className="parallax-mid col-span-6 flex h-full min-h-0 flex-col space-y-4">
          <DeviceMockupPlate
            src="images/xiangqi-r1-github.png"
            domain="github.com/xiangqi-r1 · 7B LLM"
            caption="Kho mã nguồn Xiangqi-R1: 5 triệu cặp nước đi & mô hình 7B lập luận chiến lược không gian"
            source="FILE-1.docx / GitHub Xiangqi-R1"
            badge="Reinforcement Learning"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="min-h-0 flex-1"
          />

          <div className="liquid-glass rounded-[22px] p-1">
            <AdvantageTimelineVisual reducedMotion={reducedMotion} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide23Ch2TournamentPrep({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s23;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="flex flex-1 flex-col justify-center space-y-4">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="parallax-fg z-20 col-span-5 flex flex-col space-y-3.5">
            {c.items.slice(0, 2).map((it, idx) => (
              <ContentCard
                key={it.label}
                accent={idx === 0 ? '#1D4ED8' : '#B92B27'}
              >
                <div className="text-[21px] font-extrabold text-[#171411]">{it.label}</div>
                <p className="mt-1 text-[19px] leading-snug text-[#2C2722]">{it.text}</p>
              </ContentCard>
            ))}

            <ContentCard accent="#15805D" variant="tinted">
              <div className="text-[20px] font-extrabold text-[#15805D]">{c.items[2].label}</div>
              <p className="mt-1 text-[18px] font-semibold leading-snug text-[#171411]">
                {c.items[2].text}
              </p>
            </ContentCard>
          </div>

          <div className="parallax-mid col-span-7 h-[355px]">
            <DeviceMockupPlate
              src="images/xiangqi-arena-lu-kham-trieu-ham-ham.png"
              domain="xiangqi-arena · Database"
              caption="CSDL kỳ phổ Xiangqi Arena: đối đầu Lữ Khâm vs Triệu Hâm Hâm"
              source="FILE-1.docx (Xiangqi Arena)"
              badge="Trích xuất biên bản"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>
        </div>

        <FlowingPaths
          title="Quy trình chuẩn bị thi đấu chuyên nghiệp"
          nodes={[
            { id: 'prep-1', label: '01 · Thu thập ván đấu', sublabel: 'Từ Xiangqi Arena', accent: '#1D4ED8' },
            { id: 'prep-2', label: '02 · Phân tích đối thủ', sublabel: 'Nhận diện khai cuộc', accent: '#B45309' },
            { id: 'prep-3', label: '03 · Thử nghiệm bằng AI', sublabel: 'Kiểm chứng biến đối phó', accent: '#B92B27' },
            { id: 'prep-4', label: '04 · Chốt chiến thuật', sublabel: 'Tối ưu thi đấu', accent: '#15805D' },
          ]}
          reducedMotion={reducedMotion}
        />
      </div>
    </div>
  );
}

export function Slide24Ch2Conclusion({
  slide,
  reducedMotion,
  ambientPaused = false,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH2_CONTENT.s24;
  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/photo-xiangqi-thinking.jpg"
        fadeDirection="left"
        ambientPaused={ambientPaused}
        imageOpacity={0.92}
      />

      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="parallax-fg z-20 col-span-8 flex flex-col justify-center space-y-4">
          {c.items.map((it, idx) => (
            <motion.div
              key={it.label}
              initial={reducedMotion ? undefined : { opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.12 }}
            >
              <ContentCard accent={['#15805D', '#B92B27', '#1D4ED8'][idx]}>
                <div className="flex items-center gap-3 text-[23px] font-extrabold text-[#171411]">
                  <ArrowRight className="h-6 w-6 text-[#B6832C]" />
                  <span>{it.label}</span>
                </div>
                <p className="mt-1.5 text-[21px] leading-relaxed text-[#2C2722]">{it.text}</p>
              </ContentCard>
            </motion.div>
          ))}
        </div>

        <div className="parallax-mid col-span-4 h-[410px]">
          <EditorialPhotoPlate
            src="images/hero-ch2-tactics.jpg"
            caption="Trí tuệ con người làm chủ mọi phương án gợi ý của AI"
            source="Tổng kết Chương 2"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}
