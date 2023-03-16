const courseList = [
    {code: '1116', name: 'Business Communications'},
    {code: '1620', name: 'Fundamental Web Technologies'},
    {code: '1100', name: 'Organizational Behaviour'}
];

function course_number() {
    const input_box = document.getElementById("input_box").value;
    if (input_box.length !== 4 || isNaN(input_box)) {
        alert('Please enter a valid number:');
        return
    }
    let isTakingCourse = false;
    for (let i = 0; i < courseList.length; i++) {
        if (courseList[i].code == input_box) {
            console.log(`Yes I am taking the course: ${courseList[i].code} – ${courseList[i].input_box}`);
            isTakingCourse = true;
            break;
        }
    }
    if (!isTakingCourse) {
        courseList.push({code: `${input_box}`, name: null});
        console.log(`Added a new course: ${input_box}`);
    }
}