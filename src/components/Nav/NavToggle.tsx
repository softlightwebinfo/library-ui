import React, {CSSProperties} from "react";
import classNames from "classnames";
import styles from '../../sass/modules/NavToggle.module.scss';
import {INavToggleProps} from "../../props/INavToggleProps";
import {Navbar, NavbarBody} from "../Navbar";
import {Nav} from "./Nav";
import {Dropdown, DropdownItem} from "../Dropdown";
import {Icon} from "../Icon";
import {faAngleLeft, faAngleRight, faCog} from "@fortawesome/free-solid-svg-icons";
import {NavItem} from "./NavItem";

const iconStyles: CSSProperties = {
    width: 56,
    height: 56,
    lineHeight: 56,
    textAlign: 'center'
};

export const NavToggle = ({className, expand, onChange, style, ...props}: INavToggleProps) => {
    const cs = classNames(styles.NavToggle, className);
    return (
        <Navbar appearance="subtle" className={cs} style={style}>
            <NavbarBody>
                <Nav>
                    <Dropdown
                        placementMenu="top-start"
                        trigger="click"
                        renderTitle={children => {
                            return <Icon style={iconStyles} icon={faCog}/>;
                        }}
                    >
                        <DropdownItem>Help</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                        <DropdownItem>Sign out</DropdownItem>
                    </Dropdown>
                </Nav>

                <Nav pullRight>
                    <NavItem onSelect={onChange} style={{width: 56, textAlign: 'center'}}>
                        <Icon icon={expand ? faAngleLeft : faAngleRight}/>
                    </NavItem>
                </Nav>
            </NavbarBody>
        </Navbar>
    )
};