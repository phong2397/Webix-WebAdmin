import { JetView,plugins } from "webix-jet";
import { persons } from "models/person";
import OrderView from "views/order";
import PersonsView from "views/person";


export default class DataView extends JetView {
	config() {
		return {
			cols:[{type:"wide", margin:0, padding:{ top:0, bottom:0, right:0, left:0 },
rows: [
	{
		type:"header", template:"Detail Info"
	},
	{
		view: "list",
		localId: "list",
		css: "persons_list",
		type: {
			template: obj => `
<div class="col-sm-3" >  		
<div class="text">
<span class="name" >Now Address:</span> 
<span class="text1" >${obj.customerInfo.nowAddress}</span> 
</div>
<div class="text">
<span class="name" >Now Address Location:</span> 
<span class="text1" >${obj.customerInfo.nowAddressLocation}</span> 

</div>
<div class="text">
<span class="name" >ZaloId:</span> 
<span class="text1" >${obj.customerInfo.zaloId}</span> 
</div>
<div class="text">
<span class="name" >FaceBookId:</span> 	
<span class="text1" >${obj.customerInfo.faceBookId}</span> 

</div>
<div class="text">
<span class="name" >whatsApp ID:</span> 	
<span class="text1" >${obj.customerInfo.whatsAppId}</span> 

</div>
<div class="text">
<span class="name" >Tax Number:</span> 	
<span class="text1" >${obj.customerInfo.taxNumber}</span> 

</div>
</div>

<div class="col-sm-3" ><div class="text">
<span class="name" >Career:</span> 
<span class="text1" >${obj.customerInfo.career}</span> 

</div>
<div class="text">
<span class="name" >Company Location:</span> 
<span class="text1" >${obj.customerInfo.companyLocation}</span> 

</div>	
<div class="text">
<span class="name" >Company Address:</span> 
<span class="text1" >${obj.customerInfo.companyAddress}</span> 

</div>
<div class="text">
<span class="name" >Company Phone:</span> 
<span class="text1" >${obj.customerInfo.companyPhone}</span> 

</div>
<div class="text">
<span class="name" >Company Name:</span> 	
<span class="text1" >${obj.customerInfo.companyName}</span> 

</div>

</div>

<div class="col-sm-3" >			
<div class="text">
<span class="name">Sex:</span> 
<span class="text1" >${obj.customerInfo.sex}</span> 

</div>
<div class="text">
<span class="name">Bank:</span> 
<span class="text1" >${obj.customerInfo.cardName}</span> 

</div>

<div class="text">
<span class="name">Education:</span>  
<span class="text1" >${obj.customerInfo.education}</span>   

</div>
<div class="text">
<span class="name" >Salary:</span> 
<span class="text1" >${obj.customerInfo.salary}</span> 

</div>			
<div class="text">
<span class="name" >Email:</span> 	
<span class="text1" >${obj.customerInfo.mbEmail}</span> 

</div>
			   </div>

<div class="col-sm-3" >
<div class="text">
<span class="name" >Marry Status:</span>  
<span class="text1" >${obj.customerInfo.marryStatus}</span> 

</div>			
<div class="text">
<span class="name" >Live Length:</span> 
<span class="text1" >${obj.customerInfo.liveLength}</span> 

</div>
<div class="text">
<span class="name" >ChildCount:</span> 
<span class="text1" >${obj.customerInfo.childCount}</span> 

</div>
<div class="text">
<span class="name" >Birth Date:</span> 
<span class="text1" >${obj.customerInfo.birthDate}</span> 

</div>
<div class="text">
<span class="name" >Birth Place:</span> 	
<span class="text1" >${obj.customerInfo.birthPlace}</span> 

</div>
</div>
`,
			height: 450
		},

	},

	{
		type: "header", template: "Emergency Contacts"
	},
		{
		view: "list",
		localId: "list1",
		type: {
			template: obj => `

<div >
<div class="col-sm-4" ><span class="name" >No:</span> </div>
<div class="col-sm-3" ><span class="email">${obj.customerInfo.emergentContacts[0].contactName}</span>  </div>
<div class="col-sm-3" ><span class="email">${obj.customerInfo.emergentContacts[1].contactName}</span>  </div>

</div>
<div >
<div class="col-sm-4" ><span class="name">Contact Name:	</span>   </div>
<div class="col-sm-3" ><span class="email" >${obj.customerInfo.emergentContacts[0].contactName}</span>       </div>
<div class="col-sm-3" ><span class="email" >${obj.customerInfo.emergentContacts[1].contactName}</span>       </div>
</div>
	  <div >
	  <div class="col-sm-4" >	<span class="name" >Number:</span> </div>
	  <div class="col-sm-3" >	<span class="email">(+84)${obj.customerInfo.emergentContacts[0].contactPhone}</span> </div>
	  <div class="col-sm-3" >	<span class="email">(+84)${obj.customerInfo.emergentContacts[1].contactPhone}</span> </div>
</div>
	  <div >
	  <div class="col-sm-4" >	<span class="name" >Relation :</span>   </div>
	  <div class="col-sm-3" >	<span class="email">${obj.customerInfo.emergentContacts[0].relationValue}</span>  </div>
	  <div class="col-sm-3" >	<span class="email">${obj.customerInfo.emergentContacts[1].relationValue}</span>  </div>
</div>
	  
			   `,
			height: 180
		},

	},

]},
{width:430,type:"wide", margin:0, padding:{ top:0, bottom:0, right:0, left:10 },
rows:[PersonsView,OrderView]}]
		};
	}
	init() {
		const list = this.$$("list");
        persons.waitData.then(() => {
            list.sync(persons);
		});
	
		const list1 = this.$$("list1");
        persons.waitData.then(() => {
            list1.sync(persons);
           
		});


	}
}