/**
 * @packageDocumentation
 * @module api.functional.certifications
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { IIamportResponse } from "./../../structures/IIamportResponse";
import type { IIamportCertification } from "./../../structures/IIamportCertification";

export * as otp from "./otp";

/**
 * 본인인증 정보 열람하기.
 * 
 * `certiciations.at` 은 본인인증 정보를 열람할 때 사용하는 API 함수이다.
 * 
 * 다만 이 API 함수를 통하여 열람한 본인인증 정보 {@link IIamportCertification} 이
 * 곧 OTP 인증까지 마쳐 본인인증을 모두 마친 레코드라는 보장은 없다. 본인인증의 완결
 * 여부는 오직, {@link IIamportCertification.certified} 값을 직접 검사해봐야만 알
 * 수 있기 때문이다.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param imp_uid 대상 본인인증 정보의 {@link IIamportCertification.imp_uid}
 * @returns 본인인증 정보
 * 
 * @controller FakeIamportCertificationsController.at()
 * @path GET /certifications/:imp_uid
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function at
    (
        connection: IConnection,
        imp_uid: string
    ): Promise<at.Output>
{
    return Fetcher.fetch
    (
        connection,
        at.ENCRYPTED,
        at.METHOD,
        at.path(imp_uid)
    );
}
export namespace at
{
    export type Output = Primitive<IIamportResponse<IIamportCertification>>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/certifications/:imp_uid";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(imp_uid: string): string
    {
        return `/certifications/${encodeURIComponent(imp_uid)}`;
    }
}

/**
 * 본인인증 정보 삭제하기.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param imp_uid 대상 본인인증 정보의 {@link IIamportCertification.imp_uid}
 * @returns 삭제된 본인인증 정보
 * 
 * @controller FakeIamportCertificationsController.erase()
 * @path DELETE /certifications/:imp_uid
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function erase
    (
        connection: IConnection,
        imp_uid: string
    ): Promise<erase.Output>
{
    return Fetcher.fetch
    (
        connection,
        erase.ENCRYPTED,
        erase.METHOD,
        erase.path(imp_uid)
    );
}
export namespace erase
{
    export type Output = Primitive<IIamportResponse<IIamportCertification>>;

    export const METHOD = "DELETE" as const;
    export const PATH: string = "/certifications/:imp_uid";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(imp_uid: string): string
    {
        return `/certifications/${encodeURIComponent(imp_uid)}`;
    }
}