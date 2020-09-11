import ReactGA from 'react-ga';

export const pageView = (args: string) => {
  if (!args) return;

  ReactGA.pageview(args);
};

export const event = ({
  eventCategory,
  eventAction,
  eventLabel,
  eventValue,
}: {
  eventCategory: string;
  eventAction?: string;
  eventLabel?: string;
  eventValue?: string;
}): void => {
  if (!(window as any).dataLayer || !(window as any).dataLayer.push || !eventValue) return;

  const args: {
    eventCategory?: string;
    eventAction?: string;
    eventLabel?: string;
    eventValue?: string;
  } = { eventCategory, eventAction, eventLabel };

  if (eventValue) {
    args.eventValue = eventValue;
  }

  (window as any).dataLayer.push(args);
};

export default {
  ...ReactGA,
  event,
  pageView,
};
