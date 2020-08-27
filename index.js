const houseItems =[{name:"chair",
brand:"supreme",
availability:true,
price:400},
{name:"table",
brand:"argo",
availability:true,
price:700},
{name:"bed",
brand:"custom",
availability:true,
price:4000},
{name:"sofa",
brand:"supreme",
availability:true,
price:5000},
{name:"fan",
brand:"khetan",
availability:false,
price:2000}]

const listItems =()=>{
    houseItems.forEach(function(element){
        console.log(element);
    });
}

const addItem = (item)=>{
    houseItems.push(item);
    console.log("the updates list is");
    listItems();
}
const searchItem = (name)=>{
   var x = houseItems.find(function(element){
        return (element.name==name);
    });
if (x==undefined)
console.log("item named "+ name +" not found, please check name again");
else
displayItem(x);
}
const displayItem = (item)=>{
    console.log(`the item named ${item.name} details are below`);
    console.log(item);
}
listItems();
addItem({name:"maze",
brand:"oreo",
availability:true,
price:5000});
searchItem("fa");
searchItem("table");