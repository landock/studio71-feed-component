import React from "react";
import { Item, Icon, Label } from "semantic-ui-react";
const FeedItem = props => {
  const {
    title,
    message,
    imageSrc,
    subscribers,
    entityType,
    recordType
  } = props;
  return (
    <Item>
      <Item.Image size="small" src={imageSrc} />
      <Item.Content>
        <Item.Header>{title}</Item.Header>
        <Item.Meta>
          <span className="date">Joined in 2015</span>
        </Item.Meta>
        <Item.Description>{message}</Item.Description>
        {entityType && <Label color="blue">{entityType}</Label>}
        {recordType && <Label color="teal">{recordType}</Label>}
      </Item.Content>
      {subscribers && (
        <Item.Extra>
          <span>
            <Icon name="user" />
            {subscribers.toLocaleString()} subscribers
          </span>
        </Item.Extra>
      )}
    </Item>
  );
};
export { FeedItem as default };
