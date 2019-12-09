import styled from "styled-components";
import { respondTo } from "./maxins.style";

// Background color changes to
// aqua from breakpoint sm (768px)
export const ExampleComponent = styled.div`
  background-color: lime;

  ${respondTo.sm`
		background-color: aqua;
	`}
`;
