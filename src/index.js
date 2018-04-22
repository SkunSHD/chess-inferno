import { render } from 'inferno';
import Routes from 'Routes';
import {initDevTools} from 'inferno-devtools'
import db from 'db';

initDevTools()

render(<Routes />, document.getElementById('app'));