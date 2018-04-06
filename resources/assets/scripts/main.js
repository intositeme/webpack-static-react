// import external dependencies
import 'jquery';
import 'bootstrap';

// Import everything from autoload
import "./autoload/**/*"

import ReactHabitat                 from 'react-habitat';
// import HelloWorld           from './components/HelloWorld';

class MyApp extends ReactHabitat.Bootstrapper {
    constructor(){
        super();

        // Create a new container builder:
        const builder = new ReactHabitat.ContainerBuilder();

        // Register a component:
        // builder.register(HelloWorld).as('HelloWorld');

        // Or register a component to load on demand asynchronously:
        /* eslint-disable */
        builder.registerAsync(() => System.import('./components/HelloWorld')).as('HelloWorld');
        /*builder.registerAsync(() => new Promise((resolve) => {
            require.ensure(['./components/HelloWorld'], () => {
                resolve(require('./components/HelloWorld'));
            });
        })).as('HelloWorld');*/
        /* eslint-enable */
        // Finally, set the container:
        this.setContainer(builder.build());
    }
}

export default new MyApp()

