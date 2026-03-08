//! ****Button toggling****//
let currentTab = "all";


const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");
const noJobs = document.getElementById("no-jobs");
const availableJobs = document.getElementById("available-job");

const totalState = document.getElementById("total-section");

const interviewState = document.getElementById("interview-section");
const rejectedState = document.getElementById("rejected-section");


const tabInactive = ["bg-navy", "border-navy"];
const tabActive = ["bg-black", "border-slate-200", "text-white"];


function clickTab(tab){
    const buttons = ["all", "interview", "rejected"];
    currentTab = tab;
    
    for(const b of buttons){
        const tabs = document.getElementById("tab-" + b);
        if(b === tab){
            tabs.classList.remove(...tabInactive);
            tabs.classList.add(...tabActive)
        }
        else{
            tabs.classList.remove(...tabActive);
            tabs.classList.add(...tabInactive)
        }
    }



    //! ***//! Hide all sections first, then show only the selected section based on the clicked tab***// 

    // initially hidden class add in all section 
    const containers = [allContainer, interviewContainer, rejectContainer];
    for(const section of containers){
        section.classList.add("hidden")
    }

    // noJobs.classList.add("hidden");

    // remove hidden classList in button when a button will be clicked
    if(tab === "all"){
        allContainer.classList.remove("hidden");
        if(allContainer.children.length === 0){
            noJobs.classList.remove("hidden")
        }else{
            noJobs.classList.add("hidden")
        }
    }
    else if(tab === "interview"){
        interviewContainer.classList.remove("hidden");
        if(interviewContainer.children.length === 0){
            noJobs.classList.remove("hidden")
        }else{
            noJobs.classList.add("hidden")
        }
    }
    else {
        rejectContainer.classList.remove("hidden")
        if(rejectContainer.children.length === 0){
           noJobs.classList.remove("hidden")
        }else{
            noJobs.classList.add("hidden")
        }
    }
    updateState();  //!update state upore call kora hoyeche tai oboshshoi upsateState function er variablegulo upsateState function ti call korar age deckare korte hobe ()
}

clickTab(currentTab);

// !Move card when clicked
const cardContainer = document.getElementById("cards-section");
cardContainer.addEventListener("click", (event) => {
    const clickElement = event.target;
    const card = clickElement.closest(".Card"); // we cannot remove card without write this line 
    const status = card.querySelector(".Status");

    //? const allCard = document.querySelector(".all-card-container") //If you write this line, you can only remove it from the All Containers card, not delete it from Boot Interview and Rejected.
    
    const allCard = card.parentNode;
    
    
    if(clickElement.classList.contains("interview")){
        interviewContainer.appendChild(card);
        status.innerText = "interview";
    }
    if(clickElement.classList.contains("reject")){
        rejectContainer.appendChild(card);
        status.innerText = "Rejected";
    }
    if(clickElement.classList.contains("delete")){
        allCard.removeChild(card)
    }
    updateState()
})




// //!count all, interview & rejected
function updateState(){
    const counts ={
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectContainer.children.length,
    };
    totalState.innerText = counts.all;
    interviewState.innerText = counts.interview;
    rejectedState.innerText = counts.rejected;

    availableJobs.innerText =  counts[currentTab];

    if(counts[currentTab]<1){
        noJobs.classList.remove("hidden");
    }
    else{
        noJobs.classList.add("hidden")
    }
}
updateState()

/**
 /**
 * এই function কে globally call করলে webpage এ landing করলেই currentTab এর card count দেখাবে।
 * 
 * আর interview এবং reject section এর card count দেখতে চাইলে tab করার পর এই function call
 * হতে হবে। সেই জন্য tab change হওয়ার পরে যে function execute হয় (clickTab), সেখানে
 * updateState() function টি call করতে হবে।
 * 
 * তাহলে interview tab এ click করলে interview section এর card গোনা শুরু হবে,
 * একইভাবে reject tab এ click করলে reject section এর card গোনা শুরু হবে।
 */
  




 


