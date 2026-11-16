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
} from 'lucide-react';
import type { SlideDefinition, VideoReference } from '../data/types';
import { COVER_CONTENT, CH1_SLIDES_CONTENT } from '../data/verbatimContent';
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
import { KineticHeadline } from '../components/cinematic/KineticHeadline';
import { TiltPlate } from '../components/cinematic/TiltPlate';
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
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden pl-24 pr-10 pt-10 pb-16">
      <FullBleedBackdrop
        src="images/hero-renaissance-xiangqi.jpg"
        fadeDirection="left"
        ambientPaused={ambientPaused}
        imageOpacity={0.95}
      />

      <motion.div
        variants={staggerContainer(reducedMotion)}
        initial="hidden"
        animate="visible"
        className="parallax-fg relative z-20 flex max-w-[900px] flex-1 flex-col justify-center space-y-6"
      >
        <motion.div
          variants={staggerItem(reducedMotion)}
          className="liquid-glass inline-flex w-fit items-center gap-2.5 rounded-full px-5 py-2"
        >
          <Sparkles className="h-4 w-4 text-[#B92B27]" />
          <span className="font-mono-tech text-xs font-extrabold tracking-widest text-[#9A6E21]">
            {COVER_CONTENT.eyebrow}
          </span>
        </motion.div>

        <div className="liquid-glass rounded-[32px] p-8">
          <KineticHeadline
            text={COVER_CONTENT.title}
            as="h1"
            reducedMotion={reducedMotion}
            className="text-[62px] font-extrabold leading-[1.08] tracking-tight text-[#171411]"
          />

          <motion.p
            variants={staggerItem(reducedMotion)}
            className="mt-5 max-w-3xl text-[24px] font-medium leading-relaxed text-[#38312B]"
          >
            {COVER_CONTENT.subtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* Floating layered Apple Liquid Glass Chapter Deck */}
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="parallax-fg relative z-20 grid grid-cols-4 gap-4"
      >
        {COVER_CONTENT.pillars.map((p, idx) => (
          <MagneticButton
            key={p.code}
            type="button"
            disabledMotion={reducedMotion}
            onClick={() => onGoToChapter?.(chapterStarts[idx])}
            className="liquid-glass group flex items-center justify-between rounded-[22px] px-5 py-4 text-left transition hover:scale-[1.02] hover:border-[#B92B27]"
          >
            <div className="min-w-0 pr-2">
              <div className="font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#B92B27]">
                {p.code}
              </div>
              <div className="mt-1 text-[17px] font-extrabold leading-snug text-[#171411]">
                {p.label}
              </div>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-[#9A6E21] transition-transform group-hover:translate-x-1.5 group-hover:text-[#B92B27]" />
          </MagneticButton>
        ))}
      </motion.div>
    </div>
  );
}

export function Slide02Ch1Intro({
  slide,
  reducedMotion,
  ambientPaused = false,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s2;

  return (
    <div className="relative flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/hero-ch1-evolution.jpg"
        fadeDirection="right"
        ambientPaused={ambientPaused}
        imageOpacity={0.26}
      />

      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        {/* Left foreground Liquid Glass cards slightly overlapping right artwork */}
        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="parallax-fg z-20 col-span-7 flex flex-col justify-center space-y-4 pr-2"
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

        {/* Multi-layer overlapping visual collage on right */}
        <div className="parallax-mid relative col-span-5 h-full min-h-0 py-2">
          <div className="absolute top-2 right-0 bottom-20 left-4">
            <EditorialPhotoPlate
              src="images/hero-ch1-evolution.jpg"
              caption="Từ kỳ phổ truyền thống đến mạng trí tuệ đa tầng"
              source="Minh họa Khởi đầu Chương 1"
              captionPosition="top"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>
          <div className="parallax-fg absolute right-6 bottom-2 z-20 h-[225px] w-[82%]">
            <EditorialPhotoPlate
              src="images/vis-engine-reasoning.jpg"
              caption="Cỗ máy tính toán chính xác kết hợp luồng suy luận ngôn ngữ"
              source="Trực quan hóa Công nghệ Engine"
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

export function Slide03Ch1Possibilities({
  slide,
  reducedMotion,
  onOpenVideo,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s3;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="parallax-fg z-20 col-span-7 flex flex-col justify-center space-y-5">
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

        {/* Right visual stack: Photo of actual Xiangqi board + Direct Click-to-Play Video Card */}
        <div className="parallax-mid col-span-5 flex h-full min-h-0 flex-col justify-center space-y-4">
          <div className="min-h-0 flex-1">
            <EditorialPhotoPlate
              src="images/vis-openings-tactics.jpg"
              caption="Bàn cờ 90 giao điểm với hàng tỷ hướng phối hợp Xe – Pháo – Mã"
              source="Minh họa không gian biến hóa Cờ tướng"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>

          {slide.video && (
            <VideoPreviewPlate
              video={slide.video}
              onOpenVideo={onOpenVideo}
              compact
            />
          )}
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
        <div className="parallax-mid liquid-glass col-span-6 h-full min-h-0 rounded-[28px] p-3">
          <InteractiveBoard90 />
        </div>

        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="parallax-fg col-span-6 flex flex-col justify-center space-y-4"
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
        <div className="parallax-mid flex h-full min-h-0 flex-col space-y-4 col-span-7">
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
          className="parallax-fg col-span-5 flex flex-col justify-center space-y-4"
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
  onOpenVideo,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s6;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="parallax-mid flex h-full min-h-0 flex-col space-y-4 col-span-7">
          <div className="liquid-glass min-h-0 flex-1 rounded-[26px] p-2">
            <MinimaxTreeVisual mode="alphabeta" />
          </div>
          {slide.video && (
            <VideoPreviewPlate video={slide.video} onOpenVideo={onOpenVideo} compact />
          )}
        </div>

        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="parallax-fg col-span-5 flex flex-col justify-center space-y-4"
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
  onOpenVideo,
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
          className="parallax-fg col-span-7 grid grid-cols-2 gap-4"
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

        <div className="parallax-mid col-span-5 flex h-full min-h-0 flex-col justify-center space-y-4">
          <div className="min-h-0 flex-1">
            <DeviceMockupPlate
              src="images/ui-pikafish-web.png"
              domain="pikafish.org · NNUE Engine"
              caption="Pikafish: Phối hợp tìm kiếm cây Alpha–Beta và đánh giá mạng nơ-ron NNUE"
              source="Giao diện Pikafish Web (FILE-3)"
              onZoom={onZoom}
              disableTilt={reducedMotion}
              className="h-full"
            />
          </div>
          {slide.video && (
            <VideoPreviewPlate video={slide.video} onOpenVideo={onOpenVideo} compact />
          )}
        </div>
      </div>
    </div>
  );
}

export function Slide08Ch1Mcts({
  slide,
  reducedMotion,
  onOpenVideo,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s8;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="parallax-mid col-span-7 flex h-full min-h-0 flex-col space-y-4">
          <div className="liquid-glass min-h-0 flex-1 rounded-[26px] p-2">
            <MctsCycleVisual />
          </div>
          {slide.video && (
            <VideoPreviewPlate video={slide.video} onOpenVideo={onOpenVideo} compact />
          )}
        </div>

        <motion.div
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          animate="visible"
          className="parallax-fg col-span-5 flex flex-col justify-center space-y-4"
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
  ambientPaused = false,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s9;
  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/vis-engine-reasoning.jpg"
        fadeDirection="bottom"
        ambientPaused={ambientPaused}
        imageOpacity={0.28}
      />

      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-12 items-center gap-6">
        <div className="parallax-fg col-span-4 h-full">
          <TiltPlate disabled={reducedMotion} maxTiltDeg={3} className="h-full">
            <div
              className="liquid-glass flex h-full flex-col justify-center rounded-[28px] p-6"
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
          </TiltPlate>
        </div>

        {/* Central sculptural illustration showing Clockwork Engine + Glass LLM ribbon */}
        <div className="parallax-mid col-span-4 h-full min-h-0 py-4">
          <EditorialPhotoPlate
            src="images/vis-engine-reasoning.jpg"
            caption="Chuỗi tính toán Engine kết nối dòng diễn giải LLM"
            source="Kiến trúc phối hợp Engine & LLM"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>

        <div className="parallax-fg col-span-4 h-full">
          <TiltPlate disabled={reducedMotion} maxTiltDeg={3} className="h-full">
            <div
              className="liquid-glass flex h-full flex-col justify-center rounded-[28px] p-6"
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
          </TiltPlate>
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
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s10;
  return (
    <div className="flex h-full flex-col pl-24 pr-10 pt-6 pb-16">
      <SlideHeader slide={slide} reducedMotion={reducedMotion} />

      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-7">
        <div className="parallax-fg col-span-6 flex flex-col justify-center space-y-4">
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

        {/* Clean non-clipping staggered showcase on right */}
        <div className="parallax-mid flex h-full min-h-0 flex-col justify-between gap-4 col-span-6 py-1">
          <DeviceMockupPlate
            src="images/xiangqibench-interface.png"
            domain="xiangqibench · arXiv 2026"
            caption="Nghiên cứu XiangqiBench (2026): Thử nghiệm 119 thế cờ tàn & 8.568 lượt"
            source="FILE-1.docx"
            badge="Benchmark 2026"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="min-h-0 flex-[1.5]"
          />
          <EditorialPhotoPlate
            src="images/vis-blackbox-xai.jpg"
            caption="Mọi phương án từ LLM cần đối chiếu kiểm chứng với engine chuyên dụng"
            source="Thẩm định chiến thuật đa bước"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="min-h-0 flex-1"
          />
        </div>
      </div>
    </div>
  );
}

export function Slide11Ch1Summary({
  slide,
  reducedMotion,
  ambientPaused = false,
  onZoom,
}: SlideRenderHandlers & { slide: SlideDefinition }) {
  const c = CH1_SLIDES_CONTENT.s11;
  return (
    <div className="relative flex h-full flex-col justify-between pl-24 pr-10 pt-6 pb-16">
      <FullBleedBackdrop
        src="images/hero-ch1-evolution.jpg"
        fadeDirection="bottom"
        ambientPaused={ambientPaused}
        imageOpacity={0.34}
      />

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

        <div className="parallax-mid col-span-4 h-full min-h-0 py-2">
          <EditorialPhotoPlate
            src="images/hero-ch1-evolution.jpg"
            caption="Kết hợp sức mạnh tính toán máy tính và tư duy học tập của người chơi"
            source="Tổng kết Chương 1"
            onZoom={onZoom}
            disableTilt={reducedMotion}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}
