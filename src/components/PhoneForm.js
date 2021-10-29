import {useState} from "react";

const PhoneForm = ({onCreate}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    // debugger
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {'name': name, 'phone': phone};
        onCreate(data);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder={name}
                   onChange={e => setName(e.target.value)}
                   name="name"/>
            <input type="text" placeholder="전화번호"
                   onChange={e => setPhone(e.target.value)} name="phone"/>
            <button type="submit"  variant="contained" color="primary">등록</button>
        </form>
        </div>
    );
}

export default PhoneForm;
