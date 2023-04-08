import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState('');
    const [text, setText] = useState('');
    const [info, setInfo] = useState('');
    const [image, setImage] = useState('');
    const [disabledButton, setDisabledButton] = useState<boolean>(false)
    // const [disabledtrueButton, setDisableTrueButton] = useState<boolean>(false)
    // const [disabledFalseButton, setDisableFalseButton] = useState<boolean>(false)
    // const [disabledUndefinedButton, setDisableUndefinedButton] = useState<boolean>(false)
    // const [disabledNullButton, setDisableNullButton] = useState<boolean>(false)

    const send = (x?: boolean | null) => () => {
        setDisabledButton(true);
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://samurai.it-incubator.io/api/3.0/homework/test';

        // if (x === true){
        //     setDisableTrueButton(true)
        // } else if (x === false) {
        //     setDisableFalseButton(true)
        // } else if (x === undefined) {
        //     setDisableUndefinedButton(true)
        // } else if (x === null) {
        //     setDisableNullButton(true)
        // }

        setCode('');
        setImage('');
        setText('');
        setInfo('...loading');
        axios
            .post(url, {success: x})
            .then((res) => {
//
                setDisabledButton(false);
                // setDisableTrueButton(false);
// console.log(res);
                setCode('Код 200!')
                setImage(success200)
                setText("...всё ок)");
                setInfo('код 200 - обычно означает что скорее всего всё ок)');

            })
            .catch((e) => {
            // console.log(e);
//
                setDisabledButton(false);
                if (e.message === 'Request failed with status code 400') {
                    // setDisableUndefinedButton(false)
                    setCode('Ошибка 400')
                    setImage(error400)
                    setText('Ты не отправил success в body вообще!');
                    setInfo('ошибка 400 - обычно означает что скорее всего фронт отправил что-то не то на бэк!');
                } else if (e.message === 'Request failed with status code 500') {
                    // setDisableFalseButton(false)
                    setCode('Ошибка 500');
                    setImage(error500);
                    setText('эмитация ошибки на сервере');
                    setInfo('ошибка 500 - обычно означает что что-то сломалось на сервере, например база данных)');
                } else {
                    // setDisableNullButton(false)
                    setCode('Error')
                    setImage(errorUnknown)
                    setText('Network Error')
                    setInfo('AxiosError');
                }
            }).finally(() =>{

        })
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        disabled={disabledButton}
                        // дописать

                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={disabledButton}

                        // дописать

                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        disabled={disabledButton}

                        // дописать

                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={'secondary'}
                        disabled={disabledButton}
                        // дописать

                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>
                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
