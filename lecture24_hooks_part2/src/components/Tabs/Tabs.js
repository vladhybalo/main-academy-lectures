import React, { useState } from "react";

import './Tabs.css';

const tabsConfig = [
    {id: '1', header: 'Описание', content: `1Легкий удобный нож с клинком, имеющим пологие вогнутые линзовидные спуски на две трети ширины клинка, образующие тонкое, прекрасно режущее лезвие толщиной около 0,6 мм в районе подводов. `,},
    {id: '2', header: 'Характеристика', content: `2Легкий удобный нож с клинком, имеющим пологие вогнутые линзовидные спуски на две трети ширины клинка, образующие тонкое, прекрасно режущее лезвие толщиной около 0,6 мм в районе подводов. `,},
    {id: '3', header: 'Отзывы', content: `3Легкий удобный нож с клинком, имеющим пологие вогнутые линзовидные спуски на две трети ширины клинка, образующие тонкое, прекрасно режущее лезвие толщиной около 0,6 мм в районе подводов. `,},
    {id: '4', header: 'Доставка', content: `4Легкий удобный нож с клинком, имеющим пологие вогнутые линзовидные спуски на две трети ширины клинка, образующие тонкое, прекрасно режущее лезвие толщиной около 0,6 мм в районе подводов. `,},
]

const Tabs = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="tabs-wrapper">
            <div className="tabs-header">
                {tabsConfig.map(({id, header}, i) => {
                    const className = i === index ? "tab-item active" : 'tab-item';
                    const tabHeaderClick = () => {setIndex(i);console.log('i')};

                    return (
                        <p className={className} key={id} onClick={tabHeaderClick}>
                            {header}
                        </p>
                    )
                })}
            </div>
            <div className="tabs-content">
                {tabsConfig[index].content}
            </div>
        </div>
    )
};

export default Tabs;