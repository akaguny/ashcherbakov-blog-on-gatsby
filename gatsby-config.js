module.exports = {
    pathPrefix: `/ashcherbakov-blog-on-gatsby`,
    siteMetadata: {
        title: `Gatsby Default Starter`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages/markdown`,
                name: 'markdown-pages',
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
}
