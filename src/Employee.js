function Employee({name,salary}){
    return(
        <div>
            <h1>This is Employee data</h1>
            <label>Name :</label>
            <span>{name}</span>
            <br/>
            <label>Salary :</label>
            <span>{salary}</span>
        </div>
    )
}
export default Employee;