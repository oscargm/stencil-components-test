import axe, { AxeResults, RunOptions, source, Spec } from "axe-core";

const configure = (spec: Spec) => {
  axe.configure(spec);
};

const runAccessibilityTests = async (
  browser: WebdriverIO.BrowserObject | WebdriverIO.MultiRemoteBrowserObject,
  options: RunOptions
): Promise<AxeResults> => {
  browser.execute(source);
  return await browser.executeAsync(
    "arguments[0](await axe.run(" + JSON.stringify(options) + "));"
  );
};

export const AxeHelpers = { configure, runAccessibilityTests };
