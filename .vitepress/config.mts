import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lambda Live Debugger",
  description: "Remote debugging AWS Lambda functions",
  base: "/vitepress-test/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    siteTitle: "Lambda Live Debugger",

    logo: "/logo.png",

    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          { text: "Why?", link: "#why" },
          { text: "How It Works", link: "#how-it-works" },
          { text: "Help and Feedback", link: "#help-and-feedback" },
        ],
      },
      {
        text: "Instructions",
        collapsed: false,
        items: [
          { text: "Getting Started", link: "#getting-started" },
          { text: "CLI Parameters", link: "#cli-parameters" },
          { text: "Configuration file", link: "#configuration-file" },
          { text: "Debugging", link: "#debugging" },
          { text: "Development Process", link: "#development-process" },
        ],
      },
      {
        text: "Advanced",
        collapsed: false,
        items: [
          { text: "Observability Mode", link: "#observability-mode" },
          { text: "Monorepo Setup", link: "#monorepo-setup" },
          { text: "Removing", link: "#removing" },
        ],
      },
      {
        text: "Frameworks & Custom Setup",
        collapsed: true,
        link: "#aws-cdk-v2",
        items: [
          { text: "AWS CDK", link: "#aws-cdk-v2" },
          {
            text: "Serverless Framework",
            link: "#serverless-framework-v3-sls",
          },
          { text: "SAM", link: "#aws-serverless-application-model-sam" },
          { text: "Terraform", link: "#terraform" },
          { text: "Custom setup", link: "#custom-setup" },
        ],
      },
      { text: "Authors and Contributors", link: "#authors" },
      { text: "Declarment", link: "#declarment" },
      // { text: "Contributors", link: "#contributors" },

      // { text: "Know issues", link: "#know-issues" },
      // { text: "Missing Features", link: "#missing-features" },
      // { text: "Reporting an Issue", link: "#reporting-an-issue" },
      // { text: "Authors", link: "#authors" },
      // { text: "Contributors", link: "#contributors" },
      //
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Marko (ServerlessLife)",
    },
  },
});
