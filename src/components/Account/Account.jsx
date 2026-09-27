import { useState } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const Account = () => {
    const [mode, setMode] = useState("login");
    const [submitted, setSubmitted] = useState(false);
    return <div className="max-w-[560px] mx-auto px-10 py-32"><Heading highlight={mode === "login" ? "Welcome" : "Create"} heading={mode === "login" ? "Back" : "Account"} /><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="bg-zinc-100 rounded-xl p-7 mt-12 space-y-5"><label className="block text-zinc-800 font-semibold">Email<input required type="email" className="mt-2 w-full p-3 rounded-lg border border-zinc-300 focus:outline-orange-500" /></label>{mode === "register" && <label className="block text-zinc-800 font-semibold">Full name<input required className="mt-2 w-full p-3 rounded-lg border border-zinc-300 focus:outline-orange-500" /></label>}<label className="block text-zinc-800 font-semibold">Password<input required minLength="6" type="password" className="mt-2 w-full p-3 rounded-lg border border-zinc-300 focus:outline-orange-500" /></label><Button content={mode === "login" ? "Sign In" : "Register"} type="submit" />{submitted && <p className="text-green-700">Thanks. Your account form is ready.</p>}</form><button type="button" onClick={() => { setMode(mode === "login" ? "register" : "login"); setSubmitted(false); }} className="text-orange-500 font-semibold mt-5 cursor-pointer">{mode === "login" ? "Need an account? Register" : "Already registered? Sign in"}</button></div>;
};

export default Account;
