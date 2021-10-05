export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
// {
//   url: string;
//   name: string;
//   isbn: number;

//   authors: string[];
//   numberOfPages: number;
//   publisher: string;
//   country: string;
//   mediaType: string;
//   released: number;
//   characters: string[];
//   povCharacters: string[];
// }

export interface ICharacters {
  url: string;
  name: string;
  culture: string;
  born: string;
  died: string;
  gender: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
}
