import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import { faMemory,faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Specification({specs}){
    //console.log("Specss props",props);
    return (
      <div>
      <h2>Specs:</h2>
      <ul className="specs">
        <li>
          {specs.os=== "IOS" ? <AndroidIcon/> : <AppleIcon/> }{specs.os}</li>
        <li><FontAwesomeIcon icon={faMicrochip} />{specs.processor}</li>
        <li><FontAwesomeIcon icon={faMemory} />{specs.Storage}</li>
      </ul>
      </div>
    );
}
  