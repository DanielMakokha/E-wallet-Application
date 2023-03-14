// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
function getformattedTime(){
  const now=new Date().toLocaleTimeString('en-us',{
    month: 'short',
    day:'numeric',
    hour:'2-digit',
    minute:'2-digit',
    
  });
  const date=now.split(',')[0].split(' ');
  const time=now.split(',')[1];
  return `${date[1]} ${date[0]},${time}`
  
}

document.querySelector('#ewallet-form').addEventListener('submit',function(e){
    e.preventDefault();

    console.log('form submitted');

    const type=document.querySelector('.add__type').value;
    const desc=document.querySelector('.add__description').value;
    const value=document.querySelector('.add__value').value;

    if (desc.length > 0 && value.length > 0) {
      
      addItems(type,desc,value);

      resetForm();
    }
    

})
function addItems(type,desc,value){
  const time=getformattedTime()
  const newhtml=`
    <div class="item">
          <div class="item-description-time">
            <div class="item-description">
              <p>${desc}</p>
            </div>
            <div class="item-time">
              <p>${time}</p>
            </div>
          </div>
          <div class="item-amount ${type==='+' ? 'income-amount' : 'expense-amount'}">
            <p>${type}$${value}</p>
          </div>
        </div>



    `;
    console.log(newhtml);
    const collection=document.querySelector('.collection');
    collection.insertAdjacentHTML('afterbegin',newhtml);
};

function resetForm(){
    document.querySelector('.add__type').value='+';
    document.querySelector('.add__description').value='';
    document.querySelector('.add__value').value='';
};
/*
<div class="item">
          <div class="item-description-time">
            <div class="item-description">
              <p>Buy a physics book</p>
            </div>
            <div class="item-time">
              <p>25 Feb, 06:45 PM</p>
            </div>
          </div>
          <div class="item-amount expense-amount">
            <p>-$78</p>
          </div>
        </div>
*/