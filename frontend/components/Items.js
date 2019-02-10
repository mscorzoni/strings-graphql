import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import Card from './Card';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      frets
      wood
      image
      largeImage
    }
  }
`;

class Items extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error: { error.message }</p>
            return <Card />
          }}
        </Query>
      </div>
    );
  }
} 

export default Items;