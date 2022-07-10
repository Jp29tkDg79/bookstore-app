import { FormEvent, ReactNode } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FormControl from "../UI/FormControl/FormControl";
import Notification from "../UI/Notification/Notification";

import { LoginTypes } from "../../types/Auth";

import { useInputState } from "../../hooks/useInputState";
import { useRequest } from "../../hooks/useRequest";

import { userActions } from "../../store/slices/user-slice";
import { RootDispatch } from "../../store";

import { API_LOGIN } from "../../constants/Api";
import { RequestSuccessTypes } from "../../types/Auth";
import { HOME } from "../../constants/Routes";

import { isEmail, isPassword } from "../../utils/valid";

type LoginProps = {
  children: ReactNode;
};

const Login = ({ children }: LoginProps) => {
  const {
    doChangeHandler,
    controls,
    isControlsError,
    setControlsError,
    ctrlsErrMsg,
  } = useInputState<LoginTypes>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch<RootDispatch>();
  const navigate = useNavigate();

  const { doRequest, error } = useRequest<RequestSuccessTypes>({
    url: API_LOGIN,
    method: "post",
    onSuccess: (data) => {
      console.log(data);
      dispatch(userActions.setUserState({ ...data }));
      navigate(HOME);
    },
  });

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = controls;

    !isEmail(email) &&
      setControlsError("email", "メールアドレスが未入力または不適切です");
    !isPassword(password) &&
      setControlsError("password", "パスワードは6文字以上入力してください");
    // エラーがあったか確認
    if (isControlsError()) return;

    await doRequest<LoginTypes>({ body: { email, password } });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <FormControl
        id="email"
        inputEle={{
          type: "email",
          name: "email",
          value: controls.email,
          onChange: (e) => doChangeHandler(e),
          required: false,
        }}
        text="メールアドレス"
      />
      {ctrlsErrMsg.email && (
        <Notification
          status="error"
          title="入力値エラー"
          message={ctrlsErrMsg.email}
        />
      )}
      <FormControl
        id="password"
        inputEle={{
          type: "password",
          name: "password",
          value: controls.password,
          onChange: (e) => doChangeHandler(e),
          required: true,
        }}
        text="パスワード"
      />
      {ctrlsErrMsg.password && (
        <Notification
          status="error"
          title="入力値エラー"
          message={ctrlsErrMsg.password}
        />
      )}
      {children}
      {error && (
        <Notification
          status="error"
          title="Request Error"
          message={error.message}
        />
      )}
    </form>
  );
};

export default Login;
