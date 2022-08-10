/// <reference types="node" />
import { File } from "../../file/file";
export declare enum PrettifyType {
    NONE = "",
    WITH_2_BLANKS = "  ",
    WITH_4_BLANKS = "    ",
    WITH_TAB = "\t"
}
export declare class Packer {
    static toBuffer(file: File, prettify?: boolean | PrettifyType): Promise<Buffer>;
    static toBase64String(file: File, prettify?: boolean | PrettifyType): Promise<string>;
    static toBlob(file: File, prettify?: boolean | PrettifyType): Promise<Blob>;
    private static readonly compiler;
}
