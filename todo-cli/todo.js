const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        const today = new Date();
        const todaystr = today.toISOString().split("T")[0]; 
        const dueLater = all.filter(item=> item.dueDate<todaystr);
        return dueLater;
      }
    
  
    const dueToday = () => {
        const today = new Date();
        const todaystr = today.toISOString().split("T")[0]; 
        const dueToday = all.filter(item=> item.dueDate===todaystr);
        return dueToday;
      }
    
  
    const dueLater = () => {
        const today = new Date();
        const todaystr = today.toISOString().split("T")[0]; 
        const dueLater = all.filter(item=> item.dueDate>todaystr);
        return dueLater;
      }
    
  
    const toDisplayableList = (list) => {
      let output = "";
      const toDay = new Date();
      list.forEach((item)=>{
        const title = item.title;
        const dueDate = item.dueDate;
        const isCompleted = item.completed;
        const displayDate = (dueDate === new Date().toISOString().split("T")[0]) ? "toDay": dueDate;
        if(dueDate==today){
            output+= `[${isCompleted ? "x":" "}] ${title}\n`;
        }
        else if(dueDate>=today){
            output+= `[${isCompleted ? "x":" "}] ${title} ${displayDate}\n`;   
        }
        else{
            output+= `[${isCompleted ? "x":" "}] ${title} ${displayDate}\n\n`;
        }

        
      });
      return output;
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  //console.log("\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  
  console.log("\nDue Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  //console.log("\n")
