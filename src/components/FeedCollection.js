import React from "react";
import { Item, Divider } from "semantic-ui-react";

import FeedItem from "./FeedItem";

export default function FeedItemCollection({ newsFeed }) {
  if (newsFeed.length === 0) {
    return <p>No Results</p>;
  }
  const items = newsFeed.map((feed, index) => {
    const {
      entity_id,
      estimated_subscribers_30_days,
      percent_change_30_day,
      name,
      title,
      message,
      thumbnail,
      subscribers,
      type,
      entity_type
    } = feed;

    const key = entity_id || index;

    const cardProps = {
      name,
      title,
      subscribers,
      message,
      imageSrc: thumbnail,
      recordType: type,
      estimatedSubscribers: estimated_subscribers_30_days,
      percentChange: percent_change_30_day,
      entityType: entity_type
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
