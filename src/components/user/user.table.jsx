import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {

    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        console.log("run useEffect 111")
        loadUser();
    }, []);

    const columns = [
        {
            title: 'id',
            dataIndex: '_id',

        },
        {
            title: 'fullName',
            dataIndex: 'fullName',
        },
        {
            title: 'email',
            dataIndex: 'email',
        }
    ];


    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUser(res.data);
    }


    console.log("run render 000")

    return (
        <Table columns={columns} dataSource={dataUser} />
    )
}

export default UserTable;