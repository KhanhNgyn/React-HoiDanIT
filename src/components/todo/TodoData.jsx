
const TodoData = (props) => {

    const { todoList } = props;

    console.log("check props:", todoList)
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("check map:", index, item)
                return (
                    <div className="todo-item">
                        <div>{item.id}: {item.name}</div>
                        <button>DELETE</button>
                    </div>)
            })}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;