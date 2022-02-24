import React, { useState } from 'react';

export const GiftExpertApp = () => {

    //const categories = ['Pikachu', 'Timon', 'Pumba'];
    const [categories, setCategories] = useState(['Pikachu', 'Timon', 'Pumba']);

    const handleAdd = () => {
        setCategories(['HunterXHunder', ...categories]);
    }

    return (
    <>
        <h2>GiftExpertApp</h2>
        <hr />

        <button>Agregar</button>

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
