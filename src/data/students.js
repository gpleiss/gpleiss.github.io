import rawStudents from './students.json';

import donneyFan from '../images/donney_fan.jpg';
import timZhou from '../images/tim_zhou.jpg';
import profileOutline from '../images/profile_outline.jpg';

const _studentImages = {
    "donneyFan": donneyFan,
    "timZhou": timZhou,
    "zacharyLau": null,
    "nathanCantafio": null,
    "tristanCinquin": null,
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
