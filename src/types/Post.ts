export interface Post {
  id: number;
  title: string;
  summary: string;
  pubDate: string;
  url: string;
  site: {
    id: number;
    name: string;
    url: string;
    rss: string;
    about: string | null;
    iframe: boolean;
  };
  indexDate: string;
}
