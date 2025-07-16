/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserVO } from './UserVO';
export type UserListVO = {
    /**
     * code
     */
    code: number;
    /**
     * 是否成功
     */
    success: boolean;
    /**
     * 描述信息
     */
    message: string;
    /**
     * 数据
     */
    readonly data: Array<UserVO>;
};

