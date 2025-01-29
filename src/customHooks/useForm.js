import {useState} from 'react';

const useForm = () => {
  const initialData = {
    name: '',
    number: '',
    email: '',
    message: '',
  };
  const [form, setForm] = useState(initialData);
  const [error, setError] = useState([]);

  const onValidate = (form) => {
    const error = [];
    const regexName = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    const regexNumber = /^\d{7,14}$/;
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const regexMessage = /^.{1,150}$/;

    if (!regexName.test(form.name)) {
      error[0] = true;
      error[1] = 'Name must content 3-40 characters';
      return error;
    }
    if (!regexNumber.test(form.number)) {
      error[0] = true;
      error[1] = 'Number must content 7 to 14 digit';
      return error;
    }
    if (!regexEmail.test(form.email)) {
      error[0] = true;
      error[1] = 'Invalid E-mail';
      return error;
    }
    if (!regexMessage.test(form.message)) {
      error[0] = true;
      error[1] = 'Message must content 1-150 characters';
      return error;
    }
    error[0] = false;
    return error;
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  };

  const handleSubmit = (e) => {
    const error = onValidate(form);
    if (error[0]) {
      setError(error);
    } else {
      console.log('Sending...');
    }
    e.preventDefault();
  };
  return {form, error, handleChange, handleSubmit};
};

export default useForm;
