import React, { useState } from 'react';
import './add-skill-form.styles.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NiInput from '../ni-input/ni-input.component';
import NiButton from '../ni-button/ni-button.component';
import { addSkill, fetchSkills } from '../../redux/skills.slice';

const AddSkillForm = () => {
  const [skillName, setSkillName] = useState('');
  const [skillDescription, setSkillDescription] = useState('');
  const [skillType, setSkillType] = useState('');
  const [skillDate, setSkillDate] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const onNameChange = e => setSkillName(e.target.value);
  const onDescriptionChange = e => setSkillDescription(e.target.value);
  const onTypeChange = e => setSkillType(e.target.value);
  const onDateChange = e => setSkillDate(e.target.value);

  const attemptAddSkill = async e => {
    e.preventDefault();
    console.log('adding skill');
    const newSkill = {
      name: skillName,
      type: skillType,
      dateLearned: skillDate,
      detail: skillDescription,
    };
    const response = await dispatch(addSkill(newSkill));
    if (response.error) {
      console.log('broken broken broken ');
      console.log(response.error);
    } else {
      console.log('yaaaaaaaay');
      await dispatch(fetchSkills);
      history.push('/skills');
    }
  };
  return (

    <div className="add-skill-form">
      <h1 className="form-title">Add New Skill</h1>
      <form>
        <label htmlFor="skill-name">Name</label>
        <NiInput type="text" placeholder="Skill Name" required name="skill-name" id="skill-name" handleChange={onNameChange} />

        <label htmlFor="skill-desc">Description</label>
        <NiInput type="text" placeholder="Description" required name="skill-desc" id="skill-desc" handleChange={onDescriptionChange} />

        <label htmlFor="skill-type">Type</label>
        <NiInput type="text" placeholder="Skill Type" required name="skill-type" id="skill-type" handleChange={onTypeChange} />

        <label htmlFor="skill-date">Date Learned</label>
        <NiInput type="date" placeholder="Date Learned" required name="skill-date" id="skill-date" handleChange={onDateChange} />

        <button className="ni-button" onClick={attemptAddSkill}>Add Skill</button>

      </form>
    </div>
  );
};

export default AddSkillForm;
