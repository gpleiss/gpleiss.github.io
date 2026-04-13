import rawStudents from './students.json';

import profileOutline from '../images/profile_outline.jpg';
import donneyFan from '../images/donney_fan.jpg';
import loganYates from '../images/logan_yates.jpg';
import nathanCantafio from '../images/nathan_cantafio.jpeg';
import timZhou from '../images/tim_zhou.jpg';
import zacharyLau from '../images/zachary_lau.jpg';

const _studentImages = {
    "donneyFan": donneyFan,
    "timZhou": timZhou,
    "zacharyLau": zacharyLau,
    "loganYates": loganYates,
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
