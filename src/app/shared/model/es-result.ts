export type EsRecord = {
  created: string;
  id: string;
  links: Links
  metadata: any,
  updated: string;
};

export type EsResult = {
  aggregations: {
    [key: string]: any;
  },
  hits: {
    hits: EsRecord[],
    total: {
      relation: string;
      value: number;
    }
  },
  links: Links;
};

export type Links = {
  create?: string;
  next?: string;
  prev?: string;
  self: string;
};

export const EsResultInitialState: EsResult = {
    aggregations: {},
    hits: {
      hits: [],
      total: {
        relation: 'eq',
        value: 0
      }
    },
    links: {
      self: ''
    }
};
