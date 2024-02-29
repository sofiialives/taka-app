import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0px 0px 15px 0px #fba65180;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <TailSpin
        visible={true}
        height={150}
        width={150}
        color="#79B0D8"
        ariaLabel="tail-spin-loading"
        radius={1}
      />
    </LoaderWrapper>
  );
};

export default Loader;
