import React, { useEffect, useState } from "react";
import "./App.css";
import Basket from "./components/Basket.js";
import CatalogPage from "./components/CatalogPage.js";

function App() {


  const [startItems, setStartItems] = React.useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [currrentPath, setCurrrentPath] = useState("/");

  const clickTopMenuHandler = (ev) => {
    ev.preventDefault();
    let path = ev.target.getAttribute("data-route");
    console.log(`нажали для перехода ${path}`);
    const state = {};
    const title = "";
    window.history.pushState(state, title, path);
    setCurrrentPath(path);
  };
  let title = null;
  let content = null;

  switch (currrentPath) {
    case "/":
      title = "Каталог товаров";
      content = <div>Тут может быть перечень товаров</div>;
      break;
    case "/basket":
      title = "Корзина";
      content = basketPlace;
      break;
    case "/about":
      title = "О нас";
      content = <div>Тут информация о компании</div>;
      break;
    case "/react-router":
      title = "React-router";
      content = (
        <div>
          Часто используются не самописные, а сторонние системы рутинга, например{" "}
          <a href="https://reactrouter.com/" target="_blank">React Router</a>
        </div >
      );
      break;
  }

  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState('Гость');

  useEffect(() => {
    fetch("http://localhost:3000/items.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setStartItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  // const items = [ 
  //   { 
  //     uid: "86ed58db-082d-45ab-aa81-5218059349cb", 
  //     title: "Товар1", 
  //     description: "описание товара 1", 
  //     price: 1200, 
  //     qty: 1,
  //   }, 
  //   { 
  //     uid: "05542e59-7a90-4e80-bf9d-78967f272049", 
  //     title: "Товар2", 
  //     description: "описание товара 2", 
  //     price: 800, 
  //     qty: 1,
  //   }, 
  //   { 
  //     uid: "7793e4f0-fe86-47cc-98f6-e01b6beeb3af", 
  //     title: "Товар3", 
  //     description: "описание товара 3", 
  //     price: 250, 
  //     qty: 1,
  //   }, 
  // ]; 

  let basketPlace = null;

  if (error) {
    basketPlace = <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    basketPlace = <div>Загрузка...</div>;
  } else {
    basketPlace = <Basket items={startItems} />
  }


  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <ul>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/"}>
                Главная
              </a>
            </li>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/basket"}>
                Корзина
              </a>
            </li>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/about"}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/react-router"}>
                О рутинге
              </a>
            </li>
          </ul>
        </nav>

        <h1>Каталог</h1>
        <CatalogPage />
      
        <h1>Корзина</h1>
        {basketPlace}
        {/* <Basket items={items} />  */}
      </header>
      
    </div>
  );
}

export default App; 