import React, { useState } from "react";
import styles from "./Paginator.module.css";

// Відображення номерів сторінок
let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    // інформація, про загальну к-сть сторінок
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    // створюємо масив сторінок
    let pages = [];
    // формуємо масив сторінок
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // к-сть порцій сторінок юзерів
    const portionCount = Math.ceil(pagesCount / portionSize);
    // локальний стейт - зміна номера порції
    const [portionNumber, setPortionNumber] = useState(1);
    // ліва межа порції
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    // права межа порції
    const rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        {/* Кнопка - попередня порція юзерів */}
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
        }

        {/* сформовуємо рядок з номерацією сторінок */}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span
                    // виділяє активну сторінку
                    className={currentPage === p && styles.selectedPage}
                    key={p}
                    // перемикає сторінку з юзерами
                    onClick={(e) => { onPageChanged(p) }}>
                    {p}
                </span>
            })}

        {/* Кнопка - наступна порція юзерів */}
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>

}

export default Paginator;