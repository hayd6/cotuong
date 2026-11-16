import type { SlideDefinition, VideoReference } from '../data/types';
import type { LightboxImage } from '../components/ImageLightbox';
import { MotionBackground } from '../components/MotionBackground';
import {
  Slide01Cover,
  Slide02Ch1Intro,
  Slide03Ch1Possibilities,
  Slide04Ch1BoardRules,
  Slide05Ch1Minimax,
  Slide06Ch1AlphaBeta,
  Slide07Ch1Nnue,
  Slide08Ch1Mcts,
  Slide09Ch1EngineVsLlm,
  Slide10Ch1XiangqiBench,
  Slide11Ch1Summary,
} from '../slides/Chapter1Slides';
import {
  Slide12Ch2Training,
  Slide13Ch2ExampleOpening,
  Slide14Ch2OpeningSystems,
  Slide15Ch2OpeningOptimize,
  Slide16Ch2ExampleTienNhan,
  Slide17Ch2MidgameAttackDefense,
  Slide18Ch2MidgameTactics,
  Slide19Ch2ExampleTranhTien,
  Slide20Ch2Endgame,
  Slide21Ch2Puzzles,
  Slide22Ch2GameReview,
  Slide23Ch2TournamentPrep,
  Slide24Ch2Conclusion,
} from '../slides/Chapter2Slides';
import {
  Slide25Ch3Cover,
  Slide26Ch3Pikafish,
  Slide27Ch3Platforms,
  Slide28Ch3Experiment,
  Slide29Ch3Conclusion,
} from '../slides/Chapter3Slides';
import {
  Slide30Ch4HumanAi,
  Slide31Ch4TrainingValue,
  Slide32Ch4BlackBox,
  Slide33Ch4Dependency,
  Slide34Ch4Cheating,
  Slide35Ch4FairnessSolutions,
  Slide36Ch4FourStepLoop,
  Slide37Ch4UniversityTeaching,
  Slide38Ch4LanguageDatabase,
  Slide39Ch4VietnameseRag,
  Slide40Conclusion,
  Slide41References,
  Slide42ThankYou,
} from '../slides/Chapter4Slides';

interface SlideRendererProps {
  slide: SlideDefinition;
  reducedMotion: boolean;
  ambientPaused?: boolean;
  onZoom?: (img: LightboxImage) => void;
  onOpenVideo?: (video: VideoReference) => void;
  onGoToChapter?: (slideIndex: number) => void;
  isPreview?: boolean;
}

const noop = () => {};

export function SlideRenderer({
  slide,
  reducedMotion,
  ambientPaused = false,
  onZoom = noop,
  onOpenVideo = noop,
  onGoToChapter,
}: SlideRendererProps) {
  const handlers = {
    reducedMotion,
    ambientPaused,
    onZoom,
    onOpenVideo,
    onGoToChapter,
  };

  const renderContent = () => {
    switch (slide.id) {
      case 1:
        return <Slide01Cover {...handlers} />;
      case 2:
        return <Slide02Ch1Intro slide={slide} {...handlers} />;
      case 3:
        return <Slide03Ch1Possibilities slide={slide} {...handlers} />;
      case 4:
        return <Slide04Ch1BoardRules slide={slide} {...handlers} />;
      case 5:
        return <Slide05Ch1Minimax slide={slide} {...handlers} />;
      case 6:
        return <Slide06Ch1AlphaBeta slide={slide} {...handlers} />;
      case 7:
        return <Slide07Ch1Nnue slide={slide} {...handlers} />;
      case 8:
        return <Slide08Ch1Mcts slide={slide} {...handlers} />;
      case 9:
        return <Slide09Ch1EngineVsLlm slide={slide} {...handlers} />;
      case 10:
        return <Slide10Ch1XiangqiBench slide={slide} {...handlers} />;
      case 11:
        return <Slide11Ch1Summary slide={slide} {...handlers} />;
      case 12:
        return <Slide12Ch2Training slide={slide} {...handlers} />;
      case 13:
        return <Slide13Ch2ExampleOpening slide={slide} {...handlers} />;
      case 14:
        return <Slide14Ch2OpeningSystems slide={slide} {...handlers} />;
      case 15:
        return <Slide15Ch2OpeningOptimize slide={slide} {...handlers} />;
      case 16:
        return <Slide16Ch2ExampleTienNhan slide={slide} {...handlers} />;
      case 17:
        return <Slide17Ch2MidgameAttackDefense slide={slide} {...handlers} />;
      case 18:
        return <Slide18Ch2MidgameTactics slide={slide} {...handlers} />;
      case 19:
        return <Slide19Ch2ExampleTranhTien slide={slide} {...handlers} />;
      case 20:
        return <Slide20Ch2Endgame slide={slide} {...handlers} />;
      case 21:
        return <Slide21Ch2Puzzles slide={slide} {...handlers} />;
      case 22:
        return <Slide22Ch2GameReview slide={slide} {...handlers} />;
      case 23:
        return <Slide23Ch2TournamentPrep slide={slide} {...handlers} />;
      case 24:
        return <Slide24Ch2Conclusion slide={slide} {...handlers} />;
      case 25:
        return <Slide25Ch3Cover slide={slide} {...handlers} />;
      case 26:
        return <Slide26Ch3Pikafish slide={slide} {...handlers} />;
      case 27:
        return <Slide27Ch3Platforms slide={slide} {...handlers} />;
      case 28:
        return <Slide28Ch3Experiment slide={slide} {...handlers} />;
      case 29:
        return <Slide29Ch3Conclusion slide={slide} {...handlers} />;
      case 30:
        return <Slide30Ch4HumanAi slide={slide} {...handlers} />;
      case 31:
        return <Slide31Ch4TrainingValue slide={slide} {...handlers} />;
      case 32:
        return <Slide32Ch4BlackBox slide={slide} {...handlers} />;
      case 33:
        return <Slide33Ch4Dependency slide={slide} {...handlers} />;
      case 34:
        return <Slide34Ch4Cheating slide={slide} {...handlers} />;
      case 35:
        return <Slide35Ch4FairnessSolutions slide={slide} {...handlers} />;
      case 36:
        return <Slide36Ch4FourStepLoop slide={slide} {...handlers} />;
      case 37:
        return <Slide37Ch4UniversityTeaching slide={slide} {...handlers} />;
      case 38:
        return <Slide38Ch4LanguageDatabase slide={slide} {...handlers} />;
      case 39:
        return <Slide39Ch4VietnameseRag slide={slide} {...handlers} />;
      case 40:
        return <Slide40Conclusion slide={slide} {...handlers} />;
      case 41:
        return <Slide41References slide={slide} {...handlers} />;
      case 42:
      default:
        return <Slide42ThankYou slide={slide} {...handlers} />;
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      <MotionBackground theme={slide.theme} />
      <div className="relative z-10 h-full w-full">{renderContent()}</div>
    </div>
  );
}
