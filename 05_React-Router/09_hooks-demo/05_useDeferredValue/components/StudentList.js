import React from 'react';

const STU_DATA = [];

for(let i=1; i<101; i++){
    STU_DATA.push('学生'+i);
}

const StudentList = (props) => {
    // 过滤数组
    const stus = STU_DATA.filter(item => item.indexOf(props.filterWord) !== -1);

    // 人为调慢StudentList的速度
    const begin = Date.now();
    while (1){
        if(Date.now() - begin > 3000){
            break;
        }
    }

    return (
        <ul>
            {
                stus.map(item => <li key={item}>{item}</li>)
            }
        </ul>
    );
};
// 还需要用memo包起来
export default React.memo(StudentList);
