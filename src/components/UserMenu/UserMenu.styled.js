import styled from 'styled-components';

export const Container = styled.div`
display: flex;
gap: 10px;
align-content: center;
align-items: center;
justify-content: center;
}`;

export const ButtonLogOut = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  margin-right: 5px;
  margin-left: auto;
  font-size: 15px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  

  background-color: rgb(143, 139, 139);

  &:hover,
  &:focus {
    transform: scale(1.05);
     background-color: rgb(211, 78, 16);
}
}`

export const LoginAvatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  
`
