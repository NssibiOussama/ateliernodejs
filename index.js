var prompt = require('prompt');
prompt.start();

let arr = ["Task N1 ", "Task N2 ", "Task N3", "task N4", "Task N5"];
arr.forEach((task, index) => {
    console.log("Task Numéro " + index + " :" + task);
})
console.log("\n ");
console.log(" 1: Ajouter un Task \n 2: Modifier un Task \n 3: Supprimer un Task \n 4: Afficher tous les Task \n 5: Quitter \n");

prompt.get(['input'], function (err, result) {
    switch (result.input) {
        case "1":
            prompt.get(['task'], function (err, result) {
                arr.push(result.task);
                arr.forEach((task, index) => {
                    console.log("Task Numéro " + index + " :" + task);
                })
               
            })
            break;
        case "2":
            arr.forEach((task, index) => {
                console.log("Task Numéro " + index + " :" + task);
            })
            console.log("Which element to be modified ?");
            prompt.get(["old", "new"], (err, result) => {
                arr[result.old] = result.new;
                console.log("Done!");
                arr.forEach((task, index) => {
                    console.log("Task Numéro " + index + " :" + task);
                })
                
            })
            break;
        case "3":
            arr.forEach((task, index) => {
                console.log("Task Numéro " + index + " :" + task);
            })
            console.log("Which element to be deleted ?");
            prompt.get(["choice"], (err, result) => {
                arr.splice(result.choice, 1);
                console.log("Done!");
                arr.forEach((task, index) => {
                    console.log("Task Numéro " + index + " :" + task);
                })
            })
            break;
        case "4":
            arr.forEach((task, index) => {
                console.log("Task Numéro " + index + " :" + task);
            })
            break;
        case "5":
            console.log("Au Revoir !");
            break;

        default:
            console.log(`Sorry !`);
    }


}

)



















