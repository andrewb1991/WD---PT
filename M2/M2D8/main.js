
let total = 0;
let operation = false;
let lastNumber;

// funzione per farsi che si clicci un numero e venga aggiunto all'input total score.
function updateTotalScore(numX){
    let ts = document.getElementById("totalScore");
    ts.value = numX;
    lastNumber = numX;
    if(operation){
        add();
        division();
    }
};


function add(){
    // let ts = document.getElementById("totalScore");
    // console.log(typeof(ts.value));
    total = total + parseInt(lastNumber);
    console.log(`add: ` + total);
        operation = false;
};

function division(){
console.log(`division`);
total1 = total % parseInt(lastNumber);
console.log(`division: ` + total1);
    operation = true;

};

function result(){
console.log(`result`)
let ts = document.getElementById("totalScore");
ts.value = total;
};

function mclear(){
    console.log(`clear`);
    total = 0;
    operation = false;
    let ts = document.getElementById("totalScore");
    ts.value = "";

    };
    