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
    return (
        <div>
            <div>
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
