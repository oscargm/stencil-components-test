import { Co2Components, StorybookPages } from "src/constants/storybook";
import { StorybookHelpers } from "src/helpers/storybook";

describe("Button", () => {
  it("should render enabled", () => {
    StorybookHelpers.openStoryBook(StorybookPages.ButtonStates);
    const button = $(Co2Components.Button);
    expect(button).toBeDefined();
    expect(button).toHaveTextContaining("BUTTON");
    expect(button).toHaveAttr("is-disabled", "false");
  });

  it("should render disabled", () => {
    StorybookHelpers.openStoryBook(StorybookPages.ButtonStates);
    StorybookHelpers.openKnobs();
    StorybookHelpers.clickKnobBooleanProp("disabled");
    StorybookHelpers.switchToDemoFrame();
    const button = $(Co2Components.Button);
    expect(button).toBeDefined();
    expect(button).toHaveTextContaining("BUTTON");
    expect(button).toHaveAttr("is-disabled");
  });
});
