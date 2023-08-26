import axios from "axios";
import { useEffect, useState } from "react";
import { Report } from "notiflix";

function SessionPage() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleChangeMail = (evt) => {
    setEmail(evt.target.value);
  };
  const handleChangePassword = (evt) => {
    setpassword(evt.target.value);
  };

  const handleClickLogin = (evt) => {
    evt.preventDefault();
    const login = {
      email,
      password,
    };

    axios({
      method: "post",
      url: "https://fullstackcoderhouse-production.up.railway.app/api/sessions/login",
      data: login,
    })
      .then((result) => {
        window.localStorage.setItem("jwtCookieToken", result.data);
        Report.success("Iniciaste Sesion", "");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          Report.failure("Credenciales Incorrectas", "");
          console.error(error);
        }
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inicia Sesion
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleClickLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Direccion Email
              </label>
              <div className="mt-2">
                <input
                  onBlur={handleChangeMail}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  onBlur={handleChangePassword}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No eres miembro?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Registrate aqui
            </a>
          </p>
          <p className="mt-5 text-center text-sm text-gray-500">
            Iniciar Sesion con Github?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Click aqui
            </a>
          </p>
          <p className="mt-5 text-center text-sm text-gray-500">
            Olvidaste tu contraseña?{" "}
            <a
              href="/resetpassword"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Click aqui
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SessionPage;
