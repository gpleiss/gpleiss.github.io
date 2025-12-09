import rawStudents from './students.json';

import donneyFan from '../images/donney_fan.jpg';
import timZhou from '../images/tim_zhou.jpg';
import isaacRankin from '../images/isaac_rankin.png';
import nathanCantafio from '../images/nathan_cantafio.jpeg';
import profileOutline from '../images/profile_outline.jpg';

const _studentImages = {
    "donneyFan": donneyFan,
    "timZhou": timZhou,
    "zacharyLau": null,
    "isaacRankin": isaacRankin,
    "loganYates": null,
    "nathanCantafio": nathanCantafio,
}

const students = rawStudents.map((student) => {
  student.image = _studentImages[student.id] || profileOutline;
  if (!student.name) {
    console.warn("Student without name:", student);
  }
  if (!student.id) {
    console.warn("Student without ID:", student);
  }
  return student;
});

const studentsDict = {};
students.forEach((item) => {
  if (item.id in studentsDict) {
    console.warn("Duplicate student ID:", item.id);
  }
  studentsDict[item.id] = item;
});

export { students, studentsDict };
