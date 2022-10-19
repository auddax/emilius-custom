import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import AddProduct from './add-product'
import EditProduct from './edit-product'
import ProductList from './product-list'

const Catalog = props => {
  const { match } = props
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/product-list`} />
			<Route path={`${match.url}/add-product`} component={AddProduct} />
			<Route path={`${match.url}/edit-product/:id`} component={EditProduct} />
			<Route path={`${match.url}/product-list`} component={ProductList} />
		</Switch>
	)
}

export default Catalog

