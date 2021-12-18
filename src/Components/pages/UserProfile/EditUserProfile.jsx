import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { getUser } from '../../../Api/api';
import './UserProfile.css';

import EditUser from '../../misc/EditUser/EditUser';

const EditUserProfile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const resData = await getUser(token);

      setUser(resData);
    };
    fetchData();
  }, []);

  const backArrow = (
    <BiLeftArrowAlt
      size="28px"
      onClick={() => navigate('/meu-perfil')}
    />
  );

  return (
    <div>
      <div style={{ marginTop: '10vh', marginLeft: '25vw' }}>
        {backArrow}
        Voltar
      </div>
      {user.name && <EditUser user={user} />}
    </div>
  );
};

export default EditUserProfile;
