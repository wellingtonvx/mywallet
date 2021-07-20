import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--title);

    @media (max-width: 430px) {
      padding: 0.45rem 1rem;
      margin-left: -0.5rem;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;

      @media (max-width: 430px) {
        font-size: 1rem;
        margin-top: 0.25rem;
      }
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
