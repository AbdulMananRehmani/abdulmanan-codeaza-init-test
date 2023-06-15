import React from 'react'
import { Link } from 'react-router-dom'



const Tasks = () => {
    return (
        <>

            <div className="container-fluid bg-light" style={{ marginTop: '20px' }}>
                <h1 className="text-center">Codeaza Technologies Internship Initial Test</h1>
                <hr />
                <h3 className="text-center">By Abdul Manan</h3>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-3 d-flex justify-content-between mt-5 " >
                        <Link to="/taskone"> <button className="btn btn-primary mr-2">Task 1</button></Link>
                        <Link to="/tasktwo">   <button className="btn btn-secondary mr-2">Task 2</button></Link>
                        <Link to="/taskthree">   <button className="btn btn-success mr-2">Task 3</button></Link>
                        <Link to="/taskfour">   <button className="btn btn-danger">Task 4</button></Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Tasks
