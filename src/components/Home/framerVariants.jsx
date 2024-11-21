//Framer Motion Variants//
export const section1TextAnimation = {
  start: {x: 100, y: -100, opacity: 0},
  end: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {delay: 0.4, duration: 0.5},
  },
};
export const section1LogoAnimation = {
  start: {x: -100, y: 100, opacity: 0},
  end: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {delay: 0.5, duration: 0.5},
  },
};
export const section2Animation = {
  start: {scale: 0},
  end: {scale: 1},
};
export const section3ImgAnimation = {
  start: {y: -100, opacity: 0},
  end: {y: 0, opacity: 1, transition: {delay: 0.2, duration: 0.4}},
};
export const section3TextAnimation = {
  start: {y: 100, opacity: 0},
  end: {y: 0, opacity: 1, transition: {delay: 0.2, duration: 0.4}},
};
export const section4Animation = {
  start: {y: 20, opacity: 0},
  end: {y: 0, opacity: 1},
};
