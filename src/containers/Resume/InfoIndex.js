import React, { Component } from "react";
import { InfoIndexContainer, InfoIndexRow } from "./InfoIndex.style";
import ItemMastery from "./ItemMastery";

const infoIndex = () => {
  return (
    <InfoIndexContainer>
      <InfoIndexRow>
        <ItemMastery projects={1} /> <p> {"\u00A0"}= project</p>
      </InfoIndexRow>
      <InfoIndexRow>
        <ItemMastery semesters={1} /> <p> {"\u00A0"}= course</p>
      </InfoIndexRow>
    </InfoIndexContainer>
  );
};

export default infoIndex;
