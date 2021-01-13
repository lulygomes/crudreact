import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  margin: 20px;
  background-color: #fdfdfd;
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.68);

  form.form {
    margin: 16px;
    display: inline-flex;

    div {
      max-width: 100%;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 16px;

  button {
    margin-bottom: 8px;
    padding: 16px;
    border: none;
    border-radius: 10px;
  }

  button.save {
    background-color: #00e600;
    font-weight: 500;
    letter-spacing: 0.1rem;
    transition: opacity 0.4s;
    transition: box-shadow 0.2s;

    &:hover {
      opacity: 0.8;
      box-shadow: 0px 0px 7px 0px #000000;
    }
  }

  button.cancel {
    background-color: #e60000;
    font-weight: 500;
    letter-spacing: 0.1rem;

    transition: opacity 0.4s;
    transition: box-shadow 0.2s;

    &:hover {
      opacity: 0.8;
      box-shadow: 0px 0px 7px 0px #000000;
    }
  }
`;

export const Table = styled.table`
  margin-top: 20px;
  width: 100%;

  tr {
    margin-top: 8px;
  }

  th {
    margin: 4px 5%;
    border-right: solid 1px #605c6b;
  }

  td {
    margin: 4px 5%;
    padding: 8px;
    border-bottom: solid 1px #605c6b;
  }
`;

// export const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 20px;

//   div {
//     margin-left: 8px;
//     max-height: 250px;

//     h3 {
//       margin-bottom: 15px;
//     }
//   }
// `;
