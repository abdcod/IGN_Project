import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId, themeType} from './bll/themeReducer'
import {AppStoreType} from "../hw10/bll/store";
import {loadingType} from "../hw10/bll/loadingReducer";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'Light'},
    {id: 2, value: 'Blue'},
    {id: 3, value: 'Dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    // const themeId = 1

    const dispatch = useDispatch();

    let themeId = useSelector<AppStoreType, themeType>(state => state.theme)

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(id));
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId.themeId + '';
        console.log(themeId)
        // console.log(themeId.themeId);
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <div className={s.wrapper}>
                <span className={s.span}>Выберите тему</span>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes}
                    onChangeOption={change}/>
                </div>
            </div>
        </div>
    )
}

export default HW12
