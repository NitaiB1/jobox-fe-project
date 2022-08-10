import { SpaceType } from "../../../file/space-type";
import { XmlAttributeComponent } from "../../../file/xml-components";
export declare class TextAttributes extends XmlAttributeComponent<{
    readonly space: SpaceType;
}> {
    protected readonly xmlKeys: {
        space: string;
    };
}
