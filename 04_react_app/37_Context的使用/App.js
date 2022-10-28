import React from 'react'
import A from './Components/A'
import B from './Components/B'
import TestContext from './store/testContext'

/**
*     Xxx.Provider
*       - 表示数据的生产者，可以使用它来指定Context中的数据
*       - 通过value来指定Context中存储的数据，
*           这样一来，在该组件的所有的子组件中都可以通过Context来访问它所指定数据
*
*   当我们通过Context访问数据时，他会读取离他最近的Provider中的数据，
*       如果没有Provider，则读取Context中的默认数据
 */
export default function App() {
    return (
        <>
            {/* 如果没有Provider，则读取Context中的默认数据 一般不这么做 */}
            {/* 如果A组件不被Xxx.Provider包裹，那么A组件所显示的数据就是store文件夹里定义时的数据了 */}
            <A></A>
            <TestContext.Provider value={{ name: 'ls', age: 11 }}>
                <TestContext.Provider value={{ name: 'vv', age: 44 }} >
                    {/* 就近原则 */}
                    <B></B>
                </TestContext.Provider>
                <B></B>
            </TestContext.Provider>
        </>
    )
}
