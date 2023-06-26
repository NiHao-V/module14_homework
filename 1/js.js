/*
Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
*/

const parser = new DOMParser();

const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

//console.log(xmlString)

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
function getStudentArr(studentNode) {
    let studentArr = [];
    studentNode.forEach(function(Item,index){
      const nameNode=Item.querySelector("name");
      const langNode=nameNode.getAttribute("lang");
      const firstNode=Item.querySelector("first");
      const secondNode=Item.querySelector("second");
      const ageNode=Item.querySelector("age");
      const profNode=Item.querySelector("prof");
      studentArr[index] = {
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: ageNode.textContent,
        prof: profNode.textContent,
        lang: langNode.textContent};
      console.log(studentNode);
      })
    return studentArr;
    }
  let result = {
    [listNode.tagName]: getStudentArr(studentNode)
  };
  console.log(result);
