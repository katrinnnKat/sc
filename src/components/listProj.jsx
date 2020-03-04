import React, {Component} from 'react';

export default class ListProj extends Component{
    constructor(props){
        super(props)
            this.state={
                img: [
                    'one',
                    'zwai',
                    'thre',
                    'four'
                ]
            }
    }
    render(){
        return(
            <div className="listProj_main">
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#main">Главная</a></li>
                    <li class="breadcrumb-item"><a href="#napr">Направления</a></li>
                    <li class="breadcrumb-item"><a href="#napr">Категории</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Список проектов</li>
                </ol>
            </nav>
            <div className="title_container">Список проектов</div>
                <div className="cards__b">
                    <div className="big-block">
                        {
                            this.state.text.map((text, id) =>
                                <div class="jumbotron">
                                    <img src="data:image/jpeg;base64,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" alt="" srcset=""/>
                                    <p class="lead">Это простой пример блока с компонентом в стиле jumbotron</p>
                                    <hr class="my-4">
                                    <p>Использются служебные классы для типографики и расстояния содержимого в контейнере большего размера.</p>
                                </hr>
                                </div>
                            )
                        }
                    </div>
            </div>
        </div>
        )
    }
}