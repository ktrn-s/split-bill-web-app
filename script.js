gsap.from("#container", {duration:1.2, opacity:0, y:-60, ease: "power1.out"});
gsap.from("h1", {duration: 1, opacity:0, y: -30, delay: 0.6});
gsap.from("#par", {duration: 1, opacity: 0, delay: 1.5 });
gsap.from(".rowForm", { duration: 0.8, opacity: 0, y:-20, stagger: 0.2, delay:0.8 });
gsap.from("#showAmountToPay",{ duration: 0.8, opacity:0, y:20, stagger: 0.1, ease: "power1.out"});

function pulseAll() {
    gsap.fromTo(
        ["#SplitRent", "#SplitBills", "#savingsPerPerson", "#total"],
        { scale: 1 },
        { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.inOut" }
    );
}

const button = document.querySelector("#calculate");
button.addEventListener("click", calculateAmount);

const buttonSavings = document.querySelector("#addToSavings");
buttonSavings.addEventListener("click", showSavings);

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetAll);

function resetAll() {
    document.querySelector("#rent").value = "";
    document.querySelector("#gas").value = "";
    document.querySelector("#Electric").value = "";
    document.querySelector("#wifi").value = "";
    document.querySelector("#pplAmount").value = "";
    document.querySelector("#savings").style.display = "none";

    document.querySelector("#ShowDividedRent").textContent = "";
    document.querySelector("#ShowDividedBills").textContent = "";
    document.querySelector("#ShowDividedSavings").textContent = "";
    document.querySelector("#ShowDividedTotal").textContent = "";
}

document.addEventListener("keydown", function(e){
    if(e.key === "enter"){
        e.preventDefault();
        calculateAmount(e);
    }
})

function showSavings(e) {
    e.preventDefault();
    savings.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const rent = document.querySelector("#rent").value;
    const gas = document.querySelector ("#gas").value;
    const electric = document.querySelector("#Electric").value;
    const internet = document.querySelector("#wifi").value;
    const people = document.querySelector("#pplAmount").value;
    const savings = document.querySelector("#savings").value;
    
    if (isNaN(rent) || isNaN(gas) || isNaN(electric) || isNaN(internet) || isNaN(savings) || isNaN(people) || people ==="") {
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Please enter correct information!",
            background: "rgba(23, 29, 19, 0.9)",  
            color: "#f9f9f9",                      
            confirmButtonColor: "#f7c873",         
            iconColor: "#f7c873",                  
            backdrop: `rgba(0,0,0,0.4)`
            });
    }
    let rentPerPerson = rent/people;
    let billTotal = parseFloat(gas) + parseFloat(electric) + parseFloat(internet);
    let billPerPerson = billTotal/people;
    let savingsPerPerson = (billTotal * parseFloat(savings)) / parseFloat(people);
    let totalSum = rentPerPerson + billPerPerson + savingsPerPerson;
    
    rentPerPerson = rentPerPerson.toFixed(2);
    billTotal = billTotal.toFixed(2);
    billPerPerson= billPerPerson.toFixed(2);
    savingsPerPerson = savingsPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector("#ShowDividedRent").textContent = rentPerPerson;
    document.querySelector("#ShowDividedBills").textContent = billPerPerson;
    document.querySelector("#ShowDividedSavings").textContent = savingsPerPerson;
    document.querySelector("#ShowDividedTotal").textContent = totalSum;

    pulseAll();
}
