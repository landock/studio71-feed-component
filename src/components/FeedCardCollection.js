import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import FeedCard from './FeedCard'; 

export default function FeedCardCollection({newsFeed}){
  return (
    <Card.Group>
      {
        newsFeed.map(feed => {
          const cardProps = {
            title: feed.title,
            key: feed.entity_id || feed.message,
            message: feed.message,
            imageSrc: feed.thumbnail,
            subscribers: feed.subscribers
          };
          return <FeedCard {...cardProps} />
        })
      }
    </Card.Group>
  )
}
