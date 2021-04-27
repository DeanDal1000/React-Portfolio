//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

export const MovieState = () => {
  return [
    {
      title: 'The Movie Database',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/projects/the-movie',
      awards: [
        {
          title: 'The Movie Database',
          description: 'An application created using ReactJS, CSS & HTML',
        },
        {
          title: 'Functionality',
          description:
            'The application allows users to search and find their favourite movie',
        },
        {
          title: 'Technology',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
      ],
    },
    {
      title: 'Music Player',
      mainImg: goodtimes,
      url: '/projects/music',
      secondaryImg: goodtimes2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'The Form',
      mainImg: theracer,
      url: '/projects/form',
      secondaryImg: theracer2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};
