import { motion } from 'motion/react';
import {
  ArrowRight,
  Cpu,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  GitBranch,
  Layers,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Users,
} from 'lucide-react';
import type { SlideDefinition, VideoReference } from '../data/types';
import { COVER_CONTENT, CH1_SLIDES_CONTENT } from '../data/verbatimContent';
import { assetUrl } from '../utils/assets';
import {
  SlideHeader,
  FullBleedBackdrop,
  EditorialPhotoPlate,
  DeviceMockupPlate,
  VideoPreviewPlate,
  ContentCard,
} from '../components/SlideChrome';
import type { LightboxImage } from '../components/ImageLightbox';
import { InteractiveBoard90 } from '../components/InteractiveBoard90';
import { MinimaxTreeVisual } from '../components/MinimaxTreeVisual';
import { MctsCycleVisual } from '../components/MctsCycleVisual';
import { FlowingPaths } from '../components/FlowingPaths';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { XiangqiBoardSVG } from '../components/XiangqiBoardSVG';
import { EngineVsLlmDiagram, XiangqiBenchDiagram } from '../components/TechnicalDiagrams';
import { KineticHeadline } from '../components/cinematic/KineticHeadline';
import { MagneticButton } from '../components/cinematic/MagneticButton';
import { staggerContainer, staggerItem } from '../animations/motionPresets';

export interface SlideRenderHandlers {
  reducedMotion: boolean;
  ambientPaused?: boolean;
  onZoom: (img: LightboxImage) => void;
  onOpenVideo: (video: VideoReference) => void;
  onGoToChapter?: (slideIndex: number) => void;
}

export function Slide01Cover({
  reducedMotion,
  ambientPaused = false,
  onGoToChapter,
}: SlideRenderHandlers) {
  const chapterStarts = [1, 11, 24, 29];

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden pl-24 pr-10 pt-6 pb-14">
      <FullBleedBackdrop
        src="images/photo-xiangqi-sunlight.jpg"
        fadeDirection="left"
        ambientPaused={ambientPaused}
        imageOpacity={0.92}
      />

      {/* Top University Branding Bar */}
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 flex items-center justify-between gap-6 pb-2"
      >
        <div className="liquid-glass flex items-center gap-4 rounded-2xl px-5 py-2.5 shadow-2xs">
          <img
            src={assetUrl('images/logo-hcmute.png')}
            alt="HCMUTE Logo"
            className="h-12 w-auto object-contain drop-shadow-xs"
          />
          <div>
            <div className="font-mono-tech text-[14px] font-extrabold uppercase tracking-wider text-[#171411]">
              {COVER_CONTENT.institution}
            </div>
            <div className="text-[12px] font-medium text-[#685F54]">
              {COVER_CONTENT.faculty}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="liquid-glass rounded-full px-4 py-1.5 font-mono-tech text-xs font-extrabold text-[#B92B27]">
            Môn học: {COVER_CONTENT.subject}
          </span>
          <span className="liquid-glass rounded-full px-4 py-1.5 font-mono-tech text-xs font-bold text-[#433C35]">
            Lớp HP: {COVER_CONTENT.courseClass}
          </span>
        </div>
      </motion.div>

      {/* Center Hero Card */}
      <motion.div
        variants={staggerContainer(reducedMotion)}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex max-w-[960px] flex-1 flex-col justify-center space-y-4 py-2"
      >
        <div className="liquid-glass rounded-[32px] p-8 shadow-md">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#B92B27]/12 px-4 py-1">
            <Sparkles className="h-4 w-4 text-[#B92B27]" />
            <span className="font-mono-tech text-xs font-extrabold tracking-widest text-[#B92B27]">
              {COVER_CONTENT.eyebrow}
            </span>
          </div>

          <KineticHeadline
            text={COVER_CONTENT.title}
            as="h1"
            reducedMotion={reducedMotion}
            className="text-[50px] font-extrabold leading-[1.1] tracking-tight text-[#171411]"
          />

          <motion.p
            variants={staggerItem(reducedMotion)}
            className="mt-3.5 max-w-3xl text-[19px] font-medium leading-relaxed text-[#38312B]"
          >
            {COVER_CONTENT.subtitle}
          </motion.p>

          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-black/8 pt-4">
            <div className="liquid-glass-warm flex items-center gap-3.5 rounded-2xl px-4 py-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B92B27]/12 text-[#B92B27]">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono-tech text-[11px] font-bold uppercase tracking-wider text-[#7A6E63]">
                  Giảng viên hướng dẫn
                </div>
                <div className="text-[17px] font-extrabold text-[#171411]">
                  {COVER_CONTENT.advisor}
                </div>
              </div>
            </div>

            <div className="liquid-glass-warm flex items-center gap-3.5 rounded-2xl px-4 py-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#15805D]/12 text-[#15805D]">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono-tech text-[11px] font-bold uppercase tracking-wider text-[#7A6E63]">
                  Nhóm thực hiện
                </div>
                <div className="text-[17px] font-extrabold text-[#171411]">
                  {COVER_CONTENT.team}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chapter Quick Jump Buttons */}
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="relative z-20 grid grid-cols-4 gap-4"
      >
        {COVER_CONTENT.pillars.map((p, idx) => (
          <MagneticButton
            key={p.code}
            type="button"
            onClick={() => onGoToChapter?.(chapterStarts[idx])}
            className="liquid-glass group flex items-center justify-between rounded-[22px] px-5 py-3.5 text-left hover:border-[#B92B27]"
          >
            <div className="min-w-0 pr-2">
              <div className="font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#B92B27]">
                {p.code}
              </div>
              <div className="mt-1 text-[16px] font-extrabold leading-snug text-[#171411]">
                {p.label}
              </div>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-[#9A6E21] group-hover:text-[#B92B27]" />
          </MagneticButton>
        ))}
      </motion.div>
    </div>
  );
}

export function Slide02Ch1Intro({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s2;

  return (
    <div className="relative flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="z-20 col-span-7 flex flex-col justify-center space-y-4 pr-2"
        >
          <motion.div
            variants={staggerItem(reducedMotion)}
            className="liquid-glass rounded-[24px] p-5"
          >
            <p className="text-[22px] font-bold leading-relaxed text-[#171411]">{c.lead}</p>
          </motion.div>

          <div className="space-y-3.5">
            {c.points.map((pt, idx) => (
              <motion.div key={pt.title} variants={staggerItem(reducedMotion)}>
                <ContentCard accent={['#B92B27', '#1D4ED8', '#B6832C'][idx]}>
                  <div className="flex items-start gap-4">
                    <span className="liquid-glass-warm flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono-tech text-sm font-extrabold text-[#B92B27]">
                      0{idx + 1}
                    </span>
                    <div>
                      <h2 className="text-[22px] font-extrabold text-[#171411]">{pt.title}</h2>
                      <p className="mt-1 text-[20px] leading-relaxed text-[#38312B]">{pt.body}</p>
                    </div>
                  </div>
                </ContentCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Real high-res photo matching "Nhìn bàn cờ Xe, Pháo, Mã -> AI tính phản ứng đối kháng" */}
        <div className="col-span-5 h-full min-h-0 py-1">
          <EditorialPhotoPlate
            src="images/photo-xiangqi-thinking.jpg"
            caption="Con người quan sát thế cờ trực quan — máy tính quy đổi trạng thái để tìm biến tối ưu"
            source="John Ragai · Wikimedia Commons (CC BY 2.0)"
            onZoom={onZoom}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export function Slide03Ch1Possibilities({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s3;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="z-20 col-span-7 flex flex-col justify-center space-y-5">
          <motion.div
            variants={staggerContainer(reducedMotion)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-4"
          >
            {c.stats.map((st, idx) => (
              <motion.div
                key={st.label}
                variants={staggerItem(reducedMotion)}
                className="liquid-glass rounded-[24px] p-5"
                style={{
                  boxShadow: `inset 0 4px 0 ${['#B92B27', '#B6832C', '#15805D'][idx]}, inset 0 1.5px 1px rgba(255,255,255,0.95), 0 18px 40px -12px rgba(26,23,20,0.1)`,
                }}
              >
                <div className="font-mono-tech text-[58px] font-extrabold leading-none text-[#171411]">
                  <AnimatedCounter target={st.value} reducedMotion={reducedMotion} />
                </div>
                <div className="mt-2 text-[18px] font-bold leading-snug text-[#433C35]">
                  {st.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <ContentCard accent="#1D4ED8">
            <div className="mb-2.5 font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#1D4ED8]">
              Chuỗi câu hỏi nối tiếp khi tính một nước đi
            </div>
            <ul className="space-y-2.5">
              {c.questions.map((q, idx) => (
                <li
                  key={q}
                  className="flex items-center gap-3 text-[21px] font-semibold leading-snug text-[#171411]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B92B27] font-mono-tech text-sm font-extrabold text-white">
                    {idx + 1}
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </ContentCard>

          <div className="liquid-glass-warm rounded-[20px] px-5 py-4 text-[21px] font-bold leading-snug text-[#171411]">
            {c.takeaway}
          </div>
        </div>

        {/* Exact sharp 90-point, 32-piece Xiangqi vector diagram */}
        <div className="liquid-glass col-span-5 h-full min-h-0 rounded-[28px] p-4">
          <XiangqiBoardSVG presetId="hinh-2-1" onZoom={onZoom} />
        </div>
      </div>
    </div>
  );
}

export function Slide04Ch1BoardRules({
  slide,
  reducedMotion,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s4;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="liquid-glass col-span-6 h-full min-h-0 rounded-[28px] p-3">
          <InteractiveBoard90 />
        </div>

        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="col-span-6 flex flex-col justify-center space-y-4"
        >
          <ContentCard accent="#15805D">
            <h2 className="mb-2.5 text-[23px] font-extrabold text-[#15805D]">
              Dữ liệu đầu vào của Engine
            </h2>
            <ul className="space-y-2 text-[20px] leading-relaxed text-[#2C2722]">
              {c.inputs.map((inp) => (
                <li key={inp} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#15805D]" />
                  <span>{inp}</span>
                </li>
              ))}
            </ul>
          </ContentCard>

          <div className="space-y-3">
            {c.rules.map((r) => (
              <ContentCard key={r.title} accent="#B6832C" variant="tinted">
                <div className="text-[21px] font-extrabold text-[#171411]">{r.title}</div>
                <p className="mt-1 text-[19px] leading-snug text-[#433C35]">{r.desc}</p>
              </ContentCard>
            ))}
          </div>

          <div className="liquid-glass flex items-start gap-3 rounded-[20px] border border-[#B92B27]/40 bg-[#FFF2F0]/80 p-4 text-[20px] font-bold leading-snug text-[#9E231F]">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-[#B92B27]" />
            <span>{c.warning}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide05Ch1Minimax({
  slide,
  reducedMotion,
  onOpenVideo,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s5;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="col-span-7 flex h-full min-h-0 flex-col space-y-4">
          <div className="liquid-glass min-h-0 flex-1 rounded-[26px] p-2">
            <MinimaxTreeVisual mode="minimax" />
          </div>
          {slide.video && (
            <VideoPreviewPlate video={slide.video} onOpenVideo={onOpenVideo} compact />
          )}
        </div>

        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="col-span-5 flex flex-col justify-center space-y-4"
        >
          <motion.div variants={staggerItem(reducedMotion)}>
            <ContentCard accent="#15805D">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-[23px] font-extrabold text-[#15805D]">{c.optionA.label}</h2>
                <span className="rounded-full bg-[#15805D] px-3 py-0.5 font-mono-tech text-xs font-extrabold text-white">
                  ĐỎ CHỌN (tối thiểu = 3)
                </span>
              </div>
              <p className="mt-2 text-[20px] leading-relaxed text-[#2C2722]">
                {c.optionA.note}
              </p>
            </ContentCard>
          </motion.div>

          <motion.div variants={staggerItem(reducedMotion)}>
            <ContentCard accent="#B92B27">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-[23px] font-extrabold text-[#B92B27]">{c.optionB.label}</h2>
                <span className="rounded-full bg-[#B92B27]/12 px-3 py-0.5 font-mono-tech text-xs font-extrabold text-[#B92B27]">
                  Đen ép xuống 2
                </span>
              </div>
              <p className="mt-2 text-[20px] leading-relaxed text-[#2C2722]">
                {c.optionB.note}
              </p>
            </ContentCard>
          </motion.div>

          <div className="liquid-glass-warm rounded-[22px] p-5 text-[20px] font-bold leading-relaxed text-[#171411]">
            {c.conclusion}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide06Ch1AlphaBeta({
  slide,
  reducedMotion,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s6;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="liquid-glass col-span-7 h-full min-h-0 rounded-[26px] p-2">
          <MinimaxTreeVisual mode="alphabeta" />
        </div>

        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="col-span-5 flex flex-col justify-center space-y-4"
        >
          <ContentCard accent="#B45309">
            <div className="mb-1 font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#B45309]">
              Vấn đề kích thước cây
            </div>
            <p className="text-[20px] leading-relaxed text-[#2C2722]">{c.problem}</p>
          </ContentCard>

          <ContentCard accent="#1D4ED8">
            <div className="mb-1 font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#1D4ED8]">
              Cơ chế cắt tỉa
            </div>
            <p className="text-[20px] leading-relaxed text-[#2C2722]">{c.mechanism}</p>
          </ContentCard>

          <ContentCard accent="#B92B27" variant="tinted">
            <p className="text-[20px] font-semibold leading-relaxed text-[#171411]">
              {c.exampleNote}
            </p>
          </ContentCard>

          <div className="liquid-glass rounded-[20px] border border-[#15805D]/35 bg-[#EFFCF6]/85 p-4.5 text-[20px] font-bold text-[#15805D]">
            {c.benefit}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide07Ch1Nnue({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s7;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="col-span-7 grid grid-cols-2 gap-4"
        >
          {c.points.map((pt, idx) => (
            <motion.div key={pt.title} variants={staggerItem(reducedMotion)}>
              <ContentCard
                accent={['#B92B27', '#1D4ED8', '#15805D', '#B6832C'][idx]}
                className="h-full"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono-tech text-xs font-extrabold uppercase text-[#9A6E21]">
                    Lớp 0{idx + 1}
                  </span>
                  <Cpu className="h-5 w-5 text-[#B92B27]" />
                </div>
                <h2 className="text-[21px] font-extrabold leading-snug text-[#171411]">
                  {pt.title}
                </h2>
                <p className="mt-2 text-[19px] leading-relaxed text-[#38312B]">{pt.body}</p>
              </ContentCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="col-span-5 h-full min-h-0 py-1">
          <DeviceMockupPlate
            src="images/ui-pikafish-web.png"
            domain="pikafish.org · NNUE Engine"
            caption="Pikafish: Phối hợp tìm kiếm cây Alpha–Beta và đánh giá mạng nơ-ron NNUE"
            source="Giao diện Pikafish Web (FILE-3)"
            badge="Stockfish + NNUE"
            onZoom={onZoom}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export function Slide08Ch1Mcts({
  slide,
  reducedMotion,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s8;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="liquid-glass col-span-7 h-full min-h-0 rounded-[26px] p-2">
          <MctsCycleVisual />
        </div>

        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="col-span-5 flex flex-col justify-center space-y-4"
        >
          <ContentCard accent="#1D4ED8">
            <div className="mb-1.5 flex items-center gap-2 text-[#1D4ED8]">
              <GitBranch className="h-5 w-5" />
              <span className="font-mono-tech text-xs font-extrabold uppercase">Tự chơi (Self-Play)</span>
            </div>
            <p className="text-[21px] leading-relaxed text-[#171411]">{c.selfPlay}</p>
          </ContentCard>

          <ContentCard accent="#B6832C" variant="tinted">
            <h2 className="mb-2 text-[21px] font-extrabold text-[#9A6E21]">
              Chu trình 4 bước MCTS
            </h2>
            <div className="grid grid-cols-1 gap-2 text-[19px] font-bold text-[#171411]">
              {c.mctsSteps.map((s) => (
                <div
                  key={s}
                  className="rounded-xl border border-white/80 bg-white/75 px-4 py-2"
                >
                  {s}
                </div>
              ))}
            </div>
            <p className="mt-2.5 text-[18px] font-medium text-[#433C35]">{c.focus}</p>
          </ContentCard>

          <div className="liquid-glass-warm rounded-[20px] border border-[#B45309]/35 p-4 text-[18px] font-bold text-[#9A6E21]">
            {c.disclaimer}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Slide09Ch1EngineVsLlm({
  slide,
  reducedMotion,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s9;
  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-5">
        <div
          className="liquid-glass col-span-4 flex h-full flex-col justify-center rounded-[28px] p-6"
          style={{ boxShadow: 'inset 0 5px 0 #15805D, inset 0 1.5px 1px #fff, 0 24px 56px -12px rgba(26,23,20,0.12)' }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#15805D]/15 text-[#15805D]">
              <Cpu className="h-6 w-6" />
            </div>
            <h2 className="text-[24px] font-extrabold leading-tight text-[#171411]">
              {c.engineCol.name}
            </h2>
          </div>
          <ul className="space-y-3">
            {c.engineCol.items.map((it) => (
              <li
                key={it}
                className="flex items-start gap-3 rounded-2xl border border-white/85 bg-white/75 p-4 text-[20px] font-semibold leading-snug text-[#171411]"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#15805D]" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Crisp Vector Architecture bridging Engine computation & LLM Vietnamese explanation */}
        <div className="col-span-4 h-full min-h-0">
          <EngineVsLlmDiagram />
        </div>

        <div
          className="liquid-glass col-span-4 flex h-full flex-col justify-center rounded-[28px] p-6"
          style={{ boxShadow: 'inset 0 5px 0 #1D4ED8, inset 0 1.5px 1px #fff, 0 24px 56px -12px rgba(26,23,20,0.12)' }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1D4ED8]/15 text-[#1D4ED8]">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h2 className="text-[24px] font-extrabold leading-tight text-[#171411]">
              {c.llmCol.name}
            </h2>
          </div>
          <ul className="space-y-3">
            {c.llmCol.items.map((it, idx) => (
              <li
                key={it}
                className={`flex items-start gap-3 rounded-2xl p-4 text-[19px] font-semibold leading-snug ${
                  idx === 2
                    ? 'border border-[#B92B27]/40 bg-[#FFF2F0]/90 text-[#9E231F]'
                    : 'border border-white/85 bg-white/75 text-[#171411]'
                }`}
              >
                {idx === 2 ? (
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#B92B27]" />
                ) : (
                  <Layers className="mt-0.5 h-5 w-5 shrink-0 text-[#1D4ED8]" />
                )}
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="liquid-glass-warm relative z-10 mt-3 rounded-[22px] px-6 py-3.5 text-center text-[21px] font-extrabold text-[#171411]">
        {c.synthesis}
      </div>
    </div>
  );
}

export function Slide10Ch1XiangqiBench({
  slide,
  reducedMotion,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s10;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="col-span-6 flex flex-col justify-center space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="liquid-glass rounded-[24px] p-5">
              <div className="font-mono-tech text-[54px] font-extrabold leading-none text-[#B6832C]">
                26,1%
              </div>
              <div className="mt-2 text-[19px] font-bold text-[#38312B]">
                Đúng nước đầu (bài toán đối chiếu)
              </div>
            </div>
            <div className="liquid-glass rounded-[24px] border border-[#B92B27]/40 bg-[#FFF2F0]/80 p-5">
              <div className="font-mono-tech text-[54px] font-extrabold leading-none text-[#B92B27]">
                13,9%
              </div>
              <div className="mt-2 text-[19px] font-bold text-[#9E231F]">
                Duy trì chiến thuật tới thắng lợi
              </div>
            </div>
          </div>

          <ContentCard accent="#1D4ED8">
            <div className="mb-1 font-mono-tech text-xs font-extrabold uppercase text-[#1D4ED8]">
              {c.studyTitle}
            </div>
            <p className="text-[22px] font-extrabold leading-snug text-[#171411]">{c.question}</p>
            <p className="mt-2 text-[20px] leading-relaxed text-[#38312B]">{c.finding}</p>
          </ContentCard>

          <div className="liquid-glass-warm rounded-[20px] p-4.5 text-[20px] font-bold leading-relaxed text-[#171411]">
            {c.rule}
          </div>
        </div>

        {/* Dedicated razor-sharp light diagram presenting exact XiangqiBench 2026 empirical stats */}
        <div className="col-span-6 h-full min-h-0 py-1">
          <XiangqiBenchDiagram reducedMotion={reducedMotion} />
        </div>
      </div>
    </div>
  );
}

export function Slide11Ch1Summary({
  slide,
  reducedMotion,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s11;
  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="col-span-8 flex flex-col justify-center space-y-4">
          <FlowingPaths
            title="Lộ trình xử lý tư duy của Engine AI"
            nodes={c.pipeline.map((label, i) => ({
              id: `step-${i}`,
              label: `BƯỚC 0${i + 1} · ${label}`,
              sublabel:
                i === 0
                  ? 'Tọa độ 90 điểm & luật hợp lệ'
                  : i === 1
                  ? 'Minimax & cắt tỉa Alpha–Beta'
                  : i === 2
                  ? 'Hàm đánh giá NNUE / Self-Play'
                  : 'Chọn phương án tối ưu',
              accent: ['#B92B27', '#1D4ED8', '#15805D', '#B6832C'][i],
            }))}
            reducedMotion={reducedMotion}
          />

          <div className="grid grid-cols-3 gap-4">
            {c.roles.map((r, idx) => (
              <ContentCard key={r} accent={['#B92B27', '#1D4ED8', '#15805D'][idx]}>
                <div className="text-[19px] font-bold leading-snug text-[#171411]">{r}</div>
              </ContentCard>
            ))}
          </div>

          <blockquote className="liquid-glass rounded-[26px] p-6">
            <p className="font-serif-editorial text-[24px] font-bold italic leading-relaxed text-[#171411]">
              “{c.closingQuote}”
            </p>
          </blockquote>
        </div>

        <div className="col-span-4 h-full min-h-0 py-1">
          <EditorialPhotoPlate
            src="images/photo-xiangqi-students.jpg"
            caption="AI là công cụ giúp người học rèn tư duy tốt hơn qua từng ván cờ"
            source="He JiaWei · Wikimedia Commons (CC BY-SA 2.0)"
            onZoom={onZoom}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}
