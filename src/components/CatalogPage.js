import React, { useState } from 'react'

import "./css/CatalogPage.css";

const items = [
    {
        uid: "86ed58db-082d-45ab-aa81-5218059349cb",
        title: "Товар1",
        description: "описание товара 1",
        price: 1200,
        qty: 1,
        rating: 2,
    },
    {
        uid: "05542e59-7a90-4e80-bf9d-78967f272049",
        title: "Товар2",
        description: "описание товара 2",
        price: 800,
        qty: 1,
        rating: 1,
    },
    {
        uid: "7793e4f0-fe86-47cc-98f6-e01b6beeb3af",
        title: "Товар3",
        description: "описание товара 3",
        price: 250,
        qty: 2,
        rating: 2,
    },
    {
        uid: "cdd8a823-a96e-4d91-90bf-fa4f96aa1bb1",
        title: "Товар4",
        description: "описание товара 4",
        price: 3200,
        qty: 1,
        rating: 5,
    },
    {
        uid: "26c4c669-7a50-4b8a-85dd-8d038f0ee30a",
        title: "Товар5",
        description: "описание товара 5",
        price: 450,
        qty: 1,
        rating: 3,
    },
    {
        uid: "ab8c9640-4033-4ac0-8d46-98af19b76245",
        title: "Товар6",
        description: "описание товара 6",
        price: 5000,
        qty: 2,
        rating: 4,
    },
];

const CatalogPage = () => {

    const [sort, setSort] = React.useState({ field: null });
    const [view, setView] = React.useState("table");

    const useViewTable = () => setView("table");
    const useViewList = () => setView("list");

    const usePriceDesc = () => setSort({ field: "price", direction: "DESC" });
    const usePriceAsc = () => setSort({ field: "price", direction: "ASC" });
    const useRatingDesc = () => setSort({ field: "rating", direction: "DESC" });
    const useRatingAsc = () => setSort({ field: "rating", direction: "ASC" });

    const changeSortPrice = () => {
        const field = "price";
        const direction = sort.direction == "ASC" ? "DESC" : "ASC";
        setSort({ field, direction });
    };

    const changeSortRating = () => {
        const field = "rating";
        const direction = sort.direction == "ASC" ? "DESC" : "ASC";
        setSort({ field, direction });
    };




    return (
        <div className='CatalogPage'>
            <div className='CatalogPageHeader'>
                <h2 className='CatalogPage_h2'>Каталог</h2>
                <span className='CatalogPage_sort_item'>
                    <a href='#' className='CatalogPage_link' onClick={changeSortPrice}>
                        По цене
                        {sort.field == 'price' && sort.direction == 'ASC' ? <span>↑</span> :
                            null}
                        {sort.field == 'price' && sort.direction == 'DESC' ? <span>↓</span> :
                            null}
                    </a>
                </span>
                <span className='CatalogPage_sort_item'>
                    <a href='#' className='CatalogPage_link' onClick={changeSortRating}>
                        По популярности
                        {sort.field == 'rating' && sort.direction == 'ASC' ? <span>↑</span> :
                            null}
                        {sort.field == 'rating' && sort.direction == 'DESC' ? <span>↓</span> :
                            null}
                    </a>
                </span>
                <span className='CatalogPage_sort_item'>
                    Вид: <a href='#' className='CatalogPage_link' onClick=
                        {useViewTable}>Таблица</a> | <a href='#' className='CatalogPage_link' onClick=
                            {useViewList}>Список</a>
                </span>
            </div>

            <div className={'Catalog_items Catalog_items__' + view}>
                {items.sort((a, b) => {

                    if (sort.direction == 'ASC') return a[sort.field] - b[sort.field]
                    if (sort.direction == 'DESC') return b[sort.field] - a[sort.field]

                }).map(item => (
                    <div className='CatalogProduct'>
                        <img src='/catalog_product.png' className='CatalgProduct_image' />

                        <h3>{item.title.slice(0, 10)}</h3>

                        <div className='CatalgProduct_price'>
                            {item.price}₽
                        </div>
                        <div className='CatalgProduct_description'>
                            {item.description.slice(0, 20)}
                        </div>

                        <div className='CatalgProduct_star' dangerouslySetInnerHTML={{
                            __html:
                                '&starf;'.repeat(item.rating)
                        }} />

                        <a href='#' className='btn CatalgProduct_addtobasket' onClick={ev => {
                            ev.preventDefault(); alert('В корзину')
                        }}>
                            В корзину
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}



export default CatalogPage