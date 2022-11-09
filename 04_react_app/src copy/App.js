import React from 'react';
import { useGetStudentsQuery } from './store/studentApi';
import StudentList from './components/StudentList'

const App = () => {
    const {data:stus, isSuccess, isLoading} = useGetStudentsQuery()
    return (
        <div>
            {isLoading && <p>数据加载中</p>}
            {/* {isSuccess && <StudentList stus={data.data}></StudentList>} */}
            {/* 可以在api里通过transformErrorResponse对响应数据进行转换，这样就不用两层data了 */}
            {isSuccess && <StudentList stus={stus}></StudentList>}
        </div>
    );
};
export default App;
