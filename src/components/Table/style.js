import Styled from "styled-components";
import theme from "../../styles/theme";
export const Container = Styled.div`

`;

export const LoaderWrapper = Styled.div`
`;

export const CustomTable = Styled.table`
  width: ${props => props.width || "unset"};
  border-spacing: 0;
  table-layout: fixed;
  position: relative;
  border-radius: 3px;
  & tbody {
    border-radius: 3px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
    background: #fff;
  }
`;

export const TableTitle = Styled.th`
  cursor: ${props => props.isSortable && "pointer"};
  background: transparent;
  padding: ${props => props.padding || "12px 5px"};
  width: ${props => props.width};
  text-align: left;
  color: #a0a0a0;
  font-family: OpenSans, sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  border: 0px;


  &:first-child {
    padding-left: 30px;
  }

  & .sortIndicator {
    position: relative;
    top: 2px;
  }

  :hover {
    color: ${props => props.isSortable && theme.text.mainColor};

    & .sortIndicator g {
      fill: ${props => props.isSortable && theme.text.mainColor};
    }

  }
`;

export const TableHead = Styled.thead`
  display: ${props => (props.show ? "" : "none")};
`;

export const TableBody = Styled.tbody`
  position: relative;
  border-radius: 3px;
`;

export const TableHeadRow = Styled.tr`
`;

export const TableRow = Styled.tr`
  /* border-bottom: solid 1px #eeedef; */
  /*background: #fff;
  border-radius: 3px;*/
  &:not(:first-child):after {
    background-color: #eeedef;
    content: '';
    display: block;
    z-index: 1;
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translate(-50%,0);
    width: 93%;
  }

  :hover {
    background: #f5f5f5;
  }

  &:nth-child(2n) {
    ${props => props.striped && "background: #f5f5f5"};
  }
`;

export const TableCell = Styled.td`
  width: ${props => props.width || "auto"};
  padding: 15px 5px;
  text-align: ${props => props.textAlign || "left"};
  color: #4a4a4a;
  font-family: OpenSans, sans-serif;
  font-size: 12px;
  border: 0px;
  font-weight: 600;
  &:first-child:not(:only-child) {
    padding-left: 30px;
  }
`;

export const LoadingTableContent = Styled.tbody`
  position: absolute;
  left:0;
  bottom:0;
  border-radius: 3px;
  width: 100%;
  height: calc(100% - ${props => (props.hasHeader ? "42px" : "0px")});
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  background: rgba(255,255,255, 0.95);
  & span {
    display: block;
    margin-top: 11px;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    text-align: center;
    color: #333333;
  }
`;

export const DefaultEmptyTableCell = Styled.td`
  padding: 32px;

  :hover {
    background: #fff;
  }
`;
