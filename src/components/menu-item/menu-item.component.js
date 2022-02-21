import React from "react";
import { withRouter } from "react-router";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  MenuItemTitle,
  SubtitleContainer,
} from "./menu-item.styles";
// import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer className="content">
      <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
      <SubtitleContainer>SHOP NOW</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
