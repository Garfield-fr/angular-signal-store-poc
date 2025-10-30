export type OpenLibraryApiResult = {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  num_found: number;
  q: string;
  documentation_url: string;
  docs: OpenLibraryRecord[];
};

export type OpenLibraryRecord = {
  author_key: string[];
  author_name: string[];
  language: string[];
  key: string;
  title: string;
}

export const availableFields = [
  'author_key',
  'author_name',
  'language',
  'key',
  'title',
];
