export const newModelData = {
  name: 'Test Model',
  entities: [
    {
      name: 'Person',
      attributes: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'hairColor',
          type: 'string',
        },
      ],
    },
    {
      name: 'Company',
      attributes: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'country',
          type: 'string',
        },
      ],
    },
    {
      name: 'WebSite',
      attributes: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'url',
          type: 'string',
        },
      ],
    },
  ],
  associations: [
    {
      name: 'worksFor',
      source: 'Person',
      target: 'Company',
    },
    {
      name: 'hasSite',
      source: 'Person',
      target: 'WebSite',
    },
  ],
};
