/* eslint-disable react/jsx-no-useless-fragment */
import {
  MouseEvent,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSwipeable } from "react-swipeable";
import { uid } from "react-uid";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import tw from "twin.macro";
import Button from "../button/button";
import Icon, { Icons } from "../icon";
import Scrollable from "../scrollable/scrollable";
import MarkdownInlineActions from "./markdown-inline-actions";
import MarkdownSlideshowActions from "./markdown-slideshow-actions";

export type MarkdownContents = Array<string>;
export type MarkdownLabels = { [key: string]: string };
export type MarkdownActions = ReactNode;
export type MarkdownAsSlideshow = boolean;

export interface MarkdownContentsProps {
  contents?: MarkdownContents;
  asSlideshow?: MarkdownAsSlideshow;
  actions?: MarkdownActions;
  labels?: MarkdownLabels;
  imgZoom?: boolean;
}

const setZoom = new Event("setZoom", { bubbles: true });
const unsetZoom = new Event("unsetZoom", { bubbles: true });

const slideshowVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
};

export function MarkdownContents({
  contents = [],
  asSlideshow,
  actions,
  labels,
  imgZoom,
}: MarkdownContentsProps) {
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);
  const hasSlides = useMemo(() => contents.length > 1, [contents]);
  const contentIndex = wrap(0, contents.length, currentSlide);

  const contentRef = useRef(null);

  const [zoomSrc, setZoomSrc] = useState<{ src: string; title: string } | null>(
    null,
  );

  const activeSlideshow = useMemo(
    () => hasSlides && asSlideshow,
    [hasSlides, asSlideshow],
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
  });

  const isLastSlide = useMemo(
    () => currentSlide === contents.length - 1,
    [currentSlide, contents],
  );

  const paginate = (newDirection: number) => {
    if (!activeSlideshow) return;
    setCurrentSlide([currentSlide + newDirection, newDirection]);
  };

  const onNext = useCallback(() => {
    if (!isLastSlide) setCurrentSlide([currentSlide + 1, 1]);
  }, [isLastSlide, currentSlide]);

  const delegateClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (!imgZoom) return;
      const target = e.target as HTMLElement;

      const ctn =
        target.closest(".as-figure") ||
        (target.classList.contains("as-figure") ? target : null);

      if (ctn) {
        const targetImg = ctn.querySelector("img") as HTMLImageElement;
        if (targetImg.src)
          setZoomSrc({
            src: targetImg.src,
            title: targetImg.alt || targetImg.title || "",
          });
        window.dispatchEvent(setZoom);
      }
    },
    [imgZoom],
  );

  const closeZoom = useCallback(() => {
    setZoomSrc(null);
    window.dispatchEvent(unsetZoom);
  }, []);

  return (
    <StyledMarkdownWrapper {...{ hasSlides }}>
      {activeSlideshow && (
        <MarkdownSlideshowActions
          {...{ contents, contentIndex, setCurrentSlide }}
        />
      )}
      <StyledMarkdownContents {...swipeHandlers}>
        <AnimatePresence initial={false} custom={direction}>
          <StyledMarkdown
            custom={direction}
            variants={slideshowVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            key={uid(contentIndex)}
          >
            <Scrollable>
              <StyledMarkdownContent
                {...{ imgZoom }}
                ref={contentRef}
                onClick={delegateClick}
                dangerouslySetInnerHTML={{ __html: contents[contentIndex] }}
              />
            </Scrollable>
          </StyledMarkdown>
        </AnimatePresence>
      </StyledMarkdownContents>

      {!asSlideshow && (
        <MarkdownInlineActions {...{ isLastSlide, onNext, actions, labels }} />
      )}
      <AnimatePresence initial={false}>
        {!!zoomSrc && (
          <StyledImageZoom
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ willChange: "opacity" }}
          >
            <div className="fixed top-2 right-2">
              <Button onlyIcon inverted squared onClick={closeZoom}>
                <Icon type={Icons.ZoomOut} />
              </Button>
            </div>
            <img src={zoomSrc.src} alt={zoomSrc.title} />
          </StyledImageZoom>
        )}
      </AnimatePresence>
    </StyledMarkdownWrapper>
  );
}

export default MarkdownContents;

type StyledMarkdownWrapperProps = {
  hasSlides: boolean;
};

export const StyledMarkdownWrapper = styled.div(
  ({ hasSlides }: StyledMarkdownWrapperProps) => [
    hasSlides && tw`absolute inset-0 overflow-hidden min-h-full flex flex-col`,
    hasSlides &&
      `
    ${StyledMarkdown} {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }
  `,
  ],
);

export const StyledMarkdownContents = styled.div(() => [
  tw`w-full flex-1 relative overflow-hidden flex flex-col`,
]);

export const StyledMarkdown = styled(motion.div)(() => [
  tw`w-full flex-1 relative overflow-hidden flex flex-col`,
]);

export const StyledImageZoom = styled(motion.div)(() => [
  tw`fixed z-50 top-0 left-0 right-0 overflow-auto`,
  `
    bottom: var(--ui-nav-size);
    > img {
      width: auto;
      max-width: none;
      height: 100%;
    }
  `,
]);

type StyledMarkdownContentProps = {
  imgZoom: boolean | undefined;
};
export const StyledMarkdownContent = styled.div(
  ({ imgZoom }: StyledMarkdownContentProps) => [
    `
    min-height: 100%;

    h1 {
      font-size: 3rem;
      line-height: 1.25em;
      margin: 2rem 0;
    }
    
    h2 {
      font-size: 1.8rem;
      line-height: 1.25em;
      margin: 0 0 2rem 0;
    }
    
    h3 {
      font-size: 1.25rem;
      line-height: 1.25em;
      margin: 0 0 1.5rem 0;
    }

    p + h3,
    p + h2 {
      margin-top: 2rem;
    }

    h4, h5, h6, p {
      margin: 0 0 .5rem 0;
    }

    hr {
      margin: 2rem 0;
    }

    ul, ol {
      margin: 0 0 2rem 2rem;
    }

    ul {
      list-style-type: circle;
    }

    ul li:not(:last-child) {
      margin-bottom: 1em;
    }

    ol {
      list-style-type: decimal;
    }

    a {
      text-decoration: underline;
      text-underline-offset: .4em;
    }

    > * + p img,
    > * + img {
      padding-top: 1em;
    }


    .as-figure {
      display: block;
      position: relative;
    }
    
    .as-figcaption {
      font-size: 0.8em;
      line-height: 1.2em;
      opacity: 0.8;
      margin: 0.5rem 0;
    }

    .as-figure__zoom {
      content: "";
      display: none;
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
      width: 1.65rem;
      height: 1.65rem;
      background: white;
      border-radius: 0.125rem;
      padding: 0.25rem;
    }
    
    .as-figure__zoom span {
      display: block;
      position: absolute;
      inset: 0;
      z-index: 40;
      background: currentColor;
      -webkit-mask-image: url("/assets/layout/icons/zoom-in.svg");
      mask-image: url("/assets/layout/icons/zoom-in.svg");
      -webkit-mask-size: contain;
      mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-position: center;
      mask-position: center;
    }

    img {
      user-select: none;
      pointer-events: none;
    }

    .slide {
      position: relative;
      min-height: 100%;
    }

    .background,
    .background > p,
    .background > p > .as-figure img {
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    
    .background {
      inset: -1rem;
      pointer-events: none;
    }
    
    .background > p > .as-figure img {
      object-fit: cover;
      object-position: top center;
      max-height: none;
    }

  `,

    imgZoom &&
      `.as-figure__zoom {
        display: block;
      }`,
  ],
);
