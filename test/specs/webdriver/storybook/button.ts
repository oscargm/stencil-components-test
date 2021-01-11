import { Co2Components, StorybookPages } from "src/constants/storybook";
import { AxeHelpers } from "src/helpers/axe";
import { StorybookHelpers } from "src/helpers/storybook";

describe("Button", () => {
  after(async () => {
    // FIXME: move to general conf after hook
    const axeResults = await AxeHelpers.runAccessibilityTests(browser, {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa", "best-practice"],
      },
    });
    console.log("axeresults", JSON.stringify(axeResults));
  });
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
