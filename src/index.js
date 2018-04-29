import { render } from 'inferno';
import Routes from 'Routes';
import { initDevTools } from 'inferno-devtools'
import 'db';
// import 'css/pure.css';

initDevTools();

render(<Routes />, document.getElementById('app'));