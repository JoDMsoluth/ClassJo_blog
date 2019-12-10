import styled from "styled-components";
import { mediaSize } from "./maxins.style";

// Background color changes to
// aqua from breakpoint sm (768px)
export const ExampleComponent = styled.div`
  background-color: lime;

  ${mediaSize.sm`
		background-color: aqua;
	`}
`;
