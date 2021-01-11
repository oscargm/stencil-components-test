import { BASE_URL, StorybookPages } from "src/constants/storybook";
import { pageIsLoaded } from "./browser";

const openStoryBook = (page: StorybookPages) => {
  browser.url(BASE_URL + page);
  browser.waitUntil(pageIsLoaded, {
    timeout: 10000, //10secs
    timeoutMsg: "Oops! Check your internet connection",
    interval: 100,
  });
  switchToDemoFrame();
};

const switchToDemoFrame = () => {
  const iframeElement = $("#storybook-preview-iframe");
  browser.switchToFrame(iframeElement);
};

const switchToParent = () => {
  browser.switchToFrame(null);
};

const openKnobs = () => {
  switchToParent();
  $("[id^=tabbutton-knobs]").click();
};

const clickKnobBooleanProp = (knobPropertyName: string) => {
  const knobPropertyControl = $(
    `.os-content input[name="${knobPropertyName}"]`
  );
  const value = knobPropertyControl.getProperty("checked");
  knobPropertyControl.click();
  browser.waitUntil(
    () => knobPropertyControl.getProperty("checked") === !value,
    {
      timeout: 500,
      timeoutMsg: `expected ${knobPropertyName} input to be checked`,
    }
  );
};

export const StorybookHelpers = {
  openStoryBook,
  openKnobs,
  switchToDemoFrame,
  clickKnobBooleanProp,
};
