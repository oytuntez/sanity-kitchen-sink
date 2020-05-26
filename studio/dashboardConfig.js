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
                  buildHookId: '5ecc86cfc16d84a6fb50e36e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kvno96g8',
                  apiId: '4f36d6a5-e04d-4991-86bf-76c0ea4e4472'
                },
                {
                  buildHookId: '5ecc86cf45228af9ab79940f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-c7jv9bps',
                  apiId: '1e009d7e-6a42-43cf-85ae-5a6cdb9e0f07'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oytuntez/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-c7jv9bps.netlify.app', category: 'apps'}
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
