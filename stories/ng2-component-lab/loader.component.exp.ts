import { experimentOn } from '@islavi/ng2-component-lab';



export default experimentOn('Loader')
    .group("Loader",[
      {
        id: 'Small Fixed Loader',
        showSource: true,
        title: 'Regular loader',
        description: 'Simple Fixed loader',       
        context: {
            showLoaderFlag: false,
            relativeValue: true,
            showLoaderFunc: function(){
                this.showLoaderFlag = !this.showLoaderFlag;
                let vm = this;
                // setTimeout(function(){ 
                //   vm.showLoaderFlag = false; 
                // }, 1000);
            },

        },
        template: `<div style = "width:200px; height:200px; background:green; border:1px solid black;"><sdc-loader [display] = "showLoaderFlag" [size] = "'medium'" [relative] = "relativeValue"><button (click) = "showLoaderFunc()"> Show Loader {{showLoaderFlag}}</button></sdc-loader></div>`,
      },
      {
        id: 'Simple Loader',
        showSource: true,
        title: 'Regular Simple Loader',
        description: 'Simple loader',       
        context: {
            showLoaderFlag: false,
            relativeValue: false,
            showLoaderFunc: function(){
                this.showLoaderFlag = !this.showLoaderFlag;
                let vm = this;
                setTimeout(function(){ 
                  vm.showLoaderFlag = false; 
                }, 1000);
            },

        },
        template: `<sdc-loader [display] = "showLoaderFlag" [relative] = "relativeValue"><button (click) = "showLoaderFunc()"> Show Loader {{showLoaderFlag}}</button></sdc-loader>`,
      },
 
    ])
      