import { experimentOn } from '@islavi/ng2-component-lab';



export default experimentOn('Loader')
    .group("Loader",[
      {
        id: 'Loader',
        showSource: true,
        title: 'Regular loader',
        description: 'Simple loader',       
        context: {
            showLoaderFlag: true,
            showLoaderFunc: function(){
                this.showLoaderFlag = !this.showLoaderFlag;
                setTimeout(function(){  this.showLoaderFlag = false; 
                  console.log('WTF' , this.showLoaderFlag)
                }, 3000);
            },

        },
        template: `<sdc-loader [showLoader] = "showLoaderFlag">{{showLoaderFlag}}</sdc-loader>`,
      }
    ])
      