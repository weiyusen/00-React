import React from 'react';

const About = (props) => {
    // console.log(props);
    /**
     * {history: {…}, location: {…}, match: {…}, staticContext: undefined}
        history: {length: 2, action: 'PUSH', location: {…}, createHref: ƒ, push: ƒ, …}
        location: {pathname: '/about', search: '', hash: '', state: null}
        match: {path: '/about', url: '/about', isExact: true, params: {…}}
        staticContext: undefined
        [[Prototype]]: Object
     */
    const clickHandler = () => {
        // push()需要一个location作为参数
        props.history.replace({
            pathname:'/students/2',
            state:{name:'1111'} //location的state可以用于传内容
        })
    }
    return (
        <div>
            <div>
                <button onClick={clickHandler}>按钮</button>
                <h2>关于我们，其实是师徒4人</h2>
                <ul>
                    <li>孙悟空</li>
                    <li>猪八戒</li>
                    <li>沙和尚</li>
                    <li>唐僧</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
