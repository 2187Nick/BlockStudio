import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/chrontast" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="Blockchain Studio"
        subTitle="Built with Scaffold-ETH"
        style={{ cursor: "pointer" }}
      />
      
    </a>
  );
}
