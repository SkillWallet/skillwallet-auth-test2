/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ErrorCorrectionLevel, OutputMode } from "./components/skillwallet-auth/enums";
export namespace Components {
    interface AuthImage {
        "image": string;
    }
    interface LoginMenu {
        "isPartner": Boolean;
    }
    interface NewUser {
        "community": any;
        "isPartner": Boolean;
    }
    interface QrCode {
        "colorDark": string;
        "colorLight": string;
        "contents": string;
        "errorCorrectionLevel": ErrorCorrectionLevel;
        "margin": number;
        "outputMode": OutputMode;
        "scale": number;
    }
    interface QrModal {
        "community": any;
        "textKey": string;
    }
    interface RolesScreenNewUser {
        "buttonClass": string;
        "community": any;
        "isLoading": boolean;
        "isPartner": Boolean;
        "roleSelected": string;
        "skill": number;
        "validator": string | any;
    }
    interface RolesScreenPartner {
        "buttonClass": string;
        "community": any;
        "communityAddress": string;
        "isLoading": boolean;
        "isPartner": Boolean;
        "partnersAddress": string;
        "roleSelected": string;
    }
    interface SkillwalletAuth {
        "allowCreateNewUser": string;
    }
    interface UserDetails {
        "community": any;
        "isPartner": Boolean;
        "userUploadedImage": any;
        "validator": string | any;
    }
    interface UserRole {
        "community": any;
        "communityAddress": string;
        "isPartner": Boolean;
        "partnersAddress": string;
        "validator": string | any;
    }
    interface UsersModal {
        "isPartner": Boolean;
    }
}
declare global {
    interface HTMLAuthImageElement extends Components.AuthImage, HTMLStencilElement {
    }
    var HTMLAuthImageElement: {
        prototype: HTMLAuthImageElement;
        new (): HTMLAuthImageElement;
    };
    interface HTMLLoginMenuElement extends Components.LoginMenu, HTMLStencilElement {
    }
    var HTMLLoginMenuElement: {
        prototype: HTMLLoginMenuElement;
        new (): HTMLLoginMenuElement;
    };
    interface HTMLNewUserElement extends Components.NewUser, HTMLStencilElement {
    }
    var HTMLNewUserElement: {
        prototype: HTMLNewUserElement;
        new (): HTMLNewUserElement;
    };
    interface HTMLQrCodeElement extends Components.QrCode, HTMLStencilElement {
    }
    var HTMLQrCodeElement: {
        prototype: HTMLQrCodeElement;
        new (): HTMLQrCodeElement;
    };
    interface HTMLQrModalElement extends Components.QrModal, HTMLStencilElement {
    }
    var HTMLQrModalElement: {
        prototype: HTMLQrModalElement;
        new (): HTMLQrModalElement;
    };
    interface HTMLRolesScreenNewUserElement extends Components.RolesScreenNewUser, HTMLStencilElement {
    }
    var HTMLRolesScreenNewUserElement: {
        prototype: HTMLRolesScreenNewUserElement;
        new (): HTMLRolesScreenNewUserElement;
    };
    interface HTMLRolesScreenPartnerElement extends Components.RolesScreenPartner, HTMLStencilElement {
    }
    var HTMLRolesScreenPartnerElement: {
        prototype: HTMLRolesScreenPartnerElement;
        new (): HTMLRolesScreenPartnerElement;
    };
    interface HTMLSkillwalletAuthElement extends Components.SkillwalletAuth, HTMLStencilElement {
    }
    var HTMLSkillwalletAuthElement: {
        prototype: HTMLSkillwalletAuthElement;
        new (): HTMLSkillwalletAuthElement;
    };
    interface HTMLUserDetailsElement extends Components.UserDetails, HTMLStencilElement {
    }
    var HTMLUserDetailsElement: {
        prototype: HTMLUserDetailsElement;
        new (): HTMLUserDetailsElement;
    };
    interface HTMLUserRoleElement extends Components.UserRole, HTMLStencilElement {
    }
    var HTMLUserRoleElement: {
        prototype: HTMLUserRoleElement;
        new (): HTMLUserRoleElement;
    };
    interface HTMLUsersModalElement extends Components.UsersModal, HTMLStencilElement {
    }
    var HTMLUsersModalElement: {
        prototype: HTMLUsersModalElement;
        new (): HTMLUsersModalElement;
    };
    interface HTMLElementTagNameMap {
        "auth-image": HTMLAuthImageElement;
        "login-menu": HTMLLoginMenuElement;
        "new-user": HTMLNewUserElement;
        "qr-code": HTMLQrCodeElement;
        "qr-modal": HTMLQrModalElement;
        "roles-screen-new-user": HTMLRolesScreenNewUserElement;
        "roles-screen-partner": HTMLRolesScreenPartnerElement;
        "skillwallet-auth": HTMLSkillwalletAuthElement;
        "user-details": HTMLUserDetailsElement;
        "user-role": HTMLUserRoleElement;
        "users-modal": HTMLUsersModalElement;
    }
}
declare namespace LocalJSX {
    interface AuthImage {
        "image"?: string;
    }
    interface LoginMenu {
        "isPartner"?: Boolean;
        "onCloseModalOnLogin"?: (event: CustomEvent<any>) => void;
        "onShowNewScreen"?: (event: CustomEvent<any>) => void;
    }
    interface NewUser {
        "community"?: any;
        "isPartner"?: Boolean;
        "onShowUserDetails"?: (event: CustomEvent<Boolean>) => void;
    }
    interface QrCode {
        "colorDark"?: string;
        "colorLight"?: string;
        "contents"?: string;
        "errorCorrectionLevel"?: ErrorCorrectionLevel;
        "margin"?: number;
        "outputMode"?: OutputMode;
        "scale"?: number;
    }
    interface QrModal {
        "community"?: any;
        "textKey"?: string;
    }
    interface RolesScreenNewUser {
        "buttonClass"?: string;
        "community"?: any;
        "isLoading"?: boolean;
        "isPartner"?: Boolean;
        "onShowNewScreen"?: (event: CustomEvent<any>) => void;
        "roleSelected"?: string;
        "skill"?: number;
        "validator"?: string | any;
    }
    interface RolesScreenPartner {
        "buttonClass"?: string;
        "community"?: any;
        "communityAddress"?: string;
        "isLoading"?: boolean;
        "isPartner"?: Boolean;
        "onShowNewScreen"?: (event: CustomEvent<any>) => void;
        "partnersAddress"?: string;
        "roleSelected"?: string;
    }
    interface SkillwalletAuth {
        "allowCreateNewUser"?: string;
        "onOnSkillwalletLogin"?: (event: CustomEvent<Boolean>) => void;
        "onShowLogin"?: (event: CustomEvent<Boolean>) => void;
    }
    interface UserDetails {
        "community"?: any;
        "isPartner"?: Boolean;
        "onShowUserRole"?: (event: CustomEvent<Boolean>) => void;
        "onUploadCompleted"?: (event: CustomEvent<Blob>) => void;
        "onUserDetailsSaved"?: (event: CustomEvent<any>) => void;
        "userUploadedImage"?: any;
        "validator"?: string | any;
    }
    interface UserRole {
        "community"?: any;
        "communityAddress"?: string;
        "isPartner"?: Boolean;
        "partnersAddress"?: string;
        "validator"?: string | any;
    }
    interface UsersModal {
        "isPartner"?: Boolean;
        "onCloseModalOnLogin"?: (event: CustomEvent<any>) => void;
        "onShowLoginMenu"?: (event: CustomEvent<any>) => void;
        "onShowNewScreen"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "auth-image": AuthImage;
        "login-menu": LoginMenu;
        "new-user": NewUser;
        "qr-code": QrCode;
        "qr-modal": QrModal;
        "roles-screen-new-user": RolesScreenNewUser;
        "roles-screen-partner": RolesScreenPartner;
        "skillwallet-auth": SkillwalletAuth;
        "user-details": UserDetails;
        "user-role": UserRole;
        "users-modal": UsersModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "auth-image": LocalJSX.AuthImage & JSXBase.HTMLAttributes<HTMLAuthImageElement>;
            "login-menu": LocalJSX.LoginMenu & JSXBase.HTMLAttributes<HTMLLoginMenuElement>;
            "new-user": LocalJSX.NewUser & JSXBase.HTMLAttributes<HTMLNewUserElement>;
            "qr-code": LocalJSX.QrCode & JSXBase.HTMLAttributes<HTMLQrCodeElement>;
            "qr-modal": LocalJSX.QrModal & JSXBase.HTMLAttributes<HTMLQrModalElement>;
            "roles-screen-new-user": LocalJSX.RolesScreenNewUser & JSXBase.HTMLAttributes<HTMLRolesScreenNewUserElement>;
            "roles-screen-partner": LocalJSX.RolesScreenPartner & JSXBase.HTMLAttributes<HTMLRolesScreenPartnerElement>;
            "skillwallet-auth": LocalJSX.SkillwalletAuth & JSXBase.HTMLAttributes<HTMLSkillwalletAuthElement>;
            "user-details": LocalJSX.UserDetails & JSXBase.HTMLAttributes<HTMLUserDetailsElement>;
            "user-role": LocalJSX.UserRole & JSXBase.HTMLAttributes<HTMLUserRoleElement>;
            "users-modal": LocalJSX.UsersModal & JSXBase.HTMLAttributes<HTMLUsersModalElement>;
        }
    }
}
