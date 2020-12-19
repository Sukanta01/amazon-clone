import React from 'react';
import "./Header.css";
import{ Link} from "react-router-dom" ;
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from  "./StateProvider";
import { auth } from './firebase';

function Header() {
   const [{ basket,user}] = useStateValue();

   const login = () => {
      if (user) {
         auth.signOut();
      }
   }

   console.log(basket);
    return (
      <nav className="header">

       {/*logo on the left -> img  */}
       <Link to="/">
         <img 
           className="header-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
         />
      </Link>


     {/* Search box */}
     <div className="header_search">

      <input type="text" className="header_searchInput"/>
      <SearchIcon className="header_searchIcon" />

     </div>

     {/* 3 links */}
     <div className="header_Nav">

        {/* 1st link */}
        <Link to={!user&& "/login"} className="header_link">
        <div onClick={login} className="header_option">
        <span className="header_optionLineOne">Hello {user?.email}</span>
           <span className="header_optionLineTwo">{user? "Sign Out" : "Sign in"}</span>
           </div>
         </Link>

        {/* 2nd link */}
        <Link to="/" className="header_link">
        <div className="header_option">
        <span className="header_optionLineOne">Returns</span>
           <span className="header_optionLineTwo">& Order</span>
           </div>
         </Link>

        {/* 3rd link */}
        <Link to="/" className="header_link">
        <div className="header_option">
        <span className="header_optionLineOne">Your</span>
           <span className="header_optionLineTwo">Prime</span>
           </div>
         </Link>

        {/* 4th link */}
        <Link to="/checkout" className="header_link">
         <div className="header_optionBasket">
         {/* shopping basket icon */}
         <ShoppingBasketIcon/>

         {/* Number of item in th busket */}
         <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>

         </div>
        </Link>



     </div>

        </nav>
    );
    
};

export default Header;
