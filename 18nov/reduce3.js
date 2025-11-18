const students = [
    { name: "yash", grade: "A" },
    { name: "mohit", grade: "B" },
    { name: "rahul", grade: "A" },
];

const ans = students.reduce((acc, curr) => {
    console.log("acc:", acc);
    console.log("curr:", curr);
    console.log("acc[curr.grade]:", acc[curr.grade] || []);
    acc[curr.grade] = acc[curr.grade] || [];
    acc[curr.grade].push(curr);

    return acc;
}, {});
console.log(ans);