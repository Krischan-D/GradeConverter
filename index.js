const course = document.getElementById("course");
const grade = document.getElementById("grade");
const form = document.getElementById('gradeFrom');
const validation = document.querySelector('.validation');
form.addEventListener('submit', (el) =>{
    el.preventDefault()

    const courseValue = course.value.trim();
    const gradeValue = grade.value.trim();
   
    if(courseValue === "" || gradeValue === ""){
        
        validation.style.display = "block"
        course.style.borderColor = "red"
        grade.style.borderColor = "red"
    }else{
        validation.style.display = "none"
        course.style.borderColor = "#cbcbcb"
        grade.style.borderColor = "#cbcbcb"
        appendData(courseValue, gradeValue)
    }
    console.log(courseValue, gradeValue)

    course.value = "";
    grade.value = "";
})



function appendData(course, grade){
   const table =  document.getElementById("tableBody");

    const updatedGradeHTML = 
    `
        <tr>
            <td>${course}</td>
            <td>${grade}</td>
            <td>1.0</td>
        </tr>
    
    `

    table.insertAdjacentHTML('beforeend', updatedGradeHTML);

}