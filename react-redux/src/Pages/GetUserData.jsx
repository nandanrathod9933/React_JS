import React from 'react';

const GetUserData = () => {
    return (
        <div>
            nnnn
        </div>
    );
};

export default GetUserData;


// // import React from 'react';
// // import { useSelector } from 'react-redux';
// // import { selectUser } from "./../Reducer/users";
// // import HeaderComponent from '../CommonCompo/HeaderCompo';

// // const GetUserData = () => {
// //     const users = useSelector((state) => state.users.product);
// //     console.log("🚀 ~ GetUserData ~ users:", users);

// //     return (
// //         <>
// //             <HeaderComponent />

// //         </>
// //     );
// // };

// // export default GetUserData;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectUser } from "./../Reducer/users";
// import HeaderComponent from '../CommonCompo/HeaderCompo';

// const GetUserData = () => {
//     const users = useSelector((state) => state.users.product);
//     console.log("🚀 ~ GetUserData ~ users:", users);

//     return (
//         <>
//             <HeaderComponent />
//             <div>
//                 <table className='table'>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>title</th>
//                             <th>brand</th>
//                             <th>description</th>
//                             <th>category</th>
//                             <th>price</th>
//                             <th>discountPercentage</th>
//                             <th>rating</th>
//                             <th>stock</th>
//                             <th>image</th>
//                             {/* Add more columns as needed */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user) => ( // Map over the users array
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.title}</td>
//                                 <td>{user.brand}</td>
//                                 <td>{user.description}</td>
//                                 <td>{user.category}</td>
//                                 <td>{user.price}</td>
//                                 <td>{user.discountPercentage}%</td>
//                                 <td>{user.rating}</td>
//                                 <td>{user.stock}</td>
//                                 <td><img src={user.thumbnail} alt="" /></td>
//                                 {/* Add more columns as needed */}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div >
//         </>
//     );
// };

// export default GetUserData;

