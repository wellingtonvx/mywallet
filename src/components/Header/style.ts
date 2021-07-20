import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1180px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-and-avatar {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      margin-top: 0.5rem;

      img {
        width: 3.5rem;
        height: 3.5rem;
        margin-right: 1rem;
        border-radius: 50%;
      }
    }

    h2 {
      color: #fff;
      @media (max-width: 430px) {
        font-size: 1rem;
      }
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 1px solid transparent;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    @media (max-width: 430px) {
      height: 2rem;
      font-size: 0.6rem;
      padding: 0 1rem;

      & + button {
        margin-left: 0.25rem;
      }
    }

    & + button {
      margin-left: 1rem;
    }

    &:hover {
      filter: brightness(0.9);
      border: 1px solid #ccc;
    }
  }
`;
