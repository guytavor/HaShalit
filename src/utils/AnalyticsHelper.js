import { err } from "../utils/Logger";

let send = () => {};

const categories = {
  SCREEN: "screen",
  CARD: "card"
};

export const CATEGORIES = Object.keys(categories).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

if (typeof window.ga === "function") {
  try {
    const tracker = window.ga.getAll()[0];
    send = function(category, event, label, value) {
      try {
        if (categories[category]) {
            tracker.send("event", categories[category], event, label, value);
        }
      } catch (e) {
        err("Failed to send analytics", e);
      }
    };
  } catch (e) {
    err(e);
  }
}

export const sendEvent = send;
