// let test = ["A", "B", "C"]

// console.log(Math.random(test))

// console.log(Math.random())

// console.log(Math.random()) * test.length

// console.log(test[Math.floor(Math.random() * test.length)])

//#F2F2F2

// let hexColor = [0,1,2,3,4,5,7,8,9,"A","B","C","D","E","F"]

// console.log(hexColor[Math.floor(Math.random() * hexColor.length)])

// let colorParts=[]

// for(let i = 0; i < 6; i++)
// {
//     colorParts.push(hexColor[Math.floor(Math.random() * hexColor.length)])
// }
// console.log(colorParts)

////////// console.log(colorParts.join(""))

////////// console.log(`#${colorParts.join("")}`)

// let finalColor = `#${colorParts.join("")}`;

// document.body.append(finalColor);


// document.body.style.backgroundColor = finalColor;


///////////////////////////////////////////////////////////////

// var randomColor = Math.floor(Math.random()*16777215).toString(16);
//   document.getElementById("mainButton").style.backgroundColor = '#' + randomColor;

////////////////////////////////////////////////////////////////////////////////////

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }



  