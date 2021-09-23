// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './card';
import { useState } from 'react';

function App() {
  let priceData = [
    {
      plan: "FREE",
      currency: "$",
      price: 0,
      period: "month",
      offers: [
        {
          name: "Single User",
          isEnabled: true
        },
        {
          name: "5GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: false
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: false
        },
        {
          name: "Free Subdomain",
          isEnabled: false
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false
        }
      ]
    },
    {
      plan: "PLUS",
      currency: "$",
      price: 9,
      period: "month",
      offers: [
        {
          name: "5 Users",
          isEnabled: true
        },
        {
          name: "50GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true
        },
        {
          name: "Free Subdomain",
          isEnabled: true
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false
        }
      ]
    },
    {
      plan: "PRO",
      currency: "$",
      price: 49,
      period: "month",
      offers: [
        {
          name: "Unlimited Users",
          isEnabled: true
        },
        {
          name: "150GB Storage",
          isEnabled: true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true
        },
        {
          name: "Community Access",
          isEnabled: true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true
        },
        {
          name: "Free Subdomain",
          isEnabled: true
        },
        {
          name: "Monthly Status Reports",
          isEnabled: true
        }
      ]
    },
  ]

  let buttonClicked = () => {
    setTime(time + 1)
  }

  // Hooks
  const [time,setTime] = useState(0)

  return (
    <>
    <h3>Button Clicked {time} times</h3>
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {
              priceData.map((obj) => {
                return <Card data={obj} 
                handleButtonClick={buttonClicked}></Card>
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
