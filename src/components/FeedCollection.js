import React from "react";
import { Item, Divider } from "semantic-ui-react";

import FeedItem from "./FeedItem";

export default function FeedItemCollection({ newsFeed }) {
  const items = newsFeed.map((feed, index) => {
    const key = feed.entity_id || index;
    const cardProps = {
      title: feed.title,
      message: feed.message,
      imageSrc: feed.thumbnail,
      subscribers: feed.subscribers,
      recordType: feed.type,
      entityType: feed.entity_type
    };
    return (
      <React.Fragment key={key}>
        <FeedItem {...cardProps} />
        <Divider />
      </React.Fragment>
    );
  });

  return <Item.Group>{items}</Item.Group>;
}
