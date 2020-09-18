import { JetView } from "webix-jet";
import "webix/photo";



export default class testview extends JetView {
    config() {
     
        return { view:"datatable", autoConfig:true};
    }init(view){
        function DataLoader(app){
            const service = {
              data:null, 
              init(){
                  var url = "https://docs.webix.com/samples/40_serverside/01_php_vanila/server/datatable.php";
                  webix.ajax(url).then((data)=>{
                      this.data = data.json();
                  });
              },
              getData(){
                  return this.data;
              }
          };
          app.setService("DataLoader", service);
          service.init();
        }
        app.use(DataLoader);
        //get data stored in service
          view.parse(app.getService("DataLoader").getData());
      }
}
