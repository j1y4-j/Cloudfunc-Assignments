const fs = require("fs");
// fs is a module from node which lets us to manipulate and modify files

const data= fs.readFileSync("./tasks.json","utf-8");
let tasks=JSON.parse(data); // converts json string to js object
const command=process.argv[2];// reads command line arguments as array



// tasks is an array of objects
const addTask=(label) => {
    var id;
    if(tasks.length==0){
        id=1;
    }
    else{
        id=tasks[tasks.length-1].id+1;
    }
    
    tasks.push({
        id: id,
        label: label,
        status: "pending"
    });
    console.log("Task Added");
    
  
}
const reset = () => {
    tasks=[];
 fs.writeFileSync("./tasks.json","[]");
 console.log("All tasks cleared");
  
}

const listTasks= () => {
console.log(tasks);  
}

const removeTask=(id) => {
    
    const index = tasks.findIndex(t => t.id == id);

    if(index===-1){
        console.log(" Task not found");
        return;
    }
    
    tasks.splice(index,1);
    console.log("Task removed");
  
}

const updateTask=(id,newtask) => {
    const task=tasks.find(t => t.id ==id); // returns that particular task object which matches the id
    if(!task){
        console.log("task not found");
        return;
    }
    
task.label=newtask;
console.log("Task updated");
  
}

const markDone=(id) => {
    const task=tasks.find(t => t.id ==id);
    if(!task){
        console.log("Task not found");
        return;

    }

    task.status="done";
    console.log('Task marked done');
  
};






switch(command){
    case "add":
        var label;
        label=process.argv[3];
        addTask(label);
        break;
    case "list":
        listTasks();
        break;
    case "remove":
        removeTask(Number(process.argv[3]));
        break;
    case "update":
        updateTask(Number(process.argv[3]),process.argv[4]); 
        break;
    case "done":
        markDone(Number(process.argv[3])); 
        break;
    case "reset":
        reset();
        return;
    default:
        console.log("Try again");
        break;

}
fs.writeFileSync("tasks.json",JSON.stringify(tasks));

// console.log(tasks);