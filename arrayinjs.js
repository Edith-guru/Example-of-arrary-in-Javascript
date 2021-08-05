var students = ['Edith', 'Christine', 'Ken'];

console.log("Length of original students array: " + students.length); 
//Prints the length of array 'students'

students.push('Ivy'); 
//Add a new element(name) at the end of the array

console.log("Length of students array after adding an element: "
            + students.length); 
//Prints the length of array 'students'

students.pop('Ivy');//Remove element at the end of the array
console.log(students);

//Reverse the order of elements in the array
students.reverse();
console.log(students);

//Sort the elements of this array
students.sort(); 
console.log(students);