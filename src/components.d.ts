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
    interface NewUser {
        "community": any;
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
    interface SkillwalletAuth {
    }
    interface UserDetails {
        "community": any;
    }
    interface UserRole {
        "community": any;
        "skill": number;
    }
    interface UsersModal {
        "community": any;
    }
}
declare global {
    interface HTMLAuthImageElement extends Components.AuthImage, HTMLStencilElement {
    }
    var HTMLAuthImageElement: {
        prototype: HTMLAuthImageElement;
        new (): HTMLAuthImageElement;
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
        "new-user": HTMLNewUserElement;
        "qr-code": HTMLQrCodeElement;
        "qr-modal": HTMLQrModalElement;
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
    interface NewUser {
        "community"?: any;
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
    interface SkillwalletAuth {
        "onShowLogin"?: (event: CustomEvent<Boolean>) => void;
    }
    interface UserDetails {
        "community"?: any;
        "onOnUploadCompleted"?: (event: CustomEvent<Blob>) => void;
        "onShowUserRole"?: (event: CustomEvent<Boolean>) => void;
    }
    interface UserRole {
        "community"?: any;
        "onShowUserQR"?: (event: CustomEvent<String>) => void;
        "skill"?: number;
    }
    interface UsersModal {
        "community"?: any;
        "onShowNewUser"?: (event: CustomEvent<Boolean>) => void;
    }
    interface IntrinsicElements {
        "auth-image": AuthImage;
        "new-user": NewUser;
        "qr-code": QrCode;
        "qr-modal": QrModal;
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
            "new-user": LocalJSX.NewUser & JSXBase.HTMLAttributes<HTMLNewUserElement>;
            "qr-code": LocalJSX.QrCode & JSXBase.HTMLAttributes<HTMLQrCodeElement>;
            "qr-modal": LocalJSX.QrModal & JSXBase.HTMLAttributes<HTMLQrModalElement>;
            "skillwallet-auth": LocalJSX.SkillwalletAuth & JSXBase.HTMLAttributes<HTMLSkillwalletAuthElement>;
            "user-details": LocalJSX.UserDetails & JSXBase.HTMLAttributes<HTMLUserDetailsElement>;
            "user-role": LocalJSX.UserRole & JSXBase.HTMLAttributes<HTMLUserRoleElement>;
            "users-modal": LocalJSX.UsersModal & JSXBase.HTMLAttributes<HTMLUsersModalElement>;
        }
    }
}
