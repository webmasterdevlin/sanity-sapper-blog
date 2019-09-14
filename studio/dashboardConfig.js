export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d7d62fb866ff16cb84856fb',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ygf72otw',
                  apiId: 'd038bc71-d86d-4ec9-8128-1fce49b56069'
                },
                {
                  buildHookId: '5d7d62fbff4ae544e99c118f',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-85jid6id',
                  apiId: '9b778b74-f73d-49fb-8898-9b9b6122ed4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webmasterdevlin/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-85jid6id.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
