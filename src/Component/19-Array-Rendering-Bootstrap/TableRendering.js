import React from 'react'
import Table from 'react-bootstrap/Table'
function TableRendering() {
    const myTable = [
        {
          "userId": 1,
          "id": 1,
          "title": "quidem molestiae enim"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "sunt qui excepturi placeat culpa"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "omnis laborum odio"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "non esse culpa molestiae omnis sed optio"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "eaque aut omnis a"
        },
        {
          "userId": 1,
          "id": 6,
          "title": "natus impedit quibusdam illo est"
        },
        {
          "userId": 1,
          "id": 7,
          "title": "quibusdam autem aliquid et et quia"
        },
        {
          "userId": 1,
          "id": 8,
          "title": "qui fuga est a eum"
        },
        {
          "userId": 1,
          "id": 9,
          "title": "saepe unde necessitatibus rem"
        },
        {
          "userId": 1,
          "id": 10,
          "title": "distinctio laborum qui"
        },
        {
          "userId": 2,
          "id": 11,
          "title": "quam nostrum impedit mollitia quod et dolor"
        },
        {
          "userId": 2,
          "id": 12,
          "title": "consequatur autem doloribus natus consectetur"
        },
        {
          "userId": 2,
          "id": 13,
          "title": "ab rerum non rerum consequatur ut ea unde"
        },
        {
          "userId": 2,
          "id": 14,
          "title": "ducimus molestias eos animi atque nihil"
        },
        {
          "userId": 2,
          "id": 15,
          "title": "ut pariatur rerum ipsum natus repellendus praesentium"
        },
        {
          "userId": 2,
          "id": 16,
          "title": "voluptatem aut maxime inventore autem magnam atque repellat"
        },
        {
          "userId": 2,
          "id": 17,
          "title": "aut minima voluptatem ut velit"
        },
        {
          "userId": 2,
          "id": 18,
          "title": "nesciunt quia et doloremque"
        }
      ]
    return (
        <div>
            <Table striped bordered>
                <tbody>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>   
                    </tr>
                    {myTable.map((item,i) =>
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default TableRendering