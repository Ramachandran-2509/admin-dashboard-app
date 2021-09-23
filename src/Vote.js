import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import { faMemory,faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react';
import { Specification} from "./Specification"


export function Vote({brandName,model,specs,logo}) {
    const [like, setlike]= useState(0);
    const [dislike, setdislike]= useState(0);
    //console.log("props, props")
    const [opened, setopened]= useState(false);
  
    const inclike= () => setlike(like + 1);
    const indlike= () => setdislike(dislike + 1);
    //const classes = useStyles();
  
    return (
      <Card
      //className={classes.root}
      className ="Vote"
      style ={{background: like >= dislike ? "white" : "crimson", 
      //color:"white"
      
      }}>
        
        {/*<h1 style={{ textTransform:"uppercase" }}>{brandName}</h1>*/}
        <img className="phone-img"
        src={specs.img}
        alt="samsung"
        />
        {/*<CardMedia
            className={classes.media}
            image="https://vlebazaar.in/image/cache/catalog//B08LRDTN6H/Samsung-Galaxy-S21-Ultra-5G-Phantom-Black-12GB-256GB-Storage-Galaxy-Buds-Pro-990-B08LRDTN6H-550x550h.jpg"
            title="Contemplative Reptile"
          />*/}
  
        {/*<img src="https://images-eu.ssl-images-amazon.com/images/I/51fjSNcwJJL._SX300_SY300_QL70_FMwebp_.jpg" alt="Samsung" />*/}
  
        <h4 className="brand-model">{model}</h4>
    <div>
        <IconButton aria-label="like" onClick ={inclike}> 
        <Badge badgeContent={like} color="primary">
        👍
        </Badge></IconButton>
  
        <IconButton aria-label="dislike" onClick ={indlike}> 
        <Badge badgeContent={dislike}
         anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        color="secondary">
        👎
        </Badge></IconButton>
      </div>
  
        <Button onClick={() => setopened(!opened)} variant="outlined" color="primary">
        Show {opened ? "Less" : "More"} {/*conditional rendering */}
        </Button>

            { opened ? <Specification specs={specs}/> : ""}  {/*conditional rendering */}
      </Card>
    );
  }
  