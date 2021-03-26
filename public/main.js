

//  Worked with House Cass and my House Hayden 
//  Kiany,Kevin S , Kevin C, Alief, Jerry,Khorally , Rodas,Tamika  

// erases the customer's order 

var trash = document.getElementsByClassName("fa-trash");

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const order = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'order': order,        


          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
