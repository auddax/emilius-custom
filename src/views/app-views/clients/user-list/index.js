import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { API_BASE_URL } from 'configs/AppConfig';
import UserView from './UserView';

const UserList = () => {

  const history = useHistory();
  const [state, setState] = useState({
		users: null,
		userProfileVisible: false,
		selectedUser: null
	});

	useEffect(() => {
		fetch(`${API_BASE_URL}/users`)
		 .then((response) => response.json())
     .then((result) => {
      setState((prevState) => {
        return {
          ...prevState, 
          users: result,  
        }
      })
     });
	 }, []);

	const deleteUser = userId => {
		setState((prevState) => {
      return {
        ...prevState,
        users: state.users.filter(item => item.id !== userId),
      }
    })
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

  const showUserEdit = userId => {
    history.push(
      'edit-profile', 
      {  user: state.users.filter(item => item.id === userId) }
    );
  }

	const showUserProfile = userInfo => {
		setState((prevState) => {
      return {
        ...prevState,
        userProfileVisible: true,
        selectedUser: userInfo  
      }
    });
	};
	
	const closeUserProfile = () => {
		setState((prevState) => {
      return {
        ...prevState,
        userProfileVisible: false,
        selectedUser: null  
      }
    });
	}

  const { users, userProfileVisible, selectedUser } = state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div>
            <div className="font-weight-bold">{record.name}</div>
            <div className="font-weight-light">{record.email}</div>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Company',
				dataIndex: 'company',
        render: (company) => <span>{company.name}</span>,
				sorter: {
					compare: (a, b) => {
						a = a.company.name.toLowerCase();
  						b = b.company.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Website',
				dataIndex: 'website',
        render: (website) => website,
				sorter: {
					compare: (a, b) => {
						a = a.website.toLowerCase();
  						b = b.website.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
      },
			{
				title: 'City',
				dataIndex: 'address',
        render: (address) => <span>{address.city}</span>,
				sorter: {
					compare: (a, b) => {
						a = a.address.city.toLowerCase();
  						b = b.address.city.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {showUserProfile(elm)}} size="small"/>
						</Tooltip>
            <Tooltip title="Edit">
              <Button className="mr-2" onClick={()=> {showUserEdit(elm.id)}} icon={<EditOutlined />} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];

  return (
    <Card bodyStyle={{'padding': '0px'}}>
      <Table columns={tableColumns} dataSource={users} rowKey='id' />
      <UserView data={selectedUser} visible={userProfileVisible} close={()=> {closeUserProfile()}}/>
    </Card>
  )
}

export default UserList
