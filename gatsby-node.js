// gatsby-node.js
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/pages/blog.tsx`);

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({ node }) => {
    const is_people = node.internal.contentFilePath.includes("people");

    if (is_people) {
      // Create a page for the people section
      const path = node.internal.contentFilePath.split("/");
      const slug = path[path.length - 1].split(".")[0];
      createPage({
        path: slug,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id },
      });
    } else {
      createPage({
        path: node.frontmatter.slug,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id },
      });
    }
  });
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
