export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dff73cbde0510c65d4bc4ea',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tde3fr5e',
                  apiId: '839fac91-9e3f-466a-a673-c22bcffc65f4'
                },
                {
                  buildHookId: '5dff73cb4e46f0a7f5664f5f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sk62ab5p',
                  apiId: 'bf3108a1-911d-414c-8b0b-38eebf82b628'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olzn/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sk62ab5p.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
