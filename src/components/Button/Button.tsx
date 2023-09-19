import { ButtonProps } from "./Button.props";

export default function Button({ children, appearance = "orange", ...props }: ButtonProps): JSX.Element {

    const classAppearance = appearance === "orange" ? "px-4 py-2 rounded-md bg-buttonColor border border-solid border-buttonColor text-slate-100 hover:bg-activeLink hover:border-activeLink hover:transition-all "
        : "px-4 py-2 rounded-md border border-solid border-textColor text-textColor hover:text-hoverColor hover:border-hoverColor hover:transition-all"

    return <button className={classAppearance}{...props}>{children}</button>
}
