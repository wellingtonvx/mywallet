import styled from "styled-components";

export const Contaienr = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  section {
    max-width: 680px;
  }

  @media (max-width: 430px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section-left {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #516bff, #889af5);

    @media (max-width: 430px) {
      display: none;
    }

    h1 {
      font-size: 3rem;
      max-width: 20rem;
      text-align: center;
      color: var(--shape);
    }

    img {
      margin-top: 4rem;
      width: 35rem;
    }
  }

  .section-right {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 15rem;
        margin-bottom: 4rem;
      }

      input {
        width: 20rem;
        height: 2rem;
        border: 0;
        border-radius: 0.5rem;

        padding: 0 1rem;

        & + input {
          margin-top: 1rem;
        }

        &:hover {
          background: #b1d9b4;
        }
      }

      button {
        width: 15rem;
        height: 2rem;
        margin-top: 1.5rem;
        border: 0;
        border-radius: 0.5rem;

        background: #33cc95;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.85);
        }
      }
    }
    .button-social-container {
      button {
        width: 15rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        margin-top: 1.5rem;
        border: 0;
        border-radius: 0.5rem;

        background: #ea4335;
        color: #fff;

        img {
          width: 2rem;
          height: 2rem;
          margin-bottom: 0.1rem;
          margin-right: 1rem;
        }
      }
    }
  }
`;
