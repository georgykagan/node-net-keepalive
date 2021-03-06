// Type definitions for net-keepalive
// Project: https://github.com/hertzg/node-net-keepalive
// Definitions by: George Kotchlamazashvili
// Definitions: https://github.com/hertzg/node-net-keepalive

/// <reference types="node" />

import * as net from "net";

export type NodeJSSocketWithFileDescriptor = net.Socket | { _handle: { _fd: number } }

export function setKeepAliveInterval(socket: NodeJSSocketWithFileDescriptor, intvl: number): number

export function getKeepAliveInterval(socket: NodeJSSocketWithFileDescriptor): number

export function setKeepAliveProbes(socket: NodeJSSocketWithFileDescriptor, cnt: number): number

export function getKeepAliveProbes(socket: NodeJSSocketWithFileDescriptor): number
