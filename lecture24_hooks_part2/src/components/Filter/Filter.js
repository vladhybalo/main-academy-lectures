import React, { useEffect, useState } from "react";

import "./Filter.css";

import Arrow from './Arrow.svg';

const list = [{id:2, text: 'Mercorne', number: 170}, {id:1, text: 'Квартопрен', number: 120}];

const Filter = ({header, initVisible = true, saveCheckedItems = () => {}}) => {
    const [visible, setVisible] = useState(initVisible);
    // const [selectedFilters, setSelectedFilters] = useState([]); // {}, in O(n), delete O(n)
    const [selectedFilters, setSelectedFilters] = useState({}); // {}, in O(1), delete O(1)

    const toggleVisibility = () => setVisible(!visible);

    useEffect(() => {
        saveCheckedItems(selectedFilters);
    }, [selectedFilters])

    return (
        <div>
            <div className="filter-header">
                <p className="header-text">
                    {header}
                </p>
                <img 
                    className={!visible ? "header-img" : undefined}
                    src={Arrow} 
                    onClick={toggleVisibility}
                />
            </div>
            {
                visible && <div>
                    {list.map(({text, number, id}) => {
                        const toggleCheckbox = () => {
                            if([id] in selectedFilters) {
                                const filters = {...selectedFilters};

                                delete filters[id];

                                setSelectedFilters(filters);
                            } else {
                                setSelectedFilters({
                                    ...selectedFilters,
                                    [id]: null
                                });
                            }
                        };

                        return (
                            <label key={id} className="filter-item" >
                                <input id={'filter-item' + id} type="checkbox" onChange={toggleCheckbox}/>
                                    <span className="filter-item-text">
                                        {text}
                                    </span>
                                    <span className="filter-item-number">
                                        ({ number })
                                    </span>
                            </label>
                        )
                    })}
                </div>
            }
        </div>
    )
};

export default Filter;