declare module '@apiverve/randomquote' {
  export interface randomquoteOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface randomquoteResponse {
    status: string;
    error: string | null;
    data: RandomQuoteData;
    code?: number;
  }


  interface RandomQuoteData {
      quote:  string;
      author: string;
  }

  export default class randomquoteWrapper {
    constructor(options: randomquoteOptions);

    execute(callback: (error: any, data: randomquoteResponse | null) => void): Promise<randomquoteResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: randomquoteResponse | null) => void): Promise<randomquoteResponse>;
    execute(query?: Record<string, any>): Promise<randomquoteResponse>;
  }
}
