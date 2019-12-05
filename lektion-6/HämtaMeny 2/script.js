const url = 'https://thaikokitallkrogen.azurewebsites.net/api/fooditems'
let result = document.getElementById('result')
let search = document.getElementById('search')
let input = document.getElementById('fooditem')
let selectCategory = document.getElementById("selectCategory");
let selectFoodItem = document.getElementById("selectFoodItem");


document.getElementById('selectCategory').addEventListener('mouseleave',(e)=>{
    populateFoodItems();
});

function populateCategories() {
    fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data);
        
        for(let i=0; i < data.categories.length; i++) {
            let element = document.createElement("option");
            element.textContent = data.categories[i].name;
            element.value = i;
            selectCategory.appendChild(element);
        }
        // document.getElementById('selectCategory').addEventListener('selectionchange',populateFoodItems());
        // 
        // populateFoodItems();
    })
}

populateCategories();

// populateFoodItems();


function populateFoodItems() {
    fetch(url)
    .then(res => res.json())
    .then(data => {

        // console.log('test')

        let cat = selectCategory.value

        // console.log(cat)

        // document.getElementById('selectFoodItem').removeChild("option");
        
        for(let i=0; i < data.categories[cat].fooditems.length; i++) {
            let element = document.createElement("option");
            element.textContent = data.categories[cat].fooditems[i].name;
            element.value = i;
            selectFoodItem.appendChild(element);
        }

    })
}






search.addEventListener('click', function(e) {
    
    let valueFood = selectFoodItem.value
    let cat = selectCategory.value

    // console.log(cat);
    // console.log(valueFood);

    fetch(url)
    .then(res => res.json())
    .then(data => {

    let numtext = data.categories[cat].fooditems[valueFood].number;

    console.log(numtext);

        for(let item of data.categories[cat].fooditems) {  

            console.log(item.number);
            
            if(item.number== numtext) {
                result.innerHTML = `<p>#${item.number} - ${item.name}</p>
                                    <p>${item.description}</p>
                                    <p>Styrka : ${item.hotness}</p>
                                    <p>Pris : ${item.price}</p>
                                    <p>TakeAway : ${item.takeaway}</p>`
            }
        }

    })
})
