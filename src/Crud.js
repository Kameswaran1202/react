import React from "react";
export class Crud extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        age: "",
        rollNumber: "",
        mark: "",
        students: [],
        searchedStudent: {},
        nameToUpdate: "",
        ageToUpdate: "",
        upchoice:"",
        rollNumberToUpdate: "",
      };
    }
  
    InputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value,
      });
    };
  
    Submit = (event) => {
      event.preventDefault();
      const { name, age, rollNumber, mark } = this.state;
      const newStudent = { name, age, rollNumber, mark };
      this.setState((prevState) => ({
        students: [...prevState.students, newStudent],
        name: "",
        age: "",
        rollNumber: "",
        mark: "",
      }));
    };
  
    Search = (event) => {
      event.preventDefault();
      const searchedStudent = this.state.students.find(
        (student) => student.rollNumber === this.state.rollNumber
      );
      if (searchedStudent) {
        this.setState({
          searchedStudent,
        });
      } else {
        this.setState({
          searchedStudent: {},
        });
        alert("Student not found!");
      }
    };
  
    UpdateSubmit = (event) => {
      event.preventDefault();
      const { nameToUpdate, ageToUpdate, rollNumberToUpdate,upchoice,name,age } = this.state;
      console.log(name,age)
      const updatedStudents = this.state.students.map((student) => {
        if (student.rollNumber === rollNumberToUpdate) {
          if(upchoice==="name"){
            return {
              ...student,
              name: nameToUpdate,
              
            };

          }
          if(this.state.upchoice==="age"){
            return {
              ...student,
              age: ageToUpdate,
            };
          }
          
        }
        return student;
      });
      this.setState({
        students: updatedStudents,
        nameToUpdate: "",
        ageToUpdate: "",
        rollNumberToUpdate: "",
        searchedStudent: {},
      });
    };
  
    Delete = (event) => {
      event.preventDefault();
      const updatedStudents = this.state.students.filter(
        (student) => student.rollNumber !== this.state.rollNumber
      );
      this.setState({
        students: updatedStudents,
        searchedStudent: {},
      });
    };
  
    render() {
      const { name, age, rollNumber, mark } = this.state;
      const { searchedStudent, nameToUpdate, ageToUpdate, rollNumberToUpdate } =
        this.state;
  
      return (
        <div>
          <form onSubmit={this.Submit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.InputChange}
              />
            </label>
            <br />
            <label>
              Age:
              <input
                type="text"
                name="age"
                value={age}
                onChange={this.InputChange}
              />
            </label>
            <br />
            <label>
              Roll Number:
              <input
                type="text"
                name="rollNumber"
                value={rollNumber}
                onChange={this.InputChange}
              />
            </label>
            <br />
            <label>
              Mark:
              <input
                type="text"
                name="mark"
                value={mark}
                onChange={this.InputChange}
              />
            </label>
            <br />
            <button type="submit">Add Student</button>
          </form>
  
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Roll Number</th>
                <th>Mark</th>
                </tr>
      </thead>
      <tbody>
        {this.state.students.map((student) => (
          <tr key={student.rollNumber}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.rollNumber}</td>
            <td>{student.mark}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <form onSubmit={this.Search}>
      <label>
        Roll Number:
        <input
          type="text"
          name="rollNumber"
          value={this.state.rollNumber}
          onChange={this.InputChange}
        />
      </label>
      <br />
      <button type="submit">Search Student</button>
    </form>

    {Object.keys(searchedStudent).length !== 0 && (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Roll Number</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{searchedStudent.name}</td>
            <td>{searchedStudent.age}</td>
            <td>{searchedStudent.rollNumber}</td>
            <td>{searchedStudent.mark}</td>
          </tr>
        </tbody>
      </table>
    )}

<form onSubmit={this.UpdateSubmit}>
  <label>
    Roll Number to update:
    <input
      type="text"
      name="rollNumberToUpdate"
      value={rollNumberToUpdate}
      onChange={this.InputChange}
    />
  </label>
  <button  onClick={() => this.setState({ upchoice: "name" })}>Name</button>
  <button onClick={() => this.setState({ upchoice: "age" })}>Age</button>
  <br />
  
  {this.state.upchoice === "name" ? (
    <div>
      <label style={{ display: "inline-block" }}>
        Name:
        <input
          type="text"
          name="nameToUpdate"
          value={nameToUpdate}
          onChange={this.InputChange}
        />
      </label>
    </div>
  ) : (
    <div>
      <label style={{ display: "inline-block" }}>
        Age:
        <input
          type="text"
          name="ageToUpdate"
          value={ageToUpdate}
          onChange={this.InputChange}
        />
      </label>
    </div>
  )}
  
  <br />
  <button type="submit">Update</button>
</form>

    <form onSubmit={this.Delete}>
      <label>
        Roll Number to delete:
        <input
          type="text"
          name="rollNumber"
          value={this.state.rollNumber}
          onChange={this.InputChange}
        />
      </label>
      <br />
      <button type="submit">Delete Student</button>
    </form>
  </div>
);
    }

}

export default Crud;