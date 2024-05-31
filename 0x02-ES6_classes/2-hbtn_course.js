export default class HolbertonCourse {
  constructor(name, length, students) {
    this._checkType(name, 'string', 'Name');
    this._checkType(length, 'number', 'Length');
    this._checkType(students, 'array', 'Students');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._checkType(name, 'string', 'Name');
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._checkType(length, 'number', 'Length');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._checkType(students, 'array', 'Students');
    students.forEach((student) => this._checkType(student, 'string', 'Students'));
    this._students = students;
  }
