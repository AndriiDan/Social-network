import React from "react";
import styles from "./Paginator.module.css";

// Відображення номерів сторінок
let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {

    // інформація, про загальну к-сть сторінок
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    // створюємо масив сторінок
    let pages = [];
    // формуємо масив сторінок
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {/* сформовуємо рядок з номерацією сторінок */}
            {pages.map(p => {
                return <span
                    // виділяє активну сторінку
                    className={currentPage === p && styles.selectedPage}
                    // перемикає сторінку з юзерами
                    onClick={() => { onPageChanged(p) }}>
                    {p}
                </span>
            })}
        </div>
    </div>

}

export default Paginator;