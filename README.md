# SDC-UI Style-Guide and Components

This project aims to create a unified UI styled components for multiple development teams who work on the same web-based applications. 
This repository contains the definition of all the basic widgets and reusable controllers. 

	
### Usage

#### Link the library's CSS file
###### SCSS
```scss
@import "path_to_node_modules/sdc-ui/css/style.css";
```
###### HTML
```html
<link rel="stylesheet" href="path_to_node_modules/sdc-ui/css/style.css">
```
###### As Module (Using loading tool, i.e. [Webpack](https://webpack.github.io/))
```js
import 'sdc-ui/css/style.css';
```

#### React Code examples
###### Importing particular component
```js
import Button from 'sdc-ui/lib/react/Button.js';

// inside component rendering...
render(){
	return (
		<Button>I am a Button</Button>
	);
}
```

```js
import {Button} from 'sdc-ui/lib/react';

// inside component rendering...
render(){
	return (
		<Button>I am a Button</Button>
	);
}
```

```js
import SDCUI from 'sdc-ui';

// inside component rendering...
render(){
	return (
		<SDCUI.React.Button>I am still a Button</SDCUI.React.Button>
	);
}
```
 

### Having some trouble? Have an issue?
For bugs and issues, please use the [issues](https://github.com/onap-sdc/sdc-ui/issues) page


### How to Contribute
**Contribution can be made only by following these guide lines**
* This project combines both `React` & `Angular` framework libraries. Hence, every change in the basic HTML files stucture, must be followed by changes on the frameworks files accordingly.
* There will be no any 3rd party UI framework imported (i.e. `Bootstrapp`, `Material`, `Foundation`... etc.)
* Every pull requests will be under feature/branch and only then will be merged into master. 


