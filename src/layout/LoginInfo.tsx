interface Props {
  isLoggedIn: boolean;
}

const LoginInfo = ({ isLoggedIn }: Props) => {
  return (
    <div>{isLoggedIn ? <div>로그인도이</div> : <div>로그인안도이</div>}</div>
  );
};

export default LoginInfo;
