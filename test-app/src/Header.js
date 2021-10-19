import React from 'react'
import './Header.css'



function Header() {

    return (
        <div className="header">
            {/* Logo */}
            
                <div className="header__logo">
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                </div>
            
            {/* Address */}
            
            {/* Search */}
            <div className="header__search">
                <input className="h eader__searchInput" type="text" />
                    
             
            </div>
            <div className="header__navItems">
                    {/* Login name */}
                <div className="header-option">
                    <span className="header__optionLineOne">Hello, Nazariy</span>
                    <span className="header__optionLineTwo">Account & Lsits</span>
                </div>  
                    {/* Orders */}
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>  
                    {/* Cart */}
                
                
                
            </div>
  
            
        </div>
    )
}

export default Header

