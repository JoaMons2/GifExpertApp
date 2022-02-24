import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {


    const [categories, setCategories] = useState(['Pikachu', 'Timon', 'Pumba']);

    // const handleAdd = () => {
    //     //setCategories(['HunterXHunder', ...categories]);
    //     setCategories( cats => [ ...cats, 'HunterXHunter'] );
    // }

    return (
    <>
        <h2>GiftExpertApp</h2>
        <AddCategory />
        <hr />

        <ol>
            {
                categories.map( category => {
                    return <li key={ category }> {category } </li>
                })
            }
        </ol>
    </>

    );
}
