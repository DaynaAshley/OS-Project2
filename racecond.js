const isEmpty = str => !str.trim().length;

window.onload = function () { // executes when the page loads
 const updateBtn = document.querySelector('#updateb'); // gets the button from the DOM

    updateBtn.addEventListener('click', function(event) { // listens for a click on the update value button
        event.preventDefault(); // prevent the default action
        console.log('update button clicked'); // logs the click event for debugging purposes
        var newval=document.getElementById("update").value; // gets the new value from the input field
        if (!isEmpty(newval)) { // checks if the value is empty
            document.getElementById("sharedresource").innerHTML = newval; // updates the shared resource value in the DOM
        }else{
            alert("Cannot Update Shared Resource with empty value"); // alerts the user if the input field is empty
        }  
    });
}


function start() {
    var p1 = document.getElementById("process1").checked;   //stores the value of process 1's checkbox
    var p2 = document.getElementById("process2").checked;  //stores the value of process 2's checkbox
    var a = document.querySelector('#p1'); // accesses process 1's div
    var b = document.querySelector('#p2'); // accesses process 2's div
    var sharedresource = document.getElementById("sharedresource").innerHTML; // gets the value of the shared resource from the DOM


    if (p1 ==  true) { // checks if process 1 is checked
        a.style.backgroundColor="rgb(255, 157, 28)"; // changes the background color of process 1's div to orange to indicate that it is running
        b.style.backgroundColor="rgb(255, 157, 28)"; // changes the background color of process 2's div to orange to indicate that it is running
        var x = parseInt(sharedresource) // converts the shared resource value to an integer
        total1 = x + 200 // adds 200 to the shared resource value
        document.getElementById("previous").innerHTML = x; // sets the previous value to the shared resource value
        setTimeout(function() { // sets a timeout to simulate the process taking 2000ms to complete
            document.getElementById("sharedresource").innerHTML = total1; // updates the shared resource value in the DOM
            console.log('Process 1 finished last'); 
            b.style.backgroundColor="red";// changes the background color of process 2's div to red to indicate that it is finished
            setTimeout(function() { // sets a timeout to simulate the process taking 6000ms to complete
                a.style.backgroundColor="rgba(0, 255, 13, 0.8)"; // changes the background color of process 1's div to green to indicate that it is finished
                total2 = total1 + 300; // adds 300 to the shared resource value to account for the overwriting of the first finished process' value
                document.getElementById("sharedresource").innerHTML = total2; // updates the shared resource value in the DOM
            }, 4000);
          }, 2000);
        

        
    }else if (p2 ==  true){ // checks if process 2 is checked
        b.style.backgroundColor="rgb(255, 157, 28)"; // changes the background color of process 2's div to orange to indicate that it is running
        a.style.backgroundColor="rgb(255, 157, 28)"; // changes the background color of process 1's div to orange to indicate that it is running
        var x = parseInt(sharedresource) // converts the shared resource value to an integer
        total1 = x + 500 // adds 500 to the shared resource value
        document.getElementById("previous").innerHTML = x; // sets the previous value to the shared resource value
        setTimeout(function() { // sets a timeout to simulate the process taking 2000ms to complete
            document.getElementById("sharedresource").innerHTML = total1; // updates the shared resource value in the DOM
            console.log(' Process 2 finished last');
            a.style.backgroundColor="red"; // changes the background color of process 1's div to red to indicate that it is finished
            setTimeout(function() { // sets a timeout to simulate the process taking 6000ms to complete
                b.style.backgroundColor="rgba(0, 255, 13, 0.8)"; // changes the background color of process 2's div to green to indicate that it is finished
                total2 = total1 - 300; // subtracts 300 from the shared resource value to account for the overwriting of the first finished process' value
                document.getElementById("sharedresource").innerHTML = total2; // updates the shared resource value in the DOM
            }, 4000);
        }, 2000);


    }else { // if neither process is checked it alerts the user to select a process
        alert("Select A Process"); 
    }
    }



