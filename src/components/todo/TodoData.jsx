
const TodoData = (props) => {

    const { todoList, deleteTodo } = props;

    const handleClick = (id) => {
        deleteTodo(id)
    }

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("check map:", index, item)
                return (
                    <div className={`todo-item`} key={index}>
                        <div>{item.id}: {item.name}</div>
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClick(item.id)}>DELETE</button>
                    </div>)
            })}
        </div>
    )
}

export default TodoData;