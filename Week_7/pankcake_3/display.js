const showOrderList =()=>{
    const existsOrders= JSON.parse(localStorage('allOrders'));
    console.log(existsOrders);
    
  }


  window.onscroll= showOrderList;