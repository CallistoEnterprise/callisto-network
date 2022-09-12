import { TimelineMax as Timeline, Power1 } from 'gsap';
declare const window: any;
const getDefaultTimeline = (node:any, delay:any) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.content');
  const contentInner = node.querySelector('.content--inner');

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
    .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

  return timeline;
}

const getHomeTimeline = (node:any, delay:any) => {
  const timeline = new Timeline({ paused: true });
  const texts = node.querySelectorAll('h1 > div');

  timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay })
    .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline;
}

export const play = (pathname:any, node:any, appears:any) => {
  const delay = appears ? 0 : 0.5;
  let timeline:any

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay);
  else
    timeline = getDefaultTimeline(node, delay);

  window
    .loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node:any) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}
