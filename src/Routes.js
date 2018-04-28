import { BrowserRouter, Route, Switch } from 'inferno-router';
// source: https://reacttraining.com/react-router/web/example/url-params
// Components
import HomePage from 'components/Home.component';
import Header from 'components/Header.component';
import LoginPage from 'components/Login.component';
import VisitorsPage from 'components/Visitors.component';
import NotFoundPage from 'components/NotFound.component';


 const Routes = () => (
	 <BrowserRouter >
		 <Header>
			 <Switch>
				 <Route exact path="/" component={HomePage}/>
				 <Route path="/login" component={LoginPage} />
				 <Route path="/visitors" component={VisitorsPage} />
				 <Route component={NotFoundPage} />
			 </Switch>
		 </Header>
	 </BrowserRouter>
 );

export default Routes