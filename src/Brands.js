import { useState } from 'react';
import { Vote } from "./Vote";

export function Brands() {
  const brands = [
    {
      id: 0,
      name: "Samsung",
      logo: "https://cdn.iconscout.com/icon/free/png-256/samsung-226432.png",
      model: "s21 ultra",
      specs: {
        os: "Andirod",
        processor: "Samsung Extnos 2100",
        Storage: "128GB",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGLqvZ5lE3YwbF1ru49iCLQDgAlVDngSivTm2zEonTKLJPcLXT1gmbPdAkNI&usqp=CAc"
      },

    },

    {
      id: 1,
      name: "Apple",
      model: "Iphone 12 pro",
      specs: {
        os: "IOS",
        processor: "Mac",
        Storage: "128GB",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeYP6UUcyZ0N9EaqY_rGIgXpS9LnsHfRdDvs6tdbifnpbzSv88KNTbLG0m25WVNuKAdSAb2Sh&usqp=CAc"
      },
    },
    {
      id: 2,
      name: "MI",
      model: "mi 11 ultra",
      specs: {
        os: "Andriod",
        processor: "Snadragon 888",
        Storage: "256GB",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGYCA663phpvpm8O6XI1gXOEAHidpHAPmA8SxreNLFW846CSFxKk95--aZu7oI2qrMCvXFYMe&usqp=CAc"
      },
    },
    {
      id: 3,
      name: "Oppo",
      model: "F11 pro",
      specs: {
        os: "Andriod",
        processor: "Snadragon 720G",
        Storage: "64GB",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBeix1aSCgAea8YhG4w3SsNWs_hzLx5KIl5YGZq5GNYUb_sjbxorigwpS4uD3Wi3B8dEeRUQ&usqp=CAc"
      },
    },
  ];

  const [color, setColor] = useState("red");
  const [search, setsearch] = useState(0);


  return (
    <div className="brands">
      {/* {brands.map(({name, model, specs,logo}) => (
             <Vote brandName={name} model={model} specs={specs} logo={logo}/>
             ))}*/}

      {/*<input
              value={color}
              style={{background: color}}
              onChange={(event) => setColor(event.target.value)}
              type ="text"
              placeholder="Enter color"
              />
              {color}*/}
      <input
        value={search}
        onChange={(event) => setsearch(event.target.value)}
        type="text"
        placeholder="search..." />

      {search}

      {/*.toLowerCase() to change all as lower case */}

      {brands.filter((brand) => brand.model.includes(search)).map(({ name, model, specs, logo, id }) => (
        <Vote key={id} brandName={name} model={model} specs={specs} logo={logo} />
      ))}

    </div>

  );
}
