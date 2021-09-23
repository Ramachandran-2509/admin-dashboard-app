
 import IconButton from '@material-ui/core/IconButton';
 
 
 export function Badge(){
    return(
      <div>
     <IconButton aria-label="cart">
    <StyledBadge badgeContent={4} color="secondary">
    <ShoppingCartIcon />
      </StyledBadge>
     </IconButton>
      </div>
    )
  }