import { Data } from 'components/Api/Api';
import { rest } from 'msw';

export const handlers = [
  rest.get(`https://rickandmortyapi.com/api/character/`, (request, response, context) => {
    return response(context.status(200), context.json(res));
  }),
];

export const res: Data = {
  info: {
    count: 4,
    pages: 1,
    next: null,
    prev: null,
  },
  results: [
    {
      id: 90,
      name: 'Daron Jefferson',
      status: 'Alive',
      species: 'Alien',
      type: 'Cone-nippled alien',
      gender: 'Male',
      origin: {
        name: "Unity's Planet",
        url: 'https://rickandmortyapi.com/api/location/28',
      },
      location: {
        name: "Unity's Planet",
        url: 'https://rickandmortyapi.com/api/location/28',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/90.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/14'],
      url: 'https://rickandmortyapi.com/api/character/90',
      created: '2017-12-01T10:54:34.736Z',
    },
    {
      id: 386,
      name: 'Zarbadar Gloonch',
      status: 'Dead',
      species: 'Alien',
      type: 'Drumbloxian',
      gender: 'Female',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Nuptia 4',
        url: 'https://rickandmortyapi.com/api/location/13',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/386.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/13',
        'https://rickandmortyapi.com/api/episode/18',
      ],
      url: 'https://rickandmortyapi.com/api/character/386',
      created: '2018-01-10T19:52:40.898Z',
    },
    {
      id: 387,
      name: "Zarbadar's Mytholog",
      status: 'unknown',
      species: 'Mythological Creature',
      type: 'Mytholog',
      gender: 'Female',
      origin: {
        name: 'Nuptia 4',
        url: 'https://rickandmortyapi.com/api/location/13',
      },
      location: {
        name: 'Nuptia 4',
        url: 'https://rickandmortyapi.com/api/location/13',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/387.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/18'],
      url: 'https://rickandmortyapi.com/api/character/387',
      created: '2018-01-10T19:54:17.951Z',
    },
    {
      id: 635,
      name: 'Darth Poopybutthole',
      status: 'Alive',
      species: 'Poopybutthole',
      type: 'Soulless Puppet',
      gender: 'Male',
      origin: {
        name: 'Ricks’s Story',
        url: 'https://rickandmortyapi.com/api/location/100',
      },
      location: {
        name: 'Ricks’s Story',
        url: 'https://rickandmortyapi.com/api/location/100',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/635.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/37'],
      url: 'https://rickandmortyapi.com/api/character/635',
      created: '2020-08-06T16:43:46.757Z',
    },
  ],
};
