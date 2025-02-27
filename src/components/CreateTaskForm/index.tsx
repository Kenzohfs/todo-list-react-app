import React, { useState } from 'react';
import Input from '../Input';
import SelectComp, { IOption } from '../Select';
import { AssignMe, AssignMeText, Field, FormContainer, Label } from './styled';

interface ICreateTaskFormProps {}

const CreateTaskForm: React.FC<ICreateTaskFormProps> = () => {
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

  const handleSelectChange = (option: IOption | null) => {
    setSelectedOption(option);
    console.log('Valor selecionado:', option);
  };

  const onAssignToMeClick = () => {};

  return (
    <FormContainer>
      <Field>
        <Label>Título*</Label>
        <Input small />
      </Field>

      <Field>
        <Label>Status*</Label>
        <SelectComp
          options={[
            { value: '1', label: 'To Do' },
            { value: '2', label: 'Doing' },
            { value: '3', label: 'Done' },
          ]}
          value={selectedOption}
          onChange={handleSelectChange}
          placeholder="Selecione o status"
          isClearable
        />
      </Field>

      <Field>
        <Label>Tipo de item*</Label>
        <SelectComp
          options={[
            { value: '1', label: 'To Do' },
            { value: '2', label: 'Doing' },
            { value: '3', label: 'Done' },
          ]}
          value={selectedOption}
          onChange={handleSelectChange}
          placeholder="Selecione o status"
          isClearable
        />
      </Field>

      <Field>
        <Label>Responsável</Label>
        <Input small />
        <AssignMe>
          <AssignMeText onClick={onAssignToMeClick}>
            Atribuir a mim
          </AssignMeText>
        </AssignMe>
      </Field>
    </FormContainer>
  );
};

export default CreateTaskForm;
