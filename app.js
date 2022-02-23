let quizName = document.querySelector(".quiz-name");
let title = document.getElementById("title");
let player = document.querySelector(".playerName");
let playerScore = document.querySelector(".playerScore");
let entrytable = document.querySelector("#entryTable");
let sortedtable = document.querySelector("#sortedTable");
let submitBtn = document.querySelector(".submit");
let sortBtn = document.querySelector("#sort");
let number = 0;
let number2 = 0;
let arr=[];
let flag = true;
let hideBtn = document.querySelector(".hide-btn");
let variable = 0;
let tr = "";
let tr1 = "";
let buttons  = "";

//!     ENTRY TABLE SUBMIT
submitBtn.addEventListener("click", function(e) 
{
   
    title.textContent = quizName.value;
    e.preventDefault();
    flag=true;
    if (player.value==="" || playerScore.value==="")
    {
        alert("Please enter valid a name or score");
        flag = false;
    }
    for (i=0; i<arr.length; i++)
    {
        if (player.value===arr[i].name)
        {
            alert("Name already exists, please enter an unique name");
            flag = false;
        }
    }

    if (flag)
    {
        if (entrytable.style.display = "none")
        {
            entrytable.style.display = "table";
            sortedtable.style.display = "none";
        }
        
        let temp = 
        {
            "name":player.value,
            "Score":parseInt(playerScore.value)
        };
        arr.push(temp);
        
        entrytable.innerHTML = ``;
        entrytable.innerHTML = `<tr><th>Player</th><th>Score</th></tr>`;
        for (i=0; i<arr.length; i++)
        {
            entrytable.innerHTML +=`<tr><td>${arr[i].name}</td>
            <td>${arr[i].Score}                       
            <button class="add-1">
            +1
            </button>
            <button class="add-2">
            +2
            </button>
            <button class="add-4">
            +4
            </button>
            <button class="add-5">
            +5
            </button>
            <button class="add-6">
            +6
            </button>
            <button class="add-8">
             +8
            </button>
            <button class="add-10">
            +10
            </button>
            <button class="add-12">
            +12
            </button>
            <button class="add-15">
            +15
            </button>
            <button class="minus-1">
            -1
            </button>
            <button class="minus-2">
            -2
            </button>
            <button class="minus-4">
            -4
            </button>
            <button class="minus-5">
            -5
            </button>
            <button class="minus-6">
            -6
            </button>
            <button class="minus-8">
            -8
            </button>
            <button class="minus-10">
            -10
            </button>
            <button class="minus-12">
            -12
            </button>
            <button class="minus-15">
            -15
            </button>
            <button class="delete-btn">
            DEL
            </button>
            </td></tr>`;
            tr = entrytable.querySelectorAll("tr");    
        }
        number ++;
        setBackToDeafult();
    }
});

//!   SORTED TABLE BUTTON
sortBtn.addEventListener("click", function(e){
e.preventDefault();
if (sortedtable.style.display = "none")
{
    sortedtable.style.display = "table";
}
entrytable.style.display = "none";
arr.sort((a,b) => (a.Score > b.Score) ? 1 : ((b.Score > a.Score) ? -1 : 0));

console.log(arr);
sortedtable.innerHTML = ``;
sortedtable.innerHTML = `<tr><th>Player</th><th>Score</th></tr>`;
for (i=0; i<arr.length; i++)
{
    sortedtable.innerHTML +=`<tr><td>${arr[i].name}</td>
    <td>${arr[i].Score}                       
    <button class="add-1">
        +1
    </button>
    <button class="add-2">
    +2
    </button>
    <button class="add-4">
    +4
    </button>
    <button class="add-5">
    +5
    </button>
    <button class="add-6">
    +6
    </button>
    <button class="add-8">
    +8
    </button>
    <button class="add-10">
    +10
    </button>
    <button class="add-12">
    +12
    </button>
    <button class="add-15">
    +15
    </button>
        <button class="minus-1">
        -1
        </button>
        <button class="minus-2">
        -2
        </button>
        <button class="minus-4">
        -4
        </button>
        <button class="minus-5">
        -5
        </button>
        <button class="minus-6">
        -6
        </button>
        <button class="minus-8">
        -8
        </button>
        <button class="minus-10">
        -10
        </button>
        <button class="minus-12">
        -12
        </button>
        <button class="minus-15">
        -15
        </button>
    <button class="delete-btn">
        DEL
    </button>
    </td></tr>`;
    number2++;
    tr1 = sortedtable.querySelectorAll("tr");   
}
setBackToDeafult();
});

//!📌 DYNAMICALLY ADDED ITEMS

hideBtn.addEventListener("click", toggleHide);
entrytable.addEventListener("click", addition1);
entrytable.addEventListener("click", addition2);
entrytable.addEventListener("click", addition4);
entrytable.addEventListener("click", addition5);
entrytable.addEventListener("click", addition6);
entrytable.addEventListener("click", addition8);
entrytable.addEventListener("click", addition10);
entrytable.addEventListener("click", addition12);
entrytable.addEventListener("click", addition15);

entrytable.addEventListener("click", subtraction1);
entrytable.addEventListener("click", subtraction2);
entrytable.addEventListener("click", subtraction4);
entrytable.addEventListener("click", subtraction5);
entrytable.addEventListener("click", subtraction5);
entrytable.addEventListener("click", subtraction6);
entrytable.addEventListener("click", subtraction8);
entrytable.addEventListener("click", subtraction10);
entrytable.addEventListener("click", subtraction12);
entrytable.addEventListener("click", subtraction15);
entrytable.addEventListener("click", deleteScoreEntryTable);

            //!SORTED TABLE EVENT LISTENER
hideBtn.addEventListener("click", toggleHideSortedTable);
sortedtable.addEventListener("click", addition1);
sortedtable.addEventListener("click", addition2);
sortedtable.addEventListener("click", addition4);
sortedtable.addEventListener("click", addition5);
sortedtable.addEventListener("click", addition6);
sortedtable.addEventListener("click", addition8);
sortedtable.addEventListener("click", addition10);
sortedtable.addEventListener("click", addition12);
sortedtable.addEventListener("click", addition15);
sortedtable.addEventListener("click", subtraction1);
sortedtable.addEventListener("click", subtraction2);
sortedtable.addEventListener("click", subtraction4);
sortedtable.addEventListener("click", subtraction5);
sortedtable.addEventListener("click", subtraction6);
sortedtable.addEventListener("click", subtraction8);
sortedtable.addEventListener("click", subtraction10);
sortedtable.addEventListener("click", subtraction12);
sortedtable.addEventListener("click", subtraction15);
sortedtable.addEventListener("click", deleteScoreSortedTable);

//! TOGGLE HIDE FOR ENTRY TABLE
function toggleHide (e)
{
    e.preventDefault();
   for (i=0; i<tr.length; i++)
   {
       buttons = tr[i].querySelectorAll("button");
       console.log(buttons);
        for (j=0; j<buttons.length; j++)
        {
            if (buttons[j].style.display==="none")          
            {
                buttons[j].style.display = "inline";
                // hideBtn.textContent = "HIDE BUTTONS";
            }  
            else
            {
                buttons[j].style.display = "none";
                // hideBtn.textContent = "SHOW BUTTONS";
            }
        }       
    }
}

//! TOGGLE HIDE FOR SORTED TABLE
function toggleHideSortedTable (e)
{
    e.preventDefault();
    for (i=0; i<tr1.length; i++)
   {
       buttons = tr1[i].querySelectorAll("button");
        for (j=0; j<buttons.length; j++)
        {
            if (buttons[j].style.display==="none")          
            {
                buttons[j].style.display = "inline";
                // hideBtn.textContent = "HIDE BUTTONS";
            }  
            else
            {
                buttons[j].style.display = "none";
                // hideBtn.textContent = "SHOW BUTTONS";
            }
        }       
    }
}

//! +1 ADDITION
function addition1 (e){
   if (!e.target.classList.contains("add-1"))
   {
    return;
   }
   const btn = e.target;
   search_item = btn.parentElement.previousElementSibling.textContent;
   index = arr.findIndex(function(item)
   {
    return item.name === search_item;
   });
    arr[index].Score +=1;
    btn.parentElement.firstChild.textContent = arr[index].Score;
}
//! +2 ADDITION
function addition2 (e){
    if (!e.target.classList.contains("add-2"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
     arr[index].Score +=2;
     btn.parentElement.firstChild.textContent = arr[index].Score;
 }

 //! +4 ADDITION
function addition4 (e){
    if (!e.target.classList.contains("add-4"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
     arr[index].Score +=4;
     btn.parentElement.firstChild.textContent = arr[index].Score;
 }

 //! +5 ADDITION
function addition5 (e){
    if (!e.target.classList.contains("add-5"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
     arr[index].Score +=5;
     btn.parentElement.firstChild.textContent = arr[index].Score;
 }

 //! +6 ADDITION
function addition6 (e){
    if (!e.target.classList.contains("add-6"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
     arr[index].Score +=6;
     btn.parentElement.firstChild.textContent = arr[index].Score;
 }

 //! +8 ADDITION
function addition8 (e){
    if (!e.target.classList.contains("add-8"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
     arr[index].Score +=8;
     btn.parentElement.firstChild.textContent = arr[index].Score;
 }

 //! +10 ADDITION
function addition10 (e){
    if (!e.target.classList.contains("add-10"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
     arr[index].Score +=10;
     btn.parentElement.firstChild.textContent = arr[index].Score;
 }

//! +12 ADDITION
function addition12 (e){
    if (!e.target.classList.contains("add-12"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
     arr[index].Score +=12;
     btn.parentElement.firstChild.textContent = arr[index].Score;
 }

//! +15 ADDITION
function addition15 (e){
    if (!e.target.classList.contains("add-15"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
     arr[index].Score +=15;
     btn.parentElement.firstChild.textContent = arr[index].Score;
 }



function subtraction1 (e){
    if (!e.target.classList.contains("minus-1"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
    arr[index].Score -=1;
    btn.parentElement.firstChild.textContent = arr[index].Score;
 }
 function subtraction2 (e){
    if (!e.target.classList.contains("minus-2"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
    arr[index].Score -=2;
    btn.parentElement.firstChild.textContent = arr[index].Score;
 }
 function subtraction4 (e){
    if (!e.target.classList.contains("minus-4"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
    arr[index].Score -=4;
    btn.parentElement.firstChild.textContent = arr[index].Score;
 }
 function subtraction5 (e){
    if (!e.target.classList.contains("minus-5"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
    arr[index].Score -=5;
    btn.parentElement.firstChild.textContent = arr[index].Score;
 }
 function subtraction6 (e){
    if (!e.target.classList.contains("minus-6"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
    arr[index].Score -=6;
    btn.parentElement.firstChild.textContent = arr[index].Score;
 }
 function subtraction8 (e){
    if (!e.target.classList.contains("minus-8"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
    arr[index].Score -=8;
    btn.parentElement.firstChild.textContent = arr[index].Score;
 }
 function subtraction10 (e){
    if (!e.target.classList.contains("minus-10"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
    arr[index].Score -=10;
    btn.parentElement.firstChild.textContent = arr[index].Score;
 }
 function subtraction12 (e){
    if (!e.target.classList.contains("minus-12"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
    arr[index].Score -=12;
    btn.parentElement.firstChild.textContent = arr[index].Score;
 }
 function subtraction15 (e){
    if (!e.target.classList.contains("minus-15"))
    {
     return;
    }
    const btn = e.target;
    search_item = btn.parentElement.previousElementSibling.textContent;
    index = arr.findIndex(function(item)
    {
     return item.name === search_item;
    });
    arr[index].Score -=15;
    btn.parentElement.firstChild.textContent = arr[index].Score;
 }

// !📌 DELETE BUTTONS

    //!📌EVENT LISTENER TO DYNAMICALLY ADDED ITEMS
function deleteScoreEntryTable (e){
    if (!e.target.classList.contains("delete-btn"))
    {
     return;
    }
   const btn = e.target;
   search_item = btn.parentElement.previousElementSibling.textContent;
    let index = arr.findIndex(function(item)
    {
        return item.name === search_item
    });
    if (index !== -1)
    {
        arr.splice(index,1);
    }
    btn.closest("tr").remove();
    number -= 1;
    console.log(arr);
    if (number===0)
    {
        entrytable.innerHTML = ``;
    }
}

function deleteScoreSortedTable (e){
    if (!e.target.classList.contains("delete-btn"))
    {
     return;
    }
   const btn = e.target;
   search_item = btn.parentElement.previousElementSibling.textContent;
   let index = arr.findIndex(function(item)
   {
       return item.name === search_item
   });
   if (index !== -1)
   {
       arr.splice(index,1);
   }
   btn.closest("tr").remove();
   console.log(arr);
    number2 -= 1;
    if (number2===0)
    {
        sortedtable.innerHTML = ``;
    }
}

//! HEADER VISIBILITY
function headerVisibilty(tableId,number)
{
    if (number===0)
    {
        tableId.innerHTML = `<tr><th>Team</th><th>Score</th></tr>`;
    }
}


function setBackToDeafult (){
    player.value="";
    playerScore.value="";
}

