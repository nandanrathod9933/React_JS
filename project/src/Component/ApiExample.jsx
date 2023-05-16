// import React, { useEffect, useState } from 'react';

// const ApiExample = () => {
//     // const [data, setdata] = useState()
//     const [users, setUsers] = useState()
//     const [loading, setLoading] = useState(false)
//     // useEffect(() => {
//     //     fetch("https://justjayapi.000webhostapp.com/allusers").then((res) => { return res.json() }).then((result) => {
//     //         console.log(result);
//     //         setdata(result)

//     //     })
//     // })
//     useEffect(() => {
//         fetchUserData()
//     }, [])

//     const fetchUserData = async () => {
//         const Response = await fetch("https://justjayapi.000webhostapp.com/allusers").then(response => {
//             return response.json()
//         }).then(data => {
//             setUsers(data)
//             setLoading(true)
//         })
//     }

//     // const ApiData = Object.entries(users).map((data) => {
//     //     return console.log(data);
//     // })


//     let ApiData = ""
//     if (loading) {
//         // ApiData = Object.entries(users.Data).map(([key, value], index) => {
//         //     return <li key={key}>{value.username}</li>
//         // })
//         ApiData = Object.entries(users.Data).map((res) => {
//             return <li key={res[0]}>{res[1].username}</li>
//         })
//     } else {
//         ApiData = <>no data</>
//     }


//     return (
//         <>
//             {/* {JSON.stringify(data)}

//             {
//                 data.map((data) => {
//                     console.log(data);

//                 })
//             } */}
//             {ApiData}
//         </>
//     );
// };

// export default ApiExample;



// 




import React, { useEffect, useState } from 'react';

const ApiExample = () => {
    const [apidata, setApiData] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        storeData()
    }, [])

    const storeData = async () => {
        const nandan = await fetch("https://jsonplaceholder.typicode.com/todos").then(response => {
            return response.json()
        }).then(data => {
            // console.log(data);
            setApiData(data)
            setLoading(true)
        })
    }

    let fetchUserData = ""
    if (loading) {
        fetchUserData = Object.entries(apidata).map(([key, value]) => {
            // return console.log(result);
            return <li key={key}>{value.title}</li>
        })
    } else {
        fetchUserData = ""
    }

    return (
        <>
            {fetchUserData}
        </>
    );
};

export default ApiExample;