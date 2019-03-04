import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import Item from './Item';
import Pagination from './Pagination';

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

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  
`;
class Items extends Component {
  render() {
    return (
      <Center>
        <Pagination page={this.props.page}/>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error: { error.message }</p>
            return (
              <ItemsList>
                {data.items.map(item => (
                  <Item item={item} key={item.id}/>
                ))}
              </ItemsList>
            )
          }}
        </Query>
        <Pagination page={this.props.page}/>
      </Center>
    );
  }
} 

export default Items;
export { ALL_ITEMS_QUERY };