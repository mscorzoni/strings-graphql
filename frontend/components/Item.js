import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardStyle from './styles/CardStyles';
import Link from 'next/link';
import formatMoney  from '../lib/formatMoney'
import Delete from './DeleteItem';


class Item extends Component {
  static  propTypes = {
    item: PropTypes.object.isRequired
  }

  renderCardImage(image){
    if(image && image.length > 0){
        return images[0].url
    } else {
        return '/static/images/image_not_availble.png'
    }}

  render() {
    const { item } = this.props;
    return (
      <CardStyle>
      <div className={`card_item_wrapper `}>
        <Link href={{
          pathname: '/item',
          query: {id: item.id}
        }}>
          <a>
            <div
              className="image"
              style={{
                  background:`url(${this.renderCardImage(item.image)}) no-repeat`
              }} />
          </a>
        </Link>
        <div className="action_container">
            <div className="tags">
                {/* <div className="brand">{props.brand.name}</div> */}
                <div className="name">{item.title}</div>
                <div className="name">{formatMoney(item.price)}</div>
            </div>
            <div className="description">
                <p>
                    {item.description}
                </p>    
            </div>
            <div className="actions">
              <Link href={{
                pathname: "update",
                query: {
                  id: item.id
                }
              }}
              >
                <a>
                  <div className="button_wrapp">
                    <button>Edit</button>
                  </div>
                </a>
              </Link>
              
              <div className="button_wrapp">
                <button>Add To Cart</button>
              </div>
              <div className="button_wrapp">
                <Delete id={item.id }>Delete</Delete>
              </div>
            </div>
        </div>
      </div>
    </CardStyle>
    );
  }
}

export default Item;