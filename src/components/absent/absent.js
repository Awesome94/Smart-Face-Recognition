import React from "react";
import "./absent.css";

import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)

import { React15Tabulator } from "react-tabulator"; // for React 15.x

const columns = [
  { title: "Name", field: "name", width: 150 },
  { title: "Index No", field: "index_no", align: "left"},
  { title: "Class", field: "class", align: "left"},
  { title: "Notes", field: "notes", align: "left"}
];
const data = [
  {
    id: 1,
    name: "Lubowa Barnabas",
    index_no: "u/12/0034",
    class: 's2',
    notes: 'Defaulted school fees payement',
  },
  {
      id: 1,
      name: "Mugisa Julius",
      index_no: "u/12/0009",
      class: 's4',
      notes: 'Is sick and getting medication from the school Nurse'
  },

  {
      id: 1,
      name: "Mutisya Anthony",
      index_no: "u/12/0009",
      class: 's1',
      notes: 'Dodged class'
  },
  {
      id: 1,
      name: "Muwonge Chris",
      index_no: "u/12/0009",
      class: 's2',
      notes: 'No reason'
  },
  {
      id: 1,
      name: "Mutumba Julius",
      index_no: "u/12/0009",
      class: 's4',
      notes: 'On Suspension'
  },
  {
      id: 1,
      name: "mukisa George",
      index_no: "u/12/0067",
      class: 's3',
      notes: 'came late'
  },
];

const classes = {
  S1: "S1",
  S2: "S2",
  S3: "S3",
  S4: "S4",
  S5: "S5"
};
const editableColumns = [
  {
    title: "Name",
    field: "name",
    width: 130,
    editor: "input",
    headerFilter: "input"
  },
  {
    title: "Index No",
    field: "index_no",
    width: 130,
    align: "left",
  },
  {
    title: "Class",
    field: "class",
    editor: "autocomplete",
    width: 100,
    align: "left",
    editorParams: {
      allowEmpty: true,
      showListOnEmpty: true,
      values: classes
    },
    headerFilter: "select",
    headerFilterParams: { values: classes }
  },
  // { title: "Date Of Birth", field: "dob", align: "center", editor: "input" },
  {
    title: "Notes",
    field: "notes",
    align: "left",
    formatter: "field",
    editor: true
  }
];

class Home extends React.Component {
  state = {
    data: []
  };
  ref = null;

  rowClick = (e, row) => {
    console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    // console.log("rowClick id: ${row.getData().id}", row, e);
  };

  setData = () => {
    this.setState({ data });
  };

  clearData = () => {
    this.setState({ data: [] });
  };

  render() {
    const options = {
      height: 150,
      movableRows: true
    };
    return (
      <div>
        <h3>Absent Students</h3>
        <React15Tabulator columns={editableColumns} data={data} />
      </div>
    );
  }
}

export default Home;