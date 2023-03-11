const todoList = require('../todo');

const {all, add,markAsComplete,overdue,dueToday,dueLater} = todoList();

describe("TodoList test Check", () => {
    /*beforeAll(() => {
        add({
            title : "Bought yesterday",
            completed : false,
            dueDate : new Date().toISOString().split("T")[0]-1
        },
        {
            title : "Buy Today",
            completed : false,
            dueDate : new Date().toISOString().split("T")[0]
        },
        {
            title : "Buy Tomorow",
            completed : false,
            dueDate : new Date().toISOString().split("T")[0]+1
        });
    });*/

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

    test("Check add test",() => {
        const addcounts = all.length;
        add({
            title : "Buy day after tomorow",
            completed : false,
            dueDate : new Date().toISOString().split("T")[0]+2
        });
        expect(all.length).toBe(addcounts+1);
    });
    test("check markascomplete test",()=>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });

    test("Check re-overdue items", () =>{
        const overlength = overdue().length;
        
        add({
            title : "Bought yesterday",
            completed : false,
            dueDate : yesterday
        });
        expect(overdue().length).toBe(overlength+1);

    });

    test("Check re-today items", () =>{
        const daylength = dueToday().length;
        
        add(
            {
                title : "Buy Today",
                completed : false,
                dueDate : today
            }
        );
        expect(dueToday().length).toBe(daylength+1);
    });

    test("Check re-duelater items", () =>{
        const laterlength = dueLater().length;
        
        add(
            {
                title : "Buy Tomorow",
                completed : false,
                dueDate : tomorrow
            }
        );
        expect(dueLater().length).toBe(laterlength+1);
    });
});



