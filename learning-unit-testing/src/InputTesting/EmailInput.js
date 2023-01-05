import { useState } from 'react';

function EmailInput() {
    const [email, setEmail] = useState('');

    return (
        <div>
        <input
            type="email"
            placeholder="Please enter your email"
            data-testid="email-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
 
      { email && !(/\S+@\S+\.\S+/).test(email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span> }
    </div>
  )
}

export default EmailInput