import { IProps } from "../interfaces";
import { IButtonProps } from "./IButtonProps";

export interface IPrivacyPolicyProps extends IProps {
  white?: boolean;
  linkText: string;
  title: string;
  description: string;
  buttonText: string;
  link?: string;
  button?: IButtonProps;
}
