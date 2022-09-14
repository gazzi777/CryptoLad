import React from "react";
import Content from "../Content/Contetnt";

// Тут дублирование кода тк не знал как сдеать, чтобы элементы сдвигались (поочередно) и цифра сзади менялась
// Поэтому написал такой код. Пытался сделать через .map, но не получилось 
const Posts = (props) => {
    let postsElements = props.state.map(post =>  <Content number={post.id} name={post.name} info={post.info} main={post.main}/>)
    return (   
        <div>
            {postsElements}      
        </div>
        
    )
}

export default Posts;