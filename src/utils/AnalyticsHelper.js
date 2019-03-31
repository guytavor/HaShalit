import { err, log } from "../utils/Logger";

const categories = {
  SCREEN: "screen",
  CARD: "card"
};

export const CATEGORIES = Object.keys(categories).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

const AnalyticsHelper = {
  sendEvent: (...args) => { deferredEvents.push(args) }
};

function checkForGa() {
  return !!window.ga;
}

const deferredEvents = [];
let tries = 0;
const hasGa = new Promise(res => {
  const timer = setInterval(() => {
    if (checkForGa()) {
      clearInterval(timer);
      res(true);
    } else {
      if (tries === 10) {
        clearInterval(timer);
      }
    }
    tries++;
  }, 100);
});

hasGa.then(() => {
  try {
    const tracker = window.ga.getAll()[0];
    AnalyticsHelper.sendEvent = function (category, event, label, value) {
      log('Event sent: ', category, event, label, value);
      try {
        if (categories[category]) {
          tracker.send("event", categories[category], event, label, value);
        }
      } catch (e) {
        err("Failed to send analytics", e);
      }
    };

    deferredEvents.forEach(eventArgs => {
      AnalyticsHelper.sendEvent(...eventArgs);
    })
  } catch (e) {
    err(e);
  }
});

export default AnalyticsHelper;
