import React from 'react';

import formSty from '../../styles/SearchForm.module.scss'

//component
import {Selector} from './selector.js'
import {LoaderFormError} from "./LoaderFormError";

export function Form({data, promiseDate, loadings}) {
    const [loading, error] = loadings

    function getComponentSelect(){
        if (loading === false){
          return <Selector/>
        }
        else if (loading) {
            console.log('Загрузка данных');
        }

        else if (error === true) {
            return <LoaderFormError/>
        }
        return null;
    }

    return (
        <React.Fragment>
            <form className="center-items forms">
                <div className="forms__body wrapper">
                    <h2 className={formSty.title}>Критерии поиска: не установлены</h2>
                    <button
                        className={formSty.btn}
                        type={"button"}
                        onClick={promiseDate}>Заполнить форму
                    </button>
                    { getComponentSelect() }
                </div>
            </form>
        </React.Fragment>
    )
}