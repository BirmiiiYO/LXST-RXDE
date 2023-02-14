import styled from 'styled-components'

export const Image = styled.img`
  max-width: 540px;
  max-height: 420px;
  border: 1px solid #000000;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  margin-right: 30px;
`
export const TeamMemberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 120px 0 0;
  svg {
    width: 30px;
    margin: 5px;
    fill: black;
    stroke: grey;
  }
  &:last-child {
    margin-bottom: 120px;
  }
`
