import { ReactNode, FormEvent } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootDispatch } from "../../store";
import { userActions } from "../../store/slices/user-slice";

import FormControl from "../UI/FormControl/FormControl";
import Notification from "../UI/Notification/Notification";

import { useInputState } from "../../hooks/useInputState";
import { useRequest } from "../../hooks/useRequest";

import { SigninTypes, RequestSuccessTypes } from "../../types/Auth";

import { API_SIGNIN } from "../../constants/Api";
import { HOME } from "../../constants/Routes";

import { isEmail, isEmpty, isPassword } from "../../utils/valid";

type SigninProps = {
  children: ReactNode;
};

const Signin = ({ children }: SigninProps) => {
  const {
    controls,
    doChangeHandler,
    isControlsError,
    setControlsError,
    ctrlsErrMsg,
  } = useInputState<SigninTypes>({
    email: "",
    password: "",
    name: "",
  });

  const dispatch = useDispatch<RootDispatch>();
  const navigate = useNavigate();

  const { doRequest, error } = useRequest<RequestSuccessTypes>({
    url: API_SIGNIN,
    method: "post",
    onSuccess: (data) => {
      dispatch(userActions.setUserState({ ...data }));
      navigate(HOME);
    },
  });

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password } = controls;
    isEmpty(name) && setControlsError("name", "名前が未入力です");
    !isEmail(email) &&
      setControlsError("email", "メールアドレスが未入力または不適切です");
    !isPassword(password) &&
      setControlsError("password", "パスワードは6文字以上入力してください");
    // 各項目の入力値にエラーの箇所があったか
    if (isControlsError()) return;

    await doRequest<SigninTypes>({
      body: { name, email, password },
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <FormControl
        id="name"
        inputEle={{
          type: "text",
          name: "name",
          value: controls.name,
          onChange: (e) => doChangeHandler(e),
          required: true,
        }}
        text="名前"
      />
      {ctrlsErrMsg.name && (
        <Notification
          status="error"
          title="入力値エラー"
          message={ctrlsErrMsg.name}
        />
      )}
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

export default Signin;
