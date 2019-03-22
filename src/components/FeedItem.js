import React from "react";
import { Item, Icon, Label } from "semantic-ui-react";

const FeedItem = props => {
  const {
    name,
    title,
    message,
    imageSrc,
    estimatedSubscribers,
    percentChange,
    subscribers,
    entityType,
    recordType
  } = props;

  const itemMetaMarkup = () => {
    const markup = [];

    name && markup.push(<p key="name">{name}</p>);

    subscribers &&
      markup.push(
        <p key="subscribers">
          <Icon name="user" />
          {subscribers.toLocaleString()} subscribers
        </p>
      );

    estimatedSubscribers &&
      markup.push(
        <p key="estimated-subscribers">
          {estimatedSubscribers.toLocaleString()} subscribers in 30 Days
        </p>
      );

    percentChange &&
      markup.push(<p key="percent-change">{percentChange}% last 30 days</p>);

    return markup;
  };

  return (
    <Item>
      <Item.Image size="small" src={imageSrc} />
      <Item.Content>
        <Item.Header>{title}</Item.Header>
        <Item.Meta>{itemMetaMarkup()}</Item.Meta>
        <Item.Description>{message}</Item.Description>
        {entityType && <Label color="blue">{entityType}</Label>}
        {recordType && <Label color="teal">{recordType}</Label>}
      </Item.Content>
      {}
    </Item>
  );
};
export { FeedItem as default };
