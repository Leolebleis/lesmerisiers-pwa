import Analytics from "analytics";
import simpleAnalyticsPlugin from "analytics-plugin-simple-analytics";

const analytics = Analytics({
  app: "lesmerisiers",
  plugins: [
    // Load simple analytics! 🎉
    simpleAnalyticsPlugin(),
  ],
});
