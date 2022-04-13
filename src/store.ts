import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
    todoLength: 0,
    doneLength: 0,
});

onChange('todoLength', value => {
    console.log(state);
});


export default state;