import styled from 'styled-components';

const CardStyles = styled.div`
  .card_item_wrapper {
    flex-grow: 1;
    width: 25%;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
}

.card_item_wrapper .image {
    width: 100%;
    height: 280px;
    background-position: center !important;
    background-size: cover !important;
    border: 1px solid #f0f0f0;
}


.card_item_wrapper .tags {
    position: relative;
    border-bottom: 1px solid #f0f0f0;
}

.card_item_wrapper .tags .brand,
.card_item_wrapper .tags .name,
.card_item_wrapper .tags .price {
    text-align: center;
    margin: 5px;
}

.card_item_wrapper .tags .brand {
    font-size: 17px;
    font-weight: 700;
    color: #2196F3;
}

.card_item_wrapper .tags .name {
    font-size: 21px;
    font-weight: 700;
}

.card_item_wrapper .tags .price {
    font-weight: 300;
    font-size: 21px;
}

.card_item_wrapper .actions {
    display: flex;
    padding: 15px 0 10px 0;
}

.card_item_wrapper .actions .button_wrapp:nth-child(1) {
    flex-grow: 1;
    padding-right: 10px;
}

.card_item_wrapper.grid_bars {
    float: none;
    width: 100%;
    display: flex;
}

.card_item_wrapper.grid_bars .image {
    width: 420px;
    height: 211px;
    border: none;

}

.card_item_wrapper.grid_bars .action_container {
    flex-grow: 1;
    border: 1px solid #e6e6e6;
}

.card_item_wrapper.grid_bars .description{
    clear:both;
    padding: 0px 25px;
    border-top: 1px solid #eeeeee;
}

.card_item_wrapper.grid_bars .tags{
    border-bottom: 0px;
    padding: 5px 20px;
}

.card_item_wrapper.grid_bars .tags .brand {
    font-size: 21px;
}


.card_item_wrapper.grid_bars .tags .brand,
.card_item_wrapper.grid_bars .tags .name {
    float:left
}

.card_item_wrapper.grid_bars .tags .price {
    float:right;
}

.card_item_wrapper.grid_bars .actions {
    clear:both;
    float:right;
    padding: 10px 20px 0px 15px;
}
`;

export default CardStyles;