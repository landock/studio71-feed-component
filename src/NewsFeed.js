import newsFeed from '../data/news_feed';

export default class NewsFeed {
  constructor(){
    this.data = newsFeed;
  }
  getData() {
    console.log(data);
    return this.data;
  }
  
}
