//JSX
//fragment
import './style.css'

const MyComponent = () => {
    // const name = "khanh"; //string
    // const name = 21; //number
    // const name = true; //boolean
    // const name = undefined;
    // const name = null;
    const name = [1, 2, 3];
    // const name = {
    //     name: "khanh",
    //     age: 25
    // }
    return (
        <>
            <div>{JSON.stringify(name)} va jayce</div>
            <div>{console.log("JAYCE")}</div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>

        </>
    );
}

export default MyComponent;