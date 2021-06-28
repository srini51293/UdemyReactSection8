import './Display.css'
const Display=(props)=>{
    return(
        <div className="border-display" >
            {props.username} ({props.age} years old)
        </div>
    );
};
export default Display;