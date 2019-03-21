import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const FeedCard = ({title, message, imageSrc,subscribers }) => (
    <Card fluid>
      <Image centered size="small" src={imageSrc} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>{message}</Card.Description>
      </Card.Content>
      {
        subscribers
        ? <Card.Content extra>
            <a> <Icon name='user' /> {subscribers.toLocaleString()} subscribers </a>
          </Card.Content>
        : null
      }
    </Card>
)

export {FeedCard as default};
