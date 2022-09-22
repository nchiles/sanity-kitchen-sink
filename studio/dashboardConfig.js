export default {
  widgets: [
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
                  buildHookId: '632cc90c3faf6c005def0720',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fad7h2kq',
                  apiId: '236f6dc6-e8e3-42d0-b537-ca0db24e5f20'
                },
                {
                  buildHookId: '632cc90c9e4d8e0086462858',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bqn4g5q8',
                  apiId: '053ccd7c-f2cf-4efb-9439-c3b32a086ff5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nchiles/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bqn4g5q8.netlify.app', category: 'apps'}
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
