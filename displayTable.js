import React from 'react'
import MaterialTable from 'material-table'

export const Table = () => {

    const data = [
        { name: "Kartheek", age: 16 },
        { name: "Chetan", age: 15 },
        { name: "Vikas", age: 17 }
    ]
    const columns = [
        {
            title: "Name", field: "name"
        },
        {
            title: "Age", field: "age"
        }
    ]

    return (
        <div>
            <MaterialTable title="Cassandra Clusters Application"
                data={data}
                columns={columns}
            />
        </div>
    )
}

// function displayTable() {
//     console.log(/*import tables*/);

//     /**
//      * axios.get(insert link here)
//      * import tables
//      * material table
//      * sort information
//     */
// }