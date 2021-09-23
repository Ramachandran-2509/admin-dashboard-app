import React from 'react'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import  IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);



export const Item = (itc) => {
    return (
        <div className="trali">
            <Button  className="cartbt" variant="contained" >
          <b> Cart </b>
          <IconButton aria-label="cart">
            <StyledBadge badgeConten  setCt={itc} color="secondary" showZero>
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Button>
        </div>
    )
}
export default Item