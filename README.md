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
### Running storybook
The components in this library are displayed via [storybook](https://github.com/storybooks/storybook). Head to [http://onap-sdc.github.io/sdc-ui](http://onap-sdc.github.io/sdc-ui) to see the components that are in `master`.

While developing, just run `npm run storybook` in your terminal to launch a local storybook server where you can see your changes. For deploying storybook to your own fork repository, refer to the guides section below.

### Useful guides
[Adding a new component](https://github.com/onap-sdc/sdc-ui/wiki/Adding-a-new-component)

[Deploying storybook to a fork's github pages](https://github.com/onap-sdc/sdc-ui/wiki/Deploying-storybook-to-a-fork's-github-pages)
 
### Having some trouble? Have an issue?
For bugs and issues, please use the [issues](https://github.com/onap-sdc/sdc-ui/issues) page

### How to Contribute
**Contribution can be made only by following these guide lines**
* This project combines both `React` & `Angular` framework libraries. Hence, every change in the basic HTML files structure, must be followed by changes on the frameworks files accordingly (under `src/react` and `src/angular`).
* There will be no any 3rd party UI framework imported (i.e. `Bootstrap`, `Material`, `Foundation`... etc.).
* Contribution is done in the [GitHub Standard Fork & Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962). Contributions submitted not in this format and guidelines will not be considered.


