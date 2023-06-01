import React from 'react';

const AdminAllusers = () => {




    return (
        <>
            <section>
                <h2 className='text-center text-capitalize fs-1'>user data</h2>

                <table className='table mt-5' >
                    <thead className='bg-dark text-light'>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>test</td>
                            <td>test@test.com</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AdminAllusers;