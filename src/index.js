import { render } from 'inferno';
import Routes from 'Routes';
import {initDevTools} from 'inferno-devtools'
initDevTools()

render(<Routes />, document.getElementById('app'));