import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
// 要让store生效 套一个Provider标签   Provider注入后,所有组件就都能访问到store了
// 和context很像,区别是: context可能会整很多个, 用redux的时候只需要调用一次
root.render(
    <Provider store={store}>
        <App />
    </Provider>


);
