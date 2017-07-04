# Local DEMO

### How to compile
Go to <b>root</b> folder (sdc-ui) and run: `npm run build`
This will compile all scss files and will copy generated style.css and assets folder to gen folder inside demo project. 

### How to run
Go to <b>demo</b> and run: `npm start`
This will open the default browser at port 2900.

### How to build component HTML for DEMO
<ul>
    <li>Create new HTML file for the component and put it in components folder</li>
    <li>In the top of the HTML add <div class='component'>Name of component</div></li>
    <li>Inside the HTML for each type of component add header <h3>sub component name</h3></li>
    <li>
        In order to show the HTML of the component to the user, add <b>data-code</b> attribute to the outerHTML of the component.
        This component outerHTML will be copied and will be shown highlighted below the component.
        <br>You can also use <b>data-code-ref</b> and <b>data-code-id</b> where data-code-ref is a reference to the 
        component data-code-id, the data-code-ref will be replaced by highlighted outerHTML of the component.
    </li> 
</ul>
For more info see example in <a href='components/tiles'>tiles.html</a> file

### How add the new component to router for DEMO
In index.html file (under id main-navigation) add new <li> with id equal to HTML file you created above
<br><u>Example:</u>
<div id='main-navigation'>
    <div class='title'>Components</div>    
    <ul>
        <li id='colors'>Colors</li>
        <li id='button'>Buttons</li>
        <li id='tiles'>Tiles</li>
    </ul>
</div>
