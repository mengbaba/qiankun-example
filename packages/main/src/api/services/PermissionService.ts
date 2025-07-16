/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePermissionDto } from '../models/CreatePermissionDto';
import type { UpdatePermissionDto } from '../models/UpdatePermissionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PermissionService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static permissionControllerCreate(
        requestBody: CreatePermissionDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/permission/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static permissionControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permission/list',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static permissionControllerListTree(): CancelablePromise<any> {

        return __request(OpenAPI, {
            method: 'GET',
            url: '/permission/listTree',
        });
    }
    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static permissionControllerFindOne(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permission/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static permissionControllerUpdate(
        requestBody: UpdatePermissionDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/permission/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static permissionControllerRemove(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permission/remove/{id}',
            path: {
                'id': id,
            },
        });
    }
}
