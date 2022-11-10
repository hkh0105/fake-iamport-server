/**
 * @packageDocumentation
 * @module api.functional.payments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { IIamportResponse } from "./../../structures/IIamportResponse";
import type { IIamportPayment } from "./../../structures/IIamportPayment";
import type { IIamportPaymentCancel } from "./../../structures/IIamportPaymentCancel";

/**
 * 결제 기록 열람하기.
 * 
 * 아임포트를 통하여 발생한 결제 기록을 열람한다.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param imp_uid 대상 결제 기록의 {@link IIamportPayment.imp_uid}
 * @returns 결제 정보
 * @author Jeongho Nam - https://github.com/samchon
 * 
 * @controller FakeIamportPaymentsController.at()
 * @path GET /payments/:imp_uid
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
    export type Output = Primitive<IIamportResponse<IIamportPayment>>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/payments/:imp_uid";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(imp_uid: string): string
    {
        return `/payments/${encodeURIComponent(imp_uid)}`;
    }
}

/**
 * 결제 취소하기.
 * 
 * 만약 가상 계좌를 통한 결제였다면, 반드시 환불 계좌 정보를 입력해줘야 한다.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param input 결제 취소 입력 정보
 * @returns 취소된 결제 정보
 * @author Jeongho Nam - https://github.com/samchon
 * 
 * @controller FakeIamportPaymentsController.cancel()
 * @path POST /payments/cancel
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function cancel
    (
        connection: IConnection,
        input: Primitive<cancel.Input>
    ): Promise<cancel.Output>
{
    return Fetcher.fetch
    (
        connection,
        cancel.ENCRYPTED,
        cancel.METHOD,
        cancel.path(),
        input
    );
}
export namespace cancel
{
    export type Input = Primitive<IIamportPaymentCancel.IStore>;
    export type Output = Primitive<IIamportResponse<IIamportPayment>>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/payments/cancel";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/payments/cancel`;
    }
}