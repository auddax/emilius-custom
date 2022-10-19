import { Form, Button, Input, Row, Col, message, } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import { useHistory } from "react-router-dom";
import InnerAppLayout from 'layouts/inner-app-layout';
import { API_BASE_URL } from 'configs/AppConfig';

const SettingContent = (props) => {

  const [ userInfo ] = props.userInfo;
  const history = useHistory();

	let state = {
		name: userInfo.name,
		email: userInfo.email,
		userName: userInfo.username,
		phoneNumber: userInfo.phone,
		website: userInfo.website,
		address: `${userInfo.address?.street}, ${userInfo.address?.suite}`,
		city: userInfo.address?.city,
		postcode: userInfo.address?.zipcode
	};

	const updateUser = async (userId) => {

		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Accept", "application/json");

		const raw = JSON.stringify({
			"id": userInfo.id,
			"name": state.name,
			"username": state.userName,
			"email": state.email,
			"address": {
				"street": state.address.split(',')[0],
				"suite": state.address.split(',')[1],
				"city": state.city,
				"zipcode": state.postcode,
				"geo": userInfo.geo,
			},
			"phone": state.phoneNumber,
			"website": state.website,
			"company": userInfo.company,
		});

		const requestOptions = {
			method: 'PUT',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		console.log(raw);

		try {
			const response = await fetch(`${API_BASE_URL}/users/${userId}`, requestOptions);
			response.ok && console.log('User info successfully updated!');
		} catch(error) {
			console.error(error);
		}
	}

	const onFinish = async values => {
		const key = 'updatable';
		message.loading({ content: 'Updating...', key });
    state = {
      name: values.name,
      email: values.email,
      userName: values.userName,
      phoneNumber: values.phoneNumber,
      website: values.website,
      address: values.address,
      city: values.city,
      postcode: values.postcode,
    };

		await updateUser(userInfo.id);
	
		setTimeout(() => {
			message.success({ content: 'Done!', key, duration: 2 });
      history.push('user-list');
		}, 1000);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	const { name, email, userName, phoneNumber, website, address, city, postcode } = state;

	return (
		<div>
			<div className="mt-4">
				<Form
					name="basicInformation"
					layout="vertical"
					initialValues={
						{ 
							'name': name,
							'email': email,
							'username': userName,
							'phoneNumber': phoneNumber,
							'website': website,
							'address': address,
							'city': city,
							'postcode': postcode
						}
					}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Row>
						<Col xs={24} sm={24} md={24} lg={16}>
							<Row gutter={ROW_GUTTER}>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Name"
										name="name"
										rules={[
											{
												required: true,
												message: 'Please input your name!',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Username"
										name="username"
										rules={[
											{
												required: true,
												message: 'Please input your username!'
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Email"
										name="email"
										rules={[{ 
											required: true,
											type: 'email',
											message: 'Please enter a valid email!' 
										}]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Phone Number"
										name="phoneNumber"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Website"
										name="website"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24}>
									<Form.Item
										label="Address"
										name="address"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="City"
										name="city"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Post code"
										name="postcode"
									>
										<Input />
									</Form.Item>
								</Col>
							</Row>
							<Button type="primary" htmlType="submit">
								Save Change
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</div>
	)
}

const UserEdit = ({ location }) => {
  const { user } = location.state
  return (
    <InnerAppLayout
      mainContent={<SettingContent userInfo={user} />}
    />
  )
}

export default UserEdit
