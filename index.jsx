function NavBar({menuitems}) {
 //first list filters items by their 'instock' number if greater than minstock number
  let list1 = menuitems.filter(item => item.instock >= minstock);
  
  let list2 = list1.map((item, index) => {
    return <li key={index.toString()}>{item.name}</li>;
  });

  return <ul style={{ listStyleType: "none" }}>{list2}</ul>;

}
//Our Array of objects with name of fruit and quantity instock
const menuItems = [{name: 'apple', instock: 2 }, {name: 'pineapple', instock: 3 }, 
{name: 'pear', instock: 0 }, {name: 'peach', instock: 3 }, {name: 'orange', instock: 1 }
];
//Render to the ReactDOM what menuItems are greater than minstock number
ReactDom.render(<NavBar menuitems={menuItems} />, document.getElementById("root"));
