import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NiInput from '../ni-input/ni-input.component';
import { addInterest, fetchInterests } from '../../redux/interests.slice';
import './add-interest-form.styles.scss';

const AddinterestForm = () => {
  const [interestName, setInterestName] = useState('');
  const [interestDescription, setInterestDescription] = useState('');
  const [interestType, setInterestType] = useState('');
  const [interestCurrent, setInterestCurrent] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory();

  const onNameChange = e => setInterestName(e.target.value);
  const onDescriptionChange = e => setInterestDescription(e.target.value);
  const onTypeChange = e => setInterestType(e.target.value);
  const onCurrentChange = e => setInterestCurrent(e.target.checked);

  const attemptAddinterest = async e => {
    e.preventDefault();
    const newinterest = {
      name: interestName,
      type: interestType,
      current: interestCurrent,
      detail: interestDescription,
    };
    const response = await dispatch(addInterest(newinterest));
    if (!response.error) {
      await dispatch(fetchInterests);
      history.push('/interests');
    }
  };
  return (

    <div className="add-interest-form">
      <h1 className="form-title">Add New Interest</h1>
      <form>
        <label htmlFor="interest-name">Name</label>
        <NiInput type="text" placeholder="Interest Name" required name="interest-name" id="interest-name" handleChange={onNameChange} />

        <label htmlFor="interest-desc">Description</label>
        <NiInput type="text" placeholder="Description" required name="interest-desc" id="interest-desc" handleChange={onDescriptionChange} />

        <label htmlFor="interest-type">Type</label>
        <NiInput type="text" placeholder="Interest Type" required name="interest-type" id="interest-type" handleChange={onTypeChange} />

        <label htmlFor="interest-date">Current</label>
        <NiInput type="checkbox" placeholder="Current" required name="interest-date" id="interest-date" handleChange={onCurrentChange} />

        <button className="ni-button" onClick={attemptAddinterest}>Add interest</button>

      </form>
    </div>
  );
};

export default AddinterestForm;
