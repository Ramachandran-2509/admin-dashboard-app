import './card.css'
export default function Card(props){

    return <>
     <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
                  <h6 className="card-price text-center">{props.data.currency}{props.data.price }<span className="period">/{props.data.period}</span></h6>
                  <hr/>
                    <ul className="fa-ul">

                      {
                        props.data.offers.map((offer) => {
                          return <li className={offer.isEnabled ? "" : "text-muted"}><span className="fa-li"><i className={`fas ${offer.isEnabled ? 'fa-check' : 'fa-times'}`}></i></span>{offer.name}</li>
                        })
                      }

                    </ul>
                    <button className="btn btn-block btn-primary text-uppercase myButton" onClick={() => {
                      console.log("djsd")
                      console.log("djsd")
                      console.log("djsd")
                      console.log("djsd")
                      props.handleButtonClick()
                    }}>Button</button>
          </div>
                </div>
              </div>
    </>
}