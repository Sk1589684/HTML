
function step1(callback){
    console.log("Step 1 Completed");
    callback();
}

function step2(callback){
    console.log("Step 2 Completed");
    callback();
}

function step3(){
    console.log("Step 3 Completed");
}

step1(function(){
    step2(function(){
        step3();
    });
});