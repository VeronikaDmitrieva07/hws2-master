import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => { // запустить часы // сохранить ид таймера
        if (timerId) clearInterval(timerId)
        const intervalId = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(intervalId)
    }

    const stop = () => { // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        if (timerId) clearInterval(timerId)
        setTimerId(undefined)
    }

    const onMouseEnter = () => {
        setShow(true) // показать дату если наведена мышка
    }

    const onMouseLeave = () => { //  спрятать дату если мышка не наведена
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString('ru-Ru') || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)
    const stringDate = date.toLocaleDateString('ru-Ru') || <br/> // день.месяц.год (01.02.2022) //

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = new Intl.DateTimeFormat('en-EN', {weekday: 'long'}).format(date) || <br/> // пишут студенты
    const stringMonth = new Intl.DateTimeFormat('en-EN', {month: 'long'}).format(date) || <br/> // пишут студенты

    const isTimerRunning = timerId !== undefined

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={isTimerRunning} //  задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!isTimerRunning} //  задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
