
const TodoData = (props) => {

    const { todoList } = props;

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("check map:", index, item)
                return (
                    <div className={`todo-item`} key={index}>
                        <div>{item.id}: {item.name}</div>
                        <button>DELETE</button>
                    </div>)
            })}
        </div>
    )
}

export default TodoData;