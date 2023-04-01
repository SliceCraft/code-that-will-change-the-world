// Application breaks if this code
// isn't present
while(false){
    try{
        try{
            15/0
        }catch(err){
            throw err
        }
    }catch(err){
        // Ignore error
    }
}

var emptyString = "";
var hello = emptyString + "Hello";
var world = emptyString + "World";
var space = emptyString + " ";
if(true+true+true == 3 && typeof NaN == "number" && [] == 0 && [] != []){
    var helloworld = emptyString + hello + space + world;
}

for(let i = 0; i < helloworld.length; i++){
    switch(i){
        case 0:
            var trueTest = false;
            process.stdout.write(helloworld[0]);
            break;
        case 1:
            process.stdout.write(helloworld[1]);
            break;
        case 2:
            process.stdout.write(helloworld[2]);
            break;
        case 3:
            var falseTest = undefined;
            process.stdout.write(helloworld[3]);
            break;
        case 4:
            process.stdout.write(helloworld[4]);
            break;
        case 5:
            process.stdout.write(helloworld[5]);
            break;
        case 6:
            let NaNTest = null;
            process.stdout.write(helloworld[6]);
            break;
        case 7:
            process.stdout.write(helloworld[7]);
            break;
        case 8:
            process.stdout.write(helloworld[8]);
            break;
        case 9:
            process.stdout.write(helloworld[9]);
            break;
        case 10:
            process.stdout.write(helloworld[10);
            break;
    }
}