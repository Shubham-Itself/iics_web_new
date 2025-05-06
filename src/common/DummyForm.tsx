import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

type FormData = {
    name: string;
    email: string;
    phone: string;
    course: string;
    location: string;
    referenceCode: string;
  };
  
  export default function DummyForm() {
    const [form, setForm] = useState<FormData>({
      name: '',
      email: '',
      phone: '',
      course: '',
      location: '',
      referenceCode: ''
    });
  
    const [message, setMessage] = useState<string>('');
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const res = await axios.post<{ id: number }>('http://localhost:4000/register', form);
        setMessage('✅ User created with ID: ' + res.data.id);
      } catch (err: any) {
        const errorMsg = err.response?.data?.error || err.message;
        setMessage('❌ Error: ' + errorMsg);
      }
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white space-y-4 text-black"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>
  
        {[
          { name: 'name', placeholder: 'Name' },
          { name: 'email', placeholder: 'Email', type: 'email' },
          { name: 'phone', placeholder: 'Phone' },
          { name: 'course', placeholder: 'Course' },
          { name: 'location', placeholder: 'Location Preference' },
          { name: 'referenceCode', placeholder: 'Reference Code' }
        ].map(({ name, placeholder, type = 'text' }) => (
          <input
            key={name}
            name={name}
            placeholder={placeholder}
            type={type}
            value={(form as any)[name]}
            onChange={handleChange}
            required={name === 'name' || name === 'email' || name === 'phone'}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        ))}
  
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
  
        {message && <p className="text-sm text-center mt-4 text-black">{message}</p>}
      </form>
    );
  }