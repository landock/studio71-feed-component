import Fuse from "fuse.js";
import newsFeed from "../data/news_feed";

export default class NewsFeed {
  constructor() {
    const fuseOptions = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["title", "message"]
    };
    this.data = newsFeed;
    this.fuse = new Fuse(this.data.items, fuseOptions);
  }

  getData() {
    return this.data.items;
  }

  search(term) {
    if (term.length === 0) {
      return;
    }
    return this.fuse.search(term);
  }
}
