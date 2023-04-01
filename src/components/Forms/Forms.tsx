import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './Forms.css';

export interface IFormCards {
  photo: string;
  name: string;
  date: string;
  carCategory: string;
  daysToRent: string;
  accept: boolean;
}

type Props = {
  updateCardsList: (data: IFormCards) => void;
  openModal: () => void;
};

const Forms: FC<Props> = ({ updateCardsList, openModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormCards>();

  const onSubmit: SubmitHandler<IFormCards> = (data: IFormCards) => {
    const path = URL.createObjectURL(new Blob([data.photo[0]]));
    console.log(path);
    data.photo = path;
    updateCardsList(data);
    openModal();
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Name</legend>
          <p>{errors.name?.message}</p>
          <input
            type="text"
            {...register('name', {
              required: 'This field is required',
              minLength: {
                value: 2,
                message: 'Name must be more than two characters',
              },
              maxLength: {
                value: 20,
                message: 'Name must be less than 20 characters',
              },
              validate: (value) =>
                value[0] === value[0].toUpperCase() || 'Name must starts with a capital letter',
            })}
          />
        </fieldset>
        <fieldset>
          <legend>Choise date:</legend>
          <p>{errors.date?.message}</p>
          <input
            type="date"
            {...register('date', {
              required: 'This field is required',
              validate: (value) => value > new Date().toISOString() || 'Please select correct date',
            })}
          />
        </fieldset>
        <fieldset>
          <legend>Car class</legend>
          <p>{errors.carCategory?.message}</p>
          <select
            {...register('carCategory', {
              required: true,
              validate: (value) => value !== '0' || 'Please select car class',
            })}
            defaultValue="0"
          >
            <option value="0">Not selected</option>
            <option value="Econom">Econom</option>
            <option value="Comfort">Comfort</option>
            <option value="Premium">Premium</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>How many days?</legend>
          <p>{errors.daysToRent?.message}</p>
          <div>
            <label>
              <input
                type="radio"
                {...register('daysToRent', {
                  required: 'Please choose the duration of the rental',
                })}
                name="daysToRent"
                value="1 - 3"
              />
              1 - 3
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                {...register('daysToRent', {
                  required: 'Please choose the duration of the rental',
                })}
                name="daysToRent"
                value="3 - 7"
              />
              3 - 7
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                {...register('daysToRent', {
                  required: 'Please choose the duration of the rental',
                })}
                name="daysToRent"
                value="More"
              />
              More
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Drivers license photo</legend>
          <p>{errors.photo?.message}</p>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            {...register('photo', { required: 'Please add drivers license photo' })}
          />
        </fieldset>
        <fieldset>
          <legend>Privacy Policy</legend>
          <p>{errors.accept?.message}</p>
          <label>
            <input
              type="checkbox"
              id="check1"
              {...register('accept', { required: 'Please accept' })}
            />
            I agree
          </label>
        </fieldset>
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Forms;
