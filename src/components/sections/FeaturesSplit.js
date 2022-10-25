import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Marvel',
    paragraph: 'I am a big Marvel nerd. My favorite superhero is Spider-Man by far. Ive been watching since I was younger and never stopped. My whole phone lockscreens are decked out with Spider-Man style apps and everything.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  Drawing
                  </h3>
                <p className="m-0">
                  I really enjoy drawing. I try to do it whenever I have the time and when I have the time, I can draw for hours. This drawing on the right is one of the first ones I had done my freshmen year of being here.
                  </p>
              </div>
              <div className={
                classNames(
                  'pokemondrawing center-content-mobile reveal-from-bottom',
                  imageFill && 'pokemondrawing-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/pokemondrawing.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  Video Games
                  </h3>
                <p className="m-0">
                  I also really enjoy playing video games. I grew up playing MW, COD and I still play those game to today. I also play Minecraft and story games like Batman. This is my minecraft skin to the left!
                  </p>
              </div>
              <div className={
                classNames(
                  'minecraftskin center-content-mobile reveal-from-bottom',
                  imageFill && 'minecraftskin-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/minecraftskin.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  Music
                  </h3>
                <p className="m-0">
                  I genuinely don't think I'd be me without music. I listen to Eminem, Billie Eilish, Logic, Joyner Lucas, Wallows, A Day to Remember and many other very different genres. I'd say my music taste is very disperse and I like it that way. I also love my fair share of musicals. My favorite one atm is Tick, tick... BOOM!
                  </p>
              </div>
              <div className={
                classNames(
                  'logicalbumcover center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/logicalbumcover.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;