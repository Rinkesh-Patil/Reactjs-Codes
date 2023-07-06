export function Mybutton() {
    const dojob = ()=> alert("hello");
    return(
        <div>
            <button onClick ={dojob}>get message</button>
        </div>
    )
}