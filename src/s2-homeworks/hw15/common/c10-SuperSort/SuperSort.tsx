import React from 'react'

// добавить в проект иконки и импортировать
import downIcon from './../../images/down.png'
import upIcon from './../../images/up.png'
import noneIcon from './../../images/down_up.png'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    else return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
          <img
              id={id + '-icon-' + sort}
              src={icon}
              height="25"
              alt="icon"
          />
        </span>
    )
}

export default SuperSort
