import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    @media (max-width: 430px) {
      margin-left: -0.5rem;
    }

    th {
      color: var(--text);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;

      @media (max-width: 430px) {
        padding: 1rem 1rem;
      }
    }

    td {
      padding: 1rem 1rem;
      border: 0;
      background: var(--shape);
      color: var(--text);
      border-radius: 0.25rem;

      @media (max-width: 430px) {
        font-size: 0.75rem;
        padding: 1rem 0.5rem;
      }

      &:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      button {
        background: transparent;
        border: 1px solid transparent;

        &:hover {
          border-bottom: 1px solid red;
        }

        img {
          width: 2rem;
          height: 2rem;

          @media (max-width: 430px) {
            width: 1rem;
            height: 1rem;
            margin-left: 0.25rem;
          }
        }
      }

      &:first-child {
        color: var(--title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
