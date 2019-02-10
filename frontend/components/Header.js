import React from 'react';
import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start();
}

Router.onRouteChangeDone = () => {
  NProgress.done();
}

Router.onRouteChangeError  = () => {
  NProgress.done();
}

const HeaderStyle = styled.div`

  .bck_b_light {
    background: #999592;
  }
  header {
    z-index: 999;
    width: 100%;
    border-bottom: 1px solid white;
}

header .logo {
    font-family: 'Monoton', cursive;
    color: #ffffff;
    font-size: 40px;
    padding: 11px 0px;
}

header a {
    cursor: pointer;
    margin-left: 20px;
}

header .container {
    display: flex;
}

header .container .left{
    width: 250px;
}

header .container .right{
   flex-grow: 1;
   border-left: 1px solid #eeeeee;
   border-right: 1px solid #eeeeee;
}
header .container .right .top ,
header .container .right .bottom {
    text-transform: uppercase;
    font-weight: 700;
    text-align: right; 
    color:#ffffff;
    font-size: 15px;
    padding: 10px 20px;
}

header .container .right .top {
    color:#c9c9c9;
    border-bottom: 1px solid #ffffff;
}

.user {
  display: inline-flex;
  p {
    padding: 5px 5px;
  }
}
`;

const Header = props => {
  return (
    <HeaderStyle>
      <header className="bck_b_light">
        <div className="container">
            <div className="left">
                <div className="logo">
                    <Link href="/">
                    <a>Strings</a>
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="top">
                  <div className="user">
                    <Link href="/signup">
                      <a>Signup</a>
                    </Link>
                  </div>
                </div>
                <div className="bottom">
                  <div className="user">
                    <Link href="/items">
                      <a>Shop</a>
                    </Link>
                    <Link href="/sell">
                      <a>Sell</a>
                    </Link>
                    <Link href="/orders">
                      <a>Orders</a>
                    </Link>
                    <Link href="/me">
                      <a>Account</a>
                    </Link>
                  </div>
                    
                </div>
            </div>
          </div>
      </header>
    </HeaderStyle>
    
  );
};

export default Header;