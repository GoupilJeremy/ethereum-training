import React, { Component } from "react";
import factory from "../ethereum/factory";
import {
  CardGroup,
  Button
} from 'semantic-ui-react';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return {campaigns};
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address =>  {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });

    return <CardGroup items={items} />;
  }

  renderCreateCampaign() {
    return <Button
        content={"Create Campaign"}
        icon="add"
        primary={true}
    />;
  }

  render() {
    return <div>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      {this.renderCampaigns()}
      {this.renderCreateCampaign()}
    </div>;
  }
}

export default CampaignIndex;
