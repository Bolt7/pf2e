import { ConsumablePF2e } from "@item";
import { PhysicalItemSheetPF2e } from "@item/physical/sheet";
import { PhysicalItemSheetData } from "@item/sheet/data-types";

export class ConsumableSheetPF2e extends PhysicalItemSheetPF2e<ConsumablePF2e> {
    override async getData(options?: Partial<DocumentSheetOptions>): Promise<ConsumableSheetData> {
        return {
            ...(await super.getData(options)),
            hasDetails: true,
            hasSidebar: true,
            consumableTypes: CONFIG.PF2E.consumableTypes,
        };
    }
}

interface ConsumableSheetData extends PhysicalItemSheetData<ConsumablePF2e> {
    consumableTypes: ConfigPF2e["PF2E"]["consumableTypes"];
}
