# SDC-UI Style-Guide and Components

This project aims to create a unified UI styled components for multiple development teams who work on the same web-based applications. 
This repository contains the definition of all the basic widgets and reusable controllers. 

	
### Usage

#### Link the library's CSS file
There are several options to link to sdc-ui CSS file:

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
###### Angular CLI projects
You can add this line to style.css file:
```js
@import "../node_modules/sdc-ui/css/style.css";
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
###### Importing particular component from the react library
```js
import {Button} from 'sdc-ui/lib/react';

// inside component rendering...
render(){
	return (
		<Button>I am a Button</Button>
	);
}
```
###### Importing the entire library
```js
import SDCUI from 'sdc-ui';

// inside component rendering...
render(){
	return (
		<SDCUI.React.Button>I am still a Button</SDCUI.React.Button>
	);
}
```

#### Using the library in Angular (2-5)
###### Add the library to your module
```js
  import { SdcUiComponentsModule, SdcUiComponents } from 'sdc-ui/lib/angular';

  @NgModule({
	declarations: [
	  AppComponent
	],
	imports: [
	  BrowserModule,
	  FormsModule,
	  HttpModule,
	  SdcUiComponentsModule
	],
	providers: [
		SdcUiComponents.ModalService
	],
	bootstrap: [AppComponent]
  })
  export class AppModule { }
```	


### Running storybook
The components in this library are displayed via [storybook](https://github.com/storybooks/storybook). Head to [http://onap-sdc.github.io/sdc-ui](http://onap-sdc.github.io/sdc-ui) to see the components that are in `master`.

While developing, just run `npm run storybook` in your terminal to launch a local storybook server where you can see your changes. For deploying storybook to your own fork repository, refer to the guides section below.


### Running component-lab
To see angular components in design run: npm run lab


### Useful guides
[Adding a new component](https://github.com/onap-sdc/sdc-ui/wiki/Adding-a-new-component)

[Deploying storybook to a fork's github pages](https://github.com/onap-sdc/sdc-ui/wiki/Deploying-storybook-to-a-fork's-github-pages)
 
### Having some trouble? Have an issue?
For bugs and issues, please use the [issues](https://github.com/onap-sdc/sdc-ui/issues) page

### How to Contribute
**Contribution can be made only by following these guide lines**
* This project combines both `React` & `Angular` framework libraries. Hence, every change in the basic HTML files structure, must be followed by changes on the frameworks files accordingly (under `src/react` and `src/angular`).
* There will be no any 3rd party UI framework imported (i.e. `Bootstrap`, `Material`, `Foundation`... etc.).
* Contribution are done only by the [contribution guide](https://github.com/onap-sdc/sdc-ui/wiki/Contribution-guide). Contributions submitted not in this format and guidelines will not be considered.
