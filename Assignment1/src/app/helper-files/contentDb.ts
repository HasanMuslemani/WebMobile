import {Content} from './content-interface';

export const BOOKSLIST: Content[] = [{
  id: 0,
  author: 'J.K. Rowling',
  // imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg',
  type: 'Fantasy',
  title: 'Harry Potter and the Philosopher\'s Stone',
  body: 'A boy learns that he is the son of 2 powerful wizards.',
  tags: ['Harry', 'Potter', 'Magic']
},
{
  id: 1,
  author: 'Suzanne Collins',
  imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41WAJbx1e2L._SX325_BO1,204,203,200_.jpg',
  type: 'Adventure',
  title: 'The Hunger Games',
  body: 'Fight to be the last one standing!',
  tags: ['Games', 'Fight', 'Last One Standing']
},
{
  id: 2,
  author: 'Gary Paulsen',
  imgUrl: 'https://m.media-amazon.com/images/I/61ojqdijykL.jpg',
  type: 'Adventure',
  title: 'Hatchet',
  body: 'A boy is deserted on an island alone.',
  tags: ['Deserted', 'Island', 'Plane']
},
{
  id: 3,
  author: 'Stephen King',
  imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51vRAjC5QvL._SX302_BO1,204,203,200_.jpg',
  type: 'Horror',
  title: 'The Shining',
  body: 'Do not enter that room. It is haunted!',
  tags: ['Hotel', 'Haunted', 'Twins']
},
{
  id: 4,
  author: 'Justin Somper',
  imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71yXseWBvQL.jpg',
  type: 'Horror',
  title: 'Vampirates: Demons of the Ocean',
  body: 'A young girl lost at sea is saved by a spooky pirate ship!',
  tags: ['Pirates', 'Demons', 'Spooky']
}];
