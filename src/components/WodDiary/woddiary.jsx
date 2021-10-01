import React from "react";
import { Button, Form, Table } from "react-bootstrap";



const WodDiary = ({ onCreateWod }) => {
  const onSubmitHandler = event => {
    event.preventDefault();

    const { name, reps, date, comment } = event.target.elements;

    if (name.value && reps.value && date.value) {
      onCreateWod(name.value, reps.value, date.value, comment.value);
    }

    name.value = "";
    reps.value = "";
    date.value = "";
    comment.value = "";
  };




  return (
      <div>
        <Form onSubmit={onSubmitHandler} className="createWod">
            <center><h1>Wod Diary</h1>
            <input type="text" placeholder="Wod Name" name="name" />
            <input type="number/time" placeholder="Reps/Time" name="reps" />
            <input type="date" name="date" />
            <input type="comment" placeholder="Things to Improve" name="comment" />
        <Button className="saveButton">Save</Button></center>
        <Button className='likes' to='src/components/Favorites/likespage.jsx' >Likes</Button>
        </Form>
        <Table>
            <thead>
                <tr>
                    <th>Wod Name</th>
                    <th>Reps/Time</th>
                    <th>Date</th>
                    <th>This to Imporve</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    </div>
  );
};

export default WodDiary;