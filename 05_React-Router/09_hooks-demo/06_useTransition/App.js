import React, {
    useId,
    useState, useTransition
} from 'react';
import StudentList from "./components/StudentList";


const App = () => {

    const [count, setCount] = useState(1);

    // 搞两个state，一个给input用，一个给studentList用
    const [filterWord, setFilterWord] = useState('');
    const [filterWord2, setFilterWord2] = useState('');

    // 可以生成id，不会重名
    const id = useId();
    // isPending可以记录执行状态，当执行完了就从false变成了true
    const [isPending, startTransition] = useTransition();

    const changeHandler = (e) => {
        setFilterWord(e.target.value);

        // startTransition 的回调函数中设置setState会其他的setState生效后才执行
        // 设置之后也是执行两次
        startTransition(() => {
            // 优先级变低
            setFilterWord2(e.target.value);
        });
    };

    return (
        <div>
            <h1>App</h1>
            <h3>{count}</h3>
            <button onClick={() => setCount(prevState => prevState + 1)}>点我</button>
            <hr />


            <label htmlFor={"keyword-" + id}>关键词</label>
            <input
                id={"keyword-" + id}
                onChange={changeHandler}
                value={filterWord}
                type="text" />

            {!isPending && <StudentList filterWord={filterWord2} />}

        </div>


    );
};

export default App;
