import gamestackTextureLarge from '~/assets/gamestack-login-large.png';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.png';
import sliceTextureLarge from '~/assets/slice-app-large.png';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.png';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.png';
import mojitoTextureLarge from '~/assets/mojito-drink-large.png';
import mojitoTexture from '~/assets/mojito-drink.png';
import iphoneTextureLarge from '~/assets/iphone-clone-large.png';
import iphoneTexture from '~/assets/iphone-clone.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Full-Stack Innovator & Designer',
    description: `Portfolio of ${config.name}, showcasing innovative web solutions with interactive learning, finance, gaming, and immersive 3D experiences.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Askademia: Multimodal Learning"
        description="Built Askademia, a platform with AI-driven screen sharing and voice for interactive learning. (In Development)"
        buttonText="Explore Askademia"
        buttonLink="https://askademiaa.netlify.app/"
        model={{
          type: 'laptop',
          alt: 'Askademia learning interface',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Xpress Tchotcho: Loan Platform"
        description="Developed Xpress Tchotcho, a responsive loan management site with seamless user experience."
        buttonText="Visit Xpress Tchotcho"
        buttonLink="https://xpresstchotcho.com/"
        model={{
          type: 'laptop',
          alt: 'Xpress Tchotcho loan interface',
          textures: [
            {
              srcSet: `${gamestackTexture} 1280w, ${gamestackTextureLarge} 2560w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Zentry: Award-Winning Game"
        description="Created Zentry, an award-winning game with immersive sound and smooth animations."
        buttonText="Play Zentry"
        buttonLink="https://zentry-vert-kappa.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Zentry game interface',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Mojito: Immersive Drink Experience"
        description="Crafted Mojito, a drink website with smooth scroll and captivating 3D animations."
        buttonText="Visit Mojito"
        buttonLink="https://mojito-two.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Mojito drink showcase interface',
          textures: [
            {
              srcSet: `${mojitoTexture} 1280w, ${mojitoTextureLarge} 2560w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="iPhone Showcase: 3D Interactive Clone"
        description="Developed an iPhone website clone with 3D color-changing models and dynamic videos."
        buttonText="Explore iPhone Clone"
        buttonLink="https://iphone-clone-demo.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'iPhone clone 3D interactive interface',
          textures: [
            {
              srcSet: `${iphoneTexture} 1280w, ${iphoneTextureLarge} 2560w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};