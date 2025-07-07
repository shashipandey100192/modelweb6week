import React from 'react'

function Employeepage() {
    return (

        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <p className='h4'>List of Employee:</p>
                </div>
                <div className='col-12'>
                    <table class="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Employeepage