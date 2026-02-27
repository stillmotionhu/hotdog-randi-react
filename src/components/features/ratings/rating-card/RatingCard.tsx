import { createRef, useEffect, useState } from "react";
import { ParentComponentProps } from "@/types/parent-component-props";
import { Rating } from "@/collections/Rating";
import { props } from "@stylexjs/stylex";

import { styles } from "./RatingCard.stylex";

/**
 * RATING CARD WRAPPER
 */
const RatingCardWrapper: React.FC<ParentComponentProps> = ({ children }) => {
  // TODO: Refactor this code. Maybe we should use a status state.
  const [revealed, setRevealed] = useState<boolean>(false);
  const [shouldReveal, setShouldReveal] = useState<boolean>(false);
  const [intersectionObserver, setIntersectionObserver] =
    useState<IntersectionObserver>();

  const ratingCardWrapperRef = createRef<HTMLElement>();

  const handleAnimationEnd = () => {
    setShouldReveal(false);
    setRevealed(true);
  };

  useEffect(() => {
    if (!ratingCardWrapperRef.current) {
      return;
    }

    const intersectionObserverCallback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
    ) => {
      const entry: IntersectionObserverEntry = entries[0];

      if (!entry.isIntersecting) {
        return;
      }

      setShouldReveal(true);
    };
    const intersectionObserverOptions: IntersectionObserverInit = {
      root: document,
      rootMargin: "0px",
      threshold: 0.15,
    };

    setIntersectionObserver(
      new IntersectionObserver(
        intersectionObserverCallback,
        intersectionObserverOptions,
      ),
    );
  }, []);

  useEffect(() => {
    if (!(intersectionObserver && ratingCardWrapperRef.current)) {
      return;
    }

    intersectionObserver.observe(ratingCardWrapperRef.current);
  }, [intersectionObserver]);

  useEffect(() => {
    if (!(shouldReveal && intersectionObserver)) {
      return;
    }

    intersectionObserver.disconnect();
  }, [shouldReveal, intersectionObserver]);

  return (
    <section
      {...props(
        styles.wrapper,
        !(revealed || shouldReveal) && styles.wrapperHidden,
        shouldReveal && styles.wrapperRevealAnimation,
      )}
      onAnimationEnd={handleAnimationEnd}
      ref={ratingCardWrapperRef}
    >
      {children}
    </section>
  );
};

/**
 * RATING CARD CONTAINER
 */
const RatingCardContainer: React.FC<ParentComponentProps> = ({ children }) => {
  return <div {...props(styles.container)}>{children}</div>;
};

/**
 * RATING CARD HEADER
 */
const RatingCardHeader: React.FC<ParentComponentProps> = ({ children }) => {
  return <header {...props(styles.header)}>{children}</header>;
};

/**
 * RATING CARD TITLE
 */
const RatingCardTitle: React.FC<ParentComponentProps> = ({ children }) => {
  return <h2 {...props(styles.title)}>{children}</h2>;
};

/**
 * RATING CARD SUBTITLE
 */
const RatingCardSubitle: React.FC<ParentComponentProps> = ({ children }) => {
  return <h3 {...props(styles.subtitle)}>{children}</h3>;
};

/**
 * RATING CARD SLIDER THUMB
 */
interface RatingCardSliderThumbProps {
  score: number;
}

const RatingCardSliderThumb: React.FC<RatingCardSliderThumbProps> = ({
  score,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props(styles.sliderThumb, styles.sliderThumbLeft(score * 10 + "%"))}
    >
      <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" />
    </svg>
  );
};

/**
 * RATING CARD SLIDER
 */
interface RatingCardSliderProps {
  score: number;
}

const RatingCardSlider: React.FC<RatingCardSliderProps> = ({ score }) => {
  return (
    <div {...props(styles.sliderWrapper)}>
      <progress {...props(styles.sliderProgress)} max={10} value={score} />
      <RatingCardSliderThumb score={score} />
    </div>
  );
};

/**
 * RATING CARD CONTENT
 */
const RatingCardContent: React.FC<ParentComponentProps> = ({ children }) => {
  return <main {...props(styles.content)}>{children}</main>;
};

/**
 * RATING CARD ITEM
 */
interface RatingCardItemProps {
  label: string;
  score: number;
  notes?: string;
}

const RatingCardItem: React.FC<RatingCardItemProps> = ({
  label,
  score,
  notes,
}) => {
  return (
    <div {...props(styles.itemWrapper)}>
      <div {...props(styles.itemHeader)}>
        <span {...props(styles.itemLabel)}>{label}</span>
        <span {...props(styles.itemScore)}>{score}</span>
      </div>

      <RatingCardSlider score={score} />

      {notes && <span {...props(styles.itemNotes)}>{notes}</span>}
    </div>
  );
};

/**
 * RATING CARD ROOT
 */
interface RatingCardProps {
  rating: Rating;
}

const RatingCard: React.FC<RatingCardProps> = ({ rating }) => {
  return (
    <RatingCardWrapper>
      <RatingCardContainer>
        <RatingCardHeader>
          <RatingCardTitle>{rating.locationName}</RatingCardTitle>
          <RatingCardSubitle>{rating.locationAddress}</RatingCardSubitle>
        </RatingCardHeader>

        <RatingCardContent>
          <RatingCardItem
            label="Dog"
            score={rating.dogRating}
            notes={rating.dogNotes}
          />
          <RatingCardItem
            label="Bun"
            score={rating.bunRating}
            notes={rating.bunNotes}
          />
          <RatingCardItem
            label="Sauce"
            score={rating.sauceRating}
            notes={rating.sauceNotes}
          />
          <RatingCardItem
            label="Sauce to Dog Ratio"
            score={rating.sauceToDogRatioRating}
            notes={rating.sauceToDogRatioNotes}
          />
          <RatingCardItem
            label="Dog to Bun Ratio"
            score={rating.dogToBunRatioRating}
            notes={rating.dogToBunRatioNotes}
          />
          <RatingCardItem
            label="Overall Taste"
            score={rating.overallTasteRating}
            notes={rating.overallExperienceNotes}
          />
          <RatingCardItem
            label="Customer Service"
            score={rating.customerServiceRating}
            notes={rating.customerServiceNotes}
          />
          <RatingCardItem
            label="Overall Experience"
            score={rating.overallExperienceRating}
            notes={rating.overallExperienceNotes}
          />
          <RatingCardItem label="Score" score={rating.score} />
        </RatingCardContent>
      </RatingCardContainer>
    </RatingCardWrapper>
  );
};

export { RatingCard };
